---
slug: "whitelist-aktivieren"
language: "de"
title: "So aktivierst Du die Whitelist auf einem Hytale Server"
description: "Whitelist auf einem Hytale Server aktivieren"
tags: []
date: "2026-01-15"
visibility: "public"
cta: "gameserver"
product_keys: ["hytale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Whitelist aktivieren"
sort: 25
related: ["gameserver/hytale/enable-fall-damage", "gameserver/hytale/enable-pvp", "gameserver/hytale/improve-performance", "gameserver/hytale/add-mods"]
---

Mit der Whitelist kannst Du kontrollieren, wer Deinem Server beitreten darf. Nur Spieler auf der Whitelist können sich verbinden.

## So aktivierst Du die Whitelist

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Hytale-Servers.

2. **Whitelist aktivieren**\
   Gib folgenden Befehl in die Konsole ein:

   ```text
   whitelist enable
   ```

## So fügst Du Spieler hinzu

```text
whitelist add <Spielername>
```

## So entfernst Du Spieler

```text
whitelist remove <Spielername>
```

## Alle Befehle

| Befehl | Beschreibung |
| ------ | ------------ |
| `whitelist enable` | Whitelist aktivieren |
| `whitelist disable` | Whitelist deaktivieren |
| `whitelist add <Spieler>` | Spieler zur Whitelist hinzufügen |
| `whitelist remove <Spieler>` | Spieler von der Whitelist entfernen |
| `whitelist list` | Alle Spieler auf der Whitelist anzeigen |
| `whitelist status` | Status der Whitelist anzeigen |
| `whitelist clear` | Whitelist leeren |

> [!TIP]
> **Hinweis**
>
> Administratoren (OPs) können immer beitreten, auch wenn die Whitelist aktiv ist.
