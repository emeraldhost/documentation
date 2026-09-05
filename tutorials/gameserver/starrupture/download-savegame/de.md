---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines StarRupture Servers herunter"
description: "Savegame von einem StarRupture Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["starrupture"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 2
related: ["gameserver/starrupture/add-savegame", "gameserver/starrupture/create-backup", "gameserver/starrupture/join-server"]
---

Du kannst den Spielstand Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. StarRupture speichert im laufenden Betrieb in regelmäßigen Abständen automatisch – Du würdest sonst einen unvollständigen Spielstand herunterladen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /StarRupture/Saved/SaveGames/
   ```

   Öffne dort den Ordner mit dem Namen Deiner Session. Welche Session Dein Server verwendet, steht im Wert `SessionName` in der Datei `/DSSettings.txt`.

4. **Dateien herunterladen**\
   Lade beide Dateien des Spielstands auf Deinen PC herunter:

   ```text
   AutoSave0.sav
   AutoSave0.met
   ```

5. **Server starten**\
   Starte Deinen Server wieder.

> [!NOTE]
> Die beiden Dateien gehören zusammen: In der `.sav` steckt der eigentliche Spielstand mit Welt, Basis und Fortschritt, die `.met` enthält die zugehörigen Metadaten. Sichere sie deshalb immer gemeinsam – ohne die `.met` lässt sich der Spielstand später nicht laden.

> [!TIP]
> **Konfiguration mitsichern**
>
> Möchtest Du auch Deine Servereinstellungen sichern, lade zusätzlich folgende Datei aus dem Hauptverzeichnis herunter:
>
> ```text
> /DSSettings.txt
> ```
>
> Darin stehen unter anderem `SessionName`, `SaveGameName` und das Speicherintervall.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/starrupture/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/starrupture/create-backup).
