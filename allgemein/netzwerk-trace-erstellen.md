---
description: Erfahre, wie du mit MTR oder WinMTR einen Netzwerk-Trace erstellst und an unseren Support sendest, um Netzwerkprobleme schnell zu analysieren.
---

# So erstellst du einen Netzwerk-Trace mit MTR

MTR ist ein Netzwerk-Diagnose-Tool, das die Funktionen von Traceroute und Ping kombiniert. Es zeigt dir die gesamte Route deiner Datenpakete zum Zielserver und misst dabei Paketverlust und Latenz an jedem einzelnen Hop (Zwischenstation).

Unser Support benötigt diese Daten, um Netzwerkprobleme gezielt analysieren und lokalisieren zu können.

::: tip Tipp
Bevor du einen Trace erstellst, prüfe zunächst unsere **[Status Seite](https://status.emeraldhost.de)**, ob aktuell eine bekannte Störung vorliegt.
:::

## Voraussetzungen

- **Server-IP-Adresse** – findest du in deinem Dashboard unter der Serververwaltung
- **MTR installiert** – WinMTR für Windows, `mtr` für Linux/macOS

## Windows – WinMTR

1. **Lade [WinMTR](https://winmtr.net/) herunter und starte das Programm.**

2. **Gib deine Server-IP-Adresse im Feld `Host` ein.**

3. **Klicke auf `Start` und warte, bis mindestens 200 Pakete gesendet wurden.**
   - Die Anzahl gesendeter Pakete siehst du in der Spalte `Sent`.

4. **Klicke auf `Stop` und anschließend auf `Export TEXT`, um das Ergebnis zu speichern.**

::: info Hinweis
Der folgende Output dient nur als Beispiel – dein Ergebnis wird je nach Standort und Anbieter anders aussehen.
:::

**Beispiel-Output (WinMTR):**

```
|---------------------------------------------------------------------------|
|                            WinMTR statistics                              |
| Host                       - %  | Sent | Recv | Best | Avrg | Wrst | Last |
|---------------------------------|------|------|------|------|------|------|
| 192.168.178.1              - 0  |  200 |  200 |    1 |    2 |   15 |    1 |
| 172.17.225.84              - 0  |  200 |  200 |    8 |   10 |   28 |    9 |
| r3-ber1-de.as5405.net      - 0  |  200 |  200 |   10 |   13 |   35 |   12 |
| r3-fra3-de.as5405.net      - 0  |  200 |  200 |   12 |   15 |   38 |   14 |
| core01.fra02.ntg-it.net    - 0  |  200 |  200 |   16 |   20 |   42 |   18 |
| 92.249.48.42               - 0  |  200 |  200 |   18 |   22 |   45 |   20 |
| emeraldhost.de             - 0  |  200 |  200 |   19 |   23 |   48 |   21 |
|_________________________________|______|______|______|______|______|______|
```

## Linux

1. **Installiere MTR über die Paketverwaltung deiner Distribution:**

    ```
    sudo apt install mtr        # Debian/Ubuntu
    sudo yum install mtr        # CentOS/RHEL
    sudo pacman -S mtr          # Arch Linux
    ```

2. **Führe folgenden Befehl aus:**

    ```
    mtr -s 1000 -r -c 200 DEINE-SERVER-IP
    ```

3. **Das Ergebnis wird direkt im Terminal ausgegeben. Kopiere es oder leite es in eine Datei um:**

    ```
    mtr -s 1000 -r -c 200 DEINE-SERVER-IP > mtr-ergebnis.txt
    ```

::: info Hinweis
Der folgende Output dient nur als Beispiel – dein Ergebnis wird je nach Standort und Anbieter anders aussehen.
:::

**Beispiel-Output (Linux):**

```
Start: 2026-02-19T14:30:00+0100
HOST:                          Loss%   Snt   Last   Avg  Best  Wrst StDev
  1.|-- 192.168.178.1           0.0%   200    0.8   1.5   0.5  14.2   1.3
  2.|-- 172.17.225.84           0.0%   200    8.1  10.2   7.0  28.4   2.8
  3.|-- r3-ber1-de.as5405.net   0.0%   200   10.3  13.1   9.5  35.7   3.4
  4.|-- r3-fra3-de.as5405.net   0.0%   200   12.5  15.3  11.2  38.1   3.6
  5.|-- core01.fra02.ntg-it.net 0.0%   200   16.2  20.1  14.8  42.5   4.1
  6.|-- 92.249.48.42            0.0%   200   18.4  22.0  16.5  45.3   3.8
  7.|-- emeraldhost.de          0.0%   200   19.1  23.2  17.0  48.6   4.0
```

## macOS

1. **Installiere MTR über Homebrew:**

    ```
    brew install mtr
    ```

2. **Führe folgenden Befehl aus:**

    ```
    sudo mtr -s 1000 -r -c 200 DEINE-SERVER-IP
    ```

3. **Kopiere das Ergebnis oder leite es in eine Datei um:**

    ```
    sudo mtr -s 1000 -r -c 200 DEINE-SERVER-IP > mtr-ergebnis.txt
    ```

## Trace in beide Richtungen (nur Rootserver)

::: info Info
Bei **Gameservern** und **TeamSpeak-Servern** ist nur ein Trace in Richtung **Client → Server** möglich, da kein Shell-Zugang besteht. Sende uns in diesem Fall nur den einen Trace.
:::

Bei einem **Rootserver** benötigt unser Support Traces in **beide Richtungen** für eine vollständige Analyse:

- **Client → Server:** Führe den Trace von deinem PC aus (wie oben beschrieben).
- **Server → Client:** Verbinde dich mit deinem Rootserver (per SSH oder Remotedesktop) und führe dort einen MTR-Trace mit **deiner eigenen IP-Adresse** als Ziel aus:

    ```
    mtr -s 1000 -r -c 200 DEINE-EIGENE-IP
    ```

::: tip Tipp
Deine eigene öffentliche IP-Adresse findest du z.B. unter [ifconfig.me](https://ifconfig.me).
:::

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
| **Loss% von Anfang an hoch** | Problem bei deinem eigenen ISP oder im lokalen Netzwerk |

## Häufige Fehler vermeiden

::: warning Wichtig
- **VPN oder Proxy vorher deaktivieren** – sonst wird die VPN-Route getestet, nicht deine tatsächliche Verbindung.
- **Trace während des Problems durchführen** – ein Trace Stunden nach dem Problem liefert keine verwertbaren Daten.
- **Mindestens 200 Pakete senden** – weniger ist nicht aussagekräftig genug für eine Analyse.
- **Firewall beachten** – manche lokale Firewalls blockieren ICMP-Pakete, was zu falschem 100% Loss führen kann. Deaktiviere testweise deine Firewall oder erlaube ICMP.
- **Bei Rootservern: beide Richtungen nicht vergessen** – nur mit Traces in beide Richtungen ist eine vollständige Analyse möglich.
:::

## Ergebnis an den Support senden

Sende uns folgende Informationen in deinem Support-Ticket:

1. **Den MTR-Trace** als Text oder Datei (bei Rootservern beide Richtungen)
2. **Datum und Uhrzeit**, zu der das Problem aufgetreten ist
3. **Kurze Problembeschreibung** – z.B. hoher Ping, Verbindungsabbrüche, Timeouts, Lag-Spikes
