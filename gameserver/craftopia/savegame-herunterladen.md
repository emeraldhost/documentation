---
description: Savegame von einem Craftopia Server herunterladen
---

# So lädst du das Savegame deines Craftopia Servers herunter

Du kannst den Spielstand deines Servers jederzeit auf deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen.

:::: warning Achtung
Stoppe deinen Server, bevor du die Dateien herunterlädst. Craftopia speichert im laufenden Betrieb automatisch – lädst du währenddessen herunter, kann der Spielstand unvollständig oder beschädigt sein.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in das Hauptverzeichnis deines Servers. Dort findest du den Ordner:

   ```
   /DedicatedServerSave/
   ```

4. <b>Ordner herunterladen</b><br>
   Lade den **kompletten Ordner** mit allen enthaltenen Dateien und Unterordnern auf deinen PC herunter.

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: warning Achtung
Der Ordner `DedicatedServerSave` enthält alle Welten deines Servers – die Weltdateien selbst liegen im Unterordner `Worlds`. Lade den Ordner immer vollständig herunter, damit dir nichts fehlt.
::::

:::: info Abweichender Speicherort
Standardmäßig liegt der Spielstand in `DedicatedServerSave/`. Welcher Ordner bei dir tatsächlich verwendet wird, steht in der Datei `/ServerSetting.ini` im Abschnitt `[Save]` beim Wert `savePath`.
::::

:::: tip Konfiguration mitsichern
Möchtest du auch deine Servereinstellungen sichern, lade zusätzlich folgende Datei herunter:

```
/ServerSetting.ini
```

Dort stehen unter anderem der Weltname, Schwierigkeitsgrad, Spielmodus und die Autosave-Einstellungen. Den Weltnamen brauchst du, wenn du den Spielstand später wieder einspielen möchtest.
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
