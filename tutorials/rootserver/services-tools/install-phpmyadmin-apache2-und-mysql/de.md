---
slug: "phpmyadmin-apache2-und-mysql"
language: "de"
title: "So installierst Du PhpMyAdmin, Apache2 und MySQL auf Deinem Linux Rootserver / vServer"
description: "PhpMyAdmin, Apache2 und MySQL auf einem Linux Rootserver / vServer installieren (Ubuntu/Debian)"
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
short_title: "phpMyAdmin, Apache2 und MySQL installieren"
sort: 5
related: ["rootserver/services-tools/install-minecraft-server", "rootserver/services-tools/use-screen", "rootserver/services-tools/install-teamspeak-3-server", "rootserver/services-tools/install-webserver"]
---

Anleitung zur Installation von PhpMyAdmin, Apache2 und MySQL auf einem Linux Rootserver / vServer.

## Apache2 installieren

1. **Paketlisten aktualisieren**\
   Öffne ein Terminalfenster auf Deinem Server und führe folgenden Befehl aus:

   ```bash
   sudo apt update && apt install apache2 -y
   ```

## MySQL installieren

1. **MySQL installieren**\
   Gib den folgenden Befehl ein, um die Installation von MySQL zu starten:

   ```bash
   sudo apt install mysql-server -y
   ```

2. **Passwort festlegen**\
   Während der Installation wirst Du aufgefordert, ein Passwort für den MySQL-Root-Benutzer festzulegen. Gib ein sicheres Passwort ein und speichere es an einem sicheren Ort.

## PhpMyAdmin installieren

1. **PhpMyAdmin installieren**\
   Gib den folgenden Befehl ein, um die Installation von PhpMyAdmin zu starten:

   ```bash
   sudo apt install phpmyadmin -y
   ```

2. **Webserver auswählen**\
   Während der Installation wirst Du aufgefordert, einen Webserver auszuwählen. Wähle Apache2 aus und drücke die Enter-Taste.

3. **Admin-Passwort festlegen**\
   Während der Installation wirst Du aufgefordert, ein Passwort für das PhpMyAdmin-Administratorkonto festzulegen. Gib ein sicheres Passwort ein und speichere es an einem sicheren Ort.

4. **Installation testen**\
   Wenn Du fertig bist, öffne Deinen Webbrowser und gib die Adresse `http://<server-ip>/phpmyadmin/` ein. Du solltest aufgefordert werden, Dich mit Deinem PhpMyAdmin-Administratorkonto anzumelden.

## PhpMyAdmin konfigurieren

1. **Konfiguration öffnen**\
   Öffne die Datei `config.inc.php`, die sich im Verzeichnis `/etc/phpmyadmin/` befindet:

   ```bash
   nano /etc/phpmyadmin/config.inc.php
   ```

2. **Blowfish Secret ändern**\
   Ändere die Zeile `$cfg['blowfish_secret']` in eine zufällige Zeichenfolge, die mindestens 32 Zeichen lang ist.

> [!NOTE]
> Speichere die Eingabe mit **Strg + O** und schließe das Fenster mit **Strg + X**.
