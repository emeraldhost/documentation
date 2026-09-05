---
slug: "bluemap-einrichten"
language: "de"
title: "So richtest Du BlueMap auf einem Minecraft Java Edition Server ein"
description: "BlueMap auf einem Minecraft Java Edition Server einrichten"
tags: []
date: "2026-04-17"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "BlueMap einrichten"
sort: 32
related: ["gameserver/minecraft/use-tp-command", "gameserver/minecraft/link-java-with-bedrock", "gameserver/minecraft/setup-dynmap", "gameserver/minecraft/setup-plasmo-voice"]
---

BlueMap erstellt eine 3D-Web-Karte Deines Minecraft-Servers, die Du im Browser anzeigen kannst. Die Karte wird als Mesh mit Texturen gerendert und erlaubt Kamerafahrten durch die Welt.

> [!WARNING]
> BlueMap benötigt einen **eigenen Port** für den Webserver. Verwende **nicht** den Standard-Port Deines Servers!

## Schritt 1: Plugin installieren

1. **Plugin herunterladen**\
   Lade [BlueMap](https://modrinth.com/plugin/bluemap) für Deine Server-Version herunter.
   - Für **Fabric/Forge**: Lade die Mod-Version herunter und lege sie in den `mods`-Ordner.
   - Für **Paper/Spigot/Bukkit**: Lade die Plugin-Version herunter und lege sie in den `plugins`-Ordner.

2. **Server neu starten**\
   Starte Deinen Server neu, damit die Config-Dateien erstellt werden.

## Schritt 2: Port freischalten

1. **Netzwerk öffnen**\
   Öffne den Abschnitt **Netzwerk** in Deiner Verwaltung. Dort findest Du eine Übersicht aller verfügbaren Ports.

2. **Port auswählen**\
   Wähle einen freien Port aus und notiere ihn Dir.

> [!WARNING]
> **Wichtig**
>
> Verwende **nicht** den Standard-Port Deines Servers! BlueMap benötigt einen separaten Port.

## Schritt 3: Config-Datei anpassen

1. **Config-Datei öffnen**\
   Navigiere im Datei-Browser zur Webserver-Config von BlueMap.
   - **Fabric/Forge**: `config/bluemap/webserver.conf`
   - **Paper/Spigot/Bukkit**: `plugins/BlueMap/webserver.conf`

2. **Port-Zeile suchen**\
   Öffne die Datei und suche nach der Zeile:

   ```text
   port: 8100
   ```

3. **Port ersetzen**\
   Ersetze `8100` mit Deinem gewählten Port aus Schritt 2.

   ```text
   port: DEIN_PORT
   ```

4. **Änderungen speichern**\
   Speichere die Datei.

## Schritt 4: Server neu starten

1. **Server neu starten**\
   Starte Deinen Server neu, damit die Änderungen übernommen werden.

2. **Karte aufrufen**\
   Öffne die Web-Karte im Browser unter:

   ```text
   http://DEINE_SERVER_IP:DEIN_PORT
   ```

> [!TIP]
> Beim ersten Start rendert BlueMap die komplette Welt – das kann je nach Weltgröße viele Stunden dauern. In der `core.conf` kannst Du die Renderleistung anpassen, falls Dein Server zu stark belastet wird.
