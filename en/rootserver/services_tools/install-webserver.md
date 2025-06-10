---
description: Install web server on a root server under Ubuntu or Debian - complete guide for Apache2 and Nginx setup on root servers.
---

# Install web server

Instructions for installing the web servers Apache2 and Nginx on a root server.

## Apache2 and Nginx in comparison

<strong>Apache2:</strong>

- Classic web server, very widely used
- Supports ``` .htaccess ``` files
- Simple configuration, ideal for beginners and WordPress hosting
- Works process-based, which can lead to performance losses under high load

<strong>Nginx:</strong>

- Modern, resource-saving web server
- Works event-based → very performant under high load
- No ``` .htaccess ``` support
- Often used as a reverse proxy in front of Apache or other services

## Apache2

1. <strong>Update system</strong>

    First update the system of your root server. Open the console and enter the following command:

    ```
    apt update && apt upgrade -y
    ```

2. <strong>Install Apache2</strong>

    Install Apache2 by entering the following command in the console:

    ```
    sudo apt install apache2
    ```

3. <strong>Default web directory</strong>

    After installation, you can upload your website files there:

    ```
    /var/www/html
    ```

4. <strong>Check whether the website is accessible</strong>

    Open a web browser and navigate to: ``` http://<server-ip> ```

5. <strong>Important commands</strong>

    ```
    sudo systemctl status apache2     # Displays the status of Apache2
    sudo systemctl restart apache2     # Restarts Apache2
    sudo systemctl enable apache2     # Enables Apache2 at system startup
    ```

## Nginx

1. <strong>Update system</strong>

    First update the system of your root server. Open the console and enter the following command:

    ```
    apt update && apt upgrade -y
    ```

2. <strong>Install Nginx</strong>

    Install Nginx by entering the following command in the console:

    ```
    sudo apt install nginx
    ```

3. <strong>Default web directory</strong>

    After installation, you can upload your website files there:

    ```
    /var/www/html
    ```

4. <strong>Check whether the website is accessible</strong>

    Open a web browser and navigate to: ``` http://<server-ip> ```

5. <strong>Important commands</strong>

    ```
    sudo systemctl status nginx     # Displays the status of Nginx
    sudo systemctl restart nginx     # Restarts Nginx
    sudo systemctl enable nginx     # Activates Nginx at system startup
    ```

::: info
Here you can find instructions on how to install an SSL certificate: [Instructions](install-certbot.md)
:::
