Test Technique Carbonapp : tv-app

Application dockerisée.

Lancer l'application :
1 - docker build .
2 - docker run -p PORT-DE-CHOIX:3000 ID-CONTAINER

Ordre de révision du code :
1 - /src/index.js
2 - /src/app.js
3 - /src/components/Layout/
4 - /src/pages/\*.js
5 - /src/store/index.js
6 - /src/components/Auth
7 - /src/store/ - auth-_.js
8 - /src/components/Shows
9 - /src/components/UI
10 - /src/components/Favorites
11 - /src/store/favorite-_.js
13 - /src/components/Shows

Dépendances :

- react-router-dom n'est pas à la derniere version (v6) par choix personnelle.
- Utilisation de MaterialUI pour le Design de l'application
