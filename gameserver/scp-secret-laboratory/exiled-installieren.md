---
description: "EXILED auf einem SCP: Secret Laboratory Server installieren"
---

# So installierst du EXILED auf deinem SCP: Secret Laboratory Server

EXILED ist ein Plugin-Framework für SCP: Secret Laboratory. Viele bekannte Plugins setzen es voraus. EXILED baut auf LabAPI auf, dem offiziellen Plugin-Loader von Northwood: Der Exiled Loader wird als LabAPI-Plugin geladen und lädt anschließend die EXILED-Plugins.

Auf deinem Server installierst du EXILED von Hand per SFTP. Das Installationsprogramm `Exiled.Installer-Linux` brauchst du dafür nicht.

:::: warning Achtung
Erstelle vor der Installation ein [Backup](backup-erstellen.md) deines Servers.
::::

## EXILED herunterladen

1. <b>Release-Seite öffnen</b><br>
   Öffne die [Release-Seite von EXILED auf GitHub](https://github.com/ExMod-Team/EXILED/releases).

2. <b>Archiv herunterladen</b><br>
   Lade beim neuesten Release unter **Assets** die Datei `Exiled.tar.gz` herunter.

3. <b>Archiv entpacken</b><br>
   Entpacke das Archiv auf deinem PC, z.B. mit [7-Zip](https://www.7-zip.org/). Darin findest du zwei Ordner:

   ```
   EXILED/
   SCP Secret Laboratory/
   ```

   :::: info Hinweis
   Mit 7-Zip entpackst du die Datei unter Umständen in zwei Schritten: zuerst von `.tar.gz` zu `.tar` und danach die `.tar`-Datei.
   ::::

## EXILED hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>EXILED-Ordner hochladen</b><br>
   Lade den kompletten Ordner `EXILED` in folgendes Verzeichnis hoch:

   ```
   /.config/
   ```

   Danach liegen die EXILED-Plugins unter `/.config/EXILED/Plugins/`.

4. <b>Exiled Loader hochladen</b><br>
   Lade die Datei `Exiled.Loader.dll` aus dem Ordner `SCP Secret Laboratory/LabAPI/plugins/global/` des Archivs in folgendes Verzeichnis hoch:

   ```
   /.config/SCP Secret Laboratory/LabAPI/plugins/global/
   ```

5. <b>Abhängigkeiten hochladen</b><br>
   Lade alle Dateien aus dem Ordner `SCP Secret Laboratory/LabAPI/dependencies/global/` des Archivs in folgendes Verzeichnis hoch:

   ```
   /.config/SCP Secret Laboratory/LabAPI/dependencies/global/
   ```

   Das sind `Exiled.API.dll`, `Mono.Posix.dll` und `SemanticVersioning.dll`.

   :::: danger Wichtig
   Ersetze nicht den kompletten Ordner `/.config/SCP Secret Laboratory/` auf deinem Server. Darin liegen auch die Konfigurationsdateien deines Servers. Lade nur die einzelnen Dateien in die genannten Unterordner hoch.
   ::::

6. <b>Server starten</b><br>
   Starte deinen Server über die Verwaltung. EXILED wird jetzt über LabAPI geladen.

:::: tip Tipp
Fehlt einer der Ordner `plugins/global/` oder `dependencies/global/`, lege ihn selbst an. Die Namen müssen genau so geschrieben sein, da der Server unter Linux zwischen Groß- und Kleinschreibung unterscheidet.
::::

## Installation prüfen

Öffne nach dem Start die Konsole in der Verwaltung deines Servers. Beim Start meldet EXILED dort, welche Plugins es lädt. Nach dem ersten erfolgreichen Start legt EXILED außerdem den Ordner `/.config/EXILED/Configs/` mit seinen Konfigurationsdateien an.

Erscheinen Fehler oder lädt EXILED nicht, hilft dir die Anleitung [Plugins laden nicht](plugins-laden-nicht.md) weiter.

:::: warning Achtung
Die EXILED-Version muss zur Spielversion deines Servers passen. Nach einem Spiel-Update kann EXILED vorübergehend inkompatibel sein und lädt dann keine Plugins, bis eine passende EXILED-Version erscheint.
::::

## EXILED aktualisieren

Lade die neue `Exiled.tar.gz` herunter und wiederhole die Schritte unter [EXILED hochladen](#exiled-hochladen). Überschreibe dabei die vorhandenen Dateien. Deine Plugins und Konfigurationen in `/.config/EXILED/Plugins/` und `/.config/EXILED/Configs/` bleiben erhalten, solange du den Ordner `EXILED` auf dem Server nicht vorher löschst.

## Plugins installieren

EXILED allein verändert am Spiel fast nichts. Wie du Plugins hinzufügst, erfährst du in der Anleitung [EXILED Plugins installieren](exiled-plugins-installieren.md).
