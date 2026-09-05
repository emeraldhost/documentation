---
slug: "locator-bar-deaktivieren"
language: "de"
title: "So deaktivierst Du die Locator Bar auf einem Minecraft Bedrock Server"
description: "Locator Bar auf einem Minecraft Bedrock Edition Server deaktivieren"
tags: []
date: "2026-06-28"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft-bedrock"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Locator Bar deaktivieren"
sort: 5
related: ["gameserver/minecraft-bedrock/delete-world", "gameserver/minecraft-bedrock/disable-end", "gameserver/minecraft-bedrock/disable-nether", "gameserver/minecraft-bedrock/download-world"]
---

Die Locator Bar ist eine kompassähnliche Leiste über der Schnellzugriffsleiste, die mit dem Update **„Chase the Skies“ (Bedrock 1.21.90)** hinzugefügt wurde. Sie zeigt die Richtung anderer Spieler in der Nähe an. Anders als bei Minecraft Java Edition wird sie auf Bedrock **nicht** über die Spielregel `locatorBar` gesteuert, sondern über die Spielregel `playerWaypoints` – diese setzt Du auf `off`, um die Leiste serverweit für alle Spieler abzuschalten.

> [!NOTE]
> `playerWaypoints` ist eine **Welt-Spielregel** und wird über den `/gamerule`-Befehl gesetzt – es gibt **keinen Eintrag in der `server.properties`**. Die Spielregel verwendet die Werte `everyone` (Standard) und `off` – **nicht** `true`/`false` wie bei Minecraft Java Edition.

## Voraussetzung

Du benötigst OP-Rechte, um Spielregeln zu ändern. Siehe [OP-Rechte vergeben](/tutorials/gameserver/minecraft-bedrock/grant-op-rights).

## Locator Bar deaktivieren

Den Befehl kannst Du entweder direkt im Spiel-Chat (als Operator) oder über die Server-Konsole in der Verwaltung ausführen:

```text
/gamerule playerWaypoints off
```

> [!NOTE]
> In der Server-Konsole werden alle Befehle **ohne** `/` eingegeben.

## Locator Bar wieder aktivieren

Setze die Spielregel zurück auf `everyone`:

```text
/gamerule playerWaypoints everyone
```

> [!TIP]
> Die Spielregel wird mit der Welt gespeichert und bleibt auch nach einem Server-Neustart erhalten – Du musst den Befehl also nur einmal ausführen. Standardmäßig sind die Spieler-Wegpunkte aktiviert (`everyone`).
