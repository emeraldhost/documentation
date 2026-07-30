---
description: Ban players on a Colony Survival server
---

# How to Ban Players on Your Colony Survival Server

In Colony Survival you lock disruptive players out through the **blacklist** of your server. In addition you can use a **whitelist** to open your server only to specific players from the start. You control both directly in the in-game chat.

:::: danger Colony Survival has no kick command
There is **no command to temporarily throw a player off the server**. The `Kick` button in the game belongs to the colony management and only removes a co-owner from that colony – the player stays on the server. Anyone who has to leave the server needs to be blocked through the blacklist.
::::

:::: info Note
You need permissions of the `god` group to manage the blacklist and whitelist. See [Add Admin](add-admin.md).
::::

## Ban a player

1. <b>Open the chat</b><br>
   Press `T` in the game to open the chat.

2. <b>Add the player to the blacklist</b><br>
   Enter the following command – either with the player name or with the SteamID64:

   ```
   /blacklist add Sam
   ```

   ```
   /blacklist add 76561198012345678
   ```

   :::: tip Tip
   It is best to use the [SteamID64](../steamid64-find-out.md). It always stays the same, even if the player changes their name. Put names containing spaces in quotation marks.
   ::::

3. <b>Verify the ban</b><br>
   Display the current list and check whether the player is on it:

   ```
   /blacklist
   ```

The next time banned players try to connect, they get a message that the connection was refused because they are blacklisted.

## Lift a ban

```
/blacklist remove 76561198012345678
```

You can clear the entire list with:

```
/blacklist clear
```

## Open the server only to specific players

The whitelist turns the principle around: as soon as it is in use, only listed players can join your server. Everyone else gets a message that they are not whitelisted.

```
/whitelist add 76561198012345678
```

```
/whitelist remove 76561198012345678
```

```
/whitelist clear
```

:::: warning Warning
Add yourself and all of your fellow players before relying on the whitelist – otherwise you lock yourself out of your own world.
::::

## Command overview

| Command | Description |
|---------|-------------|
| `/blacklist` | Shows all banned players |
| `/blacklist add <player>` | Locks a player out |
| `/blacklist remove <player>` | Lifts the ban again |
| `/blacklist clear` | Clears the blacklist |
| `/whitelist` | Shows the whitelist |
| `/whitelist add <player>` | Adds a player to the whitelist |
| `/whitelist remove <player>` | Removes a player from the whitelist |
| `/whitelist clear` | Clears the whitelist |

:::: info Note
Both the player name and the SteamID64 work as `<player>`. If a player is currently offline, always use the SteamID64.
::::

:::: info Note
Some hosts additionally offer a blacklist file for editing, which takes one SteamID64 per line. Whether and where that file exists depends on the version and the host – the reliable way are the in-game commands.
::::
