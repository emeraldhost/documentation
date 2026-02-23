---
description: Erfahre, wie du mit tcpdump eine PCAP-Datei auf deinem Rootserver erstellst und an unseren Support sendest, um Netzwerkprobleme detailliert zu analysieren.
---

# So erstellst du eine PCAP-Datei auf deinem Rootserver

Eine PCAP-Datei (Packet Capture) zeichnet den gesamten Netzwerkverkehr auf deinem Server auf. Unser Support benötigt diese Daten in manchen Fällen für eine tiefgehende Analyse von Netzwerkproblemen – z.B. bei DDoS-Angriffen, Verbindungsabbrüchen oder Paketverlust.

::: info Info
Eine PCAP-Datei ist eine Ergänzung zum [Netzwerk-Trace (MTR)](netzwerk-trace-erstellen.md). Während ein MTR-Trace die Route und Paketverlust pro Hop zeigt, erfasst eine PCAP-Datei die tatsächlichen Pakete auf Protokollebene.
:::

## Voraussetzungen

- **Rootserver** mit SSH- oder Remotedesktop-Zugang
- **tcpdump** installiert (Linux) oder **Wireshark** installiert (Windows)

## Linux – tcpdump

### Installation

```
sudo apt install tcpdump        # Debian/Ubuntu
sudo yum install tcpdump        # CentOS/RHEL
sudo pacman -S tcpdump          # Arch Linux
```

### Netzwerk-Interface herausfinden

Bevor du eine Aufnahme startest, musst du wissen, welches Netzwerk-Interface dein Server verwendet:

```
sudo tcpdump -D
```

Typische Interface-Namen sind `eth0`, `ens18` oder `ens192`.

### Aufnahme starten

**Gesamten Traffic aufzeichnen (100.000 Pakete):**

```
sudo tcpdump -ni eth0 -s 0 -c 100000 -w capture.pcap
```

**Nur einen bestimmten Port aufzeichnen:**

```
sudo tcpdump -ni eth0 -s 0 -c 100000 -w capture.pcap port 25565
```

**Nur Traffic von/zu einer bestimmten IP:**

```
sudo tcpdump -ni eth0 -s 0 -c 100000 -w capture.pcap host 203.0.113.50
```

**Port und IP kombinieren:**

```
sudo tcpdump -ni eth0 -s 0 -c 100000 -w capture.pcap host 203.0.113.50 and port 25565
```

**Eigene SSH-Verbindung ausschließen** (empfohlen, damit deine eigene Sitzung die Aufnahme nicht verfälscht):

```
sudo tcpdump -ni eth0 -s 0 -c 100000 -w capture.pcap not port 22
```

::: tip Tipp
Die Aufnahme läuft, bis die angegebene Paketanzahl erreicht ist oder du sie mit `Strg + C` manuell stoppst.
:::

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

### Installation

Lade [Wireshark](https://www.wireshark.org/download.html) herunter und installiere es. Das Kommandozeilen-Tool `tshark` wird automatisch mitinstalliert.

### Verfügbare Interfaces auflisten

```
"C:\Program Files\Wireshark\tshark.exe" -D
```

### Aufnahme starten

**Gesamten Traffic aufzeichnen:**

```
"C:\Program Files\Wireshark\tshark.exe" -i 1 -c 100000 -w C:\capture.pcap
```

**Nur einen bestimmten Port:**

```
"C:\Program Files\Wireshark\tshark.exe" -i 1 -f "port 25565" -c 100000 -w C:\capture.pcap
```

**Nur Traffic von/zu einer bestimmten IP:**

```
"C:\Program Files\Wireshark\tshark.exe" -i 1 -f "host 203.0.113.50" -c 100000 -w C:\capture.pcap
```

::: info Info
Ersetze `-i 1` mit der Nummer des gewünschten Interfaces aus der `-D` Ausgabe.
:::

## Datei komprimieren

PCAP-Dateien können sehr groß werden. Komprimiere die Datei vor dem Versand:

**Linux:**

```
gzip capture.pcap
```

**Windows (PowerShell):**

```
Compress-Archive -Path C:\capture.pcap -DestinationPath C:\capture.zip
```

## Ergebnis an den Support senden

Sende uns folgende Informationen in deinem Support-Ticket:

1. **Die PCAP-Datei** komprimiert als `.gz` oder `.zip`
2. **Datum und Uhrzeit** der Aufnahme
3. **Verwendeter Filter** – welchen Port oder welche IP du gefiltert hast
4. **Kurze Problembeschreibung** – z.B. DDoS-Angriff, Verbindungsabbrüche, Lag-Spikes
5. **Betroffener Dienst** – welcher Dienst auf welchem Port betroffen ist

::: warning Wichtig
- **Aufnahme während des Problems durchführen** – eine Aufnahme ohne aktives Problem liefert keine verwertbaren Daten.
- **Filter verwenden** – ohne Filter kann die Datei schnell mehrere Gigabyte groß werden.
- **SSH ausschließen** – filtere deinen eigenen SSH-Traffic heraus (`not port 22`), damit die Aufnahme nicht unnötig groß wird.
:::
