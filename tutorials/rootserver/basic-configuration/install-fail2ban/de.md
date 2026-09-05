---
slug: "fail2ban-installieren"
language: "de"
title: "So installierst Du Fail2Ban auf Deinem Linux Rootserver / vServer"
description: "Fail2Ban auf einem Linux Rootserver / vServer installieren (Ubuntu/Debian)"
tags: []
date: "2023-10-15"
visibility: "public"
updated: "2026-03-16"
cta: "rootserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Fail2Ban installieren"
sort: 1
related: ["rootserver/basic-configuration/change-root-password", "rootserver/basic-configuration/secure-ssh-access", "rootserver/basic-configuration/install-ufw"]
---

Fail2Ban schützt Deinen Server vor Brute-Force-Angriffen, indem es IP-Adressen nach mehreren fehlgeschlagenen Anmeldeversuchen automatisch sperrt.

## Fail2Ban installieren

1. **System aktualisieren**\
   Aktualisiere zunächst die Paketlisten:

   ```bash
   sudo apt update
   ```

2. **Fail2Ban installieren**\
   Installiere Fail2Ban mit folgendem Befehl:

   ```bash
   sudo apt install fail2ban -y
   ```

3. **Dienst aktivieren**\
   Stelle sicher, dass Fail2Ban beim Serverstart automatisch gestartet wird:

   ```bash
   sudo systemctl enable fail2ban
   ```

## Fail2Ban konfigurieren

1. **Konfigurationsdatei erstellen**\
   Erstelle eine lokale Konfigurationsdatei, damit Deine Einstellungen bei Updates nicht überschrieben werden:

   ```bash
   sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
   ```

2. **Konfiguration bearbeiten**\
   Öffne die Datei:

   ```bash
   sudo nano /etc/fail2ban/jail.local
   ```

3. **SSH-Schutz aktivieren**\
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
   | `port` | Der SSH-Port (ändere diesen, falls Du den SSH-Port angepasst hast) |
   | `maxretry` | Maximale Fehlversuche bevor eine IP gesperrt wird |
   | `bantime` | Sperrdauer in Sekunden (3600 = 1 Stunde) |
   | `findtime` | Zeitfenster in Sekunden, in dem die Fehlversuche gezählt werden |

4. **Fail2Ban neu starten**\
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

> [!TIP]
> Mit `sudo fail2ban-client set sshd unbanip IP_ADRESSE` kannst Du eine gesperrte IP-Adresse wieder freigeben.
