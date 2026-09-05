---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem Eco Server hinzu"
description: "Mods auf einem Eco Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["eco"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 3
related: ["gameserver/eco/add-admin", "gameserver/eco/add-savegame", "gameserver/eco/create-backup", "gameserver/eco/download-savegame"]
---

Eco bringt ein eigenes Mod-System mit. Mods werden ausschließlich auf dem Server installiert – Deine Mitspieler müssen nichts herunterladen, der Client bekommt alles Nötige beim Beitreten vom Server.

> [!WARNING]
> Stoppe Deinen Server, bevor Du Mods hinzufügst oder entfernst. Der Server liest den Mod-Ordner nur beim Start ein.

## Mods herunterladen

Die offizielle Plattform für Eco-Mods ist **mod.io**.

1. **mod.io öffnen**\
   Rufe [mod.io/g/eco](https://mod.io/g/eco) auf und suche Dir die gewünschte Mod aus.

2. **Version prüfen**\
   Achte darauf, dass die Mod zur Version Deines Servers passt. Nach einem Spielupdate können ältere Mods Fehler verursachen oder den Serverstart verhindern.

3. **Mod herunterladen**\
   Lade die Mod herunter. In der Regel erhältst Du eine ZIP-Datei mit einer oder mehreren `.dll`-Dateien und gegebenenfalls eigenen Konfigurationsdateien.

4. **Anleitung der Mod lesen**\
   Sieh Dir die Beschreibung der Mod an. Dort steht, in welchen Ordner die Dateien gehören und ob die Mod weitere Mods voraussetzt.

## Mods hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Mod entpacken**\
   Entpacke die heruntergeladene ZIP-Datei auf Deinem PC. Hochgeladen werden die entpackten Dateien – eine ZIP-Datei wird vom Server nicht ausgewertet.

4. **Dateien hochladen**\
   Lade die Dateien in folgendes Verzeichnis hoch:

   ```text
   /Mods/
   ```

   > [!NOTE]
   > **Unterordner beachten**
   >
   > Die meisten Mods gehören direkt in den Ordner `Mods`. Manche Mods verlangen laut ihrer Anleitung stattdessen den Unterordner `Mods/UserCode/`. Halte Dich immer an die Angaben der jeweiligen Mod.

5. **Server starten**\
   Starte Deinen Server. Beim Start werden die Mods geladen.

> [!TIP]
> **Übersetzungen**
>
> Übersetzungsdateien gehören nicht in den Hauptordner, sondern nach `/Mods/Translations/`.

## Mods entfernen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Dateien löschen**\
   Lösche die Dateien beziehungsweise den Ordner der Mod aus `/Mods/`.

3. **Server starten**\
   Starte Deinen Server neu, damit die Mod vollständig entladen wird.

> [!IMPORTANT]
> Mods können Gegenstände, Rezepte und Weltobjekte hinzufügen. Entfernst Du eine Mod aus einer laufenden Welt, verschwinden alle davon abhängigen Inhalte. Erstelle vorher ein [Backup](/tutorials/gameserver/eco/create-backup).

## Mods über die Konfiguration steuern

Die Datei `/Configs/ModKit.eco` bestimmt, wie der Server mit Mods umgeht:

| Einstellung | Bedeutung |
|-------------|-----------|
| `WhitelistEnabled` | Legt fest, ob nur ausgewählte Mods geladen werden. Ist die Option deaktiviert, lädt der Server alle vorhandenen Mods |
| `Whitelist` | Liste der `.dll`-Dateinamen, die geladen werden sollen |
| `SubscribedMods` | Liste der mod.io-IDs, die dieser Server abonniert hat |
| `MaxNumberOfDownloadRequests` | Wie viele Clients gleichzeitig Mods herunterladen dürfen |

> [!NOTE]
> **Datei existiert nicht?**
>
> In `/Configs/` liegt zu jeder Konfiguration zusätzlich eine Datei mit der Endung `.eco.template`. Diese Vorlage enthält nur die Standardwerte und wird vom Server nicht gelesen. Fehlt `ModKit.eco`, kopiere `ModKit.eco.template` und benenne die Kopie in `ModKit.eco` um.

> [!WARNING]
> Änderungen an den Konfigurationsdateien werden erst mit einem **Neustart des Servers** übernommen.

## Müssen Spieler die Mods installieren?

> [!NOTE]
> Nein. Mods, die auch den Client betreffen – etwa neue Gegenstände oder Modelle –, müssen ausschließlich auf dem Server installiert sein. Der Client erhält die nötigen Informationen beim Verbinden automatisch. Der erste Beitritt kann dadurch etwas länger dauern.
>
> Einzelne Mods können laut eigener Beschreibung trotzdem eine Client-Komponente benötigen. Prüfe dazu die Anleitung der jeweiligen Mod.
