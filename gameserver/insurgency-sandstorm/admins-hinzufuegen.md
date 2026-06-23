---
description: "Admins auf einem Insurgency: Sandstorm Server hinzufügen"
---

# So fügst du Admins auf deinem Insurgency: Sandstorm Server hinzu

Admins werden über die Datei `Admins.txt` festgelegt, indem du die **SteamID64** der jeweiligen Spieler einträgst. Ein Admin kann anschließend im Spiel das Admin-Menü öffnen (standardmäßig über die **Minus-Taste** des Nummernblocks).

## Admin hinzufügen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Ordner anlegen</b><br>
   Wechsle in den Ordner `Insurgency/Config/Server/`. Falls die Ordner `Config` und `Server` noch nicht existieren, lege sie an.

4. <b>Admins.txt erstellen</b><br>
   Erstelle in diesem Ordner die Datei `Admins.txt` (falls noch nicht vorhanden).

5. <b>SteamID64 eintragen</b><br>
   Trage die [SteamID64](../steamid64-herausfinden.md) jedes Admins ein — **eine ID pro Zeile**:

   ```
   76561198000000000
   76561198000000001
   ```

6. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server. Die Änderungen werden erst nach einem Neustart (oder Map-Wechsel) übernommen.

:::: tip Tipp
Du kannst mehrere Admin-Listen mit unterschiedlichen Namen anlegen und über den Startparameter `-AdminList=Dateiname` auswählen, welche geladen wird (Dateiname ohne `.txt`). So lässt sich z.B. schnell zwischen verschiedenen Admin-Teams umschalten.
::::

:::: info Hinweis
Achte darauf, dass die Datei exakt `Admins.txt` heißt (nicht `Admins.txt.txt` — Windows blendet bekannte Dateiendungen standardmäßig aus).
::::
