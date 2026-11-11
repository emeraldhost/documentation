---
slug: "welt-ohne-spieler-pausieren"
language: "de"
title: "So legst Du fest, ob die Welt Deines Stormforge Servers ohne Spieler pausiert"
description: "Mit pauseWhenEmpty in der settings.json festlegen, ob die Welt Deines Stormforge Servers ohne Spieler pausiert oder weiterläuft."
tags: []
date: "2026-11-11"
visibility: "public"
cta: "gameserver"
product_keys: ["stormforge"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Welt ohne Spieler pausieren"
sort: 9
related: ["gameserver/stormforge/change-world-settings", "gameserver/stormforge/change-world-seed", "gameserver/stormforge/control-automatic-updates"]
---

Im Auslieferungszustand pausiert die Welt Deines Stormforge Servers, solange niemand online ist. Der Server selbst läuft dabei weiter. Das steuert der Schlüssel `pauseWhenEmpty` in der Datei `settings.json` im Hauptverzeichnis Deines Servers.

| Wert | Wirkung |
| --- | --- |
| `true` (Standard) | Die Welt pausiert, solange niemand online ist. |
| `false` | Die Welt läuft weiter, auch wenn niemand online ist. |

## pauseWhenEmpty ändern

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Bearbeite die Datei nur bei gestopptem Server, denn der laufende Server schreibt sie selbst neu.

2. **settings.json öffnen**\
   Öffne in der Verwaltung den [Datei-Browser](/tutorials/gameserver/use-file-browser) und wähle bei der Datei `settings.json` im Menü (⋮) **Bearbeiten**. Alternativ bearbeitest Du die Datei per [SFTP](/tutorials/gameserver/establish-sftp-connection):

   ```text
   /settings.json
   ```

3. **Wert anpassen**\
   Der Schlüssel `pauseWhenEmpty` steht auf der obersten Ebene der Datei, nicht im Block `worldSettings`. Damit die Welt ohne Spieler weiterläuft, setzt Du ihn auf `false`:

   ```json
   "pauseWhenEmpty": false,
   ```

   Schreibe `true` und `false` ohne Anführungszeichen und lasse das Komma am Zeilenende stehen.

4. **Speichern und Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!WARNING]
> Die Datei muss gültiges JSON bleiben. Was bei einer fehlerhaften `settings.json` passiert, liest Du unter [Welt-Einstellungen ändern](/tutorials/gameserver/stormforge/change-world-settings).
