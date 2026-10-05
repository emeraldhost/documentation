---
description: Change operating plan on a The Bus server
---

# How to Change the Operating Plan on a The Bus Server

You change your server's operating plan in-game via the **Admin Menu** or by **command** in the in-game chat.

:::: info Note
The map and the operating plan are set separately. If you change the map, for example to Hamburg, select an operating plan that fits the new map afterwards. You can find out how to switch the map in the [Change Map](change-map.md) guide.
::::

## Change Operating Plan via the Admin Menu

1. <b>Open Admin Menu</b><br>
   Open the pause menu in-game and select the **Admin Menu**. You need Owner or Admin permissions or the admin password, see [Add Admin](add-admin.md).

2. <b>Select operating plan</b><br>
   Choose the desired operating plan from the available options in the Admin Menu.

## Change Operating Plan by Command

Alternatively, you can set the operating plan in the in-game chat. You need Owner or Admin permissions for this. Enter the following command and replace `<plan>` with the desired operating plan:

```
/operatingPlan <plan>
```

:::: tip Tip
The exact value for `<plan>` is not officially documented. Use `/commands` to show all available commands. On our servers, the console in the dashboard only shows the server output and does not accept commands.
::::

## Use Custom Operating Plans

Upload custom operating plans or operating plans from the Steam Workshop to the `/TheBus/Mods/` folder like any other mod. You can find out exactly how this works in the [Add Mods](add-mods.md) guide.

:::: warning Warning
If a mod is flagged as "Client and Server", every player must have it installed as well, otherwise they cannot connect to your server.
::::
