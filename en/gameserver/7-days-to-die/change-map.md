---
description: Change the map on a 7 Days to Die server
---

# How to Change the Map on Your 7 Days to Die Server

You can choose between the hand-crafted map **Navezgane**, pre-generated maps (**Pregen**) and a randomly generated world (**RWG**).

## Change map

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open serverconfig.xml</b><br>
   Open the file `serverconfig.xml` in the root directory of your server.

4. <b>Set the map</b><br>
   Find the following line and change the value:

   ```xml
   <property name="GameWorld" value="Navezgane"/>
   ```

   | Value | Description |
   |-------|-------------|
   | `Navezgane` | The hand-crafted default map |
   | `RWG` | Randomly generated world |
   | `Pregen06k01` to `Pregen06k04` | Pre-generated 6k maps |
   | `Pregen08k01` to `Pregen08k04` | Pre-generated 8k maps |
   | `Pregen10k01` to `Pregen10k04` | Pre-generated 10k maps |

5. <b>Start the server</b><br>
   Save the file and start your server.

## Configure random world (RWG)

If you chose `RWG` as the map, you can further customize the world generation:

```xml
<property name="GameWorld" value="RWG"/>
<property name="WorldGenSeed" value="MySeed"/>
<property name="WorldGenSize" value="6144"/>
```

| Setting | Description |
|---------|-------------|
| `WorldGenSeed` | The seed for world generation (any text) |
| `WorldGenSize` | Map size: `6144`, `8192` or `10240` |

:::: info Note
The larger the world, the more resources the server requires. A size of `6144` is recommended for most servers.
::::

:::: warning Warning
Changing the map does not delete the existing world. If you want to switch to a new random world, change the `WorldGenSeed` or delete the existing world folder under `/Saves/`.
::::
