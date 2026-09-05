---
slug: "join-server"
language: "en"
title: "How to Join Your Solace Crafting Server"
description: "Join a Solace Crafting server"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["solace-crafting"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 4
related: ["gameserver/solace-crafting/add-savegame", "gameserver/solace-crafting/create-backup", "gameserver/solace-crafting/download-savegame"]
---

Solace Crafting offers two ways onto a dedicated server from the main menu: the **server list** and the **direct connection**. For the direct connection you use the **Game Port** of your server, not the Query Port.

## Find connection details

> [!IMPORTANT]
> You can find the IP address as well as the **Game Port** and the **Query Port** of your server in the **dashboard**. Always use the values shown there to join – there are no fixed default values.

## Enter the ports in the server configuration

Solace Crafting reads the Game Port and the Query Port from its configuration file. If the values there do not match the ports assigned to your server in the dashboard, nobody can reach your server. Check the entries before you hand out your connection details.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the configuration file**\
   Open the following file:

   ```text
   /.config/unity3d/Big Kitty Games/Solace Crafting/servercfg.dat
   ```

   > [!NOTE]
   > The folder `.config` starts with a dot and is therefore a hidden folder. Enable the display of hidden files in your SFTP client if you cannot see it. If the file does not exist yet, start your server once – it is created on the first start.

4. **Enter the ports**\
   Set `port` to the **Game Port** and `steamQueryPort` to the **Query Port** from your dashboard:

   ```json
   "port": 27015,
   "steamQueryPort": 27016,
   ```

   > [!WARNING]
   > The numbers shown here are only an example. Only the ports assigned to your server in the dashboard are relevant.

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to make the configuration unreadable for the server.

5. **Start the server**\
   Save the file and start your server.

## Join via the server list

1. **Start Solace Crafting**\
   Launch the game and wait until the main menu has loaded.

2. **Open the server list**\
   Select **Multiplayer: Server List** in the main menu.

3. **Select your server**\
   Look for your server in the list and select it.

4. **Enter the password**\
   If a password is set for your server, you are asked for it when joining.

## Connect directly via IP

The direct connection works regardless of whether your server shows up in the server list.

1. **Open the direct connection**\
   Select **Multiplayer: Direct Connect** in the main menu.

2. **Enter the server address**\
   Enter the IP address and the **Game Port** of your server, for example:

   ```text
   123.45.67.89:27015
   ```

   > [!IMPORTANT]
   > Use the **Game Port** here, not the Query Port. Take the IP and port from your dashboard.

3. **Enter the password**\
   For a password protected server, additionally enter the server password.

4. **Connect**\
   Confirm your input to join the server.

## Private server

In the `servercfg.dat` the value `isPrivate` controls whether your server is publicly visible:

| Value | Meaning |
|-------|---------|
| `false` | The server appears in the public server list |
| `true` | The server does **not** appear in the list – it can only be joined via direct connection |

> [!TIP]
> A private server is the easiest way to run a closed round: only hand out the IP address and Game Port to the players who are supposed to join.

## Which ports does Solace Crafting use?

> [!NOTE]
> A Solace Crafting server uses two ports:
>
> | Configuration value | Protocol | Purpose |
> |---------------------|----------|---------|
> | `port` | TCP | Game Port – players connect through this one |
> | `steamQueryPort` | UDP | Query Port – Steam queries the server status through this one |
>
> You can see which values apply to your server in the **dashboard**.

> [!WARNING]
> **Server is not found**
>
> If your server does not appear in the server list, first check that `isPrivate` is set to `false` and that the ports in the `servercfg.dat` match the ones from the dashboard. Independently of that, you can always reach your server via the direct connection using the IP address and Game Port.
