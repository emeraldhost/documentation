---
slug: "use-rcon"
language: "en"
title: "How to Use RCON on Your Insurgency: Sandstorm Server"
description: "Use RCON on an Insurgency: Sandstorm server"
tags: []
date: "2026-06-23"
visibility: "public"
cta: "gameserver"
product_keys: ["insurgency-sandstorm"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Use RCON"
sort: 23
related: ["gameserver/insurgency-sandstorm/set-map-cycle", "gameserver/insurgency-sandstorm/set-server-password", "gameserver/insurgency-sandstorm/setup-coop-server", "gameserver/insurgency-sandstorm/team-kill-settings"]
---

RCON lets you remotely control and moderate your server – for example to kick or ban players, change the map or send messages. The commands can be run via an RCON tool or directly in the server console in the dashboard.

## RCON credentials

RCON is **already enabled** on your server – you don't need to configure anything. You only need the RCON password and the RCON port:

- **RCON password**\
  You can find and change the password in the dashboard in the **RCON Password** field.

- **RCON port**\
  You can find the RCON port in the dashboard in the **port overview**.

> [!WARNING]
> Treat the RCON password like an admin password and only share it with trusted people. Change the default password before first use.

## Connect with an RCON tool

1. **Open an RCON tool**\
   Open an RCON tool such as **mcrcon** or a comparable RCON client.

2. **Enter the connection details**
   - **Host:** your server's IP address (without the port)
   - **Port:** the RCON port from the dashboard
   - **Password:** your RCON password from the dashboard

3. **Run commands**\
   Once connected, you can run the commands below.

> [!TIP]
> You can also enter RCON commands directly in the **server console** in the dashboard – without any external tool.

## RCON commands

| Command | Description |
|---------|-------------|
| `help` | Displays a list of all commands |
| `listplayers` | Lists all connected players |
| `kick [id/netid/name] [reason]` | Kicks a player from the server |
| `ban [id/netid/name] [minutes] [reason]` | Bans a player for the given time |
| `permaban [id/netid/name] [reason]` | Bans a player permanently |
| `unban [id/netid/name]` | Unbans a player |
| `listban` | Displays the list of banned players |
| `say [message]` | Sends a message to all players |
| `travel [travel URL]` | Changes the server to a different map |
| `travelscenario [scenario]` | Changes to a different scenario |
| `restartround [0, 1]` | Restarts the current round (`1` also swaps the teams) |
| `maps [filter]` | Lists available maps |
| `scenarios [filter]` | Lists available scenarios |
| `listgamemodeproperties [filter]` | Lists all properties of the current game mode |
| `gamemodeproperty [property] [value]` | Sets or displays a game mode property |
