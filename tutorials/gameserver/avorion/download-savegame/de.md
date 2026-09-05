---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Avorion Servers herunter"
description: "Savegame von einem Avorion Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["avorion"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 4
related: ["gameserver/avorion/add-savegame", "gameserver/avorion/create-backup", "gameserver/avorion/join-server", "gameserver/avorion/kick-ban-players"]
---

Du kannst die Galaxie Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um sie auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Avorion speichert im laufenden Betrieb automatisch – lädst Du währenddessen herunter, kann die Galaxie unvollständig sein.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Gib vorher in der Konsole `/save` ein, damit der aktuelle Stand geschrieben wird.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server oder nutze den Datei-Browser in der Verwaltung.

3. **Galaxie-Ordner finden**\
   Wechsle in das Datenverzeichnis `/galaxy/` Deines Servers und öffne darin den Ordner mit dem Namen Deiner Galaxie. Du erkennst den richtigen Ordner an den Dateien `server.ini`, `admin.xml` und `modconfig.lua`.

   > [!NOTE]
   > **Welche Galaxie ist die richtige?**
   >
   > Den Namen Deiner aktuellen Galaxie findest Du in der **Verwaltung** unter den **Einstellungen** im Feld für den Galaxie-Namen (**Galaxy Name**). Der Ordner heißt exakt so.

4. **Ordner herunterladen**\
   Lade den **kompletten** Galaxie-Ordner mit allen enthaltenen Dateien und Unterordnern auf Deinen PC herunter.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!WARNING]
> Ein Spielstand ist immer der komplette Galaxie-Ordner. Einzelne Dateien daraus ergeben keinen nutzbaren Spielstand.

> [!TIP]
> **Download verkleinern**
>
> Der Unterordner `workshop` innerhalb der Galaxie enthält nur die vom Server automatisch heruntergeladenen Workshop-Mods. Diese lädt Dein Server beim nächsten Start selbst wieder herunter – Du kannst den Ordner beim Download also weglassen, wenn Du Zeit und Speicherplatz sparen möchtest.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du die Galaxie später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/avorion/add-savegame). Achte dabei darauf, dass der Ordnername und der eingetragene Galaxie-Name übereinstimmen.

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/avorion/create-backup).
