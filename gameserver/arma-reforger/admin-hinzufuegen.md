---
description: Einen weiteren Admin auf einem Arma Reforger Server hinzufügen
---

# So fügst du einen Admin auf deinem Arma Reforger Server hinzu

Du kannst weitere Spieler als Admin hinzufügen, indem du ihre SteamID64 in die `config.json` einträgst.

:::: tip Tipp
Hier findest du eine Anleitung, wie du deine [SteamID64](../steamid64-herausfinden.md) herausfindest.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>config.json öffnen</b><br>
   Öffne die Datei `config.json` und suche den Eintrag `"admins"` im Bereich `"game"`.

4. <b>SteamID64 zur admins-Liste hinzufügen</b><br>
   Trage die SteamID64 des Spielers ein, der Admin werden soll:

   ```json
   "game": {
     "admins": [
       "76561198012345678",
       "76561198087654321"
     ]
   }
   ```

   Füge pro Eintrag eine SteamID64 hinzu. Achte darauf, dass die Einträge durch Kommas getrennt sind.

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: info Hinweis
Änderungen an der `config.json` werden erst nach einem Serverneustart wirksam. Die hier eingetragenen Spieler erhalten dauerhaft Admin-Rechte und müssen sich nicht per Passwort einloggen.
::::
