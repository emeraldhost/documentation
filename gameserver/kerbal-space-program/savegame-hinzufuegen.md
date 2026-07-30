---
description: Savegame auf einem Kerbal Space Program Server hinzufügen
---

# So fügst du ein Savegame zu deinem Kerbal Space Program Server hinzu

Der Spielstand eines DarkMultiPlayer-Servers steckt nicht in einer einzelnen Datei, sondern in einem kompletten Ordner namens `Universe` im Hauptverzeichnis deines Servers. Darin legt der Server für jedes Schiff, jeden Kerbal und jeden Spieler eigene Textdateien an.

:::: info Hinweis
Der Ordnername `Universe` ist fest vorgegeben. Du musst also keinen Welt- oder Spielstandnamen in einer Konfiguration eintragen – der Servername hat mit dem Spielstand nichts zu tun.
::::

## Aufbau des Spielstands

| Ordner | Inhalt |
|--------|--------|
| `Universe/Vessels/` | Eine Datei je Schiff |
| `Universe/Kerbals/` | Eine Datei je Kerbal |
| `Universe/Scenarios/` | Fortschritt wie Wissenschaft, Geld, Ruf und Forschungsbaum – je Spieler ein eigener Unterordner |
| `Universe/Crafts/` | Gemeinsame Bauplan-Bibliothek |
| `Universe/Flags/` | Hochgeladene Flaggen |
| `Universe/Players/` | Öffentliche Schlüssel der Spieler |
| `Universe/Groups/` | Spielergruppen |
| `Universe/Permissions/` | Besitzrechte an Schiffen |

## Einzelspieler-Spielstand umwandeln

Eine normale KSP-Speicherdatei (`persistent.sfs`) lässt sich nicht direkt hochladen. Der DMP-Client bringt dafür einen Konverter mit, der aus deinem lokalen Spielstand einen fertigen `Universe`-Ordner erzeugt.

1. <b>DMP-Client installieren</b><br>
   Installiere den DMP-Client wie unter [Server beitreten](server-beitreten.md) beschrieben und starte Kerbal Space Program.

2. <b>Spielernamen eintragen</b><br>
   Trage im DMP-Fenster im Hauptmenü im Feld **Player name** genau den Namen ein, mit dem du später auch auf dem Server spielen möchtest.

3. <b>Optionen öffnen</b><br>
   Klicke im DMP-Fenster auf **Options** und anschließend auf **Advanced**.

4. <b>Konverter starten</b><br>
   Klicke auf **Generate DMP universe from saved game...**. Es öffnet sich das Fenster **Universe Converter** mit deinen lokalen Spielständen – klicke dort den gewünschten Spielstand an. Deine Spielstände liegen lokal unter:

   ```
   [KSP-Ordner]/saves/<Name des Spielstands>/
   ```

   :::: warning Achtung
   Ein bereits vorhandener Ordner `Universe` in deinem KSP-Ordner wird dabei ohne Rückfrage gelöscht und neu erzeugt.
   ::::

5. <b>Ergebnis prüfen</b><br>
   Im KSP-Ordner liegt jetzt der neue Ordner `Universe` mit den Unterordnern `Vessels`, `Kerbals` und `Scenarios`. Genau diesen Ordner lädst du im nächsten Schritt hoch.

## Savegame hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Solange der Server läuft, schreibt er ständig in den Ordner `Universe`.

2. <b>Bisherigen Stand sichern</b><br>
   Erstelle ein [Backup](backup-erstellen.md) oder lade den vorhandenen Ordner herunter: [Savegame herunterladen](savegame-herunterladen.md).

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Alten Spielstand entfernen</b><br>
   Lösche im Hauptverzeichnis deines Servers den vorhandenen Ordner:

   ```
   /Universe/
   ```

5. <b>Neuen Spielstand hochladen</b><br>
   Lade deinen `Universe`-Ordner mit allen Unterordnern in das Hauptverzeichnis hoch. Der Ordner muss exakt `Universe` heißen.

6. <b>Server starten</b><br>
   Starte deinen Server. Fehlende Unterordner legt er beim Start selbst an.

:::: danger Wichtig
Der Fortschritt liegt bei DarkMultiPlayer **pro Spieler** unter `Universe/Scenarios/<Spielername>/`. Nach der Umwandlung existiert nur der Ordner deines eigenen Spielernamens. Alle anderen Spieler starten auf dem Server mit frischem Fortschritt – einen gemeinsamen Karriere- oder Wissenschaftsstand für alle gibt es bei DMP nicht.
::::

:::: warning Achtung
Verwende auf dem Server denselben Spielernamen wie beim Umwandeln. Weicht der Name ab, findet der Server unter `Universe/Scenarios/` keinen passenden Ordner und dein umgewandelter Fortschritt wird dir nicht zugeordnet.
::::

:::: tip Tipp
Passen Spielmodus und Schwierigkeit nicht zu deinem hochgeladenen Spielstand, stellst du beides in der **Verwaltung** unter **Einstellungen** ein (**Game Mode** und **Game Difficulty**). Beide Werte werden bei jedem Serverstart aus der Verwaltung in die Konfiguration geschrieben – eine Änderung direkt in der Datei bleibt wirkungslos.
::::

:::: info Hinweis
Schiffe aus dem umgewandelten Spielstand liegen als einzelne Dateien in `Universe/Vessels/`. Ein einzelnes Schiff lässt sich dadurch gezielt entfernen, ohne den ganzen Spielstand anzufassen – stoppe den Server auch dafür.
::::
