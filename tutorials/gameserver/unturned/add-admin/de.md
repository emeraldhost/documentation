---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Unturned Server hinzu"
description: "Admin auf einem Unturned Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["unturned"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/unturned/add-mods", "gameserver/unturned/add-savegame", "gameserver/unturned/create-backup", "gameserver/unturned/download-savegame"]
---

Unturned kennt zwei Stufen: den **Owner**, der dauerhaft in der Konfiguration hinterlegt wird, und normale **Admins**, die Du im laufenden Betrieb ernennst. In beiden Fällen gibst Du die **SteamID64** des Spielers an – eine 17-stellige Zahl, die mit `7656` beginnt.

> [!TIP]
> Hier findest Du eine Anleitung, wie Du eine [SteamID64](/tutorials/gameserver/steamid64-find-out) herausfindest.

## Owner eintragen

Der Owner ist der Serverbesitzer. Der Eintrag steht in der Konfiguration und bleibt über Neustarts hinweg erhalten.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Der Eintrag wird nur beim Start gelesen.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Commands.dat öffnen**\
   Öffne folgende Datei:

   ```text
   /Servers/<ServerID>/Server/Commands.dat
   ```

   > [!NOTE]
   > **Welcher Ordner ist meiner?**
   >
   > `<ServerID>` ist der Ordnername unter `/Servers/`. Er stammt aus dem Startparameter Deines Servers – in der Regel liegt dort genau ein Ordner.

4. **SteamID64 eintragen**\
   Füge eine neue Zeile mit Deiner SteamID64 hinzu:

   ```text
   Owner 76561198012345678
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!NOTE]
> **Aufbau der Commands.dat**
>
> In der `Commands.dat` steht eine Anweisung pro Zeile. Zeilen, die mit `//` beginnen, sind Kommentare und werden ignoriert. Übernimm die Schreibweise am besten genau so, wie sie in den Beispielen steht.

## Admin im laufenden Betrieb ernennen

Weitere Admins ernennst Du über einen Befehl – entweder in der **Konsole** der Verwaltung oder als Admin direkt im Spielchat.

1. **Konsole oder Chat öffnen**\
   Öffne die **Konsole** in der Verwaltung Deines Servers. Alternativ öffnest Du im Spiel den Chat, wenn Du bereits Admin bist.

2. **Befehl eingeben**\
   In der Konsole gibst Du den Befehl ohne Präfix ein:

   ```text
   admin 76561198012345678
   ```

   Im Spielchat stellst Du ein `/` oder `@` voran:

   ```text
   /admin 76561198012345678
   ```

   > [!TIP]
   > Statt der SteamID64 kannst Du bei verbundenen Spielern auch den Spielernamen angeben, zum Beispiel `admin Sam`.

3. **Adminrechte entziehen**\
   Zum Entziehen der Rechte nutzt Du:

   ```text
   unadmin 76561198012345678
   ```

## Befehle im Überblick

| Befehl | Ort | Beschreibung |
|--------|-----|--------------|
| `Owner <SteamID64>` | `Commands.dat` | Legt den Serverbesitzer fest, wirkt erst nach einem Neustart |
| `admin <SteamID64\|Spielername>` | Konsole oder Chat | Ernennt einen Spieler im laufenden Betrieb zum Admin |
| `unadmin <SteamID64\|Spielername>` | Konsole oder Chat | Entzieht einem Spieler die Adminrechte |

> [!NOTE]
> **Wo liegt die Adminliste?**
>
> Die Liste der Admins liegt unter `/Servers/<ServerID>/Server/Adminlist.dat` und wird von den Befehlen `admin` und `unadmin` gepflegt. Verwalte Deine Admins am besten ausschließlich über diese Befehle – so bleibt die Liste garantiert gültig. Möchtest Du alle Admins auf einen Schlag entfernen, kannst Du die Datei bei gestopptem Server auch löschen.

## Cheat-Befehle freischalten

Befehle wie `give` gelten als Cheats und sind standardmäßig gesperrt – auch für Admins.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Cheats aktivieren**\
   Trage in der `Commands.dat` eine eigene Zeile ein:

   ```text
   Cheats
   ```

3. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!IMPORTANT]
> Mit aktivierten Cheats können alle Admins Gegenstände erzeugen. Aktiviere die Option nur, wenn Du das wirklich möchtest – auf einem Survival-Server nimmt das schnell den Spielreiz.

> [!TIP]
> Wie Du als Admin Spieler von Deinem Server entfernst, erfährst Du unter [Spieler kicken & bannen](/tutorials/gameserver/unturned/kick-ban-players).
