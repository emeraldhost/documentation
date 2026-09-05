---
slug: "welt-loeschen"
language: "de"
title: "So löschst Du eine Welt auf einem Minecraft Java Edition Server"
description: "Welt auf einem Minecraft Java Edition Server löschen"
tags: []
date: "2025-09-09"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Welt Löschen"
sort: 25
related: ["gameserver/minecraft/change-world-seed", "gameserver/minecraft/create-backup", "gameserver/minecraft/disable-end", "gameserver/minecraft/disable-nether"]
---

> [!CAUTION]
> **Achtung**
>
> Wenn Du die Welt löschst, kann sie nicht wiederhergestellt werden. Erstelle vorher ein Backup, falls Du die Welt später erneut benötigst.

1. **Server stoppen**\
   Stoppe Deinen Minecraft Java Edition Server.

2. **SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Welt löschen**\
   Suche im Hauptordner den Ordner `world` und lösche diesen.

4. **Server neu starten**\
   Starte Deinen Server neu. Danach wird automatisch eine neue Welt generiert.
