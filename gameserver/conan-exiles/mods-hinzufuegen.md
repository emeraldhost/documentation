---
title: Mods auf deinem Conan Exiles Server hinzufügen
description: Schritt-für-Schritt-Anleitung, wie du Mods auf einem Conan Exiles Server hinzufügst
---

# Conan Exiles Server Mods hinzufügen

:::: tip Tipp
Du kannst die Mod-Dateien auch mit einem FTP-Programm hochladen. Hier findest du eine Anleitung, wie du eine [SFTP-Verbindung herstellst](../sftp-verbindung-herstellen.md).
::::

:::: warning Achtung
Stelle sicher, dass die Mods mit deiner aktuellen Serverversion kompatibel sind. Inkompatible Mods können dazu führen, dass dein Server nicht mehr startet.
::::

## Schritte

1. <b>Abonniere die gewünschten Mods im [Steam Workshop](https://steamcommunity.com/app/440900/workshop/).</b><br>
   - Öffne den Steam Workshop für Conan Exiles und abonniere die Mods, die du auf deinem Server nutzen möchtest.
   - Steam lädt die Mods automatisch auf deinen lokalen PC herunter.

2. <b>Finde die heruntergeladenen Mod-Dateien auf deinem PC.</b><br>
   - Die Mod-Dateien befinden sich im Ordner:
     ```
     C:\Program Files (x86)\Steam\steamapps\workshop\content\440900
     ```
   - In den nummerierten Unterordnern findest du die `.pak`-Dateien – diese benötigst du.

3. <b>Öffne deinen Server im Datei-Browser und erstelle den Mods-Ordner.</b><br>
   - Navigiere zum Ordner `ConanSandbox`.
   - Erstelle einen neuen Ordner namens `Mods`.

4. <b>Lade die .pak-Dateien in den Mods-Ordner hoch.</b><br>
   - Kopiere alle `.pak`-Dateien der gewünschten Mods in den `ConanSandbox/Mods`-Ordner.

5. <b>Erstelle die modlist.txt Datei.</b><br>
   - Erstelle im `ConanSandbox/Mods`-Ordner eine neue Datei namens `modlist.txt`.
   - Füge jeden Mod mit einem Sternchen (*) am Anfang hinzu – jeder Mod in einer neuen Zeile:
     ```
     *ModName1.pak
     *ModName2.pak
     *ModName3.pak
     ```

6. <b>Speichere die Datei und starte deinen Server neu.</b><br>
   - Nach dem Neustart werden die Mods automatisch geladen.

:::: info Info
Alle Spieler, die deinem Server beitreten möchten, müssen dieselben Mods installiert haben.
::::
