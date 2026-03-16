---
description: UFW-Firewall auf einem Linux Rootserver / vServer installieren und konfigurieren (Ubuntu/Debian)
---

# So installierst du UFW auf deinem Linux Rootserver / vServer

**UFW** (Uncomplicated Firewall) ist ein einfaches Frontend für **iptables**, das die Verwaltung der Server-Firewall deutlich vereinfacht.

## UFW installieren

1. <b>System aktualisieren</b><br>
   Aktualisiere zunächst die Paketlisten:

   ```bash
   sudo apt update
   ```

2. <b>UFW installieren</b><br>
   Installiere UFW mit folgendem Befehl:

   ```bash
   sudo apt install ufw -y
   ```

## UFW konfigurieren

1. <b>Standardregeln setzen</b><br>
   Blockiere alle eingehenden Verbindungen und erlaube alle ausgehenden:

   ```bash
   sudo ufw default deny incoming
   sudo ufw default allow outgoing
   ```

2. <b>SSH-Port freigeben</b><br>
   Gib den SSH-Port frei, damit du dich weiterhin verbinden kannst:

   ```bash
   sudo ufw allow ssh
   ```

   :::: danger Wichtig
   Überspringe diesen Schritt **nicht**, sonst sperrst du dich aus dem Server aus! Falls du einen anderen SSH-Port verwendest, gib diesen stattdessen frei, z.B. `sudo ufw allow 2222/tcp`.
   ::::

3. <b>Weitere Ports freigeben (optional)</b><br>
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

4. <b>UFW aktivieren</b><br>
   Aktiviere die Firewall:

   ```bash
   sudo ufw enable
   ```

   Bestätige mit `y`, wenn du gefragt wirst.

5. <b>Status prüfen</b><br>
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

:::: tip Tipp
Für zusätzlichen Schutz vor Brute-Force-Angriffen richte auch [Fail2Ban](fail2ban-installieren.md) ein.
::::
