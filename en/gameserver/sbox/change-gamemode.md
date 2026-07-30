---
description: "Change the gamemode on an s&box server"
---

# How to Change the Gamemode on Your s&box Server

s&box has no fixed game selection: which gamemode runs on your server is defined by the **package ident** of a game mode from sbox.game.

## Find the package ident

Every gamemode on sbox.game has an address following the pattern `sbox.game/<organisation>/<package>`. You build the ident by replacing the slash with a dot.

| Address on sbox.game | Package ident |
|----------------------|---------------|
| `sbox.game/facepunch/sandbox` | `facepunch.sandbox` |
| `sbox.game/wpr/ttt` | `wpr.ttt` |

:::: info Note
Older guides still refer to the address `asset.party`. It now redirects to sbox.game, the structure of the ident is unchanged.
::::

## Change the gamemode permanently

1. <b>Open dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open settings</b><br>
   Navigate to the **Settings** or to the startup parameters of your server.

3. <b>Enter the gamemode</b><br>
   Enter the package ident of the desired gamemode after `+game`:

   ```
   +game facepunch.sandbox
   ```

4. <b>Restart the server</b><br>
   Save the setting and restart your server.

:::: tip Tip
You can name a map directly after the gamemode: `+game facepunch.sandbox facepunch.flatgrass`. See [Change Map](change-map.md) for details.
::::

## Switch the gamemode while the server is running

You can also switch the gamemode live via the **server console** in the dashboard:

```
game facepunch.sandbox
```

:::: warning Warning
The switch disconnects all connected players and reloads the server. This change only lasts until the next restart – to set the gamemode permanently, use the startup parameter `+game`.
::::

## What happens during a switch?

The server automatically downloads the gamemode along with all required content from the cloud and stores it in the `/download/` folder. That makes the first start of a new gamemode take a little longer.

:::: info Note
Your players do not have to install anything. Missing content including the game code is sent to the clients by the server when they join.
::::

:::: danger Important
An s&box server has no addon or mod folder where you could drop additional content. Which dependencies get loaded is decided solely by the gamemode package. If you want different content, pick a different gamemode.
::::
