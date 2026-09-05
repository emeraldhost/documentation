---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem Black Mesa Server hinzu"
description: "Mods und Plugins auf einem Black Mesa Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["black-mesa"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 3
related: ["gameserver/black-mesa/add-admin", "gameserver/black-mesa/create-backup", "gameserver/black-mesa/join-server", "gameserver/black-mesa/kick-ban-players"]
---

Plugins laufen auf einem Black Mesa Server über **Metamod:Source** und **SourceMod**. Du benötigst **beides**: Metamod:Source klinkt sich in die Source Engine ein, SourceMod stellt darauf aufbauend die Plugin-Umgebung und die Adminfunktionen bereit. Metamod:Source unterstützt Black Mesa seit Version 1.10.5 offiziell, SourceMod setzt darauf auf.

> [!IMPORTANT]
> Dein Server läuft unter Linux. Lade deshalb bei Metamod:Source und SourceMod immer das **Linux-Paket** (`.tar.gz`) herunter – das `.zip`-Paket ist die Windows-Variante und funktioniert nicht.

> [!NOTE]
> Deine Mitspieler müssen für Plugins nichts installieren. SourceMod-Plugins werden ausschließlich serverseitig ausgeführt. Nur bei eigenen Maps und Custom-Inhalten brauchen auch die Spieler die passenden Dateien.

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
   /bms/
   ```

   Danach existiert der Ordner `/bms/addons/metamod/`.

5. **Server starten**\
   Starte Deinen Server und prüfe in der Serverkonsole mit `meta version`, ob Metamod:Source geladen wurde.

> [!NOTE]
> Eine eigene `metamod.vdf` musst Du nicht anlegen – die passende Datei liegt dem Paket bereits bei. Laut Metamod-Dokumentation ist eine selbst erstellte VDF-Datei nur für Left 4 Dead 1 und Drittanbieter-Mods nötig.

## SourceMod installieren

1. **SourceMod herunterladen**\
   Lade die aktuelle stabile Version von [SourceMod](https://www.sourcemod.net/downloads.php?branch=stable) (aktuell die Reihe 1.12) als **Linux**-Paket (`.tar.gz`) herunter.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Dateien hochladen**\
   Entpacke das Archiv und lade die enthaltenen Ordner `addons` und `cfg` per [SFTP](/tutorials/gameserver/establish-sftp-connection) in folgendes Verzeichnis hoch:

   ```text
   /bms/
   ```

   Vorhandene Ordner werden dabei ergänzt, nicht ersetzt. Danach existiert der Ordner `/bms/addons/sourcemod/`.

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
   /bms/addons/sourcemod/plugins/
   ```

4. **Server starten**\
   Starte Deinen Server und prüfe mit `sm plugins list`, ob das Plugin geladen wurde.

## Ordnerstruktur im Überblick

