---
slug: "connect-to-linux-server"
language: "en"
title: "How to Connect to Your Linux Server"
description: "Connect to a Linux Server via SSH"
tags: []
date: "2026-06-14"
visibility: "public"
cta: "rootserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Connect to Linux Server"
sort: 1
---

You connect to a Linux Server using **SSH** (Secure Shell). This gives you access to your server's command line.

> [!TIP]
> **Windows server?**
>
> If you want to connect to a Windows server instead, follow the guide [Connect to a Windows Server](/tutorials/rootserver/windows/connect-to-windows-server).

## Requirements

You need the following connection details. You can find them in your **dashboard** as well as in the provisioning email of your server:

- **IP address** of your server
- **Username** (usually `root`)
- **Password**

## Establishing the connection

### Windows, macOS & Linux (terminal)

An SSH client is already built into all modern systems. On Windows open **PowerShell**, on macOS or Linux open the **Terminal**.

1. **Run the SSH command**\
   Enter the following command and replace `YOUR_SERVER_IP` with your server's IP address:

   ```bash
   ssh root@YOUR_SERVER_IP
   ```

2. **Confirm the fingerprint**\
   On the first connection you will be asked whether you trust the server. Confirm with `yes`.

3. **Enter the password**\
   Enter your password and confirm with `Enter`.

   > [!TIP]
   > **Password**
   >
   > You can find the password in your **dashboard**.

   > [!NOTE]
   > For security reasons nothing is displayed while typing the password – not even asterisks. Type the password blindly and confirm with `Enter`.

### Windows (PuTTY)

Alternatively, you can use the graphical SSH client **PuTTY** on Windows.

1. **Download PuTTY**\
   Download and install [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html).

2. **Establish the connection**\
   Enter your server's IP address in the **Host Name (or IP address)** field and click **Open**.

3. **Log in**\
   Enter `root` as the username, followed by your password.

   > [!TIP]
   > **Password**
   >
   > You can find the password in your **dashboard**.

> [!WARNING]
> Change the root password after your first login to secure your server. Follow the guide [Change Root Password](/tutorials/rootserver/basic-configuration/change-root-password).

## Next steps

- [Secure SSH Access](/tutorials/rootserver/basic-configuration/secure-ssh-access) – set up SSH keys and disable password login for more security.
