---
description: Use crossplay on an Arma Reforger server so players on PC, Xbox and PlayStation 5 can play together
---

# How to Use Crossplay on Your Arma Reforger Server

With crossplay, players on PC, Xbox and PlayStation 5 can play together on your server. Crossplay is always active on your server – you do not need to set anything up.

## Crossplay is always active

When your server starts, `"crossPlatform": true` is set automatically in `config.json`. This makes your server accept players from all platforms:

| Platform | Can join |
|----------|----------|
| PC | Yes |
| Xbox | Yes |
| PlayStation 5 | Yes |

:::: warning Warning
Crossplay cannot be disabled. If you change `crossPlatform` to `false` in `config.json`, the value is set back to `true` on the next server start. You can find out which entries the dashboard overwrites on every start in [Configure Server](configure-server.md).
::::

## What to watch out for with console players

If players on Xbox and PlayStation 5 should play on your server, keep these two points in mind.

### Mods for consoles

Not every mod is also available for Xbox and PlayStation 5. If a mod from the `"mods"` section of `config.json` is not available on a console, players on that console may not be able to join your server. After adding new mods, have a console player test joining.

You can learn how to add mods in the [Add Mods](add-mods.md) guide.

### Keep BattlEye switched on

For console players, keep BattlEye switched on. Without BattlEye, your server does not appear in the server browser on PlayStation 5. This is how you check the setting:

1. <b>Open dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open settings</b><br>
   Navigate to the **Settings**.

3. <b>Check Battle-Eye</b><br>
   Make sure the **Battle-Eye** field is set to `true`.

4. <b>Restart the server</b><br>
   Save the setting and restart your server.

## How console players join your server

Console players find your server using the search in the server browser. For this, your server must be visible there.

1. <b>Open dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open settings</b><br>
   Navigate to the **Settings**.

3. <b>Check visibility</b><br>
   Make sure the **Visible in Server Browser** field is set to `true`.

4. <b>Restart the server</b><br>
   Save the setting and restart your server.

5. <b>Search for the server</b><br>
   The players open the **Multiplayer** section in Arma Reforger and search for the name of your server there.

:::: info Note
You can find a detailed guide on joining under [Join Server](join-server.md).
::::
