---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Unturned Server"
description: "Spieler auf einem Unturned Server kicken und bannen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["unturned"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 7
related: ["gameserver/unturned/add-savegame", "gameserver/unturned/create-backup", "gameserver/unturned/download-savegame", "gameserver/unturned/join-server"]
---

Spieler entfernst Du auf einem Unturned Server über Befehle – entweder in der **Konsole** der Verwaltung oder als Admin direkt im Spielchat. Die Befehle wirken sofort, ein Neustart ist nicht nötig.

> [!WARNING]
> **Voraussetzung**
>
> Für die Befehle im Spielchat brauchst Du Adminrechte. Hier findest Du eine Anleitung, wie Du einen [Admin hinzufügst](/tutorials/gameserver/unturned/add-admin). In der Konsole der Verwaltung funktionieren die Befehle immer.

> [!TIP]
> Hier findest Du eine Anleitung, wie Du die [SteamID64](/tutorials/gameserver/steamid64-find-out) eines Spielers herausfindest.

## Befehle eingeben

1. **Konsole oder Chat öffnen**\
   Öffne die **Konsole** in der Verwaltung Deines Servers oder – als Admin im Spiel – den Chat.

2. **Befehl eingeben**\
   In der Konsole gibst Du den Befehl ohne Präfix ein, im Spielchat mit einem vorangestellten `/` oder `@`:

   ```text
   kick Sam/AFK
   ```

   ```text
   /kick Sam/AFK
   ```

> [!CAUTION]
> **Parameter werden mit Schrägstrich getrennt**
>
> Anders als in vielen anderen Spielen trennt Unturned die Parameter mit einem **`/`** statt mit einem Leerzeichen. `ban Sam Griefing` funktioniert also nicht – richtig ist `ban Sam/Griefing`.

## Spieler kicken

```text
kick <SteamID64|Spielername>/<Grund>
```

Der Spieler wird vom Server getrennt, kann aber jederzeit wieder beitreten. Lässt Du den Grund weg, wird der Spieler mit dem Grund „unspecified“ gekickt.

> [!TIP]
> **Beispiel**
>
> ```text
> kick 76561198012345678/AFK
> ```

## Spieler bannen

```text
ban <SteamID64|Spielername>/<Grund>/<Dauer in Sekunden>
```

Der Spieler wird vom Server geworfen und kann sich für die angegebene Dauer nicht mehr verbinden.

> [!TIP]
> **Beispiel**
>
> ```text
> ban 76561198012345678/Griefing/86400
> ```
>
> Das bannt den Spieler für einen Tag (86.400 Sekunden).

> [!NOTE]
> **Dauer weglassen**
>
> Gibst Du keine Dauer an, wird der Spieler für 31.536.000 Sekunden gebannt – das entspricht 365 Tagen. Für einen längeren Ausschluss trägst Du einen entsprechend größeren Wert in Sekunden ein.

| Dauer | Wert in Sekunden |
|-------|------------------|
| 1 Stunde | `3600` |
| 1 Tag | `86400` |
| 7 Tage | `604800` |
| 30 Tage | `2592000` |
| 365 Tage | `31536000` |

## Bann aufheben

```text
unban <SteamID64>
```

> [!WARNING]
> Beim Entbannen funktioniert **nur die SteamID64** – der Spielername nicht, weil der Spieler nicht mehr auf dem Server ist. Notiere Dir die SteamID64 deshalb, bevor Du jemanden bannst.

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|--------------|
| `kick <SteamID64\|Spielername>/<Grund>` | Spieler vom Server trennen |
| `ban <SteamID64\|Spielername>/<Grund>/<Sekunden>` | Spieler aussperren |
| `unban <SteamID64>` | Bann aufheben |
| `admin <SteamID64\|Spielername>` | Spieler zum Admin machen |
| `unadmin <SteamID64\|Spielername>` | Adminrechte entziehen |
| `save` | Spielstand speichern |
| `shutdown` | Spielstand speichern und Server herunterfahren |

## Bannliste

> [!WARNING]
> **Bannliste über die Befehle pflegen**
>
> Banns werden unter `/Servers/<ServerID>/Server/Blacklist.dat` gespeichert. Banne und entbanne ausschließlich über die Befehle `ban` und `unban` – so bleibt die Liste garantiert gültig. Möchtest Du alle Banns auf einen Schlag aufheben, kannst Du die Datei bei gestopptem Server auch löschen.

## Server nur für bestimmte Spieler öffnen

> [!NOTE]
> **Whitelist**
>
> Unturned kennt zusätzlich den Konfigurationsbefehl `Whitelisted` für die `Commands.dat`. Damit ist Dein Server nur noch für freigegebene Spieler zugänglich. Wie Du Spieler auf diese Liste setzt, ist offiziell nicht dokumentiert – möchtest Du Deinen Server einfach nur privat halten, ist ein Server-Passwort der unkompliziertere Weg.
