"""
CSV dosyasından tweet havuzu oluşturma
CSV'yi okuyup game.html'de kullanılacak JSON formatına çevirir
"""

import csv
import json

def csv_to_json(csv_file="twitter-posts.csv", json_file="tweets_pool.json"):
    """CSV dosyasını JSON formatına çevir"""
    tweet_pool = []
    
    try:
        with open(csv_file, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            
            for row in reader:
                # CSV sütunlarını kontrol et ve JSON formatına çevir
                # CSV'deki sütun isimlerine göre ayarla
                name = row.get('name', 'Unknown User')
                username = row.get('user_posted', 'unknown')
                description = row.get('description', '')
                
                # Views varsa al, yoksa likes*10 tahmin et
                views = int(row.get('views', 0)) if row.get('views') and row.get('views') != 'null' else 0
                likes = int(row.get('likes', 0)) if row.get('likes') and row.get('likes') != 'null' else 0
                retweets = int(row.get('reposts', 0)) if row.get('reposts') and row.get('reposts') != 'null' else 0
                
                # Views yoksa tahmin et
                if views == 0 and likes > 0:
                    views = likes * 20  # Yaklaşık görüntülenme
                
                tweet_data = {
                    "name": name,
                    "username": f"@{username}" if not username.startswith('@') else username,
                    "text": description,
                    "avatar": row.get('profile_image_link', ''),
                    "likes": likes,
                    "retweets": retweets,
                    "views": views
                }
                
                # Boş tweet'leri atla ve en az 100 views olanları al
                if tweet_data['text'] and tweet_data['views'] >= 100:
                    tweet_pool.append(tweet_data)
            
            print(f"✓ {len(tweet_pool)} tweet CSV'den okundu")
    
    except Exception as e:
        print(f"❌ Hata: {e}")
        return False
    
    # JSON dosyasına kaydet
    try:
        with open(json_file, 'w', encoding='utf-8') as f:
            json.dump(tweet_pool, f, ensure_ascii=False, indent=2)
        
        print(f"✓ {len(tweet_pool)} tweet {json_file} dosyasına kaydedildi")
        return True
    except Exception as e:
        print(f"❌ JSON kaydetme hatası: {e}")
        return False


if __name__ == "__main__":
    print("=" * 60)
    print("CSV'den Tweet Havuzu Oluşturucu")
    print("=" * 60)
    print()
    
    # CSV'yi JSON'a çevir
    if csv_to_json():
        print("\n✅ Tamamlandı!")
        print(f"📁 tweets_pool.json dosyası hazır")
    else:
        print("\n❌ Hata oluştu!")

