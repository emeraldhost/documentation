---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Terraria tShock Server bei"
description: "Einem Terraria tShock Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["terraria-tshock"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 6
related: ["gameserver/terraria-tshock/add-savegame", "gameserver/terraria-tshock/create-backup", "gameserver/terraria-tshock/download-savegame", "gameserver/terraria-tshock/kick-ban-players"]
---

tShock läuft ausschließlich auf der Serverseite. Du verbindest Dich deshalb mit dem ganz normalen Terraria-Client, genau wie bei einem gewöhnlichen Terraria-Server: Einen Ingame-Serverbrowser für dedizierte Server gibt es nicht, Du verbindest Dich direkt über die IP-Adresse und den Port Deines Servers.

## Verbindungsdaten finden

> [!IMPORTANT]
> Für die Verbindung benötigst Du die **IP-Adresse** und den **Game Port** Deines Servers. Beides findest Du in der **Verwaltung** Deines Servers. tShock nutzt nur einen einzigen Port über **TCP** – einen Query Port gibt es nicht.

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
   Im nächsten Feld trägst Du den **Game Port** ein, den Dir die Verwaltung Deines Servers anzeigt.

7. **Verbinden**\
   Bestätige die Eingabe, um dem Server beizutreten. Ist auf dem Server ein Passwort gesetzt, wirst Du danach zur Eingabe aufgefordert.

> [!NOTE]
> Die Optionen **Join** und **Join via Steam** im Multiplayer-Menü sind für Spiele gedacht, die ein Freund direkt aus dem Spiel heraus hostet. Für Deinen dedizierten Server benötigst Du immer **Join via IP**.

## Anmelden auf dem Server

Ein tShock-Server verlangt standardmäßig **keine Anmeldung** – Du kommst also ohne Account auf den Server und spielst wie auf einem normalen Terraria-Server.

Hast Du Dir einen Account angelegt, meldest Du Dich im Ingame-Chat an:

```text
/login <Benutzername> <Passwort>
```

> [!TIP]
> Wie Du Dir einen Account mit Adminrechten anlegst, erfährst Du unter [Admin hinzufügen](/tutorials/gameserver/terraria-tshock/add-admin).

## Serverpasswort

> [!NOTE]
> Das Serverpasswort eines tShock-Servers steht nicht in der Verwaltung, sondern im Wert `ServerPassword` in der Datei `/tshock/config.json`. Ist dort nichts eingetragen, kann jeder ohne Passwort beitreten. Nach einer Änderung genügt der Befehl `reload` in der Serverkonsole – ein Neustart ist nicht nötig.

## Häufige Ursachen für einen fehlgeschlagenen Beitritt

> [!WARNING]
> Client und Server müssen **dieselbe Terraria-Version** verwenden. Jede tShock-Version ist für eine ganz bestimmte Terraria-Version gebaut; passt Deine Spielversion nicht dazu, lehnt der Server die Verbindung mit einem Versionshinweis ab. Welche tShock-Version installiert wird, steuerst Du in der Verwaltung über das Feld **tShock Version**.

> [!IMPORTANT]
> Ein tShock-Server wird mit dem **normalen Terraria-Client** betreten – nicht mit dem tModLoader-Client. Umgekehrt kannst Du mit dem normalen Client keinem tModLoader-Server beitreten. Für einen tModLoader-Server brauchst Du den passenden Servertyp: [Terraria tModLoader Server beitreten](/tutorials/gameserver/terraria-tmodloader/join-server).
