---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem Fistful of Frags Server hinzu"
description: "Mods und Plugins auf einem Fistful of Frags Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["fistful-of-frags"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 3
related: ["gameserver/fistful-of-frags/add-admin", "gameserver/fistful-of-frags/create-backup", "gameserver/fistful-of-frags/join-server", "gameserver/fistful-of-frags/kick-ban-players"]
---

Plugins laufen auf einem Fistful of Frags Server über **Metamod:Source** und **SourceMod**. Du benötigst **beides**: Metamod:Source klinkt sich in die Source Engine ein, SourceMod stellt darauf aufbauend die Plugin-Umgebung und die Adminfunktionen bereit. SourceMod unterstützt Fistful of Frags offiziell und bringt die passenden Spieldaten bereits mit.

> [!IMPORTANT]
> Dein Server läuft unter Linux. Lade deshalb bei Metamod:Source und SourceMod immer das **Linux-Paket** (`.tar.gz`) herunter – das `.zip`-Paket ist die Windows-Variante und funktioniert nicht.

> [!NOTE]
> Deine Mitspieler müssen für Plugins nichts installieren. Plugins werden ausschließlich serverseitig ausgeführt. Nur bei eigenen Karten brauchen Deine Mitspieler die Dateien ebenfalls.

## Metamod:Source installieren

