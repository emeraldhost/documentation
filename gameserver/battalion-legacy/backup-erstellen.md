---
description: Backup eines BATTALION Legacy Servers erstellen
---

# So erstellst du ein Backup deines BATTALION Legacy Servers

Ein BATTALION Legacy Server speichert **keine Spielwelt**. Servername und Admin-Passwort übergibt dein Server beim Start als Parameter — beide trägst du in der **Verwaltung** ein. Alles Weitere — Rundenzeiten, Kartenlisten, Bots und Punktevergabe — steckt in den Konfigurationsdateien deines Servers. Genau diese Dateien sichert ein Backup.

:::: info Kein Weltspeicherstand
BATTALION Legacy ist ein reiner PvP-Shooter. Auf dem Server wird nur die laufende Runde gehalten — es gibt keinen Spielstand und keinen Spielerfortschritt, den du sichern oder auf einen anderen Server übertragen müsstest.
::::

## Wann solltest du ein Backup erstellen?

- Vor Änderungen an den Konfigurationsdateien deines Servers
- Vor einer Neuinstallation der Serverdateien
- Sobald du eine Konfiguration gefunden hast, mit der du zufrieden bist
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. Ein laufender Server schreibt weiterhin in seine Dateien und überschreibt Änderungen unter Umständen beim Beenden.
::::

## Konfiguration einzeln sichern

Möchtest du nur deine Servereinstellungen sichern, lädst du den Konfigurationsordner per SFTP herunter.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Ordner herunterladen</b><br>
   Lade die beiden folgenden Ordner vollständig auf deinen PC herunter:

   ```
   /Battalion/Config/
   /Battalion/Saved/Config/LinuxServer/
   ```

4. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: info Hinweis
Im Ordner `/Battalion/Config/` liegen die mitgelieferten Konfigurationsdateien (`DefaultGame_*.ini`) mit den Spieleinstellungen deines Servers — zum Beispiel den Karten- und Modus-Listen, den Rundenzeiten und der Anzahl der Bots.

Der Ordner `/Battalion/Saved/Config/LinuxServer/` entsteht erst im laufenden Betrieb und enthält die Konfiguration, die dein Server selbst schreibt (unter anderem die `Game.ini`). Findest du ihn nicht, starte deinen Server einmal.
::::

:::: danger Wichtig
Servername und Admin-Passwort übergibt dein Server beim Start als Parameter aus der **Verwaltung**. Sie haben damit Vorrang vor den Einträgen in den Konfigurationsdateien — ein Backup dieser Dateien sichert die beiden Werte also nicht. Notiere sie dir separat aus der Verwaltung.
::::

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
