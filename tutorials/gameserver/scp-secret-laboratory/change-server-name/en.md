---
slug: "change-server-name"
language: "en"
title: "How to Change the Server Name on Your SCP: Secret Laboratory Server"
description: "Change the server name on a SCP: Secret Laboratory server"
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
short_title: "Change Server Name"
sort: 18
related: ["gameserver/scp-secret-laboratory/set-up-server-info", "gameserver/scp-secret-laboratory/get-server-verified", "gameserver/scp-secret-laboratory/edit-config-files", "gameserver/scp-secret-laboratory/change-max-players"]
---
The server name is the name under which your server is shown in the public SCP: Secret Laboratory server list. You set it with the `server_name` key in the `config_gameplay.txt` file. You can find the basics of editing the configuration files in the [Edit configuration files](/tutorials/gameserver/scp-secret-laboratory/edit-config-files) guide.

> [!WARNING]
> The path to the configuration file contains the game port of your server: `/.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt`. Replace `<Port>` with the actual game port of your server. You can find the game port in the dashboard under **Overview**.

## Change the server name

1. **Find out the game port**\
   Open the dashboard of your server and note the game port shown under **Overview**.

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Open the configuration file**\
   Open the following file – replace `<Port>` with your game port:

   ```text
   /.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt
   ```

5. **Enter the server name**\
   The `server_name` key is at the very top of the file. By default, it contains a placeholder such as:

   ```text
   server_name: My Server Name
   ```

   Replace the placeholder with the name you want for your server, e.g.:

   ```text
   server_name: Emerald Community | Vanilla
   ```

6. **Start the server**\
   Save the file and start your server via the dashboard. The new name takes effect after the start.

> [!NOTE]
> Your server – and therefore its name – only appears in the public server list if it has been verified by Northwood. Without verification, players join via Direct Connect, see [Join the server](/tutorials/gameserver/scp-secret-laboratory/join-server).

> [!TIP]
> According to Northwood's [official verification guide](https://techwiki.scpslgame.com/books/server-guides/page/4-how-do-i-verify-my-server-a-step-by-step-guide), the server name supports a limited subset of Unity rich text: color tags with hex codes (no color names such as `red`), `<b>` (bold), `<i>` (italics), `<u>` (underline) and `<s>` (strikethrough), e.g. `<color=#50C878>Emerald Community</color>`. You can only see how the formatting looks in the server list – so only once your server is verified. Check how it looks after the restart. How to nest tags correctly is shown in the [Set up server info](/tutorials/gameserver/scp-secret-laboratory/set-up-server-info#formatting-with-rich-text-tags) guide. The other tags from the table there – e.g. `<size>`, `<align>`, `<mark>`, `<link>` and color names – do not apply to the server name.

## Customize the player list title

Directly below `server_name` there are two more keys that control the title above the in-game player list:

```text
#default - uses server_name
player_list_title: default
player_list_title_rate: default
```

- **`player_list_title`**: The title shown at the top of the player list. With the value `default`, your `server_name` is used. If you enter your own text, the player list shows it instead of the server name.
- **`player_list_title_rate`**: The interval in seconds at which the player list title is refreshed. With `default`, the default value of 5 seconds applies.

An example of a custom title:

```text
player_list_title: Emerald Community – Player List
```

You change these keys the same way as `server_name`: stop the server, edit the file, start the server via the dashboard.

> [!NOTE]
> The `report_server_name` key further down in the file has nothing to do with the name in the server list – it is only used for player reports sent via a Discord webhook.

## Server name on verified servers

`server_name` must be set for verification. Once your server is verified, Northwood's [Community Server Guidelines](https://scpslgame.com/CSG.pdf) apply to it – this also covers the name that every player can see in the public server list. Check your new name against the guidelines before you change it. You can find more about verification in the [Get your server verified](/tutorials/gameserver/scp-secret-laboratory/get-server-verified) guide.

> [!TIP]
> Create a [backup](/tutorials/gameserver/create-backup) of your server before making larger changes to `config_gameplay.txt`.
