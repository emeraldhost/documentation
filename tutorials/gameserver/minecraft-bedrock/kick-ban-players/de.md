---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Minecraft Bedrock Edition Server"
description: "Spieler auf einem Minecraft Bedrock Edition Server kicken und bannen"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["minecraft-bedrock"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 11
related: ["gameserver/minecraft-bedrock/increase-slots", "gameserver/minecraft-bedrock/join-server", "gameserver/minecraft-bedrock/upload-world", "gameserver/minecraft-bedrock/use-tp-command"]
---

Du kannst Spieler per Ingame-Befehl oder über die Serverkonsole kicken und bannen.

## Spieler kicken

Gib folgenden Befehl im Chat oder in der Serverkonsole ein:

```text
/kick <Name>
```

Der Spieler wird vom Server entfernt, kann aber erneut beitreten.

## Spieler bannen

```text
/ban <Name>
```

Der Spieler wird dauerhaft vom Server ausgeschlossen.

## Spieler entbannen

Es gibt keinen Ingame-Befehl zum Entbannen. Du musst die Banliste manuell bearbeiten:

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Banliste bearbeiten**\
   Öffne die Datei `banned-players.json` oder `banned-ips.json` und entferne den Eintrag des Spielers.

4. **Server starten**\
   Starte Deinen Server.

## Alle Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `/kick <Name>` | Spieler kicken |
| `/ban <Name>` | Spieler bannen |
