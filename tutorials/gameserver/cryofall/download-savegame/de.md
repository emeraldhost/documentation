---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines CryoFall Servers herunter"
description: "Savegame von einem CryoFall Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["cryofall"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 4
related: ["gameserver/cryofall/add-savegame", "gameserver/cryofall/create-backup", "gameserver/cryofall/join-server", "gameserver/cryofall/kick-ban-players"]
---

Die komplette Welt Deines CryoFall Servers liegt im Ordner `/Data/Saves/`. Du kannst ihn jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um die Welt auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. CryoFall speichert die Welt im laufenden Betrieb regelmäßig automatisch – Du würdest sonst einen unvollständigen Spielstand herunterladen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /Data/
   ```

4. **Savegame herunterladen**\
   Lade den kompletten Ordner `Saves` mit seinem gesamten Inhalt auf Deinen PC herunter:

   ```text
   /Data/Saves/
   ```

5. **Server starten**\
   Starte Deinen Server wieder.

> [!NOTE]
> Lade immer den **kompletten Ordner** herunter und picke keine einzelnen Dateien heraus. In `Saves` liegen die Weltdaten Deines Servers zusammen mit den vom Server angelegten Speicherständen – nur gemeinsam ergeben sie einen ladbaren Spielstand.

> [!TIP]
> **Konfiguration mitsichern**
>
> Möchtest Du auch Deine Servereinstellungen sichern, lade zusätzlich folgende Dateien aus dem Ordner `/Data/` herunter:
>
> ```text
> SettingsServer.xml
> ModsConfig.xml
> ServerRates.config
> ```
>
> Dort stehen unter anderem Deine Operatoren, die Zugriffslisten und die Spielraten.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/cryofall/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/cryofall/create-backup).
