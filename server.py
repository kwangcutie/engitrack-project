"""
ENGiTRACK by ENKKU - Local Application Server
KKU AI Hackathon 2026 | Team ENnovation
"""

import http.server
import socketserver
import os
import sys
import webbrowser

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

def run_server(port=PORT):
    for p in range(port, port + 10):
        try:
            with socketserver.TCPServer(("", p), Handler) as httpd:
                print(f"============================================================")
                print(f" ENGiTRACK by ENKKU - Web Application Running Successfully")
                print(f" URL: http://localhost:{p}")
                print(f" KKU AI Hackathon 2026 | Team ENnovation")
                print(f"============================================================")
                httpd.serve_forever()
                break
        except OSError:
            print(f"Port {p} is in use, trying next port...")

if __name__ == "__main__":
    run_server()
