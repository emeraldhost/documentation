---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem No More Room in Hell Server hinzu"
description: "Mods und Plugins auf einem No More Room in Hell Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["no-more-room-in-hell"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 3
related: ["gameserver/no-more-room-in-hell/add-admin", "gameserver/no-more-room-in-hell/create-backup", "gameserver/no-more-room-in-hell/join-server", "gameserver/no-more-room-in-hell/kick-ban-players"]
---

Plugins laufen auf einem No More Room in Hell Server über **Metamod:Source** und **SourceMod**. Du benötigst **beides**: Metamod:Source klinkt sich in die Source Engine ein, SourceMod stellt darauf aufbauend die Plugin-Umgebung und die Adminfunktionen bereit. SourceMod unterstützt No More Room in Hell offiziell und bringt die passenden Spieldaten für den Linux-Server bereits mit.

> [!IMPORTANT]
> Dein Server läuft unter Linux. Lade deshalb bei Metamod:Source und SourceMod immer das **Linux-Paket** (`.tar.gz`) herunter – das `.zip`-Paket ist die Windows-Variante und funktioniert nicht.

> [!NOTE]
> Deine Mitspieler müssen nichts installieren. Plugins werden ausschließlich serverseitig ausgeführt, es sind keine Downloads auf Spielerseite nötig.

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
   /nmrih/
   ```

   Danach existiert der Ordner `/nmrih/addons/metamod/`.

5. **Server starten**\
   Starte Deinen Server und prüfe in der Serverkonsole mit `meta version`, ob Metamod:Source geladen wurde.

> [!NOTE]
> Eine eigene `metamod.vdf` musst Du nicht anlegen – die passende Datei liegt dem Paket seit Metamod:Source 1.10 bereits bei. Der VDF-Generator der Metamod-Dokumentation ist nur für Left 4 Dead 1, für Drittanbieter-Mods auf Source SDK Base und für nicht-englische Listen-Server gedacht; No More Room in Hell ist dort nicht aufgeführt.

> [!WARNING]
> **Metamod wird nicht geladen?**
>
> Antwortet der Server auf `meta version` mit `Unknown command`, kannst Du Metamod:Source alternativ über die `gameinfo.txt` einbinden. Öffne dazu die Datei `/nmrih/gameinfo.txt` und trage im Block `SearchPaths` als erste Zeile Folgendes ein:
>
> ```text
> GameBin	|gameinfo_path|addons/metamod/bin
> ```
>
> Starte den Server anschließend neu.

## SourceMod installieren

1. **SourceMod herunterladen**\
   Lade die aktuelle stabile Version von [SourceMod](https://www.sourcemod.net/downloads.php) als **Linux**-Paket (`.tar.gz`) herunter.

   > [!NOTE]
   > Die Spielunterstützung für No More Room in Hell wurde zuletzt mit **SourceMod 1.11** aktualisiert. Nutze deshalb mindestens diese Version, besser die aktuelle stabile Reihe.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Dateien hochladen**\
   Entpacke das Archiv und lade die enthaltenen Ordner `addons` und `cfg` per [SFTP](/tutorials/gameserver/establish-sftp-connection) in folgendes Verzeichnis hoch:

   ```text
   /nmrih/
   ```

   Vorhandene Ordner werden dabei ergänzt, nicht ersetzt. Danach existiert der Ordner `/nmrih/addons/sourcemod/`.

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
   /nmrih/addons/sourcemod/plugins/
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
   /nmrih/maps/
   ```

4. **Map starten**\
   Starte Deinen Server und wechsle in der Serverkonsole mit `changelevel <Mapname>` auf die neue Karte. Der Mapname wird ohne die Endung `.bsp` angegeben.

> [!NOTE]
> **Steam Workshop**
>
> Für No More Room in Hell gibt es einen [Steam Workshop](https://steamcommunity.com/app/224260/workshop/) mit Objective- und Survival-Maps, Skins, Sounds und Mutatoren. Wie Workshop-Inhalte serverseitig eingebunden werden, ist offiziell nicht dokumentiert – lade Karten deshalb als `.bsp`-Datei in den Ordner `/nmrih/maps/` hoch.

## Ordnerstruktur im Überblick

```text
/nmrih/addons/metamod/
/nmrih/addons/sourcemod/
/nmrih/addons/sourcemod/plugins/     <- .smx-Plugindateien
/nmrih/addons/sourcemod/configs/     <- Konfigurationen, z.B. Adminlisten
/nmrih/cfg/                          <- server.cfg und weitere Konfigurationen
/nmrih/maps/                         <- .bsp-Kartendateien
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
> Antwortet der Server auf einen dieser Befehle mit `Unknown command`, wurde die jeweilige Komponente nicht geladen. Prüfe in dem Fall, ob Du das Linux-Paket verwendet hast und ob die Ordner tatsächlich unter `/nmrih/addons/` liegen.

> [!WARNING]
> Stoppe Deinen Server immer, bevor Du Dateien hochlädst. Nach einem Spielupdate können Metamod:Source, SourceMod und einzelne Plugins inkompatibel sein – prüfe dann, ob Aktualisierungen verfügbar sind.

> [!TIP]
> Wie Du Dir mit SourceMod anschließend Adminrechte gibst, erfährst Du unter [Admin hinzufügen](/tutorials/gameserver/no-more-room-in-hell/add-admin).
