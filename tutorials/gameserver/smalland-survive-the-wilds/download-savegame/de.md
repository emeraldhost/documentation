---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Smalland Survive the Wilds Servers herunter"
description: "Savegame von einem Smalland Survive the Wilds Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["smalland-survive-the-wilds"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 2
related: ["gameserver/smalland-survive-the-wilds/add-savegame", "gameserver/smalland-survive-the-wilds/create-backup", "gameserver/smalland-survive-the-wilds/join-server"]
---

Du kannst den Spielstand Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Der Server schreibt im laufenden Betrieb in die Weltdatei – Du würdest sonst einen unvollständigen Spielstand herunterladen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /SMALLAND/Saved/SaveGames/Worlds/
   ```

4. **Dateien herunterladen**\
   Lade den **kompletten Ordner** `Worlds` auf Deinen PC herunter. Darin liegt für jede Welt eine Datei `<Weltname>.wld`.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!NOTE]
> **Welche Datei ist die richtige?**
>
> Welche Welt Dein Server lädt, steuert der **Weltname** in der **Verwaltung**. Steht dort `MeineWelt`, ist `MeineWelt.wld` Dein aktueller Spielstand. Lade im Zweifel einfach den ganzen Ordner herunter.

> [!NOTE]
> Charaktere liegen **nicht** auf dem Server, sondern lokal auf dem PC des jeweiligen Spielers. Über den Server sicherst Du nur die Weltdaten wie Gelände, Bauwerke und gezähmte Kreaturen. Jeder Spieler sichert seinen Charakter selbst, indem er den folgenden Ordner auf seinem PC kopiert:
>
> ```text
> %LOCALAPPDATA%\SMALLAND\Saved\SaveGames\
> ```

> [!NOTE]
> **Einstellungen**
>
> Eine Konfigurationsdatei musst Du nicht mitsichern. Smalland Survive the Wilds hat keine – alle Servereinstellungen werden in der **Verwaltung** gesetzt und beim Start an den Server übergeben.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/smalland-survive-the-wilds/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/smalland-survive-the-wilds/create-backup).
