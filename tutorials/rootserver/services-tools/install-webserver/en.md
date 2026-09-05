---
slug: "install-webserver"
language: "en"
title: "How to install a web server on your Linux VPS"
description: "Install a web server on a Linux VPS running Ubuntu or Debian - complete guide for Apache2 and Nginx setup."
tags: []
date: "2025-05-14"
visibility: "public"
updated: "2026-03-19"
cta: "rootserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Install Webserver"
sort: 7
related: ["rootserver/services-tools/install-minecraft-server", "rootserver/services-tools/use-screen", "rootserver/services-tools/install-phpmyadmin-apache2-und-mysql", "rootserver/services-tools/install-teamspeak-3-server"]
---

Instructions for installing the web servers Apache2 and Nginx on a Linux VPS.

## Apache2 and Nginx in comparison

**Apache2:**

- Classic web server, very widely used
- Supports `.htaccess` files
- Simple configuration, ideal for beginners and WordPress hosting
- Works process-based, which can lead to performance losses under high load

**Nginx:**

- Modern, resource-saving web server
- Works event-based → very performant under high load
- No `.htaccess` support
- Often used as a reverse proxy in front of Apache or other services

## Apache2

1. **Update system**\
   First update the system of your server. Open the console and enter the following command:

   ```bash
   apt update && apt upgrade -y
   ```

2. **Install Apache2**\
   Install Apache2 by entering the following command in the console:

   ```bash
   sudo apt install apache2
   ```

3. **Default web directory**\
   After installation, you can upload your website files there:

   ```text
   /var/www/html
   ```

4. **Test website**\
   Open a web browser and navigate to: `http://<server-ip>`

5. **Important commands**\
   Use the following commands to manage Apache2:

   ```bash
   sudo systemctl status apache2     # Displays the status of Apache2
   sudo systemctl restart apache2    # Restarts Apache2
   sudo systemctl enable apache2     # Enables Apache2 at system startup
   ```

## Nginx

1. **Update system**\
   First update the system of your server. Open the console and enter the following command:

   ```bash
   apt update && apt upgrade -y
   ```

2. **Install Nginx**\
   Install Nginx by entering the following command in the console:

   ```bash
   sudo apt install nginx
   ```

3. **Default web directory**\
   After installation, you can upload your website files there:

   ```text
   /var/www/html
   ```

4. **Test website**\
   Open a web browser and navigate to: `http://<server-ip>`

5. **Important commands**\
   Use the following commands to manage Nginx:

   ```bash
   sudo systemctl status nginx     # Displays the status of Nginx
   sudo systemctl restart nginx    # Restarts Nginx
   sudo systemctl enable nginx     # Activates Nginx at system startup
   ```

> [!NOTE]
> Here you can find instructions on how to install an SSL certificate: [Instructions](/tutorials/rootserver/services-tools/install-certbot)
