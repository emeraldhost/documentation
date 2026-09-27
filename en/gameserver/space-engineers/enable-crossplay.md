---
description: Enable crossplay on a Space Engineers server
---

# How to Enable Crossplay on Your Space Engineers Server

With crossplay, players on **PC (Steam)**, **Xbox** and **PlayStation** play together on your server. For this, your server runs on **Epic Online Services (EOS)** instead of Steam and is flagged as **console compatible**. You set both in the file `SpaceEngineers-Dedicated.cfg` — there is no field for this in the dashboard. The dashboard does not overwrite these entries on startup, so your change is kept.

## Requirements

For your world to start with crossplay, it must meet these conditions:

- **At most three different planet types** — with crossplay, the server only allows three planet types per world. If your world contains more, startup aborts with the message `World contains too many planet types and could not be loaded.`
- **No Steam Workshop mods** — crossplay servers only load mods from mod.io. If a Steam Workshop mod is in the mod list, the world does not start. Remove such mods from the `<Mods>` block first (see [Add Mods](add-mods.md)).
- **Block limits enabled** — in `Sandbox_config.sbc`, `<BlockLimitsEnabled>` must not be `NONE` and `<TotalPCU>` must not be `0`. The preinstalled world already meets this.

:::: danger Important
The preinstalled world on your server contains **six** planet types (EarthLike, Mars, Moon, Alien, Europa and Titan) and does not start with crossplay. Upload a world with at most three planet types first — see [Upload a World](upload-world.md).
::::

## Enable crossplay

:::: warning Warning
Stop your server before editing the config file. A running server can overwrite your changes.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md), or use the file browser in the dashboard.

3. <b>Open the config</b><br>
   Open the file `/config/SpaceEngineers-Dedicated.cfg`.

4. <b>Switch the network to EOS</b><br>
   Find the line `<NetworkType>steam</NetworkType>` and change the value to `eos`:

   ```xml
   <NetworkType>eos</NetworkType>
   ```

5. <b>Enable console compatibility</b><br>
   Find the line `<ConsoleCompatibility>false</ConsoleCompatibility>` and change the value to `true`:

   ```xml
   <ConsoleCompatibility>true</ConsoleCompatibility>
   ```

6. <b>Start the server</b><br>
   Save the file and start your server.

7. <b>Check crossplay</b><br>
   While the world loads, the server console shows whether console compatibility is active:

   ```
   Console compatibility: Yes
   ```

:::: info Note
You need **both** entries: `eos` runs your server on Epic Online Services, where PC and console players play together, and `ConsoleCompatibility` opens it up to Xbox and PlayStation players. The entries only exist in `SpaceEngineers-Dedicated.cfg` — you do not need to change the world files `Sandbox.sbc` and `Sandbox_config.sbc` for this.
::::

:::: warning Warning
If the console shows `Console compatibility: No`, the server switched console compatibility off again while loading. The console names the reason shortly before:

- `World does not have Block Limits Enabled.` — enable block limits in `Sandbox_config.sbc`.
- `Total PCU value is 0.` — set `<TotalPCU>` in `Sandbox_config.sbc` to a value greater than `0`.
- `Total mods size ... is higher than limit` — your mods are larger than 3 GB in total.
::::

## How players join

Crossplay servers do not appear in the Steam server list but in the **EOS** server list:

- **PC:** Select **Join Game** in the main menu, open the **Servers** tab and switch the server list from **Steam** to **EOS**. Search for your server name there.
- **Xbox and PlayStation:** Find your server in the server list of the multiplayer menu. On PlayStation, **Enable Crossplay** must be turned on in the game options — otherwise the game does not show crossplay servers.

:::: info Note
Direct Connect via IP address and port as described in [Join Server](join-server.md) only applies to servers without crossplay. All players — including on PC — join a crossplay server via the EOS server list.
::::

:::: tip Tip
If [experimental mode](enable-experimental-mode.md) is active on your server, console players only see it in the server list once they also turn on experimental mode in their game.
::::

## What changes with crossplay

- **Mods:** Only mods from mod.io work (see below). Mods with scripts only run if their code is executed exclusively on the server — client-side scripts do not run on consoles.
- **Admins:** Admins set by SteamID in the config do not take effect. Promote admins in-game or via the Remote API — see [Add Admins](add-admins.md).
- **PCU:** The server calculates PCU using console values — for example, armor blocks cost 2 PCU instead of 1.
- **In-game scripts:** You can still use [scripts for Programmable Blocks](enable-ingame-scripts.md), including with console players.

## Add mods from mod.io

1. <b>Find the mod ID</b><br>
   Open the mod you want on [mod.io](https://mod.io/g/spaceengineers). The mod ID is shown in the mod's right sidebar under **ID**, for example `1234567`. Use the copy icon next to it to copy it.

2. <b>Add the mod</b><br>
   With the server stopped, open `/config/Saves/World/Sandbox_config.sbc` and add the mod to the `<Mods>` block as described in [Add Mods](add-mods.md) — with `mod.io` as the service. Replace `1234567` with the mod ID:

   ```xml
   <Mods>
     <ModItem FriendlyName="Mod Name">
       <Name>1234567.sbm</Name>
       <PublishedFileId>1234567</PublishedFileId>
       <PublishedServiceName>mod.io</PublishedServiceName>
     </ModItem>
   </Mods>
   ```

3. <b>Start the server</b><br>
   Save the file and start your server. The server downloads the mods from mod.io on startup.

## Disable crossplay

With the server stopped, set the values in `/config/SpaceEngineers-Dedicated.cfg` back to `<NetworkType>steam</NetworkType>` and `<ConsoleCompatibility>false</ConsoleCompatibility>` and start your server.

:::: info Note
The server adjusts some world settings while crossplay is enabled and saves them in the world — among others `<UseConsolePCU>` (PCU using console values) and `<MaxPlanets>` (at most three planet types) in `Sandbox_config.sbc`. These values remain after disabling crossplay. Change them back if needed with the server stopped, for example to `<UseConsolePCU>false</UseConsolePCU>` and `<MaxPlanets>99</MaxPlanets>`.
::::
