---
slug: "crossplay-einschraenken"
language: "de"
title: "So schränkst Du Crossplay auf Deinem RuneScape: Dragonwilds Server ein"
description: "Crossplay auf einem RuneScape Dragonwilds Server einschränken"
tags: []
date: "2026-09-15"
visibility: "public"
cta: "gameserver"
product_keys: ["runescape-dragonwilds"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Crossplay einschränken"
sort: 10
related: ["gameserver/runescape-dragonwilds/join-server", "gameserver/runescape-dragonwilds/set-server-password", "gameserver/runescape-dragonwilds/set-owner-id", "gameserver/runescape-dragonwilds/kick-ban-players"]
---
Seit dem 1.0-Update ist Dein Server automatisch ein Crossplay-Server. Spieler auf PC, PlayStation 5, Xbox Series X|S und Nintendo Switch 2 können gemeinsam [beitreten](/tutorials/gameserver/runescape-dragonwilds/join-server), ohne dass Du in der Verwaltung etwas einstellen musst. Möchtest Du Deinen Server auf eine einzelne Plattform beschränken, kannst Du das optional per SFTP in der Konfigurationsdatei festlegen.

> [!NOTE]
> Für Crossplay gibt es kein Feld in den Einstellungen der Verwaltung. Die Einschränkung erfolgt ausschließlich über die Datei `DedicatedServer.ini`. Soll nur ein bestimmter Spielerkreis beitreten dürfen, kannst Du zusätzlich ein [Server Passwort](/tutorials/gameserver/runescape-dragonwilds/set-server-password) setzen.

## Mögliche Werte

Die Einstellung `PlatformPolicy` legt fest, welche Plattform Deinem Server beitreten darf:

| Wert | Bedeutung |
| ---- | --------- |
| `Crossplay` | Alle Plattformen dürfen beitreten (Standard) |
| `PC` | Nur PC-Spieler dürfen beitreten |
| `PlayStation` | Nur PlayStation-Spieler dürfen beitreten |
| `Xbox` | Nur Xbox-Spieler dürfen beitreten |
| `Nintendo` | Nur Nintendo-Switch-Spieler dürfen beitreten |

## Crossplay einschränken

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Konfigurationsdatei öffnen**\
   Öffne folgende Datei:

   ```text
   /RSDragonwilds/Saved/Config/LinuxServer/DedicatedServer.ini
   ```

4. **PlatformPolicy eintragen**\
   Füge unter der Sektion `[/Script/Dominion.DedicatedServerSettings]` die Zeile `PlatformPolicy=` mit dem gewünschten Wert aus der Tabelle hinzu. Ist die Zeile bereits vorhanden, passe nur den Wert an.

   > [!TIP]
   > **Beispiel**
   >
   > ```text
   > [/Script/Dominion.DedicatedServerSettings]
   > PlatformPolicy=PC
   > ```

   > [!WARNING]
   > Verwende genau die Schreibweise aus der Tabelle. Bei einem ungültigen Wert startet der Server nicht und im Log erscheint die Meldung `The [PlatformPolicy] value [...] is invalid. Valid values: ...` mit den gültigen Werten. Korrigiere in diesem Fall den Wert und starte den Server neu.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!NOTE]
> Die Verwaltung schreibt beim Start nur die Werte aus den Einstellungen (Owner ID, Namen und Passwörter) in die Datei. Deine `PlatformPolicy`-Zeile bleibt dabei erhalten.

## Einstellung überprüfen

Ob die Einstellung übernommen wurde, siehst Du im Log Deines Servers unter `/RSDragonwilds/Saved/Logs/RSDragonwilds.log`:

- `Session crossplay set to [...]` – zeigt die aktive Crossplay-Einstellung Deines Servers
- `PlatformPolicy not set - defaulting to Crossplay` – es ist kein Wert eingetragen, alle Plattformen dürfen beitreten

## Crossplay wieder für alle öffnen

Setze den Wert wieder auf `PlatformPolicy=Crossplay` oder entferne die Zeile aus der Datei und starte Deinen Server neu.

> [!TIP]
> **Fehlerbehebung**
>
> Wird ein Spieler auf Deinem Crossplay-Server mit einer Crossplay-Fehlermeldung abgewiesen, hat er Crossplay in den Einstellungen des Spiels deaktiviert und muss es dort wieder aktivieren. Im Log Deines Servers erscheint in diesem Fall `PreLogin rejected crossplay-disabled client from a crossplay server`.
