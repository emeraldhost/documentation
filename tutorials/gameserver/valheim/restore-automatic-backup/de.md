---
slug: "automatisches-backup-wiederherstellen"
language: "de"
title: "So stellst Du ein automatisches Backup auf Deinem Valheim Server wieder her"
description: "Automatisches Backup auf einem Valheim Server wiederherstellen"
tags: []
date: "2026-09-24"
visibility: "public"
cta: "gameserver"
product_keys: ["valheim"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Automatisches Backup wiederherstellen"
sort: 15
related: ["gameserver/valheim/create-backup", "gameserver/valheim/change-backup-settings", "gameserver/valheim/download-savegame", "gameserver/valheim/reset-world"]
---
Valheim legt auf Deinem Server selbstständig regelmäßige Backups Deiner Welt an. Damit kannst Du Deine Welt auf einen früheren Zeitpunkt zurücksetzen, zum Beispiel wenn sie beschädigt wurde oder etwas versehentlich zerstört wurde. Diese automatischen Backups sind unabhängig von den Backups der Verwaltung, die Du über [Backup erstellen](/tutorials/gameserver/valheim/create-backup) anlegst.

## So findest Du die automatischen Backups

Die Welten und ihre automatischen Backups liegen auf Deinem Server unter:

```text
/.config/unity3d/IronGate/Valheim/worlds_local/
```

Seit Valheim 1.0 ist jede Welt ein eigener Ordner. Der Ordner Deiner Welt heißt so wie das Feld **Welt Name** in den **Einstellungen** der Verwaltung (Standard: `Dedicated`).

Jedes automatische Backup ist ein weiterer Ordner im selben Verzeichnis. Sein Name folgt dem Muster `<WeltName>_backup_auto-JJJJMMTT-HHMMSS`. Den Ordner `MeineWelt_backup_auto-20260115-183000` hat Dein Server also am 15.01.2026 um 18:30:00 Uhr angelegt. Er enthält den zuletzt gespeicherten Stand der Welt `MeineWelt` vor diesem Zeitpunkt. Die Uhrzeit richtet sich nach der Systemzeit des Servers und kann deshalb von Deiner Ortszeit abweichen.

Mit den Standardwerten behält Dein Server 4 automatische Backups: eines, das etwa 2 Stunden zurückliegt, und drei ältere im Abstand von jeweils 12 Stunden. Anzahl und Abstände änderst Du über die Felder **Backup Count**, **Backup Shorttime** und **Backup Longtime** (siehe [Backup Einstellungen ändern](/tutorials/gameserver/valheim/change-backup-settings)).

> [!NOTE]
> Findest Du keinen Backup-Ordner, prüfe Folgendes: Der Server legt automatische Backups nur beim Speichern der Welt an, also im Abstand aus dem Feld **Backup Interval** (Standard: alle 30 Minuten) und beim Stoppen. Das tut er erst, wenn er seit dem Start mindestens 20 Minuten gelaufen ist. Steht **Backup Count** auf `0` oder `1`, legt er gar keine automatischen Backups an.

## So stellst Du ein Backup wieder her

> [!WARNING]
> Beim Wiederherstellen wird die komplette Welt auf den Stand des Backups zurückgesetzt. Alles, was seitdem in der Welt passiert ist, geht verloren. Die Charaktere der Spieler mit Inventar und Fähigkeiten liegen dagegen nicht auf dem Server, sondern bei den Spielern selbst, und bleiben unverändert.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Solange er läuft, würde er beim nächsten Speichern oder beim Stoppen seinen aktuellen Stand über das wiederhergestellte Backup schreiben.

2. **Aktuellen Stand sichern**\
   Erstelle über die Verwaltung ein [Backup](/tutorials/gameserver/valheim/create-backup), damit Du den aktuellen Stand notfalls zurückholen kannst.

3. **Verzeichnis öffnen**\
   Öffne den Dateimanager der Verwaltung und navigiere in folgendes Verzeichnis:

   ```text
   /.config/unity3d/IronGate/Valheim/worlds_local/
   ```

   Alternativ kannst Du Dich auch per [SFTP](/tutorials/gameserver/establish-sftp-connection) verbinden.

4. **Backup auswählen**\
   Suche anhand des Zeitstempels im Ordnernamen das Backup mit dem Stand heraus, den Du wiederherstellen möchtest, zum Beispiel `MeineWelt_backup_auto-20260115-183000`.

5. **Aktuelle Welt umbenennen**\
   Benenne den Ordner Deiner aktuellen Welt um, zum Beispiel von `MeineWelt` in `MeineWelt_alt`. So bleibt der aktuelle Stand erhalten, wird aber nicht mehr geladen.

6. **Backup-Ordner umbenennen**\
   Benenne den gewählten Backup-Ordner exakt so um, wie Deine Welt im Feld **Welt Name** heißt, im Beispiel also in `MeineWelt`. Achte dabei auf Groß- und Kleinschreibung. Der Backup-Ordner wird damit zu Deiner aktiven Welt.

   > [!IMPORTANT]
   > Benenne nur den Ordner selbst um. Die Dateien darin gehören als Satz zusammen: Benenne sie nicht um, verschiebe sie nicht und mische sie nicht mit Dateien aus anderen Backups.

7. **Server starten**\
   Starte Deinen Server und prüfe im Spiel, ob der gewünschte Stand geladen wurde.

> [!TIP]
> Lädt der Server statt Deines Backups eine neue, leere Welt, stoppe ihn und prüfe den Namen des wiederhergestellten Ordners. Weicht er vom Feld **Welt Name** ab, hat der Server unter dem Namen aus **Welt Name** einen neuen Ordner mit einer neuen Welt angelegt. Lösche nur diesen neuen Ordner und benenne den wiederhergestellten Ordner korrekt um. Stimmt der Name dagegen überein, konnte der Server das Backup nicht laden, zum Beispiel weil es beschädigt ist. Spiele dann das [Backup](/tutorials/gameserver/valheim/create-backup) der Verwaltung aus Schritt 2 wieder ein und versuche es mit einem anderen automatischen Backup.
>
> Der Ordner `MeineWelt_alt` bleibt als eigene Welt liegen und wird nicht geladen. Brauchst Du den alten Stand nicht mehr, kannst Du ihn löschen.

## Backups aus der Zeit vor Valheim 1.0

Vor Valheim 1.0 bestand eine Welt aus den zwei Dateien `<WeltName>.fwl` und `<WeltName>.db`. Als Dein Server eine solche Welt mit Valheim 1.0 zum ersten Mal gespeichert und dabei in das neue Format umgewandelt hat, hat er den alten Stand als Backup behalten. Dieses Backup liegt als Dateipaar in `worlds_local` und trägt kein `auto` im Namen, zum Beispiel `MeineWelt_backup_20260910-201500.fwl` und `MeineWelt_backup_20260910-201500.db`. Anders als die automatischen Backups löscht der Server es nicht von selbst.

Laut Iron Gate kannst Du mit diesem Backup zum Beispiel Gegenstände zurückholen, die auf Gegenstands- oder Rüstungsständern bei der Umstellung auf 1.0 ihre Stufe oder Variante verloren haben. Seit Patch 1.0.12 wandelt der Server Welten korrekt um.

> [!WARNING]
> Dabei geht der gesamte Fortschritt in der Welt seit der Umstellung auf 1.0 verloren.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Aktuellen Stand sichern**\
   Erstelle über die Verwaltung ein [Backup](/tutorials/gameserver/valheim/create-backup).

3. **Aktuelle Welt umbenennen**\
   Öffne im Dateimanager oder per [SFTP](/tutorials/gameserver/establish-sftp-connection) das Verzeichnis `/.config/unity3d/IronGate/Valheim/worlds_local/` und benenne den Ordner Deiner aktuellen Welt um, zum Beispiel von `MeineWelt` in `MeineWelt_alt`.

   > [!NOTE]
   > Dieser Schritt ist notwendig: Liegen ein Weltordner und ein Dateipaar mit demselben Namen nebeneinander, lädt der Server nur den neueren Stand und legt den älteren wieder als Backup ab.

4. **Backup-Dateien umbenennen**\
   Benenne die beiden Dateien des Backups in `<WeltName>.fwl` und `<WeltName>.db` um, im Beispiel also in `MeineWelt.fwl` und `MeineWelt.db`. Beide Dateien müssen aus demselben Backup stammen.

5. **Server starten**\
   Starte Deinen Server und prüfe im Spiel, ob der gewünschte Stand geladen wurde. Beim ersten Speichern wandelt der Server die Welt wieder in einen Weltordner um und legt das Dateipaar dabei erneut als Backup mit neuem Zeitstempel ab. Läuft Dein Server auf dem Branch `default_pre1_0` (siehe [Branch wechseln](/tutorials/gameserver/valheim/change-branch)), bleibt die Welt dagegen ein Dateipaar.
