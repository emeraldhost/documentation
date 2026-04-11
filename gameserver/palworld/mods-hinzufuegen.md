---
description: Mods auf einem Palworld Server hinzufügen
---

# So fügst du Mods zu deinem Palworld Server hinzu

Palworld unterstützt offiziell Server-Mods über das mitgelieferte Mod-System. Mods werden im Verzeichnis `Mods/Workshop/` abgelegt und anschließend in der Datei `PalModSettings.ini` aktiviert.

:::: warning Achtung
Mod-Support in Palworld gilt als experimentell und kann zu Abstürzen oder beschädigten Speicherständen führen. Sichere dein [Savegame](savegame-hinzufuegen.md), bevor du Mods installierst, und stoppe den Server vor jeder Änderung.
::::

:::: info Hinweis
Server-Mods funktionieren ausschließlich auf dem Windows-Dedicated-Server. Es können nur Mods verwendet werden, deren `Info.json` den Eintrag `"IsServer": true` enthält.
::::

## Mods finden

Mods findest du unter anderem hier:

- [Steam Workshop](https://steamcommunity.com/app/1623730/workshop/)
- [Nexus Mods](https://www.nexusmods.com/games/palworld/mods)
- [CurseForge](https://www.curseforge.com/palworld)

## Mods hinzufügen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Mod hochladen</b><br>
   Erstelle im Verzeichnis `/Mods/Workshop/` einen Unterordner für die Mod und lade die Mod-Dateien dort hinein. Die Datei `Info.json` muss direkt in diesem Ordner liegen:

   ```
   /Mods/Workshop/<ModOrdner>/Info.json
   /Mods/Workshop/<ModOrdner>/...
   ```

4. <b>Mod aktivieren</b><br>
   Öffne die Datei `/Mods/PalModSettings.ini` und trage die Mod ein. Verwende dabei den `PackageName` aus der `Info.json` der Mod – nicht den Ordnernamen:

   ```ini
   [PalModSettings]
   bGlobalEnableMod=true
   ActiveModList=DeinModPackageName
   ```

   Für mehrere Mods fügst du jeweils eine weitere `ActiveModList=`-Zeile hinzu.

5. <b>Server starten</b><br>
   Starte deinen Server. Die Mods werden beim Start automatisch bereitgestellt.

## Mods entfernen

Um eine Mod zu deaktivieren, entferne die entsprechende `ActiveModList=`-Zeile aus der `PalModSettings.ini` und starte den Server neu. Um sie vollständig zu löschen, entferne zusätzlich den zugehörigen Ordner aus `/Mods/Workshop/`.

:::: info Hinweis
Viele Mods müssen zusätzlich von jedem Spieler clientseitig installiert werden, damit deren Inhalte im Spiel sichtbar sind. Prüfe dazu die Beschreibung der jeweiligen Mod.
::::
