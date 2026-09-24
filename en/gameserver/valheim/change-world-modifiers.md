---
description: Change the world modifiers on a Valheim server
---

# How to Change the World Modifiers on Your Valheim Server

World modifiers let you adjust the difficulty of your world, for example the strength of enemies, the penalty on death, the amount of resources, the frequency of raids or the rules for portals. The modifiers are stored in the world itself. You can change them directly in-game via the console, or prepare a world locally with the modifiers you want and upload it to your server.

:::: info Note
Create a [backup](create-backup.md) before making changes so you can always return to the previous state.
::::

## Change modifiers in-game via the console

This way you change the modifiers of your existing world while the server is running. The change takes effect immediately and is stored permanently with the next world save.

1. <b>Become an admin</b><br>
   Add yourself as an admin on your server, see [Add Admin](add-admin.md). Only admins are allowed to run these commands on the server.

2. <b>Enable the console</b><br>
   Enable the developer console in the game settings if it is not active yet.

3. <b>Join the server</b><br>
   Connect to your server, see [Join Server](join-server.md).

4. <b>Enter a command</b><br>
   Open the console with `F5`, enter one of the following commands and confirm with Enter. Upper and lower case do not matter.

### Set a preset

```
setworldpreset <preset>
```

The available presets are `Normal`, `Casual`, `Easy`, `Hard`, `Hardcore`, `Immersive` and `Hammer`. Example:

```
setworldpreset Hard
```

A preset replaces all previously set world modifiers.

### Change a single modifier

```
setworldmodifier <modifier> <value>
```

| Modifier | Meaning | Possible values |
|----------|---------|-----------------|
| `Combat` | Combat difficulty | `VeryEasy`, `Easy`, `Hard`, `VeryHard` |
| `DeathPenalty` | Penalty on death | `Casual`, `VeryEasy`, `Easy`, `Hard`, `Hardcore` |
| `Resources` | Amount of resources | `MuchLess`, `Less`, `More`, `MuchMore`, `Most` |
| `Raids` | Frequency of raids | `None`, `MuchLess`, `Less`, `More`, `MuchMore` |
| `Portals` | Rules for portals | `Casual`, `Hard`, `VeryHard` |

Example:

```
setworldmodifier Combat Hard
```

### Reset all modifiers

```
resetworldkeys
```

Resets all world modifiers to their defaults.

:::: warning Warning
`setworldpreset` and `resetworldkeys` reset all world modifiers, including switches such as no map or no build cost that are active in your world. Your boss progress is kept.
::::

:::: tip Tip
You cannot reset a single modifier to its normal value with `setworldmodifier`, because `Normal` is not a valid value. In this case, reset all modifiers with `resetworldkeys` and then set the modifiers you want again. Switches such as no map can then be turned back on in the world modifiers menu, see [Prepare and upload a world with modifiers](#prepare-and-upload-a-world-with-modifiers).
::::

:::: info Note
The commands are run on the server, so you do not get a confirmation in-game. Feedback from the server appears in the console in the dashboard, for invalid input for example `Invalid preset` or `Invalid input, possible valid values are: ...`. If you are not registered as an admin, the game reports `You are not admin`.
::::

## Prepare and upload a world with modifiers

This way you set the modifiers in the game's world modifiers menu. It also offers switches such as no map or no build cost, which you cannot set individually with `setworldpreset` and `setworldmodifier`. The modifiers are stored in the world and applied by your server when it loads the world.

1. <b>Create the world locally</b><br>
   Start Valheim, choose your character and create a new world on the world selection screen, for example named `MyWorld`.

2. <b>Set the world modifiers</b><br>
   Select the world on the world selection screen and open the world modifiers menu. Choose a preset or adjust the individual modifiers and switches, then confirm your selection.

3. <b>Enter the world once</b><br>
   Start the world locally once and leave it again so that all world files are created.

4. <b>Upload the world</b><br>
   Upload the world to your server and enter its name in the **World Name** field, as described in [Add Savegame](add-savegame.md).

5. <b>Start the server</b><br>
   Start your server. It loads the world with the selected modifiers.

:::: tip Tip
You can change the modifiers of your existing server world the same way: Download the world folder to your PC with [Download Savegame](download-savegame.md), copy it into the local directory `%userprofile%\AppData\LocalLow\IronGate\Valheim\worlds_local`, adjust the modifiers on the world selection screen and then upload the world again.
::::

:::: warning Warning
After downloading, do not start your server again until you have uploaded the changed world. Otherwise everything that happens on the server in the meantime is lost. If your local `worlds_local` directory already contains a world with the same name, move it somewhere else first so that you do not overwrite it.
::::
