---
slug: "install-umod"
language: "en"
title: "How to Install uMod on Your Rust Server"
description: "Install uMod (formerly Oxide) on a Rust server"
tags: []
date: "2026-04-15"
visibility: "public"
cta: "gameserver"
product_keys: ["rust"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Install uMod"
sort: 9
related: ["gameserver/rust/change-world-size", "gameserver/rust/create-backup", "gameserver/rust/join-server", "gameserver/rust/set-custom-map-url"]
---

uMod (formerly Oxide) is the most widely used modding framework for Rust and provides access to thousands of plugins. On EmeraldHost you can enable uMod directly via the dashboard.

> [!WARNING]
> uMod does not work on the `staging` branch. If uMod is enabled anyway, client connections will fail with the following error:
>
> ```text
> Disconnected: Connection Attempt Failed
> ```
>
> Switch the branch before installation as described below.

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Enable uMod**\
   Set the **uMod** field to enabled.

4. **Switch branch**\
   Change the **Branch** field from `staging` to `workcart` and save the settings.

5. **Reinstall the server**\
   Click the three dots in the top right and select **Reinstall**. Confirm the action so the server is set up again with the new branch and uMod.

   > [!WARNING]
   > Reinstalling resets all server files. Create a [backup](/tutorials/gameserver/rust/create-backup) beforehand if you want to keep your current save.

6. **Start the server**\
   Start your server. uMod will be loaded automatically.

## Adding plugins

After installing uMod, you can place plugins in the `/oxide/plugins/` folder. uMod automatically detects new `.cs` files and hot-reloads them while the server is running.

You can find plugins here, among others:

- [uMod plugin list](https://umod.org/plugins)

> [!TIP]
> After every Rust update, check whether your plugins are still compatible. Many plugins need to be updated after major game updates.
