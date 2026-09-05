---
slug: "cheat-modus-aktivieren"
language: "de"
title: "So aktivierst Du den Cheat-Modus auf Deinem 7 Days to Die Server"
description: "Cheat-Modus auf einem 7 Days to Die Server aktivieren"
tags: []
date: "2026-03-18"
visibility: "public"
cta: "gameserver"
product_keys: ["7-days-to-die"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Cheat-Modus aktivieren"
sort: 3
related: ["gameserver/7-days-to-die/create-backup", "gameserver/7-days-to-die/download-savegame", "gameserver/7-days-to-die/enable-whitelist", "gameserver/7-days-to-die/join-server"]
---

Der Cheat-Modus gibt Dir Zugriff auf das Kreativmenü und Debug-Optionen.

## Cheat-Modus für alle Spieler

> [!WARNING]
> Diese Einstellung aktiviert den Cheat-Modus für **alle Spieler** auf dem Server.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **serverconfig.xml öffnen**\
   Öffne die Datei `serverconfig.xml` im Hauptverzeichnis Deines Servers.

4. **Cheat-Modus aktivieren**\
   Suche die folgende Zeile und setze den Wert auf `true`:

   ```xml
   <property name="BuildCreate" value="true"/>
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

Im Spiel kannst Du nun mit `U` das Kreativmenü öffnen.

## Cheat-Modus nur für Admins

Wenn Du den Cheat-Modus **nur für Admins** aktivieren möchtest, lasse `BuildCreate` auf `false` und nutze stattdessen die Konsolenbefehle. Du benötigst dafür Berechtigungsstufe `0` (siehe [Admin hinzufügen](/tutorials/gameserver/7-days-to-die/add-admin)).

Drücke `F1`, um die Konsole zu öffnen:

| Befehl | Beschreibung |
|--------|-------------|
| `cm` | Kreativmenü aktivieren (öffne es mit `U`) |
| `dm` | Debug-Modus aktivieren |

### Debug-Modus Funktionen

Nach Eingabe von `dm` stehen Dir über `Esc` folgende Optionen zur Verfügung:

- **God Mode** – Unverwundbarkeit
- **Fly Mode** – Fliegen (mit `H` umschalten)
- **Unsichtbarkeit** – Für Zombies und Spieler unsichtbar
