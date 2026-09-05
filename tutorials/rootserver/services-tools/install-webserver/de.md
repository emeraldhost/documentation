---
slug: "webserver-installieren"
language: "de"
title: "So installierst Du einen Webserver auf Deinem Linux Rootserver / vServer"
description: "Webserver auf einem Linux Rootserver / vServer unter Ubuntu oder Debian installieren - komplette Anleitung für Apache2 und Nginx Setup."
tags: []
date: "2025-05-14"
visibility: "public"
updated: "2026-03-19"
cta: "rootserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Webserver installieren"
sort: 7
related: ["rootserver/services-tools/install-minecraft-server", "rootserver/services-tools/use-screen", "rootserver/services-tools/install-phpmyadmin-apache2-und-mysql", "rootserver/services-tools/install-teamspeak-3-server"]
---

Anleitung zur Installation der Webserver Apache2 und Nginx auf einem Linux Rootserver / vServer.

## Apache2 und Nginx im Vergleich

**Apache2:**

- Klassischer Webserver, sehr weit verbreitet
- Unterstützt `.htaccess`-Dateien
- Einfache Konfiguration, ideal für Einsteiger und WordPress-Hosting
- Arbeitet prozessbasiert, was unter hoher Last zu Leistungseinbußen führen kann

**Nginx:**

- Moderner, ressourcenschonender Webserver
- Arbeitet ereignisbasiert → sehr performant unter hoher Last
- Kein `.htaccess`-Support
- Häufig als Reverse Proxy vor Apache oder anderen Diensten verwendet

## Apache2

1. **System aktualisieren**\
   Aktualisiere zunächst das System Deines Servers. Öffne dazu die Konsole und gib den folgenden Befehl ein:

   ```bash
   apt update && apt upgrade -y
   ```

2. **Apache2 installieren**\
   Installiere Apache2, indem Du folgenden Befehl in der Konsole eingibst:

   ```bash
   sudo apt install apache2
   ```

3. **Standard-Webverzeichnis**\
   Nach der Installation kannst Du dort die Dateien Deiner Website hochladen:

   ```text
   /var/www/html
   ```

4. **Website testen**\
   Öffne einen Webbrowser und navigiere zu: `http://<server-ip>`

5. **Wichtige Befehle**\
   Mit folgenden Befehlen kannst Du Apache2 verwalten:

   ```bash
   sudo systemctl status apache2     # Zeigt den Status von Apache2 an
   sudo systemctl restart apache2    # Startet Apache2 neu
   sudo systemctl enable apache2     # Aktiviert Apache2 beim Systemstart
   ```

## Nginx

1. **System aktualisieren**\
   Aktualisiere zunächst das System Deines Servers. Öffne dazu die Konsole und gib den folgenden Befehl ein:

   ```bash
   apt update && apt upgrade -y
   ```

2. **Nginx installieren**\
   Installiere Nginx, indem Du folgenden Befehl in der Konsole eingibst:

   ```bash
   sudo apt install nginx
   ```

3. **Standard-Webverzeichnis**\
   Nach der Installation kannst Du dort die Dateien Deiner Website hochladen:

   ```text
   /var/www/html
   ```

4. **Website testen**\
   Öffne einen Webbrowser und navigiere zu: `http://<server-ip>`

5. **Wichtige Befehle**\
   Mit folgenden Befehlen kannst Du Nginx verwalten:

   ```bash
   sudo systemctl status nginx     # Zeigt den Status von Nginx an
   sudo systemctl restart nginx    # Startet Nginx neu
   sudo systemctl enable nginx     # Aktiviert Nginx beim Systemstart
   ```

> [!NOTE]
> Hier findest Du eine Anleitung zur Installation eines SSL-Zertifikats: [Anleitung](/tutorials/rootserver/services-tools/install-certbot)
