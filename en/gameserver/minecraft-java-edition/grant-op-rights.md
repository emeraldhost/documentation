---
description: Grant OP rights on a Minecraft Java Edition server
---

# How to Grant OP Rights on a Minecraft Java Server

## Assign OP rights via the in-game chat

::: warning Attention
To execute this command, you must already have OP rights. If you do not have these, use the [console](#console) or the [ops.json](#ops.json) method instead.
:::

::: info Info
When assigning OP rights, players automatically receive the OP level that is defined in the `server.properties` file under the `op-permission-level` entry.
:::

1. **Log in to your Minecraft server.**

2. **Open the chat. By default with the `t` key**

3. **Enter the following command:**

    ```
    /op <player name>     # Makes the player an operator
    ```

## Assign OP rights via the server console {#console}

::: warning Attention
All commands must be entered in the console without `/`!
:::

::: info Info
When assigning OP rights, players automatically receive the OP level that is defined in the `server.properties` file under the `op-permission-level` entry.
:::

1. **Open your dashboard and select your Minecraft Java Edition server.**

2. **Navigate to the server console under the menu item "Overview".**

3. **Enter the following command:**

    ```
    op <player name>     # Makes the player an operator
    ```

## Assign OP rights via the ops.json file {#ops.json}

1. **Connect to your server via [SFTP](../establish-sftp-connection.md) and open the file `ops.json`.**

2. **Insert the following entry within the square brackets `[]`:**

    ```
    {
        "uuid": "<playeruuid>",
        "name": "<game name>",
        "level": 4,
        "bypassesPlayerLimit": false
    }
    ```

3. **Save the changes and restart the server.**

::: info Info
If you want to enter several players, separate the entries with a comma `,`:

```
{
    "uuid": "<player1uuid>",
    "name": "<player1name>",
    "level": 4,
    "bypassesPlayerLimit": false
},
{
    "uuid": "<player2uuid>",
    "name": "<player2name>",
    "level": 4,
    "bypassesPlayerLimit": false
}
```

:::

**Explanation of the OP levels**

- **Level 1:** Can change protected spawn areas.
- **Level 2:** Can edit command blocks and use basic commands (except level 3-4 commands).
- **Level 3:** May execute sanctions such as `/kick`, `/ban` etc.
- **Level 4:** Has full administrative control, including server commands such as `/stop`.

::: info Info
`bypassesPlayerLimit` allows the player to join the server even if the player limit has been reached.
:::

::: tip Tip
You can find out the UUID of a player e.g. at **NameMC** on the basis of his name.
:::
