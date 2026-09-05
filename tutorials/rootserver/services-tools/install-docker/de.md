---
slug: "docker-installieren"
language: "de"
title: "So installierst Du Docker auf Deinem Linux Rootserver / vServer"
description: "Docker auf einem Linux Rootserver / vServer installieren (Ubuntu/Debian)"
tags: []
date: "2023-10-15"
visibility: "public"
updated: "2026-03-19"
cta: "rootserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Docker installieren"
sort: 2
related: ["rootserver/services-tools/install-certbot", "rootserver/services-tools/install-minecraft-server", "rootserver/services-tools/use-screen", "rootserver/services-tools/install-phpmyadmin-apache2-und-mysql"]
---

Docker ermöglicht es Dir, Anwendungen in isolierten Containern auszuführen.

## Docker installieren

1. **System aktualisieren**\
   Aktualisiere zunächst die Paketlisten:

   ```bash
   sudo apt update
   ```

2. **Abhängigkeiten installieren**\
   Installiere die benötigten Pakete:

   ```bash
   sudo apt install ca-certificates curl gnupg -y
   ```

3. **GPG-Schlüssel hinzufügen**\
   Füge den offiziellen Docker GPG-Schlüssel hinzu:

   ```bash
   sudo install -m 0755 -d /etc/apt/keyrings
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
   sudo chmod a+r /etc/apt/keyrings/docker.gpg
   ```

   > [!NOTE]
   > Für Debian ersetze `ubuntu` durch `debian` in der URL.

4. **Repository hinzufügen**\
   Füge das offizielle Docker-Repository hinzu:

   ```bash
   echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   ```

5. **Docker installieren**\
   Aktualisiere die Paketlisten und installiere Docker:

   ```bash
   sudo apt update
   sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
   ```

6. **Installation prüfen**\
   Überprüfe, ob Docker korrekt installiert wurde:

   ```bash
   sudo docker run hello-world
   ```

   Wenn die Installation erfolgreich war, wird eine Bestätigungsmeldung angezeigt.

## Nützliche Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `docker ps` | Laufende Container anzeigen |
| `docker ps -a` | Alle Container anzeigen |
| `docker images` | Heruntergeladene Images anzeigen |
| `docker start <Container>` | Container starten |
| `docker stop <Container>` | Container stoppen |
| `docker rm <Container>` | Container löschen |
| `docker compose up -d` | Docker Compose starten |
| `docker compose down` | Docker Compose stoppen |

> [!TIP]
> Docker wird automatisch beim Systemstart gestartet. Du kannst den Status mit `sudo systemctl status docker` prüfen.
