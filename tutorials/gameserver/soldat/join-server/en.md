---
slug: "join-server"
language: "en"
title: "How to Join Your Soldat Server"
description: "Join a Soldat server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["soldat"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 4
related: ["gameserver/soldat/add-admin", "gameserver/soldat/add-mods", "gameserver/soldat/create-backup", "gameserver/soldat/kick-ban-players"]
---

There are two ways onto your Soldat server: through the in-game **server browser** or through a **direct connection** using IP address and port. Both use the same port – Soldat does not have a separate Query Port.

## Find connection details

> [!IMPORTANT]
> To connect you need the **IP address** and the **Game Port** of your server. You can find both in the **dashboard** of your server. If your server has a game password, you also need that.

## Connect directly via IP

A direct connection is the most reliable way onto your server because it works independently of the public server list.

1. **Start Soldat**\
   Launch Soldat on your PC and wait for the main menu to load.

2. **Open Join Game**\
   Select **Join Game** in the main menu.

3. **Enter the connection details**\
   Fill in the **IP**, **Port** and **Password** fields with the details of your server:

   ```text
   IP:       123.45.67.89
   Port:     <Game Port from the dashboard>
   Password: <game password, if set>
   ```

   > [!NOTE]
   > The **Password** field is the game password of the server, not the admin password. If no game password is set on your server, leave the field empty.

4. **Connect**\
   Confirm your input and you land directly on your server.

## Via the server browser

1. **Open Join Game**\
   Launch Soldat and select **Join Game** in the main menu.

2. **Request the server list**\
   Click **Request Servers**. Soldat then loads the list of internet and LAN servers.

3. **Select your server**\
   Look for your server by its name in the list and connect.

> [!WARNING]
> Your server only shows up in the server browser if it registers with the lobby. How to enable that is described below under [Show your server in the server list](#show-your-server-in-the-server-list). If you cannot find your server, use the direct connection – it always works.

## Via a shortcut or the command line

Soldat can connect to a server directly on startup. That works well for a desktop shortcut you hand to your friends.

1. **Use a launch parameter**\
   Append the following parameter to the shortcut of your Soldat client:

   ```text
   -join <IP address> <Game Port> <password>
   ```

2. **Or use a soldat address**\
   Instead of individual parameters you can also pass a full address:

   ```text
   -joinurl soldat://<IP address>:<Game Port>/<password>
   ```

> [!NOTE]
> Port and password are optional. If you leave them out, Soldat falls back to fixed default values and usually will not reach your server – so always enter the Game Port from your **dashboard**.

## Show your server in the server list

For your server to appear in the server browser it has to register with the lobby. How you enable this depends on your server version.

> [!NOTE]
> **Two server versions**
>
> There are two Soldat server versions with different configuration files. You can tell which one you are running from the file manager or via [SFTP](/tutorials/gameserver/establish-sftp-connection):
>
> | File in the main directory | Version |
> |----------------------------|---------|
> | `soldat.ini` and `server.ini` | classic Soldat server |
> | `configs/server.cfg` | OpenSoldat |

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Open the configuration**\
   Open the configuration file of your server version via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Enable the lobby entry**\
   Classic server – in the `[NETWORK]` section of `soldat.ini`:

   ```text
   Lobby_Register=1
   ```

   OpenSoldat – in `configs/server.cfg`:

   ```text
   set sv_lobby 1
   ```

4. **Start the server**\
   Save the file and start your server.

> [!WARNING]
> Lobby registration is disabled by default on **both** server versions. A freshly set up server is therefore only reachable through a direct connection at first.

## Which ports does Soldat use?

> [!NOTE]
> A Soldat server uses its Game Port for more than one purpose:
>
> | Port | Protocol | Purpose |
> |------|----------|---------|
> | **Game Port** | UDP | Gameplay – this is the port you enter when joining |
> | **Game Port** | TCP | Remote admin console |
> | **Game Port + 10** | TCP | Transfer of maps, scenery and textures to the players |
>
> There is no separate Query Port. The values that apply to your server are shown in the **dashboard**.

> [!TIP]
> If players can join but your custom maps are not downloaded, check the file download setting. You can read more about it under [Add Mods](/tutorials/gameserver/soldat/add-mods).
