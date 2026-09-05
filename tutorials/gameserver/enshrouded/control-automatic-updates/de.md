---
slug: "automatische-updates-steuern"
language: "de"
title: "So steuerst Du die automatischen Updates Deines Enshrouded Servers"
description: "Automatische Updates auf einem Enshrouded Server steuern"
tags: []
date: "2026-08-13"
visibility: "public"
cta: "gameserver"
product_keys: ["enshrouded"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Automatische Updates steuern"
sort: 2
related: ["gameserver/enshrouded/adjust-difficulty", "gameserver/enshrouded/change-server-password", "gameserver/enshrouded/create-backup", "gameserver/enshrouded/download-savegame"]
---

Dein Enshrouded Server kann sich bei jedem Start selbst auf die aktuelle Version bringen. In der Verwaltung entscheidest Du über zwei Felder, ob das passiert – und ob die Serverdateien dabei zusätzlich auf Vollständigkeit geprüft und repariert werden.

| Feld | Werte | Standard | Bedeutung |
|------|-------|----------|-----------|
| `Auto Update` | `1` / `0` | `1` | `1` = der Server sucht bei jedem Start nach einer neuen Version und lädt sie, `0` = die installierte Version bleibt unverändert |
| `Serverdateien validieren` | `1` / `0` | `0` | `1` = die vorhandenen Serverdateien werden dabei zusätzlich geprüft, fehlende oder veränderte Dateien werden neu geladen, `0` = keine Prüfung |

> [!NOTE]
> Erstelle vor jedem Update und vor jedem Validieren ein Backup: [Backup erstellen](/tutorials/gameserver/enshrouded/create-backup). So kannst Du Deine Welt und Deine Konfiguration wiederherstellen, falls dabei etwas schiefgeht.

## Auto Update ein- oder ausschalten

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Wert eintragen**\
   Trage im Feld **Auto Update** den gewünschten Wert ein: `1` für automatische Updates, `0` um sie abzuschalten. Speichere die Einstellung.

4. **Server neu starten**\
   Starte Deinen Server neu, damit die Einstellung greift.

## Wann Du Auto Update abschalten solltest

- **Kein Versionssprung mitten in einer Session**\
  Jeder Neustart lädt sonst eine bereits erschienene neue Version nach. Solange `Auto Update` auf `0` steht, bleibt Dein Server auf der Version, die gerade installiert ist.

- **Ein Patch macht Dir Probleme**\
  Läuft Dein Server auf einer Version, mit der alles funktioniert, hältst Du ihn mit `0` genau dort fest, bis Keen Games nachbessert. `0` verhindert allerdings nur kommende Updates: Ein bereits installiertes Update lässt sich darüber nicht rückgängig machen.

> [!TIP]
> Ob ein Patch Deinen Server überhaupt betrifft, steht im Changelog: Keen Games schreibt bei reinen Client-Hotfixes ausdrücklich dazu, dass die dedizierten Server kein Update benötigen („Dedicated servers do not require an update“).

> [!WARNING]
> Lass `Auto Update` nur vorübergehend auf `0`. Deine Mitspieler bekommen die neue Version über Steam automatisch. Läuft Dein Server dann noch auf der alten Version, weist der Server-Browser ihn als „Version mismatch“ aus – gemeinsam spielen könnt ihr erst wieder, wenn Server und Spiel auf derselben Version sind. Setze den Wert deshalb rechtzeitig wieder auf `1`.

## Serverdateien validieren

Wenn Dein Server nach einem Update oder nach einem abgebrochenen Download nicht mehr startet, können Serverdateien fehlen oder beschädigt sein. Beim Validieren werden sie wiederhergestellt.

> [!WARNING]
> Das Validieren läuft nur mit, wenn **Auto Update** auf `1` steht. Steht **Auto Update** auf `0`, wird beim Start nichts geprüft – egal, was im Feld **Serverdateien validieren** eingetragen ist.

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Validieren aktivieren**\
   Trage im Feld **Serverdateien validieren** den Wert `1` ein und setze **Auto Update** auf `1`. Speichere die Einstellungen.

4. **Server neu starten**\
   Starte Deinen Server neu. Der Start dauert diesmal deutlich länger, weil jede einzelne Datei geprüft wird.

5. **Validieren wieder abschalten**\
   Trage im Feld **Serverdateien validieren** wieder `0` ein, sobald Dein Server sauber läuft.

> [!WARNING]
> Lass das Validieren nicht dauerhaft auf `1`. Jeder Start prüft dann erneut alle Dateien und Dein Server braucht spürbar länger, bis er erreichbar ist.

## Was beim Validieren passiert

Steam vergleicht jede installierte Datei mit der Vorgabe aus der Server-App und ersetzt alles, was fehlt oder verändert wurde. Dateien, die nicht zur Installation gehören, bleiben dabei unangetastet.

Für Dich heißt das:

- **Dein Spielstand bleibt erhalten**\
  Die Welt liegt im Ordner `savegame` (in der `enshrouded_server.json` als `saveDirectory` mit dem Standardwert `./savegame` eingetragen) und gehört damit nicht zur Steam-Installation.

- **Deine Konfiguration bleibt erhalten**\
  Die `enshrouded_server.json` gehört nicht zur Steam-Installation und wird beim Validieren nicht zurückgesetzt. Deine Usergruppen und Passwörter aus [Server Passwort ändern](/tutorials/gameserver/enshrouded/change-server-password) bleiben also bestehen.

- **Veränderte Spieldateien werden überschrieben**\
  Alles, was zur Installation der Server-App gehört, wird auf den Auslieferungszustand zurückgesetzt.

> [!TIP]
> Wenn Dein Server nach dem Validieren zwar startet, aber weiter ruckelt oder lagt, hilft Dir die Anleitung [Performance-Probleme auf Enshrouded Servern](/tutorials/gameserver/enshrouded/performance-problems-on-enshrouded-servers) weiter.
