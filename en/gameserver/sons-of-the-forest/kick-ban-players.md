---
description: Kick and ban players on a Sons Of The Forest server
---

# How to Kick and Ban Players on Your Sons Of The Forest Server

In Sons Of The Forest you kick and ban players directly in-game via the management menu. This requires you to be registered as a server owner.

:::: info Note
Sons Of The Forest has **no console commands** for kicking or banning. Commands like `/kick` or `/ban` come from its predecessor The Forest and do not work here. Management is done exclusively through the in-game menu.
::::

## Requirement

Your SteamID64 must be listed in the `ownerswhitelist.txt` file on the server. The [Add Admin](add-admin.md) guide explains how to do this.

## Kick or ban a player

1. <b>Join the server</b><br>
   Join your server with the Steam account whose SteamID64 is registered as an owner.

2. <b>Open the management menu</b><br>
   Press `ESC` and switch to the **Players** tab. There you will see all currently connected players.

3. <b>Select the player</b><br>
   Select the player you want to remove from the list.

4. <b>Kick or ban</b><br>
   Use the management function for that player:

   - **Kick** removes the player from the server. They can rejoin afterwards.
   - **Ban** removes the player and blocks them from your server permanently.

:::: warning Caution
There is no documented way to undo a ban via a server file. Use bans deliberately and prefer the kick function for short-term measures.
::::

:::: tip Tip
Both functions only work on players who are currently **connected**. A player who is already offline can no longer be selected in this menu.
::::
