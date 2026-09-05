---
# Copy this file to tutorials/<group>/[<section>/][<subcategory>/]<topic>/en.md
# and replace the example values. Fields that are commented out are optional:
# remove the `#` to use one. Keep the order below, the whole corpus uses it.

# Required. Lowercase, hyphens, one segment. Must equal the folder name.
slug: "install-datapacks"

# Required. Must match the filename: en.md -> en.
language: "en"

# Required. Shown as the page heading. Do not repeat it as a heading in the body.
title: "Install Data Packs on Your Minecraft Server"

# Required. One sentence, under 160 characters. Used as the teaser and the meta description.
description: "Add data packs to a Minecraft server hosted at EmeraldHost and check that they loaded."

# Optional values, keep the empty list when you have none.
tags: []

# Required. Publication date, YYYY-MM-DD. Replace the placeholder.
date: "YYYY-MM-DD"

# public, internal or draft. Defaults to public.
visibility: "public"

# Mark the guide as outdated while it waits for a rewrite. The article page then
# shows a warning banner below the header, pointing readers to support and the
# community Discord; the guide stays listed and indexed. Do not combine it with
# is_featured.
# is_deprecated: true

# Date of the last real content change. Leave out while it would repeat `date`,
# otherwise replace the placeholder.
# updated: "YYYY-MM-DD"

# Call to action at the end of the page: gameserver, rootserver, domain or teamspeak.
# cta: "gameserver"

# Product keys this guide belongs to. Leave out when no product matches.
# product_keys: ["minecraft"]

author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."

# Required. Every guide ships in both languages.
available_languages: ["de", "en"]

# Short label for lists and the sidebar.
short_title: "Install data packs"

# Position inside the category. Ask in the pull request if you are unsure.
# sort: 12

# Sibling guides, as folder paths without the tutorials/ prefix.
# related: ["gameserver/minecraft/install-plugins", "gameserver/minecraft/create-backup"]
---

Two or three sentences that say what the reader will have at the end and when
they need this guide. Do not list the steps here, the page builds its own table
of contents from the headings.

> [!TIP]
> Take a backup before you change server files. See
> [Create a Backup](/tutorials/gameserver/minecraft/create-backup).

## Prerequisites

- A Minecraft server at EmeraldHost.
- Access to the dashboard for that server.
- A data pack that matches your server version.

## Install the data pack

1. **Stop the server**\
   Stop the server in the dashboard and wait until the status is offline.

2. **Connect via SFTP**\
   Connect to the server as described in
   [Establish an SFTP connection](/tutorials/gameserver/establish-sftp-connection).

3. **Upload the data pack**\
   Copy the `.zip` file into the `datapacks` folder of your world:

   ```text
   /world/datapacks/my-datapack.zip
   ```

4. **Start the server**\
   Start the server and watch the console until the world has loaded.

   ```text
   [INFO] Loaded 1 data pack
   ```

## Check the result

| What you see              | What it means                        |
| ------------------------- | ------------------------------------ |
| The pack is listed        | The data pack loaded correctly       |
| The console reports a pack error | The pack does not match the version |
| Nothing changes in game   | The pack is present but not enabled  |

> [!WARNING]
> A data pack written for another Minecraft version can corrupt the world. Test
> a new pack on a copy first.

## Next steps

- [Install plugins](/tutorials/gameserver/minecraft/install-plugins)
- [Change the modpack](/tutorials/gameserver/minecraft/change-modpack)

If something does not work, open a support ticket in the dashboard and add the
last lines from the server console.