1. **Metamod:Source herunterladen**\
   Lade die aktuelle stabile Version von [Metamod:Source](https://www.metamodsource.net/downloads.php?branch=stable) als **Linux**-Paket (`.tar.gz`) herunter.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Dateien hochladen**\
   Entpacke das Archiv und lade den enthaltenen `addons`-Ordner in folgendes Verzeichnis hoch:

   ```text
   /fof/
   ```

   Danach existiert der Ordner `/fof/addons/metamod/`.

5. **Server starten**\
   Starte Deinen Server und prüfe in der Serverkonsole mit `meta version`, ob Metamod:Source geladen wurde.

> [!NOTE]
> Eine eigene `metamod.vdf` musst Du nicht anlegen – die passende Datei liegt dem Paket bereits bei und landet beim Hochladen automatisch unter `/fof/addons/metamod.vdf`. Antwortet der Server auf `meta version` mit `Unknown command`, prüfe zuerst, ob diese Datei und der Ordner `/fof/addons/metamod/` wirklich vorhanden sind und ob Du das Linux-Paket verwendet hast.

## SourceMod installieren

1. **SourceMod herunterladen**\
   Lade die aktuelle stabile Version von [SourceMod](https://www.sourcemod.net/downloads.php) als **Linux**-Paket (`.tar.gz`) herunter.

   > [!NOTE]
   > SourceMod bringt eigene Spieldaten für Fistful of Frags mit. Nutze immer die aktuelle stabile Reihe – sie enthält die aktuellsten Spieldaten für das Spiel.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Dateien hochladen**\
   Entpacke das Archiv und lade die enthaltenen Ordner `addons` und `cfg` per [SFTP](/tutorials/gameserver/establish-sftp-connection) in folgendes Verzeichnis hoch:

   ```text
   /fof/
   ```

   Vorhandene Ordner werden dabei ergänzt, nicht ersetzt. Danach existiert der Ordner `/fof/addons/sourcemod/`.

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
   /fof/addons/sourcemod/plugins/
   ```

4. **Server starten**\
   Starte Deinen Server und prüfe mit `sm plugins list`, ob das Plugin geladen wurde.

## Eigene Maps hinzufügen

1. **Map herunterladen**\
   Custom Maps liegen als `.bsp`-Datei vor.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Map hochladen**\
   Lade die `.bsp`-Datei per [SFTP](/tutorials/gameserver/establish-sftp-connection) in folgendes Verzeichnis hoch:

   ```text
   /fof/maps/
   ```

4. **Map starten**\
   Starte Deinen Server und wechsle in der Serverkonsole mit `changelevel <Mapname>` auf die neue Karte. Der Mapname wird ohne die Endung `.bsp` angegeben.

> [!NOTE]
> **Steam Workshop**
>
> Der [Steam Workshop von Fistful of Frags](https://steamcommunity.com/app/265630/workshop/) enthält Waffen- und Charakter-Skins, Modelle, Sounds, HUD-Anpassungen sowie Karten. Skins und Sounds sind **rein clientseitig** und werden von jedem Spieler selbst abonniert – auf dem Server bringen sie nichts. Für Workshop-Karten gibt es keine serverseitige Anbindung: Lade die Karte als `.bsp`-Datei in den Ordner `/fof/maps/` hoch.

## Kartenrotation anpassen

Die Mapcycle-Dateien liegen **nicht** im `cfg`-Ordner, sondern direkt im Spielordner:

```text
/fof/mapcycle.txt         <- Standardrotation
/fof/mapcycle_12.txt      <- Rotation für kleine Server
/fof/mapcycle_32.txt      <- Rotation für große Server
/fof/mapcycle_tp.txt      <- Teamplay
```

In jeder Datei steht ein Kartenname pro Zeile, jeweils ohne die Endung `.bsp`. Welche Datei verwendet wird, legst Du in der `/fof/cfg/server.cfg` fest:

```text
mapcyclefile "mapcycle.txt"
```

> [!NOTE]
> Zusätzlich legen die Einstellungen `fof_sv_mapcycle_dm`, `fof_sv_mapcycle_dm_12`, `fof_sv_mapcycle_dm_32` und `fof_sv_mapcycle_tp` fest, welche der vier Dateien zu welcher Slotgröße beziehungsweise zu welchem Modus gehört. Eine eigene Rotation speicherst Du als zusätzliche `.txt`-Datei im selben Ordner und trägst den Dateinamen bei `mapcyclefile` ein.

> [!TIP]
> Trage eigene Karten zusätzlich in die verwendete Mapcycle-Datei ein, damit sie auch in der regulären Rotation auftauchen und nicht nur per `changelevel` erreichbar sind.

## Eigene Karten an Spieler ausliefern

Spieler, die eine eigene Karte nicht besitzen, können den Server nicht betreten. Über einen Download-Server (FastDL) laden sie die Dateien beim Verbinden automatisch herunter. Trage dafür in der `/fof/cfg/server.cfg` folgende Zeilen ein:

```text
sv_allowdownload 1
sv_downloadurl "https://deine-domain.de/fastdl/"
```

> [!NOTE]
> Der Webspeicher hinter `sv_downloadurl` ist nicht Teil des Gameservers – Du benötigst dafür einen eigenen Webserver oder Webspace, auf dem die Kartendateien in derselben Ordnerstruktur liegen wie auf dem Server. Ohne FastDL musst Du Deine Karten stattdessen an Deine Mitspieler verteilen.

## Ordnerstruktur im Überblick

```text
/fof/addons/metamod/
/fof/addons/sourcemod/
/fof/addons/sourcemod/plugins/     <- .smx-Plugindateien
/fof/addons/sourcemod/configs/     <- Konfigurationen, z.B. Adminlisten
/fof/cfg/                          <- server.cfg und weitere Konfigurationen
/fof/maps/                         <- .bsp-Kartendateien
/fof/mapcycle.txt                  <- Kartenrotation
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
> Antwortet der Server auf einen dieser Befehle mit `Unknown command`, wurde die jeweilige Komponente nicht geladen. Prüfe in dem Fall, ob Du das Linux-Paket verwendet hast und ob die Ordner tatsächlich unter `/fof/addons/` liegen.

> [!WARNING]
> Stoppe Deinen Server immer, bevor Du Dateien hochlädst. Nach einem Spielupdate können Metamod:Source, SourceMod und einzelne Plugins inkompatibel sein – prüfe dann, ob Aktualisierungen verfügbar sind.

> [!TIP]
> Wie Du Dir mit SourceMod anschließend Adminrechte gibst, erfährst Du unter [Admin hinzufügen](/tutorials/gameserver/fistful-of-frags/add-admin).
