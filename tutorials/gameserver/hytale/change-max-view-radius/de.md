---
slug: "max-view-radius-aendern"
language: "de"
title: "So änderst Du den Max View Radius auf einem Hytale Server"
description: "Max View Radius auf einem Hytale Server ändern"
tags: []
date: "2026-02-04"
visibility: "public"
updated: "2026-08-29"
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

Der View-Radius bestimmt, wie viele Chunks um einen Spieler herum geladen werden. Ein höherer Wert bedeutet eine größere Sichtweite, aber auch eine höhere Serverbelastung.

> [!TIP]
> **Hinweis**
>
> Stoppe Deinen Server bevor Du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.

## So änderst Du den Max View Radius

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
| 32 | Standard - hohe Serverbelastung |
| 16 | Empfohlen - gute Balance zwischen Sichtweite und Performance |
| 10 | Niedrig - für Server mit vielen Spielern oder wenig RAM |

> [!WARNING]
> Ein zu niedriger View-Radius kann das Spielerlebnis beeinträchtigen, da Spieler ihre Umgebung erst spät sehen. Ein Wert unter 10 wird nicht empfohlen.
