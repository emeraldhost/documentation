---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem Space Engineers Server hinzu"
description: "Steam Workshop Mods auf einem Space Engineers Server hinzufügen"
tags: []
date: "2026-07-08"
visibility: "public"
cta: "gameserver"
product_keys: ["space-engineers"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 7
related: ["gameserver/space-engineers/add-admins", "gameserver/space-engineers/change-game-mode", "gameserver/space-engineers/change-max-players", "gameserver/space-engineers/change-server-description"]
---

Du kannst Steam-Workshop-Mods auf Deinem Server hinzufügen, um Blöcke, Fahrzeuge, Spielmechaniken und mehr zu ergänzen. Die Mods werden über ihre **Workshop-ID** in der Konfigurationsdatei Deiner Welt eingetragen – der Server lädt sie beim Start automatisch aus dem Steam Workshop herunter. Du musst also keine Mod-Dateien manuell hochladen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Konfigurationsdatei bearbeitest. Ein laufender Server kann Deine Änderungen beim Speichern oder Stoppen überschreiben.

## Workshop-ID finden

1. **Mod im Steam Workshop öffnen**\
   Öffne den [Steam Workshop für Space Engineers](https://steamcommunity.com/app/244850/workshop/) und rufe die gewünschte Mod auf.

2. **ID aus der URL kopieren**\
   Die Workshop-ID ist die Zahl am Ende der URL nach `?id=`:

   ```text
   https://steamcommunity.com/sharedfiles/filedetails/?id=123456789
   ```

   Die ID lautet hier `123456789`.

## Mods eintragen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server oder nutze den Datei-Browser in der Verwaltung.

3. **Konfigurationsdatei öffnen**\
   Öffne im Ordner Deiner Welt `Saves/World/` die Datei `Sandbox_config.sbc`.

4. **Mod-Liste einfügen**\
   Suche nach dem `<Mods>`-Block (bei einer neuen Welt steht dort `<Mods />`) und trage pro Mod einen `<ModItem>` ein. Ersetze `123456789` durch die jeweilige Workshop-ID:

   ```xml
   <Mods>
     <ModItem FriendlyName="Mod Name">
       <Name>123456789.sbm</Name>
       <PublishedFileId>123456789</PublishedFileId>
       <PublishedServiceName>Steam</PublishedServiceName>
     </ModItem>
   </Mods>
   ```

   - `<Name>` ist die Workshop-ID mit der Endung `.sbm`.
   - `<PublishedFileId>` ist die reine Workshop-ID ohne Endung.
   - `FriendlyName` ist optional und dient nur als Anzeigename.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server. Beim Start lädt der Server die Mods automatisch aus dem Steam Workshop herunter – den Fortschritt siehst Du in der Server-Konsole.

> [!NOTE]
> **Reihenfolge beachten**
>
> Die Reihenfolge bestimmt die Priorität: Mods **weiter oben** in der Liste überschreiben Mods weiter unten, wenn beide dieselbe Definition ändern. Ordne sich überschneidende Mods entsprechend an.

> [!TIP]
> **Experimental Modus & Skripte**
>
> Viele Mods benötigen den aktivierten [Experimental Modus](/tutorials/gameserver/space-engineers/enable-experimental-mode) – Mods mit eigenem Code (Skript-Mods) benötigen ihn zwingend. Aktiviere ihn, sobald Du Workshop-Mods verwendest.
>
> Skripte für **Programmierbare Blöcke** sind keine Mods und werden nicht in die Mod-Liste eingetragen – siehe [Ingame Skripte erlauben](/tutorials/gameserver/space-engineers/enable-ingame-scripts).

> [!WARNING]
> **Mods fehlen nach einem Neustart?**
>
> Öffne bei gestopptem Server erneut `Saves/World/Sandbox_config.sbc` und prüfe, ob Dein `<Mods>`-Block noch vorhanden ist. Trage die Mods andernfalls erneut ein und starte den Server neu.

> [!IMPORTANT]
> Spieler müssen die Mods nicht manuell herunterladen – der Client lädt die Server-Mods beim Beitreten automatisch. Steam-Workshop-Mods erfordern jedoch **deaktiviertes Crossplay**.
