# 🚀 Guide de contribution pour Itamax

Merci de votre intérêt pour contribuer au site web officiel d'Itamax ! Ce document vous guidera à travers le processus de contribution et les bonnes pratiques à suivre.

🌐 **Site officiel** : [https://itamax.fr](https://itamax.fr)

## 🚀 Déploiement

Le déploiement est automatisé via Cloudflare Pages. Chaque push sur la branche `main` déclenche un déploiement automatique.

### Environnements
- **Production** : [https://itamax.fr](https://itamax.fr)
- **Prévisualisation** : Chaque pull request génère une URL de prévisualisation unique
- **Développement** : `npm run dev` pour le développement local

### Catégories de projets
Les projets sont organisés en un système hiérarchique de filtres :

#### Catégories principales
- **Assistance à Maîtrise d'Ouvrage Déléguée (AMO)**
- **Appuis institutionnels**
- **Projets Études Architecturales et Techniques**
  - Bâtiments institutionnels
  - Immeubles et Villa

#### Comportement des filtres
- Un seul filtre principal peut être actif à la fois
- Le filtre "Projets Études" affiche automatiquement les projets de la catégorie "Bâtiments institutionnels"
- Les sous-filtres restent visibles pour une navigation facile
- La sélection d'un sous-filtre met à jour l'affichage des projets correspondants

### Variables d'environnement
Assurez-vous de configurer les variables nécessaires dans le fichier `.env` ou dans les paramètres de déploiement Cloudflare.

## 🌟 Avant de commencer

1. Consultez les [issues existantes](https://github.com/devmandf/itamaxv6/issues) pour voir si votre contribution est déjà en cours de discussion
2. Pour les nouvelles fonctionnalités, ouvrez d'abord une issue pour discuter des changements proposés
3. Assurez-vous de respecter notre [code de conduite](CODE_OF_CONDUCT.md)
4. Le site est déployé sur Cloudflare Pages et utilise React avec Vite

## 🛠 Configuration requise

- Node.js 18+ (LTS recommandé)
- npm 9+ ou yarn 1.22+
- Git 2.25+
- Un éditeur de code (VS Code recommandé avec les extensions ESLint et Prettier)

## 🚦 Processus de contribution

1. **Fork** le dépôt
2. **Clone** votre fork :
   ```bash
   git clone https://github.com/votre-utilisateur/itamaxv6.git
   cd itamaxv6
   ```
3. **Installez** les dépendances :
   ```bash
   npm install
   ```
4. **Créez une branche** pour votre fonctionnalité :
   ```bash
   git checkout -b type/description-courte
   ```
   Types de branches :
   - `feature/` : Nouvelles fonctionnalités
   - `fix/` : Corrections de bugs
   - `docs/` : Documentation
   - `style/` : Mises en forme, corrections de style
   - `refactor/` : Refactorisation de code
   - `test/` : Ajout de tests
   - `chore/` : Tâches de maintenance

5. **Faites vos modifications** en suivant les conventions ci-dessous
6. **Testez** vos changements :
   ```bash
   # Exécuter les tests
   npm run test
   
   # Vérifier le linting
   npm run lint
   
   # Vérifier le formatage
   npm run format:check
   ```

7. **Formatez votre code** :
   ```bash
   npm run format
   ```

8. **Poussez** vos modifications :
   ```bash
   git add .
   git commit -m "type(scope): description claire de vos changements"
   git push origin votre-branche
   ```

9. **Ouvrez une Pull Request** vers la branche `main`
   - Utilisez le template de PR fourni
   - Décrivez clairement les changements apportés
   - Liez les issues concernées avec `Closes #123`

## 📝 Conventions de code

### 🔤 Convention de commits

Nous suivons le [Conventional Commits](https://www.conventionalcommits.org/) :

```
type(scope): description courte

Description plus détaillée si nécessaire

BREAKING CHANGE: description des changements cassants (si applicable)
```

Types de commits :
- `feat`: Nouvelle fonctionnalité
- `fix`: Correction de bug
- `docs`: Documentation
- `style`: Mise en forme, point-virgule manquant, etc.
- `refactor`: Changement de code qui ne corrige pas un bug ni n'ajoute une fonctionnalité
- `perf`: Changement de code qui améliore les performances
- `test`: Ajout ou modification de tests
- `chore`: Mise à jour des tâches de construction, configuration du gestionnaire de paquets, etc.

### 🎨 Style de code

- Utilisez Prettier pour le formatage du code
- Suivez les règles ESLint configurées
- Les noms de composants doivent être en PascalCase
- Les noms de fichiers doivent être en kebab-case
- Utilisez des composants fonctionnels avec des hooks React

### 🧪 Tests

- Écrivez des tests unitaires pour les nouvelles fonctionnalités
- Les tests doivent être dans des fichiers `*.test.js` ou `*.test.jsx`
- Utilisez `@testing-library/react` pour les tests des composants

## 🖼️ Directives pour les ressources média

### Logos partenaires
   - Utiliser des images en format WebP pour de meilleures performances
   - S'assurer que les logos sont nets et de haute qualité
   - Dimensions recommandées : minimum 400x200px pour une bonne qualité sur tous les écrans

2. **Style du composant Hero** :
   - Texte de surimpression avec fond semi-transparent
   - Utilisation de `backdrop-filter: blur(4px)` pour une meilleure lisibilité
   - Couleur de fond : `rgba(67, 82, 235, 0.1)` avec effet de flou
   - Ombre légère pour la profondeur
   - Animation au chargement avec Framer Motion
   - Texte blanc pour un contraste optimal

3. **Style et apparence des cartes** :
   - Dégradé de fond : `bg-gradient-to-br from-blue-50 to-white`
   - Bordure : `border-2 border-blue-100`
   - Ombre : `shadow-md hover:shadow-2xl hover:shadow-gray-600/40`
   - Effet de survol : 
     - Légère élévation (`hover:-translate-y-1`)
     - Ombre plus prononcée
     - Transition fluide (`transition-all duration-300`)
   - Texte : 
     - Titres en `text-gray-800` avec effet `hover:text-blue-600`
     - Description en `text-gray-600`
   - Images :
     - Légère mise à l'échelle au survol (`group-hover:scale-105`)
     - Superposition semi-transparente avec bouton "Voir en grand"

3. **Style des icônes** :
   - Les logos doivent être en couleur par défaut
   - Effet de survol : léger agrandissement (scale: 1.1) avec transition fluide
   - Ajouter un fond dégradé subtil au survol pour une meilleure interaction

3. **Accessibilité** :
   - Toujours inclure un attribut `alt` descriptif
   - S'assurer que les liens sont accessibles au clavier
   - Maintenir un bon contraste entre le logo et l'arrière-plan

4. **Performances** :
   - Optimiser les images avant l'ajout
   - Utiliser le chargement paresseux (lazy loading) pour les images
   - Spécifier les dimensions des images pour éviter les décalages de mise en page

## 🗺️ Bonnes pratiques pour les cartes interactives

1. **Configuration de la carte** :
   - Utiliser l'API Google Maps Embed
   - Toujours spécifier un marqueur personnalisé avec des coordonnées précises
   - Définir un niveau de zoom approprié (généralement entre 15 et 18)
   - Inclure un titre descriptif et un texte alternatif

2. **Performances** :
   - Chargement paresseux (lazy loading) activé
   - Utiliser le paramètre `loading="lazy"`
   - Limiter la taille de l'iframe

3. **Accessibilité** :
   - Toujours inclure un attribut `title` descriptif
   - S'assurer que la carte est naviguable au clavier
   - Fournir une alternative textuelle pour les lecteurs d'écran

## 🖼️ Gestion des images

1. **Formats recommandés** :
   - Utiliser exclusivement le format WebP pour les images
   - Convention de nommage : `projet-[courte-description]-[numéro].webp` (ex: `projet-amo-garefretlss-01sur01.webp`)
   - Résolution recommandée : 1200x800px pour les images de projet
   - Poids maximum : 300KB par image
   - Ajouter des balises alt descriptives en français
   - Pour chaque projet, fournir au moins une image représentative

2. **Taille et dimensions** :
   - Redimensionner les images avant l'upload
   - Utiliser des tailles adaptatives avec `srcset`
   - Spécifier les dimensions (width/height) pour éviter les décalages de mise en page

## 📋 Structure du projet

```
src/
├── assets/          # Images, polices et ressources statiques
├── components/      # Composants React réutilisables
│   ├── common/      # Composants génériques (boutons, cartes, etc.)
│   ├── layout/      # Composants de mise en page (header, footer, etc.)
│   └── sections/    # Sections spécifiques des pages
├── hooks/           # Hooks personnalisés
├── lib/             # Utilitaires et helpers
├── pages/           # Pages de l'application
├── services/        # Appels API et services externes
├── styles/          # Fichiers de style globaux
├── App.jsx          # Point d'entrée de l'application
└── main.jsx         # Point de montage React
```

## 🎨 Conventions de code

### 1. Général

- **Composants** : Utilisez des fonctions fléchées
- **Nommage** :
  - Composants : `PascalCase` (ex: `UserProfile.jsx`)
  - Fichiers non-composants : `kebab-case` (ex: `api-service.js`)
  - Variables et fonctions : `camelCase`
  - Constantes : `UPPER_SNAKE_CASE`
  - Fichiers de test : `ComponentName.test.jsx`
  - Fichiers de style : `ComponentName.module.css`

### 2. Styles et Design

- **Tailwind CSS** est la solution de style principale
- **Approche mobile-first**
- **Variables CSS** pour les couleurs et les espacements dans `tailwind.config.js`
- **Points de rupture** :
  - `sm:` (640px)
  - `md:` (768px)
  - `lg:` (1024px)
  - `xl:` (1280px)
  - `2xl:` (1536px)

### 3. Commit Messages

Suivez le format [Conventional Commits](https://www.conventionalcommits.org/) :

```
type(scope): description courte

Description plus détaillée si nécessaire
```

**Types de commits** :
- `feat:` Nouvelle fonctionnalité
- `fix:` Correction de bug
- `docs:` Modification de la documentation
- `style:` Changements de formatage (espace, point-virgule, etc.)
- `refactor:` Changement de code qui ne corrige pas un bug ni n'ajoute une fonctionnalité
- `perf:` Amélioration des performances
- `test:` Ajout ou modification de tests
- `chore:` Mise à jour des tâches de build, configuration, etc.

### 4. Tests

- Un test par composant et par fonctionnalité
- Utilisez `@testing-library/react` pour les tests
- Les tests doivent être dans des fichiers `*.test.jsx` à côté du composant

## 🔍 Revue du code

1. Assurez-vous que votre code respecte les standards du projet
2. Vérifiez que les tests passent
3. Mettez à jour la documentation si nécessaire
4. Demandez une relecture à au moins un autre développeur

## 🐛 Signaler un bug

1. Vérifiez que le bug n'a pas déjà été signalé
2. Créez une issue avec un titre clair et descriptif
3. Incluez des étapes pour reproduire le bug
4. Décrivez le comportement attendu et le comportement actuel
5. Ajoutez des captures d'écran si nécessaire

## 📝 Proposer une amélioration

1. Ouvrez une issue pour discuter de l'amélioration proposée
2. Détaillez le problème et la solution proposée
3. Si l'amélioration est approuvée, suivez le processus de contribution standard

## 📞 Besoin d'aide ?

Pour toute question, n'hésitez pas à :
- Créer une issue
- Contacter l'équipe de développement
- Consulter la documentation du projet

Merci de contribuer à faire d'Itamax un projet encore meilleur ! 🎉

### 5. Accessibilité

- Toujours inclure des textes alternatifs pour les images
- Utiliser des balises sémantiques (header, nav, main, section, etc.)
- S'assurer que tous les éléments interactifs sont accessibles au clavier
- Maintenir un contraste suffisant pour le texte

### 6. Gestion d'état

- Utiliser les hooks React de base (`useState`, `useEffect`, `useContext`)
- Pour un état global plus complexe, envisager d'utiliser Context API

### 7. Performance

- Éviter les re-rendus inutiles avec `React.memo` et `useMemo`/`useCallback`
- Charger les composants lourds de manière asynchrone avec `React.lazy`
- Optimiser les images avant de les ajouter au projet

## 🚀 Processus de contribution

1. **Créer une branche**
   ```bash
   git checkout -b feature/nom-de-la-fonctionnalite
   ```

2. **Faire des commits atomiques** avec des messages descriptifs
   ```bash
   git commit -m "feat: ajouter le composant Header"
   git commit -m "fix: corriger le défilement horizontal sur mobile"
   ```

3. **Pousser les modifications** vers votre fork
   ```bash
   git push origin feature/nom-de-la-fonctionnalite
   ```

4. **Ouvrir une Pull Request** avec une description claire des modifications

## 🧪 Tests

- Exécuter les tests avant de pousser vos modifications :
  ```bash
  npm test
  ```
- Vérifier la console du navigateur pour les avertissements et les erreurs

## 📝 Convention des commits

- `feat:` Nouvelle fonctionnalité
- `fix:` Correction de bug
- `docs:` Modification de la documentation
- `style:` Formatage, point-virgule manquant, etc. (pas de changement de code)
- `refactor:` Refactoring du code
- `perf:` Amélioration des performances
- `test:` Ajout ou modification de tests
- `chore:` Mise à jour des tâches de build, configuration, etc.

## 🔒 Sécurité

Si vous trouvez une vulnérabilité de sécurité, veuillez ne pas ouvrir d'issue publique. Contactez-nous directement à itamax@orange.sn

## 🙏 Remerciements

Merci de contribuer à l'amélioration du site web d'Itamax ! Votre aide est grandement appréciée.
