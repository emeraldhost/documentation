---
slug: "view-metrics"
language: "en"
title: "How to View the Metrics of Your Game Server"
description: "Analyze CPU, RAM, storage, players and network traffic of your game server over time"
tags: []
date: "2026-10-20"
visibility: "public"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "View Metrics"
sort: 10
related: ["gameserver/set-up-scheduled-tasks", "gameserver/create-backup", "gameserver/create-database", "gameserver/establish-sftp-connection"]
---

In your server's dashboard, **Metrics** shows charts of your game server's usage. There you can see how heavily the CPU, memory and storage are used, how many players were online and how much data your server receives and sends. This helps you spot bottlenecks and decide whether your server needs more resources.

## Open the Metrics

1. **Open the dashboard**\
   Open your server's dashboard.

2. **Select Metrics**\
   Click **Metrics** in the left sidebar. The title shows which time range is currently displayed.

## Choose a Time Range and Values

Use the buttons **Hour** to **Year** to choose which time range the charts show:

| Button | Time range |
| ------ | ---------- |
| **Hour** | The last hour |
| **Day** | The last day |
| **Week** | The last week |
| **Month** | The last month |
| **Year** | The last year |

With the buttons **Ø**, **Max** and **Min**, you choose which value the charts display:

- **Ø:** the average
- **Max:** the highest value
- **Min:** the lowest value

> [!TIP]
> The average shows your normal usage. With **Max** you can spot short peaks that disappear in the average, e.g. when many players are online at the same time.

## The Charts

Each chart also shows the average (Ø), minimum (Min) and maximum (Max) for the selected time range.

| Chart | What it shows |
| ----- | ------------- |
| **Computing power (CPU)** | How heavily your server's processor is used |
| **Memory (RAM)** | How much memory your server uses |
| **Storage** | How much storage your server files take up |
| **Players online** | How many players were on your server |
| **Network traffic** | How much data your server receives and sends, in MiB/s |

> [!NOTE]
> The **Computing power (CPU)** chart shows which class your server runs in, e.g. "Your server runs in the Standard class." Next to it you find the link **Compare classes**.

## Interpret the Metrics

The charts help you trace problems to their cause:

- **Memory constantly at the limit:** If your server lags or crashes while RAM usage is close to the maximum, your server probably needs more memory.
- **High CPU usage:** If the computing power is often fully used, e.g. when many players are online, a different class can help.
- **Storage almost full:** If the used storage keeps growing, delete files you no longer need or expand the storage.
- **Compare players and usage:** Compare the **Players online** chart with CPU and RAM. This shows you at how many players your server reaches its limits.

## Adjust Resources

If the metrics show that your server lacks resources, you can adjust them directly in the dashboard:

- **More memory or storage:** Click the **Change Resources** icon in your server's header or select **Change Resources** under **Actions**. You can also find the **Change resources** link in the **Resource usage** box on the **Overview** page.
- **More computing power:** If the computing power is not enough, select **Switch class** under **Actions**.

> [!TIP]
> Check the metrics again over a few days after a change. This shows you whether the new resources fit your player count.
