---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Mindustry Servers"
description: "Backup eines Mindustry Servers erstellen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["mindustry"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/mindustry/add-mods", "gameserver/mindustry/add-savegame", "gameserver/mindustry/download-savegame", "gameserver/mindustry/join-server"]
---

Ein regelmäßiges Backup Deines Mindustry Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, einen überschriebenen Spielstand oder einen Mod, der Deine Karte unbrauchbar macht.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hochladen eines anderen Spielstands
- Vor dem Hinzufügen, Aktualisieren oder Entfernen von Mods und Plugins
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Was gehört zum Backup?

Mindustry legt alle Serverdaten im Ordner `config` ab:

| Pfad | Inhalt |
|------|--------|
| `/config/saves/` | Alle Spielstände als `.msav`-Dateien, inklusive der Auto-Saves |
| `/config/maps/` | Deine eigenen Karten |
| `/config/mods/` | Installierte Mods und Plugins |
| `/config/settings.bin` | Alle Servereinstellungen sowie Admin- und Bannliste |

> [!IMPORTANT]
> `settings.bin` ist eine Binärdatei und enthält unter anderem Deine Admins, Banns und die Whitelist. Es gibt in Mindustry **keine** Textdateien wie `admins.txt` oder `bans.json`. Bearbeite `settings.bin` niemals von Hand – sichere sie nur.

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!NOTE]
> Möchtest Du nur den Spielstand sichern, kannst Du die `.msav`-Dateien auch einzeln herunterladen: [Savegame herunterladen](/tutorials/gameserver/mindustry/download-savegame).

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. Mindustry schreibt Einstellungen sofort und Spielstände regelmäßig auf die Festplatte – eine Sicherung während des Betriebs kann einen unvollständigen Stand enthalten.

## Auto-Saves als zusätzliche Absicherung

Zusätzlich zu den Backups kann Dein Server in festen Abständen selbst speichern. Aktiviere die Funktion in der **Konsole** Deiner Verwaltung:

```text
config autosave true
```

| Einstellung | Standard | Bedeutung |
|-------------|----------|-----------|
| `autosave` | `false` | Schaltet die automatischen Speicherungen ein oder aus |
| `autosaveSpacing` | `300` | Abstand zwischen zwei Speicherungen in Sekunden |
| `autosaveAmount` | `10` | Anzahl der aufbewahrten Auto-Saves |

Die Dateien landen mit dem Präfix `auto_` in `/config/saves/`. Den zuletzt erstellten Auto-Save lädst Du mit:

```text
loadautosave
```

> [!NOTE]
> Auto-Saves ersetzen kein Backup: Sie liegen auf demselben Server und werden nach Erreichen der eingestellten Anzahl automatisch überschrieben.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
