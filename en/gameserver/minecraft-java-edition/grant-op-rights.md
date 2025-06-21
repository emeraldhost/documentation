---
description: Step-by-step instructions on how to assign OP rights in Minecraft Java Edition via the in-game chat, the server console or the ops.json file.
---

# Assign OP rights in Minecraft Java Edition: In-game chat, server console & ops.json

## Assign OP rights via the in-game chat

::: warning Attention
To execute this command, you must already have OP rights. If you do not have these, use the [console](#console) or the [ops.json](#ops.json) method instead.
:::

::: info Info
When assigning OP rights, players automatically receive the OP level that is defined in the ```server.properties``` file under the ```op-permission-level``` entry.
:::

1. <strong>Log in to your Minecraft server</strong>.

2. <strong>Open the chat. By default with the ```t```</strong> key

3. <strong>Enter the following command:</strong>

    ```
    /op <player name>     # Makes the player an operator
    ```


## Assign OP rights via the server console {#console}

::: warning Attention
All commands must be entered in the console without ```/```!
:::

::: info Info
When assigning OP rights, players automatically receive the OP level that is defined in the ```server.properties``` file under the ```op-permission-level``` entry.
:::

1. <strong>Open your dashboard and select your Minecraft Java Edition server</strong>.

2. <strong>Navigate to the server console under the menu item "Overview"</strong>.

3. <strong>Enter the following command:</strong>

    ```
    op <player name>     # Makes the player an operator
    ```

## Assign OP rights via the ops.json file {#ops.json}

1. <strong>Open your dashboard and select your Minecraft Java Edition server</strong>.

2. <strong>Go to the file browser</strong>.

3. <strong>Open the file ```ops.json```.</strong>

4. <strong>Insert the following entry within the square brackets ```[]```:</strong>

    ```
    {
		"uuid": "<playeruuid>",
		"name": "<game name>",
		"level": 4,
		"bypassesPlayerLimit": false
	}
    ```

::: info Info
If you want to enter several players, separate the entries with a comma ```,```:
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

<strong>Explanation of the OP levels</strong>

- Level 1: Can change protected spawn areas.
- Level 2: Can edit command blocks and use basic commands (except level 3-4 commands).
- Level 3: May execute sanctions such as ```/kick```, ```/ban``` etc.
- Level 4: Has full administrative control, including server commands such as ```/stop```.

::: info Info
```bypassesPlayerLimit``` allows the player to join the server even if the player limit has been reached.
:::

::: tip Tip
You can find out the UUID of a player e.g. at <strong>NameMC</strong> on the basis of his name.
:::