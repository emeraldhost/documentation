---
description: UFW-Firewall auf einem Rootserver installieren und konfigurieren (Ubuntu/Debian)
---

# UFW installieren

UFW-Firewall auf dem Rootserver installieren und konfigurieren (Ubuntu/Debian)

<strong>UFW</strong> steht für <strong>Uncomplicated Firewall</strong> und ist ein einfaches Frontend für <strong>iptables</strong>, das die Verwaltung der Server-Firewall deutlich vereinfacht.

---

1. <strong>System aktualisieren</strong>

Aktualisiere zunächst das System deines Rootservers. Öffne dazu die Konsole und gib den folgenden Befehl ein:

```
apt update && apt upgrade -y
```

2. <strong>UFW installieren</strong>

Installiere UFW, indem du folgenden Befehl in der Konsole eingibst:

```
apt install ufw
```

3. <strong>Überprüfen, ob die Installation erfolgreich war</strong>

Prüfe, ob die Installation erfolgreich war, indem du den folgenden Befehl eingibst:

```
ufw status
```
Standardeinstellung nach der Installation: ``` Status: inactive ```

4. <strong>Standardregeln setzen</strong>

Wir empfehlen, alle eingehenden Verbindungen zu blockieren und nur die benötigten Ports freizugeben:

```
sudo ufw default deny incoming
sudo ufw default allow outgoing
```

5. <strong>SSH-Port freigeben (Wichtig!)</strong>

Öffne den Standard-SSH-Port (Port 22), wenn du ihn für den Remote-Zugriff auf den Server benötigst:

```
sudo ufw allow ssh
```
Falls dein SSH-Port von der Standardkonfiguration (Port 22) abweicht, nutze den korrekten Port z.B. 33


6. <strong>Weitere Dienste freigeben (Optional)</strong>

    • HTTP (Webserver):
    ```
    sudo ufw allow http
    ```

    • HTTPS (SSL)
    ```
    sudo ufw allow https
    ```

    • Minecraft (Standard-Port 25565)
    ```
    sudo ufw allow 25565
    ```

    • Teamspeak 3 (Beispiel)
    ```
    sudo ufw allow 9987     # Voice
    sudo ufw allow 10011    # Query
    sudo ufw allow 30033    # File Transfer
    ```

7. <strong>UFW aktivieren</strong>

Aktiviere die Firewall:

```
sudo ufw enable
```

Bestätige mit ``` y ```, wenn du gefragt wirst. Danach kannst du den Status überprüfen:

```
sudo ufw status
```

8. <strong>Regeln verwalten</strong>

    • Regeln entfernen (z.B. HTTP-Port):
    ```
    sudo ufw delete allow http
    ```

    • Alle Regeln anzeigen:
    ```
    sudo ufw status numbered
    ```

    • UFW deaktivieren (Falls nötig)
    ```
    sudo ufw disable
    ```