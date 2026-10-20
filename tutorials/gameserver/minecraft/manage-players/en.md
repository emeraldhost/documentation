---
slug: "manage-players"
language: "en"
title: "How to Manage Players on Your Minecraft Java Edition Server"
description: "Manage the allowlist, operators, bans and game mode of your Minecraft players directly in the dashboard"
tags: []
date: "2026-10-20"
visibility: "public"
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

On the **Spieler** (Players) page of your Minecraft server's dashboard you see who is playing right now, who has been on your server before and who has which permissions. You manage the allowlist, operators and bans in one place – no commands needed.

> [!NOTE]
> Changes take effect immediately: every change is sent as a command to your server's **Konsole** (Console). There you will then see e.g. "Made <name> a server operator".

## Open the Players Page

Open your server's dashboard and click **Spieler** (Players) in the left sidebar.

At the top of the page you find four cards:

- **Gerade online** (Online now) – how many players are playing right now, e.g. "1 von 20 Plätzen" (1 of 20 slots)
- **Allowlist** – how many players are on the list, with the **Allowlist aktiv** (Allowlist active) switch
- **Operatoren** (Operators) – how many players are operators and how many of them are online right now
- **Gebannt** (Banned) – how many players are banned

## Turn the Allowlist On and Off

The allowlist (formerly "whitelist") defines who may join your server. While it is off, the card shows "Jeder kann beitreten" (Anyone can join).

1. **Turn on the allowlist**\
   On the **Allowlist** card, turn on the **Allowlist aktiv** (Allowlist active) switch.

2. **Add players**\
   Add every player who should still be able to join – see [Add players](#add-players).

> [!WARNING]
> While the allowlist is active, only players on the list can join your server. It is best to add yourself first.

## Search the Player List

Below the cards you find the tabs **Online**, **Allowlist**, **Operatoren** (Operators), **Gebannt** (Banned) and **Alle bekannten Spieler** (All known players), each with the number of players. Use the **Name oder UUID** (Name or UUID) search field to find a specific player.

The table shows for each player:

| Column | Content |
|--------|---------|
| **Spieler** (Player) | Name and shortened UUID |
| **Rechte** (Permissions) | e.g. **Operator 4** |
| **Online** | since when the player has been online |
| **Zuerst gesehen** (First seen) | when the player first joined your server |

Your server continuously reports to the dashboard who is online.

### Actions in the Player List

The **…** menu at the end of a row gives you these actions, depending on the player:

- **Details** – opens the [player's detail page](#player-detail-page)
- **Nachricht senden** (Send message)
- **Kicken** (Kick)
- **Op entziehen** (Remove op) and **Op-Level ändern** (Change op level)
- **Zur Allowlist hinzufügen** (Add to allowlist)
- **Bannen** (Ban)

## Add Players {#add-players}

With **Spieler hinzufügen** (Add player) you can add a player even if they have never been on your server.

1. **Open the dialog**\
   Click **Spieler hinzufügen** (Add player) at the top right.

2. **Enter the name**\
   In the **Minecraft-Name** (Minecraft name) field, enter the name your fellow player uses in Minecraft. 3 to 16 characters made of letters, numbers and `_` are allowed. The UUID is looked up at Mojang automatically and saved, so the entry stays correct even after a name change.

3. **Choose the target**\
   Under **Wohin?** (Where to?), choose what should happen to the player:

   | Option | Effect | Button |
   |--------|--------|--------|
   | **Allowlist** | Counts as soon as you turn on the allowlist. | **Zur Allowlist hinzufügen** (Add to allowlist) |
   | **Operator** | Gets level 4 and may use all commands in the game. | **Op geben** (Give op) |
   | **Bannen** (Ban) | Can no longer join the server, not even via the allowlist. | **Bannen** (Ban) |

4. **Confirm**\
   Click the matching button. When banning, you can first enter a reason of up to 120 characters in the **Grund (Optional)** (Reason, optional) field. The player sees it when trying to join.

## Send a Message to Everyone

1. **Open the dialog**\
   Click **Nachricht an alle** (Message to everyone) at the top. The dialog shows how many players are online right now and will see the message in the chat.

2. **Write the message**\
   Enter your text in the **Nachricht** (Message) field, e.g. "Restart in 5 minutes, find yourselves a safe spot." The message may be up to 200 characters long. Below it you see a preview of how it appears in the chat:

   ```text
   [Server] Your message
   ```

3. **Send**\
   Click **Senden** (Send).

> [!TIP]
> You don't have to announce restarts by hand: with [scheduled tasks](/tutorials/gameserver/set-up-scheduled-tasks) you can have restarts run automatically.

## Player Detail Page {#player-detail-page}

If you click a player in the list (or **Details** in the **…** menu), their detail page opens. At the top you see the name, badges such as **Online** or **Op-Level 4** and the **Kicken** (Kick) and **Bannen** (Ban) buttons. **Spieler** (Players) takes you back to the overview.

While the player is online, permissions, game mode and kicking take effect immediately. Inventory, position and statistics, on the other hand, show the last save.

### Save Data

Here you see the player's inventory and position. Minecraft only creates the file once the player has played for the first time and the server has saved – until then this section shows "Noch kein Speicherstand" (No save data yet).

### Game Mode

In the right column you find the player's UUID (to copy), when they were first and last seen, and the **Spielmodus** (Game mode). Choose **Überleben** (Survival), **Kreativ** (Creative), **Abenteuer** (Adventure) or **Zuschauer** (Spectator). The change takes effect immediately via the console.

> [!TIP]
> You set the default game mode for all new players under [Change the game mode](/tutorials/gameserver/minecraft/change-gamemode).

### Permissions and Access

In the **Rechte und Zugang** (Permissions and access) box you control with switches:

- **Auf der Allowlist** (On the allowlist) – the player may join while the allowlist is active
- **Operator** – the player may use commands in the game, depending on the level

Under **Operator-Level** (Operator level) you choose a level from 1 to 4. Level 4 allows all commands, including `/stop` and `/save-all`. You can find what each level means under [Grant OP rights](/tutorials/gameserver/minecraft/grant-op-rights#op-level).

> [!IMPORTANT]
> The operator level is stored in the `ops.json` file and can only be changed while the server is stopped. If the server is running, Minecraft overwrites the change again.

### History

Under **Verlauf** (History) you see who on your team changed what for this player, e.g. "Nachricht gesendet" (Message sent) or "Zum Operator gemacht" (Made operator).

### Statistics

Under **Statistiken** (Statistics) you see what Minecraft tracks for the player across all play sessions. The values come from the `world/players/stats/<UUID>.json` file.
