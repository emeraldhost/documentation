---
description: Step-by-step guide to install Certbot on a root server with Apache2 or Nginx - secure your website with SSL certificates on Ubuntu/Debian.
---

# Install Certbot

Instructions for installing Certbot for Apache2 and Nginx on a root server.

With <strong>Certbot</strong> you can set up free TLS/SSL certificates from Let's Encrypt.

## Certbot via Snap (recommended)

1. <strong>Update system</strong>

    First update the system of your root server. Open the console and enter the following command:
    
    ```
    apt update && apt upgrade -y
    ```

2. <strong>Install Snap</strong>

    Install Snap by entering the following commands in the console:
    
    ```
    sudo apt install snapd
    sudo snap install core
    sudo snap refresh core
    ```

3. install <strong>Certbot</strong>

    ```
    sudo snap install --classic certbot
    ```

4. make <strong>Certbot command available</strong>

    ```
    sudo ln -s /snap/bin/certbot /usr/bin/certbot
    ```

5. use <strong>Certbot</strong>

    * <strong>For Apache2:</strong>

    ```
    sudo certbot --apache
    ```

    * <strong>For Nginx:</strong>

    ```
    sudo certbot --nginx
    ```

6. <strong>Check certificates</strong>

    * You can find certificates under:
    ```
    /etc/letsencrypt/live/<your-domain>/
    ```

    * Show status:
    ```
    sudo certbot certificates
    ```

7. <strong>Check automatic renewal</strong>

    Certbot automatically creates a cronjob. You can use the following command to test whether the automatic renewal works correctly:
    ```
    sudo certbot renew --dry-run
    ```

## Certbot via APT

::: warning :warning: Note
This method often installs outdated versions. Only use it if snap is not possible.
:::

1. <strong>Update system</strong>

    First update the system of your root server. Open the console and enter the following command:
    
    ```
    apt update && apt upgrade -y
    ```

2. install <strong>Certbot</strong>


    * For Apache2:

    ```
    sudo apt install certbot python3-certbot-apache
    ```

    * For Nginx:

    ```
    sudo apt install certbot python3-certbot-nginx
    ```

3. use <strong>Certbot</strong>

    * For Apache2:
    ```
    sudo certbot --apache
    ```

    * For Nginx:
    ```
    sudo certbot --nginx
    ```

4. <strong>Check certificates</strong>

    * You can find certificates under:
    ```
    /etc/letsencrypt/live/<your-domain>/
    ```

    * Show status:
    ```
    sudo certbot certificates
    ```

5. <strong>Check automatic renewal</strong>

    Certbot automatically creates a cronjob. You can use the following command to test whether the automatic renewal works correctly:
    ```
    sudo certbot renew --dry-run
    ```

::: info :information_source: Important
The domain must point to the server (A or AAAA entry), and port 80 (HTTP challenge) must be accessible - otherwise the validation will fail.
:::