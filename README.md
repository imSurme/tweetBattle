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
- 🎨 **Modern Tasarım**: Responsive ve dark mode desteği

## 🚀 Yerel Geliştirme

### Gereksinimler
- Python 3.x (sadece CSV'yi JSON'a çevirmek için)

### Kurulum

1. **Repository'yi klonlayın:**
```bash
git clone https://github.com/kullanici-adi/tweetBattle.git
cd tweetBattle
```

2. **CSV'yi JSON'a çevirin (isteğe bağlı):**
```bash
python csv_to_json.py
```

3. **Sunucuyu başlatın:**
```bash
python start_server.py
```

4. **Tarayıcıda açın:**
```
http://localhost:8000/index.html
```

## 📁 Dosya Yapısı

- `index.html` - Welcome ekranı
- `game.html` - Oyun ekranı
- `gameover.html` - Oyun bitti ekranı
- `translations.js` - Çeviri dosyası
- `tweets_pool.json` - Tweet verileri
- `csv_to_json.py` - CSV'den JSON'a dönüştürücü
- `start_server.py` - Yerel HTTP sunucusu

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
- CSV dosyasından JSON oluşturmak için `csv_to_json.py` kullanın
- Tüm veriler tarayıcıda (localStorage) saklanır

## 📄 Lisans

MIT License

