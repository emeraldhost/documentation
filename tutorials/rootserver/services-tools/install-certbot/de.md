---
slug: "certbot-installieren"
language: "de"
title: "So installierst Du Certbot auf Deinem Linux Rootserver / vServer"
description: "Certbot auf einem Linux Rootserver / vServer installieren (Ubuntu/Debian)"
tags: []
date: "2025-05-16"
visibility: "public"
updated: "2026-03-19"
cta: "rootserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Certbot installieren"
sort: 1
related: ["rootserver/services-tools/install-docker", "rootserver/services-tools/install-minecraft-server", "rootserver/services-tools/use-screen", "rootserver/services-tools/install-phpmyadmin-apache2-und-mysql"]
---

Anleitung zur Installation von Certbot für Apache2 und Nginx auf einem Linux Rootserver / vServer.

Mit **Certbot** kannst Du kostenlose TLS/SSL-Zertifikate von Let's Encrypt einrichten.

## Certbot via Snap (empfohlen)

1. **System aktualisieren**\
   Aktualisiere zunächst das System Deines Rootservers. Öffne dazu die Konsole und gib den folgenden Befehl ein:

    ```text
    apt update && apt upgrade -y
    ```

2. **Snap installieren**\
   Installiere Snap, indem Du folgende Befehle in der Konsole eingibst:

    ```text
    sudo apt install snapd
    sudo snap install core
    sudo snap refresh core
    ```

3. **Certbot installieren**\
   Installiere Certbot über Snap:

    ```text
    sudo snap install --classic certbot
    ```

4. **Befehl verfügbar machen**\
   Erstelle einen Symlink, damit der Certbot-Befehl systemweit verfügbar ist:

    ```text
    sudo ln -s /snap/bin/certbot /usr/bin/certbot
    ```

5. **Certbot verwenden**\
   Führe Certbot für Deinen Webserver aus:

    - **Für Apache2:**

    ```text
    sudo certbot --apache
    ```

    - **Für Nginx:**

    ```text
    sudo certbot --nginx
    ```

6. **Zertifikate überprüfen**\
   Prüfe, ob die Zertifikate korrekt erstellt wurden:

    - Zertifikate findest Du unter:

    ```text
    /etc/letsencrypt/live/<deine-domain>/
    ```

    - Status anzeigen:

    ```text
    sudo certbot certificates
    ```

7. **Verlängerung prüfen**\
   Certbot erstellt automatisch einen Cronjob. Mit folgendem Befehl kannst Du testen, ob die automatische Verlängerung richtig funktioniert:

    ```text
    sudo certbot renew --dry-run
    ```

## Certbot via APT

> [!WARNING]
> **Hinweis**
>
> Diese Methode installiert oft veraltete Versionen. Verwende sie nur, wenn Snap nicht möglich ist.

1. **System aktualisieren**\
   Aktualisiere zunächst das System Deines Rootservers. Öffne dazu die Konsole und gib den folgenden Befehl ein:

    ```text
    apt update && apt upgrade -y
    ```

2. **Certbot installieren**\
   Installiere Certbot für Deinen Webserver:

    - Für Apache2:

    ```text
    sudo apt install certbot python3-certbot-apache
    ```

    - Für Nginx:

    ```text
    sudo apt install certbot python3-certbot-nginx
    ```

3. **Certbot verwenden**\
   Führe Certbot für Deinen Webserver aus:

    - Für Apache2:

    ```text
    sudo certbot --apache
    ```

    - Für Nginx:

    ```text
    sudo certbot --nginx
    ```

4. **Zertifikate überprüfen**\
   Prüfe, ob die Zertifikate korrekt erstellt wurden:

    - Zertifikate findest Du unter:

    ```text
    /etc/letsencrypt/live/<deine-domain>/
    ```

    - Status anzeigen:

    ```text
    sudo certbot certificates
    ```

5. **Verlängerung prüfen**\
   Certbot erstellt automatisch einen Cronjob. Mit folgendem Befehl kannst Du testen, ob die automatische Verlängerung richtig funktioniert:

    ```text
    sudo certbot renew --dry-run
    ```

> [!NOTE]
> **Wichtig**
>
> Die Domain muss auf den Server zeigen (A- oder AAAA-Eintrag), und Port 80 (HTTP-Challenge) muss erreichbar sein - sonst schlägt die Validierung fehl.
