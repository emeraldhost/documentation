---
slug: "change-performance-class"
language: "en"
title: "How to Change the Performance Class of Your Game Server"
description: "Move your game server to a faster processor: the classes compared, the process and the requirements"
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
short_title: "Change Performance Class"
sort: 12
related: ["gameserver/view-metrics", "gameserver/renew-server", "gameserver/change-resources", "gameserver/set-up-scheduled-tasks", "gameserver/change-subdomain"]
---

The **Class** determines which processor your server runs on. If your server needs more speed, a faster processor often helps more than additional RAM. Your resources such as RAM and storage stay the same when you change the class, but your **server address changes**.

## The Classes Compared

| Class | Description | Processor | Clock speed | Storage |
| ----- | ----------- | --------- | ----------- | ------- |
| **Standard** | Solid performance for most servers | AMD EPYC 7443 / 7543P | up to 4.0 GHz | NVMe SSD |
| **Performance** | Maximum performance for demanding servers | AMD Ryzen 9 7950X3D / 9950X | up to 5.7 GHz | NVMe SSD |

You can see which class your server currently runs in on the **Overview** page under **Server Information** → **Class**, e.g. "Standard".

> [!TIP]
> The CPU usage shows whether your server really needs more computing power. To learn how to check it, see [View Metrics](/tutorials/gameserver/view-metrics).

## Open Switch Class

You can reach the **Switch class** dialog in your server's dashboard in several ways:

- in the left sidebar via **Performance**
- via the **Actions** dropdown → **Switch class**
- on the **Overview** page via the **More performance?** link next to your current class (opens an overview of the change first)
- in the **Change Resources** dialog via the **Switch to Performance** button
- on the **Metrics** page via the **Compare classes** link

## What Changes With the Switch

If you click **More performance?** on the **Overview** page, a short overview of the change "Standard → Performance – one class up" opens. Under **Changes** and **What stays the same** it shows what the switch changes:

| Changes | What stays the same |
| ------- | ------------------- |
| **Processor** (AMD EPYC 7443 / 7543P → AMD Ryzen 9 7950X3D / 9950X) | RAM (e.g. 4 GB) |
| **Speed** (up to 4.0 GHz → up to 5.7 GHz) | Storage (e.g. 20 GB) |
| **Monthly price** | All files, worlds and backups |
| **Server address** – "new afterwards" | |
| **Move** – "server briefly offline" | |

If your server has less than 14 days left, it also shows the notice "For Performance, your server needs at least 14 days left. Renew it first." with the **Renew server** button.

> [!IMPORTANT]
> For the switch, your server is moved. It is briefly offline during the move and has a **new server address** afterwards. After the switch, give your players the new **IP Address** from the **Overview** page, otherwise they can no longer connect.

> [!TIP]
> Instead of the IP address, you can also give your players your server's subdomain. To learn how to copy and change it, see [Change Subdomain](/tutorials/gameserver/change-subdomain).

## Change the Performance Class

1. **Choose a class**\
   Open the **Switch class** dialog. In the first step, choose how fast the processor your server runs on should be. Your current class and the recommended **Performance** class are marked. You also see your current and your new monthly price.

2. **Payment**\
   In the payment step, you pay the amount due shown at the bottom. This is a prorated amount, not the full monthly price.

3. **Overview**\
   In the last step, you see the summary of your change. Your server is then moved and is briefly offline during the move.

4. **Share the new address**\
   As soon as your server is running again, you find the new **IP Address** on the **Overview** page. Share it with your players.

> [!NOTE]
> Prices depend on your server. You see the exact amount directly in the dialog before you pay.

## Minimum Runtime of 14 Days

For a faster processor, your server needs at least 14 days of remaining runtime. If the remaining runtime is shorter, you see a notice that your server needs at least 14 days left and that you should renew it first, together with the current remaining runtime.

1. **Renew the server**\
   Click **Renew server** in the notice and renew your server, e.g. by 30 days. Longer runtimes such as 90, 180, 365 or 730 days are cheaper (up to -20 %). To learn more, see [Renew Server](/tutorials/gameserver/renew-server).

2. **Change the class**\
   Then open **Switch class** again and complete the change as described above.

> [!IMPORTANT]
> Changing the class changes the processor and the server address, but not your resources. If you need more RAM or storage, adjust it via **Change Resources**. To learn how, see [Change Resources](/tutorials/gameserver/change-resources).
