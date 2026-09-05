---
slug: "open-windows-firewall-ports"
language: "en"
title: "How to Open the Windows Firewall on Your Windows Server"
description: "Open ports in the Windows Firewall on a Windows Server"
tags: []
date: "2026-06-14"
visibility: "public"
cta: "rootserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Open Windows Firewall Ports"
sort: 3
related: ["rootserver/windows/connect-to-windows-server", "rootserver/windows/windows-hard-drive-expand"]
---

For services such as game or web servers to be reachable from the outside, you have to open the required **ports** in the Windows Firewall. This guide shows you both ways – via the graphical interface and via PowerShell.

> [!NOTE]
> You first need to be [connected to your Windows Server](/tutorials/rootserver/windows/connect-to-windows-server) to perform the following steps.

## Via the graphical interface

1. **Open the firewall**\
   Press `Windows + R`, type `wf.msc` and confirm with `Enter`. The **Windows Defender Firewall with Advanced Security** opens.

2. **Create a new inbound rule**\
   Click **Inbound Rules** on the left and then **New Rule…** on the right.

3. **Choose the rule type**\
   Select **Port** and click **Next**.

4. **Specify protocol and port**\
   Select **TCP** or **UDP** and enter the desired port under **Specific local ports** (e.g. `25565`). Click **Next**.

   > [!TIP]
   > Separate multiple ports with commas (`25565,25566`), ranges with a hyphen (`27015-27020`). If your service needs both TCP and UDP, create a separate rule for each protocol.

5. **Allow the connection**\
   Select **Allow the connection** and click **Next**.

6. **Select the profiles**\
   Leave all profiles (**Domain**, **Private**, **Public**) enabled and click **Next**.

7. **Name the rule**\
   Give it a meaningful name (e.g. `Minecraft Server`) and click **Finish**.

## Via PowerShell

Alternatively, you can open a port directly via PowerShell – which is often faster.

1. **Open PowerShell as administrator**\
   Right-click the Start menu and select **Windows PowerShell (Admin)** or **Terminal (Admin)**.

2. **Create the rule**\
   Run the following command and adjust the name, port and protocol:

   ```powershell
   New-NetFirewallRule -DisplayName "Minecraft Server" -Direction Inbound -LocalPort 25565 -Protocol TCP -Action Allow
   ```

   For a UDP port, replace `TCP` with `UDP`.

> [!WARNING]
> Only open ports that are actually needed. Every open port increases the attack surface of your server.
