---
description: Savegame von einem Abiotic Factor Server herunterladen
---

# So lädst du das Savegame deines Abiotic Factor Servers herunter

Du kannst den Spielstand deines Servers jederzeit auf deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen.

:::: warning Achtung
Stoppe deinen Server, bevor du die Dateien herunterlädst. Der Server schreibt im laufenden Betrieb in die Weltdateien – lädst du währenddessen herunter, kann der Spielstand unvollständig sein.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /AbioticFactor/Saved/SaveGames/Server/Worlds/
   ```

4. <b>Weltordner herunterladen</b><br>
   Lade den kompletten Ordner deiner Welt mit allen enthaltenen Dateien auf deinen PC herunter. Standardmäßig heißt der Ordner `Cascade`.

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: warning Achtung
Ein Spielstand ist immer der komplette Weltordner. Lade ihn stets vollständig herunter – einzelne Dateien daraus ergeben keinen nutzbaren Spielstand.
::::

:::: info Welcher Ordner ist der richtige?
Liegen mehrere Weltordner nebeneinander, ist derjenige aktuell, der über den Weltnamen deines Servers geladen wird – standardmäßig `Cascade`. Im Zweifel hilft der Zeitstempel der Dateien: Der zuletzt geänderte Ordner ist der aktive Spielstand.
::::

:::: tip Einstellungen mitsichern
Die Gameplay- und Sandbox-Einstellungen deiner Welt stehen in der Datei `SandboxSettings.ini` im Weltordner – sie wird also zusammen mit dem Ordner heruntergeladen. Über den Startparameter `-SandboxIniPath=` kann die Datei an einem anderen Ort liegen, zum Beispiel direkt unter `/AbioticFactor/Saved/`.

Deine Adminliste liegt außerhalb des Weltordners und muss separat gesichert werden:

```
/AbioticFactor/Saved/SaveGames/Server/Admin.ini
```
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
