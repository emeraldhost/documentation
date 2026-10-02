---
slug: "change-max-players"
language: "en"
title: "How to Change the Maximum Number of Players on Your SCP: Secret Laboratory Server"
description: "Change the maximum number of players on a SCP: Secret Laboratory server"
tags: []
date: "2026-10-02"
visibility: "public"
cta: "gameserver"
product_keys: ["scp-secret-laboratory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change Max Players"
sort: 19
related: ["gameserver/scp-secret-laboratory/set-up-reserved-slots", "gameserver/scp-secret-laboratory/edit-config-files", "gameserver/scp-secret-laboratory/change-server-name", "gameserver/scp-secret-laboratory/adjust-round-flow"]
---
You set how many players can play on your server at the same time with the `max_players` option in the `config_gameplay.txt` file. The default value is `20`. You can find the basics of editing the configuration files in the [Edit configuration files](/tutorials/gameserver/scp-secret-laboratory/edit-config-files) guide.

> [!WARNING]
> The path to the configuration files contains the game port of your server: `/.config/SCP Secret Laboratory/config/<Port>/`. Replace `<Port>` with the actual game port of your server. You can find the game port in the dashboard under **Overview**.

## Limits for the player count

Before you change the value, keep these limits in mind:

- **Booked package**: Set `max_players` to at most as many slots as you have booked in your package. If you need more slots, contact our [support](https://emeraldhost.de/en/support).
- **Verified servers at most 60**: Under normal circumstances, verified servers may have at most 60 slots – servers with more than 60 slots are removed from the server list. Learn more in the [Get your server verified](/tutorials/gameserver/scp-secret-laboratory/get-server-verified) guide.
- **Reserved slots**: Players with a reserved slot can still join a full server – the player count can then be above `max_players`. Learn more in the [Interaction with reserved slots](#interaction-with-reserved-slots) section.

## Change the player count

1. **Find out the game port**\
   Open the dashboard of your server and note the game port shown under **Overview**.

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Adjust the player count**\
   Open the following file – replace `<Port>` with your game port:

   ```text
   /.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt
   ```

   Find the `max_players` entry and enter the desired number of players:

   ```text
   max_players: 20
   ```

   > [!NOTE]
   > **Example**
   >
   > For a server with 32 slots, enter `max_players: 32`.

5. **Start the server**\
   Save the file and start your server via the dashboard. The new player count only applies after this start.

## Interaction with reserved slots

If `use_reserved_slots` is set to `true` in `config_gameplay.txt` (default), players from the `UserIDReservedSlots.txt` file can still join even when `max_players` players are already on the server. The player count can therefore be above `max_players`.

If `use_reserved_slots` is set to `false`, no reserved slots apply – `max_players` is then the limit for everyone. You can learn how to fill the list in the [Set up reserved slots](/tutorials/gameserver/scp-secret-laboratory/set-up-reserved-slots) guide.

## Minimum player count for the round start

> [!NOTE]
> A round only starts once at least 2 players are on the server.
