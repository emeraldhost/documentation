---
slug: "plasmo-voice-einrichten"
language: "de"
title: "So richtest Du Plasmo Voice auf einem Minecraft Java Edition Server ein"
description: "Plasmo Voice auf einem Minecraft Java Edition Server einrichten"
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
short_title: "Plasmo Voice einrichten"
sort: 35
related: ["gameserver/minecraft/setup-bluemap", "gameserver/minecraft/setup-dynmap", "gameserver/minecraft/setup-pl3xmap", "gameserver/minecraft/setup-simple-voice-chat"]
---

Plasmo Voice bringt Proximity Voice Chat auf Deinen Minecraft Server – ähnlich zu Simple Voice Chat, aber mit zusätzlichen Features wie Gruppen und Radios.

> [!WARNING]
> Plasmo Voice benötigt einen **eigenen Port**. Verwende **nicht** den Standard-Port Deines Servers!

> [!NOTE]
> Alle Spieler, die Voice Chat nutzen möchten, müssen den [Plasmo Voice Mod](https://modrinth.com/mod/plasmo-voice) ebenfalls installiert haben.

## Schritt 1: Mod/Plugin installieren

1. **Mod herunterladen**\
   Lade [Plasmo Voice](https://modrinth.com/plugin/plasmo-voice) für Deine Server-Version herunter.
   - Für **Fabric/Forge/NeoForge**: Lade die Mod-Version herunter und lege sie in den `mods`-Ordner.
   - Für **Paper/Folia**: Lade die Plugin-Version herunter und lege sie in den `plugins`-Ordner.

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
> Verwende **nicht** den Standard-Port Deines Servers! Plasmo Voice benötigt einen separaten Port.

## Schritt 3: Config-Datei anpassen

1. **Config-Datei öffnen**\
   Navigiere im Datei-Browser zur Config-Datei von Plasmo Voice.
   - **Fabric/Forge/NeoForge**: `config/plasmovoice/config.toml`
   - **Paper/Folia**: `plugins/PlasmoVoice/config.toml`

2. **Port-Zeile suchen**\
   Öffne die Datei und suche nach der Zeile:

   ```text
   port = 0
   ```

3. **Port ersetzen**\
   Ersetze `0` mit Deinem gewählten Port aus Schritt 2.

   ```text
   port = DEIN_PORT
   ```

4. **Änderungen speichern**\
   Speichere die Datei.

> [!TIP]
> Der Standardwert `0` bedeutet, dass Plasmo Voice denselben Port wie Dein Minecraft-Server verwendet. Um Konflikte zu vermeiden, empfehlen wir einen dedizierten Port.

## Schritt 4: Server neu starten

1. **Server neu starten**\
   Starte Deinen Server neu, damit die Änderungen übernommen werden.

2. **Konsole prüfen**\
   Überprüfe in der Server-Konsole, ob Plasmo Voice erfolgreich gestartet wurde.
