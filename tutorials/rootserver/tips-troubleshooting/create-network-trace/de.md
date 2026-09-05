---
slug: "netzwerk-trace-erstellen"
language: "de"
title: "So erstellst Du einen Netzwerk-Trace mit MTR"
description: "Erfahre, wie Du mit MTR oder WinMTR einen Netzwerk-Trace erstellst und an unseren Support sendest, um Netzwerkprobleme schnell zu analysieren."
tags: []
date: "2026-02-19"
visibility: "public"
updated: "2026-03-19"
cta: "rootserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Netzwerk-Trace erstellen"
sort: 2
related: ["rootserver/tips-troubleshooting/create-cronjobs", "rootserver/tips-troubleshooting/create-pcap-file"]
---

MTR ist ein Netzwerk-Diagnose-Tool, das die Funktionen von Traceroute und Ping kombiniert. Es zeigt Dir die gesamte Route Deiner Datenpakete zum Zielserver und misst dabei Paketverlust und Latenz an jedem einzelnen Hop (Zwischenstation).

Unser Support benötigt diese Daten, um Netzwerkprobleme gezielt analysieren und lokalisieren zu können.

> [!TIP]
> Bevor Du einen Trace erstellst, prüfe zunächst unsere **[Status Seite](https://status.emeraldhost.de)**, ob aktuell eine bekannte Störung vorliegt.

## Voraussetzungen

- **Server-IP-Adresse** – findest Du in Deinem Dashboard unter der Serververwaltung
- **MTR installiert** – WinMTR für Windows, `mtr` für Linux/macOS

## Windows – WinMTR

1. **WinMTR herunterladen**\
   Lade [WinMTR](https://winmtr.net/) herunter und starte das Programm.

2. **Server-IP eingeben**\
   Gib Deine Server-IP-Adresse im Feld `Host` ein.

3. **Messung starten**\
   Klicke auf `Start` und warte, bis mindestens 200 Pakete gesendet wurden. Die Anzahl gesendeter Pakete siehst Du in der Spalte `Sent`.

4. **Ergebnis exportieren**\
   Klicke auf `Stop` und anschließend auf `Export TEXT`, um das Ergebnis zu speichern.

> [!NOTE]
> Der folgende Output dient nur als Beispiel – Dein Ergebnis wird je nach Standort und Anbieter anders aussehen.

**Beispiel-Output (WinMTR):**

```text
|---------------------------------------------------------------------------|
|                            WinMTR statistics                              |
| Host                       - %  | Sent | Recv | Best | Avrg | Wrst | Last |
|---------------------------------|------|------|------|------|------|------|
| 192.168.178.1              - 0  |  200 |  200 |    1 |    2 |   15 |    1 |
| 198.51.100.1               - 0  |  200 |  200 |    8 |   10 |   28 |    9 |
| hop1.your-isp.example      - 0  |  200 |  200 |   10 |   13 |   35 |   12 |
| hop2.transit.example       - 0  |  200 |  200 |   12 |   15 |   38 |   14 |
| hop3.transit.example       - 0  |  200 |  200 |   16 |   20 |   42 |   18 |
| 203.0.113.10               - 0  |  200 |  200 |   18 |   22 |   45 |   20 |
| emeraldhost.de             - 0  |  200 |  200 |   19 |   23 |   48 |   21 |
|_________________________________|______|______|______|______|______|______|
```

## Linux

1. **MTR installieren**\
   Installiere MTR über die Paketverwaltung Deiner Distribution:

    ```text
    sudo apt install mtr        # Debian/Ubuntu
    sudo yum install mtr        # CentOS/RHEL
    sudo pacman -S mtr          # Arch Linux
    ```

2. **Trace ausführen**\
   Führe folgenden Befehl aus:

    ```text
    mtr -s 1000 -r -c 200 DEINE-SERVER-IP
    ```

3. **Ergebnis sichern**\
   Das Ergebnis wird direkt im Terminal ausgegeben. Kopiere es oder leite es in eine Datei um:

    ```text
    mtr -s 1000 -r -c 200 DEINE-SERVER-IP > mtr-ergebnis.txt
    ```

> [!NOTE]
> Der folgende Output dient nur als Beispiel – Dein Ergebnis wird je nach Standort und Anbieter anders aussehen.

**Beispiel-Output (Linux):**

```text
Start: 2026-02-19T14:30:00+0100
HOST:                          Loss%   Snt   Last   Avg  Best  Wrst StDev
  1.|-- 192.168.178.1           0.0%   200    0.8   1.5   0.5  14.2   1.3
  2.|-- 198.51.100.1            0.0%   200    8.1  10.2   7.0  28.4   2.8
  3.|-- hop1.your-isp.example   0.0%   200   10.3  13.1   9.5  35.7   3.4
  4.|-- hop2.transit.example    0.0%   200   12.5  15.3  11.2  38.1   3.6
  5.|-- hop3.transit.example    0.0%   200   16.2  20.1  14.8  42.5   4.1
  6.|-- 203.0.113.10            0.0%   200   18.4  22.0  16.5  45.3   3.8
  7.|-- emeraldhost.de          0.0%   200   19.1  23.2  17.0  48.6   4.0
```

## macOS

1. **MTR installieren**\
   Installiere MTR über Homebrew:

    ```text
    brew install mtr
    ```

2. **Trace ausführen**\
   Führe folgenden Befehl aus:

    ```text
    sudo mtr -s 1000 -r -c 200 DEINE-SERVER-IP
    ```

3. **Ergebnis sichern**\
   Kopiere das Ergebnis oder leite es in eine Datei um:

    ```text
    sudo mtr -s 1000 -r -c 200 DEINE-SERVER-IP > mtr-ergebnis.txt
    ```

## Trace in beide Richtungen (nur Rootserver)

> [!NOTE]
> Bei **Gameservern** und **TeamSpeak-Servern** ist nur ein Trace in Richtung **Client → Server** möglich, da kein Shell-Zugang besteht. Sende uns in diesem Fall nur den einen Trace.

Bei einem **Rootserver** benötigt unser Support Traces in **beide Richtungen** für eine vollständige Analyse:

- **Client → Server:** Führe den Trace von Deinem PC aus (wie oben beschrieben).
- **Server → Client:** Verbinde Dich mit Deinem Rootserver (per SSH oder Remotedesktop) und führe dort einen MTR-Trace mit **Deiner eigenen IP-Adresse** als Ziel aus:

    ```text
    mtr -s 1000 -r -c 200 DEINE-EIGENE-IP
    ```

> [!TIP]
> Deine eigene öffentliche IP-Adresse findest Du z.B. unter [ifconfig.me](https://ifconfig.me).

## Spalten erklärt

| Spalte   | Bedeutung                                                                 |
|----------|---------------------------------------------------------------------------|
| **HOST** | Router oder Server auf der Route (Hostname oder IP-Adresse)               |
| **Loss%**| Paketverlust in Prozent – der wichtigste Wert für die Analyse             |
| **Snt**  | Anzahl gesendeter Pakete (sollte 200 sein)                                |
| **Last** | Latenz des zuletzt empfangenen Pakets in Millisekunden                    |
| **Avg**  | Durchschnittliche Latenz in Millisekunden                                 |
| **Best** | Niedrigste gemessene Latenz                                               |
| **Wrst** | Höchste gemessene Latenz                                                  |
| **StDev**| Standardabweichung – hohe Werte deuten auf instabile Verbindung hin       |

## Ergebnis interpretieren

| Beobachtung | Bedeutung |
|---|---|
| **Loss% am letzten Hop hoch** | Problem am Zielserver oder auf der letzten Meile |
| **Loss% ab einem bestimmten Hop durchgehend** | Problem bei diesem Hop oder dem zuständigen Transit-Provider |
| **Loss% nur an einem mittleren Hop, danach wieder 0%** | Meist harmlos – viele Router limitieren ICMP-Antworten und verwerfen Ping-Pakete, leiten den restlichen Traffic aber normal weiter |
| **Avg steigt ab einem bestimmten Hop stark an** | Möglicher Engpass bei diesem Provider |
| **Loss% von Anfang an hoch** | Problem bei Deinem eigenen ISP oder im lokalen Netzwerk |

## Häufige Fehler vermeiden

> [!WARNING]
> **Wichtig**
>
> - **VPN oder Proxy vorher deaktivieren** – sonst wird die VPN-Route getestet, nicht Deine tatsächliche Verbindung.
> - **Trace während des Problems durchführen** – ein Trace Stunden nach dem Problem liefert keine verwertbaren Daten.
> - **Mindestens 200 Pakete senden** – weniger ist nicht aussagekräftig genug für eine Analyse.
> - **Firewall beachten** – manche lokale Firewalls blockieren ICMP-Pakete, was zu falschem 100% Loss führen kann. Deaktiviere testweise Deine Firewall oder erlaube ICMP.
> - **Bei Rootservern: beide Richtungen nicht vergessen** – nur mit Traces in beide Richtungen ist eine vollständige Analyse möglich.

## Ergebnis an den Support senden

Sende uns folgende Informationen in Deinem Support-Ticket:

1. **Den MTR-Trace** als Text oder Datei (bei Rootservern beide Richtungen)
2. **Datum und Uhrzeit**, zu der das Problem aufgetreten ist
3. **Kurze Problembeschreibung** – z.B. hoher Ping, Verbindungsabbrüche, Timeouts, Lag-Spikes
