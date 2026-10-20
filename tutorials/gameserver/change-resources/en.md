---
slug: "change-resources"
language: "en"
title: "How to Change the Resources of Your Game Server"
description: "Adjust RAM and storage, expand backup, database and instance slots and add CPU cores on a game server"
tags: []
date: "2026-10-20"
visibility: "public"
updated: "2026-10-20"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change Resources"
sort: 11
related: ["gameserver/change-performance-class", "gameserver/view-metrics", "gameserver/create-backup", "gameserver/use-instances"]
---

If your server is running short on resources, you can adjust them directly in the dashboard. With **Change Resources** you set the RAM and storage and expand the slots for backups, databases and instances. Additional CPU cores are booked as an addon via **Manage addons**.

> [!TIP]
> The metrics show whether your server is really short on resources. To learn how to read them, see [View Metrics](/tutorials/gameserver/view-metrics).

## Open Change Resources

You can reach the **Change Resources** dialog in several ways:

- Click the **Change Resources** icon in your server's header.
- Open the **Actions** dropdown and select **Change Resources**.
- In the **Overview**, click the **Change resources** link in the **Resource usage** box.

## Adjust RAM and Storage

1. **Open the dialog**\
   Open the **Change Resources** dialog using one of the ways above. You start in the **Configuration** step.

2. **Set the RAM**\
   Use the **Memory** slider to set how much RAM your server gets.

3. **Set the storage**\
   Use the **Storage** slider to set how much storage your server has.

   > [!NOTE]
   > Which values you can set depends on the game. For Minecraft, for example, it is 2 to 32 GB of RAM and 20 to 200 GB of storage.

4. **Check the price**\
   At the bottom of the dialog you see how your selection affects the price and the new **Monthly Price**. If you haven't changed anything, it shows **No Change**.

5. **Confirm the change**\
   Click **Next**, check your selection in the **Review** step and confirm the change.

> [!TIP]
> A hint in the dialog points out that a faster processor often helps more than extra RAM. The **Switch to Performance** button takes you straight there – your resources stay the same. To learn more, see [Change Performance Class](/tutorials/gameserver/change-performance-class).

## Expand Backup, Database and Instance Slots

If the slots for backups, databases or instances are not enough, you expand them in the same dialog:

| Page | Shown at the top of the page | Button |
| ---- | ---------------------------- | ------ |
| **Backups** | e.g. "5 of 5 backups left" | **Add backup slots** |
| **Databases** | e.g. "3 of 3 databases left" | **Add database slots** |
| **Instances** | e.g. "only 1 instance left" | **Add instance slots** |

1. **Open the page**\
   Open the **Backups**, **Databases** or **Instances** page in the left sidebar.

2. **Expand the slots**\
   Click the matching button at the top of the page, e.g. **Add database slots**. The **Change Resources** dialog opens in the **Configuration** step with the slider for those slots.

3. **Choose the number**\
   Use the slider to set how many slots you want. For databases, 3 are included, the levels 4, 5, 10, 15 and 20 are paid.

4. **Check the price and confirm**\
   Check the price change and the **Monthly Price** at the bottom of the dialog, go to the **Review** step and confirm the change.

> [!TIP]
> To learn how to create and manage backups, see [Create Backup](/tutorials/gameserver/create-backup). Everything about databases is in [Create Database](/tutorials/gameserver/create-database), and about instances in [Use Instances](/tutorials/gameserver/use-instances).

## Book Additional CPU Cores

Additional CPU cores are not part of **Change Resources** but an addon:

1. **Open Manage addons**\
   Open the **Actions** dropdown and select **Manage addons**. You start in the **Select Addons** step.

2. **Choose the CPU cores**\
   For the **Additional CPU** addon, use **–** and **+** to choose how many additional cores you want. As long as you haven't chosen any, it shows **Nothing selected**. The surcharge is shown right away.

3. **Check the price**\
   At the bottom of the dialog you see the prorated amount to pay for the remaining runtime and the new **Monthly price**. Then click **Next**.

4. **Check the review**\
   Check your selection in the **Review** step and complete the booking.
