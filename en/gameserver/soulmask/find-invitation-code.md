---
description: Find the Invitation Code on a Soulmask server
---

# How to Find the Invitation Code of Your Soulmask Server

The **Invitation Code** is a unique 25-character code that is automatically generated when the server starts for the first time. Players need this code to find your server in the server list.

## Via server console

1. <b>Start the server</b><br>
   Start your server via the dashboard.

2. <b>Open console</b><br>
   Open the **server console** in the dashboard.

3. <b>Read the code</b><br>
   The Invitation Code is displayed in the console during server startup. Look for the line:

   ```
   [SERVER UNIQUE ID:] XXXXXXXXXXXXXXXXXXXXX
   ```

   :::: tip Example
   ```
   [SERVER UNIQUE ID:] 6U1WE0O933CC7H4RFBSQ8ND47
   ```
   ::::

## Via log file

If you missed the code in the console, you can also find it in the log file:

1. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

2. <b>Open log file</b><br>
   Open the file:

   ```
   /WS/Saved/Logs/WS.log
   ```

3. <b>Search for code</b><br>
   Search for `SERVER UNIQUE ID` in the file. The code is displayed right after it.

## Invite players with Invitation Code

Share the Invitation Code with your players. This is how they can join:

1. <b>Start Soulmask</b><br>
   Launch Soulmask and select **Online Game** in the main menu.

2. <b>Select Private Server</b><br>
   Select the **Private Server** tab.

3. <b>Enter code</b><br>
   Paste the Invitation Code in the search field at the top right and press `Enter`.

4. <b>Join the server</b><br>
   Your server will appear in the list and can be selected.

:::: info Note
The Invitation Code stays the same as long as the server data is not reset.
::::
