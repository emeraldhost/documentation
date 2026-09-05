---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Avorion Server bei"
description: "Einem Avorion Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["avorion"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 6
related: ["gameserver/avorion/add-savegame", "gameserver/avorion/create-backup", "gameserver/avorion/download-savegame", "gameserver/avorion/kick-ban-players"]
---

Avorion bietet Dir zwei Wege auf Deinen Server: den Serverbrowser im Spiel oder die Direktverbindung über die IP-Adresse. Die Direktverbindung ist der zuverlässigste Weg, weil Dein Server dafür nicht öffentlich gelistet sein muss.

## Verbindungsdaten finden

> [!IMPORTANT]
> Für die Verbindung benötigst Du die **IP-Adresse** und den **Game Port** Deines Servers. Beides findest Du in der **Verwaltung** Deines Servers.

## Direkt über die IP verbinden

1. **Avorion starten**\
   Starte Avorion auf Deinem PC.

2. **Multiplayer öffnen**\
   Wähle im Hauptmenü **Multiplayer**.

3. **Join via IP wählen**\
   Klicke auf **Join via IP**.

4. **Serveradresse eintragen**\
   Trage die IP-Adresse und den Game Port Deines Servers ein, getrennt durch einen Doppelpunkt:

   ```text
   <IP-Adresse>:<Game Port>
   ```

   Die genauen Werte stehen in der **Verwaltung** Deines Servers.

5. **Namen vergeben und beitreten**\
   Vergib zusätzlich einen Namen für den Eintrag und bestätige mit **Add Server**. Der Server wird Deiner Serverliste hinzugefügt und die Verbindung aufgebaut – beim nächsten Mal wählst Du ihn direkt aus der Liste. Über **Join** verbindest Du Dich, ohne den Server dauerhaft zu speichern.

## Über den Serverbrowser

1. **Multiplayer öffnen**\
   Wähle im Hauptmenü **Multiplayer**.

2. **Serverbrowser öffnen**\
   Klicke auf **Browse Servers**.

3. **Server suchen**\
   Suche in der Liste nach dem Namen Deines Servers und tritt ihm per Doppelklick beziehungsweise über **Join** bei.

> [!NOTE]
> Im Serverbrowser erscheint Dein Server nur, wenn er öffentlich gelistet ist. Gesteuert wird das in der **Verwaltung** über die Einstellung **Serverliste** (`true` = gelistet, `false` = nicht gelistet); intern entspricht das dem Startparameter `--listed` beziehungsweise dem Wert `isListed` in der `server.ini`. Findest Du Deinen Server dort nicht, nutze die Direktverbindung über **Join via IP**.

> [!WARNING]
> Nach einem Neustart oder einer Änderung an den Einstellungen dauert es einen Moment, bis der Server wieder erreichbar ist. Prüfe in der **Verwaltung**, ob der Server vollständig gestartet ist, bevor Du Dich verbindest.

> [!TIP]
> Ein Avorion-Server belegt neben dem Game Port zusätzlich einen Query Port sowie Ports für die Steam-Abfrage. Alle Werte werden Deinem Server in der **Verwaltung** zugewiesen. Trage zum Verbinden zuerst den **Game Port** ein – klappt die Verbindung damit nicht, versuche denselben Eintrag mit dem **Query Port**.
