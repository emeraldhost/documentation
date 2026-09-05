---
slug: "install-fail2ban"
language: "en"
title: "How to Install Fail2Ban on Your Linux VPS"
description: "Install Fail2Ban on a Linux VPS (Ubuntu/Debian)"
tags: []
date: "2023-10-15"
visibility: "public"
updated: "2026-03-16"
cta: "rootserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Install Fail2Ban"
sort: 2
related: ["rootserver/basic-configuration/change-root-password", "rootserver/basic-configuration/secure-ssh-access", "rootserver/basic-configuration/install-ufw"]
---

Fail2Ban protects your server from brute-force attacks by automatically banning IP addresses after multiple failed login attempts.

## Install Fail2Ban

1. **Update system**\
   First, update the package lists:

   ```bash
   sudo apt update
   ```

2. **Install Fail2Ban**\
   Install Fail2Ban with the following command:

   ```bash
   sudo apt install fail2ban -y
   ```

3. **Enable service**\
   Make sure Fail2Ban starts automatically on boot:

   ```bash
   sudo systemctl enable fail2ban
   ```

## Configure Fail2Ban

1. **Create configuration file**\
   Create a local configuration file so your settings are not overwritten during updates:

   ```bash
   sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
   ```

2. **Edit configuration**\
   Open the file:

   ```bash
   sudo nano /etc/fail2ban/jail.local
   ```

3. **Enable SSH protection**\
   Find the `[sshd]` section and adjust it:

   ```ini
   [sshd]
   enabled = true
   port = ssh
   maxretry = 5
   bantime = 3600
   findtime = 600
   ```

   | Setting | Description |
   |---------|-------------|
   | `enabled` | Enables SSH protection |
   | `port` | The SSH port (change this if you have modified your SSH port) |
   | `maxretry` | Maximum failed attempts before an IP is banned |
   | `bantime` | Ban duration in seconds (3600 = 1 hour) |
   | `findtime` | Time window in seconds in which failed attempts are counted |

4. **Restart Fail2Ban**\
   Save with `Ctrl + O`, close with `Ctrl + X` and restart Fail2Ban:

   ```bash
   sudo systemctl restart fail2ban
   ```

## Check status

Check if Fail2Ban is running:

```bash
sudo systemctl status fail2ban
```

Show the status of SSH protection:

```bash
sudo fail2ban-client status sshd
```

> [!TIP]
> You can unban a blocked IP address with `sudo fail2ban-client set sshd unbanip IP_ADDRESS`.
