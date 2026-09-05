---
slug: "install-certbot"
language: "en"
title: "How to install Certbot on your Linux VPS"
description: "Step-by-step guide to install Certbot on a Linux VPS with Apache2 or Nginx - secure your website with SSL certificates on Ubuntu/Debian."
tags: []
date: "2025-05-16"
visibility: "public"
updated: "2026-03-19"
cta: "rootserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Install Certbot"
sort: 1
related: ["rootserver/services-tools/install-docker", "rootserver/services-tools/install-minecraft-server", "rootserver/services-tools/use-screen", "rootserver/services-tools/install-phpmyadmin-apache2-und-mysql"]
---

Instructions for installing Certbot for Apache2 and Nginx on a Linux VPS.

With Certbot you can set up free TLS/SSL certificates from Let's Encrypt.

## Certbot via Snap (recommended)

1. **Update system**\
   First update the system of your server. Open the console and enter the following command:

   ```bash
   apt update && apt upgrade -y
   ```

2. **Install Snap**\
   Install Snap by entering the following commands in the console:

   ```bash
   sudo apt install snapd
   sudo snap install core
   sudo snap refresh core
   ```

3. **Install Certbot**\
   Install Certbot via Snap:

   ```bash
   sudo snap install --classic certbot
   ```

4. **Enable command**\
   Make the Certbot command available system-wide:

   ```bash
   sudo ln -s /snap/bin/certbot /usr/bin/certbot
   ```

5. **Use Certbot**\
   Run Certbot for your web server:

   - For Apache2:

   ```bash
   sudo certbot --apache
   ```

   - For Nginx:

   ```bash
   sudo certbot --nginx
   ```

6. **Check certificates**\
   You can find certificates under:

   ```text
   /etc/letsencrypt/live/<your-domain>/
   ```

   Show status:

   ```bash
   sudo certbot certificates
   ```

7. **Automatic renewal**\
   Certbot automatically creates a cronjob. You can use the following command to test whether the automatic renewal works correctly:

   ```bash
   sudo certbot renew --dry-run
   ```

## Certbot via APT

> [!WARNING]
> **Note**
>
> This method often installs outdated versions. Only use it if Snap is not possible.

1. **Update system**\
   First update the system of your server. Open the console and enter the following command:

   ```bash
   apt update && apt upgrade -y
   ```

2. **Install Certbot**\
   Install Certbot for your web server:

   - For Apache2:

   ```bash
   sudo apt install certbot python3-certbot-apache
   ```

   - For Nginx:

   ```bash
   sudo apt install certbot python3-certbot-nginx
   ```

3. **Use Certbot**\
   Run Certbot for your web server:

   - For Apache2:

   ```bash
   sudo certbot --apache
   ```

   - For Nginx:

   ```bash
   sudo certbot --nginx
   ```

4. **Check certificates**\
   You can find certificates under:

   ```text
   /etc/letsencrypt/live/<your-domain>/
   ```

   Show status:

   ```bash
   sudo certbot certificates
   ```

5. **Automatic renewal**\
   Certbot automatically creates a cronjob. You can use the following command to test whether the automatic renewal works correctly:

   ```bash
   sudo certbot renew --dry-run
   ```

> [!NOTE]
> **Important**
>
> The domain must point to the server (A or AAAA entry), and port 80 (HTTP challenge) must be accessible - otherwise the validation will fail.
