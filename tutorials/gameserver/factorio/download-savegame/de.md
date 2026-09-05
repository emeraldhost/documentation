---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Factorio Servers herunter"
description: "Savegame von einem Factorio Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["factorio"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 4
related: ["gameserver/factorio/add-savegame", "gameserver/factorio/create-backup", "gameserver/factorio/join-server", "gameserver/factorio/kick-ban-players"]
---

Du kannst den Spielstand Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung, zum Archivieren einer Fabrik oder um sie auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Datei herunterlädst. Während der Server läuft, speichert er in regelmäßigen Abständen – Du würdest sonst einen unvollständigen oder beschädigten Spielstand herunterladen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /saves/
   ```

4. **Spielstand herunterladen**\
   Lade die `.zip`-Datei Deines Spielstands auf Deinen PC herunter. Der komplette Spielstand steckt in dieser einen Datei.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!TIP]
> **Welche Datei ist die richtige?**
>
> Welcher Spielstand geladen wird, erkennst Du am Feld **Save Name** in den **Einstellungen** der Verwaltung. Steht dort z.B. `gamesave`, benötigst Du die Datei `gamesave.zip`.

> [!NOTE]
> **Autosaves**
>
> Die automatischen Zwischenspeicherungen liegen im selben Ordner und heißen `_autosave1.zip`, `_autosave2.zip` und so weiter. Sie eignen sich, um zu einem etwas älteren Stand zurückzukehren.

> [!TIP]
> **Spielstand lokal weiterspielen**
>
> Kopiere die heruntergeladene `.zip`-Datei auf Deinem PC nach `%appdata%\Factorio\saves`, um die Fabrik im Einzelspieler zu öffnen.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/factorio/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/factorio/create-backup).
