---
description: Install PhpMyAdmin, Apache2 and MySQL on a Linux VPS (Ubuntu/Debian)
---

# How to install PhpMyAdmin, Apache2 and MySQL on your Linux VPS

Instructions for installing PhpMyAdmin, Apache2 and MySQL on a Linux VPS.

## Install Apache2

1. <b>Update packages</b><br>
   Open a terminal window on your server and run the following command:

   ```bash
   sudo apt update && apt install apache2 -y
   ```

## Install MySQL

1. <b>Install MySQL</b><br>
   Enter the following command to start the installation of MySQL:

   ```bash
   sudo apt install mysql-server -y
   ```

2. <b>Set password</b><br>
   During the installation you will be asked to set a password for the MySQL root user. Enter a secure password and save it in a safe place.

## Install PhpMyAdmin

1. <b>Install PhpMyAdmin</b><br>
   Enter the following command to start the installation of PhpMyAdmin:

   ```bash
   sudo apt install phpmyadmin -y
   ```

2. <b>Select web server</b><br>
   During the installation you will be asked to select a web server. Select Apache2 and press the Enter key.

3. <b>Set admin password</b><br>
   During the installation you will be asked to set a password for the PhpMyAdmin administrator account. Enter a secure password and save it in a safe place.

4. <b>Test installation</b><br>
   When you are finished, open your web browser and enter the address `http://<server-ip>/phpmyadmin/`. You should be prompted to log in with your PhpMyAdmin administrator account.

## Configure PhpMyAdmin

1. <b>Open configuration</b><br>
   Open the file `config.inc.php`, which is located in the directory `/etc/phpmyadmin/`:

   ```bash
   nano /etc/phpmyadmin/config.inc.php
   ```

2. <b>Change Blowfish Secret</b><br>
   Change the line `$cfg['blowfish_secret']` to a random string that is at least 32 characters long.

:::: info
Save the input with **Ctrl + O** and close the window with **Ctrl + X**.
::::
