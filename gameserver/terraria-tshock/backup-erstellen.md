---
description: Backup eines Terraria tShock Servers erstellen
---

# So erstellst du ein Backup deines Terraria tShock Servers

Ein regelmäßiges Backup deines Terraria tShock Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, ein neues Plugin, einen Weltwechsel oder eine versehentlich überschriebene Welt.

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor der Installation oder Aktualisierung von Plugins
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hochladen einer anderen Welt
- Bevor du deine Welt in den Hardmode überführst
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. Beim Stoppen speichert tShock die Welt sauber ab – so landet der aktuelle Stand vollständig in der Sicherung.
::::

## Weltsicherungen von tShock nutzen

tShock legt zusätzlich in festen Abständen eigene Sicherungen deiner Welt an. Sie liegen im Ordner `/tshock/backups/` und heißen nach dem Muster `<Welt>.wld.<Zeitstempel>.bak`, z.B.:

```
MeineWelt.wld.2026-07-30T12.00.00Z.bak
```

Diese Sicherungen sind vollwertige Weltdateien – du machst daraus wieder eine Welt, indem du sie umbenennst.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Aktuelle Welt sichern</b><br>
   Lade die vorhandene `.wld`-Datei aus dem Hauptverzeichnis herunter oder benenne sie um, falls du zum aktuellen Stand zurückkehren möchtest.

4. <b>Sicherung wiederherstellen</b><br>
   Kopiere die gewünschte Datei aus `/tshock/backups/` in das Hauptverzeichnis deines Servers und benenne sie exakt so, wie das Feld **Welt Name** in den Einstellungen lautet – also z.B. `MeineWelt.wld`. Entferne dabei den Zeitstempel und die Endung `.bak`.

5. <b>Server starten</b><br>
   Starte deinen Server. Der wiederhergestellte Stand wird jetzt geladen.

:::: info Hinweis
Wie oft tShock sichert und wie lange die Sicherungen aufbewahrt werden, steuern die Werte `BackupInterval` und `BackupKeepFor` in der Datei `/tshock/config.json`. Beide Angaben erfolgen in Minuten. Setzt du `BackupInterval` auf `0`, sind die Weltsicherungen von tShock deaktiviert.
::::

:::: danger Wichtig
Die Sicherungen von tShock enthalten nur die **Welt**. Accounts, Gruppen, Banns und – bei aktivierten Server Side Characters – die Charakterdaten deiner Spieler liegen in `/tshock/tshock.sqlite` und werden davon nicht erfasst. Für eine vollständige Sicherung nutze die Backup-Funktion der Verwaltung.
::::

:::: info Hinweis
Möchtest du nur die Welt sichern, kannst du die `.wld`-Datei auch einzeln herunterladen: [Savegame herunterladen](savegame-herunterladen.md).
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
