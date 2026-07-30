---
description: Savegame von einem SCUM Server herunterladen
---

# So lädst du das Savegame deines SCUM Servers herunter

Du kannst den Spielstand deines Servers jederzeit auf deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen.

:::: warning Achtung
Stoppe deinen Server, bevor du die Dateien herunterlädst. SCUM schreibt im laufenden Betrieb ständig in die Datenbank – du würdest sonst einen unvollständigen oder beschädigten Spielstand herunterladen.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /SCUM/Saved/SaveFiles/
   ```

4. <b>Dateien herunterladen</b><br>
   Lade alle drei Dateien auf deinen PC herunter:

   ```
   SCUM.db
   SCUM.db-wal
   SCUM.db-shm
   ```

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: info Hinweis
Die drei Dateien gehören zusammen: `SCUM.db` ist die eigentliche Datenbank mit Welt, Basen, Fahrzeugen und Charakteren, `SCUM.db-wal` das Write-Ahead-Log und `SCUM.db-shm` die zugehörige Shared-Memory-Datei. Sichere sie deshalb immer gemeinsam.
::::

:::: tip Konfiguration mitsichern
Möchtest du auch deine Servereinstellungen sichern, lade zusätzlich den folgenden Ordner herunter:

```
/SCUM/Saved/Config/WindowsServer/
```

Dort liegen unter anderem `ServerSettings.ini`, `AdminUsers.ini` und `BannedUsers.ini`.
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
