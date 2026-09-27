---
slug: "add-admin"
language: "en"
title: "How to Add an Admin on a Hytale Server"
description: "Add an admin on a Hytale server"
tags: []
date: "2026-01-15"
visibility: "public"
updated: "2026-09-27"
cta: "gameserver"
product_keys: ["hytale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/hytale/change-gamemode", "gameserver/hytale/change-max-players", "gameserver/hytale/change-max-view-radius", "gameserver/hytale/change-motd"]
---

On your Hytale server, admins (operators) are placed in the permission group `hytale:Admin`, which lets them use all commands. The server stores these rights in the `permissions.json` file in the main directory.

## Requirement

You need the player's name or UUID. Using the name only works while the player is online on the server. With the UUID, you can also make players admin who are currently offline.

> [!TIP]
> Every player can see their own UUID in-game with the command `/whoami`.

## How to Grant Admin Rights

1. **Open dashboard**\
   Open the dashboard of your Hytale server.

2. **Enter the Command**\
   Enter the following command in the console:

   ```text
   op add <playername>
   ```

   Alternatively, use the player's UUID:

   ```text
   op add <UUID>
   ```

3. **Confirmation**\
   The console shows the message "... is now an operator!". If the player is online, they receive the message "You have been made an operator." and have admin rights right away.

## How to Remove Admin Rights

To remove admin rights from a player, use:

```text
op remove <playername>
```

Here, too, you can use the UUID instead of the name.

## How to Appoint Additional Admins In-Game

Players with admin rights can appoint additional admins directly in-game:

```text
/op add <playername>
```

> [!NOTE]
> Commands in the server console do not require a slash (/) at the beginning. In-game, the slash must be used.

## What Does the "Allow operators" Setting Do?

In the **Settings** of your dashboard, you will find the **Allow operators** field. It is set to `1` by default and enables the `/op self` command. With it, any player can make themselves admin in-game. Running `/op self` again removes the rights.

> [!WARNING]
> As long as **Allow operators** is set to `1`, any player who can join your server can give themselves admin rights with `/op self`. It is best to grant admin rights via the console and then set the field to `0`.

How to turn off `/op self`:

1. **Open dashboard**\
   Open the dashboard of your Hytale server.

2. **Open Settings**\
   Navigate to the **Settings**.

3. **Disable Allow operators**\
   Set the **Allow operators** field to `0`.

4. **Restart the Server**\
   Restart your server for the change to take effect.

> [!NOTE]
> The field only affects the `/op self` command. Admins you have already appointed keep their rights, and `op add` and `op remove` keep working.
