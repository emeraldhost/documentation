---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Longvinter Server"
description: "Spieler auf einem Longvinter Server kicken und bannen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["longvinter"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 6
related: ["gameserver/longvinter/add-savegame", "gameserver/longvinter/create-backup", "gameserver/longvinter/download-savegame", "gameserver/longvinter/join-server"]
---

Spieler entfernst Du auf einem Longvinter Server über das **Admin-Panel im Spiel**. Chat- oder Konsolenbefehle gibt es dafür nicht.

> [!NOTE]
> Du benötigst Adminrechte, um das Admin-Panel zu öffnen. Siehe [Admin hinzufügen](/tutorials/gameserver/longvinter/add-admin).

## Spieler kicken oder bannen

1. **Als Admin beitreten**\
   Verbinde Dich mit Deinem Server – siehe [Server beitreten](/tutorials/gameserver/longvinter/join-server).

2. **Admin-Panel öffnen**\
   Drücke `ESC` und klicke oben links auf **Admin panel**.

3. **Spielerliste öffnen**\
   Wechsle auf den Reiter **Current Players**. Dort siehst Du alle Spieler, die aktuell auf Deinem Server sind.

4. **Spieler auswählen**\
   Klicke beim gewünschten Spieler auf das **Plus-Symbol**.

5. **Aktion wählen**\
   Wähle **Kick** oder **Ban**:

   - **Kick** trennt den Spieler vom Server. Er kann jederzeit wieder beitreten.
   - **Ban** sperrt den Spieler dauerhaft aus. Er kann sich erst wieder verbinden, wenn Du den Bann aufhebst.

## Bann aufheben

1. **Admin-Panel öffnen**\
   Drücke im Spiel `ESC` und klicke oben links auf **Admin panel**.

2. **Bannliste öffnen**\
   Wechsle auf den Reiter **Banned ID's**. Dort werden alle gebannten Spieler mit ihrer EOS ID aufgelistet.

3. **Bann entfernen**\
   Klicke bei der gewünschten EOS ID auf **UnBan**.

> [!NOTE]
> Die Bannliste wird auf Deinem Server gespeichert und bleibt auch nach einem Neustart erhalten. Sie lässt sich ausschließlich im Admin-Panel bearbeiten – einen dokumentierten Weg, alle Banns auf einmal über eine Datei zurückzusetzen, gibt es nicht.

## Keine Kick- und Bann-Befehle im Chat

> [!WARNING]
> Spieler kickst und bannst Du ausschließlich über das Admin-Panel. Dafür gibt es **keine Chatbefehle** und **kein RCON**. Auch die Konsole in der Verwaltung nimmt keine Spielbefehle entgegen – sie zeigt nur die Ausgaben des Servers an. Kursierende Befehlslisten mit Einträgen wie `/kick`, `/ban` oder `/announce` sind nicht belegt und funktionieren nicht. Andere Adminbefehle im Chat, etwa `/noclip` oder `/give`, gibt es zwar – zum Entfernen von Spielern führt aber kein Weg am Admin-Panel vorbei.

> [!TIP]
> Möchtest Du Deinen Server nur bestimmten Spielern zugänglich machen, setze in der **Verwaltung** ein Serverpasswort und gib es nur an diese Spieler weiter. Beachte dabei, dass das Passwort nur aus Buchstaben und Zahlen bestehen darf.
