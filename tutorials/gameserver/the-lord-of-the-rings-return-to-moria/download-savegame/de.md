---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines The Lord of the Rings Return to Moria Servers herunter"
description: "Savegame von einem The Lord of the Rings Return to Moria Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["the-lord-of-the-rings-return-to-moria"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 2
related: ["gameserver/the-lord-of-the-rings-return-to-moria/add-savegame", "gameserver/the-lord-of-the-rings-return-to-moria/create-backup", "gameserver/the-lord-of-the-rings-return-to-moria/join-server", "gameserver/the-lord-of-the-rings-return-to-moria/kick-ban-players"]
---

Du kannst die Welt Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um sie auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Datei herunterlädst. Solange der Server läuft, schreibt er laufend in die Welt – ein Download währenddessen kann einen unvollständigen Spielstand ergeben.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Der Server speichert dabei und beendet sich sauber.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /Moria/Saved/SaveGamesDedicated/
   ```

4. **Weltdatei herunterladen**\
   Lade die gewünschte `MW_*.sav`-Datei auf Deinen PC herunter. Jede Welt Deines Servers ist genau eine solche Datei.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!NOTE]
> **Welche Datei ist die richtige?**
>
> Welche Welt Dein Server verwendet, steht im Abschnitt `[World]` der Datei `MoriaServerConfig.ini` im Hauptverzeichnis: als Dateiname bei `OptionalWorldFilename` oder – falls dort nichts eingetragen ist – über den Weltnamen bei `Name`.

> [!TIP]
> **Konfiguration mitsichern**
>
> Möchtest Du auch Deine Servereinstellungen sichern, lade zusätzlich diese Dateien aus dem Hauptverzeichnis herunter:
>
> ```text
> MoriaServerConfig.ini
> MoriaServerPermissions.txt
> MoriaServerRules.txt
> ```

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du die Welt später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/the-lord-of-the-rings-return-to-moria/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für vollständige Sicherungen Deines Servers kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/the-lord-of-the-rings-return-to-moria/create-backup).
