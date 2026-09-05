---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Terraria Servers herunter"
description: "Savegame von einem Terraria Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["terraria"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 2
related: ["gameserver/terraria/add-savegame", "gameserver/terraria/create-backup", "gameserver/terraria/join-server", "gameserver/terraria/kick-ban-players"]
---

Du kannst die Welt Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung, zum Archivieren oder um sie auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Datei herunterlädst. Während der Server läuft, speichert er in regelmäßigen Abständen – Du würdest sonst eine unvollständige oder beschädigte Welt herunterladen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /saves/Worlds/
   ```

4. **Welt herunterladen**\
   Lade die `.wld`-Datei Deiner Welt auf Deinen PC herunter. Die komplette Welt steckt in dieser einen Datei.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!TIP]
> **Welche Datei ist die richtige?**
>
> Welche Welt geladen wird, erkennst Du am Feld **World Name** in den **Einstellungen** der Verwaltung. Steht dort z.B. `MeineWelt`, benötigst Du die Datei `MeineWelt.wld`.

> [!NOTE]
> **Sicherungsdateien**
>
> Der Server legt zusätzlich Sicherungen mit der Endung `.bak` im selben Ordner ab. Sie gehören zu Deiner Welt und enthalten einen etwas älteren Stand. Lade sie bei Bedarf mit herunter, wenn Du eine vollständige Kopie Deines Weltordners haben möchtest.

> [!TIP]
> **Welt lokal weiterspielen**
>
> Kopiere die heruntergeladene `.wld`-Datei auf Deinem PC nach `%userprofile%\Documents\My Games\Terraria\Worlds`, um die Welt im Einzelspieler zu öffnen.

> [!TIP]
> **Welt wieder einspielen**
>
> Möchtest Du die Welt später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/terraria/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/terraria/create-backup).
