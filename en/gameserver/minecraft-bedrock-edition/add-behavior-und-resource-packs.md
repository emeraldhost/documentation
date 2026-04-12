---
description: Add behavior and resource packs to a Minecraft Bedrock server
---

# How to Add Behavior and Resource Packs to Your Minecraft Bedrock Server

You can install behavior packs and resource packs on your server to enhance the gameplay experience. Packs are uploaded as folders and then activated via a JSON file in the world.

## Upload packs

1. <b>Download pack</b><br>
   Download the desired pack. If it comes as a `.mcpack` or `.mcaddon` file, rename it to `.zip` and extract it.

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Upload pack folder</b><br>
   Upload the extracted folder to the corresponding directory:

   | Pack type | Directory |
   |-----------|-----------|
   | Behavior Pack | `/behavior_packs/` |
   | Resource Pack | `/resource_packs/` |

## Activate packs

5. <b>Find UUID and version</b><br>
   Open the `manifest.json` file inside the uploaded pack folder. Copy the `uuid` and `version` values from the `header` section:

   ```json
   {
     "header": {
       "uuid": "your-pack-uuid",
       "version": [1, 0, 0]
     }
   }
   ```

6. <b>Edit JSON file</b><br>
   Open (or create) the corresponding JSON file in your server's world folder (e.g. `/worlds/Bedrock level/`):

   | Pack type | File |
   |-----------|------|
   | Behavior Pack | `world_behavior_packs.json` |
   | Resource Pack | `world_resource_packs.json` |

   Add the pack with its `pack_id` and `version`:

   ```json
   [
     {
       "pack_id": "your-pack-uuid",
       "version": [1, 0, 0]
     }
   ]
   ```

   For multiple packs, add additional entries separated by commas.

7. <b>Start the server</b><br>
   Save the files and start your server.

:::: warning Warning
Always use the `uuid` from the `header` section of `manifest.json`, not from the `modules` section.
::::

:::: info Note
Some packs require all players to install the resource pack on their client as well.
::::
