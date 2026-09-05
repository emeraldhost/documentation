---
slug: "mods-hinzufuegen"
language: "de"
title: "So installierst Du Mods auf einem The Bus Server"
description: "Mods auf einem The Bus Server installieren"
tags: []
date: "2026-02-24"
visibility: "public"
updated: "2026-03-07"
cta: "gameserver"
product_keys: ["the-bus"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 10
related: ["gameserver/the-bus/download-savegame", "gameserver/the-bus/enable-ai-buses", "gameserver/the-bus/add-savegame", "gameserver/the-bus/join-server"]
---

The Bus unterstützt Mods über den **Steam Workshop**. Mods werden auf dem Server im Mods-Ordner abgelegt.

> [!TIP]
> Mods für The Bus findest Du im [Steam Workshop](https://steamcommunity.com/workshop/browse/?appid=491540).

## So installierst Du Mods

1. **Mod herunterladen**\
   Öffne den [Steam Workshop für The Bus](https://steamcommunity.com/workshop/browse/?appid=491540) und abonniere die gewünschten Mods. Die Mods befinden sich anschließend in folgendem Ordner:

   ```text
   SteamLibrary/steamapps/workshop/content/491540/
   ```

2. **Mod hochladen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und lade die Mod-Dateien in den `TheBus/Mods/`-Ordner hoch.

3. **Server neu starten**\
   Starte Deinen Server, damit die Mods geladen werden.

> [!TIP]
> Mit dem Befehl `maplist` in der Serverkonsole kannst Du prüfen, ob Map-Mods korrekt erkannt wurden.

## Mod-Typen

Achte auf die Kennzeichnung der Mods, da diese bestimmt, wo sie installiert werden müssen:

| Typ | Beschreibung |
|-----|-------------|
| **Client and Server** | Muss sowohl auf dem Server als auch bei allen Spielern installiert sein |
| **Client only** | Wird normalerweise nur beim Spieler benötigt – ist der Mod jedoch auf dem Server installiert, müssen ihn auch alle Spieler installieren |
| **Server only** | Wird nur auf dem Server benötigt und ist bei Spielern deaktiviert |

> [!WARNING]
> **Wichtig**
>
> Kompatible Mods werden auf dem Server automatisch aktiviert. Stelle sicher, dass alle Spieler die benötigten Client-Mods ebenfalls installiert haben, da sie sonst nicht beitreten können.
