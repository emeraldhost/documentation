---
slug: "welt-hochladen"
language: "de"
title: "So lädst Du eine Welt auf einem Minecraft Java Edition Server hoch"
description: "Welt auf einen Minecraft Java Edition Server hochladen"
tags: []
date: "2025-08-18"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Welt Hochladen"
sort: 24
related: ["gameserver/minecraft/join-server", "gameserver/minecraft/kick-ban-players", "gameserver/minecraft/use-tp-command", "gameserver/minecraft/link-java-with-bedrock"]
---

> [!CAUTION]
> **Achtung**
>
> Die Welt-Dateien dürfen kein Archiv wie z. B. `.zip` sein. Entpacke die Welt vorher.

1. **Server stoppen**\
   Stoppe Deinen Minecraft Java Edition Server.

2. **SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Welt hochladen**\
   Lade im Hauptordner, in dem sich auch der Ordner `world` befindet, Deine neue Welt hoch.

4. **Eintrag suchen**\
   Öffne die Datei `server.properties` und suche den folgenden Eintrag:

   ```text
   level-name=world
   ```

5. **Welt-Name ändern**\
   Ändere den Wert auf den Namen Deiner hochgeladenen Welt (z. B. `level-name=NeueWelt`).

6. **Server neu starten**\
   Speichere die Änderungen und starte den Server neu.

> [!TIP]
> Du kannst auch mehrere Welten parallel auf Deinem Server betreiben, z. B. mit Plugins wie [Multiverse-Core](https://modrinth.com/plugin/multiverse-core).
