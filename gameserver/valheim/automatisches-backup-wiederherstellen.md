---
description: Automatisches Backup auf einem Valheim Server wiederherstellen
---

# So stellst du ein automatisches Backup auf deinem Valheim Server wieder her

Valheim legt auf deinem Server selbstständig regelmäßige Backups deiner Welt an. Damit kannst du deine Welt auf einen früheren Zeitpunkt zurücksetzen, zum Beispiel wenn sie beschädigt wurde oder etwas versehentlich zerstört wurde. Diese automatischen Backups sind unabhängig von den Backups der Verwaltung, die du über [Backup erstellen](backup-erstellen.md) anlegst.

## So findest du die automatischen Backups

Die Welten und ihre automatischen Backups liegen auf deinem Server unter:

```
/.config/unity3d/IronGate/Valheim/worlds_local/
```

Seit Valheim 1.0 ist jede Welt ein eigener Ordner. Der Ordner deiner Welt heißt so wie das Feld **Welt Name** in den **Einstellungen** der Verwaltung (Standard: `Dedicated`).

Jedes automatische Backup ist ein weiterer Ordner im selben Verzeichnis. Sein Name folgt dem Muster `<WeltName>_backup_auto-JJJJMMTT-HHMMSS`. Den Ordner `MeineWelt_backup_auto-20260115-183000` hat dein Server also am 15.01.2026 um 18:30:00 Uhr angelegt. Er enthält den zuletzt gespeicherten Stand der Welt `MeineWelt` vor diesem Zeitpunkt. Die Uhrzeit richtet sich nach der Systemzeit des Servers und kann deshalb von deiner Ortszeit abweichen.

Mit den Standardwerten behält dein Server 4 automatische Backups: eines, das etwa 2 Stunden zurückliegt, und drei ältere im Abstand von jeweils 12 Stunden. Anzahl und Abstände änderst du über die Felder **Backup Count**, **Backup Shorttime** und **Backup Longtime** (siehe [Backup Einstellungen ändern](backup-einstellungen-aendern.md)).

:::: info Hinweis
Findest du keinen Backup-Ordner, prüfe Folgendes: Der Server legt automatische Backups nur beim Speichern der Welt an, also im Abstand aus dem Feld **Backup Interval** (Standard: alle 30 Minuten) und beim Stoppen. Das tut er erst, wenn er seit dem Start mindestens 20 Minuten gelaufen ist. Steht **Backup Count** auf `0` oder `1`, legt er gar keine automatischen Backups an.
::::

## So stellst du ein Backup wieder her

:::: warning Achtung
Beim Wiederherstellen wird die komplette Welt auf den Stand des Backups zurückgesetzt. Alles, was seitdem in der Welt passiert ist, geht verloren. Die Charaktere der Spieler mit Inventar und Fähigkeiten liegen dagegen nicht auf dem Server, sondern bei den Spielern selbst, und bleiben unverändert.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Solange er läuft, würde er beim nächsten Speichern oder beim Stoppen seinen aktuellen Stand über das wiederhergestellte Backup schreiben.

2. <b>Aktuellen Stand sichern</b><br>
   Erstelle über die Verwaltung ein [Backup](backup-erstellen.md), damit du den aktuellen Stand notfalls zurückholen kannst.

3. <b>Verzeichnis öffnen</b><br>
   Öffne den Dateimanager der Verwaltung und navigiere in folgendes Verzeichnis:

   ```
   /.config/unity3d/IronGate/Valheim/worlds_local/
   ```

   Alternativ kannst du dich auch per [SFTP](../sftp-verbindung-herstellen.md) verbinden.

4. <b>Backup auswählen</b><br>
   Suche anhand des Zeitstempels im Ordnernamen das Backup mit dem Stand heraus, den du wiederherstellen möchtest, zum Beispiel `MeineWelt_backup_auto-20260115-183000`.

5. <b>Aktuelle Welt umbenennen</b><br>
   Benenne den Ordner deiner aktuellen Welt um, zum Beispiel von `MeineWelt` in `MeineWelt_alt`. So bleibt der aktuelle Stand erhalten, wird aber nicht mehr geladen.

