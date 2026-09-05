---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem Soldat 2 Server hinzu"
description: "Mods, eigene Karten und Skripte auf einem Soldat 2 Server hinzufügen"
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
short_title: "Mods hinzufügen"
sort: 3
related: ["gameserver/soldat-2/add-admin", "gameserver/soldat-2/create-backup", "gameserver/soldat-2/join-server", "gameserver/soldat-2/kick-ban-players"]
---

Soldat 2 hat keinen Workshop und kein Mod-Paketformat. Stattdessen liegt praktisch alles, was das Spiel ausmacht, als einzelne Datei im Serververzeichnis – Karten, Spielmodi, Modifier, Kartenrotationen und Skripte. Du lädst sie per [SFTP](/tutorials/gameserver/establish-sftp-connection) hoch und bindest sie über die Konfiguration oder die Konsole ein.

> [!WARNING]
> Ob eigene Karten, Modifier und Skripte automatisch an Deine Mitspieler übertragen werden, ist nicht dokumentiert. Gib die Dateien, die Du auf den Server lädst, deshalb sicherheitshalber auch direkt an Deine Mitspieler weiter – so hat jeder denselben Stand.

## Die Ordnerstruktur

Alle Ordner liegen im Hauptverzeichnis Deines Servers:

| Ordner | Inhalt |
|--------|--------|
| `Levels/` | Karten als JSON-Dateien, jeweils in einem eigenen Unterordner |
| `Modifiers/Custom/` | Modifier – verändern Objekte, Waffenwerte und Spielparameter |
| `Rules/Custom/` | Spielmodi und Rundenregeln |
| `Scripts/Custom/` | Eigene C#-Skripte |
| `Cycles/Custom/` | Kartenrotationen |

> [!NOTE]
> Karten liegen bei Soldat 2 als `.json`-Datei vor – nicht als `.pms` wie beim ersten Soldat. Dateien aus dem Vorgänger funktionieren hier nicht.

## Eigene Karten hinzufügen

1. **Karte herunterladen**\
   Lade die gewünschte Karte herunter. Eine große Sammlung findest Du unter `tms2.jrgp.org`.

2. **Server stoppen**\
   Stoppe Deinen Server über die **Verwaltung**.

3. **Karte hochladen**\
   Lade die Karte per [SFTP](/tutorials/gameserver/establish-sftp-connection) in einen Unterordner von `Levels/` hoch – so, wie die Karte ausgeliefert wird:

   ```text
   Levels/<Ordner>/<Kartenname>.json
   ```

4. **Server starten**\
   Starte Deinen Server.

5. **Karte laden**\
   Öffne im Spiel die Konsole und lade die Karte mit einem Spielmodus – der Spielmodus heißt genauso wie die zugehörige Datei in `Rules/`:

   ```text
   rcon loadmap dm_epitaph Deathmatch
   ```

> [!WARNING]
> Der Kartenname wird **ohne Pfad und ohne die Endung `.json`** angegeben. Die Schreibweise unterscheidet Groß- und Kleinschreibung – auf Deinem Linux-Server ist das entscheidend. Welche Karten der Server kennt, zeigt Dir `rcon listmaps`.

## Modifier hinzufügen

Modifier sind der schnellste Weg, das Spielgeschehen zu verändern: Sie überschreiben Werte von Objekten, Waffen und Spielparametern.

1. **Server stoppen**\
   Stoppe Deinen Server über die **Verwaltung**.

2. **Vorlage ansehen**\
   Öffne per [SFTP](/tutorials/gameserver/establish-sftp-connection) die Datei `Modifiers/_default.json`. Sie enthält alle Standardwerte und dient als Nachschlagewerk – **bearbeite sie nicht**.

3. **Eigenen Modifier anlegen**\
   Lege eine neue Datei an:

   ```text
   Modifiers/Custom/MeinModifier.json
   ```

4. **Werte eintragen**\
   Trage nur die Werte ein, die Du ändern möchtest. Die Parameter stehen im Abschnitt `"Objects"`. Alles, was Du nicht angibst, bleibt auf dem Standardwert.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

6. **Modifier aktivieren**\
   Öffne die Konsole und aktiviere den Modifier über seinen Dateinamen ohne `.json`:

   ```text
   rcon addmodifier MeinModifier
   rcon restart
   ```

> [!NOTE]
> **Listen erweitern statt ersetzen**
>
> Bei Werten, die eine Liste enthalten, kannst Du gezielt ergänzen oder entfernen, statt die ganze Liste neu zu schreiben: Ein vorangestelltes `+` fügt einen Eintrag hinzu, ein `-` entfernt ihn.

> [!WARNING]
> `rcon addmodifier` wirkt erst nach einem `rcon restart` der Runde. Mit `rcon removemodifier <Name>` schaltest Du einen Modifier wieder ab.

## Eigene Spielmodi über Regeldateien

Spielmodi und Rundenregeln liegen als JSON-Datei unter `Rules/Custom/`. Darüber steuerst Du zum Beispiel, wie lang eine Runde dauert und wie viele Punkte zum Sieg nötig sind:

| Schlüssel | Bedeutung |
|-----------|-----------|
| `Match.MatchSecs` | Rundendauer in Sekunden |
| `Match.ScoreLimit` | Punktelimit, ab dem die Runde endet |
| `GameScript` | Name des C#-Skripts, das für diesen Spielmodus geladen wird |

