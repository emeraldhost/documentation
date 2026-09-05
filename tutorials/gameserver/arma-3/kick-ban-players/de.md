---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Arma 3 Server"
description: "Spieler auf einem Arma 3 Server kicken und bannen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["arma-3"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 7
related: ["gameserver/arma-3/add-savegame", "gameserver/arma-3/create-backup", "gameserver/arma-3/download-savegame", "gameserver/arma-3/join-server"]
---

Spieler kannst Du auf zwei Wegen entfernen: direkt im Spiel über die Chat-Konsole oder von außerhalb über BattlEye RCON – auch dann, wenn Du selbst gerade nicht auf dem Server bist.

> [!NOTE]
> Für die Befehle im Spiel benötigst Du Adminrechte. Siehe [Admin hinzufügen](/tutorials/gameserver/arma-3/add-admin).

## Befehle im Spiel nutzen

1. **Als Admin anmelden**\
   Öffne im Spiel mit der Taste `/` die Chat-Konsole und melde Dich als Admin an:

   ```text
   #login deinAdminPasswort
   ```

2. **Spieler kicken**\
   Trenne einen Spieler vom Server. Du kannst den Spielernamen, die ID oder die Spielernummer angeben:

   ```text
   #kick Spielername
   ```

   Der Spieler wird sofort getrennt, kann aber jederzeit wieder beitreten.

3. **Spieler bannen**\
   Sperre einen Spieler dauerhaft aus. Bei `#exec` müssen Name beziehungsweise ID in Anführungszeichen stehen:

   ```text
   #exec ban "Spielername"
   ```

   Die ID des Spielers wird dabei in die Ban-Liste `ban.txt` im Hauptverzeichnis Deines Servers eingetragen.

4. **Bann aufheben**\
   Hebe einen Bann wieder auf. Hier funktioniert ausschließlich die UID des Spielers, nicht sein Name:

   ```text
   #exec unban "76561198012345678"
   ```

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|--------------|
| `#kick <Name/ID>` | Spieler vom Server trennen |
| `#exec ban "<Name/ID>"` | Spieler dauerhaft aussperren |
| `#exec unban "<UID>"` | Bann wieder aufheben – nur über die UID möglich |
| `#lock` | Server sperren – niemand kann mehr beitreten |
| `#unlock` | Sperre wieder aufheben |

> [!WARNING]
> Bearbeite die Ban-Dateien Deines Servers nicht von Hand. Nutze zum Entbannen `#exec unban` beziehungsweise die RCON-Befehle – so bleibt die Liste in einem gültigen Zustand.

## BattlEye RCON einrichten

Über RCON verwaltest Du Spieler von Deinem PC aus, ohne selbst im Spiel zu sein. RCON läuft bei Arma 3 ausschließlich über BattlEye.

> [!IMPORTANT]
> RCON funktioniert nur, wenn BattlEye auf Deinem Server aktiv ist. Steht in der `server.cfg` `BattlEye = 0;`, lässt sich RCON nicht verwenden.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **BattlEye aktivieren**\
   Öffne per [SFTP](/tutorials/gameserver/establish-sftp-connection) die Datei `/server.cfg` und stelle sicher, dass dort folgender Wert steht:

   ```text
   BattlEye = 1;
   ```

3. **Port festlegen**\
   RCON läuft über den BattlEye-Port Deines Servers – das ist der **Game Port + 4**. Welche Ports Deinem Server zugewiesen sind, siehst Du in der **Verwaltung**. Steht dieser Port bei Dir nicht zur Verfügung, weise Deinem Server dort einen zusätzlichen Port zu und verwende diesen.

4. **BattlEye-Konfiguration anlegen**\
   Wechsle per SFTP in den `battleye`-Ordner Deines Servers und lege dort die Datei `beserver_x64.cfg` an – oder öffne sie, falls sie bereits existiert. Trage folgende zwei Zeilen ein:

   ```text
   RConPassword deinRconPasswort
   RConPort deinRconPort
   ```

   > [!NOTE]
   > BattlEye legt den Ordner beim ersten Start mit aktivem BattlEye automatisch an, standardmäßig im Serverprofil-Verzeichnis – also unter `/serverprofile/battleye`. Findest Du ihn nicht, starte Deinen Server einmal mit `BattlEye = 1;` und stoppe ihn anschließend wieder. Startet Dein Server mit der 32-Bit-Binary, heißt die Datei `beserver.cfg` statt `beserver_x64.cfg`.

5. **Server starten**\
   Speichere die Änderungen und starte Deinen Server.

6. **Mit RCON verbinden**\
   Verbinde Dich mit einem RCON-Tool wie [BattleWarden](https://battlewarden.net/) und trage die IP-Adresse Deines Servers, den RCON-Port sowie das RCON-Passwort ein.

## RCON-Befehle

| Befehl | Beschreibung |
|--------|--------------|
| `players` | Zeigt alle verbundenen Spieler mit Spielernummer, GUID und Ping |
| `kick [Spielernummer] [Grund]` | Trennt einen Spieler vom Server |
| `ban [Spielernummer] [Dauer] [Grund]` | Bannt einen verbundenen Spieler über seine GUID, `0` bedeutet dauerhaft |
| `addBan [GUID oder IP] [Dauer] [Grund]` | Bannt einen Spieler, der gerade nicht verbunden ist |
| `bans` | Listet alle aktiven Banns mit ihrer Ban-Nummer auf |
| `removeBan [Ban-Nummer]` | Hebt einen einzelnen Bann auf |
| `loadBans` | Lädt die Ban-Liste neu ein |
| `writeBans` | Entfernt abgelaufene Banns aus der Liste |
| `say [Spielernummer] [Nachricht]` | Sendet eine Nachricht, `-1` schickt sie an alle |

> [!TIP]
> **Bann über RCON aufheben**
>
> Führe zuerst `bans` aus und notiere Dir die Nummer des Eintrags. Anschließend hebst Du den Bann mit `removeBan <Ban-Nummer>` auf.

> [!NOTE]
> Die Spielernummern aus `players` gelten nur für die aktuelle Sitzung. Prüfe sie deshalb direkt vor jedem `kick` oder `ban` erneut.
