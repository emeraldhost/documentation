---
description: Open ports in the Windows Firewall on a Windows Server
---

# How to Open the Windows Firewall on Your Windows Server

For services such as game or web servers to be reachable from the outside, you have to open the required **ports** in the Windows Firewall. This guide shows you both ways — via the graphical interface and via PowerShell.

:::: info Note
You first need to be [connected to your Windows Server](connect-to-windows-server.md) to perform the following steps.
::::

## Via the graphical interface

1. <b>Open the firewall</b><br>
   Press `Windows + R`, type `wf.msc` and confirm with `Enter`. The **Windows Defender Firewall with Advanced Security** opens.

2. <b>Create a new inbound rule</b><br>
   Click **Inbound Rules** on the left and then **New Rule…** on the right.

3. <b>Choose the rule type</b><br>
   Select **Port** and click **Next**.

4. <b>Specify protocol and port</b><br>
   Select **TCP** or **UDP** and enter the desired port under **Specific local ports** (e.g. `25565`). Click **Next**.

   :::: tip Tip
   Separate multiple ports with commas (`25565,25566`), ranges with a hyphen (`27015-27020`). If your service needs both TCP and UDP, create a separate rule for each protocol.
   ::::

5. <b>Allow the connection</b><br>
   Select **Allow the connection** and click **Next**.

6. <b>Select the profiles</b><br>
   Leave all profiles (**Domain**, **Private**, **Public**) enabled and click **Next**.

7. <b>Name the rule</b><br>
   Give it a meaningful name (e.g. `Minecraft Server`) and click **Finish**.

## Via PowerShell

Alternatively, you can open a port directly via PowerShell — which is often faster.

1. <b>Open PowerShell as administrator</b><br>
   Right-click the Start menu and select **Windows PowerShell (Admin)** or **Terminal (Admin)**.

2. <b>Create the rule</b><br>
   Run the following command and adjust the name, port and protocol:

   ```powershell
   New-NetFirewallRule -DisplayName "Minecraft Server" -Direction Inbound -LocalPort 25565 -Protocol TCP -Action Allow
   ```

   For a UDP port, replace `TCP` with `UDP`.

:::: warning Warning
Only open ports that are actually needed. Every open port increases the attack surface of your server.
::::
