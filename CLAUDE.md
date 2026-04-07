# CLAUDE.md — Site Vitrine Katzav Delicatessen

> **RÈGLE ABSOLUE** : Lire ce fichier en entier avant d'écrire la moindre ligne de code.
> Toute modification de la charte graphique, des prix ou du contenu client
> nécessite une validation explicite de Kevin (client) ou d'AM Talents (agence).

---

## Description du projet

Site vitrine **one-page** pour **Katzav Delicatessen**, restaurant kasher spécialisé dans le sandwich gourmet à Marseille (13008).
Développé par **AM Talents** (agence digitale marseillaise).

**Client** : Kevin — fondateur de Katzav Delicatessen  
**Agence** : AM Talents  
**Domaine cible** : katzav-delicatessen.fr

---

## Stack technique

| Couche    | Technologie          | Notes                                  |
|-----------|----------------------|----------------------------------------|
| Frontend  | HTML5 + CSS3 + JS vanilla | Zéro framework                    |
| CSS       | BEM strict + composants | `css/components/`                   |
| JS        | ES6 modules natifs   | `js/modules/`                          |
| Backend   | Flask (Python 3.10+) | Sert les statiques + headers sécurité  |
| Hébergeur | Hostinger            | Python / Git deploy                    |
| Fonts     | Google Fonts         | Bebas Neue + Barlow Condensed + Barlow |

---

## Charte graphique — NE JAMAIS MODIFIER sans instruction explicite

### Palette couleurs

```css
--red:        #E8001C;  /* rouge dominant — CTA, accents, titres hero */
--red-dark:   #C0001A;  /* hover / ombres */
--white:      #FFFFFF;
--black:      #0A0A0A;  /* fond principal */
--gray-dark:  #111111;  /* fond sections alternées */
```

### Typographies

| Rôle               | Police             | Usage                                         |
|--------------------|--------------------|-----------------------------------------------|
| Display / Headlines | `Bebas Neue`       | Titres AppBar, sections majeures, hero        |
| Sous-titres / Labels | `Barlow Condensed` weight 700/900 | Labels, onglets, nav, badges |
| Corps de texte     | `Barlow`           | Descriptions, paragraphes                     |

### Style général

Urbain / New-Yorkais / Street food haut de gamme. Énergie, mouvement, appétit.
Fond noir dominant avec cassures rouge vif. Typographies massives et boldées.
**Aucun minimalisme épuré.** Le site doit donner faim.

---

## Sections du site

| Section        | ID HTML      | Rôle                                                     |
|----------------|--------------|----------------------------------------------------------|
| Nav            | —            | Logo + liens + CTA Commander (sticky, fond noir)         |
| Hero           | `#livraison` | "T'AS FAIM ?" + CTA Uber Eats / Deliveroo                |
| La Carte       | `#menu`      | 12 onglets, carte complète avec prix                     |
| La Compo       | `#compo`     | Builder interactif 4 étapes, prix temps réel             |
| Galerie        | `#galerie`   | 12 emplacements CSS grid asymétrique                     |
| Horaires       | `#horaires`  | Tableau horaires + badge Shabat                          |
| Nous trouver   | `#acces`     | Google Maps + contact                                    |
| Footer         | —            | Logo + liens + mention kasher + copyright AM Talents     |

---

## Identité client — NE PAS MODIFIER sans validation

| Info            | Valeur                              |
|-----------------|-------------------------------------|
| Nom             | Katzav Delicatessen                 |
| Adresse         | 192 Rue du Rouet, 13008 Marseille   |
| Téléphone       | 06 22 66 83 53                      |
| Email           | katzavdeli@gmail.com                |
| Instagram       | @katzav_delicatessen                |
| Facebook        | Katzav deli                         |
| Certification   | Kasher — Beth-Din de Marseille      |
| Fondateur       | Kevin                               |

### Horaires (ne pas modifier sans validation)

- Lundi → Jeudi + Dimanche : 11h00–14h30 / 18h00–22h30
- Vendredi : 11h00–14h30 seulement
- Samedi : 1h après fin du Shabat → 03h00

---

## Contenu carte — Prix et descriptions ne jamais modifier sans validation Kevin/AM Talents

### Sandwichs Signatures
- Le K — 13€
- Le ATZ — 14€
- Le AV — 15€
- Le KATZAV — 16€

### Sandwichs Classiques
- L'Americano — 13€, Chicken — 14€, Merguez — 15€

### Spécialités
- Atzado — 18€, Katz Chicken — 17€, Pita Crispy — 18€, Le Halla Pastrami — 16€

