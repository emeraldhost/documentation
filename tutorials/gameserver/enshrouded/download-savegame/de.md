---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Enshrouded Servers herunter"
description: "Savegame von einem Enshrouded Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["enshrouded"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 5
related: ["gameserver/enshrouded/control-automatic-updates", "gameserver/enshrouded/create-backup", "gameserver/enshrouded/enable-text-chat", "gameserver/enshrouded/enable-voice-chat"]
---

Du kannst den Spielstand Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung, zum Archivieren oder um ihn auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Während der Server läuft, speichert er regelmäßig – Du würdest sonst einen unvollständigen oder beschädigten Spielstand herunterladen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in den Speicherordner `savegame`.

4. **Dateien herunterladen**\
   Lade beide Dateien Deiner Welt auf Deinen PC herunter: `3ad85aea` und `3ad85aea_info`. Nur zusammen ergeben sie einen vollständigen Spielstand – lade also niemals nur eine der beiden Dateien.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!TIP]
> **Den richtigen Ordner finden**
>
> Standardmäßig liegt der Spielstand im Ordner `savegame`. Falls Du den Standardordner in den Server-Einstellungen geändert hast, wechsle stattdessen in den von Dir gewählten Ordner für die Speicherungen.

> [!TIP]
> **Welt lokal weiterspielen**
>
> Möchtest Du die heruntergeladene Welt im Einzelspieler weiterspielen, benenne die Dateien wieder auf die Namen Deiner lokalen Welt um (also `3ad85aea` in z.B. `3bd85c7d` und `3ad85aea_info` in `3bd85c7d_info`) und lege sie im Steam `userdata` Ordner ab: `C:\Program Files (x86)\Steam\userdata\[DeineSteamID]\1203620\remote`. Ersetze `[DeineSteamID]` mit Deiner SteamID64.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/enshrouded/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/enshrouded/create-backup).
