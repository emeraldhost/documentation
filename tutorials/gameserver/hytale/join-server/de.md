---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Hytale Server bei"
description: "Einem Hytale Server beitreten"
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
short_title: "Server beitreten"
sort: 15
related: ["gameserver/hytale/add-mods", "gameserver/hytale/item-loss-on-death", "gameserver/hytale/kick-ban-players", "gameserver/hytale/pause-game-time"]
---

Du trittst Deinem Server über **Direct Connect** bei oder speicherst ihn für spätere Verbindungen in Deiner Server-Liste.

## Verbindungsdaten finden

> [!NOTE]
> Die IP-Adresse und den **Game Port** Deines Servers findest Du in der **Verwaltung** Deines Servers unter der Übersicht. Im Spiel gibst Du beides zusammen ein, getrennt durch einen Doppelpunkt.

## Über Direct Connect

1. **Hytale starten**\
   Öffne den Hytale Launcher und starte das Spiel.

2. **Server-Menü öffnen**\
   Klicke im Hauptmenü auf **Servers**.

3. **Direct Connect wählen**\
   Klicke unten rechts auf **Direct Connect**.

4. **Serveradresse eingeben**\
   Gib die IP-Adresse und den Game Port Deines Servers ein und klicke auf **Connect**:

   ```text
   <IP-Adresse>:<Game Port>
   ```

5. **Passwort eingeben**\
   Ist für Deinen Server ein [Passwort](/tutorials/gameserver/hytale/set-password) gesetzt, fragt Hytale jetzt danach.

## Server speichern

Um den Server für zukünftige Verbindungen zu speichern:

1. **Server hinzufügen**\
   Klicke im Server-Menü unten rechts auf **Add Server**.

2. **Server-Details eingeben**\
   Gib die Adresse im Format `<IP-Adresse>:<Game Port>` in das Feld **Connection Address** ein und vergib einen Namen.

3. **Speichern**\
   Klicke auf **Add Server**. Der Server erscheint nun in Deiner Server-Liste.

> [!NOTE]
> Hytale unterstützt derzeit keine SRV-Einträge. Verbindest Du Dich über eine eigene Domain, gib den Port daher immer mit an, z.B. `play.example.com:<Game Port>`.

> [!NOTE]
> Dein Server erscheint nicht automatisch in der **Server Discovery**, der offiziellen Serverliste im Spiel. Server für diese Liste werden im Hytale-Account unter **Server Profiles** eingereicht und von Hytale manuell geprüft. Für den Beitritt über Direct Connect oder Deine Server-Liste ist das nicht nötig.

## Wenn die Verbindung nicht klappt

> [!WARNING]
> Kommt keine Verbindung zustande, prüfe der Reihe nach:
>
> - Läuft Dein Server? Er ist bereit, sobald in der Konsole der **Verwaltung** `Hytale Server Booted!` erscheint. Direkt nach einem Start oder einem Update kann das einen Moment dauern.
> - Stimmen die Versionen überein? Dein Hytale-Client und Dein Server müssen exakt dieselbe Protokollversion nutzen. Nach einem Hytale-Update kannst Du erst wieder beitreten, wenn auch Dein Server aktualisiert ist. Ist in der **Verwaltung** unter **Einstellungen** das Feld **Auto Update** aktiv und steht das Feld **Hytale Version** auf `latest` (beides Standard), prüft Dein Server bei jedem Start, ob eine neue Version verfügbar ist. Ein Neustart reicht dann aus.
> - Passt die Patchline? Spielst Du im Launcher die Pre-Release-Version, passt Dein Client in der Regel nicht zu einem Server auf der Patchline `release`. Die Patchline Deines Servers stellst Du in der **Verwaltung** unter **Einstellungen** im Feld **Hytale Patchline** ein (`release` oder `pre-release`).
> - Ist die [Whitelist](/tutorials/gameserver/hytale/enable-whitelist) aktiv? Dann können nur freigeschaltete Spieler beitreten.

> [!IMPORTANT]
> Erstelle ein [Backup](/tutorials/gameserver/hytale/create-backup), bevor Du die Patchline wechselst. Eine Welt, die einmal auf einer neueren Pre-Release-Version geladen wurde, lässt sich auf einem älteren Server unter Umständen nicht mehr öffnen.
