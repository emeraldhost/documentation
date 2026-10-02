---
slug: "game-master-einrichten"
language: "de"
title: "So richtest Du Game Master auf Deinem Arma Reforger Server ein"
description: "Game-Master-Modus auf einem Arma Reforger Server einrichten, Game-Master-Rolle vergeben und Budgets verstehen"
tags: []
date: "2026-10-02"
visibility: "public"
cta: "gameserver"
product_keys: ["arma-reforger"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Game Master einrichten"
sort: 18
related: ["gameserver/arma-reforger/change-scenario", "gameserver/arma-reforger/become-admin", "gameserver/arma-reforger/add-admin", "gameserver/arma-reforger/change-scenario-settings"]
---
Game Master ist ein Spielmodus, in dem nichts vorgeplant ist. Ein Spieler übernimmt die Rolle des Game Masters und bestimmt, was als Nächstes passiert: Er platziert KI-Einheiten, Fahrzeuge und Objekte, gibt Gruppen Wegpunkte und steuert so das Geschehen in Echtzeit. Der Modus entspricht dem Zeus-Modus aus Arma 3.

## Game-Master-Szenario starten

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Szenario ID eintragen**\
   Trage eine der folgenden Szenario IDs in das Feld **Szenario ID** ein:

   | Szenario | Szenario ID |
   |----------|-------------|
   | Game Master – Everon | `{59AD59368755F41A}Missions/21_GM_Eden.conf` |
   | Game Master – Arland | `{2BBBE828037C6F4B}Missions/22_GM_Arland.conf` |
   | Game Master – Kolguyev | `{F45C6C15D31252E6}Missions/27_GM_Cain.conf` |

4. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu.

> [!NOTE]
> Das Feld **Szenario ID** überschreibt bei jedem Serverstart den Eintrag `scenarioId` in der `config.json`. Ändere das Szenario deshalb immer in der Verwaltung. Weitere Szenarien findest Du in der Anleitung [Szenario ändern](/tutorials/gameserver/arma-reforger/change-scenario).

## Wer Game Master wird

Auf einem Game-Master-Server gelten folgende Regeln:

- Ein als Server-Admin eingetragener Spieler hat **immer** Zugriff auf die Game-Master-Oberfläche.
- Ist kein Game Master auf dem Server, erhält der **erste Spieler, der sich verbindet**, die Game-Master-Rolle.
- Die Rolle kann nicht weitergegeben werden, solange dieser Spieler verbunden ist.

> [!WARNING]
> Ist kein Game Master auf dem Server, erhält der erste Spieler, der beitritt, die Game-Master-Rolle – auch wenn Du als Admin eingetragen bist. Als eingetragener Admin hast Du aber jederzeit selbst Zugriff auf die Game-Master-Oberfläche. Möchtest Du verhindern, dass Fremde die Rolle übernehmen, tritt Deinem Server als Erster bei oder schütze ihn mit einem **Server Passwort** in den **Einstellungen**, solange Du nicht online bist.

### Dich als Admin eintragen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **SteamID64 eintragen**\
   Öffne die Datei `config.json` und trage Deine SteamID64 im Bereich `"game"` unter `"admins"` ein:

   ```json
   "game": {
     "admins": [
       "76561198000000001"
     ]
   }
   ```

   Die Liste kann maximal 20 Einträge enthalten.

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server nicht startet.

4. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!TIP]
> Wie Du Deine SteamID64 findest, erfährst Du in der Anleitung [SteamID64 herausfinden](/tutorials/gameserver/steamid64-find-out). Weitere Details zu Admins findest Du unter [Admin hinzufügen](/tutorials/gameserver/arma-reforger/add-admin) und [Admin werden](/tutorials/gameserver/arma-reforger/become-admin).

### Im Spiel als Admin anmelden

Zusätzlich kannst Du Dich im Spiel als Server-Admin anmelden. Lege dafür in der Verwaltung unter **Einstellungen** ein **Admin Passwort** fest. Öffne im Spiel den Chat – in der Lobby mit `C`, im laufenden Spiel mit `Enter` – und gib folgenden Befehl ein:

```text
#login DeinAdminPasswort
```

Als Admin in der `config.json` eingetragene Spieler können sich auch ohne Passwort mit `#login` anmelden. Weitere Befehle findest Du in der Anleitung [Admin werden](/tutorials/gameserver/arma-reforger/become-admin).

## Budgets

Was der Game Master platzieren kann, wird durch Budgets begrenzt. Sie werden im Entity Browser unten rechts angezeigt:

| Budget | Gilt für |
|--------|----------|
| Object Budget | Objekte wie Requisiten und Kompositionen |
| AI Budget | KI-gesteuerte Einheiten, z.B. Soldaten |
| Vehicle Budget | Fahrzeuge wie Autos und Panzerfahrzeuge |
| System Budget | Respawn-Punkte, Ziele, Arsenale usw. |

Erreicht ein Budget 100 %, kann der Game Master von diesem Typ nichts mehr platzieren, bis vorhandene Einträge entfernt werden. Die anderen Budgets sind davon nicht betroffen, z.B. lassen sich bei vollem AI Budget weiterhin Fahrzeuge platzieren.

> [!TIP]
> Über die Funktion **Clear Destroyed Entities** in der Werkzeugleiste des Game Masters entfernst Du alle getöteten Soldaten und zerstörten Fahrzeuge. Dadurch wird Budget frei, das sie noch belegen.

> [!NOTE]
> Zusätzlich kannst Du die Anzahl der KI-Einheiten auf Deinem Server mit dem Eintrag `aiLimit` im Bereich `"operating"` der `config.json` serverweit begrenzen. Ist dieses Limit erreicht, kann kein System weitere KI-Einheiten erzeugen – das betrifft auch Einheiten, die der Game Master platzieren möchte. Wie das geht, erfährst Du in der Anleitung [KI deaktivieren oder begrenzen](/tutorials/gameserver/arma-reforger/disable-ai).

## Game-Master-Sitzungen speichern

Sofern das Szenario Speichern unterstützt, legt der Server automatisch Speicherstände an. Standardmäßig erstellt er alle 10 Minuten einen Speicherstand (`autoSaveInterval`) und behält die letzten 10 (`saveRetention`). Beide Werte kannst Du im optionalen Bereich `"persistence"` unter `"gameProperties"` in der `config.json` anpassen, wie in der Anleitung [Szenario-Einstellungen ändern](/tutorials/gameserver/arma-reforger/change-scenario-settings) beschrieben.

> [!TIP]
> Wie Du einen Speicherstand sicherst oder auf den Server lädst, erfährst Du in den Anleitungen [Savegame herunterladen](/tutorials/gameserver/arma-reforger/download-savegame) und [Savegame hinzufügen](/tutorials/gameserver/arma-reforger/add-savegame). Erstelle vor größeren Änderungen zusätzlich ein [Backup](/tutorials/gameserver/arma-reforger/create-backup).
