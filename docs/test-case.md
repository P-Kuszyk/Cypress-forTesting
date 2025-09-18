## #1 Otwórz aplikacje
**TC_001**
Cel testu: Uruchomienie aplikacji w celu sprawdzenia działania, w razie zmiany adresu aplikacji.
Warunki wstępne: 
- Aplikacja jest uruchomiona przed uruchomieniem testu.
- Aplikacja zostanie uruchomiona w rozdzielczości 1920x1080.
Oczekiwany rezultat: Aplikacja uruchamia się prawidłowo, nie wyskakują błędy.
Kroki testowe:
1. Uruchum aplikacje
2. Uruchom test **TC_001**

## #2 Sprawdź tytuł aplikacji internetowej
**TC_002**
Cel testu: Sprawdzenie czy tytuł aplikacji jest poprawny.
Warunki wstępne: 
- Aplikacja posiada tytuł.
- Aplikacja zostanie uruchomiona w rozdzielczości 1920x1080.
Oczekiwany rezultat: Tytuł jest poprawny.
Kroki testowe:
1. Uruchom aplikacje internetową
2. Sprwadź tytuł w okienku przeglądarki

**TC_003**
Cel testu: Sprawdzenie czy tytuł aplikacji jest niepoprawny.
Warunki wstępne: Aplikacja posiada błędny tytuł.
Oczekiwany rezultat: 
- Tytuł jest niepoprawny.
- Aplikacja zostanie uruchomiona w rozdzielczości 1920x1080.
Kroki testowe:
1. Uruchom aplikacje internetową
2. Sprwadź tytuł w okienku przeglądarki

## #3 Sprawdź przyciski
**TC_004**
Cel testu: Sprwadzenie czy przycisk *Rejestacja* przekierowywuje na stronę *Rejestracji*
Warunki wstępne: 
- Przycisk *Rejestracja* jest dostępny na aplikacji.
- Aplikacja zostanie uruchomiona w rozdzielczości 1920x1080.
Oczekiwany rezultat: Po wciśnięciu przycisku, użytkownik jest przekierowany na stronę rejestracji. 
Kroki testowe:
1. Uruchom aplikację internetową 
2. Wciśnij przycisk *Rejestracja* 
3. Przejdź na stronę *Rejestracja*

**TC_005**
Cel testu: Sprwadzenie czy przycisk *Zaloguj* przekierowywuje na stronę *Logowanie*
Warunki wstępne: 
- Przycisk *Zaloguj* jest dostępny na aplikacji.
- Aplikacja zostanie uruchomiona w rozdzielczości 1920x1080.
Oczekiwany rezultat: Po wciśnięciu przycisku, użytkownik jest przekierowany na stronę logowania. 
Kroki testowe:
1. Uruchom aplikację internetową 
2. Wciśnij przycisk *Logowanie* 
3. Przejdź na stronę *Logowanie*

## #4 Sprawdź podstronę *Register*
**TC_006**
Cel testu: Przejście na stronę rejestracji 
Warunki wstępne: 
- Aplikacja zostanie uruchomiona w rozdzielczości 1920x1080.
- Przycisk *Rejestracja* jest dostępna na aplikacji.
Oczekiwany rezultat: Aplikacja przechodzi na podstronę *Rejestracji*.
Kroki testowe:
1. Uruchom aplikację internetową 
2. Wciśnij przycisk *Rejestracja* 
3. Przejdź na stronę *Rejestracja*

**TC_007**
Cel testu: Przejście na stronę rejestracji oraz powrót na stronę główną.
Warunki wstępne: 
- Aplikacja zostanie uruchomiona w rozdzielczości 1920x1080.
- Przycisk *Rejestracja* jest dostępna na aplikacji.
- Przycisk *Strona główna* jest dostępna na podstronie *Rejestracji*
Oczekiwany rezultat: Aplikacja uruchamia się, następnie przechodzi na stronę *Rejestracji*, następnie po wciśnięciu przycisku *Strona główna* wraca na stronę główna.
Kroki testowe:
1. Uruchom aplikację internetową 
2. Wciśnij przycisk *Rejestracja* 
3. Przejdź na stronę *Rejestracja*
4. Wciśnij przycisk *Strona główna*
5. Wróć na stronę główna aplikacji

## #5 Sprawdź polę *Textarea*
**TC_008**
Cel testu: Sprawdź czy *Textarea* jest pusty.
Warunki wstępne: 
- Aplikacja zostanie uruchomiona w rozdzielczości 1920x1080.
- Aplikacja posiada *Textarea*
Oczekiwany rezultat: Pole tekstowe jest puste.
Kroki testowe:
1. Uruchom aplikację internetową 
2. Sprawdź zawartość pola *Textarea*
3. Pole *Textarea* jest puste

**TC_009**
Cel testu: Wpisanie wartości tekstowej do *Textarea*, a następnie usunięcie jej za pomocą przycisku *Usuń*.
Warunki wstępne: 
- Aplikacja zostanie uruchomiona w rozdzielczości 1920x1080.
- Aplikacja posiada *Textarea*
- Aplikacja posiada przycisk *Usuń*
Oczekiwany rezultat:
Kroki testowe:
1. Uruchom aplikacje 
2. Wpisz tekst w polu *Textarea*
3. Wciśnij przycisk *Usuń* 
4. Sprwadzenie czy tekst został usunięty

**TC_010**
Cel testu: Sprawdzenie czy tekst zostaje w polu tekstowym po zapisaniu używając przycisku *Zapisz* oraz odświeżeniu aplikacji, a następnie wyczyszczenie *Textarea* za pomocą przycisku *Zapisz*.
Warunki wstępne: 
- Aplikacja zostanie uruchomiona w rozdzielczości 1920x1080.
- Aplikacja posiada *Textarea*
- Aplikacja posiada przycisk *Zapisz*
Oczekiwany rezultat: Po wpisaniu tekstu oraz zapisaniu go przyciskiem *Zapisz*, po odświeżeniu strony, w polu tekstowym tekst zostaje.
Kroki testowe:
1. Uruchom aplikacje 
2. Wpisz tekst w polu *Textarea*
3. Wciśnij przycisk *Zapisz*
4. Odśwież aplikacje 
5. Sprawdzenie czy pole tekstowe jest puste
6. Wyczyść zawartość *Textarea* za pomocą przycisku *Usuń*