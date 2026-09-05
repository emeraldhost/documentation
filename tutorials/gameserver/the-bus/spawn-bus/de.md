---
slug: "bus-spawnen"
language: "de"
title: "So spawnst Du einen Bus auf einem The Bus Server"
description: "Bus an einer Haltestelle auf einem The Bus Server spawnen"
tags: []
date: "2026-02-24"
visibility: "public"
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

Du kannst per Befehl einen Bus an einer Haltestelle spawnen oder ungesteuerte Busse von der Karte entfernen.

## So spawnst Du einen Bus

Gib folgenden Befehl im Ingame-Chat ein:

```text
/spawnBus
```

Der Bus wird automatisch an einer Haltestelle platziert. Der Befehl kann mehrfach ausgeführt werden, um weitere Busse zu spawnen.

> [!NOTE]
> Welcher Bus gespawnt wird, hängt von der aktuell eingestellten Flotte ab. Die Flotte kannst Du mit `/fleet` ändern.

## Ungesteuerte Busse entfernen

Um alle Busse zu entfernen, die gerade **nicht von einem Spieler gesteuert** werden:

```text
/clearBusses
```

Das betrifft z.B. über `/spawnBus` erstellte Busse, die kein Spieler eingestiegen ist, oder Busse, die von Spielern verlassen wurden.

> [!TIP]
> Nutze `/clearBusses`, wenn zu viele ungenutzte Busse auf der Karte stehen und die Übersicht oder Performance leidet.

## Alle Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `/spawnBus` | Bus an einer Haltestelle spawnen |
| `/clearBusses` | Alle ungesteuerten Busse entfernen |

> [!TIP]
> Diese Befehle erfordern Owner- oder Admin-Rechte.
