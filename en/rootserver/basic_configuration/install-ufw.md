---
description: Install and configure UFW firewall on a root server (Ubuntu/Debian)
---

# Install UFW

Install and configure UFW firewall on the root server (Ubuntu/Debian)

<strong>UFW</strong> stands for <strong>Uncomplicated Firewall</strong> and is a simple frontend for <strong>iptables</strong> that significantly simplifies the administration of the server firewall.

---

1. <strong>Update system</strong>

First update the system of your root server. Open the console and enter the following command:

```
apt update && apt upgrade -y
```

2. <strong>Install UFW</strong>

Install UFW by entering the following command in the console:

```
apt install ufw
```

3. <strong>Check if the installation was successful</strong>

Check whether the installation was successful by entering the following command:

```
ufw status
```
Default setting after installation: ``` Status: inactive ```

4. set <strong>default rules</strong>

We recommend blocking all incoming connections and only enabling the required ports:

```
sudo ufw default deny incoming
sudo ufw default allow outgoing
```

5. <strong>Release SSH port (important!)</strong>

Open the default SSH port (port 22) if you need it for remote access to the server:

```
sudo ufw allow ssh
```
If your SSH port differs from the default configuration (port 22), use the correct port, e.g. 33


6. <strong>Enable other services (optional)</strong>

    - HTTP (web server):
    ```
    sudo ufw allow http
    ```

    - HTTPS (SSL)
    ```
    sudo ufw allow https
    ```

    - Minecraft (default port 25565)
    ```
    sudo ufw allow 25565
    ```

    - Teamspeak 3 (example)
    ```
    sudo ufw allow 9987 # Voice
    sudo ufw allow 10011 # Query
    sudo ufw allow 30033 # File Transfer
    ```

7. <strong>Enable UFW</strong>

Activate the firewall:

```
sudo ufw enable
```

Confirm with ``` y ``` when asked. You can then check the status:

```
sudo ufw status
```

8. <strong>Manage rules</strong>

    - Remove rules (e.g. HTTP port):
    ```
    sudo ufw delete allow http
    ```

    - Show all rules:
    ```
    sudo ufw status numbered
    ```

    - Disable UFW (if necessary)
    ```
    sudo ufw disable
    ```