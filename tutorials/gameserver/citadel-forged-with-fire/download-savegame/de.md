---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Citadel Forged with Fire Servers herunter"
description: "Savegame von einem Citadel Forged with Fire Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["citadel-forged-with-fire"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 3
related: ["gameserver/citadel-forged-with-fire/add-savegame", "gameserver/citadel-forged-with-fire/create-backup", "gameserver/citadel-forged-with-fire/join-server", "gameserver/citadel-forged-with-fire/kick-ban-players"]
---

Du kannst den Spielstand Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Dein Server speichert im laufenden Betrieb automatisch – lädst Du währenddessen herunter, kann der Spielstand unvollständig sein.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /Citadel/Saved/SaveGames/
   ```

4. **Kompletten Ordner herunterladen**\
   Lade den gesamten Inhalt dieses Verzeichnisses mit allen Unterordnern und Dateien auf Deinen PC herunter.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!NOTE]
> **Was steckt im Savegame?**
>
> Der Ordner enthält die Weltdaten sowie die Daten aller Spieler. Die Charakterdaten sind nach der **SteamID64** des jeweiligen Spielers benannt. Wie Du Deine [SteamID64](/tutorials/gameserver/steamid64-find-out) herausfindest, erfährst Du hier.

> [!WARNING]
> Ein Spielstand ist immer der **komplette Ordnerinhalt**. Lade ihn stets vollständig herunter – einzelne Dateien daraus ergeben keinen nutzbaren Spielstand.

> [!TIP]
> **Konfiguration mitsichern**
>
> Möchtest Du auch Deine Servereinstellungen sichern, lade zusätzlich folgenden Ordner herunter:
>
> ```text
> /Config/
> ```
>
> Dort liegt unter anderem die `Game.ini` mit Deinen Servereinstellungen.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/citadel-forged-with-fire/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/citadel-forged-with-fire/create-backup).
