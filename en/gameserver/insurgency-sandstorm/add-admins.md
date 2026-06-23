---
description: "Add admins to an Insurgency: Sandstorm server"
---

# How to Add Admins to Your Insurgency: Sandstorm Server

Admins are set via the `Admins.txt` file by adding each player's **SteamID64**. An admin can then open the admin menu in-game (bound by default to the **Minus** key on the numpad).

## Add an admin

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Create the folder</b><br>
   Go to the folder `Insurgency/Config/Server/`. If the `Config` and `Server` folders do not exist yet, create them.

4. <b>Create Admins.txt</b><br>
   In this folder, create the file `Admins.txt` (if it does not already exist).

5. <b>Enter the SteamID64</b><br>
   Enter the [SteamID64](../steamid64-find-out.md) of each admin — **one ID per line**:

   ```
   76561198000000000
   76561198000000001
   ```

6. <b>Start the server</b><br>
   Save the file and start your server. Changes only take effect after a restart (or map change).

:::: tip Tip
You can create multiple admin lists with different names and choose which one loads via the launch parameter `-AdminList=FileName` (file name without `.txt`). This lets you switch quickly between different admin teams, for example.
::::

:::: info Note
Make sure the file is named exactly `Admins.txt` (not `Admins.txt.txt` — Windows hides known file extensions by default).
::::
