---
description: Add an admin to an Avorion server
---

# How to Add an Admin to Your Avorion Server

Administrators on an Avorion server are defined by their **SteamID64** – a 17-digit number starting with `7656`. You have three ways to do this: the dashboard, the file `admin.xml` or a command during operation.

:::: tip Tip
Here you can find a guide on how to find your [SteamID64](../steamid64-find-out.md).
::::

## Via the dashboard

1. <b>Open the dashboard</b><br>
   Open the **dashboard** of your server and switch to the **settings**.

2. <b>Enter the SteamID64</b><br>
   Enter the SteamID64 of the person you want in the **Admin ID** field. The field takes a single SteamID64 and has to be filled in for your server to start.

3. <b>Restart the server</b><br>
   Save the change and restart your server. The admin rights only take effect after a restart.

:::: info Several admins
Via the dashboard you define exactly one admin. If you want to make further people admins, use the next section and enter them directly in the `admin.xml`.
::::

## Via the admin.xml

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) or use the file browser in the dashboard.

3. <b>Open admin.xml</b><br>
   Navigate to the folder of your galaxy – where `server.ini` and `modconfig.lua` are located as well – and open the file:

   ```
   /galaxy/<galaxy name>/admin.xml
   ```

   :::: info Note
   If the file does not exist yet, start your server once so the folder structure is created, then stop it again.
   ::::

4. <b>Add the admins</b><br>
   Add one line per admin with the player name and the SteamID64:

   ```xml
   <administrators>
       <admin name="PlayerName" id="76561198012345678"/>
       <admin name="SecondAdmin" id="76561198087654321"/>
   </administrators>
   ```

5. <b>Start the server</b><br>
   Save the file and start your server.

## During operation

You can also grant admin rights without a restart – either through the console in the dashboard or in the in-game chat with a leading `/`:

```
/admin -a --name <player name> --id <SteamID64>
```

Remove admin rights again:

```
/admin -r --name <player name> --id <SteamID64>
```

:::: info Note
The player has to have been connected to your server at least once before they can be added this way.
::::

:::: warning Warning
Admin rights include kicking and banning players as well as stopping the server. Only grant them to people you trust.
::::

:::: tip Tip
To learn which commands are available to you as an admin and how to remove players, see [Kick & Ban Players](kick-ban-players.md).
::::
