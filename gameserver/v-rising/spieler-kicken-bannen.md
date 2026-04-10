---
description: Spieler auf einem V Rising Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem V Rising Server

Du kannst Spieler über die `banlist.txt` dauerhaft vom Server ausschließen. Ein Ingame-Kick-Befehl ist nicht verfügbar.

:::: info Hinweis
Du benötigst Admin-Rechte, um Spieler zu bannen. Siehe [Admin hinzufügen](admin-hinzufuegen.md).
::::

## Spieler bannen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>banlist.txt öffnen</b><br>
   Öffne die Datei `banlist.txt` unter:

   ```
   /save-data/Settings/banlist.txt
   ```

4. <b>SteamID64 hinzufügen</b><br>
   Füge die SteamID64 des Spielers in eine neue Zeile ein. Jede Zeile enthält eine SteamID64.

5. <b>Server starten</b><br>
   Starte deinen Server.

:::: tip Tipp
Hier findest du eine Anleitung, wie du deine [SteamID64](../steamid64-herausfinden.md) herausfindest.
::::

## Spieler entbannen

Entferne die entsprechende SteamID64 aus der `banlist.txt` und starte den Server neu.
