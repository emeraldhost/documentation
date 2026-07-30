---
description: Add mods, custom maps and scripts to a Soldat 2 server
---

# How to Add Mods to Your Soldat 2 Server

Soldat 2 has no workshop and no mod package format. Instead, practically everything that makes up the game exists as an individual file inside the server directory – maps, game modes, modifiers, map cycles and scripts. You upload them via [SFTP](../establish-sftp-connection.md) and hook them up through the configuration or the console.

:::: warning Warning
Whether custom maps, modifiers and scripts are transferred to your players automatically is not documented. To be safe, also hand the files you upload to the server directly to your players – that way everyone is on the same state.
::::

## The folder structure

All folders are located in the main directory of your server:

| Folder | Contents |
|--------|----------|
| `Levels/` | Maps as JSON files, each inside its own subfolder |
| `Modifiers/Custom/` | Modifiers – change objects, weapon values and gameplay parameters |
| `Rules/Custom/` | Game modes and round rules |
| `Scripts/Custom/` | Custom C# scripts |
| `Cycles/Custom/` | Map cycles |

:::: info Note
Maps in Soldat 2 are `.json` files – not `.pms` files like in the first Soldat. Files from the predecessor do not work here.
::::

## Add custom maps

1. <b>Download the map</b><br>
   Download the map you want. A large collection can be found at `tms2.jrgp.org`.

2. <b>Stop the server</b><br>
   Stop your server via the **dashboard**.

3. <b>Upload the map</b><br>
   Upload the map into a subfolder of `Levels/` via [SFTP](../establish-sftp-connection.md), keeping the structure it ships with:

   ```
   Levels/<folder>/<mapname>.json
   ```

4. <b>Start the server</b><br>
   Start your server.

5. <b>Load the map</b><br>
   Open the console in the game and load the map with a game mode – the game mode is named exactly like the matching file in `Rules/`:

   ```
   rcon loadmap dm_epitaph Deathmatch
   ```

:::: warning Warning
The map name is given **without a path and without the `.json` extension**. The spelling is case sensitive – on your Linux server that matters. `rcon listmaps` shows which maps the server knows about.
::::

## Add modifiers

Modifiers are the quickest way to change the gameplay: they override the values of objects, weapons and gameplay parameters.

1. <b>Stop the server</b><br>
   Stop your server via the **dashboard**.

2. <b>Look at the reference file</b><br>
   Open the file `Modifiers/_default.json` via [SFTP](../establish-sftp-connection.md). It contains all default values and serves as a reference – **do not edit it**.

3. <b>Create your own modifier</b><br>
   Create a new file:

   ```
   Modifiers/Custom/MyModifier.json
   ```

4. <b>Enter your values</b><br>
   Only enter the values you want to change. The parameters live in the `"Objects"` section. Everything you leave out keeps its default value.

5. <b>Start the server</b><br>
   Save the file and start your server.

6. <b>Enable the modifier</b><br>
   Open the console and enable the modifier by its file name without `.json`:

   ```
   rcon addmodifier MyModifier
   rcon restart
   ```

:::: info Extend lists instead of replacing them
For values that contain a list you can add or remove single entries instead of rewriting the whole list: a leading `+` adds an entry, a `-` removes it.
::::

:::: warning Warning
`rcon addmodifier` only takes effect after a `rcon restart` of the round. Use `rcon removemodifier <name>` to turn a modifier off again.
::::

## Custom game modes through rule files

Game modes and round rules are JSON files inside `Rules/Custom/`. They control, for example, how long a round lasts and how many points are needed to win:

| Key | Meaning |
|-----|---------|
| `Match.MatchSecs` | Round duration in seconds |
| `Match.ScoreLimit` | Score limit at which the round ends |
| `GameScript` | Name of the C# script loaded for this game mode |

1. <b>Stop the server</b><br>
   Stop your server via the **dashboard**.

