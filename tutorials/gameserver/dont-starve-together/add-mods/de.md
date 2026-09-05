---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem Don’t Starve Together Server hinzu"
description: "Mods auf einem Don’t Starve Together Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["dont-starve-together"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 3
related: ["gameserver/dont-starve-together/add-admin", "gameserver/dont-starve-together/add-savegame", "gameserver/dont-starve-together/create-backup", "gameserver/dont-starve-together/download-savegame"]
---

Don’t Starve Together bringt ein vollwertiges Mod-System für Server mit. Du musst die Mods nicht selbst hochladen – der Server lädt sie eigenständig aus dem Steam Workshop herunter. Dafür sind zwei Dateien zuständig:

- `dedicated_server_mods_setup.lua` legt fest, **welche** Mods heruntergeladen werden.
- `modoverrides.lua` legt fest, **welche** Mods in der Welt aktiv sind – und zwar pro Shard.

> [!WARNING]
> Stoppe Deinen Server, bevor Du Mods hinzufügst. Nach einem Spielupdate können Mods inkompatibel sein und Abstürze verursachen.

## Workshop-ID herausfinden

1. **Mod im Steam Workshop öffnen**\
   Öffne den [Steam Workshop für Don’t Starve Together](https://steamcommunity.com/app/322330/workshop/) und suche die gewünschte Mod.

2. **ID aus der Adresse ablesen**\
   Die Workshop-ID ist die Zahl am Ende der URL. Bei `https://steamcommunity.com/sharedfiles/filedetails/?id=350811795` lautet die ID also `350811795`.

## Mods zum Download eintragen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server oder nutze den Datei-Browser in der Verwaltung.

3. **Datei öffnen**\
   Öffne im Hauptverzeichnis Deines Servers die folgende Datei:

   ```text
   mods/dedicated_server_mods_setup.lua
   ```

4. **Mods eintragen**\
   Trage pro Mod eine Zeile mit der Workshop-ID ein:

   ```lua
   ServerModSetup("350811795")
   ServerModSetup("2902364746")
   ```

5. **Kollektionen eintragen**\
   Möchtest Du eine komplette Workshop-Kollektion laden, nutzt Du stattdessen diesen Befehl mit der ID der Kollektion:

   ```lua
   ServerModCollectionSetup("379114180")
   ```

6. **Speichern**\
   Speichere die Datei.

## Mods in der Welt aktivieren

1. **Cluster-Ordner öffnen**\
   Wechsle in den Ordner, in dem die Datei `cluster.ini` liegt. Das ist Dein Cluster-Ordner. Darin findest Du die Shard-Ordner `Master` (Oberwelt) und, falls die Höhlen aktiv sind, `Caves`.

2. **modoverrides.lua öffnen**\
   Öffne im Ordner `Master` die Datei `modoverrides.lua`. Existiert sie noch nicht, lege sie neu an:

   ```text
   <Cluster-Ordner>/Master/modoverrides.lua
   ```

3. **Mods eintragen**\
   Trage jede Mod mit ihrer Workshop-ID im Format `workshop-<ID>` ein:

   ```lua
   return {
     ["workshop-350811795"] = { enabled = true },
     ["workshop-2902364746"] = { enabled = true },
   }
   ```

4. **Mod-Einstellungen setzen**\
   Bietet eine Mod eigene Optionen an, ergänzt Du sie über `configuration_options`. Die gültigen Namen und Werte stehen in der Datei `modinfo.lua` der jeweiligen Mod:

   ```lua
   return {
     ["workshop-2902364746"] = {
       enabled = true,
       configuration_options = { mode = "Easy Cartography" },
     },
   }
   ```

5. **Höhlen ergänzen**\
   Sind die Höhlen auf Deinem Server aktiv, kopiere dieselbe Datei zusätzlich nach `<Cluster-Ordner>/Caves/modoverrides.lua`. Jeder Shard hat seine eigene Mod-Liste.

6. **Server starten**\
   Starte Deinen Server. Beim Start lädt er die eingetragenen Mods herunter und aktiviert sie. Der erste Start kann dadurch etwas länger dauern.

> [!IMPORTANT]
> Beide Dateien gehören zusammen: Jede Mod, die Du in `modoverrides.lua` aktivierst, braucht auch eine passende `ServerModSetup()`-Zeile in `dedicated_server_mods_setup.lua` – und umgekehrt. Fehlt eine der beiden Angaben, wird die Mod nicht geladen.

> [!NOTE]
> **Müssen Spieler etwas tun?**
>
> Nein. Reine Server-Mods müssen von beitretenden Spielern gar nicht heruntergeladen werden. Mods, die auch auf dem Client laufen müssen, werden beim Beitritt automatisch über den Steam Workshop heruntergeladen und aktiviert.

> [!TIP]
> Heruntergeladene Mods legt der Server als Ordner `mods/workshop-<ID>/` ab. Daran kannst Du prüfen, ob eine Mod tatsächlich geladen wurde. Erstelle vor Mod-Änderungen außerdem ein [Backup](/tutorials/gameserver/dont-starve-together/create-backup) Deiner Welt.
