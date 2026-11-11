---
slug: "max-spieler-aendern"
language: "de"
title: "So änderst Du die maximale Spieleranzahl auf Deinem Stormforge Server"
description: "Lege über das Feld Maximale Spieler im Config-Editor fest, wie viele Spieler Deinem Stormforge Server beitreten können."
tags: []
date: "2026-11-11"
visibility: "public"
cta: "gameserver"
product_keys: ["stormforge"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Max Spieler ändern"
sort: 3
related: ["gameserver/stormforge/set-server-password", "gameserver/stormforge/change-server-name", "gameserver/stormforge/join-server"]
---

Im **Config-Editor** legst Du fest, wie viele Spieler gleichzeitig auf Deinem Server spielen können. Stormforge ist für 1 bis 8 Spieler ausgelegt. Der Standardwert ist `8`.

1. **Verwaltung öffnen**\
   Öffne die **Verwaltung** Deines Servers.

2. **Config-Editor öffnen**\
   Navigiere zum **Config-Editor**.

3. **Spieleranzahl anpassen**\
   Trage die gewünschte Anzahl im Feld **Maximale Spieler** ein und speichere die Einstellung. Erlaubt ist eine ganze Zahl von 1 bis 8.

4. **Server neu starten**\
   Starte Deinen Server neu, damit die Änderung übernommen wird.

> [!NOTE]
> Ändere die Spieleranzahl immer im **Config-Editor**. Bei jedem Start wird der Wert aus dem Feld **Maximale Spieler** als `maxPlayers` in die Datei `settings.json` geschrieben. Eine Änderung von Hand in der Datei wird dabei überschrieben.
