---
description: Savegame von einem Palworld Server herunterladen
---

# So lädst du das Savegame deines Palworld Servers herunter

Du kannst das Savegame deines Servers jederzeit auf deinen PC herunterladen, zum Beispiel als zusätzliche Sicherung, zum Archivieren oder um es auf einen anderen Server zu übertragen.

:::: warning Achtung
Stoppe deinen Server, bevor du die Dateien herunterlädst. Während der Server läuft, speichert er regelmäßig, du würdest sonst einen unvollständigen oder beschädigten Spielstand herunterladen.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /Pal/Saved/SaveGames/0/
   ```

4. <b>Savegame-Ordner herunterladen</b><br>
   Lade den Savegame-Ordner vollständig auf deinen PC herunter. Der Ordnername ist eine lange Zeichenkette aus Buchstaben und Zahlen und enthält alle Welt- und Spielerdaten.

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: tip Tipp
Liegen mehrere Ordner in `/Pal/Saved/SaveGames/0/`, findest du den aktuell geladenen Savegame-Ordner in folgender Datei:

```
/Pal/Saved/Config/LinuxServer/GameUserSettings.ini
```

Der Parameter `DedicatedServerName=` enthält den Namen des verwendeten Savegame-Ordners.
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
