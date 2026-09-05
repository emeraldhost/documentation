---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Mordhau Servers"
description: "Backup eines Mordhau Servers erstellen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["mordhau"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/mordhau/add-admin", "gameserver/mordhau/add-mods", "gameserver/mordhau/join-server", "gameserver/mordhau/kick-ban-players"]
---

Mordhau speichert keine Spielwelt und keinen Spielerfortschritt auf Deinem Server – die Charaktere der Spieler gehören zu ihren Accounts. Sichernswert ist deshalb vor allem Deine **Konfiguration**: In der `Game.ini` stehen unter anderem Deine Admins, Deine Banns, Deine Mod-Liste und Deine Kartenrotation. Geht diese Datei verloren, richtest Du Deinen Server komplett neu ein.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Bevor Du Mods hinzufügst oder entfernst
- Nachdem Du Deine Kartenrotation, Deine Admins oder Deine Regeln final eingerichtet hast
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

## Konfiguration einzeln sichern

Möchtest Du nur Deine Einstellungen sichern, lade Dir per [SFTP](/tutorials/gameserver/establish-sftp-connection) folgenden Ordner auf Deinen PC herunter:

```text
/Mordhau/Saved/Config/LinuxServer/
```

Darin liegen die `Game.ini` mit Deinen Servereinstellungen und die `Engine.ini`.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Konfiguration sicherst oder zurückspielst. Mordhau schreibt die `Game.ini` beim Beenden komplett neu – eine im laufenden Betrieb gesicherte oder hochgeladene Datei entspricht sonst nicht dem Stand, den Du erwartest.

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!NOTE]
> Zusätzlich zur Konfiguration legt Dein Server unter `/Mordhau/Saved/Logs/` seine Logdateien ab. Sie sind für ein Backup nicht nötig, helfen aber bei der Fehlersuche.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
