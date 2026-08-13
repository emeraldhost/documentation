---
description: Welt eines Enshrouded Servers zurücksetzen
---

# So setzt du die Welt deines Enshrouded Servers zurück

Enshrouded hat keinen Knopf zum Zurücksetzen. Eine frische Welt bekommst du, indem du den Spielstand im Speicherordner löschst — beim nächsten Start legt der Server automatisch eine neue Welt an.

:::: danger Wichtig
Beim Zurücksetzen ist deine bisherige Welt unwiederbringlich weg: alle Basen und Gebäude, jede Veränderung am Terrain, sämtliche Truhen samt Inhalt und der komplette Fortschritt in der Welt. Es gibt keine Rückgängig-Funktion. Erstelle deshalb **zuerst** ein Backup — ohne Sicherung kommst du an deinen alten Stand nie wieder heran.
::::

## Welt zurücksetzen

1. <b>Backup erstellen</b><br>
   Sichere deine aktuelle Welt, bevor du irgendetwas löschst: [Backup erstellen](backup-erstellen.md). Zusätzlich kannst du den Spielstand auf deinen PC herunterladen: [Savegame herunterladen](savegame-herunterladen.md).

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Ein laufender Server schreibt die Welt etwa alle fünf Minuten erneut auf die Festplatte — lösche die Dateien deshalb niemals im laufenden Betrieb.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Spielstand löschen</b><br>
   Wechsle in den Ordner `savegame` und lösche alle Dateien darin. Zu einer Welt gehören dort mehrere Dateien: die Weltdatei `3ad85aea`, ihre automatischen Rollkopien `3ad85aea-1` bis `3ad85aea-9`, die Dateien mit dem Zusatz `_info` (Name und Metadaten der Welt) sowie die Dateien mit dem Zusatz `-index` (welche Kopie gerade aktiv ist). Welche davon vorhanden sind, hängt vom Alter deiner Welt ab — lösche deshalb einfach den kompletten Inhalt des Ordners. Den Ordner `savegame` selbst kannst du stehen lassen.

5. <b>Server starten</b><br>
   Starte deinen Server über die Verwaltung. Beim Hochfahren erzeugt er eine neue Welt. Sobald in der Konsole `[Session] 'HostOnline' (up)!` erscheint, kannst du beitreten.

:::: warning Achtung
Lösche wirklich nur den Inhalt des Ordners `savegame`. Die Datei `enshrouded_server.json` liegt im Hauptverzeichnis und enthält deine komplette Serverkonfiguration — löschst du sie, sind auch deine Usergruppen und Passwörter weg.
::::

## Was weg ist und was bleibt

| Weg | Bleibt |
|-----|--------|
| Basen und Gebäude | Dein Charakter mit Level, Fähigkeiten und Rucksack |
| Veränderungen am Terrain | Die Serverkonfiguration aus der `enshrouded_server.json` |
| Truhen und ihr Inhalt | Usergruppen und Passwörter |
| Der gesamte Fortschritt in der Welt | Deine zuvor erstellten Backups |

:::: info Hinweis
Auf dem Server wird nur der Fortschritt der Welt gespeichert. Dein Charakter — Level, Fähigkeitspunkte und der Inhalt deines Rucksacks — wird auf deinem eigenen Rechner gespeichert. Du startest in der neuen Welt also mit deinem gewohnten Charakter, aber ohne Basis und ohne Lager.
::::

:::: tip Tipp
Soll die neue Welt nach anderen Regeln laufen, ändere die [Schwierigkeit](schwierigkeit-anpassen.md), bevor du den Server wieder startest.
::::

:::: tip Alte Welt zurückholen
Hast du vor dem Löschen ein Backup erstellt, stellst du es über die Verwaltung wieder her: [Backup erstellen](backup-erstellen.md). Hast du den Spielstand stattdessen auf deinen PC heruntergeladen, lädst du ihn per SFTP wieder hoch: [Savegame hinzufügen](savegame-hinzufuegen.md).
::::
