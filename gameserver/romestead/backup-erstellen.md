---
description: Backup eines Romestead Servers erstellen
---

# So erstellst du ein Backup deines Romestead Servers

Ein regelmäßiges Backup deines Romestead Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, eine beschädigte Weltdatei oder eine versehentlich neu erzeugte Welt.

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Anlegen einer neuen Welt
- Vor Aufräumarbeiten in der Welt, etwa dem Abriss großer Bauten
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: tip Vorher speichern
Führe vor dem Backup in der **Konsole** deines Servers den Befehl `save` aus. Der Server schreibt den aktuellen Stand damit vollständig auf die Festplatte, und dein Backup enthält wirklich alles.

```
save
```

Der Server ist während dieses Speichervorgangs kurz eingefroren. `quicksave` speichert stattdessen im Hintergrund und der Server läuft weiter – für ein Backup ist `save` deshalb die sichere Wahl.
::::

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. Romestead speichert automatisch alle sechs Minuten — eine Sicherung im laufenden Betrieb kann mitten in einen Speichervorgang fallen und unvollständig sein.
::::

:::: info Hinweis
Der Server legt zusätzlich ein eigenes rollierendes Backup deiner Welt an und stellt dieses automatisch wieder her, falls sich der letzte Spielstand nicht laden lässt. Das ersetzt kein eigenes Backup: Es liegt auf demselben Server und umfasst nur den jeweils vorherigen Speicherstand.
::::

:::: info Hinweis
Möchtest du nur den Spielstand sichern, kannst du den Weltordner auch einzeln herunterladen: [Savegame herunterladen](savegame-herunterladen.md).
::::

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
