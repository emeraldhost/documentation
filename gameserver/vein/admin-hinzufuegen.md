---
description: Admin auf einem VEIN Server hinzufügen
---

# So fügst du einen Admin auf deinem VEIN Server hinzu

Du kannst Admins und Super-Admins über die `Game.ini` hinzufügen.

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

4. <b>Admin hinzufügen</b><br>
   Füge den Abschnitt `[/Script/Vein.VeinGameSession]` hinzu (falls nicht vorhanden) und trage die SteamID64 ein:

   ```ini
   [/Script/Vein.VeinGameSession]
   AdminSteamIDs=76561198012345678
   ```

   Für mehrere Admins füge jede SteamID64 in einer neuen Zeile hinzu:

   ```ini
   [/Script/Vein.VeinGameSession]
   AdminSteamIDs=76561198012345678
   AdminSteamIDs=76561198087654321
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

## Super-Admin hinzufügen

Super-Admins haben erweiterte Rechte. Nutze dafür `SuperAdminSteamIDs` statt `AdminSteamIDs`:

```ini
[/Script/Vein.VeinGameSession]
SuperAdminSteamIDs=76561198012345678
AdminSteamIDs=76561198087654321
```

## Admin-Menü öffnen

Als Admin kannst du das Admin-Menü im Spiel mit der `\`-Taste (Backslash) öffnen. Darüber kannst du Items spawnen, Gameplay verwalten und den Server moderieren.
