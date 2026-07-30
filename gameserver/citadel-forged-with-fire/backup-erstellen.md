---
description: Backup eines Citadel Forged with Fire Servers erstellen
---

# So erstellst du ein Backup deines Citadel Forged with Fire Servers

Ein regelmäßiges Backup deines Citadel Forged with Fire Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, einen versehentlich überschriebenen Spielstand oder eine fehlerhafte Konfiguration.

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hochladen eines anderen Spielstands
- Vor Aufräumarbeiten in der Welt, etwa dem Löschen von Charakteren oder Bauwerken
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: info Hinweis
Möchtest du nur den Spielstand sichern, kannst du den Savegame-Ordner auch einzeln herunterladen: [Savegame herunterladen](savegame-herunterladen.md).
::::

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. Dein Server speichert im laufenden Betrieb automatisch — eine Sicherung während des Betriebs kann einen unvollständigen Spielstand enthalten.
::::

:::: tip Vorher speichern lassen
Möchtest du nicht auf die nächste automatische Speicherung warten, kannst du als eingeloggter Admin im Chat den Befehl `/admin_autosave` ausführen. Der Server schreibt damit die Charakterdaten aller aktuell verbundenen Spieler sofort weg. Stoppe deinen Server anschließend trotzdem, bevor du das Backup erstellst. Wie du Adminrechte erhältst, steht unter [Admin hinzufügen](admin-hinzufuegen.md).
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
