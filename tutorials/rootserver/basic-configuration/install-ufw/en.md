---
slug: "install-ufw"
language: "en"
title: "How to Install UFW on Your Linux VPS"
description: "Install and configure UFW firewall on a Linux VPS (Ubuntu/Debian)"
tags: []
date: "2025-05-12"
visibility: "public"
updated: "2026-03-16"
cta: "rootserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Install UFW"
sort: 4
related: ["rootserver/basic-configuration/change-root-password", "rootserver/basic-configuration/install-fail2ban", "rootserver/basic-configuration/secure-ssh-access"]
---

**UFW** (Uncomplicated Firewall) is a simple frontend for **iptables** that significantly simplifies the management of your server firewall.

## Install UFW

1. **Update system**\
   First, update the package lists:

   ```bash
   sudo apt update
   ```

2. **Install UFW**\
   Install UFW with the following command:

   ```bash
   sudo apt install ufw -y
   ```

## Configure UFW

1. **Set default rules**\
   Block all incoming connections and allow all outgoing:

   ```bash
   sudo ufw default deny incoming
   sudo ufw default allow outgoing
   ```

2. **Allow SSH port**\
   Allow the SSH port so you can still connect:

   ```bash
   sudo ufw allow ssh
   ```

   > [!IMPORTANT]
   > Do **not** skip this step, otherwise you will lock yourself out of the server! If you are using a different SSH port, allow that port instead, e.g. `sudo ufw allow 2222/tcp`.

3. **Allow additional ports (optional)**\
   Allow additional ports as needed:

   ```bash
   # Web server
   sudo ufw allow http
   sudo ufw allow https

   # Minecraft (default port 25565)
   sudo ufw allow 25565

   # TeamSpeak 3
   sudo ufw allow 9987/udp    # Voice
   sudo ufw allow 10011/tcp   # Query
   sudo ufw allow 30033/tcp   # File Transfer
   ```

4. **Enable UFW**\
   Activate the firewall:

   ```bash
   sudo ufw enable
   ```

   Confirm with `y` when prompted.

5. **Check status**\
   Verify that UFW is running correctly and which rules are active:

   ```bash
   sudo ufw status
   ```

## Manage rules

Show all rules with numbers:

```bash
sudo ufw status numbered
```

Remove a rule (e.g. HTTP):

```bash
sudo ufw delete allow http
```

Block a specific port:

```bash
sudo ufw deny 8080
```

Disable UFW:

```bash
sudo ufw disable
```

> [!TIP]
> For additional protection against brute-force attacks, also set up [Fail2Ban](/tutorials/rootserver/basic-configuration/install-fail2ban).
