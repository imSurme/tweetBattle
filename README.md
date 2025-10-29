# 🔥 Tweet Battle

A game to predict tweet engagement! Which tweet got more likes, retweets, and views?

> **EN** | **[TR](README.tr.md)**

## 🎮 How to Play

1. Select difficulty level (Easy/Medium/Hard)
2. View the top tweet's statistics
3. Guess the bottom tweet's statistics (Higher/Lower)
4. Make separate predictions for each stat (likes, retweets, views)
5. Get a combo bonus when you guess all 3 stats correctly!

## ✨ Features

- 🔥 **Streak System**: Bonus points for consecutive correct answers
- 📊 **3 Difficulty Levels**: Easy, Medium, Hard
- 📈 **Progressive Difficulty**: Difficulty automatically increases with score in all modes
- 🌍 **Multi-language**: Turkish and English support
- 📈 **High Score**: Beat your own record
- 🎨 **Modern Design**: Responsive (mobile-first) design

## 🚀 Local Development

### Requirements
- Python 3.x (for local testing only)
- Modern web browser

### Setup

1. **Clone the repository:**
```bash
git clone https://github.com/kullanici-adi/tweetBattle.git
cd tweetBattle
```

2. **Start the server (for local testing):**
```bash
python start_server.py
```

3. **Open in browser:**
```
http://localhost:8000/index.html
```

## 📁 File Structure

- `index.html` - Welcome screen
- `game.html` - Game screen
- `gameover.html` - Game over screen
- `translations.js` - Translation file
- `tweets_pool.json` - Tweet data (required)
- `twitter-posts.csv` - Tweet data (source)
- `start_server.py` - Local HTTP server (for local testing)
- `csv_to_json.py` - CSV to JSON converter (optional)

## 📝 Notes

- `tweets_pool.json` file is required (for tweet data)
- `twitter-posts.csv` and `tweets_pool.json` are already in the repository, no need to run `csv_to_json.py`
- All data is stored in the browser (localStorage)
- `start_server.py` is only for local testing (to fix CORS issues)
- Works directly on GitHub Pages, no server needed
- Free and open source project
