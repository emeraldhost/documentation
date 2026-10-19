---
slug: "bepinex-installieren"
language: "de"
title: "So installierst Du BepInEx auf Deinem Valheim Server"
description: "BepInEx für Mods auf einem Valheim Server nutzen"
tags: []
date: "2026-04-10"
visibility: "public"
updated: "2026-10-19"
cta: "gameserver"
product_keys: ["valheim"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "BepInEx installieren"
sort: 3
related: ["gameserver/valheim/add-admin", "gameserver/valheim/download-savegame", "gameserver/valheim/add-mods", "gameserver/valheim/add-savegame"]
---

**BepInEx** ist das Mod-Framework für Valheim. Ohne BepInEx lädt Dein Server keine Mods.

> [!IMPORTANT]
> Auf einem normalen Valheim Server kannst Du BepInEx nicht selbst installieren. Unsere Server laufen unter Linux, und dort lädt BepInEx nur, wenn der Server mit einem speziellen Startbefehl gestartet wird. Lädst Du die Dateien von BepInEx einfach per SFTP hoch, startet Dein Server zwar normal, ignoriert aber alle Mods. Für Mods benötigst Du deshalb das Produkt **Valheim BepInEx**.

## Valheim BepInEx Server

Beim Produkt [Valheim BepInEx](https://emeraldhost.de/de/valheim-bepinex-server-mieten?utm_source=documentation&utm_medium=marketing&utm_campaign=bepinex-installieren) ist alles bereits eingerichtet:

- Bei der Installation des Servers wird automatisch die aktuelle Version des [BepInExPack für Valheim](https://thunderstore.io/c/valheim/p/denikson/BepInExPack_Valheim/) installiert.
- Der Server startet automatisch mit BepInEx. Du musst nichts weiter einrichten.
- Die übrigen Einstellungen in der Verwaltung, z.B. Server Name, Welt Name, Crossplay und Backups, funktionieren genauso wie beim normalen Valheim Server.

Mods lädst Du anschließend als `.dll`-Dateien in den Ordner `/BepInEx/plugins/` hoch. Wie das geht, erfährst Du unter [Mods hinzufügen](/tutorials/gameserver/valheim/add-mods).

> [!TIP]
> Du hast bereits einen normalen Valheim Server und möchtest auf Valheim BepInEx wechseln? Erstelle vorher ein [Backup](/tutorials/gameserver/valheim/create-backup) bzw. lade Deine Welt herunter (siehe [Savegame herunterladen](/tutorials/gameserver/valheim/download-savegame)) und melde Dich per [Support-Ticket](https://emeraldhost.de/de/support) bei uns.

## Prüfen, ob BepInEx geladen wird

1. **Konsole öffnen**   Öffne die Konsole in der Verwaltung Deines Servers und starte den Server.

2. **Startmeldungen prüfen**   Beim Start erscheinen in der Konsole Meldungen von BepInEx. Wird BepInEx geladen, legt es außerdem die Log-Datei `/BepInEx/LogOutput.log` an. Darin steht für jeden geladenen Mod eine Zeile wie:

   ```text
   [Info   :   BepInEx] Loading [BeispielMod 1.0.0]
   ```

> [!NOTE]
> Fehlt die Datei `/BepInEx/LogOutput.log` nach einem Neustart, wurde BepInEx nicht geladen. Prüfe in diesem Fall, ob Dein Server das Produkt Valheim BepInEx ist.

## Spieler auf Konsolen

Spieler auf Xbox, PlayStation und über den Game Pass können keine Mods installieren. Setzt ein Mod voraus, dass ihn auch die Spieler installiert haben, können diese Spieler Deinem Server nicht mehr beitreten. Mods, die nur auf dem Server laufen, sind davon nicht betroffen.
