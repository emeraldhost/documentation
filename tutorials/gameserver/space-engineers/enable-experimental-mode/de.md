---
slug: "experimental-modus-aktivieren"
language: "de"
title: "So aktivierst Du den Experimental Modus auf Deinem Space Engineers Server"
description: "Experimental Modus auf einem Space Engineers Server aktivieren"
tags: []
date: "2026-07-08"
visibility: "public"
updated: "2026-09-27"
cta: "gameserver"
product_keys: ["space-engineers"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Experimental Modus aktivieren"
sort: 3
related: ["gameserver/space-engineers/configure-automatic-backups", "gameserver/space-engineers/download-world", "gameserver/space-engineers/enable-ingame-scripts", "gameserver/space-engineers/enable-remote-api"]
---

Der Experimental Modus schaltet erweiterte und experimentelle Funktionen frei. Für Mods brauchst Du ihn nicht: Seit Update 1.206 laufen Mods ohne Experimental Modus, auch Mods mit eigenem Code (siehe [Mods hinzufügen](/tutorials/gameserver/space-engineers/add-mods)). Einige Einstellungen schalten ihn dagegen automatisch ein (siehe [unten](#einstellungen-die-den-experimental-modus-erzwingen)).

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Experimental Modus aktivieren**\
   Setze die Einstellung **Experimental Modus** auf `true`, um ihn zu aktivieren, oder auf `false`, um ihn zu deaktivieren.

4. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu, damit die Änderung übernommen wird.

> [!WARNING]
> Das Feld allein schaltet den Experimental Modus nicht dauerhaft ein. Beim Laden der Welt behält der Server ihn nur, wenn eine der [unten genannten Einstellungen](#einstellungen-die-den-experimental-modus-erzwingen) ihn erfordert – sonst setzt er ihn wieder auf `false`. Ob er aktiv ist, siehst Du nach dem Start in der Konsole an der Zeile `Experimental mode: Yes`.

## Einstellungen, die den Experimental Modus erzwingen

Beim Laden der Welt prüft der Server Deine Einstellungen. Trifft einer der folgenden Punkte zu, schaltet er den Experimental Modus automatisch ein:

- **Ingame Skripte** steht in den **Einstellungen** auf `true` (siehe [Ingame Skripte erlauben](/tutorials/gameserver/space-engineers/enable-ingame-scripts)).
- **Maximale Spieler** steht in den **Einstellungen** auf mehr als `16`.
- Eine Welt-Einstellung in `Sandbox_config.sbc` erzwingt ihn, zum Beispiel `SyncDistance` über `3000`, `TotalPCU` über `600000` oder `BlockLimitsEnabled` auf `NONE`. Die vollständige Liste findest Du unter [Erzwungener Experimental Modus](/tutorials/gameserver/space-engineers/change-world-settings#erzwungener-experimental-modus).

> [!WARNING]
> Solange einer dieser Punkte zutrifft, kannst Du den Experimental Modus nicht abschalten. Steht **Experimental Modus** auf `false`, schaltet der Server ihn beim Laden trotzdem wieder ein. Soll Dein Server ohne Experimental Modus laufen, ändere zuerst die Einstellungen, die ihn erzwingen.

Ob der Experimental Modus aktiv ist und welche Einstellung ihn erzwingt, zeigt die Server-Konsole beim Laden der Welt, zum Beispiel:

```text
Experimental mode: Yes
Experimental mode reason: ExperimentalMode, EnableIngameScripts
```
