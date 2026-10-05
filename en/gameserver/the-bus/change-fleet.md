---
description: Change fleet on a The Bus server
---

# How to Change the Fleet on a The Bus Server

The fleet determines which buses are available on your server. You can change the active fleet via the **admin menu** or by **command**. To do this, you need Owner or Admin permissions, see [Add Admin](add-admin.md).

## Change fleet via admin menu

1. <b>Open admin menu</b><br>
   Open the pause menu in the game and select the **Admin Menu**.

2. <b>Select fleet</b><br>
   Under **Fleet**, choose the desired fleet from the available options.

:::: info Note
Since update 3.2 EA, the fleet selected in the admin menu is saved and is kept even after your server restarts.
::::

## Change fleet by command

Alternatively, you can change the fleet via the in-game chat. Which commands you can use depends on your rank, see [Add Admin](add-admin.md).

Enter the following command in the in-game chat:

```
/fleet <fleet>
```

Replace `<fleet>` with the desired fleet.

:::: tip Tip
The exact value for `<fleet>` is not officially documented. You can get an overview of all commands available to you on your server with `/commands`.
::::

## Use fleets from the Workshop

Your server can also load fleets from the [Steam Workshop](https://steamcommunity.com/workshop/browse/?appid=491540). To do this, upload them like other mods via [SFTP](../establish-sftp-connection.md) to the `/TheBus/Mods/` folder. You can find out exactly how this works under [Add Mods](add-mods.md).

Then restart your server. After the start, check in the admin menu whether the fleet appears in the selection.

:::: warning Warning
Depending on the mod type, all players must also subscribe to the fleet in the Steam Workshop to be able to join your server. You can find out which mod types exist under [Mod Types](add-mods.md#mod-types).
::::

## Buses from DLCs

:::: info Note
Buses from a DLC, e.g. the Ebus 2.2, can only be selected and driven by players who own the DLC themselves. To learn how to activate or deactivate DLCs on your server, see [Activate DLC](activate-dlc.md).
::::
