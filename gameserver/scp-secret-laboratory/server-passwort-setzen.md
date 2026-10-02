---
description: "Zugang zu einem SCP: Secret Laboratory Server ohne eingebautes Server-Passwort beschränken"
---

# So schützt du deinen SCP: Secret Laboratory Server ohne Server-Passwort

SCP: Secret Laboratory hat kein eingebautes Server-Passwort. In keiner Konfigurationsdatei gibt es einen Eintrag dafür, und auch in der Verwaltung kannst du kein Passwort setzen. Wenn du festlegen möchtest, wer deinem Server beitreten darf, nutzt du stattdessen die Whitelist. Diese Anleitung zeigt dir, welche Möglichkeiten du hast und was sie bewirken.

:::: warning Achtung
Der Pfad zu den Konfigurationsdateien enthält den Game Port deines Servers: `/.config/SCP Secret Laboratory/config/<Port>/`. Ersetze `<Port>` durch den tatsächlichen Game Port deines Servers. Den Game Port findest du in der Verwaltung unter **Übersicht**.
::::

## Whitelist statt Passwort

Die Whitelist ist der eigentliche Ersatz für ein Server-Passwort: Nur Spieler, deren ID du einträgst, können beitreten. Alle anderen werden abgewiesen.

1. <b>Game Port herausfinden</b><br>
   Öffne die Verwaltung deines Servers und notiere dir den Game Port aus der **Übersicht**.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Whitelist aktivieren</b><br>
   Setze in der Datei `/.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt` den Eintrag `enable_whitelist` auf `true`:

   ```
   enable_whitelist: true
   ```

5. <b>Spieler eintragen</b><br>
   Trage in der Datei `/.config/SCP Secret Laboratory/config/<Port>/UserIDWhitelist.txt` jede erlaubte ID in eine eigene Zeile ein, z.B.:

   ```
   76561198000000001@steam
   ```

   :::: tip Tipp
   Trage auch deine eigene ID ein, sonst sperrst du dich selbst aus.
   ::::

6. <b>Server starten</b><br>
   Speichere beide Dateien und starte deinen Server über die Verwaltung.

   :::: info Hinweis
   Spätere Änderungen an der Whitelist werden erst nach einem Neustart des Servers übernommen.
   ::::

Alle Details, z.B. zu Discord-IDs und Kommentaren in der Liste, findest du in der Anleitung [Whitelist einrichten](whitelist-einrichten.md).

## Zusätzlich nach Ländern filtern

Als zusätzlichen Filter kannst du Verbindungen nach Herkunftsland erlauben oder sperren – wie das geht, erfährst du in der Anleitung [Geoblocking einrichten](geoblocking-einrichten.md).

## Server in der Serverliste verstecken

Ein nicht verifizierter Server erscheint grundsätzlich nicht in der öffentlichen Serverliste. Erst nach einer [Verifizierung](server-verifizieren-lassen.md) wird dein Server dort angezeigt.

Ist dein Server verifiziert und du möchtest ihn trotzdem aus der Liste ausblenden, gibst du in der Konsole der Verwaltung folgenden Befehl ein:

```
!private
```

Um den Server wieder in der Liste anzuzeigen, gibst du folgenden Befehl ein:

```
!public
```

:::: danger Wichtig
Das Verstecken schützt deinen Server nicht. Wer die IP-Adresse und den Port kennt, kann weiterhin über **Direct Connect** beitreten (siehe [Server beitreten](server-beitreten.md)). Nur die Whitelist beschränkt den Zugang tatsächlich.
::::

## Passwort-Plugins

Ein Beitritts-Passwort lässt sich nur über ein Plugin nachrüsten. Wir empfehlen stattdessen die Whitelist, da sie ohne zusätzliche Plugins funktioniert.

:::: info Hinweis
Nutzt du ein eigenes Plugin oder eine Modifikation, die den Zugang zu deinem Server beschränkt (außer der Whitelist), musst du das bei einem verifizierten Server in der `config_gameplay.txt` kennzeichnen (siehe Verified Server Rules):

```
server_access_restriction: true
```

Stellt ein Plugin stattdessen eine eigene Whitelist bereit, setzt du:

```
custom_whitelist: true
```

Diese Einträge markieren deinen Server nur in der öffentlichen Serverliste. Ist dein Server nicht verifiziert, kannst du diese Einträge ignorieren.
::::

## Kein Beitritts-Passwort: override_password

:::: warning Achtung
In der Datei `/.config/SCP Secret Laboratory/config/<Port>/config_remoteadmin.txt` gibt es den Eintrag `override_password`. Das ist **kein** Passwort zum Beitreten, sondern ein Login für den [Remote Admin](remote-admin-nutzen.md), mit dem man sich den Rang aus `override_password_role` holen kann. Northwood rät in der Datei selbst ausdrücklich davon ab und empfiehlt stattdessen, Ränge über die ID zu vergeben (siehe [Ränge vergeben](raenge-vergeben.md)). Lass den Eintrag deshalb auf dem Standardwert:

```
override_password: none
```
::::
