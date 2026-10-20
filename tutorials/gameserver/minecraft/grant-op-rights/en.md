---
slug: "grant-op-rights"
language: "en"
title: "How to Grant OP Rights on a Minecraft Java Edition Server"
description: "Grant OP rights on a Minecraft Java Edition server"
tags: []
date: "2023-10-15"
visibility: "public"
updated: "2026-10-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Grant OP Rights"
sort: 20
related: ["gameserver/minecraft/manage-players", "gameserver/minecraft/enable-whitelist", "gameserver/minecraft/kick-ban-players", "gameserver/minecraft/fix-server-crashes"]
---

## Assign OP rights in the dashboard (recommended)

The easiest way to assign OP rights is the **Spieler** (Players) page of your server's dashboard. You don't need OP rights in the game yourself for this.

1. **Open the players page**\
   Open your server's dashboard and click **Spieler** (Players) in the left sidebar.

2. **Make the player an operator**\
   Click **Spieler hinzufügen** (Add player), enter the **Minecraft-Name** (Minecraft name), choose **Operator** under **Wohin?** (Where to?) and click **Op geben** (Give op). The player gets level 4.

3. **Adjust the level (optional)**\
   Open the player's detail page and choose a level from 1 to 4 under **Operator-Level** (Operator level) in the **Rechte und Zugang** (Permissions and access) box. In the **…** menu of the player list you can also use **Op-Level ändern** (Change op level) or **Op entziehen** (Remove op).

> [!IMPORTANT]
> The operator level is stored in the `ops.json` file and can only be changed while the server is stopped. If the server is running, Minecraft overwrites the change again.

You can find all features of the page under [Manage players](/tutorials/gameserver/minecraft/manage-players). Alternatively, you can still assign OP rights by command or via the `ops.json` file.

## Assign OP rights via the in-game chat

> [!WARNING]
> To execute this command, you must already have OP rights. If you do not have these, use the [console](#console) or the [ops.json](#ops.json) method instead.

> [!NOTE]
> When assigning OP rights, players automatically receive the OP level that is defined in the `server.properties` file under the `op-permission-level` entry.

1. **Log in**\
   Log in to your Minecraft server.

2. **Open the chat**\
   Open the chat. By default with the `t` key.

3. **Enter the command**\
   Enter the following command:

   ```text
   /op <player name>     # Makes the player an operator
   ```

## Assign OP rights via the server console {#console}

> [!WARNING]
> All commands must be entered in the console without `/`!

> [!NOTE]
> When assigning OP rights, players automatically receive the OP level that is defined in the `server.properties` file under the `op-permission-level` entry.

1. **Open the dashboard**\
   Open your dashboard and select your Minecraft Java Edition server.

2. **Open the console**\
   Navigate to the server console under the menu item "Overview".

3. **Enter the command**\
   Enter the following command:

   ```text
   op <player name>     # Makes the player an operator
   ```

## Assign OP rights via the ops.json file {#ops.json}

1. **Open ops.json**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and open the file `ops.json`.

2. **Add the entry**\
   Insert the following entry within the square brackets `[]`:

   ```text
   {
       "uuid": "<playeruuid>",
       "name": "<game name>",
       "level": 4,
       "bypassesPlayerLimit": false
   }
   ```

3. **Restart the server**\
   Save the changes and restart the server.

> [!NOTE]
> If you want to enter several players, separate the entries with a comma `,`:
>
> ```text
> {
>     "uuid": "<player1uuid>",
>     "name": "<player1name>",
>     "level": 4,
>     "bypassesPlayerLimit": false
> },
> {
>     "uuid": "<player2uuid>",
>     "name": "<player2name>",
>     "level": 4,
>     "bypassesPlayerLimit": false
> }
> ```

### OP Levels {#op-level}

| Level | Description |
|-------|-------------|
| 1 | Can change protected spawn areas |
| 2 | Can edit command blocks and use basic commands (except level 3-4 commands) |
| 3 | May execute sanctions such as `/kick`, `/ban` etc. |
| 4 | Has full administrative control, including server commands such as `/stop` |

> [!NOTE]
> `bypassesPlayerLimit` allows the player to join the server even if the player limit has been reached.

> [!TIP]
> You can find out the UUID of a player e.g. at NameMC on the basis of his name.
