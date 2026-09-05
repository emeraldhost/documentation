---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem IOSoccer Server hinzu"
description: "Mods und Plugins auf einem IOSoccer Server hinzufügen"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["iosoccer"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 3
related: ["gameserver/iosoccer/add-admin", "gameserver/iosoccer/create-backup", "gameserver/iosoccer/join-server", "gameserver/iosoccer/kick-ban-players"]
---

Plugins laufen auf einem IOSoccer Server über **Metamod:Source** und **SourceMod**. Du benötigst **beides**: Metamod:Source klinkt sich in die Source Engine ein, SourceMod stellt darauf aufbauend die Plugin-Umgebung und die Adminfunktionen bereit. SourceMod unterstützt IOSoccer offiziell und bringt die passenden Spieldaten für den Linux-Server bereits mit.

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
   /iosoccer/
   ```

   Danach existiert der Ordner `/iosoccer/addons/metamod/`.

5. **Server starten**\
   Starte Deinen Server und prüfe in der Serverkonsole mit `meta version`, ob Metamod:Source geladen wurde.

> [!WARNING]
> **Metamod wird nicht geladen?**
>
> Antwortet der Server auf `meta version` mit `Unknown command`, kannst Du Metamod:Source alternativ über die `gameinfo.txt` einbinden. Öffne dazu die Datei `/iosoccer/gameinfo.txt` und trage im Block `SearchPaths` als erste Zeile Folgendes ein:
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
   > SourceMod bringt eigene Spieldaten für IOSoccer mit. Nutze immer die aktuelle stabile Reihe – sie enthält die aktuellsten Spieldaten für das Spiel.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Dateien hochladen**\
   Entpacke das Archiv und lade die enthaltenen Ordner `addons` und `cfg` per [SFTP](/tutorials/gameserver/establish-sftp-connection) in folgendes Verzeichnis hoch:

   ```text
   /iosoccer/
   ```

   Vorhandene Ordner werden dabei ergänzt, nicht ersetzt. Danach existiert der Ordner `/iosoccer/addons/sourcemod/`.

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
   /iosoccer/addons/sourcemod/plugins/
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
   /iosoccer/maps/
   ```

4. **Map starten**\
   Starte Deinen Server und wechsle in der Serverkonsole mit `changelevel <Mapname>` auf die neue Karte. Der Mapname wird ohne die Endung `.bsp` angegeben. Der Befehl `maps *` listet Dir alle vorhandenen Karten auf.

> [!NOTE]
> Einen Steam Workshop gibt es für IOSoccer nicht. Eigene Karten lädst Du deshalb immer als `.bsp`-Datei in den Ordner `/iosoccer/maps/` hoch.

## Kartenrotation anpassen

Die Kartenrotation steht in einer Textdatei mit einem Kartennamen pro Zeile, jeweils ohne die Endung `.bsp`:

```text
/iosoccer/mapcycle.txt
```

Welche Datei verwendet wird, legst Du in der `/iosoccer/cfg/server.cfg` fest:

```text
mapcyclefile "mapcycle.txt"
```

> [!NOTE]
> Die Mapcycle-Datei liegt direkt im Spielordner `/iosoccer/` und **nicht** im Unterordner `cfg`. Der Server sucht sie ausschließlich dort – eine Datei unter `/iosoccer/cfg/` wird nicht gelesen.

> [!TIP]
> Trage eigene Karten zusätzlich in die verwendete Mapcycle-Datei ein, damit sie auch in der regulären Rotation auftauchen und nicht nur per `changelevel` erreichbar sind.

> [!NOTE]
> Mit welcher Karte Dein Server startet, legt das Feld **Map** in der **Verwaltung** fest – dieser Wert wird bei jedem Start übergeben. Die Mapcycle-Datei bestimmt nur, welche Karte danach als Nächstes an der Reihe ist.

## Eigene Karten an Spieler ausliefern

Spieler, die eine eigene Karte nicht besitzen, können den Server nicht betreten. Über einen Download-Server (FastDL) laden sie die Dateien beim Verbinden automatisch herunter. Trage dafür in der `/iosoccer/cfg/server.cfg` folgende Zeilen ein:

```text
sv_allowdownload 1
sv_downloadurl "https://deine-domain.de/fastdl/"
```

> [!NOTE]
> Der Webspeicher hinter `sv_downloadurl` ist nicht Teil des Gameservers – Du benötigst dafür einen eigenen Webserver oder Webspace, auf dem die Kartendateien in derselben Ordnerstruktur liegen wie auf dem Server. Ohne FastDL musst Du Deine Karten stattdessen an Deine Mitspieler verteilen.

## Trikots und Teamnamen festlegen

Die Mannschaften eines Matches stellst Du über Servereinstellungen ein – dafür brauchst Du keine Plugins:

| Einstellung | Bedeutung |
|-------------|-----------|
| `mp_teamkits <Heim> <Auswärts>` | Legt die Trikots beider Mannschaften fest. Die erste Angabe gilt für das Heimteam, die zweite für das Auswärtsteam. Statt einer Nummer kannst Du auch nach einem Teamnamen suchen, zum Beispiel `mp_teamkits barcelona`. |
| `mp_teamnames` | Überschreibt die Teamnamen, zum Beispiel `mp_teamnames "FCB:FC Barcelona,RMA:Real Madrid"` |

## Clientseitige Mods

> [!WARNING]
> Die bekannten IOSoccer-Mods aus der Community – eigene Bälle, Tornetze, Torwarthandschuhe, Schuhe, Skyboxes oder HUD- und Chat-Anpassungen – sind **rein clientseitig**. Sie werden von jedem Spieler selbst in sein lokales Steam-Spielverzeichnis installiert und lassen sich nicht über den Server verteilen. Auf dem Server bringen sie nichts.

## Ordnerstruktur im Überblick

```text
/iosoccer/addons/metamod/
/iosoccer/addons/sourcemod/
/iosoccer/addons/sourcemod/plugins/     <- .smx-Plugindateien
/iosoccer/addons/sourcemod/configs/     <- Konfigurationen, z.B. Adminlisten
/iosoccer/cfg/                          <- server.cfg und autoexec.cfg
/iosoccer/maps/                         <- .bsp-Kartendateien
/iosoccer/mapcycle.txt                  <- Kartenrotation
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
> Antwortet der Server auf einen dieser Befehle mit `Unknown command`, wurde die jeweilige Komponente nicht geladen. Prüfe in dem Fall, ob Du das Linux-Paket verwendet hast und ob die Ordner tatsächlich unter `/iosoccer/addons/` liegen.

> [!WARNING]
> Stoppe Deinen Server immer, bevor Du Dateien hochlädst. Nach einem Spielupdate können Metamod:Source, SourceMod und einzelne Plugins inkompatibel sein – prüfe dann, ob Aktualisierungen verfügbar sind.

> [!TIP]
> Wie Du Dir mit SourceMod anschließend Adminrechte gibst, erfährst Du unter [Admin hinzufügen](/tutorials/gameserver/iosoccer/add-admin).
