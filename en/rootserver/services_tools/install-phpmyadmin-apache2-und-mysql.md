---
description: Install PhpMyAdmin, Apache2 and MySQL on a root server (Ubuntu/Debian)
---

## PhpMyAdmin, Apache2 and MySQL

## Install Apache2:&#x20;

1. open a terminal window on your server &#x20;
2. enter the following command to start the installation of Apache2:&#x20;

    ```
    sudo apt update && apt install apache2 -y
    ```

## Install MySQL:&#x20;

1. enter the following command to start the installation of MySQL:

    ```
    sudo apt install mysql-server -y
    ```

2. during the installation you will be asked to set a password for the MySQL root user. Enter a secure password and save it in a safe place.

## Install PhpMyAdmin:&#x20;

1. enter the following command to start the installation of PhpMyAdmin:&#x20;

    ```
    sudo apt install phpmyadmin -y
    ```

2. during the installation you will be asked to select a web server. Select Apache2 and press the Enter key &#x20;
3. during the installation you will be asked to set a password for the PhpMyAdmin administrator account. Enter a secure password and save it in a safe place&#x20;
4. when you are finished, open your web browser and enter the address "<http://Server-Adresse/phpmyadmin/>". You should be prompted to log in with your PhpMyAdmin administrator account.

## Configure PhpMyAdmin:&#x20;

1. open the file "config.inc.php", which is located in the directory "/etc/phpmyadmin/" &#x20;

    ```
    nano /etc/phpmyadmin/config.inc.php
    ```

2. change the line "$cfg\['blowfish\_secret']" to a random string that is at least 32 characters long. c. Save the changes and close the file.

:::info
Now save the input with **CTRL + O** and close the window with **CTRL + X**
:::
