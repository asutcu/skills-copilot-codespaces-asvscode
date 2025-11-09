"use client";

type HarfDurumu = "dogru" | "yanlis-yer" | "yok" | "bos";

interface KlavyeProps {
  onHarfTikla: (harf: string) => void;
  onSil: () => void;
  onGonder: () => void;
  harfDurumlari: Map<string, HarfDurumu>;
  devre: boolean;
}

const KLAVYE_SATIRLARI = [
  ["e", "r", "t", "y", "u", "ı", "o", "p", "ğ", "ü"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ş", "i"],
  ["z", "c", "v", "b", "n", "m", "ö", "ç"],
];

export function Klavye({
  onHarfTikla,
  onSil,
  onGonder,
  harfDurumlari,
  devre,
}: KlavyeProps) {
  const getTusDurum = (harf: string) => {
    const durum = harfDurumlari.get(harf);
    switch (durum) {
      case "dogru":
        return "bg-green-500 text-white hover:bg-green-600";
      case "yanlis-yer":
        return "bg-yellow-500 text-white hover:bg-yellow-600";
      case "yok":
        return "bg-gray-400 text-white hover:bg-gray-500";
      default:
        return "bg-gray-200 text-gray-800 hover:bg-gray-300";
    }
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow-lg">
      <div className="space-y-2">
        {KLAVYE_SATIRLARI.map((satir, satirIndex) => (
          <div key={satirIndex} className="flex gap-1 justify-center">
            {satirIndex === 2 && (
              <button
                onClick={onGonder}
                disabled={devre}
                className="px-3 py-4 bg-blue-500 text-white text-xs font-semibold rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform active:scale-95"
              >
                GİR
              </button>
            )}
            {satir.map((harf) => (
              <button
                key={harf}
                onClick={() => onHarfTikla(harf)}
                disabled={devre}
                className={`
                  w-9 h-12 text-sm font-semibold rounded-lg uppercase
                  transition-all transform active:scale-95
                  disabled:opacity-50 disabled:cursor-not-allowed
                  ${getTusDurum(harf)}
                `}
              >
                {harf}
              </button>
            ))}
            {satirIndex === 2 && (
              <button
                onClick={onSil}
                disabled={devre}
                className="px-3 py-4 bg-red-500 text-white text-xs font-semibold rounded-lg hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform active:scale-95"
              >
                SİL
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
