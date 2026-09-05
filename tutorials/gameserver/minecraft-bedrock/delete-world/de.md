---
slug: "welt-loeschen"
language: "de"
title: "So löschst Du eine Welt auf Deinem Minecraft Bedrock Server"
description: "Schritt-für-Schritt-Anleitung, wie Du in Minecraft Bedrock Edition Deine aktuelle Welt löschst und automatisch eine neue generieren lässt."
tags: []
date: "2025-09-09"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
product_keys: ["minecraft-bedrock"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Welt Löschen"
sort: 16
related: ["gameserver/minecraft-bedrock/change-world-seed", "gameserver/minecraft-bedrock/create-backup", "gameserver/minecraft-bedrock/disable-end", "gameserver/minecraft-bedrock/disable-locator-bar"]
---

> [!CAUTION]
> **Achtung**
>
> Wenn Du die Welt löschst, kann sie nicht wiederhergestellt werden. Erstelle vorher ein Backup, falls Du die Welt später erneut benötigst.

1. **Server stoppen**\
   Stoppe Deinen Minecraft Bedrock Edition Server.

2. **Datei-Browser öffnen**\
   Öffne Dein Dashboard, wähle Deinen Server aus und gehe zum Datei-Browser **oder** verbinde Dich per SFTP mit Deinem Server. Eine Anleitung hierzu findest Du hier: [SFTP-Verbindung herstellen](/tutorials/gameserver/establish-sftp-connection).

3. **Ordner finden**\
   Suche im Hauptordner den Ordner `worlds`.

4. **Welt löschen**\
   Lösche dort den Ordner `Bedrock level`.

5. **Server neustarten**\
   Starte Deinen Server neu. Danach wird automatisch eine neue Welt generiert.
