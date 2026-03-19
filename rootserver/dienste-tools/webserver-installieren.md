---
description: Webserver auf einem Linux Rootserver / vServer unter Ubuntu oder Debian installieren - komplette Anleitung für Apache2 und Nginx Setup.
---

# So installierst du einen Webserver auf deinem Linux Rootserver / vServer

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

1. <b>System aktualisieren</b><br>
   Aktualisiere zunächst das System deines Servers. Öffne dazu die Konsole und gib den folgenden Befehl ein:

   ```bash
   apt update && apt upgrade -y
   ```

2. <b>Apache2 installieren</b><br>
   Installiere Apache2, indem du folgenden Befehl in der Konsole eingibst:

   ```bash
   sudo apt install apache2
   ```

3. <b>Standard-Webverzeichnis</b><br>
   Nach der Installation kannst du dort die Dateien deiner Website hochladen:

   ```
   /var/www/html
   ```

4. <b>Website testen</b><br>
   Öffne einen Webbrowser und navigiere zu: `http://<server-ip>`

5. <b>Wichtige Befehle</b><br>
   Mit folgenden Befehlen kannst du Apache2 verwalten:

   ```bash
   sudo systemctl status apache2     # Zeigt den Status von Apache2 an
   sudo systemctl restart apache2    # Startet Apache2 neu
   sudo systemctl enable apache2     # Aktiviert Apache2 beim Systemstart
   ```

## Nginx

1. <b>System aktualisieren</b><br>
   Aktualisiere zunächst das System deines Servers. Öffne dazu die Konsole und gib den folgenden Befehl ein:

   ```bash
   apt update && apt upgrade -y
   ```

2. <b>Nginx installieren</b><br>
   Installiere Nginx, indem du folgenden Befehl in der Konsole eingibst:

   ```bash
   sudo apt install nginx
   ```

3. <b>Standard-Webverzeichnis</b><br>
   Nach der Installation kannst du dort die Dateien deiner Website hochladen:

   ```
   /var/www/html
   ```

4. <b>Website testen</b><br>
   Öffne einen Webbrowser und navigiere zu: `http://<server-ip>`

5. <b>Wichtige Befehle</b><br>
   Mit folgenden Befehlen kannst du Nginx verwalten:

   ```bash
   sudo systemctl status nginx     # Zeigt den Status von Nginx an
   sudo systemctl restart nginx    # Startet Nginx neu
   sudo systemctl enable nginx     # Aktiviert Nginx beim Systemstart
   ```

:::: info
Hier findest du eine Anleitung zur Installation eines SSL-Zertifikats: [Anleitung](certbot-installieren.md)
::::
