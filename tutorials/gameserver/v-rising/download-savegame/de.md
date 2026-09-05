---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines V Rising Servers herunter"
description: "Savegame von einem V Rising Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["v-rising"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 6
related: ["gameserver/v-rising/add-admin", "gameserver/v-rising/add-mods", "gameserver/v-rising/install-bepinex", "gameserver/v-rising/add-savegame"]
---

Du kannst das Savegame Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung, zum Archivieren eines Spielstands oder um ihn auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Während der Server läuft, speichert er regelmäßig – Du würdest sonst einen unvollständigen oder beschädigten Spielstand herunterladen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   Saves/v1
   ```

4. **Savegame-Ordner herunterladen**\
   Öffne den Ordner Deines Savegames und lade alle darin enthaltenen Dateien auf Deinen PC herunter. Am einfachsten lädst Du den kompletten Savegame-Ordner mitsamt Inhalt herunter, damit nichts fehlt.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!TIP]
> Im Verzeichnis `Saves/v1` liegt für jede Welt ein eigener Ordner. In der Regel findest Du dort nur einen Ordner – bei mehreren erkennst Du den aktiven Spielstand am neuesten Änderungsdatum.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/v-rising/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/v-rising/create-backup).
