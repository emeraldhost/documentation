---
description: Install a web server on a Linux VPS running Ubuntu or Debian - complete guide for Apache2 and Nginx setup.
---

# How to install a web server on your Linux VPS

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

1. <b>Update system</b><br>
   First update the system of your server. Open the console and enter the following command:

   ```bash
   apt update && apt upgrade -y
   ```

2. <b>Install Apache2</b><br>
   Install Apache2 by entering the following command in the console:

   ```bash
   sudo apt install apache2
   ```

3. <b>Default web directory</b><br>
   After installation, you can upload your website files there:

   ```
   /var/www/html
   ```

4. <b>Test website</b><br>
   Open a web browser and navigate to: `http://<server-ip>`

5. <b>Important commands</b><br>
   Use the following commands to manage Apache2:

   ```bash
   sudo systemctl status apache2     # Displays the status of Apache2
   sudo systemctl restart apache2    # Restarts Apache2
   sudo systemctl enable apache2     # Enables Apache2 at system startup
   ```

## Nginx

1. <b>Update system</b><br>
   First update the system of your server. Open the console and enter the following command:

   ```bash
   apt update && apt upgrade -y
   ```

2. <b>Install Nginx</b><br>
   Install Nginx by entering the following command in the console:

   ```bash
   sudo apt install nginx
   ```

3. <b>Default web directory</b><br>
   After installation, you can upload your website files there:

   ```
   /var/www/html
   ```

4. <b>Test website</b><br>
   Open a web browser and navigate to: `http://<server-ip>`

5. <b>Important commands</b><br>
   Use the following commands to manage Nginx:

   ```bash
   sudo systemctl status nginx     # Displays the status of Nginx
   sudo systemctl restart nginx    # Restarts Nginx
   sudo systemctl enable nginx     # Activates Nginx at system startup
   ```

:::: info
Here you can find instructions on how to install an SSL certificate: [Instructions](install-certbot.md)
::::
