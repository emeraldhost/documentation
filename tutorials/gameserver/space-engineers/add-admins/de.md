---
slug: "admins-hinzufuegen"
language: "de"
title: "So fügst Du Admins auf Deinem Space Engineers Server hinzu"
description: "Admins auf einem Space Engineers Server hinzufügen"
tags: []
date: "2026-07-08"
visibility: "public"
cta: "gameserver"
product_keys: ["space-engineers"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admins hinzufügen"
sort: 1
related: ["gameserver/space-engineers/add-mods", "gameserver/space-engineers/change-game-mode", "gameserver/space-engineers/change-max-players", "gameserver/space-engineers/change-server-description"]
---

Admins haben volle Verwaltungsrechte auf dem Server und können zum Beispiel Spieler kicken und bannen. Du kannst Admins über die Server-Konfiguration oder direkt im Spiel festlegen.

## Voraussetzung

Du benötigst die [SteamID64](/tutorials/gameserver/steamid64-find-out) jedes Spielers, den Du zum Admin machen möchtest.

## Methode 1: Über die Server-Konfiguration

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Konfigurationsdatei bearbeitest. Ein laufender Server überschreibt Deine Änderungen beim Speichern.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server oder nutze den Datei-Browser.

3. **Konfiguration öffnen**\
   Öffne die Datei `SpaceEngineers-Dedicated.cfg`.

4. **Admins eintragen**\
   Suche den Abschnitt `<Administrators>` (bei einem leeren Server steht dort `<Administrators />`) und trage pro Admin eine Zeile mit der SteamID64 ein:

   ```xml
   <Administrators>
     <unsignedLong>76561198000000000</unsignedLong>
   </Administrators>
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

## Methode 2: Direkt im Spiel

Ein bereits berechtigter Admin kann weitere Spieler live befördern:

1. **Server beitreten**\
   Tritt als Admin Deinem Server bei.

2. **Admin-Menü öffnen**\
   Öffne die Spielerliste mit `F3` oder das Admin-Menü mit `Alt` + `F10`.

3. **Spieler befördern**\
   Wähle den Spieler aus und befördere ihn (**Promote**) zum gewünschten Rang.

> [!NOTE]
> **Crossplay-Server**
>
> Auf Servern mit aktiviertem **Crossplay** greift die SteamID-Methode (Methode 1) nicht. Nutze in diesem Fall die Beförderung im Spiel (Methode 2) oder die [Remote API](/tutorials/gameserver/space-engineers/enable-remote-api).
