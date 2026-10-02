---
description: Game-Master-Modus auf einem Arma Reforger Server einrichten, Game-Master-Rolle vergeben und Budgets verstehen
---

# So richtest du Game Master auf deinem Arma Reforger Server ein

Game Master ist ein Spielmodus, in dem nichts vorgeplant ist. Ein Spieler übernimmt die Rolle des Game Masters und bestimmt, was als Nächstes passiert: Er platziert KI-Einheiten, Fahrzeuge und Objekte, gibt Gruppen Wegpunkte und steuert so das Geschehen in Echtzeit. Der Modus entspricht dem Zeus-Modus aus Arma 3.

## Game-Master-Szenario starten

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Szenario ID eintragen</b><br>
   Trage eine der folgenden Szenario IDs in das Feld **Szenario ID** ein:

   | Szenario | Szenario ID |
   |----------|-------------|
   | Game Master – Everon | `{59AD59368755F41A}Missions/21_GM_Eden.conf` |
   | Game Master – Arland | `{2BBBE828037C6F4B}Missions/22_GM_Arland.conf` |
   | Game Master – Kolguyev | `{F45C6C15D31252E6}Missions/27_GM_Cain.conf` |

4. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu.

:::: info Hinweis
Das Feld **Szenario ID** überschreibt bei jedem Serverstart den Eintrag `scenarioId` in der `config.json`. Ändere das Szenario deshalb immer in der Verwaltung. Weitere Szenarien findest du in der Anleitung [Szenario ändern](szenario-aendern.md).
::::

## Wer Game Master wird

Auf einem Game-Master-Server gelten folgende Regeln:

- Ein als Server-Admin eingetragener Spieler hat **immer** Zugriff auf die Game-Master-Oberfläche.
- Ist kein Game Master auf dem Server, erhält der **erste Spieler, der sich verbindet**, die Game-Master-Rolle.
- Die Rolle kann nicht weitergegeben werden, solange dieser Spieler verbunden ist.

:::: warning Achtung
Ist kein Game Master auf dem Server, erhält der erste Spieler, der beitritt, die Game-Master-Rolle – auch wenn du als Admin eingetragen bist. Als eingetragener Admin hast du aber jederzeit selbst Zugriff auf die Game-Master-Oberfläche. Möchtest du verhindern, dass Fremde die Rolle übernehmen, tritt deinem Server als Erster bei oder schütze ihn mit einem **Server Passwort** in den **Einstellungen**, solange du nicht online bist.
::::

### Dich als Admin eintragen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>SteamID64 eintragen</b><br>
   Öffne die Datei `config.json` und trage deine SteamID64 im Bereich `"game"` unter `"admins"` ein:

   ```json
   "game": {
     "admins": [
       "76561198000000001"
     ]
   }
   ```

   Die Liste kann maximal 20 Einträge enthalten.

   :::: tip Tipp
   Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server nicht startet.
   ::::

4. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: tip Tipp
Wie du deine SteamID64 findest, erfährst du in der Anleitung [SteamID64 herausfinden](../steamid64-herausfinden.md). Weitere Details zu Admins findest du unter [Admin hinzufügen](admin-hinzufuegen.md) und [Admin werden](admin-werden.md).
::::

### Im Spiel als Admin anmelden

Zusätzlich kannst du dich im Spiel als Server-Admin anmelden. Lege dafür in der Verwaltung unter **Einstellungen** ein **Admin Passwort** fest. Öffne im Spiel den Chat – in der Lobby mit `C`, im laufenden Spiel mit `Enter` – und gib folgenden Befehl ein:

```
#login DeinAdminPasswort
```

Als Admin in der `config.json` eingetragene Spieler können sich auch ohne Passwort mit `#login` anmelden. Weitere Befehle findest du in der Anleitung [Admin werden](admin-werden.md).

## Budgets

Was der Game Master platzieren kann, wird durch Budgets begrenzt. Sie werden im Entity Browser unten rechts angezeigt:

| Budget | Gilt für |
|--------|----------|
| Object Budget | Objekte wie Requisiten und Kompositionen |
| AI Budget | KI-gesteuerte Einheiten, z.B. Soldaten |
| Vehicle Budget | Fahrzeuge wie Autos und Panzerfahrzeuge |
| System Budget | Respawn-Punkte, Ziele, Arsenale usw. |

Erreicht ein Budget 100 %, kann der Game Master von diesem Typ nichts mehr platzieren, bis vorhandene Einträge entfernt werden. Die anderen Budgets sind davon nicht betroffen, z.B. lassen sich bei vollem AI Budget weiterhin Fahrzeuge platzieren.

:::: tip Tipp
Über die Funktion **Clear Destroyed Entities** in der Werkzeugleiste des Game Masters entfernst du alle getöteten Soldaten und zerstörten Fahrzeuge. Dadurch wird Budget frei, das sie noch belegen.
::::

:::: info Hinweis
Zusätzlich kannst du die Anzahl der KI-Einheiten auf deinem Server mit dem Eintrag `aiLimit` im Bereich `"operating"` der `config.json` serverweit begrenzen. Ist dieses Limit erreicht, kann kein System weitere KI-Einheiten erzeugen – das betrifft auch Einheiten, die der Game Master platzieren möchte. Wie das geht, erfährst du in der Anleitung [KI deaktivieren oder begrenzen](ki-deaktivieren.md).
::::

## Game-Master-Sitzungen speichern

Sofern das Szenario Speichern unterstützt, legt der Server automatisch Speicherstände an. Standardmäßig erstellt er alle 10 Minuten einen Speicherstand (`autoSaveInterval`) und behält die letzten 10 (`saveRetention`). Beide Werte kannst du im optionalen Bereich `"persistence"` unter `"gameProperties"` in der `config.json` anpassen, wie in der Anleitung [Szenario-Einstellungen ändern](szenario-einstellungen-aendern.md) beschrieben.

:::: tip Tipp
Wie du einen Speicherstand sicherst oder auf den Server lädst, erfährst du in den Anleitungen [Savegame herunterladen](savegame-herunterladen.md) und [Savegame hinzufügen](savegame-hinzufuegen.md). Erstelle vor größeren Änderungen zusätzlich ein [Backup](backup-erstellen.md).
::::
