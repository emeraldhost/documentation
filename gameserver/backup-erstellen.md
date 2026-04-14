---
description: Backup auf einem Gameserver erstellen und wiederherstellen
---

# So erstellst du ein Backup deines Gameservers

Du kannst von deinem Server jederzeit ein Backup erstellen, um deine Welt, Konfigurationen und Daten zu sichern und bei Bedarf wiederherzustellen.

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::

## Backup erstellen

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Backups öffnen</b><br>
   Klicke in der linken Seitenleiste auf **Backups**.

3. <b>Neues Backup anlegen</b><br>
   Klicke oben rechts auf das **Plus-Symbol**, um ein neues Backup zu erstellen.

4. <b>Backup benennen</b><br>
   Trage einen Namen für dein Backup ein. Optional kannst du im Feld **Ignorierte Dateien und Verzeichnisse** Pfade angeben, die vom Backup ausgeschlossen werden sollen.

5. <b>Backup erstellen</b><br>
   Klicke auf **Backup erstellen**. Der Vorgang läuft im Hintergrund und kann je nach Servergröße einige Minuten dauern.

## Backup verwalten

Über das **Drei-Punkte-Symbol** rechts neben einem Backup stehen dir folgende Optionen zur Verfügung:

| Aktion | Beschreibung |
|--------|-------------|
| **Herunterladen** | Lädt das Backup als komprimierte Datei herunter. |
| **Wiederherstellen** | Setzt deinen Server auf den Stand des Backups zurück. |
| **Sperren** | Schützt das Backup vor versehentlichem Löschen oder Überschreiben. |
| **Löschen** | Entfernt das Backup dauerhaft. |

### Backup sperren

Ein gesperrtes Backup kann nicht gelöscht und nicht durch automatische Backups überschrieben werden. Klicke erneut auf **Sperren**, um die Sperre wieder aufzuheben.

### Backup wiederherstellen

1. <b>Wiederherstellung starten</b><br>
   Wähle im Drei-Punkte-Menü die Option **Wiederherstellen**.

2. <b>Optional: Dateien löschen</b><br>
   Aktiviere die Checkbox **Lösche alle Dateien und Ordner, bevor Du dieses Backup wiederherstellst**, wenn du den aktuellen Serverzustand vollständig durch das Backup ersetzen möchtest.

3. <b>Bestätigen</b><br>
   Klicke auf **Backup wiederherstellen**. Der Server wird automatisch gestoppt und die Wiederherstellung gestartet.

:::: warning Achtung
Während der Wiederherstellung kannst du den Server nicht kontrollieren, nicht auf den Datei-Browser zugreifen und keine weiteren Backups erstellen, bis der Vorgang abgeschlossen ist.
::::
