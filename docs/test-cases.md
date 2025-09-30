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

## #6 Formularze i listy
**TC_011**
Cel testu: Sprawdzenie czy możliwe jest zaznaczenie wszystkich opcji w liście wielokrotnego wyboru.
Warunki wstępne: 
- Aplikacja zostanie uruchomiona w rozdzielczości 1920x1080.
- Dostępna jest lista wielokrotnego wyboru
Oczekiwany rezultat: W liście wielokrotnego wyboru są wybrane wszystkie pozycje.
Kroki testowe:
1. Uruchom aplikacje 
2. Odznacz wszystkie pozycje w liście wielokrotnego wyboru

**TC_012**
Cel testu: Sprwadzenie możliwości zaznaczenie wyboru przy jednej pozycji w liście jednokrotnego wyboru.
Warunki wstępne: 
- Aplikacja zostanie uruchomiona w rozdzielczości 1920x1080.
- Dostępna jest lista jednokrotnego wyboru
Oczekiwany rezultat: W liście jednokrotnego wyboru jest wybrana jedna pozycja.
Kroki testowe:
1. Uruchom aplikacje 
2. Odznacz jedno pole w liście jednokrotnego wyboru

**TC_013**
Cel testu: Sprawdzenie możliwości zmiany wyboru domyślnej wartości w liście rozwijanej.
Warunki wstępne: 
- Aplikacja zostanie uruchomiona w rozdzielczości 1920x1080.
- Dostępna jest lista rozwijana
Oczekiwany rezultat: Wybrana jest inna opcja w liście rozwijanej, niż domyślna.
Kroki testowe:
1. Uruchom aplikacje 
2. Wybierz inna opcje z listy rozwijanej, niż domyślna

**TC_014**
Cel testu: Sprawdzenie czy możliwe jest zaznaczenie wszystkich opcji w liście wielokrotnego wyboru, zaznaczenie jednej opcji w liście jednokrotnego wyboru oraz wybór z listy rozwijanej.
Warunki wstępne: 
- Aplikacja zostanie uruchomiona w rozdzielczości 1920x1080.
- Dostępna jest lista wielokrotnego wyboru
- Dostępna jest lista jednokrotnego wyboru
- Dostępna jest lista rozwijana
Oczekiwany rezultat: W liście wielokrotnego wyboru są wybrane wszystkie pozycje, w jednokrotnej liście jedno pole, a z listy rozwijanej wybrana jest inna opcja niż domyślna.
Kroki testowe:
1. Uruchom aplikacje 
2. Odznacz wszystkie pozycje w liście wielokrotnego wyboru
3. Odznacz jedno pole w liście jednokrotnego wyboru
4. Wybierz inne pole niż *Pies* z listy rozwijanej

**TC_015**
Cel testu: Zaznaczanie i odznaczanie pozycji w liście wielokrotnego oraz jednokrotnego wyboru.
Warunki wstępne: 
- Aplikacja zostanie uruchomiona w rozdzielczości 1920x1080.
- Dostępna jest lista wielokrotnego wyboru
- Dostępna jest lista jednokrotnego wyboru
- Dostępna jest lista rozwijana
Oczekiwany rezultat: Z listy wielokrotnego wybory zaznaczone są wszystkie opcje, następnie w liście jednokrotnego wyboru zaznaczona jest jedna opcja, później każda zaznaczona opcja zostaje odznaczona.
Kroki testowe:
1. Uruchom aplikacje 
2. Zaznacz dwie opcje w liście wielokrotnego wyboru
3. Zaznacz jedną opcje w liście jednokrotnego wyboru
4. Odnznacz wszystkie opcje w liście wielokronego wyboru
5. Odznacz jedną opcję w liście jednokrotnego wyboru

**TC_016**
Cel testu: Sprwadź czy aktualny kolor tła aplikacji pokrywa się z domyślnym kolorem.
Warunki wstępne: 
- Aplikacja zostanie uruchomiona w rozdzielczości 1920x1080.
- Kolor tła aplikacji pobrany jest z pliku CSS
Oczekiwany rezultat: Tło aplikacji ma taki sam kolor, jaki jest ustawiony domyślnie.
Kroki testowe:
1. Uruchom aplikację
2. Sprawdź jaki jest aktualny kolor tła
3. Porównaj kolor tła z domyślnym jaki jest ustawiony dla aplikacji

**TC_017**
Cel testu: Sprawdź działanie przycisku *Zmień kolor strony*
Warunki wstępne: 
- Aplikacja zostanie uruchomiona w rozdzielczości 1920x1080.
- Przycisk *Zmień kolor strony* istnieje na aplikacji
- Przycisk jest responsywny
Oczekiwany rezultat: Po wciśnięciu przycisku tło strony oraz textarea i div z form zmienia swój kolor.
Kroki testowe:
1. Uruchom aplikacje
2. Wciśnij przycisk *Zmień kolor strony* 
3. Sprwadź tło wymienionych elementów i porównaj go z kolorem domyślnym

**TC_018**
Cel testu: Sprawdź działanie przycisku *Zmień kolor strony* oraz powrót do ustawień domyślnych
Warunki wstępne: 
- Aplikacja zostanie uruchomiona w rozdzielczości 1920x1080.
- Przycisk *Zmień kolor strony* istnieje na aplikacji
- Przycisk jest responsywny
Oczekiwany rezultat: Po wciśnięciu przycisku tło strony oraz textarea i div z form zmienia swój kolor, a następnie po jeszcze jedynm wciśnięciu kolory wracają do wartości domyślnych.
Kroki testowe:
1. Uruchom aplikacje
2. Wciśnij przycisk *Zmień kolor strony* 
3. Sprwadź tło wymienionych elementów i porównaj go z kolorem domyślnym
4. Wciśnij przycisk *Zmień kolor strony*
5. Sprawdź tło wymienionych elementów, czy są takie jak na początku
------------------------------------------------------------------------------------------------------------------

***WZÓR + SKRÓTY*** 

**TC_000**
Cel testu: 
Warunki wstępne: 
-
-
Oczekiwany rezultat: 
Kroki testowe:
1. 
2. 
3. 

### SKRÓTY:

##### NAGŁÓWKI: 
\ # Nagłówek 1 → największy nagłówek /
\ ## Nagłówek 2 → średni nagłówek /
\ ### Nagłówek 3 → mniejszy nagłówek /

##### POGRUBIENIE:
\ **Tekst pogrubiony** /
\ __Tekst pogrubiony__ / 

##### KURSYWA:
\ *Kursywa w tekscie* /
\ _Kursywa w tekscie_ /

##### POGRUBIENIE + KURSYWA:
\ ***Teskt pogrubiony z kursywą*** /
\ ___Teskt pogrubiony z kursywą___ /

##### CYTATY:
\ >To jest cytat | 
\ >>To jest cytat wewnątrz cytatu /

##### LISTY 
\ -LISTA PUNKTOWANA /
\ 1. LISTA NUMEROWANA /

##### KOD
\ `kod źródłowy` /