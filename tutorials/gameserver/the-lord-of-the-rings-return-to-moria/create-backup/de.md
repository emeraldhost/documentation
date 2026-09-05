---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines The Lord of the Rings Return to Moria Servers"
description: "Backup eines The Lord of the Rings Return to Moria Servers erstellen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["the-lord-of-the-rings-return-to-moria"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 1
related: ["gameserver/the-lord-of-the-rings-return-to-moria/add-savegame", "gameserver/the-lord-of-the-rings-return-to-moria/download-savegame", "gameserver/the-lord-of-the-rings-return-to-moria/join-server", "gameserver/the-lord-of-the-rings-return-to-moria/kick-ban-players"]
---

Ein regelmäßiges Backup Deines Return to Moria Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, eine versehentlich überschriebene Weltdatei oder einen falsch eingetragenen Weltnamen in der Konfiguration.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der `MoriaServerConfig.ini`
- Vor dem Hochladen einer anderen Welt
- Vor dem Wechsel des Weltnamens oder der geladenen Weltdatei
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!NOTE]
> Möchtest Du nur die Welt sichern, kannst Du die Weltdatei auch einzeln herunterladen: [Savegame herunterladen](/tutorials/gameserver/the-lord-of-the-rings-return-to-moria/download-savegame).

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. Return to Moria speichert im laufenden Betrieb – eine Sicherung währenddessen kann eine unvollständige Welt enthalten.

> [!IMPORTANT]
> Stoppe Deinen Server immer über die **Verwaltung**. Nur dabei speichert der Server den aktuellen Stand und beendet sich sauber. Ein erzwungener Abbruch kann Fortschritt kosten und dazu führen, dass der nächste Start mehrere Minuten dauert, weil die alte Online-Session noch hängt.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
