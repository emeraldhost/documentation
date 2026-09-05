---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem Counter-Strike 2 Server hinzu"
description: "Mods auf einem Counter-Strike 2 Server hinzufügen"
tags: []
date: "2026-04-03"
visibility: "public"
cta: "gameserver"
product_keys: ["counter-strike-2"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 3
related: ["gameserver/counter-strike-2/add-workshop-maps", "gameserver/counter-strike-2/change-game-mode", "gameserver/counter-strike-2/change-map", "gameserver/counter-strike-2/configure-server"]
---

Um Plugins und Mods auf Deinem CS2 Server zu nutzen, benötigst Du **Metamod** und **CounterStrikeSharp** als Basis-Framework.

## Metamod installieren

1. **Metamod herunterladen**\
   Lade die neueste Version von [Metamod:Source](https://www.sourcemm.net/downloads.php/?branch=master) für CS2 herunter.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Dateien hochladen**\
   Entpacke das Archiv und lade den `addons`-Ordner in folgendes Verzeichnis hoch:

   ```text
   /game/csgo/
   ```

5. **gameinfo.gi bearbeiten**\
   Öffne die Datei `/game/csgo/gameinfo.gi` und suche die Zeile:

   ```text
   Game_LowViolence	csgo_lv
   ```

   Füge **darunter** eine neue Zeile hinzu:

   ```text
   Game	csgo/addons/metamod
   ```

6. **Server starten**\
   Starte Deinen Server. Überprüfe mit dem Konsolenbefehl `meta list`, ob Metamod geladen wurde.

## CounterStrikeSharp installieren

1. **CounterStrikeSharp herunterladen**\
   Lade die neueste **with-runtime** Version von [CounterStrikeSharp](https://github.com/roflmuffin/CounterStrikeSharp/releases) herunter.

2. **Dateien hochladen**\
   Entpacke das Archiv und lade den `addons`-Ordner in folgendes Verzeichnis hoch:

   ```text
   /game/csgo/
   ```

3. **Server neu starten**\
   Starte Deinen Server neu. Überprüfe mit `css_plugins list`, ob CounterStrikeSharp geladen wurde.

## Plugins installieren

1. **Plugin herunterladen**\
   Lade das gewünschte Plugin herunter.

2. **Plugin hochladen**\
   Lade den Plugin-Ordner in folgendes Verzeichnis hoch:

   ```text
   /game/csgo/addons/counterstrikesharp/plugins/
   ```

3. **Server neu starten**\
   Starte Deinen Server neu.

> [!WARNING]
> Stoppe Deinen Server immer vor dem Hochladen von Dateien. Nach einem CS2-Update können Metamod, CounterStrikeSharp und Plugins inkompatibel sein – prüfe vorher, ob Updates verfügbar sind.
