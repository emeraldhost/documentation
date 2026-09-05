---
slug: "server-moderieren"
language: "de"
title: "Minecraft Java Edition Server moderieren"
description: "Schritt-für-Schritt-Anleitung, wie Du Deinen Minecraft Java Edition Server per Ingame-Chat oder Konsole moderierst."
tags: []
date: "2025-08-09"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server moderieren"
sort: 29
related: ["gameserver/minecraft/setup-simple-voice-chat", "gameserver/minecraft/setup-squaremap", "gameserver/minecraft/change-gamemode", "gameserver/minecraft/change-weather"]
---

> [!WARNING]
> Stelle sicher, dass Du die notwendigen Rechte besitzt, um den Befehl auszuführen! Hier findest Du eine Anleitung, wie Du Dir OP-Rechte gibst: [Anleitung](/tutorials/gameserver/minecraft/grant-op-rights)

## Server über den Ingame-Chat moderieren

1. **Chat öffnen**\
   Öffne den Chat. Standardmäßig mit der Taste `t`.

2. **Befehl eingeben**\
   Nutze einen der folgenden Moderations-Befehle im Chat:

    ```text
    /ban <spieler> [<grund>]    # Bannt den Spieler vom Server
    /ban-ip <spieler | IP-Addresse> [<grund>]    # Bannt die Spieler-IP vom Server
    /pardon <spieler>    # Entbannt den Spieler vom Server
    /pardon-ip <IP-Addresse>    # Entbannt die Spieler-IP vom Server
    /kick <spieler> [<grund>]    # Kickt den gewünschten Spieler vom Server
    ```

## Server über die Server-Konsole moderieren

> [!WARNING]
> In der Konsole müssen alle Befehle ohne `/` eingegeben werden!

1. **Server auswählen**\
   Öffne Dein Dashboard und wähle Deinen Minecraft Java Edition Server aus.

2. **Konsole öffnen**\
   Navigiere zur Server-Konsole unter dem Menüpunkt „Übersicht“.

3. **Befehl eingeben**\
   Verwende einen der folgenden Moderations-Befehle in der Konsole:

    ```text
    ban <spieler> [<grund>]    # Bannt den Spieler vom Server
    ban-ip <spieler | IP-Addresse> [<grund>]    # Bannt die Spieler-IP vom Server
    pardon <spieler>    # Entbannt den Spieler vom Server
    pardon-ip <IP-Addresse>    # Entbannt die Spieler-IP vom Server
    kick <spieler> [<grund>]    # Kickt den gewünschten Spieler vom Server
    ```