6. <b>Backup-Ordner umbenennen</b><br>
   Benenne den gewählten Backup-Ordner exakt so um, wie deine Welt im Feld **Welt Name** heißt, im Beispiel also in `MeineWelt`. Achte dabei auf Groß- und Kleinschreibung. Der Backup-Ordner wird damit zu deiner aktiven Welt.

   :::: danger Wichtig
   Benenne nur den Ordner selbst um. Die Dateien darin gehören als Satz zusammen: Benenne sie nicht um, verschiebe sie nicht und mische sie nicht mit Dateien aus anderen Backups.
   ::::

7. <b>Server starten</b><br>
   Starte deinen Server und prüfe im Spiel, ob der gewünschte Stand geladen wurde.

:::: tip Tipp
Lädt der Server statt deines Backups eine neue, leere Welt, stoppe ihn und prüfe den Namen des wiederhergestellten Ordners. Weicht er vom Feld **Welt Name** ab, hat der Server unter dem Namen aus **Welt Name** einen neuen Ordner mit einer neuen Welt angelegt. Lösche nur diesen neuen Ordner und benenne den wiederhergestellten Ordner korrekt um. Stimmt der Name dagegen überein, konnte der Server das Backup nicht laden, zum Beispiel weil es beschädigt ist. Spiele dann das [Backup](backup-erstellen.md) der Verwaltung aus Schritt 2 wieder ein und versuche es mit einem anderen automatischen Backup.

Der Ordner `MeineWelt_alt` bleibt als eigene Welt liegen und wird nicht geladen. Brauchst du den alten Stand nicht mehr, kannst du ihn löschen.
::::

## Backups aus der Zeit vor Valheim 1.0

Vor Valheim 1.0 bestand eine Welt aus den zwei Dateien `<WeltName>.fwl` und `<WeltName>.db`. Als dein Server eine solche Welt mit Valheim 1.0 zum ersten Mal gespeichert und dabei in das neue Format umgewandelt hat, hat er den alten Stand als Backup behalten. Dieses Backup liegt als Dateipaar in `worlds_local` und trägt kein `auto` im Namen, zum Beispiel `MeineWelt_backup_20260910-201500.fwl` und `MeineWelt_backup_20260910-201500.db`. Anders als die automatischen Backups löscht der Server es nicht von selbst.

Laut Iron Gate kannst du mit diesem Backup zum Beispiel Gegenstände zurückholen, die auf Gegenstands- oder Rüstungsständern bei der Umstellung auf 1.0 ihre Stufe oder Variante verloren haben. Seit Patch 1.0.12 wandelt der Server Welten korrekt um.

:::: warning Achtung
Dabei geht der gesamte Fortschritt in der Welt seit der Umstellung auf 1.0 verloren.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Aktuellen Stand sichern</b><br>
   Erstelle über die Verwaltung ein [Backup](backup-erstellen.md).

3. <b>Aktuelle Welt umbenennen</b><br>
   Öffne im Dateimanager oder per [SFTP](../sftp-verbindung-herstellen.md) das Verzeichnis `/.config/unity3d/IronGate/Valheim/worlds_local/` und benenne den Ordner deiner aktuellen Welt um, zum Beispiel von `MeineWelt` in `MeineWelt_alt`.

   :::: info Hinweis
   Dieser Schritt ist notwendig: Liegen ein Weltordner und ein Dateipaar mit demselben Namen nebeneinander, lädt der Server nur den neueren Stand und legt den älteren wieder als Backup ab.
   ::::

4. <b>Backup-Dateien umbenennen</b><br>
   Benenne die beiden Dateien des Backups in `<WeltName>.fwl` und `<WeltName>.db` um, im Beispiel also in `MeineWelt.fwl` und `MeineWelt.db`. Beide Dateien müssen aus demselben Backup stammen.

5. <b>Server starten</b><br>
   Starte deinen Server und prüfe im Spiel, ob der gewünschte Stand geladen wurde. Beim ersten Speichern wandelt der Server die Welt wieder in einen Weltordner um und legt das Dateipaar dabei erneut als Backup mit neuem Zeitstempel ab. Läuft dein Server auf dem Branch `default_pre1_0` (siehe [Branch wechseln](branch-wechseln.md)), bleibt die Welt dagegen ein Dateipaar.
