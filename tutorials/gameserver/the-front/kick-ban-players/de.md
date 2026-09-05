---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem The Front Server"
description: "Spieler auf einem The Front Server kicken und bannen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["the-front"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 6
related: ["gameserver/the-front/add-savegame", "gameserver/the-front/create-backup", "gameserver/the-front/download-savegame", "gameserver/the-front/join-server"]
---

Spieler entfernst Du auf Deinem The Front Server über Adminbefehle direkt im Spiel. Alle Befehle arbeiten mit der **SteamID64** des Spielers – eine 17-stellige Zahl, die mit `7656` beginnt.

> [!NOTE]
> Du benötigst Adminrechte, um diese Befehle nutzen zu können. Siehe [Admin hinzufügen](/tutorials/gameserver/the-front/add-admin).

> [!TIP]
> Hier findest Du eine Anleitung, wie Du eine [SteamID64](/tutorials/gameserver/steamid64-find-out) herausfindest.

## Befehle im Spiel nutzen

1. **Adminmenü öffnen**\
   Drücke im Spiel `Shift` + `G`, um das Adminmenü zu öffnen. Alternativ öffnest Du die Konsole mit `` ` `` beziehungsweise `~`.

2. **Befehl eingeben**\
   Gib den gewünschten Befehl zusammen mit der SteamID64 des Spielers ein, zum Beispiel:

   ```text
   BanPlayer 76561198012345678 login
   ```

3. **Bestätigen**\
   Bestätige die Eingabe. Der Befehl wirkt sofort, ein Serverneustart ist nicht nötig.

## Spieler kicken

```text
KickPlayerOff <SteamID64>
```

Der Spieler wird vom Server getrennt, kann aber jederzeit wieder beitreten.

## Spieler bannen

```text
BanPlayer <SteamID64> login
```

Der Spieler kann sich nicht mehr auf Deinem Server einloggen, bis Du den Bann wieder aufhebst.

## Bann aufheben

```text
PermitPlayer <SteamID64> login
```

## Spieler stummschalten

```text
BanPlayer <SteamID64> chat
```

Damit sperrst Du den Spieler aus dem Chat des Spiels aus. Auf den Server kommt er weiterhin.

## Stummschaltung aufheben

```text
PermitPlayer <SteamID64> chat
```

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `KickPlayerOff <SteamID64>` | Spieler vom Server trennen |
| `BanPlayer <SteamID64> login` | Spieler aussperren |
| `PermitPlayer <SteamID64> login` | Bann aufheben |
| `BanPlayer <SteamID64> chat` | Spieler stummschalten (Chat) |
| `PermitPlayer <SteamID64> chat` | Stummschaltung aufheben |
| `GotoPlayerByAccount <SteamID64>` | Zu einem Spieler teleportieren |

> [!WARNING]
> Der Unterschied liegt im zweiten Wert: `login` steuert den Zugang zum Server, `chat` nur die Kommunikation. Möchtest Du einen Spieler komplett aussperren, verwende `login`.

> [!NOTE]
> **Wo werden Banns gespeichert?**
>
> Admins und Banns liegen in der Datei `Saved/GameStates/Accounts/GM.csv` Deines Servers. Bearbeite sie nicht von Hand – hebe Banns über den Befehl `PermitPlayer` auf, damit die Daten konsistent bleiben. Bei einem Backup Deines Spielstands wird die Datei automatisch mitgesichert, siehe [Savegame herunterladen](/tutorials/gameserver/the-front/download-savegame).
