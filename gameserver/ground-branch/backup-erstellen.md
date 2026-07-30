---
description: Backup eines Ground Branch Servers erstellen
---

# So erstellst du ein Backup deines Ground Branch Servers

Ein Ground Branch Server speichert **keine Spielwelt**. Alles, was deinen Server ausmacht, steckt in seiner Konfiguration: Admins, Banns, Kartenliste, Abstimmungsregeln und die Modliste. Genau diese Dateien sichert ein Backup.

:::: info Kein Weltspeicherstand
Ground Branch ist missionsbasiert – nach jeder Runde beginnt die Karte neu. Es gibt daher keinen Spielstand, den du herunterladen oder auf einen anderen Server übertragen könntest. Fortschritt, Operatoren und Loadouts der Spieler liegen auf deren eigenen PCs und nicht auf dem Server.
::::

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Bevor du Mods hinzufügst oder entfernst
- Bevor du Admin-, Bann- oder Abstimmungseinstellungen umstellst
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. Ein laufender Server schreibt weiterhin in seine Dateien und überschreibt Änderungen unter Umständen beim Beenden.
::::

## Konfiguration einzeln sichern

Möchtest du nur die Servereinstellungen sichern, lädst du den Konfigurationsordner per SFTP herunter.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Ordner herunterladen</b><br>
   Lade folgenden Ordner vollständig auf deinen PC herunter:

   ```
   /GroundBranch/ServerConfig/
   ```

4. <b>Server starten</b><br>
   Starte deinen Server wieder.

## Was steckt im Konfigurationsordner?

| Datei | Inhalt |
|-------|--------|
| `Server.ini` | Allgemeine Servereinstellungen |
| `Admin.ini` | Admins und Admingruppen – siehe [Admin hinzufügen](admin-hinzufuegen.md) |
| `Ban.ini` | Banns und Standard-Banndauer |
| `TeamKill.ini` | Automatische Banns bei Teamkills |
| `Vote.ini` | Regeln für Abstimmungen der Spieler |
| `MapList.ini` | Kartenliste des Servers |
| `mods.txt` | Modliste – siehe [Mods hinzufügen](mods-hinzufuegen.md) |
| `AdminSetupPassword.txt` | Einmalpasswort für den ersten Admin |

:::: info Hinweis
Der Ordner `ServerConfig` und die enthaltenen Dateien entstehen erst beim **ersten Serverstart**. Findest du ihn nicht, starte deinen Server einmal.
::::

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
