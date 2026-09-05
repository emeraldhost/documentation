---
slug: "cheats-aktivieren"
language: "de"
title: "So aktivierst Du Cheats auf Deinem Insurgency: Sandstorm Server"
description: "Cheats auf einem Insurgency: Sandstorm Server aktivieren"
tags: []
date: "2026-06-23"
visibility: "public"
cta: "gameserver"
product_keys: ["insurgency-sandstorm"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Cheats aktivieren"
sort: 4
related: ["gameserver/insurgency-sandstorm/configure-player-voting", "gameserver/insurgency-sandstorm/create-backup", "gameserver/insurgency-sandstorm/join-server", "gameserver/insurgency-sandstorm/kick-ban-players"]
---

Cheats stellen Test- und Diagnosebefehle bereit – z.B. um sich Waffen zu geben, unendliche Munition oder Zeitlupe zu aktivieren. Sie eignen sich zum Testen von Server-Einstellungen, sollten im normalen Spielbetrieb aber **nicht** aktiviert sein, da einige Befehle einen Spielvorteil verschaffen.

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers und navigiere zu den **Einstellungen**.

2. **Parameter eintragen**\
   Trage im Feld **Zusätzliche Parameter** den folgenden Parameter ein:

   ```text
   -EnableCheats
   ```

3. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu.

> [!WARNING]
> Aktiviere Cheats nur zu Testzwecken und entferne den Parameter `-EnableCheats` anschließend wieder, damit auf Deinem Server keine Spielvorteile möglich sind.
