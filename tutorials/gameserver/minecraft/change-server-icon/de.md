---
slug: "server-icon-aendern"
language: "de"
title: "So änderst Du das Server-Icon auf einem Minecraft Java Edition Server"
description: "Server-Icon auf einem Minecraft Java Edition Server ändern"
tags: []
date: "2026-02-04"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server-Icon ändern"
sort: 15
related: ["gameserver/minecraft/change-modpack", "gameserver/minecraft/change-motd", "gameserver/minecraft/change-simulation-distance", "gameserver/minecraft/change-spawn-protection"]
---

## Anforderungen an das Icon

Das Server-Icon muss folgende Anforderungen erfüllen:

| Eigenschaft | Anforderung |
|-------------|-------------|
| Dateiname | `server-icon.png` |
| Format | PNG |
| Größe | 64x64 Pixel |

## Wie ändere ich das Server-Icon?

1. **Icon erstellen**\
   Erstelle ein Bild mit genau 64x64 Pixeln und speichere es als `server-icon.png`.

2. **Icon hochladen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und lade die Datei `server-icon.png` in das Hauptverzeichnis hoch.

3. **Server neu starten**\
   Starte den Server neu, damit das Icon aktiv wird.

> [!WARNING]
> **Wichtig**
>
> Die Datei muss exakt `server-icon.png` heißen und genau 64x64 Pixel groß sein. Andere Formate oder Größen werden nicht erkannt.
