---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem Garry's Mod Server hinzu"
description: "Mods und Addons auf einem Garry's Mod Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["garrys-mod"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 3
related: ["gameserver/garrys-mod/add-admin", "gameserver/garrys-mod/create-backup", "gameserver/garrys-mod/join-server", "gameserver/garrys-mod/kick-ban-players"]
---

Addons kannst Du auf zwei Wegen auf Deinen Server bringen: über eine **Steam Workshop Collection**, die der Server beim Start automatisch herunterlädt, oder indem Du die Addon-Ordner **manuell per SFTP** hochlädst.

> [!WARNING]
> Stoppe Deinen Server, bevor Du Dateien hochlädst. Nach einem Spielupdate können Addons inkompatibel sein und Fehler oder Abstürze verursachen.

## Workshop Collection einrichten

Der Server kann genau **eine** Workshop Collection laden. Alle Addons, die Du auf dem Server nutzen möchtest, gehören also in dieselbe Sammlung.

1. **Collection erstellen**\
   Erstelle im [Steam Workshop für Garry's Mod](https://steamcommunity.com/app/4000/workshop/) eine eigene Collection und füge die gewünschten Addons hinzu.

   > [!WARNING]
   > Die Collection muss **öffentlich** oder **nicht gelistet** sein. Auf private Collections kann der Server nicht zugreifen.

2. **Collection-ID kopieren**\
   Die Collection-ID findest Du in der URL der Collection. Kopiere die Zahl nach `?id=`.

   > [!TIP]
   > **Beispiel**
   >
   > In der URL `https://steamcommunity.com/sharedfiles/filedetails/?id=157384458` ist die Collection-ID `157384458`.

3. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

4. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

5. **Collection-ID eintragen**\
   Trage die Collection-ID im Feld **Workshop ID** ein. Der Server startet damit mit dem Parameter:

   ```text
   +host_workshop_collection 157384458
   ```

6. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu. Die Addons der Collection werden beim Start heruntergeladen und geladen.

> [!NOTE]
> Standardmäßig prüft der Server bei jedem Start, ob es Aktualisierungen für die Addons gibt. Mit der ConVar `host_workshop_autoupdate 0` kannst Du dieses automatische Aktualisieren deaktivieren.

## Addons manuell hochladen

Addons, die nicht aus dem Workshop stammen (sogenannte Legacy-Addons), lädst Du als entpackten Ordner auf den Server.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Addon vorbereiten**\
   Liegt das Addon als `.gma`-Datei vor, musst Du sie zuerst entpacken. Nutze dafür `gmad.exe` aus Deiner lokalen Spielinstallation unter `…\GarrysMod\bin\`. Auf den Server kommt anschließend der **entpackte Ordner**, nicht die `.gma`-Datei.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Addon hochladen**\
   Lade den Addon-Ordner in folgendes Verzeichnis hoch:

   ```text
   /garrysmod/addons/
   ```

   Jedes Addon liegt dabei in einem eigenen Unterordner, z.B. `/garrysmod/addons/mein-addon/` mit den Unterordnern `lua/`, `materials/`, `models/` oder `sound/`.

5. **Server starten**\
   Starte Deinen Server.

> [!IMPORTANT]
> Der Server läuft unter Linux und Dateipfade sind dort **groß- und kleinschreibungsabhängig**. `Mein-Addon`, `mein-addon` und `mein_addon` sind drei verschiedene Ordner. Schreibe Addon-Ordner deshalb konsequent klein und verzichte auf Leer- und Sonderzeichen.

## Gamemode installieren

Gamemodes werden nicht im `addons`-Ordner abgelegt, sondern in einem eigenen Verzeichnis.

1. **Gamemode hochladen**\
   Lade den Gamemode-Ordner per [SFTP](/tutorials/gameserver/establish-sftp-connection) in folgendes Verzeichnis hoch:

   ```text
   /garrysmod/gamemodes/
   ```

2. **Gamemode auswählen**\
   Trage in den **Einstellungen** Deines Servers im Feld **Gamemode** den Ordnernamen des Gamemodes ein. Der Server startet damit mit dem Parameter `+gamemode <ordnername>`.

3. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu.

## Spieler zum Download der Addons zwingen

Spieler laden die Workshop-Addons Deines Servers **nicht automatisch** herunter. Automatisch übernommen werden nur die aktuelle Map und der Gamemode, sofern sie aus der Collection Deines Servers stammen. Alle übrigen Addons musst Du einzeln erzwingen.

1. **Datei öffnen**\
   Öffne per [SFTP](/tutorials/gameserver/establish-sftp-connection) folgende Datei:

   ```text
   /garrysmod/lua/autorun/server/workshop.lua
   ```

2. **Addons eintragen**\
   Die Datei enthält bereits eine leere Zeile `resource.AddWorkshop( "" )`. Ersetze sie und trage pro Addon eine Zeile mit der jeweiligen **Addon-ID** ein – nicht die Collection-ID:

   ```lua
   resource.AddWorkshop( "104606562" )
   resource.AddWorkshop( "1234567890" )
   ```

3. **Server neu starten**\
   Speichere die Datei und starte Deinen Server neu.

> [!NOTE]
> Inhalte, die nicht aus dem Steam Workshop stammen (z.B. eigene Modelle oder Sounds), werden darüber nicht verteilt. Dafür benötigst Du FastDL über die ConVar `sv_downloadurl` in der Datei `/garrysmod/cfg/server.cfg`.

## Fremdspiel-Inhalte einbinden

Inhalte aus anderen Source-Spielen (z.B. Counter-Strike: Source) bindest Du über folgende Datei ein:

```text
/garrysmod/cfg/mount.cfg
```
