---
slug: "gamemode-veraendern"
language: "de"
title: "Spielmodus in Minecraft Java Edition verändern"
description: "Schritt-für-Schritt-Anleitung, wie Du den Spielmodus eines Spielers in Minecraft Java Edition per Ingame-Chat oder Konsole änderst."
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
short_title: "Gamemode verändern"
sort: 28
related: ["gameserver/minecraft/setup-simple-voice-chat", "gameserver/minecraft/setup-squaremap", "gameserver/minecraft/moderate-server", "gameserver/minecraft/change-weather"]
---

> [!WARNING]
> Stelle sicher, dass Du die notwendigen Rechte besitzt, um den Befehl auszuführen! Hier findest Du eine Anleitung, wie Du Dir OP-Rechte gibst: [Anleitung](/tutorials/gameserver/minecraft/grant-op-rights)

## Spielmodus über den Ingame-Chat ändern

1. **Chat öffnen**\
   Öffne den Chat. Standardmäßig mit der Taste `t`.

2. **Befehl eingeben**\
   Gib folgenden Befehl ein, um den gewünschten Spielmodus zu aktivieren:

    ```text
    /gamemode creative <Spielername>   # Kreativmodus: Fliegen und frei bauen
    /gamemode survival <Spielername>   # Überlebensmodus: normales Spiel ohne Cheaten
    /gamemode spectator <Spielername>  # Zuschauermodus: durch Blöcke fliegen, keine Interaktion
    /gamemode adventure <Spielername>  # Abenteuermodus: nur ansehen, keine Interaktion
    ```

## Spielmodus über die Server-Konsole ändern

> [!WARNING]
> In der Konsole müssen alle Befehle ohne `/` eingegeben werden!

1. **Server auswählen**\
   Öffne Dein Dashboard und wähle Deinen Minecraft Java Edition Server aus.

2. **Konsole öffnen**\
   Navigiere zur Server-Konsole unter dem Menüpunkt „Übersicht“.

3. **Befehl eingeben**\
   Verwende einen der folgenden Spielmodus-Befehle in der Konsole:

    ```text
    gamemode creative <Spielername>   # Kreativmodus: Fliegen und frei bauen
    gamemode survival <Spielername>   # Überlebensmodus: normales Spiel ohne Cheaten
    gamemode spectator <Spielername>  # Zuschauermodus: durch Blöcke fliegen, keine Interaktion
    gamemode adventure <Spielername>  # Abenteuermodus: nur ansehen, keine Interaktion
    ```
