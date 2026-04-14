---
description: Set the invite code on a Windrose server
---

# How to Set the Invite Code on Your Windrose Server

The invite code is required by players to find your server in-game. You can set it either via the dashboard or via the `ServerDescription.json` file.

:::: info Note
The invite code must be at least 6 characters long and may only contain the characters `0-9`, `a-z` and `A-Z`. It is case-sensitive. If you do not set a custom code, one will be generated automatically in `ServerDescription.json` on server startup.
::::

## Via the dashboard

1. <b>Open dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open settings</b><br>
   Navigate to the **Settings**.

3. <b>Set invite code</b><br>
   Enter the desired code in the **Invite Code** field and save the setting.

4. <b>Restart the server</b><br>
   Restart your server for the change to take effect.

## Via the config file

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open ServerDescription.json</b><br>
   Open the file `ServerDescription.json` at:

   ```
   /R5/ServerDescription.json
   ```

4. <b>Change invite code</b><br>
   Adjust the invite code value in the file.

5. <b>Start the server</b><br>
   Save the file and start your server.
