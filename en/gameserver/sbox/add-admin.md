---
description: "Add an admin to an s&box server"
---

# How to Add an Admin to Your s&box Server

On an s&box server you grant admin rights through the file `users.json`. What you enter is the player's **SteamID64** – a 17-digit number starting with `7656`.

:::: tip Tip
Here you can find a guide on how to find your [SteamID64](../steamid64-find-out.md).
::::

## Add an admin

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open users.json</b><br>
   Open the following file. If it does not exist yet, create it:

   ```
   /config/users.json
   ```

4. <b>Add the player</b><br>
   The file contains a list of players. Enter the SteamID64 and the permissions you want to grant:

   ```json
   [
     {
       "SteamId": "76561198012345678",
       "Claims": [ "admin" ],
       "Name": "Example player"
     }
   ]
   ```

5. <b>Start the server</b><br>
   Save the file and start your server.

## Structure of the file

| Field | Meaning |
|-------|---------|
| `SteamId` | SteamID64 of the player. It determines who receives the permissions. |
| `Claims` | List of permissions assigned to the player |
| `Name` | A label for your own reference – it has no effect on the permissions |

Additional admins are added as further entries in the same list, separated by a comma:

```json
[
  {
    "SteamId": "76561198012345678",
    "Claims": [ "admin" ],
    "Name": "Player 1"
  },
  {
    "SteamId": "76561198087654321",
    "Claims": [ "admin" ],
    "Name": "Player 2"
  }
]
```

:::: warning Warning
The file has to be valid JSON. A single missing or extra comma is enough to make the entire list unreadable, and nobody will receive admin rights.
::::

## Which claims are there?

The entries under `Claims` are free-form text values. Which of them actually do anything is decided by the game mode running on your server.

:::: danger Important
The official sandbox mode (`facepunch.sandbox`) only evaluates the claim `admin`. Among other things it unlocks kicking and banning in-game as well as cleaning up the world. The official documentation shows examples such as `kick`, `ban` or `restart` – those are purely illustrative and have no effect in sandbox mode. Therefore use `"Claims": [ "admin" ]`.
::::

:::: info Note
If you run a community game mode, check its documentation for the claims it expects. You can also give a player several claims at once: `"Claims": [ "admin", "moderator" ]`.
::::

## Changes while the server is running

The server watches the file `users.json` and applies changes to it without a restart.

:::: warning Warning
That watcher is only set up if the file already existed when the server started. If you create `users.json` for the first time while the server is running, you have to restart it once. After that, saving the file is enough.
::::

:::: info Note
The permissions from `users.json` only apply on a dedicated server like yours. When playing through a locally hosted session, the host is always the admin instead.
::::

:::: tip Tip
To learn how to remove players from your server as an admin, see [Kick & Ban Players](kick-ban-players.md).
::::
