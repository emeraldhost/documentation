---
slug: "enable-allowlist"
language: "en"
title: "How to Enable the Allowlist on a Minecraft Bedrock Server"
description: "Enable the allowlist on a Minecraft Bedrock Edition server"
tags: []
date: "2026-07-04"
visibility: "public"
cta: "gameserver"
product_keys: ["minecraft-bedrock"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Enable Allowlist"
sort: 12
related: ["gameserver/minecraft-bedrock/disable-nether", "gameserver/minecraft-bedrock/download-world", "gameserver/minecraft-bedrock/grant-op-rights", "gameserver/minecraft-bedrock/increase-slots"]
---

An allowlist is a feature in Minecraft that allows server administrators to create a list of players who are allowed to join the server, while other players are denied. It lets you keep out unwanted players and only allow those you have approved.

> [!NOTE]
> On Bedrock the former "whitelist" has been called the **allowlist** since version **1.18.10**. The old `/whitelist` command still works as an alias, but the current name is `allowlist` (file: `allowlist.json`, `server.properties` entry: `allow-list`).

## Requirements

- Access to the dashboard and the server console
- Name of the player you want to add to the allowlist

## Enable the allowlist

1. **Select server**\
   Go to your Minecraft Bedrock Edition server in the dashboard.

2. **Open the file browser**\
   Open the file browser.

3. **Open the file**\
   Open the file `server.properties`.

4. **Find the entry**\
   Look for the following entry:

   ```text
   allow-list=false
   ```

5. **Change the value**\
   Change the value to `true`:

   ```text
   allow-list=true
   ```

6. **Save the changes**\
   Save the changes and restart the server.

## Add a player to the allowlist

You can add players via the **server console** in the dashboard, or as a player with [OP rights](/tutorials/gameserver/minecraft-bedrock/grant-op-rights) directly in the **in-game chat**.

> [!WARNING]
> **Caution**
>
> In the server console, commands are entered **without** `/`; in the in-game chat **with** `/`.

1. **Open the console or chat**\
   Open the server console in the dashboard, or open the in-game chat as an operator on the server.

2. **Add the player**\
   Enter the following command and replace `<name>` with the player's name:

   ```text
   allowlist add <name>
   ```

   In the in-game chat with a leading slash: `/allowlist add <name>`.

3. **Check the allowlist**\
   From now on only players on the allowlist can join the server. Try connecting with an account that is not on the allowlist – the connection should be rejected.

> [!TIP]
> Use `allowlist remove <name>` to remove a player again, and `allowlist list` to show all entries. The allowlist is stored in the file `allowlist.json`.
