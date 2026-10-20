---
slug: "change-resources"
language: "en"
title: "How to Change the Resources of Your Game Server"
description: "Adjust RAM and storage, expand backup, database and instance slots and add CPU cores on a game server"
tags: []
date: "2026-10-20"
visibility: "public"
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

If your server is running short on resources, you can adjust them directly in the dashboard. With **Ressourcen ändern** (Change resources) you set the RAM and storage and expand the slots for backups, databases and instances. Additional CPU cores are booked as an addon via **Addons verwalten** (Manage addons).

> [!TIP]
> The metrics show whether your server is really short on resources. To learn how to read them, see [View Metrics](/tutorials/gameserver/view-metrics).

## Open Change Resources

You can reach the **Ressourcen ändern** (Change resources) dialog in several ways:

- Click the **Ressourcen ändern** (Change resources) icon in your server's header.
- Open the **Aktionen** (Actions) dropdown and select **Ressourcen ändern** (Change resources).
- In the **Übersicht** (Overview), click the **Ressourcen ändern** (Change resources) link in the **Ressourcennutzung** (Resource usage) box.

## Adjust RAM and Storage

1. **Open the dialog**\
   Open the **Ressourcen ändern** (Change resources) dialog using one of the ways above. You start in the **Konfiguration** (Configuration) step.

2. **Set the RAM**\
   Use the **Arbeitsspeicher** (RAM) slider to set how much RAM your server gets.

3. **Set the storage**\
   Use the **Speicherplatz** (Storage) slider to set how much storage your server has.

   > [!NOTE]
   > Which values you can set depends on the game. For Minecraft, for example, it is 2 to 32 GB of RAM and 20 to 200 GB of storage.

4. **Check the price**\
   At the bottom of the dialog you see how your selection affects the price and the new **Monatlicher Preis** (Monthly price). If you haven't changed anything, it shows "Keine Änderung" (No change).

5. **Confirm the change**\
   Go to the **Übersicht** (Overview) step, check your selection there and confirm the change.

> [!TIP]
> A hint in the dialog points out that a faster processor often helps more than additional RAM. The **Zur Performance-Klasse** (To the performance class) button takes you straight there – your resources stay the same. To learn more, see [Change Performance Class](/tutorials/gameserver/change-performance-class).

## Expand Backup, Database and Instance Slots

If the slots for backups, databases or instances are not enough, you expand them in the same dialog:

| Page | Shown at the top of the page | Button |
| ---- | ---------------------------- | ------ |
| **Backups** | e.g. "noch 5 von 5 Backups möglich" (5 of 5 backups still available) | **Backup-Plätze erweitern** (Expand backup slots) |
| **Datenbanken** (Databases) | e.g. "noch 3 von 3 Datenbanken möglich" (3 of 3 databases still available) | **Datenbank-Plätze erweitern** (Expand database slots) |
| **Instanzen** (Instances) | e.g. "nur noch 1 Instanz möglich" (only 1 more instance possible) | **Instanz-Plätze erweitern** (Expand instance slots) |

1. **Open the page**\
   Open the **Backups**, **Datenbanken** (Databases) or **Instanzen** (Instances) page in the left sidebar.

2. **Expand the slots**\
   Click the matching button at the top of the page, e.g. **Datenbank-Plätze erweitern** (Expand database slots). The **Ressourcen ändern** (Change resources) dialog opens in the **Konfiguration** (Configuration) step with the slider for those slots.

3. **Choose the number**\
   Use the slider to set how many slots you want. For databases, you set the number with the **Datenbanken** (Databases) slider – 3 are included, the levels 4, 5, 10, 15 and 20 are paid.

4. **Check the price and confirm**\
   Check the price change and the **Monatlicher Preis** (Monthly price) at the bottom of the dialog, go to the **Übersicht** (Overview) step and confirm the change.

> [!TIP]
> To learn how to create and manage backups, see [Create Backup](/tutorials/gameserver/create-backup). Everything about databases is in [Create Database](/tutorials/gameserver/create-database), and about instances in [Use Instances](/tutorials/gameserver/use-instances).

## Book Additional CPU Cores

Additional CPU cores are not part of **Ressourcen ändern** (Change resources) but an addon:

1. **Open Manage addons**\
   Open the **Aktionen** (Actions) dropdown and select **Addons verwalten** (Manage addons). You start in the **Addons auswählen** (Select addons) step.

2. **Choose the CPU cores**\
   For the **Zusätzliche CPU-Leistung** (Additional CPU power) addon, use **–** and **+** to choose how many additional cores you want, e.g. **+1 Kern** (+1 core) or **+2 Kerne** (+2 cores). The surcharge is shown right away.

3. **Check the price**\
   At the bottom of the dialog, **Zu zahlen** (To pay) shows the prorated amount for the remaining runtime and the new **Monatspreis** (Monthly price). Then click **Weiter** (Next).

4. **Check the summary**\
   Check your selection in the **Zusammenfassung** (Summary) step and complete the booking.
