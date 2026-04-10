---
description: Mods auf einem Valheim Server hinzufügen
---

# So fügst du Mods zu deinem Valheim Server hinzu

Valheim Mods basieren auf dem **BepInEx**-Framework. Du musst zuerst BepInEx installieren, bevor du Mods hinzufügen kannst. Siehe [BepInEx installieren](bepinex-installieren.md).

:::: warning Achtung
Stoppe deinen Server bevor du Mods hinzufügst. Nach einem Spielupdate können Mods inkompatibel sein und Abstürze verursachen.
::::

1. <b>Mods herunterladen</b><br>
   Lade die gewünschten Mods von [Thunderstore](https://thunderstore.io/c/valheim/) oder [Nexus Mods](https://www.nexusmods.com/valheim) herunter.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Mod-Dateien hochladen</b><br>
   Entpacke den Mod und lade die `.dll`-Datei(en) in folgendes Verzeichnis hoch:

   ```
   /BepInEx/plugins/
   ```

5. <b>Server starten</b><br>
   Starte deinen Server.

:::: danger Wichtig
Alle Spieler müssen **dieselben Mods** lokal installiert haben, um dem Server beitreten zu können. Spieler müssen BepInEx und die Mods ebenfalls in ihrem lokalen Valheim-Verzeichnis installieren.
::::

:::: info Hinweis
Einige Mods erstellen beim ersten Start automatisch Konfigurationsdateien unter `/BepInEx/config/`. Diese kannst du anpassen, um die Mods nach deinen Wünschen einzustellen.
::::
