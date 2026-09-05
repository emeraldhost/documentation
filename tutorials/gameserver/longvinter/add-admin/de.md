---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Longvinter Server hinzu"
description: "Admin auf einem Longvinter Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["longvinter"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/longvinter/add-savegame", "gameserver/longvinter/create-backup", "gameserver/longvinter/download-savegame", "gameserver/longvinter/join-server"]
---

Admins werden auf einem Longvinter Server über die Konfigurationsdatei `Game.ini` festgelegt. Eingetragen wird die **EOS Account ID** des Spielers – eine 32-stellige Zeichenfolge aus Ziffern und Buchstaben.

> [!IMPORTANT]
> Der Schlüssel heißt zwar `AdminSteamID`, erwartet aber trotzdem die **EOS Account ID** und **nicht** die SteamID64. Trägst Du dort eine 17-stellige SteamID64 ein, erhält der Spieler keine Adminrechte.

## EOS Account ID finden

1. **Longvinter starten**\
   Starte Longvinter auf Deinem PC.

2. **Einstellungen öffnen**\
   Öffne im Hauptmenü die **Options**.

3. **ID ablesen**\
   Wechsle auf den Reiter **General** und scrolle nach unten. Dort steht die **EOS Account ID** Deines Kontos – kopiere sie.

> [!TIP]
> Jeder Spieler kann seine eigene EOS Account ID auf diesem Weg selbst ablesen und Dir schicken. Ohne diese ID kannst Du niemanden zum Admin machen. Bist Du bereits Admin, kannst Du die EOS ID eines Spielers im Spiel auch per Rechtsklick auf den Spieler kopieren.

## Admin eintragen

1. **Server stoppen**\
   Stoppe Deinen Server über die **Verwaltung**.

   > [!WARNING]
   > Bearbeite die `Game.ini` niemals im laufenden Betrieb. Der Server speichert etwa alle zehn Minuten und überschreibt dabei Deine Änderungen.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Game.ini öffnen**\
   Öffne folgende Datei. Existiert sie noch nicht, lege sie an:

   ```text
   /Longvinter/Saved/Config/LinuxServer/Game.ini
   ```

4. **EOS Account ID eintragen**\
   Trage die ID in der Sektion `[/Game/Blueprints/Server/GM_Longvinter.GM_Longvinter_C]` beim Schlüssel `AdminSteamID` ein:

   ```ini
   [/Game/Blueprints/Server/GM_Longvinter.GM_Longvinter_C]
   AdminSteamID=000000000000000000000000aaaaaaaa
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server. Adminrechte werden nur beim Serverstart eingelesen.

## Mehrere Admins eintragen

Mehrere Admins schreibst Du in dieselbe Zeile und trennst sie durch **genau ein Leerzeichen**:

```ini
[/Game/Blueprints/Server/GM_Longvinter.GM_Longvinter_C]
AdminSteamID=000000000000000000000000aaaaaaaa 000000000000000000000000bbbbbbbb
```

> [!WARNING]
> Trenne die IDs **nicht** durch Kommas und schreibe sie nicht in mehrere Zeilen. Beides führt dazu, dass keiner der eingetragenen Spieler Adminrechte erhält.

> [!NOTE]
> Der Schlüssel gehört in die Sektion `[/Game/Blueprints/Server/GM_Longvinter.GM_Longvinter_C]`. In der zweiten Sektion der Datei, `[/Game/Blueprints/Server/GI_AdvancedSessions.GI_AdvancedSessions_C]`, hat er keine Wirkung.

## Admin-Panel im Spiel öffnen

1. **Server beitreten**\
   Verbinde Dich mit Deinem Server – siehe [Server beitreten](/tutorials/gameserver/longvinter/join-server).

2. **Menü öffnen**\
   Drücke im Spiel `ESC`.

3. **Admin panel öffnen**\
   Klicke oben links auf **Admin panel**. Der Eintrag erscheint nur, wenn Deine EOS Account ID korrekt hinterlegt ist.

> [!NOTE]
> Wird das **Admin panel** nicht angezeigt, prüfe die ID auf Tippfehler, kontrolliere die Sektion in der `Game.ini` und starte den Server neu.

> [!TIP]
> Wie Du als Admin Spieler vom Server entfernst, erfährst Du unter [Spieler kicken & bannen](/tutorials/gameserver/longvinter/kick-ban-players).
