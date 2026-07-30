---
description: Backup eines Soldat 2 Servers erstellen
---

# So erstellst du ein Backup deines Soldat 2 Servers

Ein regelmäßiges Backup deines Soldat 2 Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, eine fehlerhafte Konfiguration oder ein Skript, das den Server nicht mehr sauber starten lässt.

:::: info Hinweis
Soldat 2 speichert keinen Weltfortschritt — es gibt keinen Spielstand, der gesichert oder wiederhergestellt werden könnte. Gesichert werden also deine Konfiguration, deine eigenen Karten, Modifier, Spielmodi, Skripte und deine Kartenrotation — genau die Dateien, deren Verlust am meisten Arbeit macht.
::::

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hochladen eigener Karten, Modifier oder Spielmodi
- Vor dem Installieren oder Aktualisieren von Skripten
- Vor dem Umbau deiner Kartenrotation
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

## Diese Dateien lohnt es sich zu sichern

Möchtest du nur die wichtigsten Dateien sichern, lade sie dir per [SFTP](../sftp-verbindung-herstellen.md) herunter:

| Datei oder Ordner | Inhalt |
|-------------------|--------|
| `autoconfig.ini` | Hauptkonfiguration des Servers |
| `Levels/` | Deine eigenen Karten |
| `Modifiers/Custom/` | Deine eigenen Modifier |
| `Rules/Custom/` | Deine eigenen Spielmodi und Rundenregeln |
| `Scripts/Custom/` | Deine eigenen C#-Skripte |
| `Cycles/Custom/` | Deine Kartenrotationen |
| `greet.txt` | Begrüßungstext für Spieler |

:::: danger Wichtig
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. Die `autoconfig.ini` wird beim **Stoppen** des Servers neu geschrieben — sicherst du im laufenden Betrieb, kann die Datei einen anderen Stand haben, als du erwartest.
::::

:::: warning Achtung
Ein Backup sichert nur die Dateien auf deinem Server. Eigene Karten, Modifier und Skripte gibst du deinen Mitspielern am besten zusätzlich direkt weiter — siehe [Mods hinzufügen](mods-hinzufuegen.md). Bewahre diese Dateien deshalb an einem Ort auf, von dem aus du sie jederzeit weitergeben kannst.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
