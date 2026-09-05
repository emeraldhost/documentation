---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Enshrouded Server"
description: "Spieler auf einem Enshrouded Server kicken und bannen"
tags: []
date: "2026-04-11"
visibility: "public"
updated: "2026-08-13"
cta: "gameserver"
product_keys: ["enshrouded"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 11
related: ["gameserver/enshrouded/enable-voice-chat", "gameserver/enshrouded/join-server", "gameserver/enshrouded/performance-problems-on-enshrouded-servers", "gameserver/enshrouded/read-server-log"]
---

Enshrouded kennt zwei Wege, einen störenden Spieler von Deinem Server zu entfernen: den **Kick** und den **Bann**. Beides erledigst Du im Spiel, nicht in der Verwaltung. Seit Update 7 landet ein gebannter Spieler auf einer dauerhaften Sperrliste und wird bei jedem weiteren Beitrittsversuch automatisch abgewiesen.

> [!NOTE]
> Kicken und Bannen darf nur, wer in einer Gruppe mit dem Recht `canKickBan` spielt. Wie Du so eine Gruppe einrichtest und ihr beim Beitritt zugeordnet wirst, liest Du unter [Admin hinzufügen](/tutorials/gameserver/enshrouded/add-admin).

## Kick oder Bann?

| Aktion | Wirkung |
|--------|---------|
| Kick | Entfernt den Spieler sofort vom Server. Er kann wieder beitreten, sobald der Host eine neue Sitzung geöffnet hat. |
| Bann | Entfernt den Spieler vom Server und setzt ihn auf eine dauerhafte Sperrliste. Versucht er später erneut beizutreten, weist der Server ihn automatisch ab – so lange, bis Du seinen Namen wieder von der Liste nimmst. |

Der Bann funktioniert sowohl in Peer-to-Peer-Sitzungen als auch auf dedizierten Servern wie Deinem.

## Spieler kicken oder bannen

1. **Server beitreten**\
   Verbinde Dich wie unter [Server beitreten](/tutorials/gameserver/enshrouded/join-server) beschrieben mit Deinem Server. Gib dabei das Passwort einer Gruppe ein, die das Recht `canKickBan` besitzt.

2. **Spielerliste öffnen**\
   Öffne im Spielmenü den Reiter **Social**. Dort siehst Du alle Spieler, die gerade in Deiner Welt unterwegs sind, samt ihrer Rechte auf dem Server.

3. **Spieler auswählen**\
   Wähle den Spieler aus, den Du entfernen möchtest.

4. **Kicken oder bannen**\
   Entscheide Dich für den Kick oder den Bann. Der Kick entfernt den Spieler nur aus der laufenden Sitzung, der Bann trägt ihn zusätzlich in die Sperrliste ein.

> [!WARNING]
> Ein Kick ist keine dauerhafte Sperre. Soll ein Spieler gar nicht mehr auf Deinen Server kommen, banne ihn, statt ihn zu kicken.

## Bann aufheben

Dasselbe Fenster, über das Du einen Spieler auf die Sperrliste setzt, zeigt Dir auch die komplette Sperrliste und hebt Sperren wieder auf.

1. **Sperrliste öffnen**\
   Öffne im Spielmenü wieder den Reiter **Social** und rufe dort die Sperrliste auf. Sie zeigt alle Namen, die aktuell für Deinen Server gesperrt sind.

2. **Spieler freigeben**\
   Wähle den gewünschten Namen aus und hebe die Sperre auf. Danach kann der Spieler Deinem Server wieder beitreten.

> [!NOTE]
> Die Sperrliste ist dauerhaft. Ein einmal gebannter Spieler bleibt gesperrt, bis Du seinen Namen selbst wieder entfernst.

## Zugang über Passwörter steuern

Der Bann trifft einzelne Spieler. Wer überhaupt auf Deinen Server kommt und mit welchen Rechten, steuerst Du über die Gruppen-Passwörter im Abschnitt `userGroups` der Datei `enshrouded_server.json`. Vergibst Du dort ein neues Passwort, kommen nur noch Spieler herein, die es kennen. Wie Du die Passwörter änderst, liest Du unter [Server Passwort ändern](/tutorials/gameserver/enshrouded/change-server-password).

> [!IMPORTANT]
> In der Verwaltung kannst Du kein Server-Passwort setzen. Passwörter vergibst Du bei Enshrouded ausschließlich über den Abschnitt `userGroups` in der `enshrouded_server.json`. Stoppe Deinen Server, bevor Du die Datei bearbeitest – sonst wird Deine Änderung überschrieben.

> [!TIP]
> Ein Passwortwechsel sperrt alle aus, die das alte Passwort kannten. Willst Du nur einen einzelnen Spieler loswerden, ist der Bann der schnellere Weg.
