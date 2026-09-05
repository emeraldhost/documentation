---
slug: "slots-erhoehen"
language: "de"
title: "So erhöhst Du die Slots auf einem Minecraft Java Edition Server"
description: "Slots auf einem Minecraft Java Edition Server erhöhen"
tags: []
date: "2025-06-19"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Slots erhöhen"
sort: 17
related: ["gameserver/minecraft/grant-op-rights", "gameserver/minecraft/improve-performance", "gameserver/minecraft/install-mods", "gameserver/minecraft/install-plugins"]
---

1. **Datei öffnen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und öffne die Datei `server.properties`.

2. **Eintrag suchen**\
   Suche den folgenden Eintrag:

   ```text
   max-players=20
   ```

3. **Slots ändern**\
   Ändere den Wert auf die gewünschte Anzahl an Spielern.

4. **Server neu starten**\
   Speichere die Änderungen und starte den Server neu.

> [!WARNING]
> Stelle sicher, dass Dein Server genügend Ressourcen (wie RAM und CPU) zur Verfügung hat, um die erhöhte Spieleranzahl zu unterstützen.
