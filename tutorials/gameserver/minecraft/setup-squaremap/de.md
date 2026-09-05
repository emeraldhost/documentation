---
slug: "squaremap-einrichten"
language: "de"
title: "So richtest Du squaremap auf einem Minecraft Java Edition Server ein"
description: "squaremap auf einem Minecraft Java Edition Server einrichten"
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
short_title: "squaremap einrichten"
sort: 38
related: ["gameserver/minecraft/setup-pl3xmap", "gameserver/minecraft/setup-simple-voice-chat", "gameserver/minecraft/change-gamemode", "gameserver/minecraft/moderate-server"]
---

squaremap erstellt eine minimalistische 2D-Web-Karte Deines Minecraft-Servers. Die Karte wird im Vanilla-Stil gerendert und kann direkt im Browser geöffnet werden.

> [!WARNING]
> squaremap benötigt einen **eigenen Port** für den Webserver. Verwende **nicht** den Standard-Port Deines Servers!

> [!NOTE]
> squaremap funktioniert nur mit **Paper**- oder **Purpur**-Servern. Auf Vanilla-, Spigot-, Forge- oder Fabric-Servern läuft es nicht.

## Schritt 1: Plugin installieren

1. **Plugin herunterladen**\
   Lade [squaremap](https://modrinth.com/plugin/squaremap) für Deine Server-Version herunter und lege die `.jar`-Datei in den `plugins`-Ordner.

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
> Verwende **nicht** den Standard-Port Deines Servers! squaremap benötigt einen separaten Port.

## Schritt 3: Config-Datei anpassen

1. **Config-Datei öffnen**\
   Öffne die Datei `plugins/squaremap/config.yml`.

2. **Port-Abschnitt suchen**\
   Suche nach dem Abschnitt `internal-webserver`:

   ```yaml
   settings:
     internal-webserver:
       enabled: true
       bind: 0.0.0.0
       port: 8080
   ```

3. **Port ersetzen**\
   Ersetze `8080` mit Deinem gewählten Port aus Schritt 2.

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
