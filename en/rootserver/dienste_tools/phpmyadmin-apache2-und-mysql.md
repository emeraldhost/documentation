---
description: PhpMyAdmin, Apache2 und MySQL auf einem Rootserver installieren (Ubuntu/Debian)
---

# PhpMyAdmin, Apache2 und MySQL

## Installiere Apache2:&#x20;

1. Öffne ein Terminalfenster auf Deinem Server.&#x20;
2. Gib den folgenden Befehl ein, um die Installation von Apache2 zu starten:&#x20;

```
sudo apt update && apt install apache2 -y
```

## Installiere MySQL:&#x20;

1. Gib den folgenden Befehl ein, um die Installation von MySQL zu starten:

```
sudo apt install mysql-server -y
```

2. Während der Installation wirst Du aufgefordert, ein Passwort für den MySQL-Root-Benutzer festzulegen. Gib ein sicheres Passwort ein und speichere es an einem sicheren Ort.

Installiere PhpMyAdmin:&#x20;

1. Gib den folgenden Befehl ein, um die Installation von PhpMyAdmin zu starten:&#x20;

```
sudo apt install phpmyadmin -y
```

2. Während der Installation wirst Du aufgefordert, einen Webserver auszuwählen. Wähle Apache2 aus und drücke die Enter-Taste.&#x20;
3. Während der Installation wirst Du aufgefordert, ein Passwort für das PhpMyAdmin-Administratorkonto festzulegen. Gib ein sicheres Passwort ein und speichere es an einem sicheren Ort.&#x20;
4. Wenn Du fertig bist, öffne Deinen Webbrowser und gib die Adresse "http://Server-Adresse/phpmyadmin/" ein. Du solltest aufgefordert werden, Dich mit Deinem PhpMyAdmin-Administratorkonto anzumelden.

## Konfiguriere PhpMyAdmin:&#x20;

1. Öffne die Datei "config.inc.php", die sich im Verzeichnis "/etc/phpmyadmin/" befindet.&#x20;

```
nano /etc/phpmyadmin/config.inc.php
```

2. Ändere die Zeile "$cfg\['blowfish\_secret']" in eine zufällige Zeichenfolge, die mindestens 32 Zeichen lang ist. c. Speichere die Änderungen und schließe die Datei.

:::info
Speichere nun die Eingabe mit **STRG + O** und schließe das Fenster mit **STRG + X**
:::
