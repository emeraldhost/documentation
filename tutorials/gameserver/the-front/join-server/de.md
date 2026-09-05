---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem The Front Server bei"
description: "Einem The Front Server beitreten"
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
short_title: "Server beitreten"
sort: 5
related: ["gameserver/the-front/add-savegame", "gameserver/the-front/create-backup", "gameserver/the-front/download-savegame", "gameserver/the-front/kick-ban-players"]
---

Deinem The Front Server trittst Du über den Serverbrowser im Spiel bei. Dort suchst Du Deinen Server anhand seines **Namens** und verbindest Dich mit einem Klick.

> [!NOTE]
> Ein Eingabefeld für eine Direktverbindung über IP-Adresse und Port ist in The Front nicht vorgesehen. Gib Deinem Server deshalb einen eindeutigen Namen, den Du in der Serverliste schnell wiederfindest.

## Server im Spiel suchen

1. **The Front starten**\
   Starte The Front auf Deinem PC.

2. **Serverliste öffnen**\
   Klicke im Menü auf **Servers**.

3. **Dedicated Server wählen**\
   Wechsle auf den Reiter **Dedicated Server**. Hier werden alle gemieteten und selbst betriebenen Server aufgelistet.

4. **Server suchen**\
   Gib den Namen Deines Servers in das Suchfeld oben rechts ein. Die Liste wird auf passende Treffer eingegrenzt.

   > [!TIP]
   > Den Namen Deines Servers findest Du in der **Verwaltung**. Suche notfalls nur nach einem markanten Teil des Namens – die Suche filtert auch nach Teilbegriffen.

5. **Server als Favorit markieren**\
   Klicke auf das Stern-Symbol links neben Deinem Server. Favorisierte Server stehen beim nächsten Aktualisieren der Liste ganz oben und Du musst nicht erneut suchen.

6. **Verbinden**\
   Klicke Deinen Server an und bestätige im Fenster, das sich öffnet, mit **Connect**.

7. **Passwort eingeben**\
   Hast Du für Deinen Server ein Passwort gesetzt, wirst Du beim Beitreten danach gefragt. Trage es ein und bestätige.

## Server erscheint nicht in der Liste

1. **Server prüfen**\
   Sieh in der **Verwaltung** nach, ob Dein Server tatsächlich läuft. Ein frisch gestarteter Server braucht einen Moment, bis er sich in der Serverliste meldet.

2. **Liste aktualisieren**\
   Aktualisiere die Serverliste im Spiel und suche erneut.

3. **Namen prüfen**\
   Vergleiche die Schreibweise: Suchst Du nach einem Namen mit Tippfehler, bleibt die Liste leer. Suche im Zweifel nur nach einem kurzen, eindeutigen Teil des Namens.

> [!NOTE]
> **Welche Ports nutzt The Front?**
>
> Ein The Front Server belegt vier Ports, die in der Regel direkt aufeinanderfolgend vergeben werden. Die konkreten Werte werden Deinem Server in der **Verwaltung** zugewiesen – verlass Dich immer auf die Zahlen, die dort stehen.
>
> | Port | Verwendung |
> |------|-----------|
> | **Game Port** | Der eigentliche Spielverkehr – darüber läuft Deine Verbindung zum Server |
> | Beacon-Port | Game Port + 1, interne Abfragen des Spiels |
> | **Query Port** | Game Port + 2, darüber meldet sich Dein Server in der Serverliste |
> | Shutdown-Port | Game Port + 3, wird zum sauberen Beenden des Servers genutzt |
>
> Damit Dein Server gefunden wird, muss der **Query Port** erreichbar sein. Verbunden wirst Du anschließend über den **Game Port**.

> [!TIP]
> Möchtest Du auf Deinem Server Adminbefehle nutzen, trägst Du Dich vorher als Admin ein: [Admin hinzufügen](/tutorials/gameserver/the-front/add-admin).
