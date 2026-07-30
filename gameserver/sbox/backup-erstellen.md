---
description: "Backup eines s&box Servers erstellen"
---

# So erstellst du ein Backup deines s&box Servers

Ein regelmäßiges Backup deines s&box Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, eine fehlerhafte Konfiguration oder einen Gamemode-Wechsel, nach dem der Server nicht mehr startet.

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor einem Wechsel des Gamemodes oder der Map
- Vor Änderungen an der `users.json` oder an den Startparametern
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

## Welche Daten sind wichtig?

| Ordner | Inhalt |
|--------|--------|
| `/config/` | Serverkonfiguration, unter anderem die `users.json` mit deinen Admins |
| `/data/` | Alle dauerhaft gespeicherten Daten der Gamemodes, sortiert nach `/data/<organisation>/<package>/` |
| `/download/` | Zwischenspeicher der aus der Cloud geladenen Packages |

:::: info Hinweis
Der Ordner `/download/` muss nicht gesichert werden. Fehlende Packages lädt dein Server beim nächsten Start automatisch erneut aus der Cloud.
::::

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. Der Ordner `/data/` wird im laufenden Betrieb geschrieben — eine Sicherung während des Betriebs kann unvollständig sein.
::::

:::: danger Wichtig
s&box kennt kein serverseitiges Savegame. Ob und was auf deinem Server dauerhaft gespeichert wird, entscheidet allein der Gamemode. Läuft auf deinem Server ein Gamemode ohne eigene Speicherfunktion, enthält ein Backup nur deine Konfiguration.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
