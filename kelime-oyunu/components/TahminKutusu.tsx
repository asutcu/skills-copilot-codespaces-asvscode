"use client";

type HarfDurumu = "dogru" | "yanlis-yer" | "yok" | "bos";

interface Tahmin {
  harf: string;
  durum: HarfDurumu;
}

interface TahminKutusuProps {
  tahmin?: Tahmin[];
  aktifTahmin?: string;
  aktifMi: boolean;
  wordLength: number;
  revealedHints?: Set<number>;
}

export function TahminKutusu({ 
  tahmin, 
  aktifTahmin = "", 
  aktifMi, 
  wordLength,
  revealedHints = new Set(),
}: TahminKutusuProps) {
  const harfler = tahmin
    ? tahmin
    : Array.from({ length: wordLength }).map((_, index) => ({
        harf: aktifTahmin[index] || "",
        durum: "bos" as HarfDurumu,
      }));

  const getDurumRenk = (durum: HarfDurumu, index: number) => {
    // İpucu olarak açılan harfler için özel stil
    if (revealedHints.has(index) && durum === "bos") {
      return "bg-blue-100 border-blue-400 text-blue-600";
    }
    
    switch (durum) {
      case "dogru":
        return "bg-green-500 border-green-500 text-white";
      case "yanlis-yer":
        return "bg-yellow-500 border-yellow-500 text-white";
      case "yok":
        return "bg-gray-400 border-gray-400 text-white";
      default:
        return "bg-white border-gray-300 text-gray-800";
    }
  };

  // Kelime uzunluğuna göre kutu boyutunu ayarla
  const getBoxSize = () => {
    if (wordLength <= 5) return "w-14 h-14 text-2xl";
    if (wordLength <= 7) return "w-12 h-12 text-xl";
    if (wordLength <= 9) return "w-10 h-10 text-lg";
    return "w-9 h-9 text-base";
  };

  return (
    <div className="flex gap-2 justify-center">
      {harfler.map((item, index) => (
        <div
          key={index}
          className={`
            ${getBoxSize()} flex items-center justify-center font-bold uppercase
            border-2 rounded-lg transition-all duration-300 transform
            ${getDurumRenk(item.durum, index)}
            ${aktifMi && item.harf ? "scale-110" : ""}
            ${!item.harf && aktifMi ? "border-purple-400" : ""}
            ${revealedHints.has(index) && !item.harf ? "animate-pulse" : ""}
          `}
        >
          {item.harf}
        </div>
      ))}
    </div>
  );
}
