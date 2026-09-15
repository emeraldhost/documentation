---
slug: "spieler-entbannen"
language: "de"
title: "So entbannst Du Spieler auf Deinem RuneScape: Dragonwilds Server"
description: "Spieler auf einem RuneScape Dragonwilds Server entbannen"
tags: []
date: "2026-09-15"
visibility: "public"
cta: "gameserver"
product_keys: ["runescape-dragonwilds"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler entbannen"
sort: 12
related: ["gameserver/runescape-dragonwilds/kick-ban-players", "gameserver/runescape-dragonwilds/set-admin-password", "gameserver/runescape-dragonwilds/set-owner-id", "gameserver/runescape-dragonwilds/join-server"]
---
Gebannte Spieler kannst Du über das Ingame-Menü **Server Management** wieder entbannen. Das ist allerdings nur als **Owner** Deines Servers möglich, nicht als Admin.

## Owner und Admin

Auf Deinem Server gibt es zwei Rollen mit unterschiedlichen Rechten:

| Rolle | Voraussetzung | Bannen (online) | Bannen (offline) | Entbannen |
|-------|---------------|-----------------|------------------|-----------|
| Owner | Player ID stimmt mit der [Owner ID](/tutorials/gameserver/runescape-dragonwilds/set-owner-id) in der Verwaltung überein | Ja | Ja | Ja |
| Admin | Hat das [Admin Passwort](/tutorials/gameserver/runescape-dragonwilds/set-admin-password) im Server Management eingegeben | Ja (nur normale Spieler) | Nein | Nein |

## Spieler entbannen

1. **Als Owner beitreten**\
   [Tritt Deinem Server bei](/tutorials/gameserver/runescape-dragonwilds/join-server) mit dem Account, dessen Player ID als Owner ID hinterlegt ist.

2. **Pausemenü öffnen**\
   Drücke die Pause-Taste, um das Menü zu öffnen.

3. **Server Management öffnen**\
   Navigiere zu **Settings** und wähle **Server Management** aus. Gib das Admin Passwort ein, falls Du dazu aufgefordert wirst.

4. **Spieler entbannen**\
   Wähle den Spieler in der Liste der gebannten Spieler aus und wähle die Option zum Entbannen. Der Spieler kann Deinem Server danach wieder beitreten.

> [!WARNING]
> Als Admin kannst Du Spieler **nicht entbannen**. Hat ein Admin einen Spieler versehentlich gebannt, muss der Owner den Bann aufheben.

> [!NOTE]
> Gebannte Spieler erhalten derzeit **keine Meldung** über den Bann. Sie können Deinem Server lediglich nicht mehr beitreten und erfahren nicht, warum.

> [!TIP]
> **Admin-Rechte entziehen**
>
> Admin-Rechte sind nicht an einzelne Spieler gebunden, sondern gelten für alle, die das Admin Passwort eingegeben haben – so lange, bis es geändert wird. Um allen bisherigen Admins die Rechte zu entziehen, ändere das [Admin Passwort](/tutorials/gameserver/runescape-dragonwilds/set-admin-password) in der Verwaltung und starte Deinen Server neu.
