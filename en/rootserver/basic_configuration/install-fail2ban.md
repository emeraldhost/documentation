---
description: Install Fail2Ban on a Linux VPS (Ubuntu/Debian)
---

# How to Install Fail2Ban on Your Linux VPS

Fail2Ban protects your server from brute-force attacks by automatically banning IP addresses after multiple failed login attempts.

## Install Fail2Ban

1. <b>Update system</b><br>
   First, update the package lists:

   ```bash
   sudo apt update
   ```

2. <b>Install Fail2Ban</b><br>
   Install Fail2Ban with the following command:

   ```bash
   sudo apt install fail2ban -y
   ```

3. <b>Enable service</b><br>
   Make sure Fail2Ban starts automatically on boot:

   ```bash
   sudo systemctl enable fail2ban
   ```

## Configure Fail2Ban

1. <b>Create configuration file</b><br>
   Create a local configuration file so your settings are not overwritten during updates:

   ```bash
   sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
   ```

2. <b>Edit configuration</b><br>
   Open the file:

   ```bash
   sudo nano /etc/fail2ban/jail.local
   ```

3. <b>Enable SSH protection</b><br>
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

4. <b>Restart Fail2Ban</b><br>
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

:::: tip Tip
You can unban a blocked IP address with `sudo fail2ban-client set sshd unbanip IP_ADDRESS`.
::::
