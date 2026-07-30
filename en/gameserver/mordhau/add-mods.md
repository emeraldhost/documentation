---
description: Add mods to a Mordhau server through mod.io
---

# How to Add Mods to Your Mordhau Server

Mods for Mordhau are distributed through **mod.io** – not through the Steam Workshop. You do not upload any files: you only enter the **numeric mod.io ID** of the mod into the `Game.ini`, and the server downloads it on start.

:::: danger Important
Guides that mention Steam Workshop IDs for Mordhau are wrong. Mordhau exclusively uses [mod.io](https://mod.io/g/mordhau).
::::

## Find the mod ID

1. <b>Open mod.io</b><br>
   Open the [Mordhau section on mod.io](https://mod.io/g/mordhau) and pick the mod you want.

2. <b>Copy the ID</b><br>
   Every mod has its own numeric ID, for example `1700790`. That exact number is what you enter later – not the name of the mod.

   :::: tip Tip
   Many mod descriptions contain the finished lines for the `Game.ini`, including the ID and – for map mods – the matching map name. Always read the description before adding a mod.
   ::::

## Add the mods

1. <b>Stop the server</b><br>
   Stop your server via the **dashboard**.

   :::: warning Warning
   Only edit the `Game.ini` while the server is stopped. Mordhau completely rewrites the file on shutdown and strips comments in the process – changes made while it is running are lost.
   ::::

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the Game.ini</b><br>
   Open the following file:

   ```
   /Mordhau/Saved/Config/LinuxServer/Game.ini
   ```

4. <b>Enter the mod IDs</b><br>
   In the section `[/Script/Mordhau.MordhauGameSession]` add one `Mods=` line per mod:

   ```ini
   [/Script/Mordhau.MordhauGameSession]
   Mods=1700790
   Mods=2673283
   ```

   :::: info Note
   Every ID needs its own line. Writing multiple IDs into one line separated by commas does not work.
   ::::

5. <b>Start the server</b><br>
   Save the file and start your server. On start it downloads the listed mods and loads them. The first start therefore takes longer than usual.

## Add map mods to the rotation

A `Mods=` entry only downloads a map mod – it is only played once the map is part of the rotation as well. To do that, add a `MapRotation=` line with the map name from the mod description to the section `[/Script/Mordhau.MordhauGameMode]`:

```ini
[/Script/Mordhau.MordhauGameSession]
Mods=2673283

[/Script/Mordhau.MordhauGameMode]
MapRotation=HRD_Catacombs
```

:::: info Note
The map name is not the display name of the mod but the internal name of the map. You can find it in the description of the respective mod on mod.io.
::::

## Mods that require a server actor

Some gameplay mods additionally have to be loaded when the map starts. Such mods state a path in their description which you enter under `[/Script/Mordhau.MordhauGameMode]`:

```ini
[/Script/Mordhau.MordhauGameMode]
SpawnServerActorsOnMapLoad=/ServerSideCmds/BP_ServerSideCMDs.BP_ServerSideCMDs_C
```

:::: warning Warning
Only enter the path that the mod description explicitly states. A path you put together yourself will keep the mod from starting.
::::

## Not every mod works on a Linux server

:::: danger Important
Your server runs on Linux. **Server-side mods** (often labelled "server-side" or "server only" on mod.io) work reliably there. **Map and content mods**, on the other hand, are usually cooked by their creators for Windows only and can be faulty on a Linux server – for example with players falling through the floor or through objects.

Before using a map mod, check whether the creator explicitly supports Linux servers, and test the map on your server before putting it into the public rotation.
::::

## Client-side mods

Whether your players need a mod as well depends on the mod: pure server mods run on the server only, while map and content mods are also needed locally by the players. What applies to your mod is stated in its description on mod.io.

Whether client-side mods are allowed on your server at all is controlled by the following entry in the section `[/Script/Mordhau.MordhauGameMode]`:

```ini
[/Script/Mordhau.MordhauGameMode]
bDisableClientMods=False
```

| Value | Meaning |
|-------|---------|
| `False` | Client-side mods are allowed |
| `True` | Client-side mods are blocked on your server |

## Remove a mod

1. <b>Stop the server</b><br>
   Stop your server via the **dashboard**.

2. <b>Delete the entries</b><br>
   Remove the mod's `Mods=` line from the `Game.ini` – and, if present, the matching entries under `MapRotation=` and `SpawnServerActorsOnMapLoad=` as well.

3. <b>Start the server</b><br>
   Save the file and start your server.

:::: warning Warning
If a map whose mod you removed stays in the `MapRotation=`, the server tries to switch to a map that does not exist. Always clean up both entries together.
::::

:::: info Note
The folder `LinuxServer` and the `Game.ini` are only created after your server has fully started once. If you cannot find the file, start your server once and stop it again.
::::