1. **Server stoppen**\
   Stoppe Deinen Server über die **Verwaltung**.

2. **Regeldatei anlegen**\
   Kopiere Dir eine vorhandene Datei aus `Rules/` als Vorlage und lege sie unter neuem Namen ab:

   ```text
   Rules/Custom/MeinModus.json
   ```

3. **Werte anpassen**\
   Passe die gewünschten Werte an.

4. **Modus einbinden**\
   Damit Dein Modus gespielt wird, trägst Du seinen Dateinamen ohne `.json` in Deiner Kartenrotation unter `"Rules"` ein – siehe [Kartenrotation einrichten](#kartenrotation-einrichten).

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!TIP]
> Einzelne Regelwerte kannst Du auch im laufenden Betrieb testen, ohne den Server zu stoppen:
>
> ```text
> rcon set Match.MinimumPlayers 4
> ```
>
> Solche Änderungen gelten nur für die laufende Sitzung.

## Eigene Skripte einbinden

Für eigene Spiellogik bringt Soldat 2 ein C#-Skriptsystem mit.

1. **Server stoppen**\
   Stoppe Deinen Server über die **Verwaltung**.

2. **Skript hochladen**\
   Lade Deine `.cs`-Datei per [SFTP](/tutorials/gameserver/establish-sftp-connection) hoch:

   ```text
   Scripts/Custom/MeinSkript.cs
   ```

3. **Skript einbinden**\
   Trage das Skript über den Schlüssel `GameScript` in einer Regeldatei unter `Rules/Custom/` ein. Alternativ bindest Du es über einen Modifier ein.

4. **Server starten**\
   Starte Deinen Server und prüfe in der Serverkonsole der **Verwaltung**, ob das Skript fehlerfrei kompiliert wurde.

> [!TIP]
> Änderst Du ein Skript, musst Du den Server nicht neu starten. Mit folgendem Befehl kompiliert der Server alle Skripte neu:
>
> ```text
> rcon reload
> ```

> [!IMPORTANT]
> Skripte laufen mit den Rechten Deines Servers. Installiere nur Skripte aus Quellen, denen Du vertraust.

## Kartenrotation einrichten

Eine Kartenrotation legst Du als Cycle-Datei an. Der Server arbeitet die darin aufgeführten Runden nacheinander ab.

1. **Server stoppen**\
   Stoppe Deinen Server über die **Verwaltung**.

2. **Cycle-Datei anlegen**\
   Kopiere Dir eine vorhandene Datei aus `Cycles/` als Vorlage und lege sie unter neuem Namen ab:

   ```text
   Cycles/Custom/MeineRotation.json
   ```

3. **Runden eintragen**\
   Jede Runde besteht aus einem Spielmodus (`"Rules"`) und einer Karte (`"Level"`) – beide **ohne Dateiendung**:

   ```text
   [{
     "Rules": "Deathmatch",
     "Level": "dm_epitaph"
   }]
   ```

4. **Rotation aktivieren**\
   Trage in der `autoconfig.ini` folgende Werte ein:

   ```text
   GamesCycleFile=Cycles/Custom/MeineRotation.json
   UseLobby=False
   AllowVoting=False
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!WARNING]
> Ohne `UseLobby=False` und `AllowVoting=False` übersteuern Lobby und Spielerabstimmung Deine Rotation – der Server springt dann auf andere Karten, als in der Cycle-Datei stehen.

> [!TIP]
> Eine Rotation lässt sich auch im laufenden Betrieb laden:
>
> ```text
> rcon loadcycle Cycles/Custom/MeineRotation.json
> ```

## Befehle im laufenden Betrieb

| Befehl | Beschreibung |
|--------|-------------|
| `rcon listmaps` | Verfügbare Karten anzeigen |
| `rcon loadmap <mapname> <gamemode>` | Karte mit einem Spielmodus laden |
| `rcon nextmap` | Zur nächsten Karte wechseln |
| `rcon addmodifier <Name>` | Modifier aktivieren |
| `rcon removemodifier <Name>` | Modifier deaktivieren |
| `rcon restart` | Runde neu starten – nötig, damit ein Modifier greift |
| `rcon loadcycle <Datei>` | Kartenrotation laden |
| `rcon reload` | Skripte neu kompilieren |

## Änderungen an der autoconfig.ini

> [!IMPORTANT]
> Die `autoconfig.ini` wird beim **Stoppen** des Servers komplett neu geschrieben. Änderungen, die Du bei laufendem Server in die Datei schreibst, gehen dabei verloren. Bearbeite die Datei deshalb ausschließlich, wenn der Server gestoppt ist.

> [!WARNING]
> Die Werte `Name`, `Port`, `WebSocketsPort`, `WebSocketsRconPort`, `RconPassword`, `MaxPlayers`, `GreetMessage`, `AdminPlayfabId` und `ServerPassword` werden bei **jedem Serverstart** aus der **Verwaltung** in die `autoconfig.ini` geschrieben. Diese Werte gehören deshalb in die Verwaltung und nicht in die Datei.

> [!TIP]
> Sichere Deine Konfiguration und Deine eigenen Inhalte, bevor Du größere Änderungen vornimmst: [Backup erstellen](/tutorials/gameserver/soldat-2/create-backup).
