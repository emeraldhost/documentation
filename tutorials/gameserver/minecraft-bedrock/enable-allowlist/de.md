---
slug: "allowlist-aktivieren"
language: "de"
title: "So aktivierst Du die Allowlist auf einem Minecraft Bedrock Server"
description: "Allowlist auf einem Minecraft Bedrock Edition Server aktivieren"
tags: []
date: "2026-07-04"
visibility: "public"
cta: "gameserver"
product_keys: ["minecraft-bedrock"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Allowlist aktivieren"
sort: 1
related: ["gameserver/minecraft-bedrock/disable-nether", "gameserver/minecraft-bedrock/download-world", "gameserver/minecraft-bedrock/grant-op-rights", "gameserver/minecraft-bedrock/increase-slots"]
---

Eine Allowlist ist eine Funktion in Minecraft, die es Serveradministratoren ermöglicht, eine Liste von Spielern zu erstellen, die den Server betreten dürfen, während andere Spieler abgewiesen werden. So hältst Du unerwünschte Spieler fern und lässt nur diejenigen zu, die Du freigegeben hast.

> [!NOTE]
> Auf Bedrock heißt die frühere „Whitelist“ seit Version **1.18.10** **Allowlist**. Der alte Befehl `/whitelist` funktioniert weiterhin als Alias, die aktuelle Bezeichnung ist aber `allowlist` (Datei: `allowlist.json`, `server.properties`-Eintrag: `allow-list`).

## Voraussetzungen

- Zugriff auf die Verwaltung und die Server-Konsole
- Name des Spielers, den Du zur Allowlist hinzufügen möchtest

## Allowlist aktivieren

1. **Server auswählen**\
   Gehe in der Verwaltung auf Deinen Minecraft Bedrock Edition Server.

2. **Datei-Browser öffnen**\
   Öffne den Datei-Browser.

3. **Datei öffnen**\
   Öffne die Datei `server.properties`.

4. **Eintrag suchen**\
   Suche nach folgendem Eintrag:

   ```text
   allow-list=false
   ```

5. **Wert ändern**\
   Ändere den Wert auf `true`:

   ```text
   allow-list=true
   ```

6. **Änderungen speichern**\
   Speichere die Änderungen und starte den Server neu.

## Spieler zur Allowlist hinzufügen

Du kannst Spieler über die **Server-Konsole** in der Verwaltung oder als Spieler mit [OP-Rechten](/tutorials/gameserver/minecraft-bedrock/grant-op-rights) direkt im **Ingame-Chat** hinzufügen.

> [!WARNING]
> In der Server-Konsole werden Befehle **ohne** `/` eingegeben, im Ingame-Chat **mit** `/`.

1. **Konsole oder Chat öffnen**\
   Öffne die Server-Konsole in der Verwaltung, oder öffne als Operator den Ingame-Chat auf dem Server.

2. **Spieler hinzufügen**\
   Gib folgenden Befehl ein und ersetze `<Name>` durch den Namen des Spielers:

   ```text
   allowlist add <Name>
   ```

   Im Ingame-Chat mit vorangestelltem Schrägstrich: `/allowlist add <Name>`.

3. **Allowlist überprüfen**\
   Ab jetzt haben nur Spieler auf der Allowlist Zugang zum Server. Verbinde Dich testweise mit einem Account, der nicht auf der Allowlist steht – die Verbindung sollte abgewiesen werden.

> [!TIP]
> Mit `allowlist remove <Name>` entfernst Du einen Spieler wieder, und `allowlist list` zeigt alle Einträge an. Die Allowlist wird in der Datei `allowlist.json` gespeichert.
