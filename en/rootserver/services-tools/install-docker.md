---
description: Install Docker on a Linux VPS (Ubuntu/Debian)
---

# How to Install Docker on Your Linux VPS

Docker allows you to run applications in isolated containers.

## Install Docker

1. <b>Update system</b><br>
   First, update the package lists:

   ```bash
   sudo apt update
   ```

2. <b>Install dependencies</b><br>
   Install the required packages:

   ```bash
   sudo apt install ca-certificates curl gnupg -y
   ```

3. <b>Add GPG key</b><br>
   Add the official Docker GPG key:

   ```bash
   sudo install -m 0755 -d /etc/apt/keyrings
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
   sudo chmod a+r /etc/apt/keyrings/docker.gpg
   ```

   :::: info Note
   For Debian, replace `ubuntu` with `debian` in the URL.
   ::::

4. <b>Add repository</b><br>
   Add the official Docker repository:

   ```bash
   echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   ```

5. <b>Install Docker</b><br>
   Update the package lists and install Docker:

   ```bash
   sudo apt update
   sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
   ```

6. <b>Verify installation</b><br>
   Check if Docker was installed correctly:

   ```bash
   sudo docker run hello-world
   ```

   If the installation was successful, a confirmation message will be displayed.

## Useful commands

| Command | Description |
|---------|-------------|
| `docker ps` | Show running containers |
| `docker ps -a` | Show all containers |
| `docker images` | Show downloaded images |
| `docker start <container>` | Start a container |
| `docker stop <container>` | Stop a container |
| `docker rm <container>` | Delete a container |
| `docker compose up -d` | Start Docker Compose |
| `docker compose down` | Stop Docker Compose |

:::: tip Tip
Docker is automatically started on system boot. You can check the status with `sudo systemctl status docker`.
::::
