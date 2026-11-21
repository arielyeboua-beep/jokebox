# 📻 JOKEBOX — Le Jukebox Digital de la Nuit Abidjanaise

> **« Transformer chaque demande de chanson en ambiance pour les clients et en revenu pour les lieux. »**

Landing page haute-fidélité **"1:1 Pixel Perfect"** avec animations cinématiques GSAP 3 et système de design sur-mesure **« Néon Maquis »** (nuit abidjanaise électrique, contrastes marqués, enseignes lumineuses, intégration Wave, Orange Money et MTN).

---

## 🎨 Système de Design — Néon Maquis

- **Nuit Profonde :** `#0F0B1A` & `#08050E`
- **Orange Néon (Bouton Principal / CTA) :** `#FF7A1A`
- **Rose Néon (Dédicaces & Boost VIP) :** `#FF2E88`
- **Vert Électrique (Validation & Direct) :** `#2BE38B`
- **Blanc Cassé (Texte Haute Lisibilité) :** `#F5F1E8`
- **Typographies :**
  - Titres condensés : `Bebas Neue`
  - Serif dramatique : `Instrument Serif` (Italique massif)
  - UI & Lisibilité : `Poppins`
  - Télémétrie & Logs : `JetBrains Mono`

---

## ⚡ Fonctionnalités & Artefacts Interactifs

1. **L'Île Flottante (Navbar) :** Morphing dynamique avec flou de backdrop et bouton magnétique au scroll.
2. **Le Plan d'Ouverture (Hero 100dvh) :** Image plein écran Unsplash avec lourd dégradé nocturne, contraste typographique géant et boutons d'action magnétiques.
3. **Mélangeur Diagnostique :** 3 cartes de commandes empilées alternant automatiquement avec rebond élastique (`cubic-bezier(0.34, 1.56, 0.64, 1)`) et compteur de recettes en direct (+68 500 FCFA).
4. **Machine à Écrire Télémétrie :** Terminal d'événements tapant en temps réel les actions de la soirée (scan, dédicace, confirmation Wave, acceptation DJ) avec curseur pulsant.
5. **Planificateur Protocole Curseur :** Grille des soirées avec curseur SVG animé simulant le clic, l'activation du samedi soir et le reversement Wave direct.
6. **Le Manifeste :** Section grand format avec texture parallaxe et déclarations contrastantes sur la réalité des maquis.
7. **Protocole Archive Empilée (Sticky Stacking) :** 3 cartes plein écran avec `pin: true` via GSAP ScrollTrigger (vinyle en rotation, laser de scan sur matrice, onde sonore ECG audio).
8. **Offres Lieux de Nuit :** 3 formules (Maquis & Bar à 0F, Club & Lounge Chic avec lueur néon orange, et Réseau multi-lieux).
9. **Simulateur Mobile Client :** Modal interactif permettant de tester le parcours complet (recherche de son, dédicace, boost et paiement Wave/OM).

---

## 🛠️ Stack Technique

- **Framework :** React 19
- **Bundler :** Vite 6
- **Styles :** Tailwind CSS v3.4.17
- **Animations :** GSAP 3 avec plugin ScrollTrigger
- **Icônes :** Lucide React
- **Texture :** Overlay SVG `<feTurbulence>` (0.05 opacité) pour éliminer les dégradés plats

---

## 🚀 Démarrage

### Aperçu instantané (sans installation)
Ouvrez directement le fichier `preview.html` dans n'importe quel navigateur web.

### En environnement de développement
```bash
# Installation des dépendances
npm install

# Lancement du serveur local
npm run dev

# Construction pour la production
npm run build
```

---

© 2026 JOKEBOX CI. Conçu pour la culture nocturne ivoirienne.
