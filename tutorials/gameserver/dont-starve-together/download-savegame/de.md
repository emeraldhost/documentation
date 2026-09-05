---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Don’t Starve Together Servers herunter"
description: "Savegame von einem Don’t Starve Together Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["dont-starve-together"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 4
related: ["gameserver/dont-starve-together/add-savegame", "gameserver/dont-starve-together/create-backup", "gameserver/dont-starve-together/join-server", "gameserver/dont-starve-together/kick-ban-players"]
---

Du kannst den Spielstand Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung, zum Archivieren einer Welt oder um sie auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Während der Server läuft, speichert er regelmäßig – Du würdest sonst einen unvollständigen oder beschädigten Spielstand herunterladen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server oder nutze den Datei-Browser in der Verwaltung.

3. **Cluster-Ordner öffnen**\
   Wechsle in den Ordner, in dem die Datei `cluster.ini` liegt. Das ist Dein Cluster-Ordner. Darin findest Du die Shard-Ordner `Master` (Oberwelt) und, falls die Höhlen aktiv sind, `Caves`.

4. **Spielstand herunterladen**\
   Lade den kompletten Ordner `save` herunter:

   ```text
   <Cluster-Ordner>/Master/save/
   ```

5. **Höhlen herunterladen**\
   Sind die Höhlen auf Deinem Server aktiv, lade zusätzlich diesen Ordner herunter:

   ```text
   <Cluster-Ordner>/Caves/save/
   ```

6. **Server starten**\
   Starte Deinen Server wieder.

> [!NOTE]
> Der Spielstand ist ein Ordner und keine einzelne Datei. Lade ihn immer vollständig herunter, inklusive der Datei `saveindex` und des Unterordners `session`. Einzelne Dateien daraus sind für sich genommen nicht verwendbar.

> [!WARNING]
> **Oberwelt und Höhlen gehören zusammen**
>
> Nutzt Dein Server die Höhlen, sichere immer beide `save`-Ordner gemeinsam. Spielst Du später nur einen der beiden Stände wieder ein, passen Oberwelt und Höhlen nicht mehr zueinander.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/dont-starve-together/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/dont-starve-together/create-backup).