### Baguette Charcuterie
- Le Full Rosette — 16€, Le Full Mandoline — 17€, Le Full Mix — 18€

### Burgers (avec frites fraîches maison)
- Classic Burger — 15€, Big Burger — 18€, Classic Chicken — 14€, Big Chicken — 17€

### Plats (avec frites et salade)
- Entrecôte — 30€, Assado — 22€, Schwarma — 18€, Steak à cheval — 15€

### Starters
- Houmous Bassar — 16€, Arayes ×3 — 15€, Assiette Merguez ×4 — 15€
- Piment del Padron — 8€, Onion Rings ×6 — 8€, Chicken Nuggets ×5 — 8€
- Plateau de charcuterie — 25€

### Bagel & Hot-Dog
- Bagel Dinde — 12€, Bagel Saumon — 12€, Hot-Dog — 10€

### Pizzeta
- L'Arménienne — 16€, L'Entrecôte — 22€

### Salade — 16€

### Dessert & Boissons
- Bagel Choco Speculoos — 8€
- Soda 3€, Eau 2,5€, Bière 4€, Café 2€, Vin à la demande

### Menu Kid — 12€

### La Compo — 14€ base
Suppléments : Veau à l'os +2€, Mayo truffée +1€, Mayo spicy +1€

---

## Règles de code

- HTML, CSS, JS dans des **fichiers séparés** — jamais inline
- CSS en **BEM strict** : `.block__element--modifier`
- JS en **modules ES6** : `import` / `export` natifs
- Indentation **2 espaces**
- Commentaires en **français**
- Chemins toujours **relatifs**
- `loading="lazy"` sur toutes les images sauf hero

---

## SEO — Éléments à toujours préserver

- `<title>` exact : `Katzav Delicatessen — Sandwich Gourmet Kasher | Marseille 13008`
- `<meta name="description">` : contient "kasher Marseille 8", "Uber Eats", "Deliveroo", "192 Rue du Rouet"
- `<link rel="canonical">` vers `https://katzav-delicatessen.fr/`
- Schema.org `@type: Restaurant` complet (adresse, horaires, géo, sameAs)
- H1 = `T'AS FAIM ?`
- H2 = `LA CARTE`, `LA COMPO DE TES RÊVES`, `MIAM`, `ON EST LÀ`
- `alt` descriptifs SEO sur toutes les images

---

## Ce que Claude NE DOIT PAS faire

1. **Changer les couleurs de la charte** (`--red`, `--black`, `--gray-dark`, etc.)
2. **Modifier les prix ou la composition des plats** sans validation Kevin/AM Talents
3. **Ajouter des dépendances frontend non demandées** (pas de React, Vue, Alpine, Bootstrap, Tailwind, jQuery)
4. **Casser la structure des fichiers** (BEM, séparation CSS/JS/HTML)
5. **Supprimer les mentions kasher / Beth-Din** — élément identitaire non négociable
6. **Hardcoder les URLs Uber Eats / Deliveroo** — toujours via `.env` ou variable JS window.*
7. **Ajouter un formulaire de contact** — décision explicite du client : pas de formulaire
8. **Changer les polices** Bebas Neue / Barlow Condensed / Barlow
9. **Passer du style urbain-énergique à un style minimaliste** — hors charte
10. **Modifier le nom du client ou l'adresse** sans validation

---

## Variables d'environnement (rappel)

```env
UBEREATS_URL=https://www.ubereats.com/store/katzav-delicatessen
DELIVEROO_URL=https://deliveroo.fr/restaurant/katzav-delicatessen
FLASK_ENV=production
SECRET_KEY=change-me-in-production
PORT=5000
SITE_URL=https://katzav-delicatessen.fr
```

---

## Journal des sessions

### Session 2026-04-02 (génération initiale)
- Création complète du projet : structure, HTML, CSS (6 composants), JS (3 modules + main), Flask app.py
- 12 onglets carte, builder La Compo fonctionnel (prix temps réel, compteurs, disabled state)
- Galerie 12 emplacements CSS grid asymétrique avec placeholders robustes (onerror)
- SEO complet : meta, OG, Twitter Card, Schema.org JSON-LD, sitemap.xml, robots.txt
- Headers de sécurité Flask (Talisman + after_request)
- Hamburger mobile JS natif + aria roles complets
- `prefers-reduced-motion` respecté sur toutes les animations
- Accessibilité : skip link, aria-labels, rôles tablist/tabpanel, navigation clavier onglets
