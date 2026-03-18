---
description: Whitelist auf einem 7 Days to Die Server aktivieren
---

# So aktivierst du die Whitelist auf deinem 7 Days to Die Server

Mit der Whitelist kannst du den Zugang zu deinem Server auf bestimmte Spieler beschränken.

:::: tip Tipp
Hier findest du eine Anleitung, wie du deine [SteamID64](../steamid64-herausfinden.md) herausfindest.
::::

## Whitelist über serveradmin.xml einrichten

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>serveradmin.xml öffnen</b><br>
   Öffne die Datei `serveradmin.xml` im Verzeichnis:

   ```
   /Saves/serveradmin.xml
   ```

4. <b>Spieler zur Whitelist hinzufügen</b><br>
   Füge im Bereich `<whitelist>` Einträge für jeden Spieler hinzu:

   ```xml
   <whitelist>
     <user platform="Steam" userid="76561198012345678" name="Spieler1" />
     <user platform="Steam" userid="76561198087654321" name="Spieler2" />
   </whitelist>
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: info Hinweis
Sobald **ein Spieler** in der Whitelist eingetragen ist, können nur noch gelistete Spieler dem Server beitreten. Admins können immer beitreten, unabhängig von der Whitelist.
::::

## Whitelist per Konsolenbefehl verwalten

Falls du bereits Admin bist, kannst du die Whitelist auch ingame verwalten. Drücke `F1`, um die Konsole zu öffnen:

| Befehl | Beschreibung |
|--------|-------------|
| `whitelist add <SteamID64>` | Spieler zur Whitelist hinzufügen |
| `whitelist remove <SteamID64>` | Spieler von der Whitelist entfernen |
| `whitelist list` | Alle Spieler auf der Whitelist anzeigen |
