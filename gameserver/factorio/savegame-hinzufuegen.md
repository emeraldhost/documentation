---
description: Savegame auf einem Factorio Server hinzufügen
---

# So fügst du ein Savegame zu deinem Factorio Server hinzu

Du kannst einen lokalen Spielstand auf deinen Server übertragen, um mit einer bestehenden Fabrik weiterzuspielen. Ein Factorio-Spielstand ist immer eine **einzelne .zip-Datei** – kein Ordner.

## Lokales Savegame finden

1. <b>Savegame-Ordner öffnen</b><br>
   Drücke `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```
   %appdata%\Factorio\saves
   ```

   :::: info Hinweis
   Unter Linux liegen die Spielstände in `~/.factorio/saves`, unter macOS in `~/Library/Application Support/factorio/saves`.
   ::::

2. <b>Spielstand auswählen</b><br>
   Suche die gewünschte `.zip`-Datei heraus, z.B. `MeineFabrik.zip`. Vermeide Leerzeichen im Dateinamen und verwende stattdessen Unterstriche, z.B. `Meine_Fabrik.zip`.

## Savegame hochladen und anwenden

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Spielstand hochladen</b><br>
   Lade die `.zip`-Datei in folgendes Verzeichnis hoch:

   ```
   /saves/
   ```

4. <b>Spielstandnamen setzen</b><br>
   Öffne die Verwaltung, navigiere zu den **Einstellungen** und trage im Feld **Save Name** den Dateinamen deines Spielstands ein – **ohne** die Endung `.zip` (z.B. `Meine_Fabrik` für `Meine_Fabrik.zip`).

5. <b>Server starten</b><br>
   Speichere die Einstellungen und starte deinen Server.

:::: warning Achtung
Benenne die hochgeladene Datei nicht um, sondern passe stattdessen den **Save Name** an den vorhandenen Dateinamen an. So vermeidest du Fehler durch abweichende Bezeichnungen innerhalb der Zip-Datei.
::::

:::: danger Wichtig
Findet der Server unter dem eingetragenen **Save Name** keine Datei im Ordner `saves`, erzeugt er beim Start automatisch eine **neue, leere Welt** mit diesem Namen. Prüfe die Schreibweise daher genau – Groß- und Kleinschreibung inklusive.
::::

:::: warning Versionen
Ein Spielstand aus einer neueren Factorio-Version lässt sich auf einem älteren Server nicht laden. Ältere Spielstände werden beim Laden migriert, allerdings nur über eine begrenzte Versionsspanne hinweg.
::::

:::: tip Mods
Wurde der Spielstand mit Mods gespielt, müssen dieselben Mods auch auf dem Server vorhanden sein. Wie du sie installierst, erfährst du unter [Mods hinzufügen](mods-hinzufuegen.md).
::::

:::: tip Tipp
Erstelle vor dem Hochladen ein [Backup](backup-erstellen.md) deines bisherigen Server-Spielstands, falls du später zurückwechseln möchtest.
::::
