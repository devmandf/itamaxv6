# 🏗️ Site Web Itamax

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vite](https://img.shields.io/badge/vite-%5E5.0.0-646CFF.svg)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/react-%5E18.2.0-61DAFB.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%5E3.0.0-38B2AC.svg)](https://tailwindcss.com/)

Site web vitrine moderne pour Itamax, entreprise spécialisée dans la construction, l'architecture et l'immobilier au Sénégal. Ce projet utilise les dernières technologies web pour offrir une expérience utilisateur optimale et des performances exceptionnelles.

## 🌟 Fonctionnalités clés

### 🎨 Interface utilisateur
- Design responsive et moderne
- Navigation fluide avec défilement vers les sections
- Animations fluides avec Framer Motion
- Thème couleur personnalisé avec support du mode sombre (à venir)
- Police Jura SemiBold pour une excellente lisibilité

### ⚡ Performances
- Chargement ultra-rapide avec Vite
- Optimisation des images (WebP, chargement paresseux)
- Code splitting automatique
- Préchargement des ressources critiques

### 🔍 SEO & Accessibilité
- Balisage sémantique HTML5
- Métadonnées optimisées
- Structure ARIA pour l'accessibilité
- Sitemap généré automatiquement

### 📱 PWA (Progressive Web App)
- Installation sur l'écran d'accueil
- Fonctionnement hors ligne
- Mises à jour automatiques
- Écran de démarrage personnalisé

## 🛠 Technologies utilisées

### Frontend
- ⚛️ [React 18+](https://reactjs.org/) - Bibliothèque JavaScript pour les interfaces utilisateur
- ⚡ [Vite](https://vitejs.dev/) - Outil de build ultra-rapide
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitaire
- ✨ [Framer Motion](https://www.framer.com/motion/) - Bibliothèque d'animations
- 🔄 [React Router](https://reactrouter.com/) - Gestion de la navigation
- 🗺️ [React Leaflet](https://react-leaflet.js.org/) - Intégration de cartes

### Outils de développement
- 🧪 [Vitest](https://vitest.dev/) - Framework de tests
- 🔍 [ESLint](https://eslint.org/) - Linter JavaScript/TypeScript
- 💅 [Prettier](https://prettier.io/) - Formateur de code
- 🐺 [Husky](https://typicode.github.io/husky/) - Git hooks
- 📦 [npm](https://www.npmjs.com/) - Gestionnaire de paquets

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18+ (LTS recommandé)
- npm 9+ ou yarn 1.22+
- Git

### Installation

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/devmandf/itamax-website.git
   cd itamax-website
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn
   ```

3. **Démarrer l'environnement de développement**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```
   
   L'application sera disponible à l'adresse : [http://localhost:5173](http://localhost:5173)

4. **Pour la production**
   ```bash
   npm run build
   npm run preview
   ```

## 📂 Structure du projet

```
src/
├── assets/           # Images, polices et autres ressources statiques
├── components/       # Composants réutilisables
├── data/             # Données statiques et configurations
├── hooks/            # Hooks personnalisés
├── layouts/          # Mises en page globales
├── pages/            # Composants de page
├── styles/           # Fichiers de style globaux
└── utils/            # Utilitaires et helpers
```

## 🤝 Contribution

Les contributions sont les bienvenues ! Consultez notre [guide de contribution](CONTRIBUTING.md) pour commencer.

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🙏 Remerciements

- [Vite](https://vitejs.dev/) pour l'outil de build incroyablement rapide
- [Tailwind CSS](https://tailwindcss.com/) pour le système de design utilitaire
- [Framer Motion](https://www.framer.com/motion/) pour les animations fluides
- Tous les contributeurs qui ont aidé à améliorer ce projet

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn
   ```

3. **Lancer l'environnement de développement**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```
   Le site sera disponible à l'adresse : http://localhost:5173

## 🔧 Commandes disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm run preview` - Prévisualise la version de production localement
- `npm run lint` - Vérifie le code avec ESLint
- `npm run format` - Formate le code avec Prettier

## 🏗️ Structure du projet

```
src/
├── assets/          # Images, polices et autres ressources
├── components/      # Composants React réutilisables
├── styles/          # Fichiers de style globaux
├── App.jsx          # Point d'entrée de l'application
└── main.jsx         # Point de montage React
```

## 🌐 Déploiement

### Préparation pour la production
```bash
npm run build
```
Cette commande crée un dossier `dist` optimisé pour la production.

### Options de déploiement

#### 1. Vercel (Recommandé)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=URL_DU_REPO)

#### 2. Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=URL_DU_REPO)

#### 3. Hébergement statique
Le dossier `dist` peut être déployé sur n'importe quel service d'hébergement statique :
- GitHub Pages
- GitLab Pages
- Firebase Hosting
- AWS S3 + CloudFront

## 🔍 Optimisation SEO

Le projet inclut :
- Balises meta optimisées
- Sitemap.xml
- robots.txt
- Favicons pour tous les appareils
- Données structurées (Schema.org)

## 📱 PWA (Progressive Web App)

L'application est configurée comme une PWA, permettant :
- Installation sur l'écran d'accueil
- Mode hors ligne
- Écran de démarrage personnalisé

## 🛠 Configuration avancée

### Variables d'environnement
Créez un fichier `.env` à la racine du projet :
```
VITE_APP_TITLE=Itamax
VITE_APP_DESCRIPTION=Entreprise de construction et d'architecture
VITE_APP_API_URL=https://api.itamax.sn
```

### Configuration de Tailwind
Le fichier `tailwind.config.js` peut être personnalisé pour :
- Thèmes personnalisés
- Couleurs de la marque
- Tailles de police
- Breakpoints personnalisés

## 🐛 Débogage

1. **Erreurs de build**
   - Supprimez le dossier `node_modules` et `package-lock.json`
   - Exécutez `npm install`

2. **Problèmes de style**
   - Vérifiez les classes Tailwind dans les composants
   - Utilisez les outils de développement du navigateur

## 🤝 Contribution

1. Forkez le projet
2. Créez une branche (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos modifications (`git commit -am 'Ajouter une nouvelle fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Créez une Pull Request

## 📞 Contact

- **Adresse** : Liberté 6 Extension Camp Pénal, Villa 2, Dakar, Sénégal
- **Téléphone** : [+221 33 867 18 55](tel:+221338671855)
- **Email** : [itamax@orange.sn](mailto:itamax@orange.sn)
- **Site web** : [https://www.itamax.sn](https://www.itamax.sn)

## 📝 Licence

Tous droits réservés © 2025 Itamax - Reproduction interdite sans autorisation
