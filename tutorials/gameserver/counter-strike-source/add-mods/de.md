---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem Counter-Strike Source Server hinzu"
description: "Mods und Plugins auf einem Counter-Strike Source Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["counter-strike-source"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 3
related: ["gameserver/counter-strike-source/add-admin", "gameserver/counter-strike-source/create-backup", "gameserver/counter-strike-source/join-server", "gameserver/counter-strike-source/kick-ban-players"]
---

Plugins laufen auf einem Counter-Strike Source Server über **Metamod:Source** und **SourceMod**. Du benötigst **beides**: Metamod:Source klinkt sich in die Source Engine ein, SourceMod stellt darauf aufbauend die Plugin-Umgebung und die Adminfunktionen bereit.

> [!IMPORTANT]
> Dein Server läuft unter Linux. Lade deshalb bei Metamod:Source und SourceMod immer das **Linux-Paket** (`.tar.gz`) herunter – das `.zip`-Paket ist die Windows-Variante und funktioniert nicht.

> [!NOTE]
> Deine Mitspieler müssen nichts installieren. Plugins werden ausschließlich serverseitig ausgeführt, es sind keine Downloads auf Spielerseite nötig.

## Metamod:Source installieren

1. **Metamod:Source herunterladen**\
   Lade die aktuelle stabile Version von [Metamod:Source](https://www.metamodsource.net/downloads.php?branch=stable) (aktuell die Reihe 1.12) als **Linux**-Paket (`.tar.gz`) herunter.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Dateien hochladen**\
   Entpacke das Archiv und lade den enthaltenen `addons`-Ordner in folgendes Verzeichnis hoch:

   ```text
   /cstrike/
   ```

   Danach existiert der Ordner `/cstrike/addons/metamod/`.

5. **Server starten**\
   Starte Deinen Server und prüfe in der Serverkonsole mit `meta version`, ob Metamod:Source geladen wurde.

> [!NOTE]
> Eine eigene `metamod.vdf` musst Du nicht anlegen – seit Metamod:Source 1.10.0 liegt die passende Datei dem Paket bereits bei.

## SourceMod installieren

1. **SourceMod herunterladen**\
   Lade die aktuelle stabile Version von [SourceMod](https://www.sourcemod.net/downloads.php) (aktuell die Reihe 1.12) als **Linux**-Paket (`.tar.gz`) herunter.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Dateien hochladen**\
   Entpacke das Archiv und lade die enthaltenen Ordner `addons` und `cfg` per [SFTP](/tutorials/gameserver/establish-sftp-connection) in folgendes Verzeichnis hoch:

   ```text
   /cstrike/
   ```

   Vorhandene Ordner werden dabei ergänzt, nicht ersetzt. Danach existiert der Ordner `/cstrike/addons/sourcemod/`.

4. **Server starten**\
   Starte Deinen Server und prüfe in der Serverkonsole mit `sm version`, ob SourceMod geladen wurde.

## Plugins installieren

1. **Plugin herunterladen**\
   Lade das gewünschte Plugin herunter. Fertige Plugins liegen als `.smx`-Datei vor.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Plugin hochladen**\
   Lade die `.smx`-Datei per [SFTP](/tutorials/gameserver/establish-sftp-connection) in folgendes Verzeichnis hoch:

   ```text
   /cstrike/addons/sourcemod/plugins/
   ```

4. **Server starten**\
   Starte Deinen Server und prüfe mit `sm plugins list`, ob das Plugin geladen wurde.

## Eigene Maps hinzufügen

1. **Map herunterladen**\
   Lade die gewünschte Map herunter. Maps liegen als `.bsp`-Datei vor, teilweise zusammen mit weiteren Dateien wie Sounds oder Modellen.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Map hochladen**\
   Lade die `.bsp`-Datei per [SFTP](/tutorials/gameserver/establish-sftp-connection) in folgendes Verzeichnis hoch:

   ```text
   /cstrike/maps/
   ```

4. **Server starten**\
   Starte Deinen Server. Mit `changelevel <Mapname>` in der Serverkonsole wechselst Du auf die neue Map.

> [!WARNING]
> Eigene Maps liegen nur auf dem Server. Deine Mitspieler benötigen die Map ebenfalls, sonst können sie nicht beitreten. Damit sie automatisch heruntergeladen wird, richtest Du FastDL ein.

## FastDL einrichten

Über FastDL laden Deine Mitspieler eigene Maps und Zusatzdateien beim Verbinden automatisch von einem Webspace herunter, statt sie manuell installieren zu müssen.

1. **Dateien auf den Webspace legen**\
   Lege auf Deinem Webspace einen Ordner an und bilde darin die Ordnerstruktur des Servers nach, zum Beispiel `maps/`, `sound/` und `models/`. Kopiere die benötigten Dateien in die passenden Ordner.

2. **Dateien komprimieren**\
   Komprimiere die Dateien auf dem Webspace im `.bz2`-Format. Aus `de_beispiel.bsp` wird so `de_beispiel.bsp.bz2`.

3. **Download-Adresse eintragen**\
   Öffne per [SFTP](/tutorials/gameserver/establish-sftp-connection) folgende Datei und trage die Adresse Deines FastDL-Ordners ein:

   ```text
   /cstrike/cfg/server.cfg
   ```

   ```text
   sv_downloadurl "https://deine-domain.de/fastdl/"
   ```

4. **Server starten**\
   Speichere die Datei und starte Deinen Server neu.

> [!NOTE]
> Die Dateien müssen auf dem Server **und** auf dem Webspace liegen. Der Server lädt die Map selbst aus `/cstrike/maps/`, Deine Mitspieler holen sie sich über die FastDL-Adresse.

## Ordnerstruktur im Überblick

```text
/cstrike/addons/metamod/
/cstrike/addons/sourcemod/
/cstrike/addons/sourcemod/plugins/     <- .smx-Plugindateien
/cstrike/addons/sourcemod/configs/     <- Konfigurationen, z.B. Adminlisten
/cstrike/maps/                         <- Maps
/cstrike/cfg/                          <- server.cfg und weitere Konfigurationen
```

## Installation prüfen

Gib die folgenden Befehle in der Serverkonsole ein:

| Befehl | Beschreibung |
|--------|-------------|
| `meta version` | Version von Metamod:Source anzeigen |
| `meta list` | Von Metamod geladene Erweiterungen anzeigen |
| `sm version` | Version von SourceMod anzeigen |
| `sm plugins list` | Geladene SourceMod-Plugins anzeigen |

> [!WARNING]
> Antwortet der Server auf einen dieser Befehle mit `Unknown command`, wurde die jeweilige Komponente nicht geladen. Prüfe in dem Fall, ob Du das Linux-Paket verwendet hast und ob die Ordner tatsächlich unter `/cstrike/addons/` liegen.

> [!WARNING]
> Stoppe Deinen Server immer, bevor Du Dateien hochlädst. Nach einem Spielupdate können Metamod:Source, SourceMod und einzelne Plugins inkompatibel sein – prüfe dann, ob Aktualisierungen verfügbar sind.

> [!TIP]
> Wie Du Dir mit SourceMod anschließend Adminrechte gibst, erfährst Du unter [Admin hinzufügen](/tutorials/gameserver/counter-strike-source/add-admin).
