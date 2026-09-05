---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Windrose Servers herunter"
description: "Savegame von einem Windrose Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["windrose"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 7
related: ["gameserver/windrose/change-world-settings", "gameserver/windrose/create-backup", "gameserver/windrose/enable-direct-connection", "gameserver/windrose/join-server"]
---

Du kannst das Savegame Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung, zum Archivieren einer Welt oder um sie auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Während der Server läuft, speichert er regelmäßig – Du würdest sonst einen unvollständigen oder beschädigten Spielstand herunterladen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /R5/Saved/SaveProfiles/Default/RocksDB/<GameVersion>/Worlds/
   ```

   Der Platzhalter `<GameVersion>` entspricht der Version, mit der die Welt erstellt wurde.

4. **Welt-Ordner herunterladen**\
   Lade den kompletten `<WorldID>`-Ordner mit allen enthaltenen Dateien auf Deinen PC herunter. Einzelne Dateien reichen nicht aus – die Welt besteht aus dem gesamten Ordner.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!TIP]
> Der `<WorldID>`-Ordner trägt eine alphanumerische Zeichenkette als Namen. Welcher Ordner der richtige ist, erkennst Du an der [Island ID](/tutorials/gameserver/windrose/set-island-id) Deines Servers – sie entspricht dem Ordnernamen. Notiere Dir die `<GameVersion>` und die Island ID gleich mit, damit Du den Spielstand später wieder korrekt einspielen kannst.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/windrose/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/windrose/create-backup).
