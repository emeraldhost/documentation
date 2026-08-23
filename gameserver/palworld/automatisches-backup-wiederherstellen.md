---
description: Automatisches Backup auf einem Palworld Server wiederherstellen
---

# So stellst du ein automatisches Backup auf deinem Palworld Server wieder her

Palworld legt auf deinem Server selbstständig regelmäßige Backups deiner Welt an. Damit kannst du deinen Spielstand auf einen früheren Zeitpunkt zurücksetzen, zum Beispiel wenn der Spielstand beschädigt wurde oder etwas versehentlich zerstört oder gelöscht wurde. Diese automatischen Backups sind unabhängig von den Backups der Verwaltung, die du über [Backup erstellen](backup-erstellen.md) anlegst.

## So findest du die automatischen Backups

Die automatischen Backups liegen auf deinem Server unter:

```
/Pal/Saved/SaveGames/0/<Savegame-Ordner>/backup/world/
```

Der Savegame-Ordner ist der Ordner mit der langen Zeichenkette als Name (z.B. `A1B2C3D4E5F67890A1B2C3D4E5F67890`).

Im Verzeichnis `backup/world/` liegt für jedes Backup ein Ordner, dessen Name der Zeitpunkt des Backups im Format `JJJJ.MM.TT-HH.MM.SS` ist. Der Ordner `2026.01.15-18.30.00` enthält also den Stand vom 15.01.2026 um 18:30:00 Uhr. Jeder Backup-Ordner enthält die Weltdateien `Level.sav` und `LevelMeta.sav` sowie den Ordner `Players` mit den Spielerdaten. Von den letzten Stunden liegen mehrere Backups in kurzen Abständen vor, von älteren Tagen bleibt jeweils ein Backup pro Tag erhalten.

## So stellst du ein Backup wieder her

:::: warning Achtung
Beim Wiederherstellen wird der komplette Spielstand, also Welt und Spieler, auf den Zeitpunkt des Backups zurückgesetzt. Alles, was zwischen dem Backup und jetzt passiert ist, geht verloren.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Aktuellen Stand sichern</b><br>
   Erstelle über die Verwaltung ein [Backup](backup-erstellen.md) oder lade deinen Savegame-Ordner auf deinen PC herunter ([Savegame herunterladen](savegame-herunterladen.md)), damit du den aktuellen Stand notfalls zurückholen kannst.

3. <b>Savegame-Ordner öffnen</b><br>
   Öffne den Dateimanager der Verwaltung und navigiere in deinen Savegame-Ordner:

   ```
   /Pal/Saved/SaveGames/0/<Savegame-Ordner>/
   ```

   Alternativ kannst du dich auch per [SFTP](../sftp-verbindung-herstellen.md) verbinden.

4. <b>Backup auswählen</b><br>
   Öffne den Unterordner `backup/world/` und suche anhand des Zeitstempels den Backup-Ordner mit dem Stand heraus, den du wiederherstellen möchtest.

5. <b>Aktuelle Weltdateien löschen</b><br>
   Wechsle zurück in den Savegame-Ordner und lösche dort die Dateien `Level.sav` und `LevelMeta.sav` sowie den Ordner `Players`. Lösche nur diese drei Einträge, nicht den Ordner `backup` und nicht den Savegame-Ordner selbst.

6. <b>Backup-Dateien kopieren</b><br>
   Kopiere die Dateien `Level.sav` und `LevelMeta.sav` sowie den Ordner `Players` aus dem gewählten Backup-Ordner direkt in den Savegame-Ordner, sodass sie dort neben dem Ordner `backup` liegen.

7. <b>Server starten</b><br>
   Starte deinen Server und prüfe im Spiel, ob der gewünschte Stand geladen wurde.

:::: tip Tipp
Liegen mehrere Ordner in `/Pal/Saved/SaveGames/0/`, findest du den aktuell geladenen Savegame-Ordner in folgender Datei:

```
/Pal/Saved/Config/LinuxServer/GameUserSettings.ini
```

Der Parameter `DedicatedServerName=` enthält den Namen des verwendeten Savegame-Ordners.
::::

:::: info Hinweis
Die automatischen Backups sind eine Funktion des Palworld-Servers selbst und werden über die Einstellung `bIsUseBackupSaveData` in der `PalWorldSettings.ini` gesteuert (siehe [Config anpassen](server-config-anpassen.md)). Steht sie auf `True`, legt dein Server die Backups selbstständig an.
::::
