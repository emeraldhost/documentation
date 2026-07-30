---
description: Backup eines Eco Servers erstellen
---

# So erstellst du ein Backup deines Eco Servers

Ein regelmäßiges Backup deines Eco Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, eine defekte Mod oder eine versehentlich zurückgesetzte Welt.

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor dem Hinzufügen oder Entfernen von [Mods](mods-hinzufuegen.md)
- Vor größeren Änderungen an den Konfigurationsdateien
- Vor dem Hochladen eines anderen Spielstands
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. Eco schreibt den Spielstand regelmäßig auf die Festplatte — in welchem Abstand, steuert der Wert `SaveFrequency` in `/Configs/Storage.eco`. Eine Sicherung im laufenden Betrieb kann deshalb unvollständig sein.
::::

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: info Hinweis
Möchtest du nur die Welt sichern, kannst du die beiden Spielstandsdateien auch einzeln herunterladen: [Savegame herunterladen](savegame-herunterladen.md).
::::

:::: info Automatische Sicherungen des Servers
Eco legt im Ordner `/Storage/Backup/` zusätzlich eigene Sicherungen an. Diese werden rollierend überschrieben und ersetzen kein eigenes Backup — verlasse dich für wichtige Stände nicht allein darauf.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
