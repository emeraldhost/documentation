---
description: "Set up the server info via Pastebin on a SCP: Secret Laboratory server"
---

# How to Set Up the Server Info on Your SCP: Secret Laboratory Server

The server info is the description of your server that players can view in-game — for example your rules, contact options or special features of your server. The text itself is not stored on the server, but in a document on [pastebin.com](https://pastebin.com/). In the `config_gameplay.txt` file you only store the ID of that document using the `serverinfo_pastebin_id` key.

:::: warning Warning
The path to the configuration file contains the Game Port of your server: `/.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt`. Replace `<Port>` with the actual Game Port of your server. You can find it in the dashboard under **Overview**.
::::

## Create the Pastebin document

1. <b>Prepare the text</b><br>
   Open [pastebin.com](https://pastebin.com/) and paste the text of your server info into the **New Paste** field. See the section [Formatting with rich text tags](#formatting-with-rich-text-tags) below for styling with colors, sizes and links.

2. <b>Set the exposure and expiration</b><br>
   Set **Paste Exposure** to `Public` and **Paste Expiration** to `Never`. A paste with the exposure `Private` will not work — according to Pastebin, only you can view it while logged in.

3. <b>Publish the paste</b><br>
   Click **Create New Paste**.

4. <b>Copy the Pastebin ID</b><br>
   The Pastebin ID is the string at the end of your paste's URL. For `https://pastebin.com/7wV681fT` the ID is `7wV681fT`. Note down your ID.

:::: tip Tip
Create the paste with a free Pastebin account. That way you can edit the content at any time later — the Pastebin ID stays the same, so you never have to touch your server configuration again.
::::

## Store the Pastebin ID in the configuration

1. <b>Find out the Game Port</b><br>
   Open the dashboard of your server and note the Game Port shown under **Overview**.

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Open the configuration file</b><br>
   Open the following file — replace `<Port>` with your Game Port:

   ```
   /.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt
   ```

5. <b>Enter the Pastebin ID</b><br>
   Find the line with the `serverinfo_pastebin_id` key and enter your Pastebin ID as its value — if the key is missing, add it as a new line:

   ```
   serverinfo_pastebin_id: 7wV681fT
   ```

   Replace `7wV681fT` with your own Pastebin ID.

6. <b>Start the server</b><br>
   Save the file and start your server via the dashboard.

:::: info Note
`7wV681fT` is the default value of the key and points to Northwood's official example template. As long as you do not change the value, your server shows this template as its server info. The guide [Edit config files](edit-config-files.md) explains how to edit configuration files in general.
::::

## Formatting with rich text tags

The server info supports rich text tags that let you format your text. According to the official Tech Wiki, the following tags are supported in the server description:

| Tag | Effect | Example |
|-----|--------|---------|
| `<color=...>` | Text color — as a color name or hex code | `<color=green>Text</color>`, `<color=#ff0000>Text</color>` |
| `<size=...>` | Text size | `<size=50>Text</size>` |
| `<b>` | Bold | `<b>Text</b>` |
| `<i>` | Italics | `<i>Text</i>` |
| `<u>` | Underline | `<u>Text</u>` |
| `<mark>` | Highlighted | `<mark>Text</mark>` |
| `<align=...>` | Alignment — `left`, `center` or `right` | `<align=center>Text</align>` |
| `<link=...>` | Clickable link | `<link="https://example.com">Text</link>` |

An example combining several tags:

```
<align=center><size=50><b>Welcome to my server!</b></size></align>

<color=#ff0000><b>Rules:</b></color>
1. Be respectful towards other players.
2. No cheating.

Questions? <link="https://example.com">Contact our team</link>
```

:::: warning Warning
Tags must be closed in the reverse order from which they were opened — for example `<i><b>Text</b></i>`. Incorrectly nested tags will not be rendered properly.
::::

:::: info Note
If you want your server to be verified by Northwood, the server info must contain a communication method that players can use to contact your server's staff team. For more details, see the guide [Get your server verified](get-server-verified.md).
::::

:::: info Note
Changes to `config_gameplay.txt` only take effect after a server restart.
::::
