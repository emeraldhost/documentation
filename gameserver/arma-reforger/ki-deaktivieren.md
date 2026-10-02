---
description: KI auf einem Arma Reforger Server komplett deaktivieren oder die Anzahl der KI-Einheiten begrenzen
---

# So deaktivierst oder begrenzt du die KI auf deinem Arma Reforger Server

Über den Bereich `"operating"` in der `config.json` kannst du die KI auf deinem Server komplett abschalten oder eine Obergrenze für die Anzahl der KI-Einheiten festlegen. Das ist z.B. sinnvoll für reine PvP-Server oder um die Serverleistung zu schonen.

:::: info Hinweis
Der Bereich `"operating"` ist in der `config.json` deines Servers standardmäßig nicht vorhanden. Du legst ihn einmalig selbst an. Die Verwaltung überschreibt diesen Bereich beim Serverstart nicht, deine Einstellungen bleiben also erhalten.
::::

## Verfügbare Optionen

| Option | Standardwert | Beschreibung |
|--------|--------------|--------------|
| `disableAI` | `false` | Bei `true` wird die KI auf dem Server komplett deaktiviert. |
| `aiLimit` | `-1` | Maximale Anzahl an KI-Einheiten. Ist die Grenze erreicht, kann kein System weitere KI spawnen. Negative Werte werden ignoriert, es gilt dann keine Grenze. |

## KI komplett deaktivieren

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>config.json öffnen</b><br>
   Öffne die Datei `config.json` im Hauptverzeichnis deines Servers.

4. <b>operating-Bereich hinzufügen</b><br>
   Füge nach dem Bereich `"game"` den neuen Bereich `"operating"` hinzu. Setze dafür hinter die schließende Klammer von `"game"` ein Komma:

   ```json
   {
     "game": {
       ...
     },
     "operating": {
       "disableAI": true
     }
   }
   ```

   Der Bereich `"operating"` steht auf derselben Ebene wie `"game"` und nicht innerhalb davon. `...` steht hier für deine bestehenden Einstellungen im Bereich `"game"`, die du unverändert lässt.

   :::: tip Tipp
   Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server nicht startet.
   ::::

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: warning Achtung
Mit `"disableAI": true` wird die KI-Funktionalität auf dem Server vollständig abgeschaltet. Szenarien, in denen KI-Gegner oder KI-Trupps vorkommen (z.B. Combat Ops oder Conflict mit KI-Trupps), funktionieren dann nicht mehr wie vorgesehen. Wähle die vollständige Deaktivierung nur, wenn dein Szenario ohne KI auskommt.
::::

## Anzahl der KI-Einheiten begrenzen

Statt die KI komplett abzuschalten, kannst du auch eine Obergrenze festlegen. Das hilft vor allem bei Leistungsproblemen durch zu viele KI-Einheiten. Die Grenze gilt für alle Systeme, die KI spawnen – damit z.B. auch für KI, die ein [Game Master](game-master-einrichten.md) platziert.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>config.json öffnen</b><br>
   Öffne die Datei `config.json` im Hauptverzeichnis deines Servers.

4. <b>aiLimit eintragen</b><br>
   Füge im Bereich `"operating"` den Eintrag `"aiLimit"` mit der gewünschten Höchstzahl hinzu. Gibt es den Bereich noch nicht, legst du ihn wie oben beschrieben nach `"game"` an:

   ```json
   "operating": {
     "aiLimit": 60
   }
   ```

   Hast du zuvor `"disableAI": true` eingetragen, setze den Wert auf `false` oder entferne den Eintrag – sonst bleibt die KI komplett deaktiviert und die Grenze hat keine Wirkung. Mehrere Einträge innerhalb von `"operating"` trennst du mit einem Komma. Hinter dem letzten Eintrag steht kein Komma.

   :::: tip Tipp
   Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server nicht startet.
   ::::

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: info Hinweis
Um die Begrenzung wieder aufzuheben, setzt du `"aiLimit"` auf `-1` oder entfernst den Eintrag. Spielerlimits pro Fraktion legst du über den Bereich `missionHeader` fest – siehe [Szenario-Einstellungen ändern](szenario-einstellungen-aendern.md).
::::

:::: tip Tipp
Weitere Tipps für eine bessere Serverleistung findest du in der Anleitung [Performance verbessern](performance-verbessern.md). Einen Überblick über alle Einstellungen der `config.json` bekommst du unter [Server konfigurieren](server-konfigurieren.md).
::::
