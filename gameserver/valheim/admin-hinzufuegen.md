---
description: Admin auf einem Valheim Server hinzufügen
---

# So fügst du einen Admin auf deinem Valheim Server hinzu

Du kannst Admins über die Datei `adminlist.txt` hinzufügen. Jeder Admin wird anhand seiner SteamID64 identifiziert.

:::: tip Tipp
Hier findest du eine Anleitung, wie du deine [SteamID64](../steamid64-herausfinden.md) herausfindest.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>adminlist.txt öffnen</b><br>
   Öffne die Datei `adminlist.txt` im Verzeichnis:

   ```
   /config/adminlist.txt
   ```

   Falls die Datei dort nicht vorhanden ist, prüfe alternativ:

   ```
   /.config/unity3d/IronGate/Valheim/adminlist.txt
   ```

4. <b>SteamID64 eintragen</b><br>
   Trage die SteamID64 des Spielers ein, der Admin werden soll. Füge pro Zeile eine SteamID64 hinzu:

   ```
   76561198012345678
   76561198087654321
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: info Hinweis
Änderungen an der `adminlist.txt` werden erst nach einem Serverneustart wirksam.
::::
