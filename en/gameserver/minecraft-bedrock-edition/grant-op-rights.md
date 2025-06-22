---
description: Step-by-step instructions on how to assign OP rights in Minecraft Bedrock Edition via the in-game chat, the server console or the permissions.json file.
---

# Assign OP rights in Minecraft Bedrock Edition: In-game chat, server console & permissions.json

## Assign OP rights via the ingame chat

::: warning Attention
To execute this command, you must already have OP rights. If you do not have these, use the [console](#console) or the [permissions.json](#permissions.json) method instead.
:::

1. <strong>Log in to your Minecraft server</strong>.

2. <strong>Open the chat with the appropriate key for your platform:</strong>

    - <strong>Windows 10:</strong> ```t```
    - <strong>PlayStation & Xbox:</strong> ```D-Pad right```
    - <strong>Switch:</strong> ```→ on the directional pad```
    - <strong>Mobile (Android/IOS):</strong> ```Tap on the chat icon (speech bubble)```

3. <strong>Enter the following command:</strong>

    ```
    /op <player name> # Makes the player an operator
    ```


## Assign OP rights via the server console {#console}

::: warning Attention
All commands must be entered in the console without ```/```!
:::

1. <strong>Open your dashboard and select your Minecraft Bedrock Edition server</strong>.

2. <strong>Navigate to the server console under the menu item "Overview"</strong>.

3. <strong>Enter the following command:</strong>

    ```
    op <player name> # Makes the player an operator
    ```

## Assign OP rights via the permissions.json file {#permissions.json}

1. <strong>Open your dashboard and select your Minecraft Bedrock Edition server</strong>.

2. <strong>Go to the file browser</strong>.

3. <strong>Open the file ```permissions.json```.</strong>

4. <strong>Insert the following entry within the square brackets ```[]```:</strong>

    ```
    {
        "permission": "operator",
        "xuid": "<playerxuid>"
    }
    ```

::: info Info
If you want to enter multiple players, separate the entries with a comma ```,```:
```
    {
        "permission": "operator",
        "xuid": "<player1xuid>"
    },
    {
        "permission": "operator",
        "xuid": "<player2xuid>"
    }
```
:::

<strong>Roles and permissions in Minecraft Bedrock</strong>

- <strong>Visitor:</strong> Can only view the world - no building or interacting.
- <strong>Member:</strong> Default role - can build, mine and craft.
- <strong>Operator:</strong> Has full administrative rights, including command usage and server management.

::: tip Tip
A player's XUID is displayed when the player joins the server - you can find it in the console.
:::