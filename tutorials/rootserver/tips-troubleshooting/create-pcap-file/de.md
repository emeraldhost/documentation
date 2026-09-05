---
slug: "pcap-datei-erstellen"
language: "de"
title: "So erstellst Du eine PCAP-Datei auf Deinem vServer / Rootserver"
description: "Erfahre, wie Du mit tcpdump eine PCAP-Datei auf Deinem Rootserver erstellst und an unseren Support sendest, um Netzwerkprobleme zu analysieren."
tags: []
date: "2026-02-23"
visibility: "public"
updated: "2026-03-19"
cta: "rootserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "PCAP-Datei erstellen"
sort: 3
related: ["rootserver/tips-troubleshooting/create-cronjobs", "rootserver/tips-troubleshooting/create-network-trace"]
---

Eine PCAP-Datei (Packet Capture) zeichnet den gesamten Netzwerkverkehr auf Deinem Server auf. Unser Support benötigt diese Daten in manchen Fällen für eine tiefgehende Analyse von Netzwerkproblemen – z.B. bei DDoS-Angriffen, Verbindungsabbrüchen oder Paketverlust.

> [!NOTE]
> Eine PCAP-Datei ist eine Ergänzung zum [Netzwerk-Trace (MTR)](/tutorials/rootserver/tips-troubleshooting/create-network-trace). Während ein MTR-Trace die Route und Paketverlust pro Hop zeigt, erfasst eine PCAP-Datei die tatsächlichen Pakete auf Protokollebene.

## Voraussetzungen

- **vServer / Rootserver** mit SSH- oder Remotedesktop-Zugang
- **tcpdump** installiert (Linux) oder **Wireshark** installiert (Windows)

## Linux – tcpdump

### tcpdump installieren

```text
sudo apt install tcpdump        # Debian/Ubuntu
sudo yum install tcpdump        # CentOS/RHEL
sudo pacman -S tcpdump          # Arch Linux
```

### Netzwerk-Interface herausfinden

Bevor Du eine Aufnahme startest, musst Du wissen, welches Netzwerk-Interface Dein Server verwendet:

```text
sudo tcpdump -D
```

Typische Interface-Namen sind `eth0`, `ens18` oder `ens192`.

### Aufnahme unter Linux starten

> [!NOTE]
> **Empfohlene Paketanzahl**
>
> Wir empfehlen eine Paketanzahl von `100000` (100.000). Das ist in den meisten Fällen ausreichend, um das Problem zu erfassen, ohne dass die Datei unnötig groß wird.

**Gesamten Traffic aufzeichnen (100.000 Pakete):**

```text
sudo tcpdump -ni eth0 -s 0 -c 100000 -w capture.pcap
```

**Nur einen bestimmten Port aufzeichnen:**

```text
sudo tcpdump -ni eth0 -s 0 -c 100000 -w capture.pcap port 25565
```

> [!NOTE]
> Port `25565` ist in diesem Beispiel der Standard-Port für Minecraft. Ersetze ihn durch den Port Deines betroffenen Dienstes.

**Nur Traffic von/zu einer bestimmten IP:**

```text
sudo tcpdump -ni eth0 -s 0 -c 100000 -w capture.pcap host 123.45.67.89
```

**Port und IP kombinieren:**

```text
sudo tcpdump -ni eth0 -s 0 -c 100000 -w capture.pcap host 123.45.67.89 and port 25565
```

**Eigene SSH-Verbindung ausschließen** (empfohlen, damit Deine eigene Sitzung die Aufnahme nicht verfälscht):

```text
sudo tcpdump -ni eth0 -s 0 -c 100000 -w capture.pcap not port 22
```

> [!TIP]
> Die Aufnahme läuft, bis die angegebene Paketanzahl erreicht ist oder Du sie mit `Strg + C` manuell stoppst.

### Wichtige Parameter erklärt

| Parameter | Bedeutung |
|-----------|-----------|
| `-ni eth0` | Interface auswählen, keine DNS-Auflösung (schneller) |
| `-s 0` | Gesamtes Paket aufzeichnen (nicht abschneiden) |
| `-c 100000` | Nach 100.000 Paketen automatisch stoppen |
| `-w capture.pcap` | Ausgabe in Datei speichern |
| `port 25565` | Nur Traffic auf diesem Port |
| `host 1.2.3.4` | Nur Traffic von/zu dieser IP |
| `not port 22` | SSH-Traffic ausschließen |

## Windows – Wireshark (tshark)

### Wireshark installieren

Lade [Wireshark](https://www.wireshark.org/download.html) herunter und installiere es. Das Kommandozeilen-Tool `tshark` wird automatisch mitinstalliert.

### Verfügbare Interfaces auflisten

```text
"C:\Program Files\Wireshark\tshark.exe" -D
```

### Aufnahme unter Windows starten

**Gesamten Traffic aufzeichnen:**

```text
"C:\Program Files\Wireshark\tshark.exe" -i 1 -c 100000 -w C:\capture.pcap
```

**Nur einen bestimmten Port:**

```text
"C:\Program Files\Wireshark\tshark.exe" -i 1 -f "port 25565" -c 100000 -w C:\capture.pcap
```

**Nur Traffic von/zu einer bestimmten IP:**

```text
"C:\Program Files\Wireshark\tshark.exe" -i 1 -f "host 123.45.67.89" -c 100000 -w C:\capture.pcap
```

> [!NOTE]
> Ersetze `-i 1` mit der Nummer des gewünschten Interfaces aus der `-D` Ausgabe.

## Datei komprimieren

PCAP-Dateien können sehr groß werden. Komprimiere die Datei vor dem Versand:

**Linux:**

```text
gzip capture.pcap
```

**Windows (PowerShell):**

```text
Compress-Archive -Path C:\capture.pcap -DestinationPath C:\capture.zip
```

## Ergebnis an den Support senden

Sende uns folgende Informationen in Deinem Support-Ticket:

1. **Die PCAP-Datei** komprimiert als `.gz` oder `.zip`
2. **Datum und Uhrzeit** der Aufnahme
3. **Verwendeter Filter** – welchen Port oder welche IP Du gefiltert hast
4. **Kurze Problembeschreibung** – z.B. DDoS-Angriff, Verbindungsabbrüche, Lag-Spikes
5. **Betroffener Dienst** – welcher Dienst auf welchem Port betroffen ist

> [!WARNING]
> **Wichtig**
>
> - **Aufnahme während des Problems durchführen** – eine Aufnahme ohne aktives Problem liefert keine verwertbaren Daten.
> - **Filter verwenden** – ohne Filter kann die Datei schnell mehrere Gigabyte groß werden.
> - **SSH ausschließen** – filtere Deinen eigenen SSH-Traffic heraus (`not port 22`), damit die Aufnahme nicht unnötig groß wird.
