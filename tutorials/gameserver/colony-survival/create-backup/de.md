---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Colony Survival Servers"
description: "Backup eines Colony Survival Servers erstellen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["colony-survival"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/colony-survival/add-mods", "gameserver/colony-survival/add-savegame", "gameserver/colony-survival/download-savegame", "gameserver/colony-survival/join-server"]
---

Ein regelmäßiges Backup Deines Colony Survival Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, einen inkompatiblen Mod oder eine beschädigte Weltdatenbank.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor dem Hinzufügen, Aktualisieren oder Entfernen von Mods
- Vor dem Hochladen eines anderen Spielstands
- Vor größeren Änderungen an der Konfiguration
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. Colony Survival speichert die Welt in einer SQLite-Datenbank, die im laufenden Betrieb ständig geschrieben wird – eine Sicherung während des Betriebs kann unvollständig sein.

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

## Backup im laufenden Spiel erstellen

Colony Survival bringt einen eigenen Backup-Befehl mit, den Du im Spiel-Chat ausführen kannst. Er eignet sich gut als schnelle Zwischensicherung, ersetzt ein vollständiges Backup aber nicht.

1. **Chat öffnen**\
   Drücke im Spiel `T`, um den Chat zu öffnen.

2. **Backup erstellen**\
   Führe folgenden Befehl aus:

   ```text
   /backup
   ```

   > [!NOTE]
   > `/backup` speichert die Welt vorher automatisch auf die Festplatte und packt sie anschließend in ein ZIP-Archiv. Ein separates `/save` ist dafür nicht nötig.

3. **Welt zwischendurch speichern**\
   Möchtest Du nur den aktuellen Stand sichern, ohne ein Archiv zu erzeugen, reicht:

   ```text
   /save
   ```

4. **Backup herunterladen**\
   Der Server legt das ZIP-Archiv im Savegame-Verzeichnis Deines Servers ab:

   ```text
   /gamedata/savegames/
   ```

   Lade es per [SFTP](/tutorials/gameserver/establish-sftp-connection) auf Deinen PC herunter.

> [!NOTE]
> Für `/save` und `/backup` benötigst Du Adminrechte auf dem Server. Wie Du sie Dir gibst, steht unter [Admin hinzufügen](/tutorials/gameserver/colony-survival/add-admin).

> [!NOTE]
> Möchtest Du nur den Spielstand sichern, kannst Du den Weltordner auch direkt herunterladen: [Savegame herunterladen](/tutorials/gameserver/colony-survival/download-savegame).

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
