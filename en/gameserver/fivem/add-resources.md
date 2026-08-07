---
description: Install resources on a FiveM server and start them in the server.cfg
---

# How to Add Resources to Your FiveM Server

Scripts, maps, vehicles and frameworks are all installed the same way on FiveM: as a **resource**. Every resource is its own folder that contains an `fxmanifest.lua`, sits in your server's `resources` directory and is started from the `server.cfg`.

:::: tip Tip
Create a [backup](create-backup.md) before installing anything. That way you can quickly return to a working state if a resource stops your server from starting.
::::

## Where is the resources folder located?

Resources are loaded from a folder called `resources/` in the server data directory. Where that directory is depends on how you set up your server:

| Setup | Path |
|-------|------|
| Default (recommended) | `/home/container/resources` |
| txAdmin Recipe / Deployer | `/home/container/txData/<ProfileName>/resources` |
| Manual import | The folder you specified during the import |

:::: warning Warning
If you upload a resource into the wrong `resources` directory, the server will not find it. The guide [Set the Game Server Port](set-port.md) lists the same setups together with the path to the matching `server.cfg`.
::::

## Upload the resource

1. <b>Stop the server</b><br>
   Stop your server via the dashboard before changing any files.

2. <b>Extract the archive</b><br>
   Extract the downloaded archive on your PC. The server cannot read ZIP or RAR files.

3. <b>Check the folder structure</b><br>
   The `fxmanifest.lua` has to sit directly inside the resource folder. Many downloads are nested twice (for example `my-script-main/my-script/`) — in that case only upload the inner folder:

   ```
   resources/
   └── my-script/
       ├── fxmanifest.lua
       ├── client.lua
       └── server.lua
   ```

4. <b>Note the folder name</b><br>
   The folder name is the name of the resource — this is exactly the name you enter in the `ensure` line later.

   :::: warning Warning
   Your servers run on Linux, so names are case sensitive. The name in the `ensure` line has to match the folder name exactly.
   ::::

5. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

6. <b>Upload the folder</b><br>
   Upload the resource folder into your `resources` directory.

## Categories with square brackets

Every folder inside the `resources` directory is read as a resource — except folders in `[square brackets]`. Those are **categories** and may contain multiple resources:

```
resources/
├── [standalone]/
│   ├── script-a/
│   └── script-b/
└── my-script/
```

:::: info Note
You can start an entire category with a single line, for example `ensure [standalone]`. Frameworks such as QBCore already ship their own categories like `[qb]`, `[standalone]` or `[voice]`. A default FiveM server comes with categories such as `[system]`, `[managers]`, `[gameplay]` and `[local]`.
::::

Categories can also be nested. A category name never becomes part of the resource name: a resource located at `[standalone]/my-script` is still simply called `my-script`.

## Start the resource in the server.cfg

1. <b>Open server.cfg</b><br>
   Open your server's `server.cfg` via SFTP or through the **CFG Editor** in the txAdmin web interface.

2. <b>Add the ensure line</b><br>
   Add one line for every new resource:

   ```
   ensure my-script
   ```

3. <b>Mind the order</b><br>
   Resources are started in the order the lines appear in the `server.cfg`. Dependencies therefore have to be listed above the scripts that need them — so your framework and your database resource first, then the individual scripts.

4. <b>Start the server</b><br>
   Save the file and start your server via the dashboard.

:::: info Note
On every server start, the dashboard rewrites the lines `endpoint_add_tcp`, `endpoint_add_udp`, `sv_hostname`, `set sv_licenseKey`, `set steam_webApiKey` and `sv_maxclients` in the `server.cfg`. Your `ensure` lines and all other custom entries are kept.
::::

## ensure, start and stop compared

| Command | Effect |
|---------|--------|
| `ensure <name>` | Starts the resource. If it is already running, it is restarted. |
| `start <name>` | Starts the resource if it was stopped. |
| `stop <name>` | Stops the resource if it was started. |
| `restart <name>` | Restarts a running resource. |
| `refresh` | Rescans the `resources` folder so newly uploaded resources become available. |

`ensure`, `start`, `stop` and `restart` all work with category names as well.

:::: tip Tip
Always use `ensure` in the `server.cfg`. That guarantees the resource is running after the start, no matter whether it was already active before.
::::

## Check the console

After the start, watch the console in the dashboard — or the **Live Console** in txAdmin if you use it. Typical messages:

- `Started resource <name>` — the resource started successfully.
- `Couldn't find resource <name>.` — the folder name does not match the `ensure` line, or the folder is in the wrong `resources` directory.
- `<name> does not have a resource manifest (fxmanifest.lua)` — the `fxmanifest.lua` is missing from the folder. This typically happens when a doubly nested folder was uploaded.
- An error while starting a script — usually a dependency is missing or listed below the script in the `server.cfg`.

:::: tip Tip
You can also activate an uploaded resource without a restart: run `refresh` in the console first, then `ensure <name>`. Still add the `ensure` line to your `server.cfg` so the resource is loaded again on the next server start.
::::

## Remove a resource

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Remove the ensure line</b><br>
   Delete the matching `ensure` line from the `server.cfg`, or comment it out with a `#` at the beginning of the line.

3. <b>Delete the folder</b><br>
   Delete the resource folder from the `resources` directory via [SFTP](../establish-sftp-connection.md).

4. <b>Start the server</b><br>
   Start your server and check the console for follow-up errors from other scripts that depended on the resource.

:::: info Note
Many scripts and frameworks also need a MySQL database. The guide [Create Database](../create-database.md) explains how to create one and where to find the credentials.
::::
