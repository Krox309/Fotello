# Fotello — galeria wzorów i projektów

Gotowa strona statyczna (HTML/CSS/JS). Nie wymaga instalacji ani budowania.

## Publikacja na GitHub Pages

1. Utwórz nowe, puste repozytorium na GitHub.
2. Kliknij **Add file → Upload files** i przeciągnij **zawartość** tego folderu
   (`index.html`, `styles.css`, `app.js`, `projects.js`, `favicon.png`, `.nojekyll`, folder `images`).
3. Kliknij **Commit changes**.
4. Wejdź w **Settings → Pages**, w „Source" wybierz **Deploy from a branch**,
   branch `main`, folder **/ (root)**, zapisz.
5. Po chwili strona będzie dostępna pod adresem
   `https://TWOJA-NAZWA.github.io/NAZWA-REPO/` — link możesz wysłać komukolwiek.

## Dodawanie kolejnych projektów

1. Wrzuć zdjęcie do folderu `images/`.
2. Otwórz `projects.js` i skopiuj jeden blok `{ ... }`, zmieniając:
   `name`, `creator`, `description`, `image`, `number`.
3. Zapisz zmiany — strona zaktualizuje się automatycznie.