```text
/bms/cfg/                                 <- server.cfg und weitere Konfigurationen
/bms/cfg/mapcycle.txt                     <- Reihenfolge der Maps
/bms/maps/                                <- Maps im BSP-Format
/bms/addonlist.txt                        <- Liste der aktiven VPK-Pakete
/bms/addons/                              <- VPK-Pakete und Erweiterungen
/bms/addons/workshop/                     <- VPK-Pakete aus dem Steam Workshop
/bms/addons/metamod/
/bms/addons/sourcemod/
/bms/addons/sourcemod/plugins/            <- .smx-Plugindateien
/bms/addons/sourcemod/configs/            <- Konfigurationen, z.B. Adminlisten
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
> Antwortet der Server auf einen dieser Befehle mit `Unknown command`, wurde die jeweilige Komponente nicht geladen. Prüfe in dem Fall, ob Du das Linux-Paket verwendet hast und ob die Ordner tatsächlich unter `/bms/addons/` liegen.

## Eigene Maps und Custom-Inhalte

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Maps im BSP-Format hochladen**\
   Maps, die als `.bsp`-Datei vorliegen, lädst Du per [SFTP](/tutorials/gameserver/establish-sftp-connection) in folgendes Verzeichnis hoch:

   ```text
   /bms/maps/
   ```

3. **Inhalte im VPK-Format hochladen**\
   Maps und Custom-Inhalte, die als `.vpk`-Paket vorliegen, gehören stattdessen in den Addons-Ordner. Pakete aus dem Steam Workshop legst Du im Unterordner `workshop` ab:

   ```text
   /bms/addons/
   /bms/addons/workshop/
   ```

4. **VPK-Pakete aktivieren**\
   Ein VPK-Paket wird erst geladen, wenn es in der Addon-Liste steht. Öffne dafür folgende Datei – existiert sie noch nicht, lege sie an:

   ```text
   /bms/addonlist.txt
   ```

   Trage die Pakete so ein (`1` = aktiv, `0` = inaktiv):

   ```text
   "AddonList"
   {
      "workshop\432070352.vpk"     "1"
      "workshop\432074065.vpk"     "1"
   }
   ```

5. **Map in den Ablauf aufnehmen**\
   Trage die Map in folgende Datei ein – eine Map pro Zeile, jeweils ohne Dateiendung:

   ```text
   /bms/cfg/mapcycle.txt
   ```

6. **Server starten**\
   Starte Deinen Server. Mit `changelevel <Mapname>` in der Serverkonsole wechselst Du direkt auf eine Map.

> [!NOTE]
> **Offizielle Deathmatch-Maps**
>
> Black Mesa bringt zehn offizielle Mehrspieler-Maps mit: `dm_bounce`, `dm_chopper`, `dm_crossfire`, `dm_gasworks`, `dm_lambdabunker`, `dm_power`, `dm_stack`, `dm_stalkyard`, `dm_subtransit` und `dm_undertow`.
>
> Welche Maps auf Deinem Server tatsächlich liegen, siehst Du im Ordner `/bms/maps/`. Deathmatch-Maps beginnen mit `dm_`, Kampagnen-Maps mit `bm_`.

> [!WARNING]
> Der Steam Workshop von Black Mesa ist **clientseitig**. Abonnierte Inhalte landen nur auf Deinem PC – für den Server musst Du die Dateien manuell nach `/bms/addons/workshop/` beziehungsweise `/bms/maps/` hochladen und in der `addonlist.txt` eintragen.

> [!IMPORTANT]
> Eigene Maps müssen auch bei Deinen Mitspielern vorliegen, sonst können sie nicht beitreten. Entweder alle Spieler laden die Map selbst herunter (zum Beispiel über den Workshop), oder Du stellst die Dateien über einen eigenen Download-Server (FastDL) bereit.

## Koop-Modus mit SourceCoop

Der Mehrspielermodus von Black Mesa ist ein reiner Deathmatch-Modus. Möchtest Du die Kampagne gemeinsam spielen, gibt es dafür das Community-Plugin [SourceCoop](https://github.com/ampreeT/SourceCoop).

1. **Voraussetzungen schaffen**\
   Metamod:Source und SourceMod müssen wie oben beschrieben installiert und funktionsfähig sein.

2. **SourceCoop herunterladen**\
   Lade die aktuelle Version des Plugins aus dem GitHub-Projekt herunter.

3. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

4. **Dateien hochladen**\
   Lade den Inhalt des Archivs (die Ordner `addons`, `materials` und `models`) per [SFTP](/tutorials/gameserver/establish-sftp-connection) entsprechend der enthaltenen Ordnerstruktur nach `/bms/` hoch. Die Plugindateien landen dabei in `/bms/addons/sourcemod/plugins/`, die Map-Konfigurationen (`.edt`-Dateien) in `/bms/addons/sourcemod/data/srccoop/`.

5. **Startmap eintragen**\
   Trage die erste Map der gewünschten Kampagne in `/bms/cfg/mapcycle.txt` ein, zum Beispiel `bm_c0a0a`.

6. **Server starten**\
   Starte Deinen Server und prüfe mit `sm plugins list`, ob SourceCoop geladen wurde.

> [!NOTE]
> SourceCoop ist ein Community-Projekt und kein offizieller Bestandteil von Black Mesa. Die genaue Ordnerstruktur, verfügbare Einstellungen und bekannte Einschränkungen findest Du in der Dokumentation des Projekts.

> [!WARNING]
> Stoppe Deinen Server immer, bevor Du Dateien hochlädst. Nach einem Spielupdate können Metamod:Source, SourceMod und einzelne Plugins inkompatibel sein – prüfe dann, ob Aktualisierungen verfügbar sind.

> [!TIP]
> Wie Du Dir mit SourceMod anschließend Adminrechte gibst, erfährst Du unter [Admin hinzufügen](/tutorials/gameserver/black-mesa/add-admin).
