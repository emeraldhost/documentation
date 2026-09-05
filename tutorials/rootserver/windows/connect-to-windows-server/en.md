---
slug: "connect-to-windows-server"
language: "en"
title: "How to Connect to Your Windows Server"
description: "Connect to a Windows Server via Remote Desktop (RDP)"
tags: []
date: "2026-06-14"
visibility: "public"
cta: "rootserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Connect to Windows Server"
sort: 1
related: ["rootserver/windows/windows-hard-drive-expand", "rootserver/windows/open-windows-firewall-ports"]
---

You connect to a Windows Server using **Remote Desktop (RDP)**. This gives you a graphical interface of your server – just as if you were sitting right in front of it.

> [!TIP]
> **Linux server?**
>
> If you want to connect to a Linux server instead, follow the guide [Connect to a Linux Server](/tutorials/rootserver/linux/connect-to-linux-server).

## Requirements

You need the following connection details. You can find them in your **dashboard** as well as in the provisioning email of your server:

- **IP address** of your server
- **Username** (usually `Administrator`)
- **Password**

## Establishing the connection

### Windows

1. **Open Remote Desktop Connection**\
   Search for **Remote Desktop Connection** in the Windows Start menu and open it.

   > [!TIP]
   > **Alternative**
   >
   > You can instead press `Windows + R`, type `mstsc` and confirm with `Enter`.

2. **Enter the IP address**\
   Enter your server's IP address in the **Computer** field and click **Connect**.

3. **Log in**\
   Enter the username (`Administrator`) and the password.

   > [!TIP]
   > **Password**
   >
   > You can find the password in your **dashboard**.

4. **Confirm the certificate**\
   On the first connection a certificate warning appears. Confirm it with **Yes** to establish the connection.

### macOS

1. **Install the Windows App**\
   Install the **Windows App** (formerly *Microsoft Remote Desktop*) from the App Store.

2. **Add a PC**\
   Open the app, click **+** and select **Add PC**. Enter your server's IP address.

3. **Log in**\
   Double-click the entry and log in with the username (`Administrator`) and password.

   > [!TIP]
   > **Password**
   >
   > You can find the password in your **dashboard**.

### Linux

1. **Install an RDP client**\
   Install an RDP client such as **Remmina** (`sudo apt install remmina`).

2. **Create a connection**\
   Open Remmina, select **RDP** as the protocol and enter your server's IP address.

3. **Log in**\
   Connect and log in with the username (`Administrator`) and password.

   > [!TIP]
   > **Password**
   >
   > You can find the password in your **dashboard**.

> [!WARNING]
> Change the administrator password after your first login to secure your server. Use a long, unique password.

## Next steps

- [Expand Windows Hard Drive](/tutorials/rootserver/windows/windows-hard-drive-expand) – if not all storage space is assigned to the `C:` partition.
