---
description: Schritt-für-Schritt Anleitung zur Installation von Certbot auf einem Rootserver mit Apache2 oder Nginx – sichere deine Website mit SSL-Zertifikaten unter Ubuntu/Debian.
---

# Certbot installieren

Anleitung zur Installation von Certbot für Apache2 und Nginx auf einem Rootserver.

Mit <strong>Certbot</strong> kannst du kostenlose TLS/SSL-Zertifikate von Let's Encrypt einrichten.

## Certbot via Snap (empfohlen)

1. <strong>System aktualisieren</strong>

    Aktualisiere zunächst das System deines Rootservers. Öffne dazu die Konsole und gib den folgenden Befehl ein:
    
    ```
    apt update && apt upgrade -y
    ```

2. <strong>Snap installieren</strong>

    Installiere Snap, indem du folgende Befehle in der Konsole eingibst:
    
    ```
    sudo apt install snapd
    sudo snap install core
    sudo snap refresh core
    ```

3. <strong>Certbot installieren</strong>

    ```
    sudo snap install --classic certbot
    ```

4. <strong>Certbot-Befehl verfügbar machen</strong>

    ```
    sudo ln -s /snap/bin/certbot /usr/bin/certbot
    ```

5. <strong>Certbot verwenden</strong>

    * <strong>Für Apache2:</strong>
    
    ```
    sudo certbot --apache
    ```

    * <strong>Für Nginx:</strong>
    
    ```
    sudo certbot --nginx
    ```

6. <strong>Zertifikate überprüfen</strong>

    * Zertifikate findest du unter:
    ```
    /etc/letsencrypt/live/<deine-domain>/
    ```

    * Status anzeigen:
    ```
    sudo certbot certificates
    ```

7. <strong>Automatische Verlängerung prüfen</strong>

    Certbot erstellt automatisch einen Cronjob. Mit folgendem Befehl kannst du testen, ob die automatische Verlängerung richtig funktioniert:
    ```
    sudo certbot renew --dry-run
    ```

## Certbot via APT

::: warning :warning: Hinweis
Diese Methode installiert oft veraltete Versionen. Verwende sie nur, wenn Snap nicht möglich ist.
:::

1. <strong>System aktualisieren</strong>

    Aktualisiere zunächst das System deines Rootservers. Öffne dazu die Konsole und gib den folgenden Befehl ein:
    
    ```
    apt update && apt upgrade -y
    ```

2. <strong>Certbot installieren</strong>


    * Für Apache2:
    
    ```
    sudo apt install certbot python3-certbot-apache
    ```

    * Für Nginx:
    
    ```
    sudo apt install certbot python3-certbot-nginx
    ```

3. <strong>Certbot verwenden</strong>

    * Für Apache2:
    ```
    sudo certbot --apache
    ```
    
    * Für Nginx:
    ```
    sudo certbot --nginx
    ```

4. <strong>Zertifikate überprüfen</strong>

    * Zertifikate findest du unter:
    ```
    /etc/letsencrypt/live/<deine-domain>/
    ```
    
    * Status anzeigen:
    ```
    sudo certbot certificates
    ```

5. <strong>Automatische Verlängerung prüfen</strong>

    Certbot erstellt automatisch einen Cronjob. Mit folgendem Befehl kannst du testen, ob die automatische Verlängerung richtig funktioniert:
    ```
    sudo certbot renew --dry-run
    ```

::: info :information_source: Wichtig
Die Domain muss auf den Server zeigen (A- oder AAAA-Eintrag), und Port 80 (HTTP-Challenge) muss erreichbar sein – sonst schlägt die Validierung fehl.
:::