---
description: Savegame von einem Colony Survival Server herunterladen
---

# So lädst du das Savegame deines Colony Survival Servers herunter

Du kannst die Welt deines Servers jederzeit auf deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um sie auf einen anderen Server zu übertragen.

:::: warning Achtung
Stoppe deinen Server, bevor du die Dateien herunterlädst. Colony Survival schreibt im laufenden Betrieb ständig in die Weltdatenbank – du würdest sonst einen unvollständigen oder beschädigten Spielstand herunterladen.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /gamedata/savegames/
   ```

4. <b>Weltordner herunterladen</b><br>
   Lade den kompletten Ordner deiner Welt mit allen enthaltenen Dateien herunter. Welchen Namen der Ordner hat, siehst du in der **Verwaltung** im Feld **World Name**.

   | Datei | Inhalt |
   |-------|--------|
   | `world.sqlite3` | Die eigentliche Welt als SQLite-Datenbank |
   | `world.sqlite3-wal` | Write-Ahead-Log der Datenbank (nicht immer vorhanden) |
   | `world.sqlite3-shm` | Shared-Memory-Datei des Write-Ahead-Logs (nicht immer vorhanden) |
   | `worldconfig.json` | Anzeigename, Welttyp und aktivierte Mods |
   | `permissionusers.json` | Rechte der Spieler (falls angelegt) |
   | `permissiongroups.json` | Eigene Rechtegruppen (falls angelegt) |

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: info Hinweis
Lade immer den **kompletten Ordner** herunter. Die Dateien gehören zusammen: Ohne `worldconfig.json` fehlen dem Spielstand die Angaben zu Welttyp und aktivierten Mods, ohne die `-wal`-Datei können die letzten Änderungen an der Welt fehlen.
::::

:::: tip Mods mitsichern
Nutzt deine Welt Mods, sichere zusätzlich das Mod-Verzeichnis, damit sich die Welt später wieder laden lässt:

```
/gamedata/mods/
```
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
