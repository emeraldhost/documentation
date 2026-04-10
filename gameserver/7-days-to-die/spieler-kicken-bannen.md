---
description: Spieler auf einem 7 Days to Die Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem 7 Days to Die Server

Du kannst Spieler per Konsolenbefehl oder über die Datei `serveradmin.xml` kicken und bannen.

:::: warning Voraussetzung
Du musst Admin auf deinem Server sein. Hier findest du eine Anleitung, wie du einen [Admin hinzufügst](admin-hinzufuegen.md).
::::

## Spieler per Konsolenbefehl kicken oder bannen

1. <b>Server beitreten</b><br>
   Tritt deinem 7 Days to Die Server bei.

2. <b>Konsole öffnen</b><br>
   Drücke `F1`, um die Konsole zu öffnen.

3. <b>Spieler anzeigen</b><br>
   Gib den Befehl `listplayers` ein, um alle verbundenen Spieler anzuzeigen.

4. <b>Spieler kicken oder bannen</b><br>
   Verwende einen der folgenden Befehle:

   ```
   kick <Name>
   ```

   ```
   ban <Name>
   ```

## Spieler über serveradmin.xml bannen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>serveradmin.xml öffnen</b><br>
   Öffne die Datei `serveradmin.xml` im Verzeichnis:

   ```
   /Saves/serveradmin.xml
   ```

4. <b>Spieler zur Blacklist hinzufügen</b><br>
   Füge im Bereich `<blacklist>` einen neuen Eintrag hinzu:

   ```xml
   <blacklist>
     <blacklisted platform="Steam" userid="STEAMID64_DES_SPIELERS" name="Spielername"
       unbandate="" reason="Grund" />
   </blacklist>
   ```

:::: tip Tipp
Hier findest du eine Anleitung, wie du die [SteamID64](../steamid64-herausfinden.md) eines Spielers herausfindest.
::::

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `listplayers` | Alle verbundenen Spieler anzeigen |
| `kick <Name>` | Spieler vom Server kicken |
| `ban <Name>` | Spieler dauerhaft bannen |
| `unban <Name>` | Ban eines Spielers aufheben |
