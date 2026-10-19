# IELTS Trainer

Academic IELTS (hedef 6.5, her bölüm ≥6.0) için tek sayfalık uygulama — tamamen statik (HTML/CSS/JS), sunucusuz çalışır.

**Canlı site:** https://onuursalci.github.io/ielts-trainer/

## İçerik
- **11 mock test** (4 bölüm, her bölüm kendine özgü — tekrar yok)
- **45 bölüm:** 11 dinleme (ses kayıtlarıyla), 11 okuma, 11 yazma, 12 konuşma
- Soru bankası, bölüm testleri, 8 haftalık çalışma planı, sonuç ekranı ve test kayıtları
- **Profil sistemi:** tarayıcıda kalıcı veri + `.json` yedek indir/yükle
- TR/EN arayüz (sınav içeriği her zaman İngilizce)

## Yerelde çalıştırma
`index.html`'e çift tıkla — ya da:
```
python -m http.server 8137
```

## Güncelleme
```
git add -A
git commit -m "değişiklik"
git push
```
GitHub Pages ~1 dakika içinde otomatik yayınlar.
