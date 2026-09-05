---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Citadel Forged with Fire Servers"
description: "Backup eines Citadel Forged with Fire Servers erstellen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["citadel-forged-with-fire"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/citadel-forged-with-fire/add-admin", "gameserver/citadel-forged-with-fire/add-savegame", "gameserver/citadel-forged-with-fire/download-savegame", "gameserver/citadel-forged-with-fire/join-server"]
---

Ein regelmäßiges Backup Deines Citadel Forged with Fire Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, einen versehentlich überschriebenen Spielstand oder eine fehlerhafte Konfiguration.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hochladen eines anderen Spielstands
- Vor Aufräumarbeiten in der Welt, etwa dem Löschen von Charakteren oder Bauwerken
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!NOTE]
> Möchtest Du nur den Spielstand sichern, kannst Du den Savegame-Ordner auch einzeln herunterladen: [Savegame herunterladen](/tutorials/gameserver/citadel-forged-with-fire/download-savegame).

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. Dein Server speichert im laufenden Betrieb automatisch – eine Sicherung während des Betriebs kann einen unvollständigen Spielstand enthalten.

> [!TIP]
> **Vorher speichern lassen**
>
> Möchtest Du nicht auf die nächste automatische Speicherung warten, kannst Du als eingeloggter Admin im Chat den Befehl `/admin_autosave` ausführen. Der Server schreibt damit die Charakterdaten aller aktuell verbundenen Spieler sofort weg. Stoppe Deinen Server anschließend trotzdem, bevor Du das Backup erstellst. Wie Du Adminrechte erhältst, steht unter [Admin hinzufügen](/tutorials/gameserver/citadel-forged-with-fire/add-admin).

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
