# jp-rebischung.github.io

Site vitrine de Jean-Philippe Rebischung, Technicien Supérieur Systèmes et Réseaux (titre professionnel TSSR, 2026).

Le site se présente comme une suite d'outils fictive, « JP Consulting » : chaque page est un module.

- **Accueil (Supervision)** : tableau de bord du lab et des compétences du titre.
- **Compétences (Assistance)** : la file des tickets, une fiche par compétence (`tickets/`), et le journal du support.
- **Projet (Inventaire)** : une infrastructure d'entreprise sur deux sites (Active Directory, FreeIPA, pfSense, VPN IPsec, journaux, supervision, sauvegardes).
- **Parcours (Annuaire)** : ma fiche « Propriétés », avec des onglets.
- **Films (Partages)** : les courts films d'animation du lab.
- **Contact (Nouvelle demande)**.
- **Documentation (Base de connaissances)** : DAT, DEX, PRA et playbooks, en édition publique anonymisée (`docs/`).

## Technique

- HTML et CSS écrits à la main, sans framework ni générateur. Deux petits scripts : le bouton clair / sombre et les filtres de la file des tickets.
- Hébergé sur GitHub Pages, publié à chaque `git push` sur la branche `main`.
- Polices hébergées dans le dépôt (Exo 2, Source Sans 3, JetBrains Mono, licence SIL OFL) : aucune requête vers un service tiers, aucun cookie.
- Le fichier `.nojekyll` indique à GitHub Pages de publier les fichiers tels quels, sans passer par Jekyll.

## Arborescence

```
index.html, competences.html, projet.html, parcours.html, films.html, contact.html
tickets/             une page par ticket (INC-01 à INC-09)
css/style.css        feuille de style commune (couleurs, mode sombre, mise en page)
js/theme.js          bouton clair / sombre
js/filtres.js        filtres de la file des tickets
films/               films en MP4 (versions allégées pour le web)
img/films/           affiches des films
img/schemas/         carte du lab et schémas
fonts/               polices et leurs licences
img/logo/            logo JP Consulting (entreprise fictive du lab) et icône d'onglet
img/personnages/     Azur, Tux et Chester (anim/ : animations)
docs/                CV et dossier de présentation en PDF
```

Tux est inspiré du dessin original de Larry Ewing.
