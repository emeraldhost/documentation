---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Echoes of Elysium Servers herunter"
description: "Savegame von einem Echoes of Elysium Server herunterladen"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["echoes-of-elysium"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 2
related: ["gameserver/echoes-of-elysium/add-savegame", "gameserver/echoes-of-elysium/create-backup", "gameserver/echoes-of-elysium/join-server"]
---

Du kannst den Spielstand Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung, zum Archivieren oder um ihn auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Während der Server läuft, speichert er regelmäßig – Du würdest sonst einen unvollständigen oder beschädigten Spielstand herunterladen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /world/
   ```

   > [!NOTE]
   > Das Verzeichnis `world` liegt im Hauptverzeichnis Deines Servers, der vollständige Pfad lautet also `/home/container/world/`.

4. **Dateien herunterladen**\
   Lade den kompletten Inhalt dieses Verzeichnisses auf Deinen PC herunter. Übertrage immer alle Dateien und Unterordner, damit Dir kein Teil des Spielstands fehlt.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!NOTE]
> In `world` steckt der gesamte Spielstand Deiner Welt. Einen zusätzlichen Weltnamen oder eine separate Spielstandsdatei gibt es nicht – dieses Verzeichnis ist Dein Savegame.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/echoes-of-elysium/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/echoes-of-elysium/create-backup).
