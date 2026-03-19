---
description: Step-by-step guide to install Certbot on a Linux VPS with Apache2 or Nginx - secure your website with SSL certificates on Ubuntu/Debian.
---

# How to install Certbot on your Linux VPS

Instructions for installing Certbot for Apache2 and Nginx on a Linux VPS.

With Certbot you can set up free TLS/SSL certificates from Let's Encrypt.

## Certbot via Snap (recommended)

1. <b>Update system</b><br>
   First update the system of your server. Open the console and enter the following command:

   ```bash
   apt update && apt upgrade -y
   ```

2. <b>Install Snap</b><br>
   Install Snap by entering the following commands in the console:

   ```bash
   sudo apt install snapd
   sudo snap install core
   sudo snap refresh core
   ```

3. <b>Install Certbot</b><br>
   Install Certbot via Snap:

   ```bash
   sudo snap install --classic certbot
   ```

4. <b>Enable command</b><br>
   Make the Certbot command available system-wide:

   ```bash
   sudo ln -s /snap/bin/certbot /usr/bin/certbot
   ```

5. <b>Use Certbot</b><br>
   Run Certbot for your web server:

   - For Apache2:

   ```bash
   sudo certbot --apache
   ```

   - For Nginx:

   ```bash
   sudo certbot --nginx
   ```

6. <b>Check certificates</b><br>
   You can find certificates under:

   ```
   /etc/letsencrypt/live/<your-domain>/
   ```

   Show status:

   ```bash
   sudo certbot certificates
   ```

7. <b>Automatic renewal</b><br>
   Certbot automatically creates a cronjob. You can use the following command to test whether the automatic renewal works correctly:

   ```bash
   sudo certbot renew --dry-run
   ```

## Certbot via APT

:::: warning Note
This method often installs outdated versions. Only use it if Snap is not possible.
::::

1. <b>Update system</b><br>
   First update the system of your server. Open the console and enter the following command:

   ```bash
   apt update && apt upgrade -y
   ```

2. <b>Install Certbot</b><br>
   Install Certbot for your web server:

   - For Apache2:

   ```bash
   sudo apt install certbot python3-certbot-apache
   ```

   - For Nginx:

   ```bash
   sudo apt install certbot python3-certbot-nginx
   ```

3. <b>Use Certbot</b><br>
   Run Certbot for your web server:

   - For Apache2:

   ```bash
   sudo certbot --apache
   ```

   - For Nginx:

   ```bash
   sudo certbot --nginx
   ```

4. <b>Check certificates</b><br>
   You can find certificates under:

   ```
   /etc/letsencrypt/live/<your-domain>/
   ```

   Show status:

   ```bash
   sudo certbot certificates
   ```

5. <b>Automatic renewal</b><br>
   Certbot automatically creates a cronjob. You can use the following command to test whether the automatic renewal works correctly:

   ```bash
   sudo certbot renew --dry-run
   ```

:::: info Important
The domain must point to the server (A or AAAA entry), and port 80 (HTTP challenge) must be accessible - otherwise the validation will fail.
::::
