---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Solace Crafting Servers herunter"
description: "Savegame von einem Solace Crafting Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["solace-crafting"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 2
related: ["gameserver/solace-crafting/add-savegame", "gameserver/solace-crafting/create-backup", "gameserver/solace-crafting/join-server"]
---

Du kannst die Welt Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung, zum Archivieren oder um sie auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Während der Server läuft, speichert er regelmäßig – Du würdest sonst einen unvollständigen oder beschädigten Spielstand herunterladen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /.config/unity3d/Big Kitty Games/Solace Crafting/Worlds/
   ```

   > [!NOTE]
   > Der Ordner `.config` beginnt mit einem Punkt und ist damit versteckt. Aktiviere in Deinem SFTP-Programm die Anzeige versteckter Dateien, falls Du ihn nicht siehst.

4. **Weltordner herunterladen**\
   Lade den kompletten Ordner Deiner Welt mit allen enthaltenen Dateien auf Deinen PC herunter. Liegen mehrere Welten im Verzeichnis, lade im Zweifel alle Ordner herunter.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!TIP]
> **Die richtige Welt finden**
>
> Welche Welt Dein Server aktuell lädt, steht in der Datei `servercfg.dat` beim Wert `worldSaveToUse`. Der dort eingetragene Name entspricht dem Ordnernamen im Verzeichnis `Worlds`. Ohne Änderung ist das der Ordner `MultiplayerWorld`.

> [!TIP]
> **Konfiguration mitsichern**
>
> Möchtest Du auch Deine Servereinstellungen sichern, lade zusätzlich folgende Datei herunter:
>
> ```text
> /.config/unity3d/Big Kitty Games/Solace Crafting/servercfg.dat
> ```

> [!TIP]
> **Welt lokal weiterspielen**
>
> Möchtest Du die heruntergeladene Welt auf Deinem PC im Einzelspieler weiterspielen, legst Du den Weltordner in folgendem Verzeichnis ab:
>
> ```text
> %USERPROFILE%\AppData\LocalLow\Big Kitty Games\Solace Crafting\Worlds
> ```

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/solace-crafting/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/solace-crafting/create-backup).
