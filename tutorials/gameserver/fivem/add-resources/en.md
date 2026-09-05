---
slug: "add-resources"
language: "en"
title: "How to Add Resources to Your FiveM Server"
description: "Install resources on a FiveM server and start them in the server.cfg"
tags: []
date: "2026-08-07"
visibility: "public"
cta: "gameserver"
product_keys: ["fivem"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Resources"
sort: 2
related: ["gameserver/fivem/add-admin", "gameserver/fivem/create-backup", "gameserver/fivem/enable-txadmin", "gameserver/fivem/import-database"]
---

Scripts, maps, vehicles and frameworks are all installed the same way on FiveM: as a **resource**. Every resource is its own folder that contains an `fxmanifest.lua`, sits in your server's `resources` directory and is started from the `server.cfg`.

> [!TIP]
> Create a [backup](/tutorials/gameserver/fivem/create-backup) before installing anything. That way you can quickly return to a working state if a resource stops your server from starting.

## Where is the resources folder located?

Resources are loaded from a folder called `resources/` in the server data directory. Where that directory is depends on how you set up your server:

| Setup | Path |
|-------|------|
| Default (recommended) | `/home/container/resources` |
| txAdmin Recipe / Deployer | `/home/container/txData/<ProfileName>/resources` |
| Manual import | The folder you specified during the import |

> [!WARNING]
> If you upload a resource into the wrong `resources` directory, the server will not find it. The guide [Set the Game Server Port](/tutorials/gameserver/fivem/set-port) lists the same setups together with the path to the matching `server.cfg`.

## Upload the resource

1. **Stop the server**\
   Stop your server via the dashboard before changing any files.

2. **Extract the archive**\
   Extract the downloaded archive on your PC. The server cannot read ZIP or RAR files.

3. **Check the folder structure**\
   The `fxmanifest.lua` has to sit directly inside the resource folder. Many downloads are nested twice (for example `my-script-main/my-script/`) – in that case only upload the inner folder:

   ```text
   resources/
   └── my-script/
       ├── fxmanifest.lua
       ├── client.lua
       └── server.lua
   ```

4. **Note the folder name**\
   The folder name is the name of the resource – this is exactly the name you enter in the `ensure` line later.

   > [!WARNING]
   > Your servers run on Linux, so names are case sensitive. The name in the `ensure` line has to match the folder name exactly.

5. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

6. **Upload the folder**\
   Upload the resource folder into your `resources` directory.

## Categories with square brackets

Every folder inside the `resources` directory is read as a resource – except folders in `[square brackets]`. Those are **categories** and may contain multiple resources:

```text
resources/
├── [standalone]/
│   ├── script-a/
│   └── script-b/
└── my-script/
```

> [!NOTE]
> You can start an entire category with a single line, for example `ensure [standalone]`. Frameworks such as QBCore already ship their own categories like `[qb]`, `[standalone]` or `[voice]`. A default FiveM server comes with categories such as `[system]`, `[managers]`, `[gameplay]` and `[local]`.

Categories can also be nested. A category name never becomes part of the resource name: a resource located at `[standalone]/my-script` is still simply called `my-script`.

## Start the resource in the server.cfg

1. **Open server.cfg**\
   Open your server's `server.cfg` via SFTP or through the **CFG Editor** in the txAdmin web interface.

2. **Add the ensure line**\
   Add one line for every new resource:

   ```text
   ensure my-script
   ```

3. **Mind the order**\
   Resources are started in the order the lines appear in the `server.cfg`. Dependencies therefore have to be listed above the scripts that need them – so your framework and your database resource first, then the individual scripts.

4. **Start the server**\
   Save the file and start your server via the dashboard.

> [!NOTE]
> On every server start, the dashboard rewrites the lines `endpoint_add_tcp`, `endpoint_add_udp`, `sv_hostname`, `set sv_licenseKey`, `set steam_webApiKey` and `sv_maxclients` in the `server.cfg`. Your `ensure` lines and all other custom entries are kept.

## ensure, start and stop compared

| Command | Effect |
|---------|--------|
| `ensure <name>` | Starts the resource. If it is already running, it is restarted. |
| `start <name>` | Starts the resource if it was stopped. |
| `stop <name>` | Stops the resource if it was started. |
| `restart <name>` | Restarts a running resource. |
| `refresh` | Rescans the `resources` folder so newly uploaded resources become available. |

`ensure`, `start`, `stop` and `restart` all work with category names as well.

> [!TIP]
> Always use `ensure` in the `server.cfg`. That guarantees the resource is running after the start, no matter whether it was already active before.

## Check the console

After the start, watch the console in the dashboard – or the **Live Console** in txAdmin if you use it. Typical messages:

- `Started resource <name>` – the resource started successfully.
- `Couldn't find resource <name>.` – the folder name does not match the `ensure` line, or the folder is in the wrong `resources` directory.
- `<name> does not have a resource manifest (fxmanifest.lua)` – the `fxmanifest.lua` is missing from the folder. This typically happens when a doubly nested folder was uploaded.
- An error while starting a script – usually a dependency is missing or listed below the script in the `server.cfg`.

> [!TIP]
> You can also activate an uploaded resource without a restart: run `refresh` in the console first, then `ensure <name>`. Still add the `ensure` line to your `server.cfg` so the resource is loaded again on the next server start.

## Remove a resource

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Remove the ensure line**\
   Delete the matching `ensure` line from the `server.cfg`, or comment it out with a `#` at the beginning of the line.

3. **Delete the folder**\
   Delete the resource folder from the `resources` directory via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Start the server**\
   Start your server and check the console for follow-up errors from other scripts that depended on the resource.

> [!NOTE]
> Many scripts and frameworks also need a MySQL database. The guide [Create Database](/tutorials/gameserver/create-database) explains how to create one and where to find the credentials.
