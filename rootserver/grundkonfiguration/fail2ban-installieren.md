---
description: Fail2Ban auf einem Linux Rootserver / vServer installieren (Ubuntu/Debian)
---

# So installierst du Fail2Ban auf deinem Linux Rootserver / vServer

Fail2Ban schützt deinen Server vor Brute-Force-Angriffen, indem es IP-Adressen nach mehreren fehlgeschlagenen Anmeldeversuchen automatisch sperrt.

## Fail2Ban installieren

1. <b>System aktualisieren</b><br>
   Aktualisiere zunächst die Paketlisten:

   ```bash
   sudo apt update
   ```

2. <b>Fail2Ban installieren</b><br>
   Installiere Fail2Ban mit folgendem Befehl:

   ```bash
   sudo apt install fail2ban -y
   ```

3. <b>Dienst aktivieren</b><br>
   Stelle sicher, dass Fail2Ban beim Serverstart automatisch gestartet wird:

   ```bash
   sudo systemctl enable fail2ban
   ```

## Fail2Ban konfigurieren

1. <b>Konfigurationsdatei erstellen</b><br>
   Erstelle eine lokale Konfigurationsdatei, damit deine Einstellungen bei Updates nicht überschrieben werden:

   ```bash
   sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
   ```

2. <b>Konfiguration bearbeiten</b><br>
   Öffne die Datei:

   ```bash
   sudo nano /etc/fail2ban/jail.local
   ```

3. <b>SSH-Schutz aktivieren</b><br>
   Suche den Abschnitt `[sshd]` und passe ihn an:

   ```ini
   [sshd]
   enabled = true
   port = ssh
   maxretry = 5
   bantime = 3600
   findtime = 600
   ```

   | Einstellung | Beschreibung |
   |-------------|-------------|
   | `enabled` | Aktiviert den SSH-Schutz |
   | `port` | Der SSH-Port (ändere diesen, falls du den SSH-Port angepasst hast) |
   | `maxretry` | Maximale Fehlversuche bevor eine IP gesperrt wird |
   | `bantime` | Sperrdauer in Sekunden (3600 = 1 Stunde) |
   | `findtime` | Zeitfenster in Sekunden, in dem die Fehlversuche gezählt werden |

4. <b>Fail2Ban neu starten</b><br>
   Speichere mit `Strg + O`, schließe mit `Strg + X` und starte Fail2Ban neu:

   ```bash
   sudo systemctl restart fail2ban
   ```

## Status prüfen

Überprüfe, ob Fail2Ban läuft:

```bash
sudo systemctl status fail2ban
```

Zeige den Status des SSH-Schutzes an:

```bash
sudo fail2ban-client status sshd
```

:::: tip Tipp
Mit `sudo fail2ban-client set sshd unbanip IP_ADRESSE` kannst du eine gesperrte IP-Adresse wieder freigeben.
::::
