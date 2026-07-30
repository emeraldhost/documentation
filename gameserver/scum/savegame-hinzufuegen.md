---
description: Savegame auf einem SCUM Server hinzufügen
---

# So fügst du ein Savegame zu deinem SCUM Server hinzu

Der komplette Spielstand eines SCUM Servers steckt in einer einzigen SQLite-Datenbank namens `SCUM.db`. Sie enthält die Welt, alle Basen, Fahrzeuge, Charaktere und deren Fortschritt.

:::: info Hinweis
Der Dateiname `SCUM.db` ist fest vorgegeben. Du musst also keinen Welt- oder Spielstandnamen in einer Konfiguration eintragen – der Servername hat mit dem Savegame nichts zu tun.
::::

## Dateien des Spielstands

Zum Spielstand gehören drei Dateien, die immer zusammengehören:

| Datei | Inhalt |
|-------|--------|
| `SCUM.db` | Die eigentliche Datenbank mit Welt, Basen, Fahrzeugen und Charakteren |
| `SCUM.db-wal` | Write-Ahead-Log der Datenbank |
| `SCUM.db-shm` | Shared-Memory-Datei des Write-Ahead-Logs |

## Savegame hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Solange der Server läuft, schreibt er laufend in die Datenbank.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /SCUM/Saved/SaveFiles/
   ```

4. <b>Alte Dateien entfernen</b><br>
   Lösche dort die vorhandenen Dateien `SCUM.db`, `SCUM.db-wal` und `SCUM.db-shm`. Bleiben `SCUM.db-wal` oder `SCUM.db-shm` liegen, überschreiben sie beim Start Teile deiner hochgeladenen Datenbank.

   :::: warning Achtung
   Damit ist der bisherige Spielstand deines Servers weg. Erstelle vorher ein [Backup](backup-erstellen.md) oder lade den bisherigen Stand herunter, falls du zurückwechseln möchtest.
   ::::

5. <b>Neue Datenbank hochladen</b><br>
   Lade deine eigene `SCUM.db` in dasselbe Verzeichnis hoch. Der Dateiname muss exakt `SCUM.db` lauten.

6. <b>Server starten</b><br>
   Starte deinen Server. Der neue Spielstand wird nun geladen.

## Lokalen Spielstand finden

Deinen Einzelspieler-Spielstand findest du auf deinem PC unter:

```
C:\Users\<Benutzername>\AppData\Local\SCUM\Saved\SaveFiles\
```

Auch dort heißt die Datenbank `SCUM.db`.

:::: danger Wichtig
Es gibt **kein offizielles Verfahren**, einen Einzelspieler-Spielstand auf einen Dedicated Server zu übertragen. Spieler- und Weltdaten liegen in derselben Datenbank und lassen sich ohne direkte Bearbeitung der Datenbank nicht voneinander trennen. Ein Übertragungsversuch kann daher fehlschlagen oder zu unerwartetem Verhalten führen – arbeite ausschließlich mit Kopien und lege vorher ein Backup an.
::::

:::: tip Tipp
Am zuverlässigsten funktioniert der Wechsel zwischen zwei Spielständen, die beide von einem Dedicated Server stammen – zum Beispiel beim Umzug auf einen anderen Server.
::::
