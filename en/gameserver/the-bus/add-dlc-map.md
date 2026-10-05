---
description: Play a DLC map like Hamburg City on a The Bus server
---

# How to Play a DLC Map on Your The Bus Server

The default map of The Bus is **Berlin**. Additional maps are added as DLCs. Currently, **Hamburg City (by Halycon)** is the only released map DLC. It came out on July 31, 2025. More maps such as **New York City**, **London South** and **Lübeck** have been announced but are not released yet.

Since **Update 1.2**, Hamburg works properly on dedicated servers as well. This guide shows you how to switch your server from Berlin to Hamburg.

## Requirements

- **All players own the DLC:** Every player who wants to play on the map must own the **Hamburg City** DLC on Steam. All players must own the same DLCs to use them together.
- **Game and server are up to date:** Keep your game and your server up to date. To do so, set the **Auto Update** field to `1` under **Settings** in the dashboard, so your server updates automatically on every start.
- **Admin permissions:** You need Owner or Admin permissions or your server's admin password, see [Add Admin](add-admin.md).

:::: info Note
For an official DLC, you don't need to upload anything to your server. You simply select the map in-game.
::::

:::: danger Important
Create a [backup](create-backup.md) before switching maps. After the switch, choose an operating plan and a fleet that fit the new map.
::::

## How to Switch the Map via the Admin Menu

1. <b>Join the Server</b><br>
   Join your server in-game, see [Join Server](join-server.md).

2. <b>Open the Admin Menu</b><br>
   Open the pause menu and select the **Admin Menu**. If you don't have the Admin rank, enter your server's admin password.

3. <b>Select the Map</b><br>
   Under **Map**, select the map **Hamburg**.

:::: info Note
The map selected in the admin menu is saved to the server settings and kept after a restart of your server.
::::

## How to Switch the Map via Chat Command

Alternatively, you can switch the map via the in-game chat.

1. <b>Show Available Maps</b><br>
   Enter the following command in the in-game chat to list all available maps:
   ```
   /mapList
   ```
   The Hamburg map appears there as `Hamburg`.

2. <b>Switch the Map</b><br>
   Enter the following command:
   ```
   /map Hamburg
   ```

:::: info Note
These commands only work in the in-game chat and require Owner or Admin permissions. Use `/commands` to show all available commands. On our servers, the console in the dashboard only shows the server output and does not accept commands.
::::

## Adjust Operating Plan and Fleet

After switching maps, choose a fitting operating plan and a fitting fleet for the new map:

- [Change Operating Plan](change-operating-plan.md)
- [Change Fleet](change-fleet.md)

Hamburg comes with its own lines: **6**, **7**, **17**, **218** and **277**, plus a variant as night line **617**.

## Activate the DLC on the Server

With the `/dlc` command, you activate or deactivate a DLC on your server. To learn how this works, see [Activate DLC](activate-dlc.md).

## How to Switch Back to Berlin

Switching back to the default map works the same way: select the map Berlin under **Map** in the **Admin Menu**, or use `/map` with the name that `/mapList` prints for Berlin. Afterwards, choose a fitting operating plan and fleet again.

## Problems When Switching Maps

| Problem | Solution |
|---------|----------|
| The map is not listed | Update your server (set the **Auto Update** field to `1` and restart the server) and your game. Keep server and game up to date. |
| Players can't join | If your server requires players to own the DLC to join, players without the DLC cannot join. Also check that server and game are up to date. All players must own the same DLCs to use them together. |

:::: tip Tip
For more solutions to common problems, see [Troubleshoot Server](troubleshoot-server.md).
::::
