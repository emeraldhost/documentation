---
slug: "change-map"
language: "en"
title: "How to Change the Map on Your 7 Days to Die Server"
description: "Change the map on a 7 Days to Die server"
tags: []
date: "2026-03-18"
visibility: "public"
cta: "gameserver"
product_keys: ["7-days-to-die"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change Map"
sort: 5
related: ["gameserver/7-days-to-die/add-mods", "gameserver/7-days-to-die/add-savegame", "gameserver/7-days-to-die/create-backup", "gameserver/7-days-to-die/download-savegame"]
---

You can choose between the hand-crafted map **Navezgane**, pre-generated maps (**Pregen**) and a randomly generated world (**RWG**).

## Change map

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open serverconfig.xml**\
   Open the file `serverconfig.xml` in the root directory of your server.

4. **Set the map**\
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

5. **Start the server**\
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

> [!NOTE]
> The larger the world, the more resources the server requires. A size of `6144` is recommended for most servers.

> [!WARNING]
> Changing the map does not delete the existing world. If you want to switch to a new random world, change the `WorldGenSeed` or delete the existing world folder under `/Saves/`.
