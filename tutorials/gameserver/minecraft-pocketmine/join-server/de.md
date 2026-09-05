---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Minecraft PocketMine Edition Server bei"
description: "Einem Minecraft PocketMine Edition Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft-pocketmine"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 6
related: ["gameserver/minecraft-pocketmine/add-savegame", "gameserver/minecraft-pocketmine/create-backup", "gameserver/minecraft-pocketmine/download-savegame", "gameserver/minecraft-pocketmine/kick-ban-players"]
---

PocketMine-MP ist eine Serversoftware für Minecraft Bedrock Edition. Du verbindest Dich also mit einem ganz normalen Bedrock Client, zum Beispiel unter Windows, Android oder iOS. Der Server wird dort einmalig manuell eingetragen.

## Verbindungsdaten finden

> [!NOTE]
> Die IP-Adresse und den Game Port Deines Servers findest Du in der **Verwaltung** Deines Servers. Trage im Spiel immer genau diesen Game Port ein.

> [!IMPORTANT]
> PocketMine-MP beantwortet Serverabfragen über denselben UDP-Port, auf dem auch das Spiel läuft. Einen getrennten Query Port zum Verbinden gibt es nicht – wer versucht, einen anderen Port einzutragen, kommt nicht auf den Server.

## Server im Spiel hinzufügen

1. **Minecraft starten**\
   Starte Minecraft Bedrock Edition auf Deinem Gerät.

2. **Spielen öffnen**\
   Wähle im Hauptmenü **Play** beziehungsweise **Spielen**.

3. **Reiter Server öffnen**\
   Wechsle in den Reiter **Servers** beziehungsweise **Server**.

4. **Server hinzufügen**\
   Scrolle nach unten und wähle **Add Server** beziehungsweise **Server hinzufügen**.

5. **Verbindungsdaten eintragen**\
   Trage einen frei wählbaren Servernamen sowie die IP-Adresse und den Game Port aus der Verwaltung ein:

   ```text
   Server Name:    Mein PocketMine Server
   Server Address: 123.45.67.89
   Port:           Game Port aus der Verwaltung
   ```

6. **Speichern**\
   Speichere den Eintrag. Dein Server erscheint anschließend in der Liste unter **Additional Servers** beziehungsweise **Weitere Server**.

7. **Beitreten**\
   Wähle Deinen Server aus und klicke auf **Join Server** beziehungsweise **Server beitreten**.

## Warum Dein Server nicht in der Serverliste auftaucht

> [!NOTE]
> Im Reiter **Server** listet Minecraft unter „Featured Servers“ ausschließlich die großen Partner-Server von Mojang. Eigene Server – egal ob gemietet oder selbst betrieben – erscheinen dort grundsätzlich nicht. Du erreichst Deinen Server nur über den manuellen Eintrag mit IP-Adresse und Game Port.

## Anmeldung mit Microsoft-Konto

> [!NOTE]
> PocketMine-MP prüft standardmäßig die Xbox-Authentifizierung Deiner Spieler. Jeder Spieler muss also in seinem Minecraft Client mit einem Microsoft- beziehungsweise Xbox-Konto angemeldet sein. Gesteuert wird das über den Eintrag `xbox-auth` in der Datei `server.properties` im Hauptordner Deines Servers.

## Beitritt von Konsolen

> [!WARNING]
> Auf Xbox, PlayStation und Nintendo Switch lassen sich keine eigenen Server-Adressen eintragen. Spieler auf diesen Konsolen können sich nur über einen speziellen DNS-Dienst oder über eine LAN-Verbindung mit Deinem Server verbinden.

## Minecraft Java Edition

> [!IMPORTANT]
> Clients der **Minecraft Java Edition** können einem PocketMine-Server nicht beitreten. Beide Editionen nutzen unterschiedliche Netzwerkprotokolle – Bedrock kommuniziert über UDP, Java über TCP. Es existieren Plugins, die eine teilweise Unterstützung nachrüsten; laut offizieller PocketMine-Dokumentation ist diese aber ausdrücklich nur teilweise und kein vollwertiger Ersatz.
