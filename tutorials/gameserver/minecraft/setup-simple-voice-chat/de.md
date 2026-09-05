---
slug: "simple-voice-chat-einrichten"
language: "de"
title: "So richtest Du Simple Voice Chat auf einem Minecraft Java Edition Server ein"
description: "Simple Voice Chat auf einem Minecraft Java Edition Server einrichten"
tags: []
date: "2026-01-02"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Simple Voice Chat einrichten"
sort: 37
related: ["gameserver/minecraft/setup-plasmo-voice", "gameserver/minecraft/setup-pl3xmap", "gameserver/minecraft/setup-squaremap", "gameserver/minecraft/change-gamemode"]
---

Simple Voice Chat ermöglicht Proximity Voice Chat auf Deinem Minecraft Server – Spieler können miteinander sprechen, je näher sie sich im Spiel sind.

> [!WARNING]
> Simple Voice Chat benötigt einen **eigenen Port**. Verwende **nicht** den Standard-Port Deines Servers!

> [!NOTE]
> Alle Spieler, die den Voice Chat nutzen möchten, müssen den [Simple Voice Chat Mod](https://modrinth.com/plugin/simple-voice-chat) ebenfalls installiert haben.

## Schritt 1: Mod/Plugin installieren

1. **Mod herunterladen**\
   Lade [Simple Voice Chat](https://modrinth.com/plugin/simple-voice-chat) für Deine Server-Version herunter.
   - Für **Fabric/Forge**: Lade die Mod-Version herunter und lege sie in den `mods`-Ordner.
   - Für **Paper/Spigot/Bukkit**: Lade die Plugin-Version herunter und lege sie in den `plugins`-Ordner.

2. **Server neu starten**\
   Starte Deinen Server neu, damit die Config-Dateien erstellt werden.

## Schritt 2: Port freischalten

1. **Netzwerk öffnen**\
   Öffne den Abschnitt „Netzwerk“ in Deiner Verwaltung. Dort findest Du eine Übersicht aller verfügbaren Ports.

2. **Port auswählen**\
   Wähle einen freien Port aus und notiere ihn Dir.

> [!WARNING]
> **Wichtig**
>
> Verwende **nicht** den Standard-Port Deines Servers! Simple Voice Chat benötigt einen separaten Port.

## Schritt 3: Config-Datei anpassen

1. **Config-Datei öffnen**\
   Navigiere im Datei-Browser zur Config-Datei von Simple Voice Chat.
   - **Fabric/Forge**: `config/voicechat/voicechat-server.properties`
   - **Paper/Spigot/Bukkit**: `plugins/voicechat/voicechat-server.properties`

2. **Port-Zeile suchen**\
   Öffne die Datei und suche nach der Zeile:

   ```text
   port=24454
   ```

3. **Port ersetzen**\
   Ersetze `24454` mit Deinem gewählten Port aus Schritt 2.

   ```text
   port=DEIN_PORT
   ```

4. **Änderungen speichern**\
   Speichere die Datei.

> [!TIP]
> Die restlichen Einstellungen wie `bind_address` oder `voice_host` kannst Du auf den Standardwerten belassen – diese funktionieren für die meisten Server.

## Schritt 4: Server neu starten

1. **Server neu starten**\
   Starte Deinen Server neu, damit die Änderungen übernommen werden.

2. **Konsole prüfen**\
   Überprüfe in der Server-Konsole, ob Simple Voice Chat erfolgreich gestartet wurde. Du solltest eine Meldung sehen wie: `Voice chat server started on port XXXXX`
