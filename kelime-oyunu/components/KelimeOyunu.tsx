"use client";

import { useState, useEffect } from "react";
import { KELIMELER } from "@/lib/kelimeler";
import { TahminKutusu } from "./TahminKutusu";
import { Klavye } from "./Klavye";

type HarfDurumu = "dogru" | "yanlis-yer" | "yok" | "bos";

interface Tahmin {
  harf: string;
  durum: HarfDurumu;
}

export function KelimeOyunu() {
  const [hedefKelime, setHedefKelime] = useState("");
  const [tahminler, setTahminler] = useState<Tahmin[][]>([]);
  const [aktifTahmin, setAktifTahmin] = useState("");
  const [oyunBitti, setOyunBitti] = useState(false);
  const [kazandi, setKazandi] = useState(false);
  const [harfDurumlari, setHarfDurumlari] = useState<Map<string, HarfDurumu>>(
    new Map()
  );

  useEffect(() => {
    yeniOyun();
  }, []);

  const yeniOyun = () => {
    const rastgeleKelime =
      KELIMELER[Math.floor(Math.random() * KELIMELER.length)];
    setHedefKelime(rastgeleKelime);
    setTahminler([]);
    setAktifTahmin("");
    setOyunBitti(false);
    setKazandi(false);
    setHarfDurumlari(new Map());
  };

  const harfEkle = (harf: string) => {
    if (oyunBitti || aktifTahmin.length >= 5) return;
    setAktifTahmin(aktifTahmin + harf);
  };

  const harfSil = () => {
    if (oyunBitti) return;
    setAktifTahmin(aktifTahmin.slice(0, -1));
  };

  const tahminiGonder = () => {
    if (oyunBitti || aktifTahmin.length !== 5) return;

    const yeniTahmin: Tahmin[] = [];
    const yeniHarfDurumlari = new Map(harfDurumlari);
    const hedefHarfler = hedefKelime.split("");
    const tahminHarfler = aktifTahmin.split("");

    // İlk geçiş: Doğru yerdeki harfleri işaretle
    const kullanildi = new Array(5).fill(false);
    tahminHarfler.forEach((harf, index) => {
      if (harf === hedefHarfler[index]) {
        yeniTahmin.push({ harf, durum: "dogru" });
        kullanildi[index] = true;
        yeniHarfDurumlari.set(harf, "dogru");
      } else {
        yeniTahmin.push({ harf, durum: "bos" });
      }
    });

    // İkinci geçiş: Yanlış yerdeki harfleri işaretle
    tahminHarfler.forEach((harf, index) => {
      if (yeniTahmin[index].durum === "bos") {
        const hedefIndex = hedefHarfler.findIndex(
          (h, i) => h === harf && !kullanildi[i]
        );
        if (hedefIndex !== -1) {
          yeniTahmin[index] = { harf, durum: "yanlis-yer" };
          kullanildi[hedefIndex] = true;
          if (yeniHarfDurumlari.get(harf) !== "dogru") {
            yeniHarfDurumlari.set(harf, "yanlis-yer");
          }
        } else {
          yeniTahmin[index] = { harf, durum: "yok" };
          if (!yeniHarfDurumlari.has(harf)) {
            yeniHarfDurumlari.set(harf, "yok");
          }
        }
      }
    });

    const yeniTahminler = [...tahminler, yeniTahmin];
    setTahminler(yeniTahminler);
    setHarfDurumlari(yeniHarfDurumlari);

    if (aktifTahmin === hedefKelime) {
      setKazandi(true);
      setOyunBitti(true);
    } else if (yeniTahminler.length >= 6) {
      setOyunBitti(true);
    }

    setAktifTahmin("");
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (oyunBitti) return;

      const turkceHarfler = "abcçdefgğhıijklmnoöprsştuüvyz";
      const harf = e.key.toLowerCase();

      if (turkceHarfler.includes(harf)) {
        harfEkle(harf);
      } else if (e.key === "Backspace") {
        harfSil();
      } else if (e.key === "Enter") {
        tahminiGonder();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [aktifTahmin, oyunBitti]);

  return (
    <div className="max-w-lg mx-auto">
      <div className="mb-8 space-y-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <TahminKutusu
            key={index}
            tahmin={tahminler[index]}
            aktifTahmin={index === tahminler.length ? aktifTahmin : ""}
            aktifMi={index === tahminler.length}
          />
        ))}
      </div>

      {oyunBitti && (
        <div className="mb-6 p-6 bg-white rounded-2xl shadow-lg text-center">
          {kazandi ? (
            <div>
              <h2 className="text-3xl font-bold text-green-600 mb-2">
                🎉 Tebrikler!
              </h2>
              <p className="text-gray-600 mb-4">
                Kelimeyi {tahminler.length} denemede buldunuz!
              </p>
            </div>
          ) : (
            <div>
              <h2 className="text-3xl font-bold text-red-600 mb-2">
                😔 Oyun Bitti
              </h2>
              <p className="text-gray-600 mb-4">
                Doğru kelime: <span className="font-bold text-purple-600 uppercase">{hedefKelime}</span>
              </p>
            </div>
          )}
          <button
            onClick={yeniOyun}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Yeni Oyun
          </button>
        </div>
      )}

      <Klavye
        onHarfTikla={harfEkle}
        onSil={harfSil}
        onGonder={tahminiGonder}
        harfDurumlari={harfDurumlari}
        devre={oyunBitti}
      />
    </div>
  );
}
