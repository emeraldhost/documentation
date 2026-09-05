---
slug: "grant-op-rights"
language: "en"
title: "How to Grant OP Rights on Your Minecraft Bedrock Edition Server"
description: "Step-by-step instructions on how to grant OP rights on your Minecraft Bedrock Edition server."
tags: []
date: "2025-06-22"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
product_keys: ["minecraft-bedrock"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Grant OP Rights"
sort: 13
related: ["gameserver/minecraft-bedrock/download-world", "gameserver/minecraft-bedrock/enable-allowlist", "gameserver/minecraft-bedrock/increase-slots", "gameserver/minecraft-bedrock/join-server"]
---

## Assign OP rights via the ingame chat

> [!WARNING]
> To execute this command, you must already have OP rights. If you do not have these, use the [console](#console) or the [permissions.json](#permissions.json) method instead.

1. **Log in**\
   Log in to your Minecraft server.

2. **Open chat**\
   Open the chat with the appropriate key for your platform:

    - **Windows 10:** `t`
    - **PlayStation & Xbox:** `D-Pad right`
    - **Switch:** `→ on the directional pad`
    - **Mobile (Android/iOS):** `Tap on the chat icon (speech bubble)`

3. **Enter command**\
   Enter the following command:

    ```text
    /op <player name> # Makes the player an operator
    ```

## Assign OP rights via the server console {#console}

> [!WARNING]
> All commands must be entered in the console without `/`!

1. **Open dashboard**\
   Open your dashboard and select your Minecraft Bedrock Edition server.

2. **Open console**\
   Navigate to the server console under the menu item "Overview".

3. **Enter command**\
   Enter the following command:

    ```text
    op <player name> # Makes the player an operator
    ```

## Assign OP rights via the permissions.json file {#permissions.json}

1. **Open dashboard**\
   Open your dashboard and select your Minecraft Bedrock Edition server.

2. **Open file browser**\
   Go to the file browser.

3. **Open file**\
   Open the file `permissions.json`.

4. **Insert entry**\
   Insert the following entry within the square brackets `[]`:

    ```text
    {
        "permission": "operator",
        "xuid": "<playerxuid>"
    }
    ```

> [!NOTE]
> If you want to enter multiple players, separate the entries with a comma `,`:
>
> ```text
> {
>     "permission": "operator",
>     "xuid": "<player1xuid>"
> },
> {
>     "permission": "operator",
>     "xuid": "<player2xuid>"
> }
> ```

**Roles and permissions in Minecraft Bedrock**

- **Visitor:** Can only view the world - no building or interacting.
- **Member:** Default role - can build, mine and craft.
- **Operator:** Has full administrative rights, including command usage and server management.

> [!TIP]
> A player's XUID is displayed when the player joins the server - you can find it in the console.
