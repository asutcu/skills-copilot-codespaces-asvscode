"use client";

import { LevelInfo } from "@/lib/gameLogic";

interface LevelDisplayProps {
  levelInfo: LevelInfo;
  totalWins: number;
  totalGames: number;
  currentStreak: number;
  bestStreak: number;
  hintTimer: number;
  revealedHints: Set<number>;
}

export function LevelDisplay({
  levelInfo,
  totalWins,
  totalGames,
  currentStreak,
  bestStreak,
  hintTimer,
  revealedHints,
}: LevelDisplayProps) {
  const winRate = totalGames > 0 ? Math.round((totalWins / totalGames) * 100) : 0;
  const nextHintIn = levelInfo.hintInterval - (hintTimer % levelInfo.hintInterval);
  const showHintTimer = hintTimer > 0 && revealedHints.size < levelInfo.wordLength;

  return (
    <div className="mb-6 space-y-4">
      {/* Seviye Bilgisi */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Seviye {levelInfo.level}
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              {levelInfo.wordLength} harfli kelime • {levelInfo.maxAttempts} deneme hakkı
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-purple-600">{currentStreak}</div>
            <div className="text-xs text-gray-500">Seri</div>
          </div>
        </div>

        {/* İpucu Zamanlayıcı */}
        {showHintTimer && (
          <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                💡 Sonraki ipucu
              </span>
              <span className="text-sm font-bold text-purple-600">
                {nextHintIn}s
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                style={{
                  width: `${((levelInfo.hintInterval - nextHintIn) / levelInfo.hintInterval) * 100}%`,
                }}
              />
            </div>
            {revealedHints.size > 0 && (
              <p className="text-xs text-gray-500 mt-2">
                {revealedHints.size} harf açıldı
              </p>
            )}
          </div>
        )}
      </div>

      {/* İstatistikler */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white rounded-xl shadow p-4 text-center">
          <div className="text-2xl font-bold text-green-600">{totalWins}</div>
          <div className="text-xs text-gray-500 mt-1">Kazanılan</div>
        </div>
        <div className="bg-white rounded-xl shadow p-4 text-center">
          <div className="text-2xl font-bold text-blue-600">{winRate}%</div>
          <div className="text-xs text-gray-500 mt-1">Başarı</div>
        </div>
        <div className="bg-white rounded-xl shadow p-4 text-center">
          <div className="text-2xl font-bold text-purple-600">{bestStreak}</div>
          <div className="text-xs text-gray-500 mt-1">En İyi Seri</div>
        </div>
      </div>
    </div>
  );
}
