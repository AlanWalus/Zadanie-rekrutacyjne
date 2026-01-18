# Zadanie-rekrutacyjne
uzasadnienie przyjętej struktury projektu.

## Instrukcja uruchomienia:
- Pobierz pliki index.html, style.css, apps.js, tasks.js
- Stwórz nowy folder i przenieś do niego pobrane pliki
- Uruchom index.html 

## Opis plików:
- index.html - Szkielet aplikacji webowej, zawierający strukturę interfejsu użytkownika (formularz dodawania, filtry oraz tabela)
- style.css - Zawiera definicje stylów
- task.js - Moduł logiki danych, odpowiadający za operacje na tablicy: dodawanie rekordów, filtrowanie, aktualizację statusu
- apps.js - Kontroler aplikacji, obsługujący zdarzenia (kliknięcia, zmiany filtrów) i synchronizuje stan danych z DOM

## Uzasadnienie przyjętej struktury projektu:
Przyjęta struktura, jest spowodowana możliwością przyszłej skalowalności oraz dbałością o czystość kodu, rozdzielając warstwę logiczną od interfejsu użytkownika. Sprawia to, że logika jest niezależna od wyglądu i jest łatwiejsza do testowania.
