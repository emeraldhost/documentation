---
description: Add an admin to a CryoFall server
---

# How to Add an Admin to Your CryoFall Server

Admins are called **operators** in CryoFall. What you enter is not a SteamID64 but the **in-game name** of the player – written exactly as it is shown in the bottom right corner of the main menu.

:::: danger Important
The operator commands in the game only work once you already are an operator. That means you cannot grant yourself the **first** operator rank from inside the game – use the console in the dashboard or the configuration file of your server for that.
::::

## Find your name

1. <b>Start CryoFall</b><br>
   Launch CryoFall and stay in the main menu.

2. <b>Read your name</b><br>
   Your account name is displayed in the bottom right corner of the main menu. Use exactly that spelling, including upper and lower case.

## Add an operator via the console

This is the quickest way and works while the server is running.

1. <b>Open the console</b><br>
   Open the console of your server via the dashboard.

2. <b>Enter the command</b><br>
   Enter the command **without** a leading slash and confirm with Enter:

   ```
   opAdd YourName
   ```

   :::: warning Caution
   `opAdd` only knows players who have already joined your server at least once. If your server is brand new, connect to it once first – or add yourself directly in the configuration file.
   ::::

3. <b>Check the result</b><br>
   The following command lists all registered operators:

   ```
   opList
   ```

## Add an operator via the configuration file

Alternatively you can add operators directly to the server configuration.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. The lists are read on server start.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the configuration</b><br>
   Open the following file:

   ```
   /Data/SettingsServer.xml
   ```

4. <b>Enter the names</b><br>
   Add the names inside the `<server>` section, separated by commas:

   ```xml
   <server_operators_list>YourName,SecondName</server_operators_list>
   ```

5. <b>Start the server</b><br>
   Save the file and start your server.

## Add more operators in the game

Once you are an operator yourself you can grant further rights directly in the game.

1. <b>Open the console</b><br>
   Press the `~` key in the game to open the console.

2. <b>Enter the command</b><br>
   In the game every command starts with `/`:

   ```
   /opAdd PlayerName
   ```

   :::: tip Tip
   The console auto-completes commands with the Tab key, so you do not have to memorise every command.
   ::::

## Moderators

Moderators can manage players – kick, ban and mute them – but do not have full operator access.

```xml
<server_moderators_list>Name1,Name2</server_moderators_list>
```

:::: info Note
Operators have moderator rights automatically. There is no need to add them to the moderator list as well.
::::

## Command overview

| Command | Description |
|---------|-------------|
| `/opAdd <playerName>` | Promote a player to operator |
| `/opList` | List all operators |
| `/opRemove <playerName>` | Revoke operator rights |
| `/moderatorAdd <playerName>` | Promote a player to moderator |
| `/moderatorList` | List all moderators |
| `/moderatorRemove <playerName>` | Revoke moderator rights |

:::: info Long form of the commands
Every one of these commands also has a written-out variant, for example `/admin.operator.add` instead of `/opAdd`. Both do the same thing.
::::

## What operators can do on top

As an operator you can open the in-game menu (`Esc` key) and use the **Edit** button to adjust things like the description, the welcome message and the game rates of your server without editing any files.

:::: warning Settings managed by the dashboard
Server name, description, server list, maximum players, autosave interval and the number of saved states are written from the **dashboard** into `SettingsServer.xml` on every start. If you change these values in the file or in the game they are lost on the next start – only change them in the dashboard.
::::

:::: tip Tip
To learn how to remove players from your server as an operator or moderator, see [Kick & Ban Players](kick-ban-players.md).
::::
