---
description: Mods auf einem Palworld Server installieren
---

# So installierst du Mods auf deinem Palworld Server

Du kannst Mods auf deinem Server installieren, um das Spielerlebnis zu erweitern.

:::: warning Achtung
Stoppe deinen Server bevor du Mods installierst. Nach einem Spielupdate können Mods inkompatibel sein und Abstürze verursachen.
::::

1. <b>Mods herunterladen</b><br>
   Lade die gewünschten Mods von [CurseForge](https://www.curseforge.com/palworld) oder [Nexus Mods](https://www.nexusmods.com/palworld) herunter.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Mods hochladen</b><br>
   Lade die `.pak`-Dateien in folgendes Verzeichnis hoch:

   ```
   /Pal/Content/Paks/
   ```

5. <b>Server starten</b><br>
   Starte deinen Server.

:::: info Hinweis
Einige Mods müssen sowohl auf dem Server als auch bei allen Spielern installiert sein. Prüfe die Mod-Beschreibung, ob eine clientseitige Installation nötig ist.
::::
