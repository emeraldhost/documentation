---
slug: "kick-ban-players"
language: "en"
title: "How to Kick and Ban Players on Your Minecraft Java Edition Server"
description: "Kick and ban players on a Minecraft Java Edition server"
tags: []
date: "2026-04-11"
visibility: "public"
updated: "2026-10-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Kick & Ban Players"
sort: 26
related: ["gameserver/minecraft/manage-players", "gameserver/minecraft/grant-op-rights", "gameserver/minecraft/enable-whitelist", "gameserver/minecraft/use-tp-command"]
---

You can kick or ban players directly in the dashboard. Alternatively, as an operator you can do this by command in the in-game chat or in the server console (without `/`).

## Kick and ban players in the dashboard (recommended)

On the **Players** page of your server's dashboard you kick and ban players without commands. Every change is sent to the console as a command immediately.

1. **Open the players page**\
   Open your server's dashboard and click **Players** in the left sidebar.

2. **Kick or ban a player**\
   In the player list, open the **…** menu at the end of the row and choose **Kick** or **Ban**. You also find both buttons at the top of the player's detail page.

3. **Ban a player in advance (optional)**\
   You can also ban players who have never been on your server: click **Add player**, enter the **Minecraft name**, choose **Ban** under **Where to?** and, if needed, enter a reason of up to 120 characters in the **Reason (Optional)** field. The player sees it when trying to join. Then click **Ban**.

Banned players can no longer join the server, not even via the allowlist. The **Banned** tab lists all banned players. You can find more about the page under [Manage players](/tutorials/gameserver/minecraft/manage-players).

## Kick and ban players by command

> [!NOTE]
> You need OP rights to use these commands. See [Grant OP rights](/tutorials/gameserver/minecraft/grant-op-rights).

### Kick a player

```text
/kick <name> [reason]
```

The player is removed from the server but can rejoin.

### Ban a player

```text
/ban <name> [reason]
```

The player is permanently banned from the server.

### Ban a player by IP

```text
/ban-ip <ip>
```

The specified IP address is permanently banned from the server.

### Unban a player

```text
/pardon <name>
```

The player's ban is lifted.

### Unban an IP

```text
/pardon-ip <ip>
```

The IP ban is lifted.

> [!TIP]
> In the server console, commands are entered without `/`, e.g. `kick playername`.

### All commands

| Command | Description |
|---------|-------------|
| `/kick <name> [reason]` | Kick a player |
| `/ban <name> [reason]` | Ban a player |
| `/ban-ip <ip>` | Ban an IP address |
| `/pardon <name>` | Unban a player |
| `/pardon-ip <ip>` | Unban an IP address |
