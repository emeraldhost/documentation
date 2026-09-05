---
slug: "add-behavior-und-resource-packs"
language: "en"
title: "How to Add Behavior and Resource Packs to Your Minecraft Bedrock Server"
description: "Add behavior and resource packs to a Minecraft Bedrock server"
tags: []
date: "2023-10-15"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["minecraft-bedrock"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Behavior and Resource Packs"
sort: 1
related: ["gameserver/minecraft-bedrock/change-tick-distance", "gameserver/minecraft-bedrock/change-view-distance", "gameserver/minecraft-bedrock/change-world-border", "gameserver/minecraft-bedrock/change-world-seed"]
---

You can install behavior packs and resource packs on your server to enhance the gameplay experience. Packs are uploaded as folders and then activated via a JSON file in the world.

## Upload packs

1. **Download pack**\
   Download the desired pack. If it comes as a `.mcpack` or `.mcaddon` file, rename it to `.zip` and extract it.

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Upload pack folder**\
   Upload the extracted folder to the corresponding directory:

   | Pack type | Directory |
   |-----------|-----------|
   | Behavior Pack | `/behavior_packs/` |
   | Resource Pack | `/resource_packs/` |

## Activate packs

5. **Find UUID and version**\
   Open the `manifest.json` file inside the uploaded pack folder. Copy the `uuid` and `version` values from the `header` section:

   ```json
   {
     "header": {
       "uuid": "your-pack-uuid",
       "version": [1, 0, 0]
     }
   }
   ```

6. **Edit JSON file**\
   Open (or create) the corresponding JSON file in your server's world folder (e.g. `/worlds/Bedrock level/`):

   | Pack type | File |
   |-----------|------|
   | Behavior Pack | `world_behavior_packs.json` |
   | Resource Pack | `world_resource_packs.json` |

   Add the pack with its `pack_id` and `version`. The example shows how two packs appear in the list – the entries are separated by a comma:

   ```json
   [
     {
       "pack_id": "uuid-of-the-first-pack",
       "version": [1, 0, 0]
     },
     {
       "pack_id": "uuid-of-the-second-pack",
       "version": [1, 2, 0]
     }
   ]
   ```

   Each entry gets the `uuid` and `version` from the `manifest.json` of the respective pack. If you only use one pack, leave out the second entry along with the comma.

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to stop the server from loading your packs.

7. **Start the server**\
   Save the files and start your server.

> [!WARNING]
> Always use the `uuid` from the `header` section of `manifest.json`, not from the `modules` section.

> [!NOTE]
> Some packs require all players to install the resource pack on their client as well.
