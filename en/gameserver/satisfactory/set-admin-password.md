---
description: Set an admin password on a Satisfactory server
---

# How to Set an Admin Password on Your Satisfactory Server

You need the admin password to log in as an administrator in-game. You define it in the **Server Manager** – it is not stored in any configuration file you could edit via SFTP.

:::: info Note
Satisfactory stores the server name, the admin password and the server password in a file starting with `ServerSettings.` that contains the Game Port of your server in its name. This file is not a readable text file – so always set the password through the Server Manager.
::::

## Set the admin password while claiming

If no admin password has been set for your server yet, it counts as **unclaimed**. In that case you define the password right when you add the server in the Server Manager.

1. <b>Add the server</b><br>
   Add your server in the Server Manager – the process is described in [Join Server](join-server.md).

2. <b>Set a server name</b><br>
   The game first asks for a name for the server.

3. <b>Set the admin password</b><br>
   Then you define the admin password. After that you are the administrator of the server.

## Change the admin password

1. <b>Open the Server Manager</b><br>
   Start Satisfactory, select **Server Manager** in the main menu and choose your server.

2. <b>Authenticate</b><br>
   Switch to any tab other than **Status**, click **Authenticate** and log in with the current admin password.

3. <b>Open the server settings</b><br>
   Switch to the **Server Settings** tab.

4. <b>Change the password</b><br>
   Change the entry for the admin password there and confirm your input.

5. <b>Log in again</b><br>
   All admins then have to log in again with the new password via **Authenticate**.

:::: tip Tip
Only share the admin password with trusted players. Anyone who knows it has full control over your server. You can read more about this in [Add Admin](add-admin.md).
::::

:::: danger Forgot the admin password
If you no longer know the admin password, you can reset the server:

1. Stop the server via the dashboard.
2. Connect via [SFTP](../establish-sftp-connection.md) and open the directory `/.config/Epic/FactoryGame/Saved/SaveGames/`.
3. Delete the file starting with `ServerSettings.` that contains the Game Port of your server in its name.
4. Start the server. It now counts as unclaimed again and can be claimed anew.

This also removes the server name, the server password and the certificate of the server – existing save games are kept.
::::
