---
slug: "install-docker"
language: "en"
title: "How to Install Docker on Your Linux VPS"
description: "Install Docker on a Linux VPS (Ubuntu/Debian)"
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
short_title: "Install Docker"
sort: 2
related: ["rootserver/services-tools/install-certbot", "rootserver/services-tools/install-minecraft-server", "rootserver/services-tools/use-screen", "rootserver/services-tools/install-phpmyadmin-apache2-und-mysql"]
---

Docker allows you to run applications in isolated containers.

## Install Docker

1. **Update system**\
   First, update the package lists:

   ```bash
   sudo apt update
   ```

2. **Install dependencies**\
   Install the required packages:

   ```bash
   sudo apt install ca-certificates curl gnupg -y
   ```

3. **Add GPG key**\
   Add the official Docker GPG key:

   ```bash
   sudo install -m 0755 -d /etc/apt/keyrings
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
   sudo chmod a+r /etc/apt/keyrings/docker.gpg
   ```

   > [!NOTE]
   > For Debian, replace `ubuntu` with `debian` in the URL.

4. **Add repository**\
   Add the official Docker repository:

   ```bash
   echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   ```

5. **Install Docker**\
   Update the package lists and install Docker:

   ```bash
   sudo apt update
   sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
   ```

6. **Verify installation**\
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

> [!TIP]
> Docker is automatically started on system boot. You can check the status with `sudo systemctl status docker`.
