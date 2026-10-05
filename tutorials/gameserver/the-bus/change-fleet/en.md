---
slug: "change-fleet"
language: "en"
title: "How to Change the Fleet on a The Bus Server"
description: "Change fleet on a The Bus server"
tags: []
date: "2026-02-24"
visibility: "public"
updated: "2026-10-05"
cta: "gameserver"
product_keys: ["the-bus"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change Fleet"
sort: 3
related: ["gameserver/the-bus/activate-dlc", "gameserver/the-bus/add-admin", "gameserver/the-bus/change-map", "gameserver/the-bus/change-operating-plan"]
---

The fleet determines which buses are available on your server. You can change the active fleet via the **admin menu** or by **command**. To do this, you need Owner or Admin permissions, see [Add Admin](/tutorials/gameserver/the-bus/add-admin).

## Change fleet via admin menu

1. **Open admin menu**\
   Open the pause menu in the game and select the **Admin Menu**.

2. **Select fleet**\
   Under **Fleet**, choose the desired fleet from the available options.

> [!NOTE]
> Since update 3.2 EA, the fleet selected in the admin menu is saved and is kept even after your server restarts.

## Change fleet by command

Alternatively, you can change the fleet via the in-game chat. Which commands you can use depends on your rank, see [Add Admin](/tutorials/gameserver/the-bus/add-admin).

Enter the following command in the in-game chat:

```text
/fleet <fleet>
```

Replace `<fleet>` with the desired fleet.

> [!TIP]
> The exact value for `<fleet>` is not officially documented. You can get an overview of all commands available to you on your server with `/commands`.

## Use fleets from the Workshop

Your server can also load fleets from the [Steam Workshop](https://steamcommunity.com/workshop/browse/?appid=491540). To do this, upload them like other mods via [SFTP](/tutorials/gameserver/establish-sftp-connection) to the `/TheBus/Mods/` folder. You can find out exactly how this works under [Add Mods](/tutorials/gameserver/the-bus/add-mods).

Then restart your server. After the start, check in the admin menu whether the fleet appears in the selection.

> [!WARNING]
> Depending on the mod type, all players must also subscribe to the fleet in the Steam Workshop to be able to join your server. You can find out which mod types exist under [Mod Types](/tutorials/gameserver/the-bus/add-mods#mod-types).

## Buses from DLCs

> [!NOTE]
> Buses from a DLC, e.g. the Ebus 2.2, can only be selected and driven by players who own the DLC themselves. To learn how to activate or deactivate DLCs on your server, see [Activate DLC](/tutorials/gameserver/the-bus/activate-dlc).
