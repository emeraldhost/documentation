---
description: BepInEx auf einem Valheim Server installieren
---

# So installierst du BepInEx auf deinem Valheim Server

**BepInEx** ist ein Mod-Framework, das benötigt wird, um Mods auf deinem Valheim Server zu nutzen.

1. <b>BepInEx herunterladen</b><br>
   Lade das **BepInExPack_Valheim** von [Thunderstore](https://thunderstore.io/c/valheim/p/denikson/BepInExPack_Valheim/) herunter. Klicke auf **Manual Download**.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>BepInEx hochladen</b><br>
   Entpacke die heruntergeladene ZIP-Datei und lade den **gesamten Inhalt** in das Hauptverzeichnis deines Servers hoch. Folgende Dateien und Ordner sollten danach vorhanden sein:

   ```
   /
   ├── BepInEx/
   │   ├── config/
   │   ├── plugins/
   │   └── core/
   ├── doorstop_config.ini
   ├── winhttp.dll
   └── ...
   ```

5. <b>Server starten</b><br>
   Starte deinen Server. BepInEx wird automatisch initialisiert.

:::: info Hinweis
Nach der Installation kannst du Mods als `.dll`-Dateien in den Ordner `/BepInEx/plugins/` hochladen. Siehe [Mods hinzufügen](mods-hinzufuegen.md).
::::
