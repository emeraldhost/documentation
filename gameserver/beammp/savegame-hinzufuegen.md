---
description: Custom Maps auf einen BeamMP Server hochladen
---

# So fügst du ein Savegame zu deinem BeamMP Server hinzu

BeamMP basiert auf der BeamNG.drive Sandbox und verwendet keine persistenten Welt-Savegames. Stattdessen kannst du eigene Map-Dateien auf deinen Server hochladen.

## So lädst du Custom Maps hoch

:::: warning Achtung
Stoppe deinen Server bevor du Dateien hochlädst, da diese sonst vom Server überschrieben werden.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Map-Dateien hochladen</b><br>
   Lade deine Custom-Map-Dateien in folgendes Verzeichnis auf dem Server hoch:

   ```
   /Resources/Client/
   ```

:::: warning Achtung
Bestehende Dateien im Zielverzeichnis werden überschrieben. Erstelle vorher ein Backup, falls du die aktuellen Dateien behalten möchtest.
::::

4. <b>Server starten</b><br>
   Starte deinen Server. Die hochgeladenen Maps stehen nun zur Verfügung.

:::: tip Tipp
Da BeamMP auf der BeamNG.drive Sandbox basiert, gibt es keine persistenten Welt-Savegames. Der Spielfortschritt wird nicht serverseitig gespeichert.
::::
