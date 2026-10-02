---
description: Improve performance on an Arma Reforger server – server FPS, view distances, AI and navmesh
---

# How to Improve Performance on Your Arma Reforger Server

The performance of your Arma Reforger server depends mainly on the server FPS, the view distances, the number of AI units and the installed mods. In this guide, we'll show you which settings you can adjust for this in the dashboard and in `config.json`.

:::: info Note
Some values in `config.json` are overwritten from the **Settings** of the dashboard on every server start. The entries under `gameProperties` and `operating` described here are not among them and are kept. You can find an overview of all entries under [Configure Server](configure-server.md).
::::

## Limit server FPS

The server FPS value determines how many times per second your server simulates the game world. Bohemia Interactive strongly recommends limiting the server FPS to a value between 60 and 120 – without a limit, the server can try to use all available resources.

1. <b>Open dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open settings</b><br>
   Navigate to the **Settings**.

3. <b>Enter max FPS</b><br>
   Enter a value between `60` and `120` in the **Max FPS** field. The default is `120`.

4. <b>Restart the server</b><br>
   Save the setting and restart your server.

:::: warning Warning
Do not leave the **Max FPS** field empty. An empty field means no limit – the server can then try to use all available resources.
::::

## Measure performance

With the **[Advanced] Log FPS Interval** field, your server regularly writes a line with performance values to the console and to the server log. This lets you check whether your changes have an effect.

1. <b>Open dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open settings</b><br>
   Navigate to the **Settings**.

3. <b>Enter interval</b><br>
   In the **[Advanced] Log FPS Interval** field, enter after how many seconds a new line should be written, e.g. `60` for once per minute. With `0`, the output is disabled.

4. <b>Restart the server</b><br>
   Save the setting and restart your server.

:::: tip Example
```
FPS: 60.0, frame time (avg: 16.7 ms, min: 9.3 ms, max: 23.7 ms), Mem: 3291106 kB, Player: 2, AI: 104, Veh: 0 (17), Proj (S: 12, M: 0, G: 0 | 12), RplItemsS: 410, RplItemsC0: 17068
```
::::

### Values of the performance statistics

| Value | Meaning |
| ----- | ------- |
| `FPS` | Current server FPS |
| `frame time` | Average (`avg`), minimum (`min`) and maximum (`max`) time the server needs for one frame |
| `Mem` | Current memory usage in kilobytes as reported internally by the server |
| `Player` | Number of players on the server |
| `AI` | Number of AI units currently spawned on the server |
| `Veh` | The number in parentheses is the number of vehicles currently spawned on the server |

:::: info Note
The `Mem` value is only an approximation by the server and may differ from the actual memory usage.
::::

:::: tip Tip
You can find out how to find older output in the server log under [Read Server Log](read-server-log.md).
::::

## Adjust view distances in config.json

Under `gameProperties` in `config.json`, you define the view distances of your server. Lower values for `serverMaxViewDistance` and `networkViewDistance` can reduce the load on your server, as fewer objects are transferred to the players. Keep in mind that objects outside the `networkViewDistance` are not transferred to the players.

| Entry | Range | EmeraldHost default | Description |
| ----- | ----- | ------------------- | ----------- |
| `serverMaxViewDistance` | 500 – 10000 | `2500` | Maximum view distance on the server |
| `networkViewDistance` | 500 – 5000 | `1000` | Maximum range in which objects are transferred to the players over the network |
| `serverMinGrassDistance` | 0 or 50 – 150 | `50` | Minimum grass distance in meters that is forced on the players. With `0`, no distance is forced. |

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open config.json</b><br>
   Open the file `config.json` in the root directory and find the `"gameProperties"` section inside `"game"`.

4. <b>Adjust values</b><br>
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

   :::: tip Tip
   Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to prevent the server from starting.
   ::::

5. <b>Start the server</b><br>
   Save the file and start your server.

## Limit the number of AI units

Many AI units significantly increase the load on your server. With the `aiLimit` entry in the `"operating"` section, you set an upper limit. Once it is reached, no further AI units can be spawned. By default, no limit is set.

:::: tip Tip
You can find out how to add `aiLimit` or disable the AI completely under [Disable or Limit AI](disable-ai.md).
::::

## Disable navmesh streaming (optional)

The AI uses a so-called navmesh to move across the map. By default, the server loads this navmesh piece by piece. If you disable streaming, the server loads the entire navmesh into memory. This provides slightly better server performance and faster reactions of moving AI units.

:::: warning Warning
This setting is meant for advanced users. Depending on the map, your server needs up to several hundred MB more memory. Afterwards, check whether your server has enough memory, e.g. with the `Mem` value of the [performance statistics](#values-of-the-performance-statistics).
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open config.json</b><br>
   Open the file `config.json` in the root directory.

4. <b>Disable navmesh streaming</b><br>
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

   :::: tip Tip
   Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to prevent the server from starting.
   ::::

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: info Note
To enable navmesh streaming again, stop your server and remove the `"disableNavmeshStreaming"` line from `config.json`. If another entry comes before it in the `"operating"` section, also remove the comma at the end of that entry. Then check the file with [JSONLint](https://jsonlint.com/).
::::

## Reduce mods

Every mod increases the load on your server. Mods that add many objects, vehicles or AI units in particular affect performance. Therefore, only use the mods you really need and remove entries you no longer need from the `"mods"` section – stop your server beforehand. You can find out how to manage mods under [Add Mods](add-mods.md).
