---
slug: "set-up-scheduled-tasks"
language: "en"
title: "How to Set Up Scheduled Tasks on Your Game Server"
description: "Schedule automatic backups, restarts and console commands on a game server"
tags: []
date: "2026-10-20"
visibility: "public"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Set Up Scheduled Tasks"
sort: 6
related: ["gameserver/create-backup", "gameserver/establish-sftp-connection", "gameserver/create-database", "gameserver/steamid64-find-out"]
---

Since EmeraldHost 2.0, you can create scheduled tasks under **Schedules** in your server's dashboard. This lets your server do things automatically, e.g. regular restarts, backups or console commands. You decide how often and at what time a task runs, and you can pause, change or start it manually at any time.

> [!NOTE]
> You can create up to 20 schedules per server. How many you can still create is shown at the top of the **Schedules** page.

## Available Actions

| Action | Description |
| ------ | ----------- |
| **Start** | Starts your server. |
| **Stop** | Stops your server. |
| **Restart** | Restarts your server. |
| **Backup** | Creates a backup of your server. |
| **Send command** | Sends a command to the console, e.g. a message to all players. |

## Create a Scheduled Task

1. **Open Schedules**\
   Open your server's dashboard and click **Schedules** in the left sidebar.

2. **Create a schedule**\
   Click **Create schedule**.

3. **Choose the action**\
   In the **Action** step, choose what should happen automatically. The **Name** is suggested from the action and the schedule, but you can change it.

   For **Send command**, enter the command in the **Command** field just as you would in the console – without a `/` at the start.

4. **Only while the server is running**\
   If **Only while the server is running** is enabled, this run is skipped while your server is off. Then click **Next**.

5. **Set the schedule**\
   In the **Schedule** step, define when and how often the task should run. You can choose **Minutes**, **Hours**, **Weekly** and **Monthly**. Depending on your choice, you set e.g. every how many hours and at which minute the task runs, or at what time, and on which days (**Daily**, **Weekdays**, **Weekend** or individual weekdays). With **Only within a time window** you limit the task to a specific period. Then click **Next**.

   > [!NOTE]
   > All times are in your time zone, e.g. Europe/Berlin.

6. **Save the schedule**\
   In the **Overview**, check the action, the schedule and the next runs, and click **Save schedule**. The task is active immediately after saving.

> [!TIP]
> Under **Presets** you find ready-made schedules, e.g. **Daily Restart at 4 AM**, **Daily Backup at 3 AM** or **Backup every 6 hours**. This lets you create common tasks with just a few clicks.

## Automatic Backups

A few things apply to backups in particular:

- **At most once per hour:** Backups run at most once per hour.
- **Backup slots:** When creating the task, you see how many of your backup slots are already in use.
- **Delete old backups automatically:** If this option is enabled and all slots are in use, the oldest unlocked backup is deleted. Locked backups are never deleted.

> [!TIP]
> Lock important backups so they are not deleted automatically. To learn how, see [Create Backup](/tutorials/gameserver/create-backup).

## Example: Daily Restart with a Warning

With two tasks, you announce a restart in the game beforehand:

1. **Create the warning**\
   Create a task with the **Send command** action that sends a message to all players daily at 03:55. The command you need depends on the game, e.g. `say The server restarts in 5 minutes` in Minecraft.

2. **Create the restart**\
   Create a second task with the **Restart** action that runs daily at 04:00.

## Manage Tasks

On the **Schedules** page you see all schedules you have created. There you can pause, reactivate, change or manually start each task.
