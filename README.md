# Katzav Delicatessen — Site Vitrine

Site vitrine du restaurant kasher **Katzav Delicatessen**, spécialisé dans le sandwich gourmet à Marseille (13008).
Développé par **AM Talents**.

---

## Prérequis

- Python 3.10+
- pip

---

## Installation

```bash
# 1. Cloner le dépôt
git clone https://github.com/votre-org/katzav-delicatessen.git
cd katzav-delicatessen

# 2. Créer et activer un environnement virtuel
python -m venv venv
source venv/bin/activate        # Linux / macOS
# venv\Scripts\activate         # Windows

# 3. Installer les dépendances
pip install -r requirements.txt

# 4. Configurer les variables d'environnement
cp .env.example .env
# Ouvrir .env et renseigner les URLs Uber Eats / Deliveroo

# 5. Lancer le serveur de développement
cd backend
python app.py
```

Le site est accessible sur `http://localhost:5000`.

---

## Structure du projet

```
katzav-delicatessen/
├── CLAUDE.md                   # Instructions pour Claude Code
├── README.md                   # Ce fichier
├── .gitignore
├── .env.example                # Variables d'environnement (template)
├── requirements.txt            # Dépendances Python
│
├── frontend/
│   ├── index.html              # Page unique (SPA)
│   ├── sitemap.xml             # Plan du site pour les moteurs
│   ├── robots.txt              # Instructions robots d'indexation
│   │
│   ├── css/
│   │   ├── main.css            # Reset + variables + imports composants
│   │   └── components/
│   │       ├── nav.css         # Barre de navigation sticky
│   │       ├── hero.css        # Section hero + CTA livraison
│   │       ├── menu.css        # Carte avec onglets
│   │       ├── compo.css       # Builder sandwich interactif
│   │       ├── gallery.css     # Galerie photos CSS grid
│   │       └── footer.css      # Horaires + carte + footer
│   │
│   ├── js/
│   │   ├── main.js             # Point d'entrée (ESM)
│   │   └── modules/
│   │       ├── menu-tabs.js    # Onglets de la carte (accessibles)
│   │       ├── compo-builder.js # Builder sandwich (prix temps réel)
│   │       └── scroll-animations.js  # Reveal au scroll (IntersectionObserver)
│   │
│   └── assets/
│       ├── logo/
│       │   └── LISEZ-MOI.txt   # Instructions dépôt logo
│       └── photos/
│           └── LISEZ-MOI.txt   # Convention de nommage des photos
│
├── backend/
│   └── app.py                  # Serveur Flask + headers de sécurité
│
└── templates/                  # (Réservé pour futures pages Jinja2)
```

---

## Variables d'environnement

| Variable       | Description                             | Exemple                              |
|----------------|-----------------------------------------|--------------------------------------|
| `UBEREATS_URL` | URL de la page restaurant sur Uber Eats | `https://www.ubereats.com/store/...` |
| `DELIVEROO_URL`| URL de la page restaurant sur Deliveroo | `https://deliveroo.fr/restaurant/...`|
| `FLASK_ENV`    | Environnement Flask                     | `production` ou `development`        |
| `SECRET_KEY`   | Clé secrète Flask                       | Chaîne aléatoire longue              |
| `PORT`         | Port d'écoute                           | `5000`                               |
| `SITE_URL`     | URL canonical du site                   | `https://katzav-delicatessen.fr`     |

---

## Guide ajout de photos

Voir [`frontend/assets/photos/LISEZ-MOI.txt`](frontend/assets/photos/LISEZ-MOI.txt) pour la convention de nommage.

**Résumé :**
- `hero-bg.jpg` — Fond du hero (optionnel, fond CSS par défaut si absent)
- `sandwich-[nom].jpg` — Ex : `sandwich-le-katzav.jpg`
- `burger-[nom].jpg` — Ex : `burger-big-burger.jpg`
- `ambiance-[n].jpg` — Photos de salle, équipe
- `starter-[nom].jpg` — Ex : `starter-houmous-bassar.jpg`

Format : **JPG, max 300 ko, 1200×800px minimum**.

---

## Déploiement sur Hostinger (Python)

1. Se connecter au panneau de contrôle Hostinger
2. Aller dans **Sites web → Gérer → Python**
3. Activer le mode Python, sélectionner Python 3.10+
4. Configurer l'entrée : `backend/app.py`
5. Déposer les fichiers via **Git** ou le **gestionnaire de fichiers**
6. Renseigner les variables d'environnement dans le panneau Hostinger
7. Cliquer sur **Redémarrer**

> Pour le serveur de production, `gunicorn` est inclus dans `requirements.txt`.  
> Commande : `gunicorn -w 4 -b 0.0.0.0:$PORT backend.app:app`

---

## Crédits

- **Client** : Katzav Delicatessen (Kevin)
- **Agence** : AM Talents, Marseille
- **Stack** : HTML5 · CSS3 · JavaScript ES6 · Flask (Python)
