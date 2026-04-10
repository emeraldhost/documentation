---
description: Admin auf einem Core Keeper Server hinzufügen und entfernen
---

# So fügst du einen Admin auf deinem Core Keeper Server hinzu

Du kannst Admins über die Datei `Admins.json` verwalten.

:::: tip Tipp
Hier findest du eine Anleitung, wie du deine [SteamID64](../steamid64-herausfinden.md) herausfindest.
::::

## Admin hinzufügen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Admins.json öffnen</b><br>
   Öffne die Datei `Admins.json` unter:

   ```
   /.config/unity3d/Pugstorm/CoreKeeper/DedicatedServer/Admins.json
   ```

4. <b>Admin hinzufügen</b><br>
   Füge einen neuen Eintrag im `adminList`-Array hinzu:

   ```json
   { "index": 1, "privileges": 2, "name": "DeinCharaktername", "steamId": 76561198012345678 }
   ```

   | Feld | Beschreibung |
   |------|-------------|
   | `index` | Fortlaufende Nummer |
   | `privileges` | `2` = Voll-Admin, `1` = eingeschränkter Admin |
   | `name` | Dein Ingame-Charaktername |
   | `steamId` | Deine SteamID64 |

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

## Admin entfernen

Um einen Admin zu entfernen, lösche den entsprechenden Eintrag aus der `Admins.json` und starte den Server neu.
