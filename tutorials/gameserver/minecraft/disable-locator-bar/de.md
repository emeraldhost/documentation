---
slug: "locator-bar-deaktivieren"
language: "de"
title: "So deaktivierst Du die Locator Bar auf einem Minecraft Java Edition Server"
description: "Locator Bar auf einem Minecraft Java Edition Server deaktivieren"
tags: []
date: "2026-06-28"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Locator Bar deaktivieren"
sort: 3
related: ["gameserver/minecraft/disable-end", "gameserver/minecraft/disable-nether", "gameserver/minecraft/download-world", "gameserver/minecraft/enable-whitelist"]
---

Die Locator Bar ist eine kompassähnliche Leiste über der Schnellzugriffsleiste, die mit dem Update **1.21.6 „Chase the Skies“** hinzugefügt wurde. Sie zeigt die Richtung anderer Spieler in der Nähe an. Über die Spielregel `locatorBar` kannst Du sie serverweit für alle Spieler abschalten.

> [!NOTE]
> `locatorBar` ist eine **Vanilla-Spielregel** und funktioniert auf allen Java-Server-Varianten – Vanilla, Paper, Spigot, Purpur, Folia, Forge, Fabric und NeoForge (ab Version 1.21.6).

## Voraussetzung

Du benötigst OP-Rechte (mindestens Level 2), um Spielregeln zu ändern. Siehe [OP-Rechte vergeben](/tutorials/gameserver/minecraft/grant-op-rights).

## Locator Bar deaktivieren

Den Befehl kannst Du entweder direkt im Spiel-Chat oder über die Server-Konsole in der Verwaltung ausführen:

```text
/gamerule locatorBar false
```

> [!NOTE]
> In der Server-Konsole werden alle Befehle **ohne** `/` eingegeben.

> [!WARNING]
> Achte auf die Groß- und Kleinschreibung: Die Spielregel heißt `locatorBar` (camelCase), **nicht** `locatorbar` oder `locator_bar`. Bei falscher Schreibweise schlägt der Befehl ohne Fehlermeldung fehl.

## Locator Bar wieder aktivieren

Setze die Spielregel zurück auf `true`:

```text
/gamerule locatorBar true
```

> [!TIP]
> Die Spielregel wird mit der Welt gespeichert und bleibt auch nach einem Server-Neustart erhalten – Du musst den Befehl also nur einmal ausführen. Standardmäßig ist die Locator Bar aktiviert (`true`).