2. <b>Create a rule file</b><br>
   Copy an existing file from `Rules/` as a template and save it under a new name:

   ```
   Rules/Custom/MyMode.json
   ```

3. <b>Adjust the values</b><br>
   Change the values you want.

4. <b>Reference the mode</b><br>
   For your mode to be played, enter its file name without `.json` under `"Rules"` in your map rotation – see [Set up a map rotation](#set-up-a-map-rotation).

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: tip Tip
You can also test individual rule values while the server is running, without stopping it:

```
rcon set Match.MinimumPlayers 4
```

Such changes only apply to the running session.
::::

## Add custom scripts

For custom game logic, Soldat 2 ships a C# scripting system.

1. <b>Stop the server</b><br>
   Stop your server via the **dashboard**.

2. <b>Upload the script</b><br>
   Upload your `.cs` file via [SFTP](../establish-sftp-connection.md):

   ```
   Scripts/Custom/MyScript.cs
   ```

3. <b>Hook up the script</b><br>
   Reference the script through the `GameScript` key in a rule file inside `Rules/Custom/`. Alternatively you can load it through a modifier.

4. <b>Start the server</b><br>
   Start your server and check the server console in the **dashboard** to see whether the script compiled without errors.

:::: tip Tip
When you change a script you do not have to restart the server. The following command recompiles all scripts:

```
rcon reload
```
::::

:::: danger Important
Scripts run with the permissions of your server. Only install scripts from sources you trust.
::::

## Set up a map rotation

A map rotation is defined in a cycle file. The server works through the rounds listed in it one after another.

1. <b>Stop the server</b><br>
   Stop your server via the **dashboard**.

2. <b>Create a cycle file</b><br>
   Copy an existing file from `Cycles/` as a template and save it under a new name:

   ```
   Cycles/Custom/MyRotation.json
   ```

3. <b>Add the rounds</b><br>
   Every round consists of a game mode (`"Rules"`) and a map (`"Level"`) – both **without a file extension**:

   ```
   [{
     "Rules": "Deathmatch",
     "Level": "dm_epitaph"
   }]
   ```

4. <b>Enable the rotation</b><br>
   Enter the following values into the `autoconfig.ini`:

   ```
   GamesCycleFile=Cycles/Custom/MyRotation.json
   UseLobby=False
   AllowVoting=False
   ```

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: warning Warning
Without `UseLobby=False` and `AllowVoting=False` the lobby and player voting override your rotation – the server then jumps to maps other than the ones in your cycle file.
::::

:::: tip Tip
A rotation can also be loaded while the server is running:

```
rcon loadcycle Cycles/Custom/MyRotation.json
```
::::

## Commands while the server is running

| Command | Description |
|---------|-------------|
| `rcon listmaps` | Show available maps |
| `rcon loadmap <mapname> <gamemode>` | Load a map with a game mode |
| `rcon nextmap` | Switch to the next map |
| `rcon addmodifier <name>` | Enable a modifier |
| `rcon removemodifier <name>` | Disable a modifier |
| `rcon restart` | Restart the round – required for a modifier to take effect |
| `rcon loadcycle <file>` | Load a map cycle |
| `rcon reload` | Recompile the scripts |

## Editing the autoconfig.ini

:::: danger Important
The `autoconfig.ini` is completely rewritten when the server **stops**. Any change you write into the file while the server is running is lost in the process. Only edit the file while the server is stopped.
::::

:::: warning Warning
The values `Name`, `Port`, `WebSocketsPort`, `WebSocketsRconPort`, `RconPassword`, `MaxPlayers`, `GreetMessage`, `AdminPlayfabId` and `ServerPassword` are written from the **dashboard** into the `autoconfig.ini` on **every server start**. These values therefore belong in the dashboard, not in the file.
::::

:::: tip Tip
Back up your configuration and your custom content before making larger changes: [Create Backup](create-backup.md).
::::
