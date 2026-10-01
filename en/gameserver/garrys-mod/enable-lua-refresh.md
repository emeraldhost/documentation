---
description: Enable and disable Lua Refresh (Auto Refresh) on a Garry's Mod server
---

# How to Enable Lua Refresh on Your Garry's Mod Server

With **Lua Refresh** (called "Auto Refresh" in Garry's Mod) your server automatically reloads changed Lua files as soon as they are saved on the server. This lets you see changes to your addons right away without restarting the server. On our servers Lua Refresh is **disabled** by default.

## Enable Lua Refresh

1. <b>Open the dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open the settings</b><br>
   Navigate to the **Settings**.

3. <b>Turn on Lua Refresh</b><br>
   Enable the **Lua Refresh** setting.

4. <b>Restart the server</b><br>
   Save the setting and restart your server.

If you now edit a Lua file via [SFTP](../establish-sftp-connection.md) and save it, the server reloads it automatically.

:::: tip Tip
You can also reload an already loaded file manually. To do so, enter the following command in the console:
```
lua_refresh_file <path>
```
::::

:::: info Note
When **Lua Refresh** is turned off, the server starts with the parameter `-disableluarefresh`, which disables Auto Refresh. Changed Lua files are then no longer reloaded automatically.
::::

## Disable Lua Refresh for live operation

We recommend turning on Lua Refresh only while you are working on your addons. According to the [Garry's Mod Wiki](https://wiki.facepunch.com/gmod/Auto_Refresh), Auto Refresh can lag the server when editing certain Lua files triggers a cascade of further reloads. If you upload files while players are on the server, this can cause lag for them.

1. <b>Open the dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open the settings</b><br>
   Navigate to the **Settings**.

3. <b>Turn off Lua Refresh</b><br>
   Disable the **Lua Refresh** setting.

4. <b>Restart the server</b><br>
   Save the setting and restart your server.

## Limitations of Lua Refresh

Not every change is picked up automatically. Auto Refresh only works for files that the game or the gamemode includes automatically:

- files in `autorun`
- effects, entities and weapons
- the gamemode's `init.lua` and `cl_init.lua` and the files included from them

The following changes are **not** reloaded automatically:

- files included dynamically via `include` or `AddCSLuaFile` – depending on the case, they are not reloaded at all or only partly
- changes to the base file of a weapon or entity: weapons and entities that build on it only pick up the change once they are reloaded themselves
- on Linux servers, a system limit for file watching can be reached when there are very many files. Individual files are then not reloaded automatically

In these cases, restart your server so the changes are loaded.

:::: warning Warning
On reload, a Lua file is executed again in full. Addons that aren't designed for this can lose data stored in global variables. If you remove a hook, a network receiver or a console command from the code, it also stays active until the next restart. If an addon behaves strangely after a refresh, restart your server.
::::
