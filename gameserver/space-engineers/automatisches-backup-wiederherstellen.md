---
description: Automatisches Backup auf einem Space Engineers Server wiederherstellen und die Anzahl der Backups ändern
---

# So stellst du ein automatisches Backup auf deinem Space Engineers Server wieder her

Space Engineers legt auf deinem Server bei jedem Speichern selbstständig ein Backup deiner Welt an. Damit kannst du deine Welt auf einen früheren Stand zurücksetzen, zum Beispiel wenn ein Schiff versehentlich zerstört wurde oder etwas in der Welt schiefgelaufen ist. Diese automatischen Backups sind unabhängig von den Backups der Verwaltung, die du über [Backup erstellen](../backup-erstellen.md) anlegst.

## So findest du die automatischen Backups

Deine Welt liegt auf deinem Server im Ordner `/config/Saves/World/`. Die automatischen Backups findest du im Unterordner:

```
/config/Saves/World/Backup/
```

Für jedes Backup gibt es dort einen eigenen Ordner. Sein Name ist der Zeitpunkt des Backups im Format `JJJJ-MM-TT HHmmss`. Den Ordner `2026-09-27 174500` hat dein Server also am 27.09.2026 um 17:45:00 Uhr angelegt. Die Uhrzeit richtet sich nach der Systemzeit des Servers und kann deshalb von deiner Ortszeit abweichen.

Jeder Backup-Ordner enthält eine Kopie aller Dateien, die direkt in `/config/Saves/World/` liegen:

- `Sandbox.sbc` und `Sandbox_config.sbc` mit den Welt-Einstellungen und der Mod-Liste
- `SANDBOX_0_0_0_.sbs` und `SANDBOX_0_0_0_.sbsB5` mit den Schiffen, Stationen, Spielfiguren und weiteren Objekten der Welt
- die `.vx2`-Dateien der Planeten und Asteroiden
- je nach Welt das Vorschaubild `thumb.jpg` und weitere Dateien, deren Name mit `gs-` beginnt

Unterordner wie `Storage`, in dem manche Mods ihre Daten ablegen, sichert der Server dabei nicht mit.

Dein Server legt ein neues Backup an, sobald er die Welt erfolgreich gespeichert hat. Automatisch speichert er im Abstand aus dem Feld **Automatischer Backup Interval** in den **Einstellungen** der Verwaltung (Standard: alle `5` Minuten). Das neueste Backup entspricht also immer dem zuletzt gespeicherten Stand deiner Welt.

