---
description: Mods auf einem 7 Days to Die Server hinzufügen
---

# So fügst du Mods zu deinem 7 Days to Die Server hinzu

Du kannst Mods auf deinem Server installieren, um das Spielerlebnis zu erweitern.

:::: warning Achtung
Stoppe deinen Server bevor du Mods hinzufügst. Nach einem Spielupdate können Mods inkompatibel sein und Abstürze verursachen.
::::

1. <b>Mods herunterladen</b><br>
   Lade die gewünschten Mods von [Nexus Mods](https://www.nexusmods.com/7daystodie) oder [7daystodiemods.com](https://7daystodiemods.com/) herunter.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Mods hochladen</b><br>
   Entpacke den Mod und lade den Mod-Ordner (der die `ModInfo.xml` enthält) in folgendes Verzeichnis hoch:

   ```
   /Mods/
   ```

   :::: tip Beispiel
   ```
   /Mods/
   ├── MeinMod/
   │   ├── ModInfo.xml
   │   └── Config/
   └── WeitererMod/
       ├── ModInfo.xml
       └── Config/
   ```
   ::::

   :::: info Hinweis
   Falls der Ordner `Mods` noch nicht existiert, erstelle ihn im Hauptverzeichnis deines Servers.
   ::::

5. <b>Server starten</b><br>
   Starte deinen Server.

:::: danger Wichtig
Alle Spieler müssen **dieselben Mods** lokal installiert haben, um dem Server beitreten zu können.
::::
