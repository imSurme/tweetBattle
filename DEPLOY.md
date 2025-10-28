# GitHub Pages'e Deploy Rehberi

## Adım 1: Git Repository Oluştur

```bash
git init
git add .
git commit -m "Initial commit - Tweet Battle game"
git branch -M main
git remote add origin https://github.com/KULLANICI-ADI/tweetBattle.git
git push -u origin main
```

**Not:** `KULLANICI-ADI` yerine kendi GitHub kullanıcı adını yaz.

## Adım 2: GitHub Pages'i Aktif Et

1. GitHub'da repository'ne git
2. **Settings** sekmesine tıkla
3. Sol menüden **Pages** seç
4. **Source**: "Deploy from a branch" seç
5. **Branch**: `main` (veya `master`) seç
6. **Folder**: `/ (root)` seç
7. **Save** tıkla

## Adım 3: Bekle ve Test Et

- Birkaç dakika bekle (2-5 dakika)
- GitHub Pages URL'i: `https://KULLANICI-ADI.github.io/tweetBattle/`

## Güncellemeler İçin

Her güncelleme sonrası:
```bash
git add .
git commit -m "Update"
git push
```

Birkaç dakika içinde canlıya geçer!

