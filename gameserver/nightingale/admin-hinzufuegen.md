---
description: Admin auf einem Nightingale Server hinzufügen
---

# So fügst du einen Admin auf deinem Nightingale Server hinzu

Nightingale kennt **keine Admin-Liste mit Steam- oder Epic-IDs**. Stattdessen gibt es ein einziges **Admin-Passwort** für den Server: Wer es im Spiel eingibt, schaltet den Admin-Modus für sich frei. Du musst also keine IDs sammeln – du gibst das Passwort einfach an die Personen weiter, die Adminrechte bekommen sollen.

:::: warning Achtung
Jeder, der das Admin-Passwort kennt, kann auf deinem Server Spieler kicken und bannen. Gib es nur an Personen weiter, denen du vertraust, und verwende ein anderes Passwort als das Server-Passwort.
::::

## Admin-Passwort setzen

1. <b>Verwaltung öffnen</b><br>
   Öffne die **Verwaltung** deines Servers und wechsle zu den **Einstellungen**.

2. <b>Admin-Passwort eintragen</b><br>
   Trage im Feld **Admin Passwort** dein gewünschtes Passwort ein.

3. <b>Server neu starten</b><br>
   Speichere die Änderung und starte deinen Server neu, damit das neue Passwort übernommen wird.

:::: danger Wichtig
Ist im Feld bereits ein Passwort vorausgefüllt, ersetze es unbedingt durch ein eigenes, bevor dein Server öffentlich erreichbar ist – sonst kann sich jeder, der den vorausgefüllten Wert kennt, Adminrechte verschaffen.
::::

:::: info Warum nicht in der Konfigurationsdatei?
Das Admin-Passwort steht in der Datei `/NWX/Config/ServerSettings.ini` in der Zeile `AdminPassword=`. Dein Server schreibt diese Zeile aber bei **jedem Start** aus dem Feld der Verwaltung neu. Eine manuelle Änderung in der Datei wäre beim nächsten Start wieder weg – setze das Passwort deshalb ausschließlich in der Verwaltung. Dasselbe gilt für das Server-Passwort (`Password=`) und die Schwierigkeit (`StartingDifficulty=`).
::::

## Admin-Modus im Spiel aktivieren

1. <b>Server beitreten</b><br>
   Verbinde dich mit deinem Server. Wie das geht, steht unter [Server beitreten](server-beitreten.md).

2. <b>Menü öffnen</b><br>
   Drücke im Spiel `Esc`, um das Menü zu öffnen.

3. <b>Admin Mode wählen</b><br>
   Wähle den Eintrag **Admin Mode: OFF**.

4. <b>Passwort eingeben</b><br>
   Trage das Admin-Passwort deines Servers ein und bestätige mit **Confirm**.

5. <b>Ergebnis prüfen</b><br>
   Steht im Menü anschließend **Admin Mode: ON**, bist du als Admin authentifiziert.

## Admin-Modus wieder deaktivieren

1. <b>Menü öffnen</b><br>
   Drücke `Esc` und wähle den Eintrag **Admin Mode: ON**.

2. <b>Bestätigen</b><br>
   Bestätige mit **Confirm**.

3. <b>Neu verbinden</b><br>
   Verlasse den Server und tritt erneut bei, damit die Änderung wirksam wird.

:::: info Hinweis
Der Admin-Modus gilt immer nur für die aktuelle Sitzung und die aktuelle Verbindung. Nach einem Verbindungsabbruch oder einem Serverneustart aktivierst du ihn beim nächsten Beitritt erneut.
::::

:::: tip Tipp
Wie du Spieler als Admin vom Server entfernst, erfährst du unter [Spieler kicken & bannen](spieler-kicken-bannen.md).
::::

## Was der Admin-Modus kann – und was nicht

:::: info Hinweis
Der Admin-Modus dient in Nightingale dazu, Spieler zu **kicken und zu bannen**. Klassische Adminbefehle über einen Chat gibt es nicht, und die Konsole in der Verwaltung zeigt ausschließlich die Ausgaben des Servers an – sie nimmt **keine** Befehle entgegen.
::::

:::: warning Cheat- und Debugmenü
Davon getrennt gibt es das Cheat- und Debugmenü. Für Kick und Bann brauchst du es **nicht**. Möchtest du es auf deinem Server nutzen, sind drei Dinge nötig:

- Schalte es auf dem Server über die Variable **Enable Cheats** in der Verwaltung frei.
- Starte deinen Client zusätzlich mit der Startoption `-EnableCheats`. Trage sie in Steam unter **Bibliothek → Nightingale → Eigenschaften → Startoptionen** ein.
- Authentifiziere dich im Spiel mit dem Admin-Passwort, wie oben beschrieben.
::::
