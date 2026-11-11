---
slug: "server-passwort-setzen"
language: "de"
title: "So setzt Du ein Passwort auf Deinem Stormforge Server"
description: "Schütze Deinen Stormforge Server über das Feld Server Passwort im Config-Editor mit einem Passwort."
tags: []
date: "2026-11-11"
visibility: "public"
cta: "gameserver"
product_keys: ["stormforge"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server Passwort setzen"
sort: 8
related: ["gameserver/stormforge/join-server", "gameserver/stormforge/change-max-players", "gameserver/stormforge/change-server-name"]
---

Du kannst Deinen Server mit einem Passwort schützen, sodass nur Spieler mit dem Passwort beitreten können. Auf einem neuen Server ist kein Passwort gesetzt.

## Passwort setzen

1. **Verwaltung öffnen**\
   Öffne die **Verwaltung** Deines Servers.

2. **Config-Editor öffnen**\
   Navigiere zum **Config-Editor**.

3. **Passwort setzen**\
   Trage im Feld **Server Passwort** das gewünschte Passwort ein und speichere die Einstellung.

4. **Server neu starten**\
   Starte Deinen Server neu, damit die Änderung übernommen wird.

> [!IMPORTANT]
> **Erlaubte Zeichen**\
> Das Passwort darf höchstens 32 Zeichen lang sein. Erlaubt sind Buchstaben ohne Umlaute, Ziffern und die Zeichen `_ . ! ? @ # % + = -`. Leerzeichen sind nicht erlaubt.

Gib das Passwort an Deine Mitspieler weiter. Beim Beitritt tragen sie es im Spiel im Feld **Server Password** ein. Den ganzen Ablauf findest Du in [Server beitreten](/tutorials/gameserver/stormforge/join-server).

> [!NOTE]
> Ändere das Passwort immer im **Config-Editor**. Bei jedem Start wird der Wert aus dem Feld **Server Passwort** als `password` in die Datei `settings.json` geschrieben. Eine Änderung von Hand in der Datei wird dabei überschrieben.

## Passwort entfernen

Leere das Feld **Server Passwort**, speichere die Einstellung und starte Deinen Server neu. Ein leeres Feld bedeutet: kein Passwort.

## Jemanden aussperren

Möchtest Du jemanden von Deinem Server fernhalten, ändere das Passwort und starte Deinen Server neu. Der Neustart trennt alle Spieler, und zurück kommt nur, wer das neue Passwort kennt.

> [!TIP]
> Wie viele Spieler gleichzeitig beitreten können, legst Du über [Maximale Spieler ändern](/tutorials/gameserver/stormforge/change-max-players) fest.
