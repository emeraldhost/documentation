---
description: Backup eines Arma 3 Servers erstellen
---

# So erstellst du ein Backup deines Arma 3 Servers

Ein regelmäßiges Backup deines Arma 3 Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, ein Mod-Update, das deine Konfiguration unbrauchbar macht, oder eine versehentlich überschriebene Datei.

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor dem Hinzufügen, Aktualisieren oder Entfernen von Mods
- Vor größeren Änderungen an der `server.cfg`
- Vor dem Hochladen eines anderen Spielstands oder einer anderen Mission
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: info Was gehört zu einem vollständigen Backup?
Ein Arma-3-Server verteilt seine Daten auf mehrere Verzeichnisse:

| Pfad | Inhalt |
|------|--------|
| `/server.cfg` | Servereinstellungen, Admins und Missionsauswahl |
| `/mpmissions` | Deine Missionen als `.pbo`-Dateien |
| `/serverprofile` | Serverprofil inklusive Spielstand persistenter Missionen |
| `/@modname` | Die einzelnen Mod-Ordner |
| `/keys` | Die `.bikey`-Dateien deiner Mods |
::::

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. Persistente Missionen schreiben im laufenden Betrieb in die Profildatei — eine Sicherung während des Betriebs kann unvollständig sein.
::::

:::: info Hinweis
Möchtest du nur den Fortschritt einer persistenten Mission sichern, kannst du die Spielstandsdatei auch einzeln herunterladen: [Savegame herunterladen](savegame-herunterladen.md).
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
