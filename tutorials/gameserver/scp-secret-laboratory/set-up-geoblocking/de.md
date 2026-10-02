---
slug: "geoblocking-einrichten"
language: "de"
title: "So richtest Du Geoblocking auf Deinem SCP: Secret Laboratory Server ein"
description: "Geoblocking auf einem SCP: Secret Laboratory Server einrichten"
tags: []
date: "2026-10-02"
visibility: "public"
cta: "gameserver"
product_keys: ["scp-secret-laboratory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Geoblocking einrichten"
sort: 25
related: ["gameserver/scp-secret-laboratory/set-up-whitelist", "gameserver/scp-secret-laboratory/set-server-password", "gameserver/scp-secret-laboratory/edit-config-files", "gameserver/scp-secret-laboratory/read-server-log"]
---
Mit Geoblocking legst Du fest, aus welchen Ländern Spieler Deinem Server beitreten dürfen. Du kannst entweder nur bestimmte Länder zulassen oder einzelne Länder sperren. Alle Einstellungen dafür stehen in der Datei `config_gameplay.txt`. Die Grundlagen zum Bearbeiten der Konfigurationsdateien findest Du in der Anleitung [Konfigurationsdateien bearbeiten](/tutorials/gameserver/scp-secret-laboratory/edit-config-files).

> [!WARNING]
> Der Pfad zu den Konfigurationsdateien enthält den Game Port Deines Servers: `/.config/SCP Secret Laboratory/config/<Port>/`. Ersetze `<Port>` durch den tatsächlichen Game Port Deines Servers. Den Game Port findest Du in der Verwaltung unter **Übersicht**.

## Die Geoblocking-Einstellungen

In der `config_gameplay.txt` findest Du den Abschnitt `#Geoblocking`. Im Auslieferungszustand sieht er so aus:

```text
#Geoblocking
#If your server is on the public list, please refer to Verified Server Rules for more details.
#Modes: none, whitelist, blacklist
geoblocking_mode: none

#If enabled, players on the whitelist are able to ignore geoblocking.
geoblocking_ignore_whitelisted: true

#ISO country codes, eg. PL, US, DE
geoblocking_whitelist:
 - AA
 - AB
 - AC

geoblocking_blacklist:
 - AA
 - AB
 - AC
```

| Einstellung | Bedeutung |
|-------------|-----------|
| `geoblocking_mode` | `none` (Standard) – Geoblocking ist aus.<br>`whitelist` – nur Spieler aus den Ländern in `geoblocking_whitelist` dürfen beitreten.<br>`blacklist` – Spieler aus den Ländern in `geoblocking_blacklist` werden abgewiesen, alle anderen dürfen beitreten. |
| `geoblocking_ignore_whitelisted` | Bei `true` (Standard) umgehen Spieler aus Deiner `UserIDWhitelist.txt` das Geoblocking. |
| `geoblocking_whitelist` | Liste der erlaubten Länder für den Modus `whitelist` |
| `geoblocking_blacklist` | Liste der gesperrten Länder für den Modus `blacklist` |

Die Länder trägst Du als zweistellige ISO-Ländercodes ein, z.B. `DE` für Deutschland, `AT` für Österreich, `CH` für die Schweiz, `PL` für Polen oder `US` für die USA. Jedes Land steht in einer eigenen Zeile, eingerückt mit einem Leerzeichen und einem Bindestrich davor. Die Einträge `AA`, `AB` und `AC` sind nur Platzhalter und müssen ersetzt werden.

> [!NOTE]
> Es wird immer nur die Liste genutzt, die zum eingestellten Modus passt. Im Modus `whitelist` hat die `geoblocking_blacklist` also keine Wirkung und umgekehrt.

## Geoblocking einrichten

1. **Game Port herausfinden**\
   Öffne die Verwaltung Deines Servers und notiere Dir den Game Port aus der **Übersicht**.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Konfigurationsdatei öffnen**\
   Öffne folgende Datei – ersetze `<Port>` durch Deinen Game Port:

   ```text
   /.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt
   ```

   Suche darin den Abschnitt `#Geoblocking`.

5. **Modus wählen**\
   Setze `geoblocking_mode` auf `whitelist`, wenn Du nur bestimmte Länder zulassen möchtest, oder auf `blacklist`, wenn Du bestimmte Länder sperren möchtest:

   ```text
   geoblocking_mode: whitelist
   ```

6. **Länder eintragen**\
   Ersetze in der passenden Liste die Platzhalter `AA`, `AB` und `AC` durch die gewünschten Ländercodes. Du kannst beliebig viele Zeilen ergänzen oder entfernen.

7. **Server starten**\
   Speichere die Datei und starte Deinen Server über die Verwaltung.

> [!TIP]
> **Beispiel**
>
> So lässt Du nur Spieler aus Deutschland, Österreich und der Schweiz auf Deinen Server:
>
> ```text
> geoblocking_mode: whitelist
>
> geoblocking_ignore_whitelisted: true
>
> geoblocking_whitelist:
>  - DE
>  - AT
>  - CH
> ```

> [!WARNING]
> Mit dem Modus `whitelist` sperrst Du auch Dich selbst aus, wenn Du Dich gerade in einem Land aufhältst, das nicht auf der Liste steht. Trage Deine eigene ID am besten in die `UserIDWhitelist.txt` ein und lass `geoblocking_ignore_whitelisted` auf `true` – dann kommst Du trotzdem auf Deinen Server. `enable_whitelist` musst Du dafür nicht aktivieren.

## Ausnahmen vom Geoblocking

**Spieler auf der Whitelist:** Steht `geoblocking_ignore_whitelisted` auf `true`, dürfen alle Spieler aus der `UserIDWhitelist.txt` unabhängig von ihrem Land beitreten. So kannst Du einzelnen Freunden aus dem Ausland den Zugang erlauben, ohne ihr ganzes Land freizugeben.

Für die Ausnahme vom Geoblocking reicht es, die ID in die `UserIDWhitelist.txt` im selben Port-Ordner einzutragen (eine ID pro Zeile, z.B. `76561198000000001@steam`). `enable_whitelist` muss dafür nicht aktiviert werden – lässt Du es auf `false`, können weiterhin alle anderen Spieler aus erlaubten Ländern beitreten.

> [!WARNING]
> Das Dateiformat der `UserIDWhitelist.txt` zeigt Dir die Anleitung [Whitelist einrichten](/tutorials/gameserver/scp-secret-laboratory/set-up-whitelist). Möchtest Du nur die Ausnahme vom Geoblocking, überspringe dort den Schritt, in dem `enable_whitelist` auf `true` gesetzt wird. Sonst können nur noch Spieler aus der `UserIDWhitelist.txt` beitreten.

**Northwood-Ban-Team:** In der Datei `config_remoteadmin.txt` im selben Port-Ordner gibt es die Einstellung (Standard `true`):

```text
enable_banteam_bypass_geoblocking: true
```

Damit können Mitglieder des offiziellen Ban-Teams von Northwood Dein Geoblocking umgehen. Lass diese Einstellung auf `true`.

> [!IMPORTANT]
> Ist Dein Server verifiziert und in der öffentlichen Serverliste sichtbar, gelten für Geoblocking die Verified Server Rules von Northwood. Der Kommentar in der `config_gameplay.txt` weist ausdrücklich darauf hin. Prüfe die Regeln, bevor Du Geoblocking auf einem öffentlichen Server aktivierst. Mehr zur Verifizierung findest Du in der Anleitung [Server verifizieren lassen](/tutorials/gameserver/scp-secret-laboratory/get-server-verified).

## Abgewiesene Spieler erkennen

Versucht ein Spieler, aus einem gesperrten Land beizutreten, wird er abgewiesen und der Server vermerkt den Versuch in der Konsole der Verwaltung und im Server-Log, z.B.:

```text
Player 76561198000000001@steam (203.0.113.10) tried joined from blocked country US.
```

So kannst Du prüfen, ob Dein Geoblocking wie gewünscht greift. Wie Du das Log ausliest, erfährst Du in der Anleitung [Server-Log auslesen](/tutorials/gameserver/scp-secret-laboratory/read-server-log).

> [!NOTE]
> Geoblocking wird nur beim Beitreten geprüft. Spieler, die bereits verbunden sind, werden nach einer Änderung nicht entfernt – die neuen Regeln greifen erst, wenn sie sich neu verbinden.

## Weitere Möglichkeiten

Geoblocking schränkt den Zugang nach Ländern ein. Möchtest Du den Zugang auf einzelne Spieler beschränken, nutze die [Whitelist](/tutorials/gameserver/scp-secret-laboratory/set-up-whitelist). Warum es kein Server-Passwort gibt und welche Alternativen Du hast, erfährst Du in der Anleitung [Server ohne Passwort schützen](/tutorials/gameserver/scp-secret-laboratory/set-server-password).
