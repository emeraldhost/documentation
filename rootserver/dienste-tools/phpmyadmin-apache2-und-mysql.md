---
description: PhpMyAdmin, Apache2 und MySQL auf einem Linux Rootserver / vServer installieren (Ubuntu/Debian)
---

# So installierst du PhpMyAdmin, Apache2 und MySQL auf deinem Linux Rootserver / vServer

Anleitung zur Installation von PhpMyAdmin, Apache2 und MySQL auf einem Linux Rootserver / vServer.

## Apache2 installieren

1. <b>Paketlisten aktualisieren</b><br>
   Öffne ein Terminalfenster auf deinem Server und führe folgenden Befehl aus:

   ```bash
   sudo apt update && apt install apache2 -y
   ```

## MySQL installieren

1. <b>MySQL installieren</b><br>
   Gib den folgenden Befehl ein, um die Installation von MySQL zu starten:

   ```bash
   sudo apt install mysql-server -y
   ```

2. <b>Passwort festlegen</b><br>
   Während der Installation wirst du aufgefordert, ein Passwort für den MySQL-Root-Benutzer festzulegen. Gib ein sicheres Passwort ein und speichere es an einem sicheren Ort.

## PhpMyAdmin installieren

1. <b>PhpMyAdmin installieren</b><br>
   Gib den folgenden Befehl ein, um die Installation von PhpMyAdmin zu starten:

   ```bash
   sudo apt install phpmyadmin -y
   ```

2. <b>Webserver auswählen</b><br>
   Während der Installation wirst du aufgefordert, einen Webserver auszuwählen. Wähle Apache2 aus und drücke die Enter-Taste.

3. <b>Admin-Passwort festlegen</b><br>
   Während der Installation wirst du aufgefordert, ein Passwort für das PhpMyAdmin-Administratorkonto festzulegen. Gib ein sicheres Passwort ein und speichere es an einem sicheren Ort.

4. <b>Installation testen</b><br>
   Wenn du fertig bist, öffne deinen Webbrowser und gib die Adresse `http://<server-ip>/phpmyadmin/` ein. Du solltest aufgefordert werden, dich mit deinem PhpMyAdmin-Administratorkonto anzumelden.

## PhpMyAdmin konfigurieren

1. <b>Konfiguration öffnen</b><br>
   Öffne die Datei `config.inc.php`, die sich im Verzeichnis `/etc/phpmyadmin/` befindet:

   ```bash
   nano /etc/phpmyadmin/config.inc.php
   ```

2. <b>Blowfish Secret ändern</b><br>
   Ändere die Zeile `$cfg['blowfish_secret']` in eine zufällige Zeichenfolge, die mindestens 32 Zeichen lang ist.

:::: info
Speichere die Eingabe mit **Strg + O** und schließe das Fenster mit **Strg + X**.
::::
