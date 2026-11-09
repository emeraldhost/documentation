---
slug: "extend-windows-evaluation-license"
language: "en"
title: "How to Extend the Evaluation License on Your Windows Server"
description: "Check and extend the 180-day evaluation license of a Windows Server with slmgr"
tags: []
date: "2026-11-09"
visibility: "public"
cta: "rootserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Extend Windows Evaluation License"
sort: 4
related: ["rootserver/windows/connect-to-windows-server", "rootserver/windows/open-windows-firewall-ports", "rootserver/windows/windows-hard-drive-expand"]
---

If your Windows Server suddenly shuts down on its own about every hour, or the desktop shows the notice **Windows License is expired**, the evaluation license has most likely expired. This guide shows you how to check and extend the license.

> [!NOTE]
> **Windows Server at EmeraldHost**
>
> Our Windows Server operating systems are provided with Microsoft's **180-day evaluation license**. After 180 days, the license expires and has to be extended or replaced with your own license.

## Requirements

- You are [connected to your Windows Server](/tutorials/rootserver/windows/connect-to-windows-server).
- You are logged in as **Administrator**.

## Step 1: Check the license status

1. **Open PowerShell as administrator**\
   Right-click the Start menu and select **Terminal (Admin)** or **Windows PowerShell (Admin)**.

2. **Show the license information**\
   Run the following command:

   ```powershell
   slmgr /dlv
   ```

   After a few seconds, a window with the license information opens.

3. **Read the values**\
   Look for these entries:
   - **Description**: If it contains `EVAL`, your server is running with an evaluation license.
   - **Remaining Windows rearm count**: How many more times you can extend the license.
   - **License Status** and **Timebased activation expiration**: Whether and when the license expires.

> [!TIP]
> While the license is running, Windows also shows the remaining days in the bottom right-hand corner of the desktop.

## Step 2: Extend the license

1. **Reset the license**\
   In PowerShell as administrator, run:

   ```powershell
   slmgr /rearm
   ```

   A window confirms that the command completed successfully.

2. **Restart the server**\
   Restart the server so the change takes effect:

   ```powershell
   Restart-Computer
   ```

3. **Check the result**\
   After the restart, connect again and run `slmgr /dlv`. The license should now run for 180 days again, and the remaining rearm count should have dropped by one.

> [!WARNING]
> You can only extend the license as often as shown under **Remaining Windows rearm count**. If it shows `0`, `slmgr /rearm` reports the error `0xC004D307` and no further extension is possible. You then need your own license (see below) or a reinstallation of the server.

> [!NOTE]
> For the license to run the full 180 days again after the reset, your server must be connected to the internet. If `slmgr /dlv` only shows a few days after the restart, check the server's internet connection.

## Switch to your own license

If you want to run your Windows Server permanently, you can convert the evaluation version into a full version with a purchased product key. Your data and programs are kept. Microsoft describes the conversion with `DISM` step by step in the guide [Convert Windows Server evaluation to a retail version](https://learn.microsoft.com/en-us/windows-server/get-started/upgrade-conversion-options).

> [!WARNING]
> If your server is an **Active Directory domain controller**, it cannot be converted from the evaluation to the full version according to Microsoft. Also create a snapshot or backup of your server before the conversion.
