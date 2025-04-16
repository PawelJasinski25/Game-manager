# 🎮 Prosta aplikacja z bazą gier

Aplikacja webowa stworzona w Node.js i Express, pozwalająca zarządzać bazą gier — dodawać, edytować, usuwać i sortować według oceny lub roku wydania.

## 💻 Technologie

- Node.js
- Express.js
- MySQL
- EJS

## 🛠 Instrukcja uruchomienia
1. Pobierz repozytorium.
2. Utwórz bazę danych. Można skorzystać z plików `schema.sql` i `seed.sql`.
3. Utwórz plik `.env` z następującą zawartością:

   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=twojehaslo
   DB_NAME=games
   PORT=3000
 
4. Zainstaluj zależności
   ```
   npm install
6. Uruchom aplikację
   ```
   npm start
