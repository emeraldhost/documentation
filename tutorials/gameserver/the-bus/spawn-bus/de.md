---
slug: "bus-spawnen"
language: "de"
title: "So spawnst Du einen Bus auf einem The Bus Server"
description: "Bus an einer Haltestelle auf einem The Bus Server spawnen und ungesteuerte Busse entfernen"
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
short_title: "Bus spawnen"
sort: 3
related: ["gameserver/the-bus/join-server", "gameserver/the-bus/kick-ban-players", "gameserver/the-bus/send-chat-messages", "gameserver/the-bus/teleport"]
---

Du kannst per Befehl im Ingame-Chat einen Bus an einer Haltestelle spawnen oder ungesteuerte Busse von der Karte entfernen.

> [!NOTE]
> Diese Befehle erfordern Owner- oder Admin-Rechte – siehe [Admin hinzufügen](/tutorials/gameserver/the-bus/add-admin). Gib sie im Ingame-Chat ein. Die Konsole in der Verwaltung zeigt auf unseren Servern nur die Ausgabe des Servers an und nimmt keine Befehle entgegen.

## So spawnst Du einen Bus

Gib folgenden Befehl im Ingame-Chat ein:

```text
/spawnBus
```

Der Server spawnt daraufhin einen Bus an einer Haltestelle.

> [!TIP]
> Welche Busse auf Deinem Server zur Verfügung stehen, legt die Flotte fest. Wie Du sie änderst, erfährst Du unter [Flotte ändern](/tutorials/gameserver/the-bus/change-fleet).

## So entfernst Du ungesteuerte Busse

Stehen zu viele ungenutzte Busse auf der Karte, entfernst Du alle Busse, die gerade **von keinem Spieler gesteuert** werden, mit folgendem Befehl:

```text
/clearBusses
```

## Befehlsübersicht

| Befehl | Beschreibung |
|--------|-------------|
| `/spawnBus` | Bus an einer Haltestelle spawnen |
| `/clearBusses` | Alle ungesteuerten Busse von der Karte entfernen |

Mit `/commands` lässt Du Dir im Ingame-Chat alle verfügbaren Befehle anzeigen.
