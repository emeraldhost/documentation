---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Soldat 2 Server hinzu"
description: "Admin auf einem Soldat 2 Server hinzufügen"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["soldat-2"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/soldat-2/add-mods", "gameserver/soldat-2/create-backup", "gameserver/soldat-2/join-server", "gameserver/soldat-2/kick-ban-players"]
---

Soldat 2 kennt zwei Wege zu Adminrechten: einen **dauerhaften Admin über die PlayFab-ID** und ein **RCON-Passwort**, mit dem sich beliebig viele Spieler im Spiel anmelden können. Eine Adminliste als Datei gibt es nicht.

> [!NOTE]
> Das Feld für den dauerhaften Admin ist **Einzahl** – pro Server lässt sich genau **eine** PlayFab-ID hinterlegen. Alle weiteren Admins melden sich über das RCON-Passwort an.

## Dauerhaften Admin über die PlayFab-ID setzen

Soldat 2 identifiziert Spieler über ihre **PlayFab-ID**, eine 16-stellige hexadezimale Zeichenfolge wie `9FD985AB3FE67850`. Eine Steam-ID wird hier nicht verwendet.

### PlayFab-ID herausfinden

1. **Server starten**\
   Starte Deinen Server über die **Verwaltung** und öffne dort die Serverkonsole.

2. **Server beitreten**\
   Verbinde Dich mit Deinem Server. Wie das geht, steht unter [Server beitreten](/tutorials/gameserver/soldat-2/join-server).

3. **Konsolenausgabe ablesen**\
   Beim Beitritt schreibt der Server eine Zeile nach folgendem Muster:

   ```text
   1 DEIN_NAME joined the server [9FD985AB3FE67850]
   ```

   Der Wert in den eckigen Klammern ist die PlayFab-ID.

4. **ID kopieren**\
   Notiere Dir die ID genau so, wie sie in der Konsole steht.

> [!TIP]
> Auf demselben Weg findest Du auch die PlayFab-ID eines Mitspielers – lass ihn dazu einmal auf Deinen Server verbinden und lies die passende Zeile aus der Konsole ab.

### PlayFab-ID eintragen

1. **Server stoppen**\
   Stoppe Deinen Server über die **Verwaltung**.

2. **ID hinterlegen**\
   Trage die PlayFab-ID in der **Verwaltung** im Feld für den Admin ein.

3. **Server starten**\
   Starte Deinen Server. Der Wert wird beim Start in die `autoconfig.ini` geschrieben:

   ```text
   AdminPlayfabId=9FD985AB3FE67850
   ```

4. **Beitreten und prüfen**\
   Verbinde Dich mit Deinem Server. Im Scoreboard steht hinter Deinem Namen ein rotes `[Admin]`.

> [!IMPORTANT]
> Die `autoconfig.ini` wird beim **Stoppen** des Servers komplett neu geschrieben. Änderungen, die Du bei laufendem Server in die Datei schreibst, gehen dabei verloren. Bearbeite die Datei deshalb ausschließlich, wenn der Server gestoppt ist.

> [!WARNING]
> Die Werte `Name`, `Port`, `WebSocketsPort`, `WebSocketsRconPort`, `RconPassword`, `MaxPlayers`, `GreetMessage`, `AdminPlayfabId` und `ServerPassword` werden bei **jedem Serverstart** aus der **Verwaltung** in die `autoconfig.ini` geschrieben. Diese Werte gehören deshalb in die Verwaltung und nicht in die Datei.

> [!NOTE]
> **Schreibweise**
>
> Für diesen Schlüssel findest Du im Netz zwei Schreibweisen: `AdminPlayfabId` und `AdminPlayfabID`. Maßgeblich ist immer die Schreibweise, die bereits in Deiner `autoconfig.ini` steht – übernimm sie genau so.

## Weitere Admins über das RCON-Passwort

Für alle weiteren Admins nutzt Du das RCON-Passwort. Damit kann sich jeder Spieler direkt im Spiel als Admin anmelden.

1. **Server stoppen**\
   Stoppe Deinen Server über die **Verwaltung**.

2. **Passwort setzen**\
   Trage in der **Verwaltung** im Feld für das RCON-Passwort ein eigenes, langes Passwort ein.

3. **Server starten**\
   Starte Deinen Server.

4. **Im Spiel anmelden**\
   Öffne im Spiel die Konsole und melde Dich an:

   ```text
   rcon DeinRconPasswort
   ```

> [!IMPORTANT]
> Ab Werk ist ein Standardpasswort gesetzt. Ändere es unbedingt – wer das RCON-Passwort kennt, hat die volle Kontrolle über Deinen Server.

## Die Konsole im Spiel

1. **Konsole öffnen**\
   Drücke im Spiel `Alt` + `~`.

2. **Befehl eingeben**\
   Befehle, die den Server betreffen, stellst Du `rcon` voran:

   ```text
   rcon listplayers
   ```

3. **Befehle anzeigen**\
   Mit der `Tab`-Taste blendet Dir die Konsole die verfügbaren Befehle ein und vervollständigt Deine Eingabe.

> [!NOTE]
> Die Befehle unterscheiden **nicht** zwischen Groß- und Kleinschreibung. `rcon ListPlayers` und `rcon listplayers` bewirken dasselbe.

## Adminbefehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `rcon info` | Informationen zum Server anzeigen |
| `rcon listplayers` | Alle Spieler mit ihren IDs anzeigen |
| `rcon listmaps` | Verfügbare Karten anzeigen |
| `rcon version` | Serverversion anzeigen |
| `rcon say "<Text>"` | Nachricht an alle senden. Mit vorangestellter ID nur an einen Spieler: `rcon say 2 "Text"` |
| `rcon addbot` | Bot hinzufügen |
| `rcon rembot` | Bot entfernen |
| `rcon setteam <id> <team>` | Spieler in ein Team setzen |
| `rcon kick <id>` | Spieler vom Server trennen |
| `rcon kickall` | Alle Spieler vom Server trennen |
| `rcon ban <id>` | Spieler zeitlich begrenzt aussperren |
| `rcon vote` | Abstimmung starten |
| `rcon restart` | Aktuelle Runde neu starten |
| `rcon nextmap` | Zur nächsten Karte wechseln |
| `rcon loadmap <mapname> <gamemode>` | Bestimmte Karte mit einem Spielmodus laden |
| `rcon loadcycle <Datei>` | Kartenrotation laden |
| `rcon addmodifier <Name>` | Modifier aktivieren |
| `rcon removemodifier <Name>` | Modifier deaktivieren |
| `rcon reload` | Skripte neu kompilieren und laden |
| `rcon restartserver` | Server neu starten |
| `rcon get <Variable>` | Wert einer Variable ausgeben |
| `rcon set <Variable> <Wert>` | Wert einer Variable setzen |

## Einstellungen im laufenden Betrieb ändern

Mit `set` und `get` änderst Du Werte, ohne den Server zu stoppen. Das funktioniert für Konfigurationsvariablen ebenso wie für Regelwerte:

```text
rcon set FillBotsCount 5
```

```text
rcon set Match.MinimumPlayers 4
```

> [!WARNING]
> Änderungen über `set` gelten nur für die laufende Sitzung. Beim nächsten Serverstart gelten wieder die Werte aus der **Verwaltung** beziehungsweise aus der `autoconfig.ini`.

> [!TIP]
> Wie Du Spieler als Admin vom Server entfernst, erfährst Du unter [Spieler kicken & bannen](/tutorials/gameserver/soldat-2/kick-ban-players).
