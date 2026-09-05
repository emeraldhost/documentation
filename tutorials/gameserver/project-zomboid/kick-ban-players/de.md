---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Project Zomboid Server"
description: "Spieler auf einem Project Zomboid Server kicken und bannen"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["project-zomboid"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 12
related: ["gameserver/project-zomboid/download-savegame", "gameserver/project-zomboid/enable-server-list", "gameserver/project-zomboid/join-server", "gameserver/project-zomboid/set-server-password"]
---

Du kannst als Admin Spieler per Befehl kicken oder dauerhaft bannen.

> [!NOTE]
> Du benötigst Admin-Rechte, um diese Befehle nutzen zu können. Siehe [Admin hinzufügen](/tutorials/gameserver/project-zomboid/add-admin).

## Spieler-Liste anzeigen

Gib folgenden Befehl ein, um alle verbundenen Spieler anzuzeigen:

```text
/players
```

## Spieler kicken

```text
/kick <Name>
```

Der Spieler wird vom Server entfernt, kann aber erneut beitreten.

## Spieler bannen

Per Spielername:

```text
/banuser <Name>
```

Per SteamID64:

```text
/banid <SteamID64>
```

Der Spieler wird dauerhaft vom Server ausgeschlossen.

> [!TIP]
> Hier findest Du eine Anleitung, wie Du Deine [SteamID64](/tutorials/gameserver/steamid64-find-out) herausfindest.

## Spieler entbannen

Per Spielername:

```text
/unbanuser <Name>
```

Per SteamID64:

```text
/unbanid <SteamID64>
```

## Alle Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `/players` | Spielerliste anzeigen |
| `/kick <Name>` | Spieler kicken |
| `/banuser <Name>` | Spieler per Name bannen |
| `/banid <SteamID64>` | Spieler per SteamID64 bannen |
| `/unbanuser <Name>` | Spieler per Name entbannen |
| `/unbanid <SteamID64>` | Spieler per SteamID64 entbannen |
