---
slug: "spieler-kicken-und-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem SCP: Secret Laboratory Server"
description: "Spieler auf einem SCP: Secret Laboratory Server kicken und bannen"
tags: []
date: "2026-08-24"
visibility: "public"
cta: "gameserver"
product_keys: ["scp-secret-laboratory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 14
related: ["gameserver/scp-secret-laboratory/install-labapi-plugins", "gameserver/scp-secret-laboratory/join-server", "gameserver/scp-secret-laboratory/plugins-not-loading", "gameserver/scp-secret-laboratory/set-up-reserved-slots"]
---

Störende Spieler entfernst Du entweder über das Remote-Admin-Panel im Spiel oder per Befehl – und die Befehle funktionieren mit vorangestelltem `/` auch direkt in der Konsole der Verwaltung.

## Voraussetzung: Rang mit Admin-Rechten

Kicken und Bannen ist nur mit einem Rang möglich, der Moderations-Rechte besitzt (z.B. `moderator`, `admin` oder `owner`). Wie Du Dir selbst oder Deinem Team einen Rang zuweist, zeigt die Anleitung [Ränge vergeben](/tutorials/gameserver/scp-secret-laboratory/assign-ranks).

## Weg 1: Remote-Admin-Panel im Spiel

1. **Remote-Admin-Panel öffnen**\
   Drücke im Spiel die Taste **M**, um das Remote-Admin-Panel zu öffnen.

2. **Spieler auswählen**\
   Wähle in der linken Spalte **Players** den Spieler aus, den Du kicken oder bannen möchtest.

3. **Kick oder Ban ausführen**\
   Wähle die gewünschte Aktion aus: Bei einem Kick kannst Du optional einen Grund angeben, bei einem Ban legst Du zusätzlich die Dauer fest. Bestätige die Aktion anschließend.

## Weg 2: Befehle

Die folgenden Befehle gibst Du in die Befehlszeile des Remote-Admin-Panels ein.

> [!NOTE]
> Die Konsole in der Verwaltung ist die LocalAdmin-Konsole Deines Servers. Alle hier gezeigten Befehle funktionieren auch dort, wenn Du ihnen ein `/` voranstellst (z.B. `/kick Peter Beleidigungen`) – Du kannst also moderieren, ohne selbst im Spiel zu sein. Mehr dazu in [Remote Admin nutzen](/tutorials/gameserver/scp-secret-laboratory/use-remote-admin).

| Befehl | Beschreibung |
|--------|--------------|
| `kick <Spieler> <Grund>` | Wirft einen Spieler vom Server |
| `ban <Spieler> <Dauer> <Grund>` | Bannt einen verbundenen Spieler |
| `offlineban <SteamID64> <Dauer> <Grund>` | Bannt einen Spieler, der gerade nicht verbunden ist (Kurzform: `oban`) |
| `unban id <SteamID64>` | Hebt einen Ban anhand der SteamID64 auf |
| `unban ip <IP-Adresse>` | Hebt einen IP-Ban auf |
| `banlist` | Zeigt alle aktiven Bans an |

Als `<Spieler>` kannst Du den Spielernamen, die Spieler-ID aus der Spielerliste des Remote-Admin-Panels oder die SteamID64 mit vorangestelltem `@` angeben. Die [SteamID64](/tutorials/gameserver/steamid64-find-out) eines Spielers findest Du über die verlinkte Anleitung heraus.

### Ban-Dauer

Die Dauer gibst Du als Zahl in Minuten an. Mit den Suffixen `m` (Minuten), `h` (Stunden) und `d` (Tage) kannst Du die Einheit auch explizit festlegen. Eine Dauer von `0` erzeugt einen permanenten Ban.

```text
kick Peter Beleidigungen im Voice-Chat
ban Peter 1h Beleidigungen im Voice-Chat
ban @76561198012345678 30d Cheating
offlineban 76561198012345678 0 Permanenter Ausschluss
```

> [!TIP]
> Der Befehl `banlist` zeigt Dir zu jedem Ban die hinterlegte ID an. Übernimm die ID für den `unban`-Befehl genau so, wie sie in der Liste steht.

> [!NOTE]
> Kicks und Bans wirken sofort – ein Neustart des Servers ist nicht nötig.
