---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem Space Engineers Server hinzu"
description: "Mods aus dem Steam Workshop oder von mod.io auf einem Space Engineers Server hinzufügen"
tags: []
date: "2026-07-08"
visibility: "public"
updated: "2026-09-27"
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

Du kannst Mods aus dem **Steam Workshop** oder von **mod.io** auf Deinem Server hinzufügen, um Blöcke, Fahrzeuge, Spielmechaniken und mehr zu ergänzen. Die Mods werden über ihre **ID** in der Konfigurationsdatei Deiner Welt eingetragen – der Server lädt sie beim Start automatisch herunter. Du musst also keine Mod-Dateien manuell hochladen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Konfigurationsdatei bearbeitest. Ein laufender Server kann Deine Änderungen beim Speichern oder Stoppen überschreiben.

## Steam Workshop oder mod.io?

Welchen Mod-Dienst Du nutzen kannst, hängt davon ab, ob auf Deinem Server [Crossplay](/tutorials/gameserver/space-engineers/enable-crossplay) aktiv ist:

| Server | Mod-Dienst | `PublishedServiceName` |
| --- | --- | --- |
| Ohne Crossplay | Steam Workshop oder mod.io | `Steam` bzw. `mod.io` |
| Mit Crossplay | nur mod.io | `mod.io` |

Ohne Crossplay kannst Du Mods aus beiden Diensten in derselben Mod-Liste mischen.

> [!NOTE]
> **Crossplay-Server**
>
> Ein Crossplay-Server lädt ausschließlich Mods von mod.io. Steht eine Steam-Workshop-Mod in der Mod-Liste, startet die Welt nicht. Außerdem dürfen Deine Mods zusammen höchstens **3 GB** groß sein – sonst schaltet der Server die Konsolenkompatibilität beim Laden ab.

## Mod-ID finden

### Steam Workshop

1. **Mod im Steam Workshop öffnen**\
   Öffne den [Steam Workshop für Space Engineers](https://steamcommunity.com/app/244850/workshop/) und rufe die gewünschte Mod auf.

2. **ID aus der URL kopieren**\
   Die Workshop-ID ist die Zahl am Ende der URL nach `?id=`:

   ```text
   https://steamcommunity.com/sharedfiles/filedetails/?id=123456789
   ```

   Die ID lautet hier `123456789`.

### mod.io

1. **Mod auf mod.io öffnen**\
   Öffne [mod.io für Space Engineers](https://mod.io/g/spaceengineers) und rufe die gewünschte Mod auf.

2. **ID in der Seitenleiste kopieren**\
   Die mod.io-ID steht in der rechten Seitenleiste der Mod unter **ID**, zum Beispiel `1234567`. Mit dem Kopier-Symbol daneben kopierst Du sie.

   > [!NOTE]
   > Anders als im Steam Workshop steht die ID nicht in der URL. Die Adresse einer mod.io-Mod enthält nur ihren Kurznamen, zum Beispiel `https://mod.io/g/spaceengineers/m/beispiel-mod`.

## Mods eintragen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server oder nutze den Datei-Browser in der Verwaltung.

3. **Konfigurationsdatei öffnen**\
   Öffne im Ordner Deiner Welt `/config/Saves/World/` die Datei `Sandbox_config.sbc`.

4. **Mod-Liste einfügen**\
   Suche nach dem `<Mods>`-Block (bei einer neuen Welt steht dort `<Mods />`) und trage pro Mod einen `<ModItem>` ein. Ersetze die Beispiel-IDs durch die IDs Deiner Mods.

   Mods aus dem **Steam Workshop**:

   ```xml
   <Mods>
     <ModItem FriendlyName="Erste Mod">
       <Name>123456789.sbm</Name>
       <PublishedFileId>123456789</PublishedFileId>
       <PublishedServiceName>Steam</PublishedServiceName>
     </ModItem>
     <ModItem FriendlyName="Zweite Mod">
       <Name>987654321.sbm</Name>
       <PublishedFileId>987654321</PublishedFileId>
       <PublishedServiceName>Steam</PublishedServiceName>
     </ModItem>
   </Mods>
   ```

   Mods von **mod.io**:

   ```xml
   <Mods>
     <ModItem FriendlyName="Erste Mod">
       <Name>1234567.sbm</Name>
       <PublishedFileId>1234567</PublishedFileId>
       <PublishedServiceName>mod.io</PublishedServiceName>
     </ModItem>
     <ModItem FriendlyName="Zweite Mod">
       <Name>7654321.sbm</Name>
       <PublishedFileId>7654321</PublishedFileId>
       <PublishedServiceName>mod.io</PublishedServiceName>
     </ModItem>
   </Mods>
   ```

   - `<Name>` ist die ID mit der Endung `.sbm`.
   - `<PublishedFileId>` ist die reine ID ohne Endung.
   - `<PublishedServiceName>` legt den Mod-Dienst fest: `Steam` für den Steam Workshop, `mod.io` für mod.io. Achte auf die exakte Schreibweise – fehlt der Eintrag, sucht ein Server ohne Crossplay die Mod im Steam Workshop.
   - `FriendlyName` ist optional und dient nur als Anzeigename.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server. Beim Start lädt der Server die Mods automatisch aus dem Steam Workshop bzw. von mod.io herunter – den Fortschritt siehst Du in der Server-Konsole.

> [!NOTE]
> **Reihenfolge beachten**
>
> Die Reihenfolge bestimmt die Priorität: Mods **weiter oben** in der Liste überschreiben Mods weiter unten, wenn beide dieselbe Definition ändern. Ordne sich überschneidende Mods entsprechend an.

> [!TIP]
> **Experimental Modus & Skripte**
>
> Seit Update 1.206 benötigen Mods keinen [Experimental Modus](/tutorials/gameserver/space-engineers/enable-experimental-mode) mehr – auch Mods mit eigenem Code (Skript-Mods) laufen ohne ihn.
>
> Skripte für **Programmierbare Blöcke** sind keine Mods und werden nicht in die Mod-Liste eingetragen – siehe [Ingame Skripte erlauben](/tutorials/gameserver/space-engineers/enable-ingame-scripts).

> [!WARNING]
> **Mods fehlen nach einem Neustart?**
>
> Öffne bei gestopptem Server erneut `/config/Saves/World/Sandbox_config.sbc` und prüfe, ob Dein `<Mods>`-Block noch vorhanden ist. Trage die Mods andernfalls erneut ein und starte den Server neu.

> [!IMPORTANT]
> Spieler müssen die Mods nicht manuell herunterladen – der Client lädt die Server-Mods beim Beitreten automatisch. Steam-Workshop-Mods funktionieren jedoch nur mit **deaktiviertem Crossplay** – auf einem Crossplay-Server nutzt Du Mods von mod.io.
