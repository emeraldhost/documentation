---
slug: "set-up-server-info"
language: "en"
title: "How to Set Up the Server Info on Your SCP: Secret Laboratory Server"
description: "Set up the server info via Pastebin on a SCP: Secret Laboratory server"
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
short_title: "Set Up Server Info"
sort: 13
related: ["gameserver/scp-secret-laboratory/plugins-not-loading", "gameserver/scp-secret-laboratory/set-up-reserved-slots", "gameserver/scp-secret-laboratory/set-up-whitelist", "gameserver/scp-secret-laboratory/use-remote-admin"]
---

The server info is the description of your server that players can view in-game – for example your rules, contact options or special features of your server. The text itself is not stored on the server, but in a document on [pastebin.com](https://pastebin.com/). In the `config_gameplay.txt` file you only store the ID of that document using the `serverinfo_pastebin_id` key.

> [!WARNING]
> The path to the configuration file contains the Game Port of your server: `/.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt`. Replace `<Port>` with the actual Game Port of your server. You can find it in the dashboard under **Overview**.

## Create the Pastebin document

1. **Prepare the text**\
   Open [pastebin.com](https://pastebin.com/) and paste the text of your server info into the **New Paste** field. See the section [Formatting with rich text tags](#formatting-with-rich-text-tags) below for styling with colors, sizes and links.

2. **Set the exposure and expiration**\
   Set **Paste Exposure** to `Public` and **Paste Expiration** to `Never`. A paste with the exposure `Private` will not work – according to Pastebin, only you can view it while logged in.

3. **Publish the paste**\
   Click **Create New Paste**.

4. **Copy the Pastebin ID**\
   The Pastebin ID is the string at the end of your paste's URL. For `https://pastebin.com/7wV681fT` the ID is `7wV681fT`. Note down your ID.

> [!TIP]
> Create the paste with a free Pastebin account. That way you can edit the content at any time later – the Pastebin ID stays the same, so you never have to touch your server configuration again.

## Store the Pastebin ID in the configuration

1. **Find out the Game Port**\
   Open the dashboard of your server and note the Game Port shown under **Overview**.

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Open the configuration file**\
   Open the following file – replace `<Port>` with your Game Port:

   ```text
   /.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt
   ```

5. **Enter the Pastebin ID**\
   Find the line with the `serverinfo_pastebin_id` key and enter your Pastebin ID as its value – if the key is missing, add it as a new line:

   ```text
   serverinfo_pastebin_id: 7wV681fT
   ```

   Replace `7wV681fT` with your own Pastebin ID.

6. **Start the server**\
   Save the file and start your server via the dashboard.

> [!NOTE]
> `7wV681fT` is the default value of the key and points to Northwood's official example template. As long as you do not change the value, your server shows this template as its server info. The guide [Edit config files](/tutorials/gameserver/scp-secret-laboratory/edit-config-files) explains how to edit configuration files in general.

## Formatting with rich text tags

The server info supports rich text tags that let you format your text. According to the official Tech Wiki, the following tags are supported in the server description:

| Tag | Effect | Example |
|-----|--------|---------|
| `<color=...>` | Text color – as a color name or hex code | `<color=green>Text</color>`, `<color=#ff0000>Text</color>` |
| `<size=...>` | Text size | `<size=50>Text</size>` |
| `<b>` | Bold | `<b>Text</b>` |
| `<i>` | Italics | `<i>Text</i>` |
| `<u>` | Underline | `<u>Text</u>` |
| `<mark>` | Highlighted | `<mark>Text</mark>` |
| `<align=...>` | Alignment – `left`, `center` or `right` | `<align=center>Text</align>` |
| `<link=...>` | Clickable link | `<link="https://example.com">Text</link>` |

An example combining several tags:

```text
<align=center><size=50><b>Welcome to my server!</b></size></align>

<color=#ff0000><b>Rules:</b></color>
1. Be respectful towards other players.
2. No cheating.

Questions? <link="https://example.com">Contact our team</link>
```

> [!WARNING]
> Tags must be closed in the reverse order from which they were opened – for example `<i><b>Text</b></i>`. Incorrectly nested tags will not be rendered properly.

> [!NOTE]
> If you want your server to be verified by Northwood, the server info must contain a communication method that players can use to contact your server's staff team. For more details, see the guide [Get your server verified](/tutorials/gameserver/scp-secret-laboratory/get-server-verified).

> [!NOTE]
> Changes to `config_gameplay.txt` only take effect after a server restart.
