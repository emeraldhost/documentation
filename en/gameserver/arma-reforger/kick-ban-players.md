---
description: Kick and ban players on an Arma Reforger server
---

# How to Kick and Ban Players on an Arma Reforger Server

::: warning Prerequisite
You must be logged in as admin to use these commands. See [Become Admin](become-admin.md).
:::

## Find Player ID

Before you can kick or ban a player, you need their player ID.

1. **Open the chat with the `/` key.**

2. **Enter the following command:**

    ```
    #players
    ```

3. **Note the ID of the desired player from the list.**

## Kick a Player

A kicked player is removed from the server but can rejoin immediately.

```
#kick <playerId>
```

**Example:**

```
#kick 5
```

## Ban a Player

A banned player cannot rejoin the server until the ban expires or is manually removed.

```
#ban <playerId> <duration>
```

The duration is specified in **seconds**. `0` means a permanent ban.

**Examples:**

| Command | Effect |
|---------|--------|
| `#ban 5 0` | Permanent ban |
| `#ban 5 3600` | Ban for 1 hour |
| `#ban 5 86400` | Ban for 24 hours |

## Remove a Ban

```
#ban remove <playerId>
```

## List All Bans

```
#ban list
```

::: tip Tip
Always use the numeric player ID instead of the player name to make sure the correct player is affected.
:::
