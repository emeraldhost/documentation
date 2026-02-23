---
description: Learn how to create a PCAP file on your VPS using tcpdump and send it to our support team for detailed analysis of network issues.
---

# How to Create a PCAP File on Your VPS

A PCAP file (Packet Capture) records all network traffic on your server. In some cases, our support team needs this data for an in-depth analysis of network issues – e.g. DDoS attacks, connection drops, or packet loss.

::: info Info
A PCAP file complements a [Network Trace (MTR)](create-network-trace.md). While an MTR trace shows the route and packet loss per hop, a PCAP file captures the actual packets at the protocol level.
:::

## Prerequisites

- **VPS** with SSH or Remote Desktop access
- **tcpdump** installed (Linux) or **Wireshark** installed (Windows)

## Linux – tcpdump

### Installation

```
sudo apt install tcpdump        # Debian/Ubuntu
sudo yum install tcpdump        # CentOS/RHEL
sudo pacman -S tcpdump          # Arch Linux
```

### Find Your Network Interface

Before starting a capture, you need to know which network interface your server uses:

```
sudo tcpdump -D
```

Common interface names are `eth0`, `ens18`, or `ens192`.

### Start Capture

**Capture all traffic (100,000 packets):**

```
sudo tcpdump -ni eth0 -s 0 -c 100000 -w capture.pcap
```

**Capture only a specific port:**

```
sudo tcpdump -ni eth0 -s 0 -c 100000 -w capture.pcap port 25565
```

**Capture only traffic from/to a specific IP:**

```
sudo tcpdump -ni eth0 -s 0 -c 100000 -w capture.pcap host 203.0.113.50
```

**Combine port and IP:**

```
sudo tcpdump -ni eth0 -s 0 -c 100000 -w capture.pcap host 203.0.113.50 and port 25565
```

**Exclude your own SSH connection** (recommended to prevent your session from skewing the capture):

```
sudo tcpdump -ni eth0 -s 0 -c 100000 -w capture.pcap not port 22
```

::: tip Tip
The capture runs until the specified packet count is reached or you stop it manually with `Ctrl + C`.
:::

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

### Installation

Download [Wireshark](https://www.wireshark.org/download.html) and install it. The command-line tool `tshark` is automatically installed alongside it.

### List Available Interfaces

```
"C:\Program Files\Wireshark\tshark.exe" -D
```

### Start Capture

**Capture all traffic:**

```
"C:\Program Files\Wireshark\tshark.exe" -i 1 -c 100000 -w C:\capture.pcap
```

**Capture only a specific port:**

```
"C:\Program Files\Wireshark\tshark.exe" -i 1 -f "port 25565" -c 100000 -w C:\capture.pcap
```

**Capture only traffic from/to a specific IP:**

```
"C:\Program Files\Wireshark\tshark.exe" -i 1 -f "host 203.0.113.50" -c 100000 -w C:\capture.pcap
```

::: info Info
Replace `-i 1` with the number of the desired interface from the `-D` output.
:::

## Compress the File

PCAP files can become very large. Compress the file before sending:

**Linux:**

```
gzip capture.pcap
```

**Windows (PowerShell):**

```
Compress-Archive -Path C:\capture.pcap -DestinationPath C:\capture.zip
```

## Send the Result to Support

Include the following information in your support ticket:

1. **The PCAP file** compressed as `.gz` or `.zip`
2. **Date and time** of the capture
3. **Filter used** – which port or IP you filtered
4. **Brief problem description** – e.g. DDoS attack, connection drops, lag spikes
5. **Affected service** – which service on which port is affected

::: warning Important
- **Capture during the issue** – a capture without an active problem provides no useful data.
- **Use filters** – without filters, the file can quickly grow to several gigabytes.
- **Exclude SSH** – filter out your own SSH traffic (`not port 22`) to keep the capture file manageable.
:::
