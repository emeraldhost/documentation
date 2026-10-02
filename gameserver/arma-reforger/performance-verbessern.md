---
description: Performance auf einem Arma Reforger Server verbessern – Server-FPS, Sichtweiten, KI und Navmesh
---

# So verbesserst du die Performance auf deinem Arma Reforger Server

Die Performance deines Arma Reforger Servers hängt vor allem von den Server-FPS, den Sichtweiten, der Anzahl der KI-Einheiten und den installierten Mods ab. In dieser Anleitung zeigen wir dir, welche Einstellungen du dafür in der Verwaltung und in der `config.json` anpassen kannst.

:::: info Hinweis
Einige Werte der `config.json` werden bei jedem Serverstart aus den **Einstellungen** der Verwaltung überschrieben. Die hier beschriebenen Einträge unter `gameProperties` und `operating` gehören nicht dazu und bleiben erhalten. Einen Überblick über alle Einträge findest du unter [Server konfigurieren](server-konfigurieren.md).
::::

## Server-FPS begrenzen

Die Server-FPS legen fest, wie oft dein Server die Spielwelt pro Sekunde berechnet. Bohemia Interactive empfiehlt dringend, die Server-FPS auf einen Wert zwischen 60 und 120 zu begrenzen – ohne Begrenzung kann der Server versuchen, alle verfügbaren Ressourcen zu nutzen.

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Maximale FPS eintragen</b><br>
   Trage im Feld **Maximale FPS** einen Wert zwischen `60` und `120` ein. Standardmäßig ist `120` eingestellt.

4. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu.

:::: warning Achtung
Lass das Feld **Maximale FPS** nicht leer. Ein leeres Feld bedeutet keine Begrenzung – der Server kann dann versuchen, alle verfügbaren Ressourcen zu nutzen.
::::

## Performance messen

Mit dem Feld **[Advanced] Log FPS Interval** schreibt dein Server in regelmäßigen Abständen eine Zeile mit Leistungswerten in die Konsole und in das Server-Log. So kannst du prüfen, ob deine Änderungen etwas bewirken.

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Intervall eintragen</b><br>
   Trage im Feld **[Advanced] Log FPS Interval** ein, nach wie vielen Sekunden jeweils eine neue Zeile ausgegeben werden soll, z.B. `60` für einmal pro Minute. Mit `0` ist die Ausgabe deaktiviert.

4. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu.

:::: tip Beispiel
```
FPS: 60.0, frame time (avg: 16.7 ms, min: 9.3 ms, max: 23.7 ms), Mem: 3291106 kB, Player: 2, AI: 104, Veh: 0 (17), Proj (S: 12, M: 0, G: 0 | 12), RplItemsS: 410, RplItemsC0: 17068
```
::::

### Werte der Leistungsstatistik

| Wert | Bedeutung |
| ---- | --------- |
| `FPS` | Aktuelle Server-FPS |
| `frame time` | Durchschnittliche (`avg`), minimale (`min`) und maximale (`max`) Zeit, die der Server für ein Frame benötigt |
| `Mem` | Aktuelle Speichernutzung in Kilobyte, wie sie der Server intern meldet |
| `Player` | Anzahl der Spieler auf dem Server |
| `AI` | Anzahl der KI-Einheiten, die aktuell auf dem Server gespawnt sind |
| `Veh` | Die Zahl in Klammern ist die Anzahl der Fahrzeuge, die aktuell auf dem Server gespawnt sind |

:::: info Hinweis
Der Wert bei `Mem` ist nur ein ungefährer Wert des Servers und kann von der tatsächlichen Speichernutzung abweichen.
::::

:::: tip Tipp
Wie du ältere Ausgaben im Server-Log findest, erfährst du unter [Server-Log auslesen](server-log-auslesen.md).
::::

## Sichtweiten in der config.json anpassen

Unter `gameProperties` in der `config.json` legst du die Sichtweiten deines Servers fest. Niedrigere Werte für `serverMaxViewDistance` und `networkViewDistance` können die Last auf deinem Server verringern, da weniger Objekte an die Spieler übertragen werden. Beachte dabei, dass Objekte außerhalb der `networkViewDistance` nicht an die Spieler übertragen werden.

