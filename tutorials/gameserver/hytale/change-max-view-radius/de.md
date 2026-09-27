---
slug: "max-view-radius-aendern"
language: "de"
title: "So änderst Du den Max View Radius auf einem Hytale Server"
description: "Max View Radius auf einem Hytale Server ändern"
tags: []
date: "2026-02-04"
visibility: "public"
updated: "2026-09-27"
cta: "gameserver"
product_keys: ["hytale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Max View Radius ändern"
sort: 7
related: ["gameserver/hytale/change-gamemode", "gameserver/hytale/change-max-players", "gameserver/hytale/change-motd", "gameserver/hytale/change-server-name"]
---

Der Max View Radius bestimmt, wie viele Chunks um einen Spieler herum maximal geladen werden. Ein höherer Wert bedeutet eine größere Sichtweite, aber auch eine höhere Serverbelastung.

## So änderst Du den Max View Radius per Befehl

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Hytale-Servers.

2. **Befehl eingeben**\
   Gib folgenden Befehl in die Konsole ein:

   ```text
   maxviewradius 16
   ```

   Der Server übernimmt den neuen Wert sofort und speichert ihn in der `config.json`. Ein Neustart ist nicht nötig.

> [!NOTE]
> In der Konsole werden Befehle ohne `/` eingegeben. Im Spiel mit Admin-Rechten benötigst Du den `/` (z.B. `/maxviewradius 16`).

| Befehl | Beschreibung |
| ------ | ------------ |
| `maxviewradius` | Aktuellen Wert anzeigen |
| `maxviewradius <chunks>` | Neuen Wert setzen (1 bis 32) |
| `maxviewradius reset` | Auf den Standardwert 32 zurücksetzen |

## So änderst Du den Max View Radius per Konfiguration

> [!NOTE]
> Stoppe Deinen Server bevor Du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Konfigurationsdatei öffnen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und öffne die Datei `config.json` im Hauptverzeichnis.

3. **MaxViewRadius anpassen**\
   Suche nach der Einstellung `MaxViewRadius` und ändere den Wert:

   ```json
   "MaxViewRadius": 16
   ```

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die config.json nicht mehr laden kann.

4. **Server starten**\
   Starte Deinen Server, damit die Änderungen übernommen werden.

## Empfohlene Werte

| Wert | Beschreibung |
| ---- | ------------ |
| 32 | Standard und Maximum - hohe Serverbelastung |
| 16 | Gute Balance zwischen Sichtweite und Performance |
| 12 | Empfehlung von Hytale für Performance und Gameplay (384 Blöcke) |
| 10 | Niedrig - für Server mit vielen Spielern oder wenig RAM |

> [!NOTE]
> Der Wert muss zwischen 1 und 32 liegen. Der Befehl lehnt höhere Werte ab, und Werte außerhalb dieses Bereichs in der `config.json` setzt der Server beim Start automatisch auf die nächste Grenze (z.B. 64 auf 32).

> [!WARNING]
> Ein zu niedriger View-Radius kann das Spielerlebnis beeinträchtigen, da Spieler ihre Umgebung erst spät sehen. Ein Wert unter 10 wird nicht empfohlen.
