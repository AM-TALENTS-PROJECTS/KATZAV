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
**Domaine cible** : katzav-delicatessen.com

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

## Routing — URLs propres (depuis 2026-07-02)

Les pages sont physiquement toujours des fichiers `.html` à la racine, mais sont servies
sous des URLs sans extension via `.htaccess` (mod_rewrite Apache) :

| Fichier réel | URL publique |
|---|---|
| `index.html` | `/` |
| `menu.html` | `/la-carte` |
| `galerie.html` | `/galerie` |
| `infos.html` | `/horaires-acces` |
| `mentions-legales.html` | `/mentions-legales` |
| `politique-confidentialite.html` | `/politique-confidentialite` |

Les anciennes URLs `*.html` sont redirigées en 301 vers les URLs propres (SEO préservé).
Tous les liens internes (`href`) utilisent désormais ces chemins propres, toujours en
relatif (`la-carte`, `galerie`, …) sauf l'accueil qui utilise `/`. Le fichier `.htaccess`
normalise aussi l'absence de slash final sur ces routes, pour ne pas casser la résolution
des chemins relatifs (`css/`, `js/`, `assets/`).

**Si un nouveau fichier `.html` est ajouté**, il faut : ajouter sa règle de réécriture +
sa redirection 301 dans `.htaccess`, mettre à jour `sitemap.xml`, et utiliser le slug
propre (pas le nom de fichier) dans tous les `href` internes qui pointent vers lui.

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

### Menu Frites + Boisson : +4€ (supplément, toutes sections)

### Sandwichs Signatures
- Le K — 14€, Le Atz — 15€, Le Av — 16€, Le Katzav — 17€

### Spécialités
- Le Halla Pastrami — 16€, Le Halla Schnitzel — 16€, Katz Chicken — 17€
- Atzado — 18€, Pita Crispy — 18€

### Burgers (avec frites fraîches maison)
- Classic Burger — 15€, Classic Chicken — 15€, Big Burger — 18€, Big Chicken — 18€
- Burger Assado — 18€, Double Burger — 18€

### Baguettes, Halla & Viennois (avec frites fraîches maison)
- L'Americano — 13€, Le Dinde — 13€, Le Chicken — 14€, Le Poulet Grillé — 14€, Le Merguez — 15€
- Le Full Rosette — 15€, Le Full Mandoline — 16€, Le Full Mix — 17€

### Klub (avec frites fraîches maison)
- Klub Thon — 14€, Klub Saumon — 15€, Klub Katzav — 16€, Le Katzu — 17€, Le Katz Deli — 17€

### Bun and Co.
- Hot-Dog — 10€, Bun Dinde — 12€, Bun Saumon — 12€, Bun Thon — 12€

### Starters
- Frites fraîches — 4€, Petit pot de choux ou coleslaw — 4€, Onion Rings x7 — 8€
- Tenders de poulet x5 — 10€, Arayes ×4 — 15€
- Houmous Falafel — 15€, Houmous Shawarma — 15€, Houmous Bassar — 16€
- Plateau de charcuterie — 22€

### À l'Assiette (avec salade, choux, coleslaw, houmous, frites fraîches)
- Steak à cheval — 20€, Schnitzel — 20€, Poulet grillé — 20€
- Assado — 22€, Shawarma de poulet — 22€, Merguez — 22€

### Salades — 16€
Base : salade, tomate cerise, maïs, avocat, pickles d'oignon rouge, concombres, vinaigrette et balsamique
Choix : poulet pané / poulet grillé / saumon fumé / charcuterie (dinde ou pastrami)

### Boissons
- Eau — 2,5€, Eau gazeuse — 2,5€, Soda — 3€, Bière — 4€, Verre de vin — 5€, Café — 2€

### Desserts
- Bagel Choco Speculoos — 7€, Klub Choco Pralin — 7€, Brownie — 7€

### Menu Kid — 13€ (jusqu'à 12 ans)
Au choix : Nuggets + Frites / Burger + Frites / Hot-Dog + Frites + Boisson Capri Sun + Dessert du moment

### La Compo — 15€ base
Pains : Classique, Sésame, Olives noires, Klub, Baguette, Halla
Garnitures (x3) : … Avocat +1,5€
Charcuteries (x3) : … Veau à l'os +2€, Saucisse +2€
Sauces (x2) : … Mayo truffée +1€

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
- `<link rel="canonical">` vers `https://katzav-delicatessen.com/`
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
SITE_URL=https://katzav-delicatessen.com
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

### Session 2026-07-02 (URLs propres sans .html)
- Ajout de `.htaccess` (mod_rewrite Apache) : URLs sans extension pour les 6 pages + redirections 301 depuis les anciennes URLs `.html`, normalisation sans slash final
- Tous les `href` internes des 6 pages migrés vers les nouvelles URLs propres (`/`, `la-carte`, `galerie`, `horaires-acces`, `mentions-legales`, `politique-confidentialite`)
- `canonical`, `og:url`, `hasMenu` (JSON-LD) et `sitemap.xml` mis à jour avec les URLs propres
- Nouvelle section « Routing » ajoutée à ce fichier documentant le mapping fichier ↔ URL
