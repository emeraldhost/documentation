---
slug: "autosave-aendern"
language: "de"
title: "So änderst Du das Autosave-Intervall auf Deinem FOUNDRY Server"
description: "Autosave-Intervall auf einem FOUNDRY Server ändern"
tags: []
date: "2026-04-15"
visibility: "public"
cta: "gameserver"
product_keys: ["foundry"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Autosave ändern"
sort: 1
related: ["gameserver/foundry/change-max-players", "gameserver/foundry/change-server-name", "gameserver/foundry/change-world-name", "gameserver/foundry/change-world-seed"]
---

FOUNDRY speichert den Spielstand in regelmäßigen Abständen automatisch. Das Intervall lässt sich direkt über die Verwaltung anpassen.

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Intervall festlegen**\
   Trage im Feld **Automatischer Speicher Interval** den gewünschten Wert in Sekunden ein (z.B. `300` für 5 Minuten).

4. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu.

> [!TIP]
> Ein zu kurzes Intervall (z.B. unter 60 Sekunden) kann bei größeren Fabriken zu kurzen Lags führen. Ein zu langes Intervall erhöht dagegen das Risiko, Fortschritt zu verlieren. `300` (5 Minuten) ist ein guter Kompromiss.
