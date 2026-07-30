---
description: Admin auf einem PixARK Server hinzufügen
---

# So fügst du einen Admin auf deinem PixARK Server hinzu

Auf einem PixARK Server gibt es zwei Wege zu Adminrechten:

| Weg | Wann sinnvoll |
|-----|---------------|
| **Admin-Liste** mit SteamID64 | Für feste Admins. Die Rechte greifen automatisch, sobald der eingetragene Spieler den Server betritt – ganz ohne Passwort und ohne Befehl. |
| **Admin-Passwort** | Für die Fernwartung per RCON und für Werkzeuge, die sich mit dem Server verbinden. |

:::: tip Tipp
Hier findest du eine Anleitung, wie du deine [SteamID64](../steamid64-herausfinden.md) herausfindest.
::::

## Feste Admins über die Admin-Liste

Trage die Spieler in eine Textdatei auf dem Server ein. Sie erhalten ihre Rechte anschließend automatisch beim Verbinden.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Die Admin-Liste wird nur beim Serverstart eingelesen.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Datei öffnen</b><br>
   Öffne folgende Datei. Existiert sie noch nicht, lege sie an:

   ```
   /ShooterGame/Saved/AllowedCheaterSteamIDs.txt
   ```

4. <b>SteamID64 eintragen</b><br>
   Trage pro Zeile genau eine SteamID64 ein. Eine SteamID64 ist 17-stellig und beginnt mit `765611`:

   ```
   76561198012345678
   76561198087654321
   ```

   :::: warning Achtung
   Trage wirklich nur die reine Zahl ein – keine Namen, keine Kommentare, keine Kommas. Ein einziger falscher Eintrag kann dazu führen, dass die Datei nicht ausgewertet wird.
   ::::

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: info Hinweis
Für diesen Weg ist kein Konsolenbefehl nötig: Die Rechte greifen automatisch, sobald ein eingetragener Spieler den Server betritt.
::::

## Admin-Passwort setzen

1. <b>Verwaltung öffnen</b><br>
   Öffne die **Verwaltung** deines Servers und wechsle zu den **Einstellungen**.

2. <b>Passwort eintragen</b><br>
   Trage im Feld für das **Admin-Passwort** (`ServerAdminPassword`) dein gewünschtes Passwort ein.

3. <b>Server neu starten</b><br>
   Speichere die Änderung und starte deinen Server neu, damit das neue Passwort übernommen wird.

:::: danger Wichtig
Das Admin-Passwort ist gleichzeitig dein **RCON-Passwort**. Wer es kennt, kann deinen Server aus der Ferne steuern. Verwende deshalb ein anderes Passwort als das Server-Passwort und gib es nur an Personen weiter, denen du vollständig vertraust.
::::

## Adminbefehle nutzen

Adminbefehle beginnen in PixARK mit dem Präfix `cheat`, zum Beispiel:

```
cheat giveitemnum 001 1 1 0
```

:::: info Hinweis
Trägst du dich über die Datei `AllowedCheaterSteamIDs.txt` ein, stehen dir die Befehle direkt nach dem Verbinden zur Verfügung.
::::

## Server per RCON steuern

Alternativ zum Spiel kannst du deinen Server über RCON verwalten. Das ist praktisch, wenn du gerade nicht im Spiel bist.

1. <b>Admin-Passwort setzen</b><br>
   Setze zuerst das Admin-Passwort wie oben beschrieben. Ohne Admin-Passwort ist keine RCON-Anmeldung möglich.

2. <b>Verbindungsdaten heraussuchen</b><br>
   Du benötigst die **IP-Adresse**, den **RCON Port** aus der Verwaltung und dein **Admin-Passwort**.

3. <b>RCON-Client verbinden</b><br>
   Verbinde dich mit einem RCON-Client. Für ARK-basierte Server hat sich **Arkon** bewährt: Trage dort IP-Adresse, RCON Port und Admin-Passwort ein und stelle die Verbindung her.

:::: warning Achtung
Welche Befehle ein PixARK Server über RCON annimmt, ist nicht offiziell dokumentiert. Nimm dauerhafte Änderungen an deinen Servereinstellungen deshalb immer in der **Verwaltung** vor und nicht per RCON – sonst gehen sie beim nächsten Neustart wieder verloren.
::::
