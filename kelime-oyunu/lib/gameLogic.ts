// Oyun seviyesi ve zorluk mantığı

export interface LevelInfo {
  level: number;
  wordLength: number;
  maxAttempts: number;
  hintInterval: number; // saniye cinsinden
}

/**
 * Seviyeye göre kelime uzunluğunu hesaplar
 * Seviye 1-10: 4 harf
 * Seviye 11-20: 5 harf
 * Seviye 21-30: 6 harf
 * ...
 * Seviye 61+: 10 harf (maksimum)
 */
export function getWordLengthForLevel(level: number): number {
  if (level <= 10) return 4;
  if (level <= 20) return 5;
  if (level <= 30) return 6;
  if (level <= 40) return 7;
  if (level <= 50) return 8;
  if (level <= 60) return 9;
  return 10; // Maksimum 10 harf
}

/**
 * Seviyeye göre maksimum deneme hakkını hesaplar
 * Zorluk arttıkça deneme hakkı azalır
 */
export function getMaxAttemptsForLevel(level: number): number {
  const wordLength = getWordLengthForLevel(level);
  
  // Temel deneme hakkı: kelime uzunluğu + 2
  let baseAttempts = wordLength + 2;
  
  // Yüksek seviyelerde deneme hakkını azalt
  if (level > 60) {
    // Her 10 seviyede 1 deneme hakkı azalt (minimum 6)
    const reduction = Math.floor((level - 60) / 10);
    baseAttempts = Math.max(6, baseAttempts - reduction);
  }
  
  return baseAttempts;
}

/**
 * Seviyeye göre ipucu aralığını hesaplar (saniye)
 * Zorluk arttıkça ipucu süresi uzar
 */
export function getHintIntervalForLevel(level: number): number {
  // Temel ipucu süresi: 15 saniye
  let baseInterval = 15;
  
  // Yüksek seviyelerde ipucu süresini artır
  if (level > 30) {
    // Her 10 seviyede 5 saniye ekle (maksimum 30 saniye)
    const addition = Math.floor((level - 30) / 10) * 5;
    baseInterval = Math.min(30, baseInterval + addition);
  }
  
  return baseInterval;
}

/**
 * Seviye bilgilerini döndürür
 */
export function getLevelInfo(level: number): LevelInfo {
  return {
    level,
    wordLength: getWordLengthForLevel(level),
    maxAttempts: getMaxAttemptsForLevel(level),
    hintInterval: getHintIntervalForLevel(level),
  };
}

/**
 * Oyun istatistikleri için localStorage key'leri
 */
export const STORAGE_KEYS = {
  CURRENT_LEVEL: 'kelime-oyunu-level',
  TOTAL_WINS: 'kelime-oyunu-wins',
  TOTAL_GAMES: 'kelime-oyunu-games',
  BEST_STREAK: 'kelime-oyunu-streak',
  CURRENT_STREAK: 'kelime-oyunu-current-streak',
};

/**
 * Oyun istatistiklerini yükler
 */
export function loadGameStats() {
  if (typeof window === 'undefined') {
    return {
      currentLevel: 1,
      totalWins: 0,
      totalGames: 0,
      bestStreak: 0,
      currentStreak: 0,
    };
  }

  return {
    currentLevel: parseInt(localStorage.getItem(STORAGE_KEYS.CURRENT_LEVEL) || '1'),
    totalWins: parseInt(localStorage.getItem(STORAGE_KEYS.TOTAL_WINS) || '0'),
    totalGames: parseInt(localStorage.getItem(STORAGE_KEYS.TOTAL_GAMES) || '0'),
    bestStreak: parseInt(localStorage.getItem(STORAGE_KEYS.BEST_STREAK) || '0'),
    currentStreak: parseInt(localStorage.getItem(STORAGE_KEYS.CURRENT_STREAK) || '0'),
  };
}

/**
 * Oyun istatistiklerini kaydeder
 */
export function saveGameStats(stats: {
  currentLevel: number;
  totalWins: number;
  totalGames: number;
  bestStreak: number;
  currentStreak: number;
}) {
  if (typeof window === 'undefined') return;

  localStorage.setItem(STORAGE_KEYS.CURRENT_LEVEL, stats.currentLevel.toString());
  localStorage.setItem(STORAGE_KEYS.TOTAL_WINS, stats.totalWins.toString());
  localStorage.setItem(STORAGE_KEYS.TOTAL_GAMES, stats.totalGames.toString());
  localStorage.setItem(STORAGE_KEYS.BEST_STREAK, stats.bestStreak.toString());
  localStorage.setItem(STORAGE_KEYS.CURRENT_STREAK, stats.currentStreak.toString());
}

/**
 * Seviye atlandığında çağrılır
 */
export function advanceLevel(currentLevel: number): number {
  return currentLevel + 1;
}

/**
 * Oyun kazanıldığında istatistikleri günceller
 */
export function updateStatsOnWin(stats: ReturnType<typeof loadGameStats>) {
  const newStreak = stats.currentStreak + 1;
  return {
    ...stats,
    currentLevel: advanceLevel(stats.currentLevel),
    totalWins: stats.totalWins + 1,
    totalGames: stats.totalGames + 1,
    currentStreak: newStreak,
    bestStreak: Math.max(stats.bestStreak, newStreak),
  };
}

/**
 * Oyun kaybedildiğinde istatistikleri günceller
 */
export function updateStatsOnLoss(stats: ReturnType<typeof loadGameStats>) {
  return {
    ...stats,
    totalGames: stats.totalGames + 1,
    currentStreak: 0,
  };
}
