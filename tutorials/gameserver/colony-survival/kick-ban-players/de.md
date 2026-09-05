---
slug: "spieler-kicken-bannen"
language: "de"
title: "So bannst Du Spieler auf Deinem Colony Survival Server"
description: "Spieler auf einem Colony Survival Server bannen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["colony-survival"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 7
related: ["gameserver/colony-survival/add-savegame", "gameserver/colony-survival/create-backup", "gameserver/colony-survival/download-savegame", "gameserver/colony-survival/join-server"]
---

Störende Spieler sperrst Du in Colony Survival über die **Blacklist** Deines Servers aus. Zusätzlich kannst Du Deinen Server mit einer **Whitelist** von vornherein nur für bestimmte Spieler öffnen. Beides steuerst Du direkt im Chat im Spiel.

> [!CAUTION]
> **Colony Survival kennt keinen Kick**
>
> Es gibt **keinen Befehl, um einen Spieler nur kurzzeitig vom Server zu werfen**. Der `Kick`-Knopf im Spiel gehört zur Verwaltung einer Kolonie und entfernt lediglich einen Mitbesitzer aus dieser Kolonie – der Spieler bleibt dabei auf dem Server. Wer den Server verlassen soll, muss über die Blacklist gesperrt werden.

> [!NOTE]
> Du benötigst Rechte der Gruppe `god`, um Blacklist und Whitelist zu verwalten. Siehe [Admin hinzufügen](/tutorials/gameserver/colony-survival/add-admin).

## Spieler bannen

1. **Chat öffnen**\
   Drücke im Spiel `T`, um den Chat zu öffnen.

2. **Spieler auf die Blacklist setzen**\
   Gib den folgenden Befehl ein – wahlweise mit dem Spielernamen oder mit der SteamID64:

   ```text
   /blacklist add Sam
   ```

   ```text
   /blacklist add 76561198012345678
   ```

   > [!TIP]
   > Verwende am besten die [SteamID64](/tutorials/gameserver/steamid64-find-out). Sie bleibt immer gleich, auch wenn der Spieler seinen Namen ändert. Namen mit Leerzeichen setzt Du in Anführungszeichen.

3. **Bann prüfen**\
   Lass Dir die aktuelle Liste anzeigen und kontrolliere, ob der Spieler darin steht:

   ```text
   /blacklist
   ```

Gebannte Spieler bekommen beim nächsten Verbindungsversuch die Meldung, dass die Verbindung abgelehnt wurde, weil sie auf der Blacklist stehen.

## Bann aufheben

```text
/blacklist remove 76561198012345678
```

Die komplette Liste leerst Du mit:

```text
/blacklist clear
```

## Server nur für bestimmte Spieler öffnen

Mit der Whitelist drehst Du das Prinzip um: Sobald sie genutzt wird, kommen nur noch gelistete Spieler auf Deinen Server. Alle anderen erhalten beim Verbinden die Meldung, dass sie nicht auf der Whitelist stehen.

```text
/whitelist add 76561198012345678
```

```text
/whitelist remove 76561198012345678
```

```text
/whitelist clear
```

> [!WARNING]
> Trage Dich selbst und alle Mitspieler ein, bevor Du Dich auf die Whitelist verlässt – sonst sperrst Du Dich aus Deiner eigenen Welt aus.

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `/blacklist` | Zeigt alle gebannten Spieler an |
| `/blacklist add <Spieler>` | Sperrt einen Spieler aus |
| `/blacklist remove <Spieler>` | Hebt den Bann wieder auf |
| `/blacklist clear` | Leert die Blacklist |
| `/whitelist` | Zeigt die Whitelist an |
| `/whitelist add <Spieler>` | Nimmt einen Spieler in die Whitelist auf |
| `/whitelist remove <Spieler>` | Entfernt einen Spieler aus der Whitelist |
| `/whitelist clear` | Leert die Whitelist |

> [!NOTE]
> Als `<Spieler>` funktionieren sowohl der Spielername als auch die SteamID64. Ist ein Spieler gerade nicht online, nutze in jedem Fall die SteamID64.

> [!NOTE]
> Der Server speichert Blacklist und Whitelist als Dateien im Savegame-Verzeichnis. Wie diese Dateien genau heißen und aufgebaut sind, hängt von der Spielversion ab – pflege die Listen deshalb über die Befehle im Chat und nicht direkt in der Datei.
