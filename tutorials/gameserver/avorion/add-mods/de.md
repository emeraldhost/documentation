---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem Avorion Server hinzu"
description: "Mods auf einem Avorion Server hinzufügen"
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
short_title: "Mods hinzufügen"
sort: 3
related: ["gameserver/avorion/add-admin", "gameserver/avorion/add-savegame", "gameserver/avorion/create-backup", "gameserver/avorion/download-savegame"]
---

Avorion bringt ein eigenes Mod-System mit. Du musst die Mods nicht selbst hochladen – Dein Server lädt sie beim Start eigenständig aus dem Steam Workshop herunter. Gesteuert wird das über eine einzige Datei: die `modconfig.lua` im Ordner Deiner Galaxie.

> [!WARNING]
> Stoppe Deinen Server, bevor Du Mods hinzufügst oder entfernst. Nach einem Spielupdate können Mods inkompatibel sein und Abstürze verursachen. Erstelle vorher außerdem ein [Backup](/tutorials/gameserver/avorion/create-backup) Deiner Galaxie.

## Workshop-ID herausfinden

1. **Mod im Steam Workshop öffnen**\
   Öffne den [Steam Workshop für Avorion](https://steamcommunity.com/app/445220/workshop/) und suche die gewünschte Mod.

2. **ID aus der Adresse ablesen**\
   Die Workshop-ID ist die Zahl am Ende der URL. Bei `https://steamcommunity.com/sharedfiles/filedetails/?id=1691539727` lautet die ID also `1691539727`.

## Mods eintragen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server oder nutze den Datei-Browser in der Verwaltung.

3. **modconfig.lua öffnen**\
   Wechsle in den Ordner Deiner Galaxie – dort, wo auch `server.ini` und `admin.xml` liegen – und öffne die Datei:

   ```text
   /galaxy/<Galaxie-Name>/modconfig.lua
   ```

   > [!NOTE]
   > Der Galaxie-Ordner heißt genauso wie der in der **Verwaltung** eingetragene Galaxie-Name (**Galaxy Name**). Existiert die Datei noch nicht, starte Deinen Server einmal, damit die Ordnerstruktur angelegt wird, und stoppe ihn anschließend wieder.

4. **Mods eintragen**\
   Trage jede Mod mit ihrer Workshop-ID im Block `mods` ein:

   ```lua
   modLocation = ""
   forceEnabling = false
   mods =
   {
       {workshopid = "1691539727"},
       {workshopid = "1691591293"},
   }
   allowed =
   {
   }
   ```

   Den Block `allowed` kannst Du leer lassen. Möchtest Du zusätzlich clientseitige Mods erlauben, trägst Du sie dort in derselben Schreibweise ein: `{workshopid = "…"}`.

5. **Speichern und starten**\
   Speichere die Datei und starte Deinen Server. Beim Start lädt er die eingetragenen Mods herunter und aktiviert sie – der erste Start kann dadurch etwas länger dauern.

## Die Blöcke im Überblick

| Block | Bedeutung |
|-------|-----------|
| `mods` | Die Mods, die Dein Server lädt. Ein Eintrag pro Mod mit der jeweiligen Workshop-ID. |
| `allowed` | Optionale Liste clientseitiger Mods (überwiegend UI-Mods), die auf Deinem Server erlaubt sind. Kann leer bleiben. |
| `forceEnabling` | Erzwingt das Aktivieren der Mods. Der Wert bleibt auf `false`. |
| `modLocation` | Alternativer Ort für den Mod-Ordner. Bleibt der Wert leer, nutzt Dein Server den Standardordner `mods`. |

> [!WARNING]
> **forceEnabling auf false lassen**
>
> Die Entwickler von Avorion empfehlen ausdrücklich, `forceEnabling` deaktiviert zu lassen: Die Option richtet sich in erster Linie an Mod-Entwickler und kann zu beschädigten oder unbrauchbaren Spielständen führen.

## Müssen Spieler etwas tun?

Beim Beitritt bekommen Spieler die Mod-Liste Deines Servers angezeigt. Über die Schaltfläche **connect & download** lädt der Client die passenden Workshop-Mods automatisch herunter und installiert sie, bevor der Beitritt erfolgt.

> [!TIP]
> Heruntergeladene Workshop-Mods legt Dein Server innerhalb der Galaxie unter `workshop/content/445220/` ab. Daran kannst Du prüfen, ob eine Mod tatsächlich geladen wurde.

> [!IMPORTANT]
> Achte auf die Kommas und die geschweiften Klammern. Ist die `modconfig.lua` fehlerhaft, kann Dein Server die Datei nicht einlesen und startet nicht sauber. Kommentiere Mods zum Testen lieber einzeln aus, statt mehrere auf einmal zu ändern.
