---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Barotrauma Servers herunter"
description: "Savegame von einem Barotrauma Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["barotrauma"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 7
related: ["gameserver/barotrauma/change-server-name", "gameserver/barotrauma/create-backup", "gameserver/barotrauma/enable-server-list", "gameserver/barotrauma/join-server"]
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
   /config/Multiplayer/
   ```

4. **Dateien herunterladen**\
   Lade die gewünschte `.save`-Datei auf Deinen PC herunter. Möchtest Du alle Kampagnen sichern, lade den kompletten Inhalt des Ordners herunter.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!TIP]
> Der Dateiname der `.save`-Datei entspricht dem Namen der Kampagne, den Du beim Auswählen des Savegames im Spiel siehst. Liegen mehrere `.save`-Dateien im Ordner, findest Du darüber die richtige.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/barotrauma/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/barotrauma/create-backup).
