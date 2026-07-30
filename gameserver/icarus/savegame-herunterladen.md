---
description: Savegame von einem Icarus Server herunterladen
---

# So lädst du das Savegame deines Icarus Servers herunter

Du kannst den Prospect deines Servers jederzeit auf deinen PC herunterladen, zum Beispiel als zusätzliche Sicherung, zum Archivieren oder um ihn auf einen anderen Server zu übertragen.

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
   /ICARUS/Saved/PlayerData/DedicatedServer/Prospects/
   ```

4. <b>Prospect-Datei herunterladen</b><br>
   Lade die Datei `<DeinProspect>.json` auf deinen PC herunter. Jeder Prospect ist eine einzelne `.json`-Datei, die den kompletten Spielstand enthält.

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: tip Tipp
Welcher Prospect aktuell geladen wird, siehst du in folgender Datei:

```
/ICARUS/Saved/Config/WindowsServer/ServerSettings.ini
```

Der Parameter `LoadProspect=` enthält den Dateinamen deines Prospects (ohne `.json`).
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
