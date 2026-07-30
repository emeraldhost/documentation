---
description: Savegame von einem Myth of Empires Server herunterladen
---

# So lädst du das Savegame deines Myth of Empires Servers herunter

Der Spielstand eines Myth of Empires Servers ist keine einzelne Datei, sondern der komplette Ordner `Saved`. Darin liegen die Welt, alle Bauwerke, die Spielerdaten und deine Servereinstellungen.

:::: warning Achtung
Stoppe deinen Server, bevor du die Dateien herunterlädst. Myth of Empires schreibt im laufenden Betrieb regelmäßig in den Spielstand – lädst du währenddessen herunter, kann er unvollständig oder beschädigt sein.
::::

1. <b>Welt speichern</b><br>
   Führe als Admin im Spiel den Befehl `cheat SaveWorld` aus und warte rund 30 bis 45 Sekunden, damit der Spielstand vollständig auf die Festplatte geschrieben wird.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /MOE/
   ```

5. <b>Saved herunterladen</b><br>
   Lade den kompletten Ordner `Saved` mit allen Unterordnern und Dateien auf deinen PC herunter.

6. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: warning Achtung
Ein Spielstand ist immer der vollständige Ordner `Saved`. Welt- und Spielerdaten liegen dort in mehreren Dateien nebeneinander und gehören zusammen – einzelne Dateien daraus ergeben keinen nutzbaren Spielstand.
::::

:::: info Was liegt im Ordner Saved?
| Eintrag | Inhalt |
|---------|--------|
| `Config/WindowsServer/` | Deine Servereinstellungen, unter anderem die `GameUserSettings.ini` |
| `Logs/` | Die Protokolldateien deines Servers |

Die übrigen Dateien im Ordner enthalten die Welt und die Spielerdaten. Sichere den Ordner deshalb immer vollständig.
::::

:::: info Hinweis
Der Konfigurationsordner heißt auch auf deinem Linux-Server `WindowsServer`. Das ist so gewollt – Myth of Empires stellt nur ein Windows-Serverprogramm bereit, das auf Linux-Servern über eine Kompatibilitätsschicht läuft.
::::

:::: danger Spielstand hängt an der Server-ID
Der Spielstand wird unter der **Server-ID** deines Servers abgelegt. Änderst du diese ID, findet der Server seinen bisherigen Spielstand nicht mehr und legt eine neue, leere Welt an. Notiere dir die Server-ID deines Servers, bevor du den Spielstand woanders wieder einspielst.
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
