---
slug: "island-id-setzen"
language: "de"
title: "So setzt Du die Island ID auf Deinem Windrose Server"
description: "Island ID auf einem Windrose Server setzen"
tags: []
date: "2026-04-14"
visibility: "public"
updated: "2026-05-10"
cta: "gameserver"
product_keys: ["windrose"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Island ID setzen"
sort: 4
related: ["gameserver/windrose/join-server", "gameserver/windrose/set-invite-code", "gameserver/windrose/set-note", "gameserver/windrose/set-server-password"]
---

Die Island ID legt fest, welche Welt Dein Server beim Start lädt. Wenn keine Island ID gesetzt ist, lädt der Server automatisch den aktuellsten Spielstand. Möchtest Du eine bestimmte ältere Welt weiterspielen, kannst Du deren Island ID hier eintragen.

## Island ID herausfinden

1. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

2. **Welten-Verzeichnis öffnen**\
   Öffne folgendes Verzeichnis. Hier liegt für jede gespeicherte Welt ein eigener Ordner:

   ```text
   /R5/Saved/SaveProfiles/Default/RocksDB_v2/<GameVersion>/Worlds/
   ```

   > [!NOTE]
   > `<GameVersion>` ist die Spielversion, mit der die Welt erstellt wurde – z.B. `0.10.0`. Falls Du mehrere Versionen siehst, öffne den passenden Ordner.

3. **Island ID identifizieren**\
   Der Ordnername jeder Welt **ist** die Island ID. Beispiel:

   ```text
   /R5/Saved/SaveProfiles/Default/RocksDB_v2/0.10.0/Worlds/A1b2C3d4E5
   ```

   In diesem Beispiel lautet die Island ID `A1b2C3d4E5`.

4. **Welt zuordnen (optional)**\
   Um sicherzustellen, dass Du den richtigen Ordner zur richtigen Welt zuordnest, öffne die Datei `WorldDescription.json` im Welt-Ordner. Dort findest Du den Anzeigenamen unter dem Feld `WorldName`.

## Island ID in der Verwaltung setzen

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Island ID setzen**\
   Trage die Island ID aus dem Welt-Ordner im Feld **Island ID** ein und speichere die Einstellung.

4. **Server neu starten**\
   Starte Deinen Server neu, damit die Änderung übernommen wird.

> [!TIP]
> Wenn Dein Server nach einem Update plötzlich eine neue, leere Welt lädt, ist meist die ursprüngliche Welt noch unter `/R5/Saved/SaveProfiles/Default/RocksDB_v2/<GameVersion>/Worlds/` vorhanden. Trage die Island ID dieser Welt in den Einstellungen ein, damit sie wieder korrekt geladen wird.
