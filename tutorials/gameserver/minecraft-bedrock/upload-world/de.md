---
slug: "welt-hochladen"
language: "de"
title: "So lädst Du eine Welt auf Deinen Minecraft Bedrock Server hoch"
description: "Schritt-für-Schritt-Anleitung, wie Du in Minecraft Bedrock Edition Deine eigene Welt hochlädst und den Server korrekt konfigurierst."
tags: []
date: "2025-08-26"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
product_keys: ["minecraft-bedrock"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Welt Hochladen"
sort: 15
related: ["gameserver/minecraft-bedrock/increase-slots", "gameserver/minecraft-bedrock/join-server", "gameserver/minecraft-bedrock/kick-ban-players", "gameserver/minecraft-bedrock/use-tp-command"]
---

> [!CAUTION]
> **Achtung**
>
> Die Welt-Dateien dürfen kein Archiv wie z. B. `.zip` oder `.mcworld` sein. Entpacke die Welt vorher. Achte darauf, dass der Ordnername unverändert bleibt.

1. **Server stoppen**\
   Stoppe Deinen Minecraft Bedrock Edition Server.

2. **Datei-Browser öffnen**\
   Öffne Dein Dashboard, wähle Deinen Server aus und gehe zum Datei-Browser **oder** verbinde Dich per SFTP mit Deinem Server. Eine Anleitung hierzu findest Du hier: [SFTP-Verbindung herstellen](/tutorials/gameserver/establish-sftp-connection).

3. **Welt hochladen**\
   Lade Deine neue Welt in den Ordner `worlds` hoch.

4. **Datei öffnen**\
   Öffne die Datei `server.properties` im Hauptordner Deines Servers.

5. **Eintrag suchen**\
   Suche den folgenden Eintrag:

    ```text
    level-name=Bedrock level
    ```

6. **Wert ändern**\
   Ändere den Wert auf den Namen Deiner hochgeladenen Welt (z. B. `level-name=Neue Welt`).

7. **Server neustarten**\
   Speichere die Datei und starte Deinen Server neu.
