---
slug: "join-server"
language: "en"
title: "How to Join Your Space Station 14 Server"
description: "Join a Space Station 14 server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["space-station-14"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 3
related: ["gameserver/space-station-14/add-admin", "gameserver/space-station-14/create-backup", "gameserver/space-station-14/kick-ban-players"]
---

Space Station 14 is played exclusively through the official **SS14 launcher**. There is no way to join via Steam or an in-game connection window. The launcher offers two options: the server list or a direct connection via **Direct Connect To Server**.

## Find connection details

> [!IMPORTANT]
> You can find the IP address as well as the **Game Port** and the **Query Port** of your server in the **dashboard** of your server. Always enter the values shown there in the launcher and do not rely on fixed default values.

## Connect directly

A direct connection is the most reliable way onto your server, because it does not depend on whether your server shows up in the public server list.

1. **Start the launcher**\
   Start the SS14 launcher and sign in with your SS14 account.

2. **Open the direct connection**\
   Click on **Direct Connect To Server**.

3. **Enter the server address**\
   Enter the IP address and the Query Port of your server, separated by a colon:

   ```text
   <IP address>:<Query Port>
   ```

   > [!NOTE]
   > You do not have to specify a scheme – the launcher automatically adds `ss14://`. If your server runs behind HTTPS, you can prefix `ss14s://` instead. An IPv6 address has to be written in square brackets, for example `[fd11:5ee:beef::1]`.

4. **Connect**\
   Confirm your input. The launcher automatically downloads the matching client content of your server and starts the game.

5. **Save the server**\
   With **Add Favorite** you store the server permanently in the launcher and do not have to type the address again.

## Via the server list

For your server to show up in the public server list (hub), you have to enable that explicitly – by default the listing is **disabled**.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open server_config.toml**\
   Open the file `server_config.toml`. It is located in the main directory of your server, next to the server application `Robust.Server`.

4. **Enable the listing**\
   Add the following section:

   ```toml
   [hub]
   advertise = true
   ```

   Optionally you can also set `server_url` (a link to your community, e.g. Discord) and `tags`.

5. **Start the server**\
   Save the file and start your server.

6. **Search for the server**\
   Search for the name of your server in the server list of the launcher.

> [!WARNING]
> **Server does not appear in the list**
>
> If the server console shows a message such as `[ERRO] hub: Error status while advertising server: [UnprocessableEntity] "Unable to contact status address"`, the hub could not reach your server. In that case check whether you are using the correct ports from the dashboard and whether your server is running. Until that is sorted out you can always reach your server through the direct connection.

## Which ports does Space Station 14 use?

> [!NOTE]
> A Space Station 14 server uses two ports, which usually share the same number:
>
> | Port | Protocol | Purpose |
> |------|----------|---------|
> | Game Port | UDP | Transfer of the game data (configuration value `port` in the `[net]` section) |
> | Query Port | TCP | Status interface that the launcher and the server list query (configuration value `bind` in the `[status]` section) |
>
> The address you enter in the launcher first contacts the **Query Port**. The launcher derives the UDP game connection from it. You can see which values apply to your server in the **dashboard**.

> [!WARNING]
> If the Game Port and the Query Port of your server differ, the launcher cannot determine the game connection on its own. In that case set the game address explicitly in the `server_config.toml`:
>
> ```toml
> [status]
> connectaddress = "udp://<IP address>:<Game Port>"
> ```
