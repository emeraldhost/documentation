---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Quake Live Server"
description: "Spieler auf einem Quake Live Server kicken und bannen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["quake-live"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 5
related: ["gameserver/quake-live/add-admin", "gameserver/quake-live/add-mods", "gameserver/quake-live/create-backup", "gameserver/quake-live/join-server"]
---

Spieler entfernst Du über die **Konsole** Deines Servers in der Verwaltung oder direkt im Spiel, wenn Du dort Admin- beziehungsweise Moderatorenrechte besitzt.

> [!NOTE]
> Wie Du Dir und anderen Spielern Rechte gibst, erfährst Du unter [Admin hinzufügen](/tutorials/gameserver/quake-live/add-admin).

## Client-ID herausfinden

Alle folgenden Befehle erwarten die **Client-ID** – die Nummer, die der Server einem verbundenen Spieler zuweist.

1. **Auf Deinen Server verbinden**\
   Verbinde Dich im Spiel auf Deinen Server und öffne dort die Konsole.

2. **Spielerliste abrufen**\
   Gib folgenden Befehl ein:

   ```text
   /players
   ```

   Die Ausgabe zeigt Dir alle verbundenen Spieler mit ihrer Client-ID und ihrer SteamID64.

> [!NOTE]
> In der Konsole Deines Servers gibst Du die Befehle ohne führendes `/` ein. Im Spiel schreibst Du dieselben Befehle mit einem führenden `/`, also zum Beispiel `/tempban 3`.

## Spieler entfernen

Quake Live kennt keinen eigenen `kick`-Befehl. Um einen Spieler zu entfernen, nutzt Du stattdessen `tempban`:

```text
tempban 3
```

Der Spieler wird vom Server entfernt und kann bis zum Ende der laufenden Map nicht wieder beitreten. Danach ist der Zugang wieder frei.

> [!WARNING]
> Häufig kursierende Schreibweisen wie `kick <Spielername>` funktionieren auf einem Quake Live Server nicht – ein `kick`-Befehl ist dort weder in der Serverkonsole noch im Spiel vorhanden. Ein Kick ist nur als Abstimmung der Spieler vorgesehen (`callvote kick` beziehungsweise `callvote clientkick`). Als Admin entfernst Du Spieler über `tempban` beziehungsweise `ban`.

## Spieler bannen

```text
ban 3
```

Der Spieler wird sofort entfernt und dauerhaft ausgesperrt. Der Bann wird in der Datei `/baseq3/access.txt` gespeichert, und zwar in derselben Form wie die Adminrechte:

```text
76561198012345678|ban
```

## Bann aufheben

Ist der Spieler noch verbunden oder verbindet er sich gerade neu, hebst Du den Bann direkt über die Konsole auf:

```text
unban 3
```

Für einen Spieler, der nicht auf dem Server ist, entfernst Du den Eintrag aus der Datei:

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **access.txt bearbeiten**\
   Öffne folgende Datei und lösche die Zeile mit der betroffenen SteamID64 und dem Zusatz `|ban`:

   ```text
   /baseq3/access.txt
   ```

4. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!IMPORTANT]
> Bearbeite die `access.txt` nur bei gestopptem Server. Der Server schreibt die Liste vor jedem Map-Ladevorgang neu – Änderungen im laufenden Betrieb gehen dabei verloren.

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `/players` (im Spiel) | Verbundene Spieler mit Client-ID und SteamID64 anzeigen |
| `tempban <Client-ID>` | Spieler bis zum Ende der Map vom Server entfernen |
| `ban <Client-ID>` | Spieler dauerhaft aussperren |
| `unban <Client-ID>` | Bann aufheben |
| `mute <Client-ID>` | Spieler stummschalten |
| `unmute <Client-ID>` | Stummschaltung aufheben |
| `put <Client-ID> <red\|blue\|spectator>` | Spieler in ein Team oder zu den Zuschauern verschieben |
| `lock [team]` / `unlock [team]` | Teams sperren beziehungsweise wieder freigeben |
| `pause` / `unpause` | Match anhalten und fortsetzen |
| `forceshuffle` | Teams neu mischen |
| `opsay <Text>` | Nachricht als Serverbetreiber an alle Spieler senden |
| `map <Map> <Factory>` | Map und Spielmodus wechseln |
| `quit` | Server beenden |

## Kick-Abstimmungen einschränken

Spieler können sich per `callvote kick` gegenseitig zur Abstimmung stellen. Das kannst Du unterbinden.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **server.cfg öffnen**\
   Öffne per [SFTP](/tutorials/gameserver/establish-sftp-connection) folgende Datei:

   ```text
   /baseq3/server.cfg
   ```

3. **Abstimmung deaktivieren**\
   Für `g_voteFlags` addierst Du die Werte der Abstimmungen, die Du sperren möchtest. Kick-Abstimmungen haben den Wert `16`:

   ```text
   set g_voteFlags "16"
   ```

   Möchtest Du Abstimmungen komplett abschalten, setzt Du stattdessen:

   ```text
   set g_allowVote "0"
   ```

4. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!NOTE]
> **Werte für g_voteFlags**
>
> | Wert | Gesperrte Abstimmung |
> |------|----------------------|
> | `1` | map |
> | `2` | map_restart |
> | `4` | nextmap |
> | `8` | gametype (Factory-Angabe bei `callvote map`) |
> | `16` | kick |
> | `32` | timelimit |
> | `64` | fraglimit |
> | `128` | shuffle |
> | `256` | teamsize |
> | `512` | cointoss/random |
> | `1024` | loadouts |
> | `2048` | Abstimmung am Spielende |
> | `4096` | ammo (global) |
> | `8192` | timers (Item) |
>
> Um zum Beispiel Kick- und Map-Abstimmungen zu sperren, rechnest Du `16 + 1 = 17`.
