---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem No One Survived Server"
description: "Spieler auf einem No One Survived Server kicken und bannen"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["no-one-survived"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 8
related: ["gameserver/no-one-survived/change-map", "gameserver/no-one-survived/create-backup", "gameserver/no-one-survived/download-savegame", "gameserver/no-one-survived/join-server"]
---

Spieler entfernst Du auf einem No One Survived Server über das **Admin-Panel im Spiel**. Chat- oder Konsolenbefehle sind dafür nicht dokumentiert.

> [!NOTE]
> Die Funktionen stehen nur Spielern zur Verfügung, die sich mit dem Admin-Passwort angemeldet haben. Siehe [Admin hinzufügen](/tutorials/gameserver/no-one-survived/add-admin).

## Spieler kicken

1. **Als Admin beitreten**\
   Tritt Deinem Server bei – siehe [Server beitreten](/tutorials/gameserver/no-one-survived/join-server).

2. **Admin-Panel öffnen**\
   Drücke gleichzeitig `Alt` + `Shift` + `O`, gib das Admin-Passwort ein und bestätige die Eingabe.

3. **Blacklist öffnen**\
   Wechsle im Panel in den Reiter **Blacklist**.

4. **Spielerliste aktualisieren**\
   Klicke auf **Refresh**, damit die aktuell verbundenen Spieler geladen werden.

5. **Spieler kicken**\
   Klicke neben dem gewünschten Spieler auf **Kick Out**. Der Spieler wird vom Server getrennt und kann jederzeit wieder beitreten.

## Spieler bannen

1. **Blacklist öffnen**\
   Öffne das Admin-Panel mit `Alt` + `Shift` + `O`, melde Dich an und wechsle in den Reiter **Blacklist**.

2. **Spielerliste aktualisieren**\
   Klicke auf **Refresh**.

3. **Spieler bannen**\
   Klicke neben dem gewünschten Spieler auf **Add to Blacklist**. Der Spieler wird vom Server getrennt und kann nicht mehr beitreten.

## Bann aufheben

1. **Blacklist öffnen**\
   Öffne das Admin-Panel mit `Alt` + `Shift` + `O`, melde Dich an und wechsle in den Reiter **Blacklist**.

2. **Bann entfernen**\
   Suche den gebannten Spieler in der Liste und klicke daneben auf **Remove**. Danach kann er Deinem Server sofort wieder beitreten.

> [!NOTE]
> Die genaue Bezeichnung der Reiter und Schaltflächen kann sich mit Spiel-Updates ändern. Such im Admin-Panel nach der Übersicht mit den verbundenen und gesperrten Spielern.

> [!WARNING]
> **Spieler muss verbunden sein**
>
> Kicken und Bannen setzt voraus, dass der Spieler in der Liste des Panels auftaucht. Einen Spieler, der gerade nicht auf dem Server ist, kannst Du auf diesem Weg nicht im Voraus sperren.

> [!CAUTION]
> **Sperre Dich nicht selbst aus**
>
> Trägst Du Dich versehentlich selbst in die Blacklist ein, kommst Du nicht mehr auf Deinen Server und damit auch nicht mehr an das Admin-Panel. Eine Datei zum Bearbeiten der Blacklist über SFTP ist für No One Survived **nicht dokumentiert** – gehe deshalb beim Bannen sorgfältig vor.

## Keine Befehle und kein RCON

> [!IMPORTANT]
> Für No One Survived sind **keine Serverkonsole, keine Chat-Befehle und kein RCON** dokumentiert. Alles, was Kicken und Bannen betrifft, läuft über das Admin-Panel im Spiel. Befehle wie `Kick <Spieler>`, `Ban <Spieler>` oder `Unban <Spieler>` tauchen in der offiziellen Dokumentation nicht auf – verlasse Dich nicht auf kursierende Befehlslisten.

> [!TIP]
> Möchtest Du Deinen Server generell nur bestimmten Spielern zugänglich machen, setze ein Server-Passwort und gib es nur an diese Personen weiter. Eine Whitelist gibt es für No One Survived nicht.
