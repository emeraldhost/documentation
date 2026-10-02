---
slug: "improve-performance"
language: "en"
title: "How to Improve Performance on Your Arma Reforger Server"
description: "Improve performance on an Arma Reforger server – server FPS, view distances, AI and navmesh"
tags: []
date: "2026-10-02"
visibility: "public"
cta: "gameserver"
product_keys: ["arma-reforger"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Improve Performance"
sort: 12
related: ["gameserver/arma-reforger/disable-ai", "gameserver/arma-reforger/configure-server", "gameserver/arma-reforger/read-server-log", "gameserver/arma-reforger/troubleshoot-server"]
---
The performance of your Arma Reforger server depends mainly on the server FPS, the view distances, the number of AI units and the installed mods. In this guide, we'll show you which settings you can adjust for this in the dashboard and in `config.json`.

> [!NOTE]
> Some values in `config.json` are overwritten from the **Settings** of the dashboard on every server start. The entries under `gameProperties` and `operating` described here are not among them and are kept. You can find an overview of all entries under [Configure Server](/tutorials/gameserver/arma-reforger/configure-server).

## Limit server FPS

The server FPS value determines how many times per second your server simulates the game world. Bohemia Interactive strongly recommends limiting the server FPS to a value between 60 and 120 – without a limit, the server can try to use all available resources.

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Enter max FPS**\
   Enter a value between `60` and `120` in the **Max FPS** field. The default is `120`.

4. **Restart the server**\
   Save the setting and restart your server.

> [!WARNING]
> Do not leave the **Max FPS** field empty. An empty field means no limit – the server can then try to use all available resources.

## Measure performance

With the **[Advanced] Log FPS Interval** field, your server regularly writes a line with performance values to the console and to the server log. This lets you check whether your changes have an effect.

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Enter interval**\
   In the **[Advanced] Log FPS Interval** field, enter after how many seconds a new line should be written, e.g. `60` for once per minute. With `0`, the output is disabled.

4. **Restart the server**\
   Save the setting and restart your server.

> [!TIP]
> **Example**
>
> ```text
> FPS: 60.0, frame time (avg: 16.7 ms, min: 9.3 ms, max: 23.7 ms), Mem: 3291106 kB, Player: 2, AI: 104, Veh: 0 (17), Proj (S: 12, M: 0, G: 0 | 12), RplItemsS: 410, RplItemsC0: 17068
> ```

### Values of the performance statistics

| Value | Meaning |
| ----- | ------- |
| `FPS` | Current server FPS |
| `frame time` | Average (`avg`), minimum (`min`) and maximum (`max`) time the server needs for one frame |
| `Mem` | Current memory usage in kilobytes as reported internally by the server |
| `Player` | Number of players on the server |
| `AI` | Number of AI units currently spawned on the server |
| `Veh` | The number in parentheses is the number of vehicles currently spawned on the server |

> [!NOTE]
> The `Mem` value is only an approximation by the server and may differ from the actual memory usage.

> [!TIP]
> You can find out how to find older output in the server log under [Read Server Log](/tutorials/gameserver/arma-reforger/read-server-log).

## Adjust view distances in config.json

Under `gameProperties` in `config.json`, you define the view distances of your server. Lower values for `serverMaxViewDistance` and `networkViewDistance` can reduce the load on your server, as fewer objects are transferred to the players. Keep in mind that objects outside the `networkViewDistance` are not transferred to the players.

| Entry | Range | EmeraldHost default | Description |
| ----- | ----- | ------------------- | ----------- |
| `serverMaxViewDistance` | 500 – 10000 | `2500` | Maximum view distance on the server |
| `networkViewDistance` | 500 – 5000 | `1000` | Maximum range in which objects are transferred to the players over the network |
| `serverMinGrassDistance` | 0 or 50 – 150 | `50` | Minimum grass distance in meters that is forced on the players. With `0`, no distance is forced. |

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open config.json**\
   Open the file `config.json` in the root directory and find the `"gameProperties"` section inside `"game"`.

4. **Adjust values**\
   Adjust the desired values:

   ```json
   "gameProperties": {
     "serverMaxViewDistance": 2000,
     "serverMinGrassDistance": 50,
     "networkViewDistance": 1000,
     ...
   }
   ```

   `...` stands for the remaining unchanged entries. Only change the numbers and leave the other entries in `"gameProperties"` unchanged.

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to prevent the server from starting.

5. **Start the server**\
   Save the file and start your server.

## Limit the number of AI units

Many AI units significantly increase the load on your server. With the `aiLimit` entry in the `"operating"` section, you set an upper limit. Once it is reached, no further AI units can be spawned. By default, no limit is set.

> [!TIP]
> You can find out how to add `aiLimit` or disable the AI completely under [Disable or Limit AI](/tutorials/gameserver/arma-reforger/disable-ai).

## Disable navmesh streaming (optional)

The AI uses a so-called navmesh to move across the map. By default, the server loads this navmesh piece by piece. If you disable streaming, the server loads the entire navmesh into memory. This provides slightly better server performance and faster reactions of moving AI units.

> [!WARNING]
> This setting is meant for advanced users. Depending on the map, your server needs up to several hundred MB more memory. Afterwards, check whether your server has enough memory, e.g. with the `Mem` value of the [performance statistics](#values-of-the-performance-statistics).

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open config.json**\
   Open the file `config.json` in the root directory.

4. **Disable navmesh streaming**\
   Add the `"operating"` section at the top level after the `"game"` section. To do this, put a comma after the closing bracket of `"game"`:

   ```json
   "game": {
     ...
   },
   "operating": {
     "disableNavmeshStreaming": []
   }
   ```

   `...` stands for the remaining unchanged entries. If the `"operating"` section already exists, only add the line `"disableNavmeshStreaming": []` there.

   | Value | Effect |
   | ----- | ------ |
   | Entry not present | Navmesh streaming is active (default) |
   | `[]` | Navmesh streaming is disabled for all navmeshes |
   | `["Soldiers", "BTRlike"]` | Navmesh streaming is only disabled for the listed navmeshes |

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to prevent the server from starting.

5. **Start the server**\
   Save the file and start your server.

> [!NOTE]
> To enable navmesh streaming again, stop your server and remove the `"disableNavmeshStreaming"` line from `config.json`. If another entry comes before it in the `"operating"` section, also remove the comma at the end of that entry. Then check the file with [JSONLint](https://jsonlint.com/).

## Reduce mods

Every mod increases the load on your server. Mods that add many objects, vehicles or AI units in particular affect performance. Therefore, only use the mods you really need and remove entries you no longer need from the `"mods"` section – stop your server beforehand. You can find out how to manage mods under [Add Mods](/tutorials/gameserver/arma-reforger/add-mods).
