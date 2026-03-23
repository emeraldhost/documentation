---
description: Whitelist auf einem VEIN Server aktivieren
---

# So aktivierst du die Whitelist auf deinem VEIN Server

Mit der Whitelist kannst du den Zugang zu deinem Server auf bestimmte Spieler beschränken.

:::: tip Tipp
Hier findest du eine Anleitung, wie du deine [SteamID64](../steamid64-herausfinden.md) herausfindest.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Game.ini öffnen</b><br>
   Öffne die Datei `Game.ini` unter:

   ```
   /Vein/Saved/Config/LinuxServer/Game.ini
   ```

4. <b>Spieler zur Whitelist hinzufügen</b><br>
   Füge den Abschnitt `[/Script/Vein.VeinGameStateBase]` hinzu (falls nicht vorhanden) und trage die SteamID64 jedes Spielers ein:

   ```ini
   [/Script/Vein.VeinGameStateBase]
   WhitelistedPlayers=76561198012345678
   WhitelistedPlayers=76561198087654321
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: danger Wichtig
Sobald du einen Spieler zur Whitelist hinzufügst, können **nur noch gelistete Spieler** dem Server beitreten. Vergiss nicht, deine eigene SteamID64 ebenfalls hinzuzufügen!
::::

## Whitelist deaktivieren

Um die Whitelist zu deaktivieren, entferne alle `WhitelistedPlayers`-Einträge aus der `Game.ini`. Sobald keine Einträge mehr vorhanden sind, kann wieder jeder Spieler dem Server beitreten.
