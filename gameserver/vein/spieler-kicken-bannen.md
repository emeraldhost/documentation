---
description: Spieler auf einem VEIN Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem VEIN Server

Du kannst Spieler über die `Game.ini` dauerhaft vom Server ausschließen.

## Spieler bannen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Game.ini öffnen</b><br>
   Öffne die Datei `Game.ini` und suche den Abschnitt:

   ```
   [/Script/Vein.VeinGameStateBase]
   ```

4. <b>BannedPlayers hinzufügen</b><br>
   Füge für jeden gebannten Spieler eine neue Zeile hinzu:

   ```
   BannedPlayers=<SteamID64>
   ```

   Beispiel:

   ```
   [/Script/Vein.VeinGameStateBase]
   BannedPlayers=76561198000000001
   BannedPlayers=76561198000000002
   ```

5. <b>Server starten</b><br>
   Starte deinen Server.

:::: tip Tipp
Hier findest du eine Anleitung, wie du deine [SteamID64](../steamid64-herausfinden.md) herausfindest.
::::

## Spieler entbannen

Entferne die entsprechende `BannedPlayers=<SteamID64>`-Zeile aus der `Game.ini` und starte den Server neu.
