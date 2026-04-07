import os
from flask import Flask, send_from_directory
from flask_talisman import Talisman
from dotenv import load_dotenv

# Chargement des variables d'environnement
load_dotenv()

# Répertoire frontend relatif au fichier app.py (backend/)
FRONTEND_DIR = os.path.join(os.path.dirname(__file__), '..', 'frontend')

app = Flask(__name__, static_folder=FRONTEND_DIR)

# ── Headers de sécurité ────────────────────────────────────────────────────────
Talisman(
    app,
    content_security_policy=False,   # CSP géré manuellement pour permettre Google Fonts / Maps
    force_https=False,                # Hostinger gère HTTPS en amont
)

@app.after_request
def add_security_headers(response):
    """Ajout des headers de sécurité sur toutes les réponses."""
    response.headers['X-Content-Type-Options'] = 'nosniff'
    response.headers['X-Frame-Options'] = 'DENY'
    response.headers['X-XSS-Protection'] = '1; mode=block'
    response.headers['Referrer-Policy'] = 'strict-origin-when-cross-origin'
    return response


# ── Routes ────────────────────────────────────────────────────────────────────
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    """
    Sert les fichiers statiques du dossier frontend/.
    Si le fichier n'existe pas, renvoie index.html (SPA fallback).
    """
    target = os.path.join(app.static_folder, path)
    if path and os.path.exists(target):
        return send_from_directory(app.static_folder, path)
    return send_from_directory(app.static_folder, 'index.html')


# ── Lancement ─────────────────────────────────────────────────────────────────
if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    debug = os.getenv('FLASK_ENV', 'production') == 'development'
    app.run(host='0.0.0.0', port=port, debug=debug)
