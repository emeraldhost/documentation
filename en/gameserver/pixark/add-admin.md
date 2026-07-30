---
description: Add an admin to a PixARK server
---

# How to Add an Admin to Your PixARK Server

There are two ways to grant admin rights on a PixARK server:

| Method | When to use it |
|--------|----------------|
| **Admin list** with SteamID64 | For permanent admins. The rights apply automatically as soon as the listed player joins the server – no password and no command needed. |
| **Admin password** | For remote administration via RCON and for tools that connect to the server. |

:::: tip Tip
Here you can find a guide on how to find your [SteamID64](../steamid64-find-out.md).
::::

## Permanent admins via the admin list

Add the players to a text file on the server. They then receive their rights automatically when connecting.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. The admin list is only read on server start.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the file</b><br>
   Open the following file. If it does not exist yet, create it:

   ```
   /ShooterGame/Saved/AllowedCheaterSteamIDs.txt
   ```

4. <b>Enter the SteamID64</b><br>
   Enter exactly one SteamID64 per line. A SteamID64 has 17 digits and starts with `765611`:

   ```
   76561198012345678
   76561198087654321
   ```

   :::: warning Warning
   Only enter the plain number – no names, no comments, no commas. A single wrong entry can cause the file not to be evaluated at all.
   ::::

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: info Note
This method does not require any console command: the rights apply automatically as soon as a listed player joins the server.
::::

## Set the admin password

1. <b>Open the dashboard</b><br>
   Open the **dashboard** of your server and switch to the **Settings**.

2. <b>Enter the password</b><br>
   Enter your desired password in the field for the **admin password** (`ServerAdminPassword`).

3. <b>Restart the server</b><br>
   Save the change and restart your server so the new password is applied.

:::: danger Important
The admin password is also your **RCON password**. Anyone who knows it can control your server remotely. Use a different password than your server password and only share it with people you fully trust.
::::

## Use admin commands

Admin commands in PixARK start with the prefix `cheat`, for example:

```
cheat giveitemnum 001 1 1 0
```

:::: info Note
If you added yourself through the `AllowedCheaterSteamIDs.txt` file, the commands are available to you right after connecting.
::::

## Control the server via RCON

As an alternative to the game you can administer your server through RCON. That is handy when you are not in the game.

1. <b>Set the admin password</b><br>
   Set the admin password as described above first. Without an admin password no RCON login is possible.

2. <b>Gather the connection details</b><br>
   You need the **IP address**, the **RCON Port** from the dashboard and your **admin password**.

3. <b>Connect an RCON client</b><br>
   Connect with an RCON client. For ARK based servers **Arkon** has proven itself: enter the IP address, RCON Port and admin password there and establish the connection.

:::: warning Warning
Which commands a PixARK server accepts via RCON is not officially documented. Therefore always make permanent changes to your server settings in the **dashboard** and not via RCON – otherwise they are lost on the next restart.
::::
