---
description: Mods auf einem BeamMP Server hinzufügen
---

# So fügst du Mods zu deinem BeamMP Server hinzu

Du kannst Mods auf deinem Server installieren, um das Spielerlebnis zu erweitern.

:::: warning Achtung
Stoppe deinen Server bevor du Mods hinzufügst. Die Mods dürfen **kein Archiv** (z.B. `.zip`) sein — entpacke sie vorher.
::::

1. <b>Mods herunterladen</b><br>
   Lade die gewünschten Mods von [BeamNG.drive Mods](https://www.beamng.com/resources/) oder dem [BeamMP Forum](https://forum.beammp.com/) herunter.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Mods hochladen</b><br>
   Lade die entpackten Mod-Dateien in folgendes Verzeichnis hoch:

   ```
   /Resources/Client/
   ```

5. <b>Server starten</b><br>
   Starte deinen Server.

:::: info Hinweis
Mods im `Resources/Client/`-Ordner werden automatisch an alle Spieler heruntergeladen, die dem Server beitreten.
::::
