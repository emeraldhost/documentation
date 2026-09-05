---
slug: "change-server-icon"
language: "en"
title: "How to Change the Server Icon on a Minecraft Java Edition Server"
description: "Change server icon on a Minecraft Java Edition server"
tags: []
date: "2026-02-04"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change Server Icon"
sort: 4
related: ["gameserver/minecraft/change-modpack", "gameserver/minecraft/change-motd", "gameserver/minecraft/change-simulation-distance", "gameserver/minecraft/change-spawn-protection"]
---

## Icon Requirements

The server icon must meet the following requirements:

| Property | Requirement |
|----------|-------------|
| Filename | `server-icon.png` |
| Format | PNG |
| Size | 64x64 pixels |

## How do I change the server icon?

1. **Create the icon**\
   Create an image with exactly 64x64 pixels and save it as `server-icon.png`.

2. **Upload the icon**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and upload the `server-icon.png` file to the root directory.

3. **Restart the server**\
   Restart the server so the icon becomes active.

> [!WARNING]
> **Important**
>
> The file must be named exactly `server-icon.png` and be exactly 64x64 pixels. Other formats or sizes will not be recognized.