| Eintrag | Bereich | Standard bei EmeraldHost | Beschreibung |
| ------- | ------- | ------------------------ | ------------ |
| `serverMaxViewDistance` | 500 – 10000 | `2500` | Maximale Sichtweite auf dem Server |
| `networkViewDistance` | 500 – 5000 | `1000` | Maximale Reichweite, in der Objekte über das Netzwerk an die Spieler übertragen werden |
| `serverMinGrassDistance` | 0 oder 50 – 150 | `50` | Minimale Grasdistanz in Metern, die den Spielern vorgegeben wird. Mit `0` wird keine Distanz vorgegeben. |

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>config.json öffnen</b><br>
   Öffne die Datei `config.json` im Hauptverzeichnis und suche den Bereich `"gameProperties"` innerhalb von `"game"`.

4. <b>Werte anpassen</b><br>
   Passe die gewünschten Werte an:

   ```json
   "gameProperties": {
     "serverMaxViewDistance": 2000,
     "serverMinGrassDistance": 50,
     "networkViewDistance": 1000,
     ...
   }
   ```

   `...` steht für die übrigen, unveränderten Einträge. Ändere nur die Zahlen und lass die übrigen Einträge in `"gameProperties"` unverändert.

   :::: tip Tipp
   Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server nicht startet.
   ::::

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

## KI-Anzahl begrenzen

Viele KI-Einheiten erhöhen die Last auf deinem Server deutlich. Mit dem Eintrag `aiLimit` im Bereich `"operating"` legst du eine Obergrenze fest. Ist sie erreicht, können keine weiteren KI-Einheiten gespawnt werden. Standardmäßig ist kein Limit gesetzt.

:::: tip Tipp
Wie du `aiLimit` einträgst oder die KI komplett deaktivierst, erfährst du unter [KI deaktivieren oder begrenzen](ki-deaktivieren.md).
::::

## Navmesh-Streaming deaktivieren (optional)

Die KI nutzt ein sogenanntes Navmesh, um sich auf der Karte zu bewegen. Standardmäßig lädt der Server dieses Navmesh nach und nach. Wenn du das Streaming deaktivierst, lädt der Server das gesamte Navmesh in den Arbeitsspeicher. Das sorgt für eine etwas bessere Server-Performance und schnellere Reaktionen von sich bewegenden KI-Einheiten.

:::: warning Achtung
Diese Einstellung ist für Fortgeschrittene gedacht. Je nach Karte benötigt dein Server dadurch bis zu mehrere hundert MB mehr Arbeitsspeicher. Prüfe danach, ob der Arbeitsspeicher deines Servers ausreicht, z.B. über den Wert `Mem` der [Leistungsstatistik](#werte-der-leistungsstatistik).
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>config.json öffnen</b><br>
   Öffne die Datei `config.json` im Hauptverzeichnis.

4. <b>Navmesh-Streaming deaktivieren</b><br>
   Füge den Bereich `"operating"` auf oberster Ebene nach dem Bereich `"game"` hinzu. Setze dazu ein Komma hinter die schließende Klammer von `"game"`:

   ```json
   "game": {
     ...
   },
   "operating": {
     "disableNavmeshStreaming": []
   }
   ```

   `...` steht für die übrigen, unveränderten Einträge. Gibt es den Bereich `"operating"` bereits, füge dort nur die Zeile `"disableNavmeshStreaming": []` hinzu.

   | Wert | Wirkung |
   | ---- | ------- |
   | Eintrag nicht vorhanden | Navmesh-Streaming ist aktiv (Standard) |
   | `[]` | Navmesh-Streaming ist für alle Navmeshes deaktiviert |
   | `["Soldiers", "BTRlike"]` | Navmesh-Streaming ist nur für die angegebenen Navmeshes deaktiviert |

   :::: tip Tipp
   Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server nicht startet.
   ::::

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: info Hinweis
Um das Navmesh-Streaming wieder zu aktivieren, stoppe deinen Server und entferne die Zeile `"disableNavmeshStreaming"` aus der `config.json`. Steht im Bereich `"operating"` ein anderer Eintrag davor, entferne auch das Komma am Ende dieses Eintrags. Prüfe die Datei anschließend mit [JSONLint](https://jsonlint.com/).
::::

## Mods reduzieren

Jeder Mod erhöht die Last auf deinem Server. Besonders Mods, die viele Objekte, Fahrzeuge oder KI-Einheiten hinzufügen, wirken sich auf die Performance aus. Nutze daher nur die Mods, die du wirklich brauchst, und entferne nicht mehr benötigte Einträge aus dem Bereich `"mods"` – stoppe dazu vorher deinen Server. Wie du Mods verwaltest, erfährst du unter [Mods hinzufügen](mods-hinzufuegen.md).
