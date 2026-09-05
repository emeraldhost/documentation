---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf einem Hytale Server hinzu"
description: "Admin auf einem Hytale Server hinzufügen"
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
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/hytale/change-gamemode", "gameserver/hytale/change-max-players", "gameserver/hytale/change-max-view-radius", "gameserver/hytale/change-motd"]
---

## Voraussetzung

Der Spieler, der Admin-Rechte erhalten soll, muss auf dem Server online sein.

## So vergibst Du Admin-Rechte

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Hytale-Servers.

2. **Befehl eingeben**\
   Gib folgenden Befehl in die Konsole ein:

   ```text
   op add <Spielername>
   ```

3. **Bestätigung**\
   Der Spieler erhält die Nachricht „You have been made an operator“ und hat nun Admin-Rechte.

## So entfernst Du Admin-Rechte

Um einem Spieler die Admin-Rechte zu entziehen, verwende:

```text
op remove <Spielername>
```

## So ernennst Du weitere Admins im Spiel

Spieler mit Admin-Rechten können direkt im Spiel weitere Admins ernennen:

```text
/op add <Spielername>
```

> [!TIP]
> **Hinweis**
>
> Befehle in der Server-Konsole benötigen keinen Schrägstrich (/) am Anfang. Im Spiel muss der Schrägstrich verwendet werden.
