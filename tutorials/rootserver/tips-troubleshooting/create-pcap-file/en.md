---
slug: "create-pcap-file"
language: "en"
title: "How to Create a PCAP File on Your VPS"
description: "Learn how to create a PCAP file on your VPS using tcpdump and send it to our support team for detailed analysis of network issues."
tags: []
date: "2026-02-23"
visibility: "public"
updated: "2026-03-19"
cta: "rootserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create PCAP File"
sort: 3
related: ["rootserver/tips-troubleshooting/create-cronjobs", "rootserver/tips-troubleshooting/create-network-trace"]
---

A PCAP file (Packet Capture) records all network traffic on your server. In some cases, our support team needs this data for an in-depth analysis of network issues – e.g. DDoS attacks, connection drops, or packet loss.

> [!NOTE]
> A PCAP file complements a [Network Trace (MTR)](/tutorials/rootserver/tips-troubleshooting/create-network-trace). While an MTR trace shows the route and packet loss per hop, a PCAP file captures the actual packets at the protocol level.

## Prerequisites

- **VPS** with SSH or Remote Desktop access
- **tcpdump** installed (Linux) or **Wireshark** installed (Windows)

## Linux – tcpdump

### Installing tcpdump

```text
sudo apt install tcpdump        # Debian/Ubuntu
sudo yum install tcpdump        # CentOS/RHEL
sudo pacman -S tcpdump          # Arch Linux
```

### Find Your Network Interface

Before starting a capture, you need to know which network interface your server uses:

```text
sudo tcpdump -D
```

Common interface names are `eth0`, `ens18`, or `ens192`.

### Start the Capture on Linux

> [!NOTE]
> **Recommended Packet Count**
>
> We recommend a packet count of `100000` (100,000). This is sufficient in most cases to capture the issue without the file becoming unnecessarily large.

**Capture all traffic (100,000 packets):**

```text
sudo tcpdump -ni eth0 -s 0 -c 100000 -w capture.pcap
```

**Capture only a specific port:**

```text
sudo tcpdump -ni eth0 -s 0 -c 100000 -w capture.pcap port 25565
```

> [!NOTE]
> Port `25565` in this example is the default port for Minecraft. Replace it with the port of your affected service.

**Capture only traffic from/to a specific IP:**

```text
sudo tcpdump -ni eth0 -s 0 -c 100000 -w capture.pcap host 123.45.67.89
```

**Combine port and IP:**

```text
sudo tcpdump -ni eth0 -s 0 -c 100000 -w capture.pcap host 123.45.67.89 and port 25565
```

**Exclude your own SSH connection** (recommended to prevent your session from skewing the capture):

```text
sudo tcpdump -ni eth0 -s 0 -c 100000 -w capture.pcap not port 22
```

> [!TIP]
> The capture runs until the specified packet count is reached or you stop it manually with `Ctrl + C`.

### Important Parameters Explained

| Parameter | Meaning |
|-----------|---------|
| `-ni eth0` | Select interface, no DNS resolution (faster) |
| `-s 0` | Capture full packet (no truncation) |
| `-c 100000` | Automatically stop after 100,000 packets |
| `-w capture.pcap` | Save output to file |
| `port 25565` | Only traffic on this port |
| `host 1.2.3.4` | Only traffic from/to this IP |
| `not port 22` | Exclude SSH traffic |

## Windows – Wireshark (tshark)

### Installing Wireshark

Download [Wireshark](https://www.wireshark.org/download.html) and install it. The command-line tool `tshark` is automatically installed alongside it.

### List Available Interfaces

```text
"C:\Program Files\Wireshark\tshark.exe" -D
```

### Start the Capture on Windows

**Capture all traffic:**

```text
"C:\Program Files\Wireshark\tshark.exe" -i 1 -c 100000 -w C:\capture.pcap
```

**Capture only a specific port:**

```text
"C:\Program Files\Wireshark\tshark.exe" -i 1 -f "port 25565" -c 100000 -w C:\capture.pcap
```

**Capture only traffic from/to a specific IP:**

```text
"C:\Program Files\Wireshark\tshark.exe" -i 1 -f "host 123.45.67.89" -c 100000 -w C:\capture.pcap
```

> [!NOTE]
> Replace `-i 1` with the number of the desired interface from the `-D` output.

## Compress the File

PCAP files can become very large. Compress the file before sending:

**Linux:**

```text
gzip capture.pcap
```

**Windows (PowerShell):**

```text
Compress-Archive -Path C:\capture.pcap -DestinationPath C:\capture.zip
```

## Send the Result to Support

Include the following information in your support ticket:

1. **The PCAP file** compressed as `.gz` or `.zip`
2. **Date and time** of the capture
3. **Filter used** – which port or IP you filtered
4. **Brief problem description** – e.g. DDoS attack, connection drops, lag spikes
5. **Affected service** – which service on which port is affected

> [!WARNING]
> **Important**
>
> - **Capture during the issue** – a capture without an active problem provides no useful data.
> - **Use filters** – without filters, the file can quickly grow to several gigabytes.
> - **Exclude SSH** – filter out your own SSH traffic (`not port 22`) to keep the capture file manageable.
