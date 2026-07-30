---
description: Kick and ban players on a Frozen Flame server
---

# How to Kick and Ban Players on Your Frozen Flame Server

On a Frozen Flame server you remove players through **RCON**. No command for kicking or banning players directly inside the game is documented.

:::: info Note
See [Add Admin](add-admin.md) for how to connect via RCON. Remember that the password has to be entered in the format `admin:<RCON password>`.
::::

## Kick or ban a player

1. <b>Connect via RCON</b><br>
   Connect to your server with an RCON client – see [Add Admin](add-admin.md).

2. <b>Find the PlayerID</b><br>
   List the connected players together with their IDs:

   ```
   Admin_GetOnlinePlayers
   ```

   Players who are currently offline can be found through the stored profiles:

   ```
   Admin_ListUserProfiles
   ```

3. <b>Run the command</b><br>
   Run the desired command with the PlayerID, for example:

   ```
   Admin_KickPlayer 123456789 RuleBreaking
   ```

:::: info Note
The angle brackets in the commands below are placeholders only – do not type them.
::::

## Kick a player

```
Admin_KickPlayer <PlayerID> <Reason>
```

The player is disconnected from the server but can rejoin at any time.

## Ban a player

```
Admin_Ban <PlayerID> <Seconds> <Reason>
```

The duration of the ban is given in **seconds**. `Admin_Ban 123456789 3600 Griefing` therefore bans the player for one hour.

:::: warning Warning
Frozen Flame has no documented value for a permanent ban. Values such as `0` or `-1` are not documented and may behave unexpectedly. If you want to ban a player indefinitely, enter a correspondingly large number of seconds instead – for example `31536000` for one year.
::::

## Lift a ban

```
Admin_Unban <PlayerID>
```

:::: info Note
No file listing banned players is documented. Bans are therefore always lifted through RCON – write down the PlayerID before you ban someone.
::::

## Mute a player in the chat

```
Admin_Chatban <PlayerID> <Seconds> <Reason>
```

```
Admin_ChatUnban <PlayerID>
```

Here as well the duration is given in seconds.

## Remove a profile

```
Admin_RemoveUserProfile <PlayerID>
```

```
Admin_RemoveProfile <PlayerID>
```

:::: danger Important
`Admin_RemoveProfile` removes the player **including their save data** – their progress on your server is gone. `Admin_RemoveUserProfile` only removes the profile. Create a [backup](create-backup.md) beforehand if you are unsure.
::::

## Command overview

| Command | Description |
|---------|-------------|
| `Admin_GetOnlinePlayers` | Show connected players with their PlayerID |
| `Admin_ListUserProfiles` | List the stored player profiles |
| `Admin_KickPlayer <PlayerID> <Reason>` | Disconnect a player from the server |
| `Admin_Ban <PlayerID> <Seconds> <Reason>` | Ban a player for the given time |
| `Admin_Unban <PlayerID>` | Lift a ban |
| `Admin_Chatban <PlayerID> <Seconds> <Reason>` | Mute a player in the chat |
| `Admin_ChatUnban <PlayerID>` | Unmute a player |
| `Admin_RemoveUserProfile <PlayerID>` | Remove the profile of a player |
| `Admin_RemoveProfile <PlayerID>` | Remove a player including their save data |
| `Admin_ChatMessage [Message]` | Send a message to all players |

:::: info Note
The exact format of the PlayerID is not documented. Always use the IDs returned by `Admin_GetOnlinePlayers` or `Admin_ListUserProfiles` instead of entering an ID from another source.
::::
