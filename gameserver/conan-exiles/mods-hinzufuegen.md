---
title: Mods auf deinem Conan Exiles Server hinzufügen
description: Schritt-für-Schritt-Anleitung, wie du Mods auf einem Conan Exiles Server hinzufügst
---

# So fügst du Mods zu deinem Conan Exiles Server hinzu

:::: tip Tipp
Du kannst die Mod-Dateien auch mit einem FTP-Programm hochladen. Hier findest du eine Anleitung, wie du eine [SFTP-Verbindung herstellst](../sftp-verbindung-herstellen.md).
::::

:::: warning Achtung
Stelle sicher, dass die Mods mit deiner aktuellen Serverversion kompatibel sind. Inkompatible Mods können dazu führen, dass dein Server nicht mehr startet.
::::

## Schritte

1. <b>Mods abonnieren</b><br>
   Öffne den [Steam Workshop](https://steamcommunity.com/app/440900/workshop/) für Conan Exiles und abonniere die Mods, die du auf deinem Server nutzen möchtest. Steam lädt die Mods automatisch auf deinen lokalen PC herunter.

2. <b>Mod-Dateien finden</b><br>
   Die heruntergeladenen Mod-Dateien befinden sich auf deinem PC im Ordner:
   ```
   C:\Program Files (x86)\Steam\steamapps\workshop\content\440900
   ```
   In den nummerierten Unterordnern findest du die `.pak`-Dateien – diese benötigst du.

3. <b>Mods-Ordner erstellen</b><br>
   Öffne deinen Server im Datei-Browser und navigiere zum Ordner `ConanSandbox`. Erstelle dort einen neuen Ordner namens `Mods`.

4. <b>Mods hochladen</b><br>
   Kopiere alle `.pak`-Dateien der gewünschten Mods in den `ConanSandbox/Mods`-Ordner.

5. <b>modlist.txt erstellen</b><br>
   Erstelle im `ConanSandbox/Mods`-Ordner eine neue Datei namens `modlist.txt`. Füge jeden Mod mit einem Sternchen (*) am Anfang hinzu – jeder Mod in einer neuen Zeile:
   ```
   *ModName1.pak
   *ModName2.pak
   *ModName3.pak
   ```

6. <b>Server neustarten</b><br>
   Speichere die Datei und starte deinen Server neu. Nach dem Neustart werden die Mods automatisch geladen.

:::: info Info
Alle Spieler, die deinem Server beitreten möchten, müssen dieselben Mods installiert haben.
::::
