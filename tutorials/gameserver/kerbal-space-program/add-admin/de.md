---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Kerbal Space Program Server hinzu"
description: "Admin auf einem Kerbal Space Program Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["kerbal-space-program"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/kerbal-space-program/add-mods", "gameserver/kerbal-space-program/add-savegame", "gameserver/kerbal-space-program/create-backup", "gameserver/kerbal-space-program/download-savegame"]
---

Admins verwaltet ein DarkMultiPlayer-Server über die Datei `Config/admins.txt`. Eingetragen wird dabei der **DMP-Spielername** – nicht die SteamID64 oder eine andere ID. Der Name ist auf dem Server über den Schlüssel des Spielers eindeutig zugeordnet.

> [!IMPORTANT]
> Ein Spieler kann erst zum Admin gemacht werden, wenn er sich **mindestens einmal mit dem Server verbunden** hat. Vorher kennt der Server den Namen nicht und meldet `'<Name>' does not exist.`

## Admin über die Konsole hinzufügen

Der schnellste Weg führt über die Konsole in Deiner Verwaltung. Der Server übernimmt die Änderung sofort, ein Neustart ist nicht nötig.

1. **Verwaltung öffnen**\
   Öffne die **Verwaltung** Deines Servers und wechsle zur **Konsole**.

2. **Admin hinzufügen**\
   Gib den folgenden Befehl ein und ersetze den Platzhalter durch den Spielernamen:

   ```text
   /admin add Jebediah
   ```

3. **Ergebnis prüfen**\
   Lass Dir die aktuelle Liste anzeigen:

   ```text
   /admin show
   ```

> [!NOTE]
> **Befehle im Überblick**
>
> | Befehl | Beschreibung |
> |--------|-------------|
> | `/admin add <Spielername>` | Spieler zum Admin machen |
> | `/admin del <Spielername>` | Adminrechte wieder entziehen |
> | `/admin show` | Alle Admins anzeigen |

## Admin über die Datei eintragen

Alternativ trägst Du den Namen direkt in die Datei ein – zum Beispiel, wenn Du mehrere Admins auf einmal setzen möchtest.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **admins.txt öffnen**\
   Öffne folgende Datei. Existiert sie noch nicht, lege sie an:

   ```text
   /Config/admins.txt
   ```

4. **Spielernamen eintragen**\
   Trage pro Zeile genau einen Spielernamen ein:

   ```text
   Jebediah
   Valentina
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!WARNING]
> Bearbeite die Datei nur bei gestopptem Server. Der Server hält die Admin-Liste im Speicher und schreibt sie bei jeder Änderung komplett neu – Bearbeitungen im laufenden Betrieb gehen dadurch verloren.

## Was Adminrechte bewirken

| Recht | Beschreibung |
|-------|-------------|
| Konsolen-Kanal | Nur Admins sehen im DMP-Chat den zusätzlichen Kanal `#Server`. |
| Serverbefehle im Spiel | Über diesen Kanal kannst Du alle Serverbefehle direkt aus dem Spiel ausführen, zum Beispiel Spieler kicken oder bannen. |
| Modpack hochladen | Nur Admins dürfen mit `/upload` ein Modpack auf den Server laden, siehe [Mods hinzufügen](/tutorials/gameserver/kerbal-space-program/add-mods). |

> [!NOTE]
> Adminrechte geben Dir **keine** Sonderrechte an fremden Schiffen und keine besonderen Rechte beim Zeitraffer (Warp). Diese Bereiche regelt DarkMultiPlayer über eigene Berechtigungen bzw. den eingestellten **Warp Mode**.

## Befehle im Spiel nutzen

1. **Chat öffnen**\
   Öffne im Spiel das DMP-Chatfenster.

   > [!NOTE]
   > Standardmäßig öffnest Du den Chat mit der Taste links neben der `1`. Welche Taste das ist, stellst Du im DMP-Fenster unter **Options** → **Keys** bei **Chat** ein.

2. **Kanal wechseln**\
   Wechsle auf den Kanal `#Server`. Er ist nur für Admins sichtbar.

   > [!NOTE]
   > Heißt der Kanal bei Dir anders, liegt das am Wert `consoleIdentifier` in der Datei `/Config/Settings.txt`. Standardmäßig lautet er `Server`.

3. **Befehl eingeben**\
   In diesem Kanal gibst Du Befehle **ohne** führenden Schrägstrich ein:

   ```text
   kick Jebediah
   ```

   > [!WARNING]
   > In der Konsole Deiner Verwaltung ist es umgekehrt: Dort brauchen Befehle den führenden Schrägstrich, sonst wird Deine Eingabe als Chatnachricht an alle Spieler gesendet.

> [!TIP]
> Wie Du Spieler als Admin vom Server entfernst, erfährst Du unter [Spieler kicken & bannen](/tutorials/gameserver/kerbal-space-program/kick-ban-players).
