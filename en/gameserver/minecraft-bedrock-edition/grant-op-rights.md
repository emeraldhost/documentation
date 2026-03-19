---
description: Step-by-step instructions on how to assign OP rights in Minecraft Bedrock Edition via the in-game chat, the server console or the permissions.json file.
---

# Assign OP rights in Minecraft Bedrock Edition: In-game chat, server console & permissions.json

## Assign OP rights via the ingame chat

:::: warning Attention
To execute this command, you must already have OP rights. If you do not have these, use the [console](#console) or the [permissions.json](#permissions.json) method instead.
::::

1. <b>Log in</b><br>
   Log in to your Minecraft server.

2. <b>Open chat</b><br>
   Open the chat with the appropriate key for your platform:

    - **Windows 10:** ```t```
    - **PlayStation & Xbox:** ```D-Pad right```
    - **Switch:** ```→ on the directional pad```
    - **Mobile (Android/IOS):** ```Tap on the chat icon (speech bubble)```

3. <b>Enter command</b><br>
   Enter the following command:

    ```
    /op <player name> # Makes the player an operator
    ```

## Assign OP rights via the server console {#console}

:::: warning Attention
All commands must be entered in the console without ```/```!
::::

1. <b>Open dashboard</b><br>
   Open your dashboard and select your Minecraft Bedrock Edition server.

2. <b>Open console</b><br>
   Navigate to the server console under the menu item "Overview".

3. <b>Enter command</b><br>
   Enter the following command:

    ```
    op <player name> # Makes the player an operator
    ```

## Assign OP rights via the permissions.json file {#permissions.json}

1. <b>Open dashboard</b><br>
   Open your dashboard and select your Minecraft Bedrock Edition server.

2. <b>Open file browser</b><br>
   Go to the file browser.

3. <b>Open file</b><br>
   Open the file ```permissions.json```.

4. <b>Insert entry</b><br>
   Insert the following entry within the square brackets ```[]```:

    ```
    {
        "permission": "operator",
        "xuid": "<playerxuid>"
    }
    ```

:::: info Info
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

::::

**Roles and permissions in Minecraft Bedrock**

- **Visitor:** Can only view the world - no building or interacting.
- **Member:** Default role - can build, mine and craft.
- **Operator:** Has full administrative rights, including command usage and server management.

:::: tip Tip
A player's XUID is displayed when the player joins the server - you can find it in the console.
::::
