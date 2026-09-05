---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Terraria Server bei"
description: "Einem Terraria Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["terraria"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 4
related: ["gameserver/terraria/add-savegame", "gameserver/terraria/create-backup", "gameserver/terraria/download-savegame", "gameserver/terraria/kick-ban-players"]
---

Terraria hat keinen Ingame-Serverbrowser für dedizierte Server. Du verbindest Dich stattdessen direkt über die IP-Adresse und den Port Deines Servers.

## Verbindungsdaten finden

> [!WARNING]
> **Wichtig**
>
> Für die Verbindung benötigst Du die **IP-Adresse** und den **Port** Deines Servers. Beides findest Du in der **Verwaltung** Deines Servers. Terraria nutzt nur einen einzigen Port über **TCP** (Standard: `7777`) – einen separaten Query Port gibt es nicht.

## Über Join via IP

1. **Terraria starten**\
   Starte Terraria auf Deinem PC.

2. **Multiplayer öffnen**\
   Wähle im Hauptmenü **Multiplayer**.

3. **Join via IP wählen**\
   Klicke auf **Join via IP**.

4. **Charakter auswählen**\
   Wähle den Charakter aus, mit dem Du auf dem Server spielen möchtest.

5. **IP-Adresse eingeben**\
   Gib die IP-Adresse Deines Servers ein – **ohne** Port:

   > [!TIP]
   > **Beispiel**
   >
   > ```text
   > 123.45.67.89
   > ```

6. **Port eingeben**\
   Im nächsten Feld gibst Du den Port Deines Servers ein:

   > [!TIP]
   > **Beispiel**
   >
   > ```text
   > 7777
   > ```

7. **Verbinden**\
   Bestätige die Eingabe, um dem Server beizutreten. Ist auf dem Server ein Passwort gesetzt, wirst Du danach zur Eingabe aufgefordert.

> [!NOTE]
> Die Optionen **Join** und **Join via Steam** im Multiplayer-Menü sind für Spiele gedacht, die ein Freund direkt aus dem Spiel heraus hostet. Für Deinen dedizierten Server benötigst Du immer **Join via IP**.

> [!WARNING]
> Client und Server müssen **dieselbe Spielversion** verwenden. Weicht Deine Terraria-Version von der des Servers ab, lehnt der Server die Verbindung mit einem Versionshinweis ab. Achte deshalb darauf, dass beide auf demselben Stand sind.

> [!IMPORTANT]
> Normales Terraria und tModLoader sind zwei vollständig getrennte Programme. Mit einem normalen Terraria-Client kannst Du **keinem tModLoader-Server** beitreten – und umgekehrt. Für einen tModLoader-Server brauchst Du den tModLoader-Client: [Terraria tModLoader Server beitreten](/tutorials/gameserver/terraria-tmodloader/join-server).
