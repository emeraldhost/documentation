---
slug: "ufw-installieren"
language: "de"
title: "So installierst Du UFW auf Deinem Linux Rootserver / vServer"
description: "UFW-Firewall auf einem Linux Rootserver / vServer installieren und konfigurieren (Ubuntu/Debian)"
tags: []
date: "2025-05-12"
visibility: "public"
updated: "2026-03-16"
cta: "rootserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "UFW installieren"
sort: 4
related: ["rootserver/basic-configuration/change-root-password", "rootserver/basic-configuration/install-fail2ban", "rootserver/basic-configuration/secure-ssh-access"]
---

**UFW** (Uncomplicated Firewall) ist ein einfaches Frontend für **iptables**, das die Verwaltung der Server-Firewall deutlich vereinfacht.

## UFW installieren

1. **System aktualisieren**\
   Aktualisiere zunächst die Paketlisten:

   ```bash
   sudo apt update
   ```

2. **UFW installieren**\
   Installiere UFW mit folgendem Befehl:

   ```bash
   sudo apt install ufw -y
   ```

## UFW konfigurieren

1. **Standardregeln setzen**\
   Blockiere alle eingehenden Verbindungen und erlaube alle ausgehenden:

   ```bash
   sudo ufw default deny incoming
   sudo ufw default allow outgoing
   ```

2. **SSH-Port freigeben**\
   Gib den SSH-Port frei, damit Du Dich weiterhin verbinden kannst:

   ```bash
   sudo ufw allow ssh
   ```

   > [!IMPORTANT]
   > Überspringe diesen Schritt **nicht**, sonst sperrst Du Dich aus dem Server aus! Falls Du einen anderen SSH-Port verwendest, gib diesen stattdessen frei, z.B. `sudo ufw allow 2222/tcp`.

3. **Weitere Ports freigeben (optional)**\
   Gib je nach Bedarf weitere Ports frei:

   ```bash
   # Webserver
   sudo ufw allow http
   sudo ufw allow https

   # Minecraft (Standard-Port 25565)
   sudo ufw allow 25565

   # TeamSpeak 3
   sudo ufw allow 9987/udp    # Voice
   sudo ufw allow 10011/tcp   # Query
   sudo ufw allow 30033/tcp   # File Transfer
   ```

4. **UFW aktivieren**\
   Aktiviere die Firewall:

   ```bash
   sudo ufw enable
   ```

   Bestätige mit `y`, wenn Du gefragt wirst.

5. **Status prüfen**\
   Überprüfe, ob UFW korrekt läuft und welche Regeln aktiv sind:

   ```bash
   sudo ufw status
   ```

## Regeln verwalten

Alle Regeln mit Nummern anzeigen:

```bash
sudo ufw status numbered
```

Eine Regel entfernen (z.B. HTTP):

```bash
sudo ufw delete allow http
```

Einen bestimmten Port sperren:

```bash
sudo ufw deny 8080
```

UFW deaktivieren:

```bash
sudo ufw disable
```

> [!TIP]
> Für zusätzlichen Schutz vor Brute-Force-Angriffen richte auch [Fail2Ban](/tutorials/rootserver/basic-configuration/install-fail2ban) ein.
