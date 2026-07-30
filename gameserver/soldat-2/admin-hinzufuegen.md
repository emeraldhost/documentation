---
description: Admin auf einem Soldat 2 Server hinzufügen
---

# So fügst du einen Admin auf deinem Soldat 2 Server hinzu

Soldat 2 kennt zwei Wege zu Adminrechten: einen **dauerhaften Admin über die PlayFab-ID** und ein **RCON-Passwort**, mit dem sich beliebig viele Spieler im Spiel anmelden können. Eine Adminliste als Datei gibt es nicht.

:::: info Hinweis
Das Feld für den dauerhaften Admin ist **Einzahl** – pro Server lässt sich genau **eine** PlayFab-ID hinterlegen. Alle weiteren Admins melden sich über das RCON-Passwort an.
::::

## Dauerhaften Admin über die PlayFab-ID setzen

Soldat 2 identifiziert Spieler über ihre **PlayFab-ID**, eine 16-stellige hexadezimale Zeichenfolge wie `9FD985AB3FE67850`. Eine Steam-ID wird hier nicht verwendet.

### PlayFab-ID herausfinden

1. <b>Server starten</b><br>
   Starte deinen Server über die **Verwaltung** und öffne dort die Serverkonsole.

2. <b>Server beitreten</b><br>
   Verbinde dich mit deinem Server. Wie das geht, steht unter [Server beitreten](server-beitreten.md).

3. <b>Konsolenausgabe ablesen</b><br>
   Beim Beitritt schreibt der Server eine Zeile nach folgendem Muster:

   ```
   1 DEIN_NAME joined the server [9FD985AB3FE67850]
   ```

   Der Wert in den eckigen Klammern ist die PlayFab-ID.

4. <b>ID kopieren</b><br>
   Notiere dir die ID genau so, wie sie in der Konsole steht.

:::: tip Tipp
Auf demselben Weg findest du auch die PlayFab-ID eines Mitspielers – lass ihn dazu einmal auf deinen Server verbinden und lies die passende Zeile aus der Konsole ab.
::::

### PlayFab-ID eintragen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die **Verwaltung**.

2. <b>ID hinterlegen</b><br>
   Trage die PlayFab-ID in der **Verwaltung** im Feld für den Admin ein.

3. <b>Server starten</b><br>
   Starte deinen Server. Der Wert wird beim Start in die `autoconfig.ini` geschrieben:

   ```
   AdminPlayfabId=9FD985AB3FE67850
   ```

4. <b>Beitreten und prüfen</b><br>
   Verbinde dich mit deinem Server. Im Scoreboard steht hinter deinem Namen ein rotes `[Admin]`.

:::: danger Wichtig
Die `autoconfig.ini` wird beim **Stoppen** des Servers komplett neu geschrieben. Änderungen, die du bei laufendem Server in die Datei schreibst, gehen dabei verloren. Bearbeite die Datei deshalb ausschließlich, wenn der Server gestoppt ist.
::::

:::: warning Achtung
Die Werte `Name`, `Port`, `WebSocketsPort`, `WebSocketsRconPort`, `RconPassword`, `MaxPlayers`, `GreetMessage`, `AdminPlayfabId` und `ServerPassword` werden bei **jedem Serverstart** aus der **Verwaltung** in die `autoconfig.ini` geschrieben. Diese Werte gehören deshalb in die Verwaltung und nicht in die Datei.
::::

:::: info Schreibweise
Für diesen Schlüssel findest du im Netz zwei Schreibweisen: `AdminPlayfabId` und `AdminPlayfabID`. Maßgeblich ist immer die Schreibweise, die bereits in deiner `autoconfig.ini` steht – übernimm sie genau so.
::::

## Weitere Admins über das RCON-Passwort

Für alle weiteren Admins nutzt du das RCON-Passwort. Damit kann sich jeder Spieler direkt im Spiel als Admin anmelden.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die **Verwaltung**.

2. <b>Passwort setzen</b><br>
   Trage in der **Verwaltung** im Feld für das RCON-Passwort ein eigenes, langes Passwort ein.

3. <b>Server starten</b><br>
   Starte deinen Server.

4. <b>Im Spiel anmelden</b><br>
   Öffne im Spiel die Konsole und melde dich an:

   ```
   rcon DeinRconPasswort
   ```

:::: danger Wichtig
Ab Werk ist ein Standardpasswort gesetzt. Ändere es unbedingt – wer das RCON-Passwort kennt, hat die volle Kontrolle über deinen Server.
::::

## Die Konsole im Spiel

1. <b>Konsole öffnen</b><br>
   Drücke im Spiel `Alt` + `~`.

2. <b>Befehl eingeben</b><br>
   Befehle, die den Server betreffen, stellst du `rcon` voran:

   ```
   rcon listplayers
   ```

3. <b>Befehle anzeigen</b><br>
   Mit der `Tab`-Taste blendet dir die Konsole die verfügbaren Befehle ein und vervollständigt deine Eingabe.

:::: info Hinweis
Die Befehle unterscheiden **nicht** zwischen Groß- und Kleinschreibung. `rcon ListPlayers` und `rcon listplayers` bewirken dasselbe.
::::

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

Mit `set` und `get` änderst du Werte, ohne den Server zu stoppen. Das funktioniert für Konfigurationsvariablen ebenso wie für Regelwerte:

```
rcon set FillBotsCount 5
```

```
rcon set Match.MinimumPlayers 4
```

:::: warning Achtung
Änderungen über `set` gelten nur für die laufende Sitzung. Beim nächsten Serverstart gelten wieder die Werte aus der **Verwaltung** beziehungsweise aus der `autoconfig.ini`.
::::

:::: tip Tipp
Wie du Spieler als Admin vom Server entfernst, erfährst du unter [Spieler kicken & bannen](spieler-kicken-bannen.md).
::::
