---
slug: "ticketchance-aendern"
language: "de"
title: "So änderst Du die Ticketchance auf einem The Bus Server"
description: "Ticketchance auf einem The Bus Server per Befehl ändern"
tags: []
date: "2026-02-24"
visibility: "public"
updated: "2026-10-05"
cta: "gameserver"
product_keys: ["the-bus"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Ticketchance ändern"
sort: 18
related: ["gameserver/the-bus/change-map", "gameserver/the-bus/change-operating-plan", "gameserver/the-bus/change-time", "gameserver/the-bus/change-traffic"]
---

Mit der Ticketchance legst Du fest, wie wahrscheinlich Fahrgäste auf Deinem Server ein Ticket kaufen. Du änderst sie per Befehl im Ingame-Chat. Der Befehl wurde mit Update 3.2 eingeführt.

> [!NOTE]
> Dieser Befehl erfordert Owner- oder Admin-Rechte. Wie Du einen Admin hinzufügst, erfährst Du unter [Admin hinzufügen](/tutorials/gameserver/the-bus/add-admin). Die Konsole in der Verwaltung zeigt auf unseren Servern nur die Ausgabe des Servers an und nimmt keine Befehle entgegen.

## So setzt Du die Ticketchance

1. **Ingame-Chat öffnen**\
   [Verbinde Dich mit Deinem Server](/tutorials/gameserver/the-bus/join-server) und öffne den Ingame-Chat.

2. **Ticketchance setzen**\
   Gib folgenden Befehl ein und ersetze `<wert>` durch einen Wert von `0` bis `100`:

   ```text
   /tickets <wert>
   ```

   Zum Beispiel:

   ```text
   /tickets 50
   ```

> [!TIP]
> Der Befehl heißt `/tickets`, nicht `/ticketchance`. Mit `/commands` lässt Du Dir alle verfügbaren Befehle anzeigen.
