---
description: Connect to a Windows Server via Remote Desktop (RDP)
---

# How to Connect to Your Windows Server

You connect to a Windows Server using **Remote Desktop (RDP)**. This gives you a graphical interface of your server — just as if you were sitting right in front of it.

:::: tip Linux server?
If you want to connect to a Linux server instead, follow the guide [Connect to a Linux Server](../linux/connect-to-linux-server.md).
::::

## Requirements

You need the following connection details. You can find them in your **dashboard** as well as in the provisioning email of your server:

- **IP address** of your server
- **Username** (usually `Administrator`)
- **Password**

## Establishing the connection

### Windows

1. <b>Open Remote Desktop Connection</b><br>
   Search for **Remote Desktop Connection** in the Windows Start menu and open it.

   :::: tip Alternative
   You can instead press `Windows + R`, type `mstsc` and confirm with `Enter`.
   ::::

2. <b>Enter the IP address</b><br>
   Enter your server's IP address in the **Computer** field and click **Connect**.

3. <b>Log in</b><br>
   Enter the username (`Administrator`) and the password.

   :::: tip Password
   You can find the password in your **dashboard**.
   ::::

4. <b>Confirm the certificate</b><br>
   On the first connection a certificate warning appears. Confirm it with **Yes** to establish the connection.

### macOS

1. <b>Install the Windows App</b><br>
   Install the **Windows App** (formerly *Microsoft Remote Desktop*) from the App Store.

2. <b>Add a PC</b><br>
   Open the app, click **+** and select **Add PC**. Enter your server's IP address.

3. <b>Log in</b><br>
   Double-click the entry and log in with the username (`Administrator`) and password.

   :::: tip Password
   You can find the password in your **dashboard**.
   ::::

### Linux

1. <b>Install an RDP client</b><br>
   Install an RDP client such as **Remmina** (`sudo apt install remmina`).

2. <b>Create a connection</b><br>
   Open Remmina, select **RDP** as the protocol and enter your server's IP address.

3. <b>Log in</b><br>
   Connect and log in with the username (`Administrator`) and password.

   :::: tip Password
   You can find the password in your **dashboard**.
   ::::

:::: warning Warning
Change the administrator password after your first login to secure your server. Use a long, unique password.
::::

## Next steps

- [Expand Windows Hard Drive](windows-hard-drive-expand.md) — if not all storage space is assigned to the `C:` partition.
