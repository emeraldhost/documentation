---
slug: "install-phpmyadmin-apache2-und-mysql"
language: "en"
title: "How to install PhpMyAdmin, Apache2 and MySQL on your Linux VPS"
description: "Install PhpMyAdmin, Apache2 and MySQL on a Linux VPS (Ubuntu/Debian)"
tags: []
date: "2023-10-15"
visibility: "public"
updated: "2026-03-19"
cta: "rootserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Install phpMyAdmin, Apache2 und MySQL"
sort: 5
related: ["rootserver/services-tools/install-minecraft-server", "rootserver/services-tools/use-screen", "rootserver/services-tools/install-teamspeak-3-server", "rootserver/services-tools/install-webserver"]
---

Instructions for installing PhpMyAdmin, Apache2 and MySQL on a Linux VPS.

## Install Apache2

1. **Update packages**\
   Open a terminal window on your server and run the following command:

   ```bash
   sudo apt update && apt install apache2 -y
   ```

## Install MySQL

1. **Install MySQL**\
   Enter the following command to start the installation of MySQL:

   ```bash
   sudo apt install mysql-server -y
   ```

2. **Set password**\
   During the installation you will be asked to set a password for the MySQL root user. Enter a secure password and save it in a safe place.

## Install PhpMyAdmin

1. **Install PhpMyAdmin**\
   Enter the following command to start the installation of PhpMyAdmin:

   ```bash
   sudo apt install phpmyadmin -y
   ```

2. **Select web server**\
   During the installation you will be asked to select a web server. Select Apache2 and press the Enter key.

3. **Set admin password**\
   During the installation you will be asked to set a password for the PhpMyAdmin administrator account. Enter a secure password and save it in a safe place.

4. **Test installation**\
   When you are finished, open your web browser and enter the address `http://<server-ip>/phpmyadmin/`. You should be prompted to log in with your PhpMyAdmin administrator account.

## Configure PhpMyAdmin

1. **Open configuration**\
   Open the file `config.inc.php`, which is located in the directory `/etc/phpmyadmin/`:

   ```bash
   nano /etc/phpmyadmin/config.inc.php
   ```

2. **Change Blowfish Secret**\
   Change the line `$cfg['blowfish_secret']` to a random string that is at least 32 characters long.

> [!NOTE]
> Save the input with **Ctrl + O** and close the window with **Ctrl + X**.
