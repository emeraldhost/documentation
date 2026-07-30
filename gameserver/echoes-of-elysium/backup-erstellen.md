---
description: Backup eines Echoes of Elysium Servers erstellen
---

# So erstellst du ein Backup deines Echoes of Elysium Servers

Ein regelmäßiges Backup deines Echoes of Elysium Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, eine fehlerhafte Konfiguration oder einen versehentlich überschriebenen Spielstand.

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hochladen eines anderen Spielstands
- Vor einem Umzug auf einen anderen Server
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. Im laufenden Betrieb schreibt der Server regelmäßig in die Weltdaten — eine Sicherung während des Betriebs kann unvollständig sein.
::::

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: info Hinweis
Möchtest du nur die Welt sichern, kannst du sie auch einzeln herunterladen: [Savegame herunterladen](savegame-herunterladen.md). Der komplette Spielstand liegt im Verzeichnis `world`.
::::

## Serverseitige Sicherungen

Echoes of Elysium bringt zusätzlich eine eigene Sicherungsfunktion mit. In der **Verwaltung** findest du unter **Einstellungen** folgende Felder dafür:

| Feld | Bedeutung |
|------|-----------|
| **Aktiviere Auto Server Backup** | Legt fest, ob der Server selbst Sicherungen anlegt (`true` oder `false`). |
| **Backup Intervall** | Abstand zwischen zwei Sicherungen in Minuten. |
| **Maximale Backups** | Anzahl der Sicherungen, die der Server aufbewahrt. |
| **Speicherintervall** | Abstand in Minuten, in dem der Server die laufende Welt speichert. |

Nach einer Änderung startest du deinen Server neu, damit die neuen Werte übernommen werden.

:::: danger Wichtig
Diese serverseitigen Sicherungen liegen auf demselben Server wie deine Welt. Sie ersetzen kein vollständiges Backup über die Verwaltung — nutze für wichtige Stände immer zusätzlich die Backup-Funktion und lade sie auf deinen PC herunter.
::::

:::: info Hinweis
**Aktiviere Auto Server Backup** ist standardmäßig deaktiviert. Möchtest du die serverseitigen Sicherungen nutzen, musst du das Feld erst auf `true` setzen.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
