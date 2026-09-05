---
slug: "spieler-bannen"
language: "de"
title: "So bannst Du Spieler auf Deinem Core Keeper Server"
description: "Spieler auf einem Core Keeper Server bannen und entbannen"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["core-keeper"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler bannen"
sort: 12
related: ["gameserver/core-keeper/add-mods", "gameserver/core-keeper/add-savegame", "gameserver/core-keeper/change-content-bundle", "gameserver/core-keeper/change-game-id"]
---

Du kannst als Admin Spieler über die Server-Konsole bannen und entbannen.

> [!NOTE]
> Du benötigst Admin-Rechte, um diese Befehle nutzen zu können. Siehe [Admin hinzufügen](/tutorials/gameserver/core-keeper/add-admin).

## Spieler bannen

Öffne die **Server-Konsole** in der Verwaltung und gib ein:

```text
ban Spielername
```

## Spieler entbannen

```text
unban Spielername
```

## Spieler kicken

```text
kick Spielername
```

## Alle Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `ban <Spielername>` | Spieler bannen |
| `unban <Spielername>` | Spieler entbannen |
| `kick <Spielername>` | Spieler kicken |
| `list` | Alle verbundenen Spieler anzeigen |
| `say <Nachricht>` | Nachricht an alle Spieler senden |
