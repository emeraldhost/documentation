---
slug: "change-performance-class"
language: "en"
title: "How to Change the Performance Class of Your Game Server"
description: "Move your game server to a faster processor: the classes compared, the process and the requirements"
tags: []
date: "2026-10-20"
visibility: "public"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change Performance Class"
sort: 12
related: ["gameserver/view-metrics", "gameserver/renew-server", "gameserver/change-resources", "gameserver/set-up-scheduled-tasks"]
---

The **Klasse** (Class) determines which processor your server runs on. If your server needs more speed, a faster processor often helps more than additional RAM. Your resources such as RAM and storage stay the same when you change the class.

## The Classes Compared

| Class | Description | Processor | Clock speed | Storage |
| ----- | ----------- | --------- | ----------- | ------- |
| **Standard** | Solid performance for most servers | AMD EPYC 7443 / 7543P | up to 4.0 GHz | NVMe SSD |
| **Performance** | Maximum performance for demanding servers | AMD Ryzen 9 7950X3D / 9950X | up to 5.7 GHz | NVMe SSD |

You can see which class your server currently runs in in the **Übersicht** (Overview) under **Klasse** (Class), e.g. "Klasse: Standard".

> [!TIP]
> The CPU usage shows whether your server really needs more computing power. To learn how to check it, see [View Metrics](/tutorials/gameserver/view-metrics).

## Open Change Class

You can reach the **Klasse wechseln** (Change class) dialog in your server's dashboard in several ways:

- in the left sidebar via **Performance**
- via the **Aktionen** (Actions) dropdown → **Klasse wechseln** (Change class)
- in the **Übersicht** (Overview) via the **Mehr Leistung?** (More performance?) link next to your current class
- in the **Ressourcen ändern** (Change resources) dialog via the **Zur Performance-Klasse** (To the performance class) button
- on the **Metriken** (Metrics) page via the **Klassen vergleichen** (Compare classes) link

## Change the Performance Class

1. **Choose a class**\
   Open the **Klasse wechseln** (Change class) dialog. In the **Klasse wählen** (Choose class) step, choose how fast the processor your server runs on should be. Your current class is marked **Aktuell** (Current), the **Performance** class is marked **Empfohlen** (Recommended). You also see your **Aktueller Monatspreis** (Current monthly price) and the **Neuer Monatspreis** (New monthly price).

2. **Payment**\
   In the **Bezahlung** (Payment) step, you pay the amount shown at the bottom under **Zu zahlen** (To pay). This is a prorated amount, not the full monthly price.

3. **Overview**\
   In the **Übersicht** (Overview) step, you see the summary of your change.

> [!NOTE]
> Prices depend on your server. You see the exact amount directly in the dialog before you pay.

## Minimum Runtime of 14 Days

For a faster processor, your server needs at least 14 days of remaining runtime. If the remaining runtime is shorter, the dialog shows the notice **Bitte erst verlängern** (Please renew first) together with the current remaining runtime, e.g. "Aktuell hat er noch 4 Tage 1 Std. Laufzeit." (It currently has 4 days 1 hr. of runtime left).

1. **Renew the server**\
   Click **Server verlängern** (Renew server) in the notice and renew your server, e.g. by 30 days. Longer runtimes such as 90, 180, 365 or 730 days are cheaper (up to -20 %). To learn more, see [Renew Server](/tutorials/gameserver/renew-server).

2. **Change the class**\
   Then open **Klasse wechseln** (Change class) again and complete the change as described above.

> [!IMPORTANT]
> Changing the class only changes the processor. If you need more RAM or storage, adjust it via **Ressourcen ändern** (Change resources). To learn how, see [Change Resources](/tutorials/gameserver/change-resources).
