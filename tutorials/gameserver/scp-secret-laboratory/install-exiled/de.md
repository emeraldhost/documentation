---
slug: "exiled-installieren"
language: "de"
title: "So installierst Du EXILED auf Deinem SCP: Secret Laboratory Server"
description: "EXILED auf einem SCP: Secret Laboratory Server installieren"
tags: []
date: "2026-10-02"
visibility: "public"
cta: "gameserver"
product_keys: ["scp-secret-laboratory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "EXILED installieren"
sort: 16
related: ["gameserver/scp-secret-laboratory/install-exiled-plugins", "gameserver/scp-secret-laboratory/install-labapi-plugins", "gameserver/scp-secret-laboratory/plugins-not-loading", "gameserver/scp-secret-laboratory/create-backup"]
---
EXILED ist ein Plugin-Framework für SCP: Secret Laboratory. Viele bekannte Plugins setzen es voraus. EXILED baut auf LabAPI auf, dem offiziellen Plugin-Loader von Northwood: Der Exiled Loader wird als LabAPI-Plugin geladen und lädt anschließend die EXILED-Plugins.

Auf Deinem Server installierst Du EXILED von Hand per SFTP. Das Installationsprogramm `Exiled.Installer-Linux` brauchst Du dafür nicht.

> [!WARNING]
> Erstelle vor der Installation ein [Backup](/tutorials/gameserver/scp-secret-laboratory/create-backup) Deines Servers.

## EXILED herunterladen

1. **Release-Seite öffnen**\
   Öffne die [Release-Seite von EXILED auf GitHub](https://github.com/ExMod-Team/EXILED/releases).

2. **Archiv herunterladen**\
   Lade beim neuesten Release unter **Assets** die Datei `Exiled.tar.gz` herunter.

3. **Archiv entpacken**\
   Entpacke das Archiv auf Deinem PC, z.B. mit [7-Zip](https://www.7-zip.org/). Darin findest Du zwei Ordner:

   ```text
   EXILED/
   SCP Secret Laboratory/
   ```

   > [!NOTE]
   > Mit 7-Zip entpackst Du die Datei unter Umständen in zwei Schritten: zuerst von `.tar.gz` zu `.tar` und danach die `.tar`-Datei.

## EXILED hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **EXILED-Ordner hochladen**\
   Lade den kompletten Ordner `EXILED` in folgendes Verzeichnis hoch:

   ```text
   /.config/
   ```

   Danach liegen die EXILED-Plugins unter `/.config/EXILED/Plugins/`.

4. **Exiled Loader hochladen**\
   Lade die Datei `Exiled.Loader.dll` aus dem Ordner `SCP Secret Laboratory/LabAPI/plugins/global/` des Archivs in folgendes Verzeichnis hoch:

   ```text
   /.config/SCP Secret Laboratory/LabAPI/plugins/global/
   ```

5. **Abhängigkeiten hochladen**\
   Lade alle Dateien aus dem Ordner `SCP Secret Laboratory/LabAPI/dependencies/global/` des Archivs in folgendes Verzeichnis hoch:

   ```text
   /.config/SCP Secret Laboratory/LabAPI/dependencies/global/
   ```

   Das sind `Exiled.API.dll`, `Mono.Posix.dll` und `SemanticVersioning.dll`.

   > [!IMPORTANT]
   > Ersetze nicht den kompletten Ordner `/.config/SCP Secret Laboratory/` auf Deinem Server. Darin liegen auch die Konfigurationsdateien Deines Servers. Lade nur die einzelnen Dateien in die genannten Unterordner hoch.

6. **Server starten**\
   Starte Deinen Server über die Verwaltung. EXILED wird jetzt über LabAPI geladen.

> [!TIP]
> Fehlt einer der Ordner `plugins/global/` oder `dependencies/global/`, lege ihn selbst an. Die Namen müssen genau so geschrieben sein, da der Server unter Linux zwischen Groß- und Kleinschreibung unterscheidet.

## Installation prüfen

Öffne nach dem Start die Konsole in der Verwaltung Deines Servers. Beim Start meldet EXILED dort, welche Plugins es lädt. Nach dem ersten erfolgreichen Start legt EXILED außerdem den Ordner `/.config/EXILED/Configs/` mit seinen Konfigurationsdateien an.

Erscheinen Fehler oder lädt EXILED nicht, hilft Dir die Anleitung [Plugins laden nicht](/tutorials/gameserver/scp-secret-laboratory/plugins-not-loading) weiter.

> [!WARNING]
> Die EXILED-Version muss zur Spielversion Deines Servers passen. Nach einem Spiel-Update kann EXILED vorübergehend inkompatibel sein und lädt dann keine Plugins, bis eine passende EXILED-Version erscheint.

## EXILED aktualisieren

Standardmäßig prüft EXILED bei jedem Serverstart selbst, ob es eine neue Version gibt, und installiert sie automatisch. Ist Deine Version aktuell, steht in der Konsole `No new versions found, you're using the most recent version of Exiled!`.

Möchtest Du EXILED von Hand aktualisieren, lade die neue `Exiled.tar.gz` herunter und wiederhole die Schritte unter [EXILED hochladen](#exiled-hochladen). Überschreibe dabei die vorhandenen Dateien. Deine Plugins und Konfigurationen in `/.config/EXILED/Plugins/` und `/.config/EXILED/Configs/` bleiben erhalten, solange Du den Ordner `EXILED` auf dem Server nicht vorher löschst.

## Plugins installieren

EXILED allein verändert am Spiel fast nichts. Wie Du Plugins hinzufügst, erfährst Du in der Anleitung [EXILED Plugins installieren](/tutorials/gameserver/scp-secret-laboratory/install-exiled-plugins).
