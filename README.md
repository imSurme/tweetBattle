# 🔥 Tweet Battle

Tweet etkileşimlerini tahmin etme oyunu! Hangi tweet daha çok beğeni, retweet ve görüntülenme aldı?

## 🎮 Nasıl Oynanır?

1. Zorluk seviyesi seç (Kolay/Orta/Zor)
2. Üstteki tweet'in istatistiklerini gör
3. Alttaki tweet'in istatistiklerini tahmin et (Yüksek/Düşük)
4. Her istatistik (beğeni, retweet, görüntülenme) için ayrı tahmin yap
5. Tüm 3 istatistiği doğru bilince combo bonusu kazan!

## ✨ Özellikler

- 🔥 **Streak Sistemi**: Ardışık doğru cevaplarda bonus puanlar
- 📊 **3 Zorluk Seviyesi**: Kolay, Orta, Zor
- 🌍 **Çoklu Dil**: Türkçe ve İngilizce desteği
- 📈 **En Yüksek Skor**: Kendi rekorunu kır
- 🎨 **Modern Tasarım**: Responsive (mobil öncelikli) tasarım

## 🚀 Yerel Geliştirme

### Gereksinimler
- Python 3.x (sadece lokal test için)
- Modern web tarayıcısı

### Kurulum

1. **Repository'yi klonlayın:**
```bash
git clone https://github.com/kullanici-adi/tweetBattle.git
cd tweetBattle
```

2. **Sunucuyu başlatın (lokal test için):**
```bash
python start_server.py
```

3. **Tarayıcıda açın:**
```
http://localhost:8000/index.html
```

**Not:** `start_server.py` sadece lokal geliştirme içindir. GitHub Pages'te gerekli değildir.

## 📁 Dosya Yapısı

- `index.html` - Welcome ekranı
- `game.html` - Oyun ekranı
- `gameover.html` - Oyun bitti ekranı
- `translations.js` - Çeviri dosyası
- `tweets_pool.json` - Tweet verileri (gerekli)
- `twitter-posts.csv` - Tweet verileri (kaynak)
- `start_server.py` - Yerel HTTP sunucusu (lokal test için)
- `csv_to_json.py` - CSV'den JSON'a dönüştürücü (isteğe bağlı)

## 🌐 GitHub Pages'e Deploy

1. **Repository'yi GitHub'a push edin:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/kullanici-adi/tweetBattle.git
git push -u origin main
```

2. **GitHub'da ayarlar:**
   - Repository → Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `main` veya `master`
   - Folder: `/ (root)`

3. **Site yayında!**
   - URL: `https://kullanici-adi.github.io/tweetBattle/`

## 📝 Notlar

- `tweets_pool.json` dosyası gereklidir (tweet verileri için)
- `twitter-posts.csv` ve `tweets_pool.json` repository'de mevcut, `csv_to_json.py` çalıştırmaya gerek yok
- Tüm veriler tarayıcıda (localStorage) saklanır
- `start_server.py` sadece lokal test içindir (CORS sorununu çözmek için)
- GitHub Pages'te direkt çalışır, sunucuya gerek yok

## 📄 Lisans

MIT License

