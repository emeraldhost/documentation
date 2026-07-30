---
description: Savegame von einem Romestead Server herunterladen
---

# So lädst du das Savegame deines Romestead Servers herunter

Du kannst die Welt deines Servers jederzeit auf deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um sie auf einen anderen Server zu übertragen.

:::: warning Achtung
Stoppe deinen Server, bevor du die Dateien herunterlädst. Romestead speichert alle sechs Minuten automatisch – lädst du mitten in einen Speichervorgang hinein herunter, kann der Spielstand unvollständig sein.
::::

1. <b>Welt speichern</b><br>
   Führe in der **Konsole** deines Servers folgenden Befehl aus, damit der aktuelle Stand vollständig auf die Festplatte geschrieben wird:

   ```
   save
   ```

   :::: info Hinweis
   Der Server ist während des Speichervorgangs kurz eingefroren. Warte die Meldung in der Konsole ab, bevor du weitermachst.
   ::::

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Verzeichnis öffnen</b><br>
   Wechsle in das Hauptverzeichnis deines Servers – dort, wo auch die `config.json` liegt.

5. <b>Welt herunterladen</b><br>
   Lade den kompletten Ordner mit allen enthaltenen Dateien und Unterordnern auf deinen PC herunter:

   ```
   /saved_worlds/
   ```

6. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: info Welche Welt lädt mein Server?
Welche Welt beim Start geladen wird, steht in der `config.json` im Hauptverzeichnis deines Servers beim Wert `AutoStartWorldName`.
::::

:::: warning Achtung
Lade den Ordner immer komplett herunter. Einzelne Dateien daraus ergeben keinen nutzbaren Spielstand.
::::

:::: tip Konfiguration mitsichern
Möchtest du auch deine Servereinstellungen sichern, lade zusätzlich folgende Datei herunter:

```
/config.json
```

Dort stehen unter anderem der Name der automatisch geladenen Welt und die weiteren Grundeinstellungen deines Servers.
::::

:::: info Spielstand aus dem Einzelspieler
Für Welten aus dem lokalen Einzelspieler-Modus gibt es keinen dokumentierten Weg auf einen dedizierten Server: Weder der Speicherort der lokalen Welten noch ein Übertragungsverfahren sind offiziell beschrieben. Lege deine Welt daher direkt auf dem Server an.
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
