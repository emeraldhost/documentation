---
description: Mods, eigene Karten und Skripte auf einem Soldat 2 Server hinzufügen
---

# So fügst du Mods zu deinem Soldat 2 Server hinzu

Soldat 2 hat keinen Workshop und kein Mod-Paketformat. Stattdessen liegt praktisch alles, was das Spiel ausmacht, als einzelne Datei im Serververzeichnis – Karten, Spielmodi, Modifier, Kartenrotationen und Skripte. Du lädst sie per [SFTP](../sftp-verbindung-herstellen.md) hoch und bindest sie über die Konfiguration oder die Konsole ein.

:::: warning Achtung
Ob eigene Karten, Modifier und Skripte automatisch an deine Mitspieler übertragen werden, ist nicht dokumentiert. Gib die Dateien, die du auf den Server lädst, deshalb sicherheitshalber auch direkt an deine Mitspieler weiter – so hat jeder denselben Stand.
::::

## Die Ordnerstruktur

Alle Ordner liegen im Hauptverzeichnis deines Servers:

| Ordner | Inhalt |
|--------|--------|
| `Levels/` | Karten als JSON-Dateien, jeweils in einem eigenen Unterordner |
| `Modifiers/Custom/` | Modifier – verändern Objekte, Waffenwerte und Spielparameter |
| `Rules/Custom/` | Spielmodi und Rundenregeln |
| `Scripts/Custom/` | Eigene C#-Skripte |
| `Cycles/Custom/` | Kartenrotationen |

:::: info Hinweis
Karten liegen bei Soldat 2 als `.json`-Datei vor – nicht als `.pms` wie beim ersten Soldat. Dateien aus dem Vorgänger funktionieren hier nicht.
::::

## Eigene Karten hinzufügen

1. <b>Karte herunterladen</b><br>
   Lade die gewünschte Karte herunter. Eine große Sammlung findest du unter `tms2.jrgp.org`.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die **Verwaltung**.

3. <b>Karte hochladen</b><br>
   Lade die Karte per [SFTP](../sftp-verbindung-herstellen.md) in einen Unterordner von `Levels/` hoch – so, wie die Karte ausgeliefert wird:

   ```
   Levels/<Ordner>/<Kartenname>.json
   ```

4. <b>Server starten</b><br>
   Starte deinen Server.

5. <b>Karte laden</b><br>
   Öffne im Spiel die Konsole und lade die Karte mit einem Spielmodus – der Spielmodus heißt genauso wie die zugehörige Datei in `Rules/`:

   ```
   rcon loadmap dm_epitaph Deathmatch
   ```

:::: warning Achtung
Der Kartenname wird **ohne Pfad und ohne die Endung `.json`** angegeben. Die Schreibweise unterscheidet Groß- und Kleinschreibung – auf deinem Linux-Server ist das entscheidend. Welche Karten der Server kennt, zeigt dir `rcon listmaps`.
::::

## Modifier hinzufügen

Modifier sind der schnellste Weg, das Spielgeschehen zu verändern: Sie überschreiben Werte von Objekten, Waffen und Spielparametern.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die **Verwaltung**.

2. <b>Vorlage ansehen</b><br>
   Öffne per [SFTP](../sftp-verbindung-herstellen.md) die Datei `Modifiers/_default.json`. Sie enthält alle Standardwerte und dient als Nachschlagewerk – **bearbeite sie nicht**.

3. <b>Eigenen Modifier anlegen</b><br>
   Lege eine neue Datei an:

   ```
   Modifiers/Custom/MeinModifier.json
   ```

4. <b>Werte eintragen</b><br>
   Trage nur die Werte ein, die du ändern möchtest. Die Parameter stehen im Abschnitt `"Objects"`. Alles, was du nicht angibst, bleibt auf dem Standardwert.

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

6. <b>Modifier aktivieren</b><br>
   Öffne die Konsole und aktiviere den Modifier über seinen Dateinamen ohne `.json`:

   ```
   rcon addmodifier MeinModifier
   rcon restart
   ```

:::: info Listen erweitern statt ersetzen
Bei Werten, die eine Liste enthalten, kannst du gezielt ergänzen oder entfernen, statt die ganze Liste neu zu schreiben: Ein vorangestelltes `+` fügt einen Eintrag hinzu, ein `-` entfernt ihn.
::::

:::: warning Achtung
`rcon addmodifier` wirkt erst nach einem `rcon restart` der Runde. Mit `rcon removemodifier <Name>` schaltest du einen Modifier wieder ab.
::::

## Eigene Spielmodi über Regeldateien

Spielmodi und Rundenregeln liegen als JSON-Datei unter `Rules/Custom/`. Darüber steuerst du zum Beispiel, wie lang eine Runde dauert und wie viele Punkte zum Sieg nötig sind:

