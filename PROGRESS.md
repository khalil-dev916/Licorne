# Projet React "Licorne" — Progress (cours MERN / GLSI)

> Fichier de reprise : toute nouvelle session OpenCode (ou autre) doit lire ceci pour continuer.
> **État : frontend p.7–138 COMPLET + backend p.52–118 COMPLET (MVC + erreurs + données dans Atlas).**
> **▶️ Prochaine étape : p.139–146 — DERNIERE ligne de code : `getProductDetails` dans productsApiSlice + ProductScreen migré sur RTK Query (fin de axios partout).** Ensuite p.147 = "Fin du cours" → bilan final + commit + mise à jour de ce fichier.

## ✅ Terminé

### Environnement (vérifié + installé)
- Node v24.19 / npm 11.17 ; VS Code + 4 extensions ; Git ; Postman ; MongoDB Compass ; Chrome React/Redux DevTools
- Git configuré : `khalil-dev916` ; **habitude de commit validée** (l'utilisateur commit/push lui-même à chaque chapitre)

### MongoDB Atlas
- Projet **Licorne**, cluster **licorne0**, base **licorne** ; `MONGO_URI` dans `.env` (jamais committé)
- **Seeder exécuté** : `licorne.products` = 8 docs, `licorne.users` = 2 docs (admin@licorne.com / khalil@licorne.com, pw hashés `$2b$10$...`, passwords 123456)
- ⚠️ **Fix appliqué** (`45d5d38`) : `User.insertMany()` ne déclenche PAS le hook `pre('save')` → le seeder hash manuellement via `bcrypt.hash()` avant insertion. Ne pas retirer.

### Backend (`backend/`, racine, port 5000) — p.52–118 COMPLET
- Models : `models/productModel.js` (reviewSchema inclus), `userModel.js` (hook bcrypt + matchPassword), `orderModel.js`
- Seeder : `data/products.js` (sans `_id`), `data/users.js`, `seeder.js` ; scripts `data:import` / `data:destroy`
- **MVC** : `routes/productRoutes.js` → `controllers/productController.js` (asyncHandler, requêtes mongoose find/findById) → `utils/asyncHandler.js` ; `server.js` = dotenv + connectDB + `app.use('/api/products', routes)`
- **Erreurs** : `middleware/errorMiddleware.js` (notFound + errorHandler, CastError → 404, stack masqué en prod) branché en bas de server.js
- Scripts racine : start, server (nodemon), client, dev, data:import, data:destroy ; **lancement : `npm run dev`** (front 3000 + back 5000)

### Postman (p.101–118) — sauvegardé dans `postman/` (committé, extension VS Code)
- Workspace Licorne ; env **`Licorne env`** avec `baseURL=http://localhost:5000` (TICKET : valeur vide un moment — vérifier qu'elle est renseignée et sélectionnée en haut à droite)
- Collection **`Licorne API`** = 5 requêtes : Get All Products, Get Single Product (`/1` → 404 normal), Get Product By ObjectId, 404 unknown route (`/api/toto`), 404 invalid id (`notanid`)
- Fichiers `.request.yaml` modifiables côté disque → **Ctrl+Shift+P → Reload Window** après édition externe

### Frontend (`frontend/`, CRA, port 3000) — p.7–138 COMPLET
- Base : App/Router/Header/Footer/Product/Rating/Logo/styles ; `src/products.js` supprimé (données = API)
- **Redux (p.119–138)** : `npm i @reduxjs/toolkit react-redux` (PDF écrit "tooslkit" = faute) ; `src/store.js` (configureStore + apiSlice reducer/middleware) ; `Provider` dans `index.js` ; `src/constants.js` (BASE_URL='', PRODUCTS_URL='/api/products', USERS_URL, ORDERS_URL) ; `src/slices/apiSlice.js` (createApi parent, tagTypes) ; `src/slices/productsApiSlice.js` (getProducts, keepUnusedDataFor:5, export useGetProductsQuery)
- Composants : `components/Loader.js` (Spinner), `components/Message.js` (Alert, default param variant='info')
- **HomeScreen = 100 % RTK Query** (axios/useState/useEffect retirés) ; ProductScreen = axios encore, mais Loader au lieu de "Chargement..."
- Test validé : chaîne `localhost:3000 → proxy → 5000 → Atlas` = 200 + 8 produits ; onglet Redux DevTools montre `api.queries["getProducts"]`

### Git / GitHub
- Repo **https://github.com/khalil-dev916/Licorne** (privé), arbre propre, dernier commit `a20ed4a1`
- Historique chapitre par chapitre : models → seeder → fix hash → postman → mvc → error middleware → redux foundation → productsApiSlice
- `.env` ignoré ; `example.env` committé

## ▶️ À faire — ordre du cours (RESTE : 1 bloc de code + bilan)
1. **p.139–146 : ProductScreen sur Redux** :
   - `frontend/src/slices/productsApiSlice.js` → ajouter endpoint `getProductDetails: builder.query({ query: (productId) => `${PRODUCTS_URL}/${productId}` })` + exporter aussi `useGetProductDetailsQuery`
   - `frontend/src/screens/ProductScreen.js` → réécrire : retirer axios/useState/useEffect, faire `const { data: product, isLoading, error } = useGetProductDetailsQuery(id)` ; isLoading → `<Loader/>`, error → `<Message variant='danger'>{error?.data?.message || error.error}</Message>`, garder le reste du JSX (Link Retour, Row/Col, Rating, Card, bouton stock)
   - Tester : liste + détail + cas 404 (mauvais id) ; vérifier F12 → Redux → api.queries
   - Commit : `frontend: product screen via RTK Query, axios fully retired (p.139-146)`
2. **p.147 — Fin du cours** : commit final, bilan complet (toutes les parties du PDF faites), mettre à jour ce fichier (état = TERMINÉ), pousser.
3. (Optionnel suite terrain : panier/users/orders/Redux avancé — hors PDF, le cours s'arrête à p.147)

## ⚙️ Notes / pièges rencontrés
- **Méthode PDF** : texte extrait via PyPDF2 (`C:\Users\khali\Downloads\pratique_React_GLSI_unlocked.pdf`), pages en 0-based ; les captures sont illisibles → on recrée le code équivalent façon ProShop
- Fichiers créés au mauvais endroit (2× : `server.js` dans frontend, `constants.js` dans `frontend/` au lieu de `frontend/src/`) → **TOUJOURS vérifier le dossier surligné / le breadcrumb avant Ctrl+S**
- Interrogations à vide pendant un redémarrage `npm run dev` → 404 transitoire ; retester après compilation
- `insertMany` ignore `pre('save')` (voir fix seeder) ; CRA déprécié mais OK ; warnings npm audit = bruit
- Lancement : `npm run dev` à la racine ; `Ctrl+C` = arrêter
- Session OpenCode de référence : historique complet dans `/sessions` (Ctrl+O)
