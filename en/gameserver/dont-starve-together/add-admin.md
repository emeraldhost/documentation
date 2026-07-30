---
description: Add an admin to a Don’t Starve Together server
---

# How to Add an Admin to Your Don’t Starve Together Server

Admins are defined on your server through the `adminlist.txt` file. That is where you enter the Klei user ID of every player who should receive admin rights.

:::: warning Warning
Don’t Starve Together does **not** use a SteamID64 for admins, but the Klei user ID. On online servers it always starts with `KU_`.
::::

## Find the Klei user ID

There are several ways to find your Klei user ID:

- **In game:** Click **Account** in the main menu. The account page opens in your browser and shows your user ID.
- **In the browser:** Sign in at [accounts.klei.com](https://accounts.klei.com/account/info) with your Steam account. Your user ID is shown in the account overview.
- **Via the console:** Press `~` in game and enter the following command:

  ```
  TheNet:GetUserID()
  ```

- **For other players:** If you already are an admin, this console command lists all players with their user ID:

  ```
  c_listallplayers()
  ```

  The output uses the format `[1] (KU_xxxxxxxx) PlayerName <character>`.

:::: tip Tip
You can also find the user ID on the server side: the shard folders `Master` and `Caves` contain a `server_chat_log.txt` file. The Klei user ID of the player who wrote a message is listed in front of every chat message.
::::

## Add the admin

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) or use the file browser in the dashboard.

3. <b>Open the cluster folder</b><br>
   Navigate to the folder that contains the `cluster.ini` file. That is your cluster folder.

4. <b>Open adminlist.txt</b><br>
   Open the `adminlist.txt` file there. If it does not exist yet, create it:

   ```
   <cluster folder>/adminlist.txt
   ```

5. <b>Enter the user IDs</b><br>
   Add exactly one Klei user ID per line — without commas and without quotation marks:

   ```
   KU_xxxxxxxx
   KU_yyyyyyyy
   ```

6. <b>Start the server</b><br>
   Save the file and start your server. The server only reloads the `adminlist.txt` on startup.

:::: info Note
The file is located in the cluster folder, so on the same level as `cluster.ini` — not in the shard folders `Master` or `Caves`. It automatically applies to all shards of your server.
::::

:::: tip Tip
If your server runs in offline mode, the user IDs start with `OU_` instead and consist of digits only. The format of the file stays the same.
::::
