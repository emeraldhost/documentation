---
description: Schritt-für-Schritt Anleitung zur Installation von Certbot auf einem Rootserver mit Apache2 oder Nginx - sichere deine Website mit SSL-Zertifikaten unter Ubuntu/Debian.
---

# Certbot installieren

Anleitung zur Installation von Certbot für Apache2 und Nginx auf einem Rootserver.

Mit <b>Certbot</b> kannst du kostenlose TLS/SSL-Zertifikate von Let's Encrypt einrichten.

## Certbot via Snap (empfohlen)

1. <b>System aktualisieren</b><br>

    Aktualisiere zunächst das System deines Rootservers. Öffne dazu die Konsole und gib den folgenden Befehl ein:

    ```
    apt update && apt upgrade -y
    ```

2. <b>Snap installieren</b><br>

    Installiere Snap, indem du folgende Befehle in der Konsole eingibst:

    ```
    sudo apt install snapd
    sudo snap install core
    sudo snap refresh core
    ```

3. <b>Certbot installieren</b><br>

    ```
    sudo snap install --classic certbot
    ```

4. <b>Certbot-Befehl verfügbar machen</b><br>

    ```
    sudo ln -s /snap/bin/certbot /usr/bin/certbot
    ```

5. <b>Certbot verwenden</b><br>

    - <b>Für Apache2:</b>

    ```
    sudo certbot --apache
    ```

    - <b>Für Nginx:</b>

    ```
    sudo certbot --nginx
    ```

6. <b>Zertifikate überprüfen</b><br>

    - Zertifikate findest du unter:

    ```
    /etc/letsencrypt/live/<deine-domain>/
    ```

    - Status anzeigen:

    ```
    sudo certbot certificates
    ```

7. <b>Automatische Verlängerung prüfen</b><br>

    Certbot erstellt automatisch einen Cronjob. Mit folgendem Befehl kannst du testen, ob die automatische Verlängerung richtig funktioniert:

    ```
    sudo certbot renew --dry-run
    ```

## Certbot via APT

:::: warning :warning: Hinweis
Diese Methode installiert oft veraltete Versionen. Verwende sie nur, wenn Snap nicht möglich ist.
::::

1. <b>System aktualisieren</b><br>

    Aktualisiere zunächst das System deines Rootservers. Öffne dazu die Konsole und gib den folgenden Befehl ein:

    ```
    apt update && apt upgrade -y
    ```

2. <b>Certbot installieren</b><br>

    - Für Apache2:

    ```
    sudo apt install certbot python3-certbot-apache
    ```

    - Für Nginx:

    ```
    sudo apt install certbot python3-certbot-nginx
    ```

3. <b>Certbot verwenden</b><br>

    - Für Apache2:

    ```
    sudo certbot --apache
    ```

    - Für Nginx:

    ```
    sudo certbot --nginx
    ```

4. <b>Zertifikate überprüfen</b><br>

    - Zertifikate findest du unter:

    ```
    /etc/letsencrypt/live/<deine-domain>/
    ```

    - Status anzeigen:

    ```
    sudo certbot certificates
    ```

5. <b>Automatische Verlängerung prüfen</b><br>

    Certbot erstellt automatisch einen Cronjob. Mit folgendem Befehl kannst du testen, ob die automatische Verlängerung richtig funktioniert:

    ```
    sudo certbot renew --dry-run
    ```

:::: info :information_source: Wichtig
Die Domain muss auf den Server zeigen (A- oder AAAA-Eintrag), und Port 80 (HTTP-Challenge) muss erreichbar sein - sonst schlägt die Validierung fehl.
::::
