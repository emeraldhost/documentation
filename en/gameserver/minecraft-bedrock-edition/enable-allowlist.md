---
description: Enable the allowlist on a Minecraft Bedrock Edition server
---

# How to Enable the Allowlist on a Minecraft Bedrock Server

An allowlist is a feature in Minecraft that allows server administrators to create a list of players who are allowed to join the server, while other players are denied. It lets you keep out unwanted players and only allow those you have approved.

:::: info Note
On Bedrock the former "whitelist" has been called the **allowlist** since version **1.18.10**. The old `/whitelist` command still works as an alias, but the current name is `allowlist` (file: `allowlist.json`, `server.properties` entry: `allow-list`).
::::

## Requirements

- Access to the dashboard and the server console
- Name of the player you want to add to the allowlist

## Enable the allowlist

1. <b>Select server</b><br>
   Go to your Minecraft Bedrock Edition server in the dashboard.

2. <b>Open the file browser</b><br>
   Open the file browser.

3. <b>Open the file</b><br>
   Open the file `server.properties`.

4. <b>Find the entry</b><br>
   Look for the following entry:

   ```
   allow-list=false
   ```

5. <b>Change the value</b><br>
   Change the value to `true`:

   ```
   allow-list=true
   ```

6. <b>Save the changes</b><br>
   Save the changes and restart the server.

## Add a player to the allowlist

:::: warning Caution
In the console, all commands must be entered without `/`!
::::

1. <b>Open the console</b><br>
   In the dashboard, navigate to the server console under the "Overview" menu item.

2. <b>Add the player</b><br>
   Enter the following command and replace `<name>` with the player's name:

   ```
   allowlist add <name>
   ```

3. <b>Check the allowlist</b><br>
   From now on only players on the allowlist can join the server. Try connecting with an account that is not on the allowlist — the connection should be rejected.

:::: tip Tip
Use `allowlist remove <name>` to remove a player again, and `allowlist list` to show all entries. The allowlist is stored in the file `allowlist.json`.
::::
