---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines BeamMP Servers herunter"
description: "Savegame von einem BeamMP Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["beammp"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 10
related: ["gameserver/beammp/change-server-version", "gameserver/beammp/create-backup", "gameserver/beammp/enable-chat-logging", "gameserver/beammp/enable-private-mode"]
---

BeamMP basiert auf der BeamNG.drive Sandbox und verwendet keine persistenten Welt-Savegames. Herunterladen kannst Du daher die serverseitigen Map- und Ressourcen-Dateien – zum Beispiel als zusätzliche Sicherung, zum Archivieren oder um sie auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Während der Server läuft, greift er auf die Dateien zu – Du würdest sonst einen unvollständigen oder beschädigten Stand herunterladen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /Resources/Client/
   ```

4. **Dateien herunterladen**\
   Lade den kompletten Inhalt des Verzeichnisses auf Deinen PC herunter. Darin liegen Deine Custom-Map-Dateien, die der Server an die Spieler ausliefert.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!TIP]
> Da BeamMP auf der BeamNG.drive Sandbox basiert, gibt es keine persistenten Welt-Savegames. Der Spielfortschritt wird nicht serverseitig gespeichert – es gibt also außer den Dateien in `/Resources/Client/` keinen Spielstand, den Du sichern könntest.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du die Dateien später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/beammp/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/beammp/create-backup).