:::: info Hinweis
Mit den Standardwerten behält dein Server nur die letzten 5 Backups und löscht bei jedem neuen Backup das älteste. Die automatischen Backups reichen damit nur etwa 25 Minuten Laufzeit zurück. Für ältere Stände brauchst du ein [Backup der Verwaltung](../backup-erstellen.md). Wie du mehr automatische Backups aufbewahrst, erfährst du unter [Anzahl der Backups ändern](#anzahl-der-backups-andern).
::::

## So stellst du ein Backup wieder her

:::: warning Achtung
Beim Wiederherstellen wird die komplette Welt auf den Stand des Backups zurückgesetzt. Alles, was seitdem in der Welt passiert ist, geht verloren. Da auch die Spielfiguren mit ihrem Inventar in der Welt gespeichert sind, betrifft das alle Spieler.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Solange er läuft, speichert er regelmäßig und würde dabei seinen aktuellen Stand über das wiederhergestellte Backup schreiben.

2. <b>Aktuellen Stand sichern</b><br>
   Erstelle über die Verwaltung ein [Backup](../backup-erstellen.md), damit du den aktuellen Stand notfalls zurückholen kannst.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und öffne folgendes Verzeichnis:

   ```
   /config/Saves/World/Backup/
   ```

4. <b>Backup auswählen</b><br>
   Suche anhand des Zeitstempels im Ordnernamen das Backup mit dem Stand heraus, den du wiederherstellen möchtest, zum Beispiel `2026-09-27 174500`. Denk daran, dass das neueste Backup deinem aktuellen Stand entspricht.

5. <b>Backup herunterladen</b><br>
   Lade den gewählten Backup-Ordner auf deinen PC herunter. So bleibt das Backup auf dem Server erhalten.

6. <b>Aktuelle Weltdateien löschen</b><br>
   Wechsle in den Ordner `/config/Saves/World/` und lösche dort alle Dateien, die direkt in diesem Ordner liegen. Lösche nur Dateien, nicht den Ordner `Backup` und auch keine anderen Unterordner wie `Storage`.

7. <b>Backup-Dateien hochladen</b><br>
   Lade alle Dateien aus dem heruntergeladenen Backup-Ordner direkt in `/config/Saves/World/` hoch, nicht als weiteren Unterordner. Die `Sandbox.sbc` muss danach direkt in `/config/Saves/World/` neben dem Ordner `Backup` liegen.

   :::: danger Wichtig
   Ersetze immer den kompletten Satz an Dateien aus einem einzigen Backup und mische keine Dateien aus verschiedenen Backups. Liegt eine `SANDBOX_0_0_0_.sbsB5` im Ordner, lädt der Server diese Datei statt der `SANDBOX_0_0_0_.sbs`. Spielst du also nur die `.sbs` zurück und lässt die neuere `.sbsB5` liegen, lädt der Server weiterhin den neueren Stand.
   ::::

8. <b>Server starten</b><br>
   Starte deinen Server und prüfe im Spiel, ob der gewünschte Stand geladen wurde.

:::: info Hinweis
Im Datei-Browser der Verwaltung kannst du in Schritt 7 die Dateien auch direkt aus dem Backup-Ordner nach `/config/Saves/World/` verschieben, statt sie herunter- und wieder hochzuladen. Das gewählte Backup ist danach allerdings nicht mehr vorhanden. Den leeren Backup-Ordner kannst du anschließend löschen.
::::

Mit dem Backup übernimmst du auch die Welt-Einstellungen und die Mod-Liste aus der `Sandbox_config.sbc` zum Zeitpunkt des Backups. Hast du seitdem Mods hinzugefügt, trage sie erneut ein (siehe [Mods hinzufügen](mods-hinzufuegen.md)). Die Werte aus den **Einstellungen** der Verwaltung, zum Beispiel **Game Mode** und **Maximale Spieler**, schreibt die Verwaltung beim Start ohnehin neu in die Welt. Admins und gebannte Spieler, die du in der Datei `/config/SpaceEngineers-Dedicated.cfg` eingetragen hast (siehe [Admins hinzufügen](admins-hinzufuegen.md) und [Spieler kicken und bannen](spieler-kicken-bannen.md)), liegen außerhalb des Weltordners und bleiben unverändert. Ränge, die du direkt im Spiel über **Promote** vergeben hast, speichert der Server dagegen in der Welt. Sie entsprechen nach dem Wiederherstellen wieder dem Stand des Backups.

:::: tip Tipp
Sobald dein Server wieder läuft, legt er bei jedem Speichern ein neues Backup an und löscht dabei die ältesten. Möchtest du mehrere Backups nacheinander ausprobieren, lade vorher den gesamten Ordner `Backup` auf deinen PC herunter.

Startet der Server nicht oder siehst du im Spiel nicht den erwarteten Stand, stoppe ihn umgehend, damit er beim Speichern keine weiteren Backups löscht. Prüfe dann, ob die `Sandbox.sbc` direkt in `/config/Saves/World/` liegt und nicht versehentlich in einem Unterordner gelandet ist. Lässt sich das Backup trotzdem nicht laden, spiele das [Backup](../backup-erstellen.md) der Verwaltung aus Schritt 2 wieder ein und versuche es mit einem anderen automatischen Backup.
::::

## Anzahl der Backups ändern

Wie viele automatische Backups dein Server aufbewahrt, legt der Wert `MaxBackupSaves` in der Datei `Sandbox_config.sbc` deiner Welt fest (Standard: `5`, erlaubt sind `0` bis `1000`). Die Verwaltung überschreibt diesen Wert nicht.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Ein laufender Server kann deine Änderung beim Speichern oder Stoppen überschreiben.

2. <b>Backup erstellen</b><br>
   Erstelle ein [Backup](../backup-erstellen.md) oder lade dir eine Kopie der Datei `Sandbox_config.sbc` herunter. So kannst du den alten Stand wiederherstellen, falls beim Bearbeiten etwas schiefgeht.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server oder nutze den Datei-Browser der Verwaltung.

4. <b>Konfigurationsdatei öffnen</b><br>
   Öffne die Datei:

   ```
   /config/Saves/World/Sandbox_config.sbc
   ```

5. <b>Wert ändern</b><br>
   Suche im Block `<Settings>` die Zeile mit `MaxBackupSaves` und trage die gewünschte Anzahl ein, zum Beispiel:

   ```xml
   <MaxBackupSaves>12</MaxBackupSaves>
   ```

6. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server. Erscheint beim Laden der Welt in der Konsole die Zeile `Sandbox world configuration file found, overriding checkpoint settings.`, hat der Server deine `Sandbox_config.sbc` übernommen.

Wie weit die Backups zurückreichen, kannst du grob so abschätzen: Anzahl der Backups × **Automatischer Backup Interval**. Mit `12` Backups und dem Standardintervall von `5` Minuten reichen die Backups also etwa eine Stunde zurück. Ein größeres Intervall verlängert diesen Zeitraum ebenfalls, dafür speichert der Server seltener (siehe [Automatische Backups einrichten](automatische-backups-aktivieren.md)).

:::: warning Achtung
Setzt du `MaxBackupSaves` auf `0`, legt der Server keine automatischen Backups mehr an und löscht beim nächsten Speichern den kompletten Ordner `Backup` mit allen vorhandenen Backups.
::::

:::: info Hinweis
Ändere den Wert in der `Sandbox_config.sbc` deiner Welt und nicht in der `SpaceEngineers-Dedicated.cfg`. Dort gilt er nur für neu erstellte Welten. Jedes Backup enthält eine Kopie aller Dateien deiner Welt einschließlich der `.vx2`-Dateien und belegt ungefähr so viel Speicherplatz wie diese. Mehr Backups brauchen also entsprechend mehr Speicherplatz.
::::

:::: danger Wichtig
Achte beim Bearbeiten auf gültiges XML. Ist die `Sandbox_config.sbc` fehlerhaft, ignoriert der Server die gesamte Datei, ohne eine Fehlermeldung in der Konsole anzuzeigen. Er verwendet dann die Einstellungen aus der `Sandbox.sbc` und überschreibt die `Sandbox_config.sbc` beim nächsten Speichern. Deine Änderungen gehen dabei verloren. Fehlt die Zeile aus Schritt 6 nach dem Start, stoppe den Server, spiele deine Kopie der Datei wieder ein und ändere den Wert erneut. Mehr zum Bearbeiten der Welt-Einstellungen findest du unter [Welt-Einstellungen ändern](welt-einstellungen-aendern.md).
::::
