# Projet React "Licorne" — Progress (cours MERN / GLSI)

> Fichier de reprise : tout nouveau session OpenCode (ou autre) doit lire ceci pour continuer.
> **État : frontend COMPLET (p.7–49) + backend jusqu'à p.78 (connecté à Atlas).**
> **▶️ Prochaine étape : p.79–91 — les 3 modèles Mongoose** (`backend/models/` : productModel, userModel, orderModel — le code à coller est dans la session OpenCode de référence, sinon le recréer façon ProShop).

## ✅ Terminé

### Environnement (vérifié + installé)
- Node v24.19 / npm 11.17 ; VS Code + 4 extensions (ES7 React snippets, ES6 snippets, Prettier, Auto Rename Tag)
- Git for Windows 2.56 (Git Bash), Postman, MongoDB Compass
- Chrome : React DevTools + Redux DevTools (valider par clic "Add to Chrome" si pas fait)
- Git configuré : `khalil-dev916`

### MongoDB Atlas
- Projet **Licorne**, cluster **licorne0** (free M0), base **licorne**, collection **products** (vide — le seeder la remplit, p.92–100)
- `MONGO_URI` complet dans **`.env`** (jamais committé — testé + fonctionnel)
- **Connecté depuis l'app** : `MongoDB Connected: ac-ebjh6az-shard-00-02.gdntgnk.mongodb.net` ✅ (p.78)

### Git / GitHub
- Repo **https://github.com/khalil-dev916/Licorne** (privé), arbre de travail **propre**
- Historique : initial commit → (1) frontend p.17-24 → (2) frontend p.26-69 → (3) backend p.52-63 → (4) env template + notes
- `.env` ignoré ; `example.env` committé (template, p.74)
- **Habitude** : à chaque bloc terminé → `git add .` + `git commit -m "..."` + `git push` (ou panneau Source Control de VS Code)

### Frontend (`frontend/`, CRA, port 3000) — p.7 à p.49 COMPLET
- App créée (rfce), GitHub, Header/Footer + logo généré (`src/assets/logo.png`), styles custom (`src/styles/`)
- Données produits générées : `public/images/*.jpg` (8) — `src/products.js` **supprimé** (p.69 : les données viennent de l'API)
- Grille produits (`screens/HomeScreen.js`), carte + étoiles (`components/Product.js`, `Rating.js`)
- React Router (routes `/` et `/product/:id`, Link + LinkContainer), page détail (`screens/ProductScreen.js`)
- axios + **proxy** (`frontend/package.json` → `"proxy": "http://localhost:5000"`) : HomeScreen/ProductScreen fetchent l'API

### Backend (`backend/`, racine du projet, port 5000) — p.52 à p.78 COMPLET
- `npm init` racine + `"type": "module"` ; scripts : `start`, `server` (nodemon), `client`, `dev` (concurrently)
- `backend/server.js` : dotenv → routes `/`, `/api/products`, `/api/products/:id`
- `.env` (NODE_ENV, PORT, MONGO_URI) + `example.env` (template, p.74)
- `npm i mongoose` + `backend/config/db.js` (connectDB) branché dans server.js ✅
- **Lancer l'app : `npm run dev` à la racine** (front 3000 + back 5000 ensemble)

## ▶️ À faire — ordre du cours
1. **p.79–91 : modèles** — créer `backend/models/` : `productModel.js`, `userModel.js` (bcryptjs hook pre-save + matchPassword), `orderModel.js`
2. **p.92–100 : seeder** — retirer les `_id` de `backend/data/products.js`, `npm i bcryptjs colors`, créer `backend/data/users.js` + `backend/seeder.js`, scripts `data:import`/`data:destroy` dans package.json racine, exécuter → vérifier dans Compass/Atlas que `licorne.products` a 8 docs et `users` 2 docs
3. **p.101–118 : Postman** — workspace Licorne, env `baseURL`, routes testées ; extraire routes → `routes/productRoutes.js`, middleware `asyncHandler.js` + `errorMiddleware.js`, contrôleur `productController.js`
4. **p.119+ : Redux** — `@reduxjs/toolkit` + `react-redux`, `store.js`, `slices/apiSlice.js` + `productsApiSlice.js`, Loader/Message, remplacer axios par RTK Query
5. (Fin du plan : faire communiquer front/back via Redux — le PDF va jusqu'à p.147)

## ⚙️ Notes / pièges
- Redémarrer les serveurs demain : `npm run dev` (racine). `Ctrl+C` = arrêter quand le PDF dit *arrêter le serveur*
- Erreurs déjà rencontrés et réglés : `.gitignore` racine sans `/` devant node_modules ; `"type"` dupliqué dans package.json ; fichiers créés dans `frontend/` au lieu de la racine (toujours vérifier le dossier surligné dans l'Explorer)
- CRA déprécié mais OK ; fallback Vite si besoin ; warnings npm audit = bruit
- Images/logo **générés** (pas les vrais fichiers du cours) ; Connexion string aussi dans le Notepad de l'utilisateur
- Session OpenCode de référence : **« React MERN course - Licorne (soa): env + frontend p.7-49 done »** → `/sessions` ou `Ctrl+O` pour la reprendre avec tout le contexte (code des modèles dedans)
