---
slug: "motd-aendern"
language: "de"
title: "So änderst Du die MOTD auf einem Minecraft Java Edition Server"
description: "MOTD auf einem Minecraft Java Edition Server ändern"
tags: []
date: "2023-10-15"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "MOTD ändern"
sort: 7
related: ["gameserver/minecraft/accept-minecraft-eula", "gameserver/minecraft/change-modpack", "gameserver/minecraft/change-server-icon", "gameserver/minecraft/change-simulation-distance"]
---

Die MOTD (Message of the Day) eines Minecraft-Servers ist eine Nachricht, die auf dem Multiplayer-Server angezeigt wird, wenn Du versuchst, Dich zu verbinden. Sie dient dazu, den Spielern Informationen über den Server zu vermitteln, wie zum Beispiel den Servernamen, Regeln, Willkommensnachrichten oder sogar Links zu Ressourcen.

## Wie ändere ich die MOTD?

1. **Datei öffnen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und öffne die Datei `server.properties`.

2. **Eintrag suchen**\
   Suche den folgenden Eintrag:

   ```text
   motd=Deine Nachricht hier.
   ```

3. **MOTD ändern**\
   Ändere den Wert auf die gewünschte Nachricht. Zum Beispiel:

   ```text
   motd=Willkommen auf unserem Server!
   ```

4. **Server neu starten**\
   Speichere die Änderungen und starte den Server neu.
