# Projet React "Licorne" — Progress (cours MERN / GLSI)

> Fichier de reprise : tout nouveau session OpenCode (ou autre) doit lire ceci pour continuer.
> Dernier point : **frontend terminé (pages 7 → 49 du PDF `pratique_React_GLSI_unlocked.pdf`)**.
> Prochaine étape : **Backend (page 52+)**.

## État actuel

### ✅ Environnement (vérifié + installé)
- Node v24.19 / npm 11.17, VS Code (+ 4 extensions : ES7 React snippets, ES6 snippets, Prettier, Auto Rename Tag)
- Git for Windows 2.56 (Git Bash), Postman, MongoDB Compass installés
- Chrome : React DevTools + Redux DevTools (à valider par clic "Add to Chrome" si pas fait)
- Git configuré : user `khalil-dev916`

### ✅ MongoDB Atlas
- Projet **Licorne**, cluster **licorne0** (free M0), base **licorne**, collection **products** (vide — remplie par le seeder p.92+)
- Chaîne de connexion **MONGO_URI** (avec mot de passe) : dans le Notepad de l'utilisateur
  - Forme : `mongodb+srv://tmalmtwhsh764_db_user:<pass>@licorne0.gdntgnk.mongodb.net/licorne?retryWrites=true&w=majority`
  - ⚠️ Jamais committer. Va dans `.env` (gitignoré) au chapitre p.63–72.
  - Testé OK depuis la machine (ping + listCollections).

### ✅ Git / GitHub
- Racine = `C:\Users\khali\OneDrive\Bureau\soa` (ce dossier EST le dossier projet du cours "exemple")
- `.gitignore` à la racine (node_modules/, .env, build/…) — **un seul**, malgré le frontend
- Repo : **https://github.com/khalil-dev916/Licorne** (privé), premier push fait (15 fichiers)

### ✅ Frontend (`frontend/`, Create React App, port 3000)
- p.7–8 : app créée, fichiers inutiles supprimés, composant généré via `rfce`
- p.12–16 : Git/GitHub en place (`.git` imbriqué supprimé)
- p.17–24 : react-bootstrap + bootstrap + react-icons, Header/Footer, **logo généré** (`src/assets/logo.png`), styles custom (`src/styles/index.css`, `src/styles/bootstrap.custom.css`), ancien `src/index.css` supprimé
- p.26–30 : `src/products.js` (8 produits générés), `public/images/*.jpg` (8 images générées), `screens/HomeScreen.js`, `components/Product.js` (grille responsive)
- p.31–39 : react-router-dom v7 + react-router-bootstrap ; `BrowserRouter` dans `index.js`, `Routes` dans `App.js`, `<Link>` dans Product, `<LinkContainer>` dans Header
- p.40–49 : `components/Rating.js` (étoiles + demi-étoiles), `screens/ProductScreen.js` (`useParams`, route `/product/:id`, stock/bouton désactivé pour countInStock 0)

## ▶️ Prochaine étape : Backend (p.52)
1. `npm init` à la **racine** (pas dans frontend) → entry point `server.js` → ajouter `"type": "module"`
2. Créer `backend/server.js`, script `"start": "node backend/server.js"`
3. `npm i express` → serveur port 5000, tester `localhost:5000`
4. Copier `frontend/src/products.js` → `backend/data/products.js`
5. Routes API `/api/products` + `/api/products/:id`
6. `npm i -D nodemon concurrently dotenv` → scripts `server`, `client`, `dev` (p.60–63)
7. `.env` à la racine : `NODE_ENV`, `PORT=5000`, puis `MONGO_URI` (p.72)
8. Ensuite : axios + proxy (p.65), mongoose (p.76), modèles/séeder (p.79–100), Postman (p.101), Redux (p.119)

## ⚙️ Notes / pièges connus
- Serviteur front : `cd frontend` → `npm start` (port 3000). `Ctrl+C` = arrêter (les étapes "arrêter le serveur" du PDF)
- CRA est déprécié mais fonctionne ; fallback = Vite (non utilisé)
- Si EPERM/locked files : OneDrive peut synchroniser pendant le build — relancer `npm start`
- Les images produits et le logo ont été **générés** (pas les vrais fichiers du cours)
- Session OpenCode de référence : « React MERN course - Licorne (soa): env + frontend p.7-49 done » (reprendre via `/sessions` ou Ctrl+O)
