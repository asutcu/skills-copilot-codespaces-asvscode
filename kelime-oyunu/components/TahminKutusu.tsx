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
}

export function TahminKutusu({ tahmin, aktifTahmin = "", aktifMi }: TahminKutusuProps) {
  const harfler = tahmin
    ? tahmin
    : Array.from({ length: 5 }).map((_, index) => ({
        harf: aktifTahmin[index] || "",
        durum: "bos" as HarfDurumu,
      }));

  const getDurumRenk = (durum: HarfDurumu) => {
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

  return (
    <div className="flex gap-2 justify-center">
      {harfler.map((item, index) => (
        <div
          key={index}
          className={`
            w-14 h-14 flex items-center justify-center text-2xl font-bold uppercase
            border-2 rounded-lg transition-all duration-300 transform
            ${getDurumRenk(item.durum)}
            ${aktifMi && item.harf ? "scale-110" : ""}
            ${!item.harf && aktifMi ? "border-purple-400" : ""}
          `}
        >
          {item.harf}
        </div>
      ))}
    </div>
  );
}
