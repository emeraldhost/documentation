---
description: Add an admin to a Satisfactory server
---

# How to Add an Admin to Your Satisfactory Server

Satisfactory does not have an **admin list**. There is no admin file and no player ID you have to enter anywhere. Anyone who knows the **admin password** of your server and logs in with it via the **Server Manager** has admin rights.

:::: info Note
Admin rights apply to managing the server in the Server Manager – that is, settings, worlds and save games. In the game itself there is neither an admin role nor separate admin chat commands.
::::

## Claim the server

If no name and no admin password have been set for your server yet, it counts as **unclaimed**. In that case the game guides you through two dialogs when you connect for the first time.

1. <b>Add the server</b><br>
   Add your server in the Server Manager – the process is described in [Join Server](join-server.md).

2. <b>Set a server name</b><br>
   The game first asks for a name for the server. This name is shown in your server list later on.

3. <b>Set the admin password</b><br>
   Then you define the admin password. After that you are the administrator of the server.

## Log in as admin

On a server that has already been claimed, log in like this:

1. <b>Open the Server Manager</b><br>
   Start Satisfactory, select **Server Manager** in the main menu and choose your server.

2. <b>Switch tabs</b><br>
   Select any tab other than **Status**. The game reports that you are not authenticated.

3. <b>Authenticate</b><br>
   Click **Authenticate**.

4. <b>Enter the admin password</b><br>
   Enter the admin password and confirm. You then have access to all tabs of the Server Manager.

## Add another admin

Since there is no admin list, you make a fellow player an admin by giving them the admin password.

1. <b>Share the admin password</b><br>
   Share the admin password of your server with the person who should get admin rights.

2. <b>Let them add the server</b><br>
   That person adds your server in their own Server Manager – you can find the IP address and the **Game Port** in your **dashboard**.

3. <b>Let them authenticate</b><br>
   They log in with the admin password via **Authenticate** and then have the same rights as you.

:::: warning Warning
Anyone with the admin password has full control over the server – including settings, save games and passwords. Only share it with people you trust.
::::

## Revoke admin rights

Individual admins cannot be removed because there is no list. You revoke the rights by changing the admin password – afterwards all admins have to log in again with the new password.

You change the server name as well as the admin and server password on the **Server Settings** tab of the Server Manager. The detailed steps are described in [Set Admin Password](set-admin-password.md).

:::: danger Forgot the admin password
If you no longer know the admin password, you can reset the server:

1. Stop the server via the dashboard.
2. Connect via [SFTP](../establish-sftp-connection.md) and open the directory `/.config/Epic/FactoryGame/Saved/SaveGames/`.
3. Delete the file starting with `ServerSettings.` that contains the Game Port of your server in its name.
4. Start the server. It now counts as unclaimed again and can be claimed anew.

This also removes the server name, the server password and the certificate of the server – existing save games are kept. If the server is shown as offline in your server list afterwards, remove the entry in the Server Manager and add it again.
::::

:::: warning No kick and no ban
Satisfactory does not offer a function to kick or ban players – neither in the game nor in the Server Manager. The console in the Server Manager has no player management commands either. Who is allowed on your server is controlled solely through the server password on the **Server Settings** tab under **Player password protection**.
::::
