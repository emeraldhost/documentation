---
slug: "manage-players"
language: "en"
title: "How to Manage Players on Your Minecraft Java Edition Server"
description: "Manage the allowlist, operators, bans, game mode, inventory and statistics of your Minecraft players directly in the dashboard"
tags: []
date: "2026-10-20"
visibility: "public"
updated: "2026-10-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Manage Players"
sort: 39
related: ["gameserver/minecraft/grant-op-rights", "gameserver/minecraft/enable-whitelist", "gameserver/minecraft/kick-ban-players", "gameserver/minecraft/change-gamemode"]
---

On the **Players** page of your Minecraft server's dashboard you see who is playing right now, who has been on your server before and who has which permissions. You manage the allowlist, operators and bans in one place – no commands needed.

> [!NOTE]
> Changes take effect immediately: every change is sent as a command to your server's **Console**. There you will then see e.g. "Made <name> a server operator".

## Open the Players Page

Open your server's dashboard and click **Players** in the left sidebar.

At the top of the page you find four cards:

- **Online now** – how many players are playing right now, e.g. "1 of 20 slots"
- **Allowlist** – how many players are on the list, with the **Allowlist on** switch
- **Operators** – how many players are operators and how many of them are online right now
- **Banned** – how many players are banned

## Turn the Allowlist On and Off

The allowlist (formerly "whitelist") defines who may join your server. While it is off, the card shows "Everyone can join".

1. **Turn on the allowlist**\
   On the **Allowlist** card, turn on the **Allowlist on** switch.

2. **Add players**\
   Add every player who should still be able to join – see [Add players](#add-players).

> [!WARNING]
> While the allowlist is active, only players on the list can join your server. It is best to add yourself first.

## Search the Player List

Below the cards you find the tabs **Online**, **Allowlist**, **Operators**, **Banned** and **All known players**, each with the number of players. Use the search field to find a specific player by name or UUID.

The table shows for each player:

| Column | Content |
|--------|---------|
| **Player** | Name and shortened UUID |
| **Rights** | e.g. **Operator 4** |
| **Online** | since when the player has been online |
| **First seen** | when the player first joined your server |

Your server continuously reports to the dashboard who is online.

### Actions in the Player List

The **…** menu at the end of a row gives you these actions, depending on the player:

- **Details** – opens the [player's detail page](#player-detail-page)
- **Send message**
- **Kick**
- **Remove op** and **Change op level**
- **Add to Allowlist**
- **Ban**

## Add Players {#add-players}

With **Add player** you can add a player even if they have never been on your server.

1. **Open the dialog**\
   Click **Add player** at the top right.

2. **Enter the name**\
   In the **Minecraft name** field, enter the name your fellow player uses in Minecraft. 3 to 16 characters made of letters, numbers and `_` are allowed. The UUID is looked up at Mojang automatically and saved, so the entry stays correct even after a name change.

3. **Choose the target**\
   Under **Where to?**, choose what should happen to the player:

   | Option | Effect | Button |
   |--------|--------|--------|
   | **Allowlist** | Counts as soon as you turn on the allowlist. | **Add to Allowlist** |
   | **Operator** | Gets level 4 and may use every command in the game. | **Make op** |
   | **Ban** | Can no longer join the server, not even through the allowlist. | **Ban** |

4. **Confirm**\
   Click the matching button. When banning, you can first enter a reason of up to 120 characters in the **Reason (Optional)** field. The player sees it when trying to join.

## Send a Message to Everyone

1. **Open the dialog**\
   Click **Message everyone** at the top. The dialog shows how many players are online right now and will see the message in the chat.

2. **Write the message**\
   Enter your text in the message field, e.g. "Restart in 5 minutes, find yourselves a safe spot." The message may be up to 200 characters long. Below it you see a preview of how it appears in the chat:

   ```text
   [Server] Your message
   ```

3. **Send**\
   Send the message with the button below the field.

> [!TIP]
> You don't have to announce restarts by hand: with [scheduled tasks](/tutorials/gameserver/set-up-scheduled-tasks) you can have restarts run automatically.

## Player Detail Page {#player-detail-page}

If you click a player in the list (or **Details** in the **…** menu), their detail page opens. At the top you see the name, badges such as **Online** or **Op level 4** and the **Kick** and **Ban** buttons. The back link takes you to the **Players** overview.

While the player is online, permissions, game mode and kicking take effect immediately. Inventory, position and statistics, on the other hand, show the last save – the info box tells you how many minutes ago that was.

> [!NOTE]
> Minecraft only creates the player's save file once the player has played for the first time and the server has saved. Until then the detail page shows no inventory, position or statistics yet.

### Inventory

The **Inventory** section shows the player's items like in the game: armor, offhand, inventory and hotbar. Using the **Inventory** and **Ender chest** tabs you switch between the normal inventory and the ender chest.

Next to it you see:

- **Used … of 41 slots** – how many inventory slots are filled
- **In hand** – the item the player is currently holding
- **Armor** – how many of the 4 armor pieces the player is wearing
- **Life**, **Hunger** and **Experience** – health, food bar and experience level

With the **Heal**, **Feed**, **Starve** and **Kill** buttons you refill the player's health or food bar, empty the food bar or kill the player.

The values come from the `world/players/data/<UUID>.dat` file. Below it you see when it was last saved.

### Position and Spawn Point

In the right column, **Position** shows the player's coordinates (x, y, z) and the dimension they are in.

The **Spawn point** box shows:

- **Spawn point** – where the player respawns, e.g. **World spawn**
- **Last death** – the dimension and coordinates of the last death

With **Teleport to the spawn point** you send the player back to their spawn point.

### Game Mode

In the right column you also find the player's UUID (to copy), when they were first and last seen, their play time and the **Game mode**. Choose **Survival**, **Creative**, **Adventure** or **Spectator**. The change takes effect immediately through the console.

> [!NOTE]
> The mode shown is the state of the last save. If the game mode has changed in the game since then, the dashboard only shows it after the next save.

> [!TIP]
> You set the default game mode for all new players under [Change the game mode](/tutorials/gameserver/minecraft/change-gamemode).

### Permissions and Access

In the **Permissions and access** box you control with switches:

- **On the Allowlist** – the player may join while the allowlist is on
- **Operator** – the player may use commands in the game, depending on the level

Under **Operator level** you choose a level from 1 to 4. Level 4 allows every command, `/stop` and `/save-all` too. You can find what each level means under [Grant OP rights](/tutorials/gameserver/minecraft/grant-op-rights#op-level).

> [!IMPORTANT]
> The operator level is stored in the `ops.json` file and can only be changed while the server is stopped. If the server is running, Minecraft overwrites the change again.

### History

Under **History** you see what your team changed for this player, e.g. "Message sent" or "Made operator".

### Statistics

Under **Statistics** you see what Minecraft counts for the player across all play sessions:

| Value | Meaning |
|-------|---------|
| **Play time** | how long the player has played on your server in total |
| **Deaths** | how often the player has died, including when the last death was |
| **Players defeated** | how many other players they have defeated, with a ratio |
| **Blocks mined** | how many blocks the player has mined |
| **Distance** | how far the player has traveled, including the share covered sprinting |
| **Most mined** | which blocks the player has mined most often |

The values come from the `world/players/stats/<UUID>.json` file.
