---
slug: "whitelist-aktivieren"
language: "de"
title: "So aktivierst Du die Whitelist auf einem Hytale Server"
description: "Whitelist auf einem Hytale Server aktivieren"
tags: []
date: "2026-01-15"
visibility: "public"
updated: "2026-09-27"
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

Der Server speichert die Einstellung sofort in der `config.json` (`"RequireJoinPermission": true`). Die Whitelist bleibt also auch nach einem Neustart aktiv.

## So fügst Du Spieler hinzu

```text
whitelist add <Spielername>
```

Statt des Namens kannst Du auch die UUID des Spielers angeben. Der Spieler muss dafür nicht online sein.

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

## Wo speichert Hytale die Whitelist?

Eine eigene `whitelist.json` gibt es seit Update 6 nicht mehr. Stattdessen erhält jeder Spieler auf der Whitelist die Berechtigung `hytale.server.join`, die der Server in der `permissions.json` im Hauptverzeichnis speichert. Hast Du noch eine alte `whitelist.json`, übernimmt der Server sie beim Start automatisch und benennt sie in `whitelist.json.migrated` um.

> [!NOTE]
> Administratoren (OPs) können immer beitreten, auch wenn die Whitelist aktiv ist. Ihre Gruppe `hytale:Admin` hat alle Berechtigungen und damit auch `hytale.server.join`. Das gilt für jede Gruppe, die diese Berechtigung besitzt: Ihre Mitglieder kommen trotz Whitelist auf den Server, auch wenn Du sie mit `whitelist remove` entfernst. Der Server weist Dich in diesem Fall mit der Meldung „... can still join, because a group or a wildcard grants them the permission!“ darauf hin.
