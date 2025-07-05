---
description: Webserver auf einem Rootserver unter Ubuntu oder Debian installieren - komplette Anleitung für Apache2 und Nginx Setup auf Rootservern.
---

# Webserver installieren

Anleitung zur Installation der Webserver Apache2 und Nginx auf einem Rootserver.

## Apache2 und Nginx im vergleich

<strong>Apache2:</strong>

- Klassischer Webserver, sehr weit verbreitet
- Unterstützt `.htaccess`-Dateien
- Einfache Konfiguration, ideal für Einsteiger und WordPress-Hosting
- Arbeitet prozessbasiert, was unter hoher Last zu Leistungseinbußen führen kann

<strong>Nginx:</strong>

- Moderner, ressourcenschonender Webserver
- Arbeitet ereignisbasiert → sehr performant unter hoher Last
- Kein `.htaccess`-Support
- Häufig als Reverse Proxy vor Apache oder anderen Diensten verwendet

## Apache2

1. <strong>System aktualisieren</strong>

    Aktualisiere zunächst das System deines Rootservers. Öffne dazu die Konsole und gib den folgenden Befehl ein:

    ```
    apt update && apt upgrade -y
    ```

2. <strong>Apache2 installieren</strong>

    Installiere Apache2, indem du folgenden Befehl in der Konsole eingibst:

    ```
    sudo apt install apache2
    ```

3. <strong>Standard-Webverzeichnis</strong>

    Nach der Installation kannst du dort die Dateien deiner Website hochladen:

    ```
    /var/www/html
    ```

4. <strong>Überprüfen, ob die Website erreichbar ist</strong>

    Öffne einen Webbrowser und navigiere zu: ``` http://<server-ip> ```

5. <strong>Wichtige Befehle</strong>

    ```
    sudo systemctl status apache2     # Zeigt den Status von Apache2 an
    sudo systemctl restart apache2     # Startet Apache2 neu
    sudo systemctl enable apache2     # Aktiviert Apache2 beim Systemstart
    ```

## Nginx

1. <strong>System aktualisieren</strong>

    Aktualisiere zunächst das System deines Rootservers. Öffne dazu die Konsole und gib den folgenden Befehl ein:

    ```
    apt update && apt upgrade -y
    ```

2. <strong>Nginx installieren</strong>

    Installiere Nginx, indem du folgenden Befehl in der Konsole eingibst:

    ```
    sudo apt install nginx
    ```

3. <strong>Standard-Webverzeichnis</strong>

    Nach der Installation kannst du dort die Dateien deiner Website hochladen:

    ```
    /var/www/html
    ```

4. <strong>Überprüfen, ob die Website erreichbar ist</strong>

    Öffne einen Webbrowser und navigiere zu: ``` http://<server-ip> ```

5. <strong>Wichtige Befehle</strong>

    ```
    sudo systemctl status nginx     # Zeigt den Status von Nginx an
    sudo systemctl restart nginx     # Startet Nginx neu
    sudo systemctl enable nginx     # Aktiviert Nginx beim Systemstart
    ```

::: info
Hier findest du eine Anleitung zur Installation eines SSL-Zertifikats: [Anleitung](certbot-installieren.md)
:::
