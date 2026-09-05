---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Terraria tModLoader Server"
description: "Spieler auf einem Terraria tModLoader Server kicken und bannen"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["terraria-tmodloader"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 7
related: ["gameserver/terraria-tmodloader/add-world", "gameserver/terraria-tmodloader/create-backup", "gameserver/terraria-tmodloader/download-savegame", "gameserver/terraria-tmodloader/join-server"]
---

Du kannst Spieler über die Serverkonsole kicken und bannen.

## Spieler kicken

Gib folgenden Befehl in der Serverkonsole ein:

```text
kick <Name>
```

Der Spieler wird vom Server entfernt, kann aber erneut beitreten.

## Spieler bannen

```text
ban <Name>
```

Der Spieler wird dauerhaft vom Server ausgeschlossen.

## Spieler entbannen

Es gibt keinen Konsolenbefehl zum Entbannen. Du musst die Banliste manuell bearbeiten:

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **banlist.txt bearbeiten**\
   Öffne die Datei `banlist.txt` und entferne die Zeile mit dem Spielernamen.

4. **Server starten**\
   Starte Deinen Server.

## Alle Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `kick <Name>` | Spieler kicken |
| `ban <Name>` | Spieler bannen |
