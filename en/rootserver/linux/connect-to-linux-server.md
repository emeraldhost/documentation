---
description: Connect to a Linux Server via SSH
---

# How to Connect to Your Linux Server

You connect to a Linux Server using **SSH** (Secure Shell). This gives you access to your server's command line.

:::: tip Windows server?
If you want to connect to a Windows server instead, follow the guide [Connect to a Windows Server](../windows/connect-to-windows-server.md).
::::

## Requirements

You need the following connection details. You can find them in your **dashboard** as well as in the provisioning email of your server:

- **IP address** of your server
- **Username** (usually `root`)
- **Password**

## Establishing the connection

### Windows, macOS & Linux (terminal)

An SSH client is already built into all modern systems. On Windows open **PowerShell**, on macOS or Linux open the **Terminal**.

1. <b>Run the SSH command</b><br>
   Enter the following command and replace `YOUR_SERVER_IP` with your server's IP address:

   ```bash
   ssh root@YOUR_SERVER_IP
   ```

2. <b>Confirm the fingerprint</b><br>
   On the first connection you will be asked whether you trust the server. Confirm with `yes`.

3. <b>Enter the password</b><br>
   Enter your password and confirm with `Enter`.

   :::: tip Password
   You can find the password in your **dashboard**.
   ::::

   :::: info Note
   For security reasons nothing is displayed while typing the password — not even asterisks. Type the password blindly and confirm with `Enter`.
   ::::

### Windows (PuTTY)

Alternatively, you can use the graphical SSH client **PuTTY** on Windows.

1. <b>Download PuTTY</b><br>
   Download and install [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html).

2. <b>Establish the connection</b><br>
   Enter your server's IP address in the **Host Name (or IP address)** field and click **Open**.

3. <b>Log in</b><br>
   Enter `root` as the username, followed by your password.

   :::: tip Password
   You can find the password in your **dashboard**.
   ::::

:::: warning Warning
Change the root password after your first login to secure your server. Follow the guide [Change Root Password](../basic_configuration/change-root-password.md).
::::

## Next steps

- [Secure SSH Access](../basic_configuration/secure-ssh-access.md) — set up SSH keys and disable password login for more security.
