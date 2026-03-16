---
description: Secure SSH access on a Linux VPS with SSH keys, disable root login and change SSH port
---

# How to Secure SSH Access on Your Linux VPS

This guide shows you how to protect your VPS from attackers by setting up SSH keys, disabling root login and changing the SSH port.

:::: warning Warning
Follow the steps in order. If you disable password authentication before adding your SSH key, you will lock yourself out of the server.
::::

## 1. Create SSH key

First, create an SSH key pair on your **local PC**.

### Windows (PowerShell)

```powershell
ssh-keygen -t ed25519
```

### Linux / macOS (Terminal)

```bash
ssh-keygen -t ed25519
```

Confirm the default path with `Enter` and optionally set a passphrase for additional protection.

Two files are created:
- `~/.ssh/id_ed25519` — your **private key** (never share this!)
- `~/.ssh/id_ed25519.pub` — your **public key** (this goes on the server)

## 2. Upload public key to the server

### Linux / macOS

```bash
ssh-copy-id root@YOUR_SERVER_IP
```

### Windows (PowerShell)

```powershell
type $env:USERPROFILE\.ssh\id_ed25519.pub | ssh root@YOUR_SERVER_IP "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

:::: tip Test
Test the connection before continuing:

```bash
ssh root@YOUR_SERVER_IP
```

You should be able to log in **without entering a password**.
::::

## 3. Create a new user (optional)

:::: info Note
This step is optional. If you do not want to create a separate user, you can skip this step and continue working as root.
::::

Optionally, you can create a separate user instead of logging in as root.

```bash
adduser myuser
```

Grant the user sudo rights:

```bash
usermod -aG sudo myuser
```

Copy the SSH key to the new user:

```bash
mkdir -p /home/myuser/.ssh
cp ~/.ssh/authorized_keys /home/myuser/.ssh/authorized_keys
chown -R myuser:myuser /home/myuser/.ssh
chmod 700 /home/myuser/.ssh
chmod 600 /home/myuser/.ssh/authorized_keys
```

:::: tip Test
Test the login with the new user before continuing:

```bash
ssh myuser@YOUR_SERVER_IP
```
::::

## 4. Disable root login and password authentication

Open the SSH configuration:

```bash
sudo nano /etc/ssh/sshd_config
```

Find and change the following line:

```
PasswordAuthentication no
```

If you created a separate user in step 3, you can also disable root login:

```
PermitRootLogin no
```

:::: danger Important
Make sure your SSH key is working and you can log in via SSH key **before** you make these changes. Otherwise you will lock yourself out!
::::

Save with `Ctrl + O`, close with `Ctrl + X` and restart the SSH service:

```bash
sudo systemctl restart sshd
```

## 5. Change SSH port

By default SSH runs on port **22**. Changing this reduces automated brute-force attacks.

Open the SSH configuration:

```bash
sudo nano /etc/ssh/sshd_config
```

Find the line `#Port 22` and change it to:

```
Port 2222
```

:::: info Note
Choose a port between **1024** and **65535** that is not already in use. In this example we use **2222**.
::::

If you are using UFW, allow the new port before restarting:

```bash
sudo ufw allow 2222/tcp
```

Restart the SSH service:

```bash
sudo systemctl restart sshd
```

From now on, connect with:

```bash
ssh -p 2222 root@YOUR_SERVER_IP
```

:::: danger Important
Do **not** close your current SSH session until you have successfully connected in a new terminal using the new port!
::::

## Summary

| Measure | Effect |
|---------|--------|
| SSH key | Secure authentication without passwords |
| New user | No direct root access |
| Disable root login | Blocks root login attempts |
| Disable password auth | Prevents brute-force attacks |
| Change SSH port | Reduces automated attacks |

:::: tip Further security
For additional protection, also set up [Fail2Ban](../basic_configuration/install-fail2ban.md) and [UFW](../basic_configuration/install-ufw.md).
::::
