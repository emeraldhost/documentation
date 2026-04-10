---
description: Spieler auf einem DayZ Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem DayZ Server

Du kannst Spieler per Ingame-Chat-Befehl kicken oder über die Konfigurationsdatei dauerhaft bannen.

:::: warning Voraussetzung
Du musst Admin auf deinem Server sein. Hier findest du eine Anleitung, wie du einen [Admin hinzufügst](admin-hinzufuegen.md).
::::

:::: tip Tipp
Hier findest du eine Anleitung, wie du die [SteamID64](../steamid64-herausfinden.md) eines Spielers herausfindest.
::::

## Spieler per Chat-Befehl kicken

1. <b>Server beitreten</b><br>
   Tritt deinem DayZ Server bei und melde dich als Admin an.

2. <b>Chat öffnen</b><br>
   Drücke `Enter`, um den Chat zu öffnen.

3. <b>Spieler kicken</b><br>
   Gib folgenden Befehl ein:

   ```
   #kick <SteamID64>
   ```

## Spieler über ban.txt dauerhaft bannen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>ban.txt öffnen</b><br>
   Öffne die Datei `ban.txt` im Hauptverzeichnis deines Servers. Erstelle die Datei, falls sie nicht existiert.

4. <b>Spieler zur Banliste hinzufügen</b><br>
   Trage die SteamID64 des Spielers in eine neue Zeile ein:

   ```
   76561198012345678
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

## Spieler per Chat-Befehl bannen

Du kannst Spieler auch direkt per Chat-Befehl bannen, ohne die `ban.txt` manuell zu bearbeiten:

1. <b>Chat öffnen</b><br>
   Drücke `Enter`, um den Chat zu öffnen.

2. <b>Spieler bannen</b><br>
   Gib folgenden Befehl ein:

   ```
   #exec ban <Name>
   ```

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `#kick <SteamID64>` | Spieler vom Server kicken |
| `#exec ban <Name>` | Spieler dauerhaft bannen |
| `#shutdown` | Server herunterfahren |
