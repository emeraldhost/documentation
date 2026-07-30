---
description: Backup eines Colony Survival Servers erstellen
---

# So erstellst du ein Backup deines Colony Survival Servers

Ein regelmäßiges Backup deines Colony Survival Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, einen inkompatiblen Mod oder eine beschädigte Weltdatenbank.

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor dem Hinzufügen, Aktualisieren oder Entfernen von Mods
- Vor dem Hochladen eines anderen Spielstands
- Vor größeren Änderungen an der Konfiguration
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. Colony Survival speichert die Welt in einer SQLite-Datenbank, die im laufenden Betrieb ständig geschrieben wird — eine Sicherung während des Betriebs kann unvollständig sein.
::::

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

## Backup im laufenden Spiel erstellen

Colony Survival bringt einen eigenen Backup-Befehl mit, den du im Spiel-Chat ausführen kannst. Er eignet sich gut als schnelle Zwischensicherung, ersetzt ein vollständiges Backup aber nicht.

1. <b>Chat öffnen</b><br>
   Drücke im Spiel `T`, um den Chat zu öffnen.

2. <b>Backup erstellen</b><br>
   Führe folgenden Befehl aus:

   ```
   /backup
   ```

   :::: info Hinweis
   `/backup` speichert die Welt vorher automatisch auf die Festplatte und packt sie anschließend in ein ZIP-Archiv. Ein separates `/save` ist dafür nicht nötig.
   ::::

3. <b>Welt zwischendurch speichern</b><br>
   Möchtest du nur den aktuellen Stand sichern, ohne ein Archiv zu erzeugen, reicht:

   ```
   /save
   ```

4. <b>Backup herunterladen</b><br>
   Der Server legt das ZIP-Archiv im Savegame-Verzeichnis deines Servers ab:

   ```
   /gamedata/savegames/
   ```

   Lade es per [SFTP](../sftp-verbindung-herstellen.md) auf deinen PC herunter.

:::: info Hinweis
Für `/save` und `/backup` benötigst du Adminrechte auf dem Server. Wie du sie dir gibst, steht unter [Admin hinzufügen](admin-hinzufuegen.md).
::::

:::: info Hinweis
Möchtest du nur den Spielstand sichern, kannst du den Weltordner auch direkt herunterladen: [Savegame herunterladen](savegame-herunterladen.md).
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
