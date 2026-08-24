---
description: "Set up reserved slots on a SCP: Secret Laboratory server"
---

# How to Set Up Reserved Slots on Your SCP: Secret Laboratory Server

With reserved slots, players you have added to a list — for example your team or your regulars — can still join the server even when it is full. The feature consists of two parts: the `use_reserved_slots` option in the `config_gameplay.txt` file and the player list in the `UserIDReservedSlots.txt` file. You can find the basics of editing the configuration files in the [Edit configuration files](edit-config-files.md) guide.

:::: warning Warning
The path to the configuration files contains the game port of your server: `/.config/SCP Secret Laboratory/config/<Port>/`. Replace `<Port>` with the actual game port of your server. You can find the game port in the dashboard under **Overview**.
::::

## Set up reserved slots

1. <b>Find out the game port</b><br>
   Open the dashboard of your server and note the game port shown under **Overview**.

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Enable reserved slots</b><br>
   Open the following file — replace `<Port>` with your game port:

   ```
   /.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt
   ```

   Find the `use_reserved_slots` entry and make sure it is set to `true` — this is already the default value:

   ```
   use_reserved_slots: true
   ```

5. <b>Add players to the list</b><br>
   In the same port folder, open the `UserIDReservedSlots.txt` file:

   ```
   /.config/SCP Secret Laboratory/config/<Port>/UserIDReservedSlots.txt
   ```

   Add each ID on its own line. Steam players are added in the format `SteamID64@steam`, Discord users in the format `DiscordID@discord` — the same format used when [setting up a whitelist](set-up-whitelist.md):

   ```
   76561198801452050@steam
   123456789012345678@discord
   ```

   You can find your [SteamID64](../steamid64-find-out.md) using the linked guide.

6. <b>Start the server</b><br>
   Save both files and start your server via the dashboard so the changes take effect.

:::: info Note
Reserved slots are not a whitelist: a [whitelist](set-up-whitelist.md) locks the server for everyone who is not listed. Reserved slots, on the other hand, still let anyone join — listed players simply get a spot held for them.
::::

:::: tip Tip
Add yourself and your team to `UserIDReservedSlots.txt` — that way you can still get on the server at peak times, for example to moderate.
::::
