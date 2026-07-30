---
description: Backup eines Space Station 14 Servers erstellen
---

# So erstellst du ein Backup deines Space Station 14 Servers

Ein regelmäßiges Backup deines Space Station 14 Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, eine beschädigte Datenbank oder eine versehentlich überschriebene Konfiguration.

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der `server_config.toml`
- Vor einem Wechsel der Datenbank, etwa von SQLite auf PostgreSQL
- Vor größeren Aufräumarbeiten an Admins, Banns oder Notizen
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Was wird gesichert?

Space Station 14 ist rundenbasiert und kennt **keinen Spielstand und keinen Weltordner**. Endet eine Runde, wird die Station komplett neu erzeugt. Dauerhaft gespeichert werden nur diese beiden Dinge:

| Ort | Inhalt |
|-----|--------|
| Ordner `data` | Datenbank des Servers (standardmäßig `data/preferences.db`) mit Charakteren, Spielzeiten, Admins, Banns und Notizen |
| `server_config.toml` | Die gesamte Serverkonfiguration |

Beide liegen im Hauptverzeichnis deines Servers, neben der Server-Anwendung `Robust.Server`.

:::: info Hinweis
Wer die Daten seines Servers manuell umziehen möchte, kopiert genau diese beiden Elemente: den Ordner `data` und die Datei `server_config.toml`.
::::

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. Die Datenbank wird im laufenden Betrieb geschrieben — eine Sicherung während des Betriebs kann unvollständig sein.
::::

:::: info Hinweis
Betreibst du deinen Server statt mit SQLite mit einer PostgreSQL-Datenbank, liegen Charaktere, Admins und Banns nicht im Ordner `data`, sondern in der Datenbank selbst. Sichere diese in dem Fall getrennt.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