| Schlüssel | Bedeutung |
|-----------|-----------|
| `Match.MatchSecs` | Rundendauer in Sekunden |
| `Match.ScoreLimit` | Punktelimit, ab dem die Runde endet |
| `GameScript` | Name des C#-Skripts, das für diesen Spielmodus geladen wird |

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die **Verwaltung**.

2. <b>Regeldatei anlegen</b><br>
   Kopiere dir eine vorhandene Datei aus `Rules/` als Vorlage und lege sie unter neuem Namen ab:

   ```
   Rules/Custom/MeinModus.json
   ```

3. <b>Werte anpassen</b><br>
   Passe die gewünschten Werte an.

4. <b>Modus einbinden</b><br>
   Damit dein Modus gespielt wird, trägst du seinen Dateinamen ohne `.json` in deiner Kartenrotation unter `"Rules"` ein – siehe [Kartenrotation einrichten](#kartenrotation-einrichten).

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: tip Tipp
Einzelne Regelwerte kannst du auch im laufenden Betrieb testen, ohne den Server zu stoppen:

```
rcon set Match.MinimumPlayers 4
```

Solche Änderungen gelten nur für die laufende Sitzung.
::::

## Eigene Skripte einbinden

Für eigene Spiellogik bringt Soldat 2 ein C#-Skriptsystem mit.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die **Verwaltung**.

2. <b>Skript hochladen</b><br>
   Lade deine `.cs`-Datei per [SFTP](../sftp-verbindung-herstellen.md) hoch:

   ```
   Scripts/Custom/MeinSkript.cs
   ```

3. <b>Skript einbinden</b><br>
   Trage das Skript über den Schlüssel `GameScript` in einer Regeldatei unter `Rules/Custom/` ein. Alternativ bindest du es über einen Modifier ein.

4. <b>Server starten</b><br>
   Starte deinen Server und prüfe in der Serverkonsole der **Verwaltung**, ob das Skript fehlerfrei kompiliert wurde.

:::: tip Tipp
Änderst du ein Skript, musst du den Server nicht neu starten. Mit folgendem Befehl kompiliert der Server alle Skripte neu:

```
rcon reload
```
::::

:::: danger Wichtig
Skripte laufen mit den Rechten deines Servers. Installiere nur Skripte aus Quellen, denen du vertraust.
::::

## Kartenrotation einrichten

Eine Kartenrotation legst du als Cycle-Datei an. Der Server arbeitet die darin aufgeführten Runden nacheinander ab.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die **Verwaltung**.

2. <b>Cycle-Datei anlegen</b><br>
   Kopiere dir eine vorhandene Datei aus `Cycles/` als Vorlage und lege sie unter neuem Namen ab:

   ```
   Cycles/Custom/MeineRotation.json
   ```

3. <b>Runden eintragen</b><br>
   Jede Runde besteht aus einem Spielmodus (`"Rules"`) und einer Karte (`"Level"`) – beide **ohne Dateiendung**:

   ```
   [{
     "Rules": "Deathmatch",
     "Level": "dm_epitaph"
   }]
   ```

4. <b>Rotation aktivieren</b><br>
   Trage in der `autoconfig.ini` folgende Werte ein:

   ```
   GamesCycleFile=Cycles/Custom/MeineRotation.json
   UseLobby=False
   AllowVoting=False
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: warning Achtung
Ohne `UseLobby=False` und `AllowVoting=False` übersteuern Lobby und Spielerabstimmung deine Rotation – der Server springt dann auf andere Karten, als in der Cycle-Datei stehen.
::::

:::: tip Tipp
Eine Rotation lässt sich auch im laufenden Betrieb laden:

```
rcon loadcycle Cycles/Custom/MeineRotation.json
```
::::

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

:::: danger Wichtig
Die `autoconfig.ini` wird beim **Stoppen** des Servers komplett neu geschrieben. Änderungen, die du bei laufendem Server in die Datei schreibst, gehen dabei verloren. Bearbeite die Datei deshalb ausschließlich, wenn der Server gestoppt ist.
::::

:::: warning Achtung
Die Werte `Name`, `Port`, `WebSocketsPort`, `WebSocketsRconPort`, `RconPassword`, `MaxPlayers`, `GreetMessage`, `AdminPlayfabId` und `ServerPassword` werden bei **jedem Serverstart** aus der **Verwaltung** in die `autoconfig.ini` geschrieben. Diese Werte gehören deshalb in die Verwaltung und nicht in die Datei.
::::

:::: tip Tipp
Sichere deine Konfiguration und deine eigenen Inhalte, bevor du größere Änderungen vornimmst: [Backup erstellen](backup-erstellen.md).
::::
