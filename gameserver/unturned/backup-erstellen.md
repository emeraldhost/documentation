---
description: Backup eines Unturned Servers erstellen
---

# So erstellst du ein Backup deines Unturned Servers

Ein regelmäßiges Backup deines Unturned Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, einen defekten Mod oder einen versehentlich überschriebenen Spielstand.

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hinzufügen oder Entfernen von Mods und Workshop-Karten
- Vor einem Kartenwechsel
- Vor dem Hochladen eines anderen Spielstands
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

:::: danger Unturned speichert nicht automatisch
Unturned hat **keine automatische Speicherfunktion**. Alles, was seit dem letzten Speichern passiert ist, geht verloren, wenn der Server hart beendet wird. Speichere deshalb immer erst, bevor du ein Backup erstellst.
::::

## Vor dem Backup speichern

1. <b>Konsole öffnen</b><br>
   Öffne die **Verwaltung** deines Servers und wechsle zur **Konsole**.

2. <b>Speichern auslösen</b><br>
   Gib folgenden Befehl ein:

   ```
   save
   ```

3. <b>Server stoppen</b><br>
   Stoppe deinen Server anschließend über die Verwaltung.

   :::: tip Tipp
   Alternativ kannst du den Befehl `shutdown` in der Konsole verwenden – er speichert den Spielstand und fährt den Server anschließend sauber herunter.
   ::::

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: info Hinweis
Möchtest du nur den Spielstand sichern, kannst du den Server-Ordner auch einzeln herunterladen: [Savegame herunterladen](savegame-herunterladen.md).
::::

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. Läuft der Server währenddessen weiter, kann die Sicherung einen unvollständigen Spielstand enthalten.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
