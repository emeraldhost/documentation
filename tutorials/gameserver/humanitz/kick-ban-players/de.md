---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem HumanitZ Server"
description: "Spieler auf einem HumanitZ Server kicken und bannen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["humanitz"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 6
related: ["gameserver/humanitz/add-savegame", "gameserver/humanitz/create-backup", "gameserver/humanitz/download-savegame", "gameserver/humanitz/join-server"]
---

Kicken und Bannen läuft bei HumanitZ über **RCON**. Chat-Befehle dafür gibt es nicht – die entsprechenden Befehle sind ausschließlich RCON-Befehle. Du musst RCON also einmalig einrichten, bevor Du Spieler entfernen kannst.

> [!NOTE]
> **Projektordner**
>
> Alle Pfade in dieser Anleitung beginnen mit dem Projektordner `HumanitZServer`. Läuft Dein Server noch auf einer älteren Version vor HumanitZ 1.0, heißt dieser Ordner stattdessen `TSSGame`. Prüfe per SFTP, welcher der beiden Ordner bei Dir vorhanden ist, und passe die Pfade entsprechend an.

## RCON einrichten

1. **Port prüfen**\
   RCON benötigt einen eigenen **TCP-Port**. Welcher Port dafür für Deinen Server zur Verfügung steht, siehst Du in der **Verwaltung** in der Port-Übersicht. Ist dort kein zusätzlicher Port hinterlegt, kannst Du einen über ein Support-Ticket anfragen.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Konfigurationsdatei öffnen**\
   Öffne folgende Datei:

   ```text
   /HumanitZServer/GameServerSettings.ini
   ```

5. **RCON aktivieren**\
   Trage im Abschnitt `[Host Settings]` folgende Werte ein:

   ```ini
   [Host Settings]
   RCONEnabled=true
   RConPort=<RCON-Port aus der Verwaltung>
   RCONPass="DeinRconPasswort"
   ```

6. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!WARNING]
> Behandle das RCON-Passwort wie ein Admin-Passwort: Wer es kennt, kann Deinen Server fernsteuern. Verwende ein eigenes, sicheres Passwort und teile es nur mit vertrauenswürdigen Personen.

> [!TIP]
> `RCONEnabled=true` solltest Du ohnehin gesetzt lassen: Nur mit aktiviertem RCON wird der Ping Deines Servers im Serverbrowser angezeigt.

## Mit einem RCON-Tool verbinden

HumanitZ nutzt eine zu Valve kompatible RCON-Umsetzung. Du kannst daher jeden gängigen RCON-Client verwenden.

1. **RCON-Tool öffnen**\
   Öffne ein RCON-Tool wie **mcrcon** oder einen vergleichbaren RCON-Client.

2. **Verbindungsdaten eingeben**
   - **Host:** die IP-Adresse Deines Servers (ohne Port)
   - **Port:** der RCON-Port aus der Verwaltung
   - **Passwort:** das Passwort aus `RCONPass`

3. **Befehle ausführen**\
   Nach erfolgreicher Verbindung kannst Du die untenstehenden Befehle ausführen.

## Spieler-ID ermitteln

Zum Kicken und Bannen benötigst Du die **Steam-ID** des Spielers. Diese liefert Dir der Befehl:

```text
Players
```

Die Ausgabe listet alle verbundenen Spieler mit Namen und Steam-ID auf.

> [!TIP]
> Auch die Datei `/HumanitZServer/PlayerIDMapped.txt` ordnet die IDs den Spielernamen zu. Wie Du eine [SteamID64](/tutorials/gameserver/steamid64-find-out) selbst herausfindest, steht in dieser Anleitung.

## Spieler kicken

```text
kick <SteamID>
```

Der Spieler wird vom Server getrennt, kann aber jederzeit wieder beitreten.

## Spieler bannen

```text
ban <SteamID>
```

Der Spieler wird sofort vom Server geworfen, in die Bannliste eingetragen und kann sich nicht mehr verbinden.

## Bann aufheben

```text
unban <SteamID>
```

Mit `fetchbanned` rufst Du vorher die Liste aller gebannten Steam-IDs ab.

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `Players` | Zeigt alle verbundenen Spieler mit Namen und Steam-ID |
| `kick <SteamID>` | Trennt einen Spieler vom Server |
| `ban <SteamID>` | Bannt einen Spieler und wirft ihn vom Server |
| `unban <SteamID>` | Hebt den Bann eines Spielers auf |
| `fetchbanned` | Zeigt die Liste aller gebannten Steam-IDs |
| `admin <Nachricht>` | Sendet eine Chat-Nachricht mit Admin-Tag |

## Bannliste als Datei bearbeiten

Die Banns Deines Servers liegen zusätzlich in einer Textdatei im Projektordner:

```text
/HumanitZServer/F_BannedPlayers.txt
```

Darin steht eine Steam-ID pro Zeile. Existiert die Datei noch nicht, kannst Du sie selbst anlegen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Datei bearbeiten**\
   Öffne `F_BannedPlayers.txt` per SFTP und trage eine Steam-ID pro Zeile ein – oder entferne eine Zeile, um einen Bann aufzuheben:

   ```text
   76561198012345678
   76561198087654321
   ```

3. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!WARNING]
> Die Datei wird beim Serverstart eingelesen. Änderungen im laufenden Betrieb greifen nicht sofort und können beim Stoppen des Servers überschrieben werden. Nutze für einen sofortigen Bann den RCON-Befehl `ban`.

## Global gebannte Spieler aussperren

Im Abschnitt `[Host Settings]` kannst Du zusätzlich die globale Bannliste aktivieren:

```ini
UseGlobalBanList=true
```

Dein Server weist damit Spieler ab, die auf den offiziellen Servern gebannt wurden.

## Whitelist einrichten

Möchtest Du Deinen Server nur für bestimmte Spieler öffnen, aktivierst Du im Abschnitt `[Host Settings]`:

```ini
OnlyAllowedPlayers=1
```

Die zugelassenen Spieler trägst Du anschließend mit einer Steam-ID pro Zeile in folgende Datei ein:

```text
/HumanitZServer/F_MVPAccess.txt
```

> [!IMPORTANT]
> Sobald `OnlyAllowedPlayers=1` gesetzt ist, kommen ausschließlich Spieler auf den Server, die in `F_MVPAccess.txt` stehen. Trage Dich deshalb selbst zuerst ein, bevor Du den Server startest.

> [!NOTE]
> **Reservierte Slots**
>
> Mit `ReserveSlots=<Anzahl>` reservierst Du Plätze auf einem vollen Server. Die dafür berechtigten Spieler trägst Du mit einer Steam-ID pro Zeile in `/HumanitZServer/F_ReservedSlots.txt` ein.

## Admin-Oberfläche im Spiel

> [!NOTE]
> Mit Adminrechten öffnest Du im Spiel über `/adminw` eine Admin-Oberfläche, über die sich Spieler ebenfalls verwalten lassen. Der genaue Klickweg ist nicht offiziell dokumentiert und kann sich mit Spiel-Updates ändern – der zuverlässige und dokumentierte Weg zum Kicken und Bannen ist RCON. Wie Du Adminrechte erhältst, steht unter [Admin hinzufügen](/tutorials/gameserver/humanitz/add-admin).
