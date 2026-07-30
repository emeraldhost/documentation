---
description: Backup eines CryoFall Servers erstellen
---

# So erstellst du ein Backup deines CryoFall Servers

Ein regelmäßiges Backup deines CryoFall Servers schützt dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, einen beschädigten Spielstand oder eine versehentlich gelöschte Welt.

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Installieren, Aktualisieren oder Entfernen von Mods
- Vor dem Hochladen eines anderen Spielstands
- Vor dem Zurücksetzen der Welt
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. CryoFall speichert die Welt in regelmäßigen Abständen automatisch – eine Sicherung während des Betriebs kann genau in einen solchen Speichervorgang fallen und dadurch unvollständig sein.
::::

:::: info Hinweis
Was zum Spielstand gehört, liegt gesammelt im Ordner `/Data/`: die Welt im Unterordner `/Data/Saves/`, dazu die Konfigurationsdateien `SettingsServer.xml`, `ModsConfig.xml` und `ServerRates.config`. Möchtest du nur die Welt sichern, kannst du sie auch einzeln herunterladen: [Savegame herunterladen](savegame-herunterladen.md).
::::

## Interne Speicherstände von CryoFall

CryoFall legt zusätzlich eigene Sicherungen der Welt an. Zwei Werte dazu steuerst du in der **Verwaltung** deines Servers:

| Einstellung | Bedeutung |
|-------------|-----------|
| **Automatischer Speicher Interval** | Abstand in Minuten, in dem die Welt automatisch gespeichert wird |
| **Auto Backups Count** | Anzahl der Speicherstände, die der Server aufbewahrt |

:::: danger Wichtig
Diese internen Sicherungen liegen auf demselben Server wie deine Welt. Sie helfen dir bei einem beschädigten Spielstand, ersetzen aber kein richtiges Backup. Lade besonders wichtige Stände zusätzlich auf deinen PC herunter.
::::

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
