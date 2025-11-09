// Kelimeler harf sayısına göre organize edilmiştir
export const KELIMELER_BY_LENGTH: Record<number, string[]> = {
  4: [
    // Kolay 4 harfli kelimeler
    "anne", "baba", "dede", "nine", "kedi", "köpek", "kuş", "balık",
    "ağaç", "çiçek", "güneş", "yağmur", "deniz", "göl", "dağ", "taş",
    "ev", "okul", "park", "yol", "araba", "otobüs", "tren", "uçak",
    "elma", "armut", "üzüm", "kiraz", "erik", "kayısı", "şeftali", "muz",
    "ekmek", "süt", "peynir", "yumurta", "bal", "reçel", "zeytin", "yoğurt",
    "masa", "sandalye", "koltuk", "yatak", "dolap", "kapı", "pencere", "duvar",
    "kitap", "defter", "kalem", "silgi", "cetvel", "çanta", "oyuncak", "top",
    "gözlük", "saat", "telefon", "bilgisayar", "televizyon", "radyo", "kamera", "fotoğraf",
    "gömlek", "pantolon", "etek", "elbise", "ayakkabı", "çorap", "şapka", "eldiven",
    "bahar", "yaz", "sonbahar", "kış", "sabah", "öğle", "akşam", "gece",
    "pazartesi", "salı", "çarşamba", "perşembe", "cuma", "cumartesi", "pazar", "hafta",
    "ocak", "şubat", "mart", "nisan", "mayıs", "haziran", "temmuz", "ağustos",
    "kırmızı", "mavi", "yeşil", "sarı", "siyah", "beyaz", "turuncu", "mor",
    "bir", "iki", "üç", "dört", "beş", "altı", "yedi", "sekiz",
    "büyük", "küçük", "uzun", "kısa", "yeni", "eski", "iyi", "kötü",
  ],
  5: [
    // 5 harfli kelimeler
    "araba", "bahçe", "çanta", "deniz", "elmas", "fırın", "güneş", "haber",
    "ışık", "jilet", "kablo", "limon", "meyve", "neden", "okuma", "pasta",
    "renk", "sabah", "tablo", "uzman", "vakit", "yemek", "zaman", "açık",
    "beyaz", "çiçek", "dünya", "evren", "fikir", "gözlük", "hayat", "insan",
    "kalem", "lamba", "mutlu", "nesne", "oyun", "proje", "resim", "sınıf",
    "tatlı", "ülke", "video", "yazı", "zemin", "akıl", "bölüm", "çevre",
    "ekip", "film", "görev", "hızlı", "içeri", "liste", "marka", "nokta",
    "ödül", "plan", "rüya", "soru", "takım", "uygun", "veri", "yıldız",
    "aile", "banka", "çocuk", "doğru", "fiyat", "giriş", "işlem", "kural",
    "mesaj", "oran", "pazar", "rapor", "sayfa", "tarih", "ürün", "vergi",
    "anlam", "bilgi", "çözüm", "değer", "etki", "fark", "güzel", "hata",
    "ilgi", "konu", "model", "nöbet", "olay", "para", "risk", "sonuç",
    "temel", "uzak", "yeni", "zorluk", "adres", "bilet", "cevap", "daire",
  ],
  6: [
    // 6 harfli kelimeler
    "anahtar", "bardak", "çikolata", "defter", "elma", "fırsat", "gazete", "havuç",
    "ışıldak", "jandarma", "kahve", "lütfen", "merhaba", "numara", "okul", "pencere",
    "radyo", "sağlık", "tuvalet", "uçurtma", "vapur", "yastık", "zeytin", "açıklama",
    "bilgisayar", "çarşamba", "düşünce", "eğitim", "fotoğraf", "gömlek", "hizmet", "içecek",
    "kamera", "lokanta", "müzik", "nefes", "öğrenci", "patlıcan", "restorant", "sınav",
    "telefon", "uyarı", "vitrin", "yemek", "ziyaret", "arama", "bölge", "çalışma",
    "dergi", "eğlence", "fatura", "giriş", "hesap", "işaret", "koltuk", "liman",
    "market", "neden", "otopark", "paket", "rehber", "sistem", "trafik", "uyum",
    "vagon", "yönetim", "zaman", "adalet", "bağlantı", "çeşit", "duygu", "eleman",
  ],
  7: [
    // 7 harfli kelimeler
    "anahtar", "bilgisayar", "çikolata", "domates", "eğitim", "fotoğraf", "gazete", "hastane",
    "ışıldak", "jandarma", "kahvaltı", "lokanta", "merhaba", "numara", "okul", "pencere",
    "radyo", "sağlık", "tuvalet", "uçurtma", "vapur", "yastık", "zeytin", "açıklama",
    "bilgisayar", "çarşamba", "düşünce", "eğitim", "fotoğraf", "gömlek", "hizmet", "içecek",
    "kamera", "lokanta", "müzik", "nefes", "öğrenci", "patlıcan", "restorant", "sınav",
    "telefon", "uyarı", "vitrin", "yemek", "ziyaret", "arama", "bölge", "çalışma",
    "dergi", "eğlence", "fatura", "giriş", "hesap", "işaret", "koltuk", "liman",
    "market", "neden", "otopark", "paket", "rehber", "sistem", "trafik", "uyum",
    "vagon", "yönetim", "zaman", "adalet", "bağlantı", "çeşit", "duygu", "eleman",
  ],
  8: [
    // 8 harfli kelimeler
    "anahtar", "bilgisayar", "çikolata", "domates", "eğitim", "fotoğraf", "gazete", "hastane",
    "ışıldak", "jandarma", "kahvaltı", "lokanta", "merhaba", "numara", "okul", "pencere",
    "radyo", "sağlık", "tuvalet", "uçurtma", "vapur", "yastık", "zeytin", "açıklama",
    "bilgisayar", "çarşamba", "düşünce", "eğitim", "fotoğraf", "gömlek", "hizmet", "içecek",
    "kamera", "lokanta", "müzik", "nefes", "öğrenci", "patlıcan", "restorant", "sınav",
    "telefon", "uyarı", "vitrin", "yemek", "ziyaret", "arama", "bölge", "çalışma",
    "dergi", "eğlence", "fatura", "giriş", "hesap", "işaret", "koltuk", "liman",
    "market", "neden", "otopark", "paket", "rehber", "sistem", "trafik", "uyum",
    "vagon", "yönetim", "zaman", "adalet", "bağlantı", "çeşit", "duygu", "eleman",
  ],
  9: [
    // 9 harfli kelimeler
    "anahtar", "bilgisayar", "çikolata", "domates", "eğitim", "fotoğraf", "gazete", "hastane",
    "ışıldak", "jandarma", "kahvaltı", "lokanta", "merhaba", "numara", "okul", "pencere",
    "radyo", "sağlık", "tuvalet", "uçurtma", "vapur", "yastık", "zeytin", "açıklama",
    "bilgisayar", "çarşamba", "düşünce", "eğitim", "fotoğraf", "gömlek", "hizmet", "içecek",
    "kamera", "lokanta", "müzik", "nefes", "öğrenci", "patlıcan", "restorant", "sınav",
    "telefon", "uyarı", "vitrin", "yemek", "ziyaret", "arama", "bölge", "çalışma",
    "dergi", "eğlence", "fatura", "giriş", "hesap", "işaret", "koltuk", "liman",
    "market", "neden", "otopark", "paket", "rehber", "sistem", "trafik", "uyum",
    "vagon", "yönetim", "zaman", "adalet", "bağlantı", "çeşit", "duygu", "eleman",
  ],
  10: [
    // 10 harfli kelimeler
    "anahtar", "bilgisayar", "çikolata", "domates", "eğitim", "fotoğraf", "gazete", "hastane",
    "ışıldak", "jandarma", "kahvaltı", "lokanta", "merhaba", "numara", "okul", "pencere",
    "radyo", "sağlık", "tuvalet", "uçurtma", "vapur", "yastık", "zeytin", "açıklama",
    "bilgisayar", "çarşamba", "düşünce", "eğitim", "fotoğraf", "gömlek", "hizmet", "içecek",
    "kamera", "lokanta", "müzik", "nefes", "öğrenci", "patlıcan", "restorant", "sınav",
    "telefon", "uyarı", "vitrin", "yemek", "ziyaret", "arama", "bölge", "çalışma",
    "dergi", "eğlence", "fatura", "giriş", "hesap", "işaret", "koltuk", "liman",
    "market", "neden", "otopark", "paket", "rehber", "sistem", "trafik", "uyum",
    "vagon", "yönetim", "zaman", "adalet", "bağlantı", "çeşit", "duygu", "eleman",
  ],
};

// Geriye dönük uyumluluk için
export const KELIMELER = KELIMELER_BY_LENGTH[5];
