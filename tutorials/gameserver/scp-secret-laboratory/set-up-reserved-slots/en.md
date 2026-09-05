---
slug: "set-up-reserved-slots"
language: "en"
title: "How to Set Up Reserved Slots on Your SCP: Secret Laboratory Server"
description: "Set up reserved slots on a SCP: Secret Laboratory server"
tags: []
date: "2026-08-24"
visibility: "public"
cta: "gameserver"
product_keys: ["scp-secret-laboratory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Set Up Reserved Slots"
sort: 12
related: ["gameserver/scp-secret-laboratory/kick-and-ban-players", "gameserver/scp-secret-laboratory/plugins-not-loading", "gameserver/scp-secret-laboratory/set-up-server-info", "gameserver/scp-secret-laboratory/set-up-whitelist"]
---

With reserved slots, players you have added to a list – for example your team or your regulars – can still join the server even when it is full. The feature consists of two parts: the `use_reserved_slots` option in the `config_gameplay.txt` file and the player list in the `UserIDReservedSlots.txt` file. You can find the basics of editing the configuration files in the [Edit configuration files](/tutorials/gameserver/scp-secret-laboratory/edit-config-files) guide.

> [!WARNING]
> The path to the configuration files contains the game port of your server: `/.config/SCP Secret Laboratory/config/<Port>/`. Replace `<Port>` with the actual game port of your server. You can find the game port in the dashboard under **Overview**.

## Set up reserved slots

1. **Find out the game port**\
   Open the dashboard of your server and note the game port shown under **Overview**.

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Enable reserved slots**\
   Open the following file – replace `<Port>` with your game port:

   ```text
   /.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt
   ```

   Find the `use_reserved_slots` entry and make sure it is set to `true` – this is already the default value:

   ```text
   use_reserved_slots: true
   ```

5. **Add players to the list**\
   In the same port folder, open the `UserIDReservedSlots.txt` file:

   ```text
   /.config/SCP Secret Laboratory/config/<Port>/UserIDReservedSlots.txt
   ```

   Add each ID on its own line. Steam players are added in the format `SteamID64@steam`, Discord users in the format `DiscordID@discord` – the same format used when [setting up a whitelist](/tutorials/gameserver/scp-secret-laboratory/set-up-whitelist):

   ```text
   76561198012345678@steam
   123456789012345678@discord
   ```

   You can find your [SteamID64](/tutorials/gameserver/steamid64-find-out) using the linked guide.

6. **Start the server**\
   Save both files and start your server via the dashboard so the changes take effect.

> [!NOTE]
> Reserved slots are not a whitelist: a [whitelist](/tutorials/gameserver/scp-secret-laboratory/set-up-whitelist) locks the server for everyone who is not listed. Reserved slots, on the other hand, still let anyone join – listed players simply get a spot held for them.

> [!TIP]
> Add yourself and your team to `UserIDReservedSlots.txt` – that way you can still get on the server at peak times, for example to moderate.
