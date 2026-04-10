---
description: Kick and ban players on a Minecraft Java Edition server
---

# How to Kick and Ban Players on Your Minecraft Java Edition Server

As an operator you can kick or permanently ban players using commands. The commands work both in the in-game chat and in the server console (without `/`).

:::: info Note
You need OP rights to use these commands. See [Grant OP rights](grant-op-rights.md).
::::

## Kick a player

```
/kick <name> [reason]
```

The player is removed from the server but can rejoin.

## Ban a player

```
/ban <name> [reason]
```

The player is permanently banned from the server.

## Ban a player by IP

```
/ban-ip <ip>
```

The specified IP address is permanently banned from the server.

## Unban a player

```
/pardon <name>
```

The player's ban is lifted.

## Unban an IP

```
/pardon-ip <ip>
```

The IP ban is lifted.

:::: tip Tip
In the server console, commands are entered without `/`, e.g. `kick playername`.
::::

## All commands

| Command | Description |
|---------|-------------|
| `/kick <name> [reason]` | Kick a player |
| `/ban <name> [reason]` | Ban a player |
| `/ban-ip <ip>` | Ban an IP address |
| `/pardon <name>` | Unban a player |
| `/pardon-ip <ip>` | Unban an IP address |
