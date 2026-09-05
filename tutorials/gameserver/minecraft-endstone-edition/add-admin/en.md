---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your Minecraft Endstone Edition Server"
description: "Add an admin to a Minecraft Endstone Edition server"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/minecraft-endstone-edition/add-mods", "gameserver/minecraft-endstone-edition/add-savegame", "gameserver/minecraft-endstone-edition/create-backup", "gameserver/minecraft-endstone-edition/download-savegame"]
---

Endstone does not come with an admin system of its own, it uses the operator levels of the Bedrock Dedicated Server. All Endstone admin commands – such as `/ban` or `/reload` – are tied to the **operator** level.

## Permission levels at a glance

| Level | Meaning |
|-------|---------|
| `visitor` | Can only look at the world – no building and no interaction |
| `member` | Default level – can build, mine and craft |
| `operator` | Full admin rights including all admin commands |

> [!IMPORTANT]
> For commands to be usable **in the in-game chat**, the following entry has to be set in the `server.properties` file in the main folder of your server:
>
> ```text
> allow-cheats=true
> ```
>
> If it is set to `false`, even a player with the operator level cannot run commands in the chat. In the console of your server the commands are available regardless of this setting.

## Add an admin via the console

This is the usual way if you do not have operator rights yourself yet.

1. **Open the console**\
   Open the **dashboard** of your server and switch to the console.

2. **Enter the command**\
   Enter the following command with the player name:

   ```text
   op <playername>
   ```

3. **Wait for the confirmation**\
   The server confirms the change. If the player is online, they receive their operator rights immediately.

> [!NOTE]
> In the console of your server you enter commands without a leading `/`. In the in-game chat you write them with `/`.

## Add an admin in the game

> [!WARNING]
> **Caution**
>
> To use this method you have to be an operator yourself already. Otherwise use the console.

1. **Join the server**\
   Connect to your server.

2. **Open the chat**\
   Open the chat with the key matching your device or through the chat icon.

3. **Enter the command**\
   Enter the following command:

   ```text
   /op <playername>
   ```

## Revoke admin rights

```text
/deop <playername>
```

This removes the operator rights from the player again.

## Commands at a glance

| Command | Description |
|---------|-------------|
| `/op <playername>` | Grants operator rights to the given player |
| `/deop <playername>` | Removes the operator rights from the given player |

## Add an admin through permissions.json

Alternatively you can add a player to the permission file directly. That file uses the player's **XUID**, not their name.

> [!TIP]
> The XUID of a player is shown in the console of your server as soon as the player joins.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) or use the file browser in the dashboard.

3. **Open permissions.json**\
   In the main folder of your server, open the file:

   ```text
   permissions.json
   ```

4. **Add the entry**\
   Add the following entry inside the square brackets:

   ```json
   [
       {
           "permission": "operator",
           "xuid": "2535413418839840"
       }
   ]
   ```

   > [!NOTE]
   > If you want to add several players, separate the entries with a comma:
   >
   > ```json
   > [
   >     {
   >         "permission": "operator",
   >         "xuid": "2535413418839840"
   >     },
   >     {
   >         "permission": "member",
   >         "xuid": "2535413418839841"
   >     }
   > ]
   > ```

5. **Start the server**\
   Save the file and start your server.

> [!WARNING]
> **Caution**
>
> Make sure the JSON stays valid: every entry sits in curly brackets, entries are separated by commas, and there is **no** comma after the last entry. If the file is malformed, the server cannot read it. Therefore check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing.

> [!TIP]
> To learn how to remove players from your server as an admin, see [Kick & Ban Players](/tutorials/gameserver/minecraft-endstone-edition/kick-ban-players).
