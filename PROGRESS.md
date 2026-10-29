# Projet React "Licorne" — PROJET TERMINÉ ✅ (cours MERN / GLSI, Dr. Tarek BCHINI)

> **Le cours p.7–147 est COMPLET.** Toutes les parties du PDF ont été réalisées, testées et poussées sur GitHub.
> Ce document sert maintenant de **fiche projet** : état, fonctionnement, acquis, pistes d'extension.

## 🏆 État final (29/10/2026)

- **Frontend** (CRA, port 3000) : React 18 + React Router + React-Bootstrap + **Redux Toolkit / RTK Query** (axios entièrement retiré)
- **Backend** (Express 5, port 5000) : MVC (routes/controllers/middleware), mongoose, asyncHandler, errorMiddleware (404 + CastError → messages JSON propres)
- **Données** : MongoDB Atlas (cluster `licorne0`, base `licorne`) — 8 produits + 2 utilisateurs injectés par le **seeder** (`npm run data:import` / `data:destroy`), mots de passe hashés bcrypt
- **Tests** : collection Postman `Licorne API` (5 requêtes, dont chemins d'échec) dans `postman/` ; vérifié aussi en navigateur (grille, détail, cas d'erreur avec Message rouge « Ressource non trouvée (id invalide) »)
- **Git** : 16 commits propres, un par chapitre — https://github.com/khalil-dev916/Licorne (privé)

## 🚀 Lancer le projet
```
npm run dev        # à la racine : frontend 3000 + backend 5000 ensemble
```
Autres scripts : `npm run server` (nodemon seul), `npm run client`, `npm run data:import`, `npm run data:destroy`.
- `.env` (racine) contient `MONGO_URI`, `PORT`, `NODE_ENV` — **jamais committé** ; `example.env` = template public.
- Comptes seeded : `admin@licorne.com` / `khalil@licorne.com`, mot de passe `123456` (hashé en base).

## 🧠 Ce qui a été acquis (p.7 → p.147)
- **React** : composants, props, state, hooks (useState/useEffect/useParams), React Router, React-Bootstrap, styles custom
- **Node/Express** : API REST, dotenv, nodemon, concurrently, routers Express, async/await
- **MongoDB** : Atlas, mongoose, schemas/models (product avec reviews imbriquées, user avec hook bcrypt `pre('save')` + `matchPassword`, order), seeder
- **Architecture MVC** : routes (URL→fonction) / controllers (logique) / middleware (erreurs) / models (données) ; `asyncHandler` pour ne jamais perdre une erreur async
- **Redux Toolkit** : store, Provider, slices, `createApi` parent + `injectEndpoints`, hooks générés (`useGetProductsQuery`, `useGetProductDetailsQuery`), cache/refetch, DevTools
- **Postman** : workspace, environnement `{{baseURL}}`, collection versionnée, tests des chemins d'échec
- **Git/GitHub** : commits incrémentaux étiquetés par chapitre, push régulier, `.gitignore` (`.env`)

## 🐛 Pièges rencontrés (et réglés) — à relire avant tout nouveau projet
1. Fichiers créés dans le mauvais dossier (2×) → **vérifier le dossier surligné/breadcrumb avant Ctrl+S**
2. `"type": "module"` dupliqué dans package.json ; `\"` dans les scripts concurrently
3. `User.insertMany()` **ne déclenche pas** le hook `pre('save')` → hasher manuellement dans le seeder (fix committé `45d5d38`)
4. `_id` statiques (`'1'`…) interdits une fois mongoose en place — ObjectId généré par Mongo
5. Proxy CRA : les requêtes `/api/*` partent vers 5000 **uniquement** si le backend est lancé ; 404 vide = backend absent/crashé
6. Atlas : « Could not connect to any servers » est un message **générique** (réseau, DNS, TLS, IP non listée) — diagnostiquer (TLS/SRV/port 27017) avant de changer le whitelist ; ici = panne réseau matinale, rien à changer côté Atlas
7. CRA déprécié mais fonctionnel ; warnings npm audit = bruit

## ✨ Pistes pour aller plus loin (hors PDF)
- **Panier** : `cartSlice` Redux + page panier + shipping/payment (le modèle `orderModel` et `ORDERS_URL` sont déjà prêts)
- **Auth** : routes `/api/users` (register/login), `protect` middleware JWT, `usersApiSlice`
- **Commandes** : créer/passer commande, `ordersApiSlice`, écran « Mes commandes »
- **Déploiement** : Render (backend) + Netlify/Vercel (frontend), `BASE_URL`/proxy remplacés par l'URL prod, Atlas IP = partout
- Note : le PDF lui-même s'arrête à p.147 (« Fin du cours — Merci »), tout ci-dessus est bonus terrain
