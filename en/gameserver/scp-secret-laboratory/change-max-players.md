---
description: "Change the maximum number of players on a SCP: Secret Laboratory server"
---

# How to Change the Maximum Number of Players on Your SCP: Secret Laboratory Server

You set how many players can play on your server at the same time with the `max_players` option in the `config_gameplay.txt` file. The default value is `20`. You can find the basics of editing the configuration files in the [Edit configuration files](edit-config-files.md) guide.

:::: warning Warning
The path to the configuration files contains the game port of your server: `/.config/SCP Secret Laboratory/config/<Port>/`. Replace `<Port>` with the actual game port of your server. You can find the game port in the dashboard under **Overview**.
::::

## Limits for the player count

Before you change the value, keep these limits in mind:

- **Verified servers at most 60**: Under normal circumstances, verified servers may have at most 60 slots – servers with more than 60 slots are removed from the server list. Learn more in the [Get your server verified](get-server-verified.md) guide.
- **Reserved slots**: Players with a reserved slot can still join a full server – the player count can then be above `max_players`. Learn more in the [Interaction with reserved slots](#interaction-with-reserved-slots) section.

## Change the player count

1. <b>Find out the game port</b><br>
   Open the dashboard of your server and note the game port shown under **Overview**.

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Adjust the player count</b><br>
   Open the following file – replace `<Port>` with your game port:

   ```
   /.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt
   ```

   Find the `max_players` entry and enter the desired number of players:

   ```
   max_players: 20
   ```

   :::: info Example
   For a server with 32 slots, enter `max_players: 32`.
   ::::

5. <b>Start the server</b><br>
   Save the file and start your server via the dashboard. The new player count only applies after this start.

## Interaction with reserved slots

If `use_reserved_slots` is set to `true` in `config_gameplay.txt` (default), players from the `UserIDReservedSlots.txt` file can still join even when `max_players` players are already on the server. The player count can therefore be above `max_players`.

If `use_reserved_slots` is set to `false`, no reserved slots apply – `max_players` is then the limit for everyone. You can learn how to fill the list in the [Set up reserved slots](set-up-reserved-slots.md) guide.

## Minimum player count for the round start

:::: info Note
A round only starts once at least 2 players are on the server.
::::
