---
description: Savegame von einem PixARK Server herunterladen
---

# So lädst du das Savegame deines PixARK Servers herunter

Du kannst den Spielstand deines Servers jederzeit auf deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen.

Bei PixARK liegen sämtliche veränderlichen Daten in einem einzigen Ordner: `Saved`. Darin stecken die Voxel-Welt, die Spieler- und Stammesdaten, deine Konfigurationsdateien und die Logs.

:::: warning Achtung
Stoppe deinen Server, bevor du die Dateien herunterlädst. Im laufenden Betrieb schreibt der Server ständig in den Spielstand – du würdest sonst einen unvollständigen oder beschädigten Stand herunterladen.
::::

## Savegame herunterladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /ShooterGame/
   ```

4. <b>Ordner herunterladen</b><br>
   Lade den kompletten Ordner `Saved` auf deinen PC herunter:

   ```
   /ShooterGame/Saved/
   ```

   :::: info Hinweis
   Lade immer den gesamten Ordner herunter und picke dir keine einzelnen Unterordner heraus. Welt-, Spieler- und Stammesdaten liegen in getrennten Unterordnern und gehören zusammen – fehlt einer davon, ist der Spielstand unbrauchbar.
   ::::

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

## Was liegt im Saved-Ordner?

| Inhalt | Beschreibung |
|--------|--------------|
| Weltdaten | Die gesamte Voxel-Welt mit allen Bauwerken und Veränderungen am Terrain |
| Spieler- und Stammesdaten | Charaktere, Fortschritt, Inventare und Stämme |
| `Config/WindowsServer/` | Konfigurationsdateien, unter anderem die `GameUserSettings.ini` |
| `Logs/` | Die Serverlogs |

:::: info Hinweis
Der Konfigurationsordner heißt auch auf deinem Linux-Server `WindowsServer`. Das ist so gewollt – PixARK stellt nur ein Windows-Serverprogramm bereit, das auf Linux-Servern über eine Kompatibilitätsschicht läuft.
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
