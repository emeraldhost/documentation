---
description: Install Fail2Ban on a root server (Ubuntu/Debian)
---

# Secure SSH with Fail2Ban

Securing the SSH server under Linux is crucial to close potential security gaps. A proven method to improve security is to use Fail2Ban, a software that automatically blocks malicious or suspicious connections.

Here are the steps to set up Fail2Ban to secure the SSH server:

1. install Fail2Ban:
   1. open the terminal on your Linux system.
   2. run the command ```sudo apt-get install fail2ban``` to install Fail2Ban.
   3. wait until the installation is complete.
2. customize the configuration file:
   1. navigate to the directory ```/etc/fail2ban/```.
   2. open the file ```jail.conf``` or ```jail.local``` (if available) with a text editor.
   3. search for the section ```[sshd]``` and adjust the settings to your needs and add ```enabled=true``` in this section to enable Fail2Ban. For example, you can set the maximum number of attempts ```maxretry``` and the ban time ```bantime```.
   4. save the changes and close the file.
3. restart the Fail2Ban service:
   1. run the command ```sudo service fail2ban restart``` to restart the Fail2Ban service.
   2. check if the service has started successfully by checking the status with the command ```sudo service fail2ban status```.

Using Fail2Ban in conjunction with proper configuration provides an additional layer of protection against brute force attacks and other malicious activity on your SSH server.
