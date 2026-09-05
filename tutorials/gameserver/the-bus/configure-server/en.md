---
slug: "configure-server"
language: "en"
title: "How to Configure Your The Bus Server"
description: "Configure a The Bus server using the dashboard and admin menu"
tags: []
date: "2026-02-24"
visibility: "public"
cta: "gameserver"
product_keys: ["the-bus"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Configure Server"
sort: 10
related: ["gameserver/the-bus/change-traffic", "gameserver/the-bus/change-weather", "gameserver/the-bus/create-backup", "gameserver/the-bus/download-savegame"]
---

You can configure your The Bus server via the **dashboard** and the **in-game admin menu**.

## Settings in the Dashboard

Open the dashboard of your server and navigate to the **Settings**. There you can adjust the following options:

| Setting | Description |
|---------|-------------|
| **Server Name** | The displayed name of your server |
| **Server Password** | Password that players need to enter to join |
| **Admin Password** | Password to protect access to the admin menu |
| **Max Players** | The maximum number of players on the server |
| **Server List** | Show server in the public server list |
| **Branch** | Select game version (e.g. `beta`) |

> [!WARNING]
> **Important**
>
> It is strongly recommended to set an admin password. Without a password, any player can open the admin menu and change settings.

## In-Game Admin Menu

Players with Owner or Admin permissions can open the **Admin Menu** via the pause menu.

The following settings are available:

| Setting | Description |
|---------|-------------|
| **Map** | Select the active map |
| **Operating plan** | Set the operating plan for bus routes |
| **Weather** | Change the current weather |

## Available Commands

The following commands can be entered in the in-game chat and require Owner or Admin permissions.

| Command | Description |
|---------|-------------|
| `/commands` | List all available commands |
| `/list` | Show all players |
| `/owner <player>` | Promote player to Owner |
| `/admin <player>` | Promote player to Admin |
| `/mod <player>` | Promote player to Moderator |
| `/user <player>` | Demote player to User |
| `/kick <player>` | Kick player from server |
| `/ban <player>` | Permanently ban player |
| `/unban <player>` | Unban player |
| `/tempban <player> <minutes>` | Temporarily ban player |
| `/mute <player>` | Mute player |
| `/unmute <player>` | Unmute player |
| `/say <message>` | Send message to chat |
| `/send <message>` | Send message to chat |
| `/whisper <player> <message>` | Send private message to a player |
| `/time <time>` | Change time of day |
| `/date <date>` | Change date |
| `/weather <weather>` | Change weather |
| `/map <map>` | Change active map |
| `/mapList` | Show available maps |
| `/operatingPlan <plan>` | Set operating plan |
| `/fleet <fleet>` | Set fleet |
| `/tp <player> <x> <y> <z>` | Teleport player to coordinates |
| `/tpd <player> <x> <y> <z>` | Teleport player with direction |
| `/fastTravel` | Enable/disable fast travel |
| `/traffic <value>` | Change traffic density |
| `/tickets <0-100>` | Change ticket chance (percent) |
| `/aiBus` | Enable/disable AI buses |
| `/spawnBus` | Spawn bus at stop |
| `/clearBusses` | Delete uncontrolled buses on the map |
| `/dlc` | Activate or deactivate a DLC |
| `/serverName <name>` | Set server name |
| `/serverDescription <text>` | Set server description |
| `/serverLink <link>` | Set server links |
| `/serverPublic` | Toggle server public/private |
| `/serverPassword <password>` | Set server password |
| `/adminPassword <password>` | Set admin password |
| `/maxPlayers <count>` | Set maximum player count |
| `/reload` | Reload server |
| `/exit` | Shut down server |
| `/stop` | Shut down server |
