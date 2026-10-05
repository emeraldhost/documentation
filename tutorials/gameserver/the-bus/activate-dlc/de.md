---
slug: "dlc-aktivieren"
language: "de"
title: "So aktivierst Du DLCs auf einem The Bus Server"
description: "DLCs auf einem The Bus Server per Befehl aktivieren oder deaktivieren"
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
short_title: "DLC aktivieren"
sort: 5
related: ["gameserver/the-bus/add-admin", "gameserver/the-bus/change-fleet", "gameserver/the-bus/change-map", "gameserver/the-bus/change-operating-plan"]
---

Mit dem Befehl `/dlc` aktivierst oder deaktivierst Du ein DLC auf Deinem Server. Den Befehl gibst Du im Ingame-Chat ein.

> [!TIP]
> Möchtest Du Deinen Server auf die Karte Hamburg umstellen, findest Du die Anleitung unter [DLC-Karte hinzufügen](/tutorials/gameserver/the-bus/add-dlc-map).

## Verfügbare DLCs

| DLC | Typ |
|-----|-----|
| **Hamburg City (by Halycon)** | Karte (im Spiel: **Hamburg**) |
| **Ebus 2.2** | Bus |

> [!NOTE]
> Weitere DLCs wie New York City, London South, Lübeck und der New York US LFS Bus sind angekündigt, aber noch nicht erschienen.

## So aktivierst oder deaktivierst Du ein DLC

1. **Server beitreten**\
   Tritt Deinem Server bei, siehe [Server beitreten](/tutorials/gameserver/the-bus/join-server). Den Befehl kannst Du nur mit Owner- oder Admin-Rechten nutzen – siehe [Admin hinzufügen](/tutorials/gameserver/the-bus/add-admin).

2. **Befehl eingeben**\
   Gib folgenden Befehl im Ingame-Chat ein und ersetze `<dlc>` durch das gewünschte DLC:

   ```text
   /dlc <dlc>
   ```

   > [!NOTE]
   > Wie das DLC beim Befehl anzugeben ist, ist nicht offiziell dokumentiert. Mit `/commands` lässt Du Dir alle verfügbaren Befehle anzeigen. Die Konsole in der Verwaltung zeigt auf unseren Servern nur die Ausgabe des Servers an und nimmt keine Befehle entgegen.

## Was Spieler besitzen müssen

- **Karten-DLC:** Alle Spieler müssen das DLC der aktiven Karte besitzen, um auf ihr zu spielen.
- **Bus-DLC:** Nur Spieler, die das DLC besitzen, können einen DLC-Bus auswählen und fahren.

> [!WARNING]
> Seit Update 3.2 EA kann ein The Bus Server DLCs als Voraussetzung für den Beitritt festlegen. Spieler, die ein vorausgesetztes DLC nicht besitzen, können Deinem Server dann nicht beitreten.
