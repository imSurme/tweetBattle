// Çeviri verileri
const translations = {
    en: {
        welcome: {
            title: "Tweet Battle",
            subtitle: "Guess which tweet got more engagement!",
            startButton: "Start",
            selectDifficulty: "Select Difficulty",
            easy: "Easy",
            medium: "Medium",
            hard: "Hard"
        },
        game: {
            back: "Back",
            score: "Score",
            highScore: "Best",
            vs: "VS",
            higher: "Higher",
            lower: "Lower",
            likes: "Likes",
            retweets: "Retweets",
            views: "Views",
            unknown: "???"
        },
        gameover: {
            title: "Tweet Battle",
            gameOver: "Game Over",
            finalScore: "Your Final Score",
            playAgain: "Play Again",
            highScore: "Best Score"
        }
    },
    tr: {
        welcome: {
            title: "Tweet Battle",
            subtitle: "Hangi tweet daha çok etkileşim aldı tahmin et!",
            startButton: "Başla",
            selectDifficulty: "Zorluk Seviyesi Seç",
            easy: "Kolay",
            medium: "Orta",
            hard: "Zor"
        },
        game: {
            back: "Geri",
            score: "Skor",
            highScore: "Rekor",
            vs: "VS",
            higher: "Yüksek",
            lower: "Düşük",
            likes: "Beğeni",
            retweets: "Retweet",
            views: "Görüntülenme",
            unknown: "???"
        },
        gameover: {
            title: "Tweet Battle",
            gameOver: "Oyun Bitti",
            finalScore: "Final Skorunuz",
            playAgain: "Tekrar Oyna",
            highScore: "En Yüksek Skor"
        }
    }
};

// Dil yönetimi
let currentLanguage = localStorage.getItem('language') || 'tr';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updateTexts();
}

function getTranslation(key) {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    for (const k of keys) {
        value = value[k];
        if (!value) return key;
    }
    return value;
}

function updateTexts() {
    // Index sayfası
    if (document.getElementById('welcomeTitle')) {
        document.getElementById('welcomeTitle').textContent = getTranslation('welcome.title');
        document.getElementById('welcomeSubtitle').textContent = getTranslation('welcome.subtitle');
        document.getElementById('startButton').querySelector('span').textContent = getTranslation('welcome.startButton');
        
        // Zorluk seviyesi çevirileri
        if (document.getElementById('selectDifficulty')) {
            document.getElementById('selectDifficulty').textContent = getTranslation('welcome.selectDifficulty');
        }
        
        // Zorluk butonlarını çevir
        const difficultyButtons = document.querySelectorAll('.difficulty-btn');
        difficultyButtons.forEach((btn, index) => {
            const textSpan = btn.querySelector('span:last-child');
            if (textSpan) {
                if (index === 0) textSpan.textContent = getTranslation('welcome.easy');
                else if (index === 1) textSpan.textContent = getTranslation('welcome.medium');
                else if (index === 2) textSpan.textContent = getTranslation('welcome.hard');
            }
        });
    }
    
    // Game sayfası
    if (document.getElementById('gameScore')) {
        document.getElementById('gameScore').textContent = getTranslation('game.score');
    }
    if (document.getElementById('highScoreLabel')) {
        document.getElementById('highScoreLabel').textContent = getTranslation('game.highScore');
    }
    if (document.getElementById('higherButton')) {
        const higherBtn = document.getElementById('higherButton').querySelectorAll('span');
        if (higherBtn.length > 1) higherBtn[1].textContent = getTranslation('game.higher');
        const lowerBtn = document.getElementById('lowerButton').querySelectorAll('span');
        if (lowerBtn.length > 1) lowerBtn[1].textContent = getTranslation('game.lower');
    }
    
    // Gameover sayfası
    if (document.getElementById('gameOverTitle')) {
        document.getElementById('gameOverTitle').textContent = getTranslation('gameover.gameOver');
        document.getElementById('finalScoreLabel').textContent = getTranslation('gameover.finalScore');
        if (document.getElementById('highScoreLabel')) {
            document.getElementById('highScoreLabel').textContent = getTranslation('gameover.highScore');
        }
        if (document.getElementById('selectDifficulty')) {
            document.getElementById('selectDifficulty').textContent = getTranslation('welcome.selectDifficulty');
        }
        if (document.getElementById('playAgainButton')) {
            document.getElementById('playAgainButton').querySelector('span').textContent = getTranslation('gameover.playAgain');
        }
        
        // Zorluk butonlarını çevir
        const difficultyButtons = document.querySelectorAll('.difficulty-btn');
        difficultyButtons.forEach((btn, index) => {
            const textSpan = btn.querySelector('span:last-child');
            if (textSpan) {
                if (index === 0) textSpan.textContent = getTranslation('welcome.easy');
                else if (index === 1) textSpan.textContent = getTranslation('welcome.medium');
                else if (index === 2) textSpan.textContent = getTranslation('welcome.hard');
            }
        });
    }
    
    // HTML lang attribute
    document.documentElement.lang = currentLanguage;
}

