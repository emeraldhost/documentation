---
description: Learn how to create a network trace with MTR or WinMTR and send it to our support team to quickly analyze network issues.
---

# How to Create a Network Trace with MTR

MTR is a network diagnostic tool that combines the functions of traceroute and ping. It shows you the entire route of your data packets to the target server and measures packet loss and latency at each individual hop (intermediate station).

Our support team needs this data to specifically analyze and locate network problems.

::: tip Tip
Before creating a trace, check our **[status page](https://status.emeraldhost.de)** first to see if there is a known issue.
:::

## Prerequisites

- **Server IP address** – you can find this in your dashboard under server management
- **MTR installed** – WinMTR for Windows, `mtr` for Linux/macOS

## Windows – WinMTR

1. **Download [WinMTR](https://winmtr.net/) and start the program.**

2. **Enter your server IP address in the `Host` field.**

3. **Click `Start` and wait until at least 200 packets have been sent.**
   - You can see the number of sent packets in the `Sent` column.

4. **Click `Stop` and then `Export TEXT` to save the result.**

::: info Note
The following output is just an example – your result will look different depending on your location and provider.
:::

**Example output (WinMTR):**

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

1. **Install MTR via your distribution's package manager:**

    ```
    sudo apt install mtr        # Debian/Ubuntu
    sudo yum install mtr        # CentOS/RHEL
    sudo pacman -S mtr          # Arch Linux
    ```

2. **Run the following command:**

    ```
    mtr -s 1000 -r -c 200 YOUR-SERVER-IP
    ```

3. **The result is displayed directly in the terminal. Copy it or redirect it to a file:**

    ```
    mtr -s 1000 -r -c 200 YOUR-SERVER-IP > mtr-result.txt
    ```

::: info Note
The following output is just an example – your result will look different depending on your location and provider.
:::

**Example output (Linux):**

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

1. **Install MTR via Homebrew:**

    ```
    brew install mtr
    ```

2. **Run the following command:**

    ```
    sudo mtr -s 1000 -r -c 200 YOUR-SERVER-IP
    ```

3. **Copy the result or redirect it to a file:**

    ```
    sudo mtr -s 1000 -r -c 200 YOUR-SERVER-IP > mtr-result.txt
    ```

## Trace in Both Directions (VPS Only)

::: info Info
For **game servers** and **TeamSpeak servers**, only a trace in the direction **client → server** is possible, as there is no shell access. In this case, just send us the one trace.
:::

For a **VPS**, our support team needs traces in **both directions** for a complete analysis:

- **Client → Server:** Run the trace from your PC (as described above).
- **Server → Client:** Connect to your VPS (via SSH or Remote Desktop) and run an MTR trace with **your own IP address** as the target:

    ```
    mtr -s 1000 -r -c 200 YOUR-OWN-IP
    ```

::: tip Tip
You can find your own public IP address at [ifconfig.me](https://ifconfig.me).
:::

## Columns Explained

| Column   | Meaning                                                                   |
|----------|---------------------------------------------------------------------------|
| **HOST** | Router or server on the route (hostname or IP address)                    |
| **Loss%**| Packet loss in percent – the most important value for analysis            |
| **Snt**  | Number of packets sent (should be 200)                                    |
| **Last** | Latency of the last received packet in milliseconds                       |
| **Avg**  | Average latency in milliseconds                                           |
| **Best** | Lowest measured latency                                                   |
| **Wrst** | Highest measured latency                                                  |
| **StDev**| Standard deviation – high values indicate an unstable connection          |

## Interpreting Results

| Observation | Meaning |
|---|---|
| **High Loss% at the last hop** | Problem at the target server or on the last mile |
| **Loss% consistently high from a specific hop onwards** | Problem at that hop or the responsible transit provider |
| **Loss% only at a middle hop, then 0% again** | Usually harmless – many routers rate-limit ICMP responses and drop ping packets, but forward other traffic normally |
| **Avg increases sharply from a specific hop** | Possible bottleneck at that provider |
| **High Loss% from the very first hop** | Problem with your own ISP or local network |

## Common Mistakes to Avoid

::: warning Important
- **Disable VPN or proxy first** – otherwise the VPN route is tested, not your actual connection.
- **Run the trace while the problem is occurring** – a trace hours after the problem provides no useful data.
- **Send at least 200 packets** – fewer packets are not meaningful enough for analysis.
- **Check your firewall** – some local firewalls block ICMP packets, which can cause false 100% loss. Temporarily disable your firewall or allow ICMP.
- **For VPSs: don't forget both directions** – only with traces in both directions is a complete analysis possible.
:::

## Sending Results to Support

Send us the following information in your support ticket:

1. **The MTR trace** as text or file (for VPSs, both directions)
2. **Date and time** when the problem occurred
3. **Brief problem description** – e.g. high ping, connection drops, timeouts, lag spikes
