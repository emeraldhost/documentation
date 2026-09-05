---
slug: "join-server"
language: "en"
title: "How to Join Your CryoFall Server"
description: "Join a CryoFall server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["cryofall"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 6
related: ["gameserver/cryofall/add-savegame", "gameserver/cryofall/create-backup", "gameserver/cryofall/download-savegame", "gameserver/cryofall/kick-ban-players"]
---

To connect, CryoFall uses **only a single port** – the Game Port of your server. There is no separate Query Port. Inside the game two paths lead onto your server: the public server list (**Community servers list**) or an entry by address (**Custom servers list**).

## Find connection details

> [!IMPORTANT]
> To connect you need the **IP address** and the **Game Port** of your server. You can find both in the **dashboard** of your server.

> [!NOTE]
> You never have to enter the port yourself. On every start your server automatically writes the port from the dashboard into its configuration.

## Join via the Custom servers list

This is the most reliable way – it works even when your server is not listed publicly.

1. **Start CryoFall**\
   Launch CryoFall and wait for the main menu to load.

2. **Open the server list**\
   Select **SERVERS** in the main menu.

3. **Switch to the Custom servers list**\
   Open the **Custom servers list** section. This is where you add servers manually.

4. **Add the server address**\
   Enter the IP address and the Game Port of your server, separated by a colon:

   ```text
   123.45.67.89:6000
   ```

   > [!TIP]
   > The values in the example are placeholders. Use the IP address and the Game Port shown in your dashboard.

5. **Join the server**\
   Confirm your input. Your server then stays in this list permanently and you can join it from there.

## Join via the Community servers list

Your server only shows up in the public server list if it is registered as a public server.

1. **Enable the server list**\
   In the **dashboard** of your server, set the **Server List** option to enabled and restart the server.

2. **Search for the server**\
   Select **SERVERS** in the main menu and then **Community servers list**. Search for the name of your server there.

3. **Join the server**\
   Select your server from the list to join it.

> [!WARNING]
> It can take a few minutes before a freshly started server appears in the public list. Use the **Custom servers list** entry in the meantime.

## Join via the server GUID

Instead of the IP address you can also give your players the GUID of your server. It is assigned by the master server on the first start and stays the same even if the IP address changes.

1. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

2. **Open the configuration**\
   Open the following file:

   ```text
   /Data/SettingsServer.xml
   ```

3. **Read out the GUID**\
   Look for the following entry and copy its value:

   ```xml
   <server_public_guid></server_public_guid>
   ```

4. **Share the GUID**\
   Your players enter the GUID in the game under **SERVERS → Custom servers list** – exactly like an address.

> [!IMPORTANT]
> Never change the value of `server_public_guid` yourself. It is assigned by the master server; you may only share it.

## Which ports does CryoFall use?

> [!NOTE]
> A CryoFall server uses exactly **one port**:
>
> | Port | Protocol | Purpose |
> |------|----------|---------|
> | Game Port | UDP | Game data and connection handling – all players connect through this one |
>
> CryoFall has no separate Query Port. You can see which Game Port applies to your server in the **dashboard**.

## Reserve the server for specific players

> [!WARNING]
> **No server password**
>
> CryoFall has **no server password**. If you want to open your server only for selected players, use the whitelist instead – see [Kick & Ban Players](/tutorials/gameserver/cryofall/kick-ban-players).
