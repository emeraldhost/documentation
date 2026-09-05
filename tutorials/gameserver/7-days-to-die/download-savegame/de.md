---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines 7 Days to Die Servers herunter"
description: "Savegame von einem 7 Days to Die Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["7-days-to-die"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 7
related: ["gameserver/7-days-to-die/change-map", "gameserver/7-days-to-die/create-backup", "gameserver/7-days-to-die/enable-cheat-mode", "gameserver/7-days-to-die/enable-whitelist"]
---

Du kannst den Spielstand Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung, zum Archivieren oder um ihn auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Während der Server läuft, speichert er regelmäßig – Du würdest sonst einen unvollständigen oder beschädigten Spielstand herunterladen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Weltdaten herunterladen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /.local/share/7DaysToDie/GeneratedWorlds/
   ```

   Lade den kompletten Ordner Deiner Welt (Terrain, Gebäude) auf Deinen PC herunter.

4. **Spielstand herunterladen**\
   Wechsle anschließend in folgendes Verzeichnis:

   ```text
   /Saves/
   ```

   Lade den kompletten Ordner Deines Spielstands (Spielerfortschritt, Platzierungen) auf Deinen PC herunter.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!TIP]
> Welche Ordner die richtigen sind, verrät Dir die Datei `serverconfig.xml`: Der Wert von `GameWorld` ist der Name Deines Welt-Ordners in `GeneratedWorlds/`, der Wert von `GameName` der Name Deines Spielstand-Ordners in `/Saves/`.

> [!WARNING]
> Lade immer beide Ordner herunter. Ohne die passenden Weltdaten lässt sich der Spielstand später nicht wiederherstellen.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/7-days-to-die/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/7-days-to-die/create-backup).
