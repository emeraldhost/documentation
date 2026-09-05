---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Nightingale Server bei"
description: "Einem Nightingale Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["nightingale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 5
related: ["gameserver/nightingale/add-savegame", "gameserver/nightingale/create-backup", "gameserver/nightingale/download-savegame", "gameserver/nightingale/kick-ban-players"]
---

Nightingale hat **keinen Serverbrowser**. Du verbindest Dich immer direkt über die **IP-Adresse** und den **Game Port** Deines Servers – beides trägst Du im Spiel in zwei getrennte Felder ein.

## Verbindungsdaten finden

> [!IMPORTANT]
> Die **IP-Adresse** und den **Game Port** Deines Servers findest Du in der **Verwaltung**. Nightingale verbindet sich über den Game Port (UDP). Einen Query Port gibt es bei Nightingale nicht.

## Server beitreten

1. **Nightingale starten**\
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. **Play wählen**\
   Klicke im Hauptmenü auf **Play**.

3. **Charakter auswählen**\
   Wähle auf dem nächsten Bildschirm den Charakter aus, mit dem Du spielen möchtest.

4. **Join a Game öffnen**\
   Wähle anschließend **Join a Game**.

5. **Connection Type umstellen**\
   Stelle das Auswahlfeld **Connection Type** von **Steam** auf **IP/LAN**. Nur damit erreichst Du einen Dedicated Server.

6. **Verbindungsdaten eintragen**\
   Trage die IP-Adresse und den Game Port in die beiden Felder ein – die IP-Adresse in das erste Feld, den Port in das zweite.

   > [!WARNING]
   > IP-Adresse und Port kommen in **getrennte Felder**. Trage nicht beides zusammen mit einem Doppelpunkt in ein einzelnes Feld ein.

7. **Passwort eintragen**\
   Ist für Deinen Server ein Passwort gesetzt, trage es auf demselben Bildschirm in das Passwortfeld ein. Ist keines gesetzt, lässt Du das Feld leer.

8. **Verbinden**\
   Klicke auf **Play**, um die Verbindung herzustellen.

## Warum nicht über Steam?

> [!NOTE]
> Der Verbindungstyp **Steam** ist für Sitzungen gedacht, die ein Mitspieler aus dem laufenden Spiel heraus hostet – dort verbindest Du Dich über Deine Steam-Freundesliste. Ein Dedicated Server taucht dort **nicht** auf. Für Deinen Server nutzt Du immer **IP/LAN**.

## Was beim ersten Beitritt passiert

> [!IMPORTANT]
> Verbindest Du Dich als Erster auf einen noch leeren Server, lädt Dein Client Deinen Charakter **und alle zu ihm gehörenden Realms** automatisch auf den Server hoch. Das ist der offizielle Weg, Deinen Fortschritt vom PC auf den Server zu übertragen.
>
> Möchtest Du das **nicht**, verbinde Dich zuerst mit einem **neu erstellten Charakter**. Danach ist der Server belegt und es wird nichts mehr hochgeladen.

> [!TIP]
> Mehr zum Übertragen und Sichern Deiner Spielstände findest Du unter [Savegame hinzufügen](/tutorials/gameserver/nightingale/add-savegame) und [Savegame herunterladen](/tutorials/gameserver/nightingale/download-savegame).

## Verbindung schlägt fehl

> [!WARNING]
> Prüfe in diesem Fall der Reihe nach:
>
> - Läuft Dein Server? Den Status siehst Du in der **Verwaltung**.
> - Steht **Connection Type** auf **IP/LAN**?
> - Stimmen IP-Adresse und Game Port exakt mit den Werten aus der Verwaltung überein?
> - Hat Dein Server nach einem Update dieselbe Spielversion wie Dein Client? Unterschiedliche Versionen verhindern den Beitritt.
