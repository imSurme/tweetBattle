"""
Basit HTTP sunucusu başlatır (CORS sorunu çözmek için)
"""

import http.server
import socketserver
import webbrowser
import os

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # CORS header'ları ekle
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        super().end_headers()

def main():
    # Mevcut dizine git
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print("=" * 60)
        print(f"HTTP Sunucusu başlatıldı!")
        print(f"Port: {PORT}")
        print("=" * 60)
        print(f"\n✓ http://localhost:{PORT}/index.html adresine gidin")
        print("\nSunucuyu durdurmak için Ctrl+C'ye basın\n")
        
        # Tarayıcıyı otomatik aç
        webbrowser.open(f'http://localhost:{PORT}/index.html')
        
        # Sunucuyu başlat
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\nSunucu durduruldu.")

if __name__ == "__main__":
    main()

