---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Terraria tShock Servers"
description: "Backup eines Terraria tShock Servers erstellen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["terraria-tshock"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/terraria-tshock/add-mods", "gameserver/terraria-tshock/add-savegame", "gameserver/terraria-tshock/download-savegame", "gameserver/terraria-tshock/join-server"]
---

Ein regelmäßiges Backup Deines Terraria tShock Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, ein neues Plugin, einen Weltwechsel oder eine versehentlich überschriebene Welt.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor der Installation oder Aktualisierung von Plugins
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hochladen einer anderen Welt
- Bevor Du Deine Welt in den Hardmode überführst
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. Beim Stoppen speichert tShock die Welt sauber ab – so landet der aktuelle Stand vollständig in der Sicherung.

## Weltsicherungen von tShock nutzen

tShock legt zusätzlich in festen Abständen eigene Sicherungen Deiner Welt an. Sie liegen im Ordner `/tshock/backups/` und heißen nach dem Muster `<Welt>.wld.<Zeitstempel>.bak`, z.B.:

```text
MeineWelt.wld.2026-07-30T12.00.00Z.bak
```

Diese Sicherungen sind vollwertige Weltdateien – Du machst daraus wieder eine Welt, indem Du sie umbenennst.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Aktuelle Welt sichern**\
   Lade die vorhandene `.wld`-Datei aus dem Hauptverzeichnis herunter oder benenne sie um, falls Du zum aktuellen Stand zurückkehren möchtest.

4. **Sicherung wiederherstellen**\
   Kopiere die gewünschte Datei aus `/tshock/backups/` in das Hauptverzeichnis Deines Servers und benenne sie exakt so, wie das Feld **World Name** in den Einstellungen lautet – also z.B. `MeineWelt.wld`. Entferne dabei den Zeitstempel und die Endung `.bak`.

5. **Server starten**\
   Starte Deinen Server. Der wiederhergestellte Stand wird jetzt geladen.

> [!NOTE]
> Wie oft tShock sichert und wie lange die Sicherungen aufbewahrt werden, steuern die Werte `BackupInterval` und `BackupKeepFor` in der Datei `/tshock/config.json`. Beide Angaben erfolgen in Minuten. Setzt Du `BackupInterval` auf `0`, sind die Weltsicherungen von tShock deaktiviert.

> [!IMPORTANT]
> Die Sicherungen von tShock enthalten nur die **Welt**. Accounts, Gruppen, Banns und – bei aktivierten Server Side Characters – die Charakterdaten Deiner Spieler liegen in `/tshock/tshock.sqlite` und werden davon nicht erfasst. Für eine vollständige Sicherung nutze die Backup-Funktion der Verwaltung.

> [!NOTE]
> Möchtest Du nur die Welt sichern, kannst Du die `.wld`-Datei auch einzeln herunterladen: [Savegame herunterladen](/tutorials/gameserver/terraria-tshock/download-savegame).

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
