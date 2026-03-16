---
description: Install and configure UFW firewall on a Linux VPS (Ubuntu/Debian)
---

# How to Install UFW on Your Linux VPS

**UFW** (Uncomplicated Firewall) is a simple frontend for **iptables** that significantly simplifies the management of your server firewall.

## Install UFW

1. <b>Update system</b><br>
   First, update the package lists:

   ```bash
   sudo apt update
   ```

2. <b>Install UFW</b><br>
   Install UFW with the following command:

   ```bash
   sudo apt install ufw -y
   ```

## Configure UFW

1. <b>Set default rules</b><br>
   Block all incoming connections and allow all outgoing:

   ```bash
   sudo ufw default deny incoming
   sudo ufw default allow outgoing
   ```

2. <b>Allow SSH port</b><br>
   Allow the SSH port so you can still connect:

   ```bash
   sudo ufw allow ssh
   ```

   :::: danger Important
   Do **not** skip this step, otherwise you will lock yourself out of the server! If you are using a different SSH port, allow that port instead, e.g. `sudo ufw allow 2222/tcp`.
   ::::

3. <b>Allow additional ports (optional)</b><br>
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

4. <b>Enable UFW</b><br>
   Activate the firewall:

   ```bash
   sudo ufw enable
   ```

   Confirm with `y` when prompted.

5. <b>Check status</b><br>
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

:::: tip Tip
For additional protection against brute-force attacks, also set up [Fail2Ban](install-fail2ban.md).
::::
