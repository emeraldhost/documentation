---
description: Change the server description and server links on a The Bus server
---

# How to Change the Server Description on Your The Bus Server

On your The Bus server you can set a **server description** and **server links**, e.g. to your website or your Discord. You set both in the `ServerSettings.cfg` file.

:::: info Note
Unlike the server name, server password, admin password, server list and max players, the dashboard does not overwrite the server description and the server links on startup. Your changes in the file are therefore kept.
::::

:::: tip Tip
Create a [backup](create-backup.md) of your server before editing. This way you can quickly restore the file if something goes wrong.
::::

## Change the server description in ServerSettings.cfg

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the file</b><br>
   Open the file `/TheBus/Settings/ServerSettings.cfg` (JSON format) and look for the `serverDescription` entry.

4. <b>Enter description and links</b><br>
   Enter your description text under `description` and your links under `externalLinks`, for example:

   ```json
   "serverDescription": {
       "description": "Relaxed route driving in Berlin – every evening from 7 pm",
       "externalLinks": [
           { "type": "Website", "link": "https://example.com" },
           { "type": "Discord", "link": "https://discord.gg/example" },
           { "type": "YouTube", "link": "https://youtube.com/@example" }
       ]
   }
   ```

   The entry sits inside the existing file. If another key follows it, keep the comma after the closing curly brace.

   Besides `Website`, `Discord` and `YouTube`, `FACEBOOK` (in capital letters) and `Instagram` are also possible as `type`. Use exactly this spelling for the values. If you don't need a link, remove the whole line and make sure there is no comma after the last entry in the list.

   :::: tip Tip
   Check the file after editing with a JSON formatter such as [JSONLint](https://jsonlint.com/) – a single missing or extra comma is enough for the server to no longer be able to read the settings.
   ::::

5. <b>Start the server</b><br>
   Save the file and start your server again.

:::: info Note
TML Studios does not officially document the structure of this entry. The keys `serverDescription`, `description` and `externalLinks` and the possible `type` values come from a community source. If the entry looks different in your file, keep the structure from your file and only change the texts and links.
::::
