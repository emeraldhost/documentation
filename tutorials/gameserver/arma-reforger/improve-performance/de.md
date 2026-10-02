---
slug: "performance-verbessern"
language: "de"
title: "So verbesserst Du die Performance auf Deinem Arma Reforger Server"
description: "Performance auf einem Arma Reforger Server verbessern – Server-FPS, Sichtweiten, KI und Navmesh"
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
short_title: "Performance verbessern"
sort: 12
related: ["gameserver/arma-reforger/disable-ai", "gameserver/arma-reforger/configure-server", "gameserver/arma-reforger/read-server-log", "gameserver/arma-reforger/troubleshoot-server"]
---
Die Performance Deines Arma Reforger Servers hängt vor allem von den Server-FPS, den Sichtweiten, der Anzahl der KI-Einheiten und den installierten Mods ab. In dieser Anleitung zeigen wir Dir, welche Einstellungen Du dafür in der Verwaltung und in der `config.json` anpassen kannst.

> [!NOTE]
> Einige Werte der `config.json` werden bei jedem Serverstart aus den **Einstellungen** der Verwaltung überschrieben. Die hier beschriebenen Einträge unter `gameProperties` und `operating` gehören nicht dazu und bleiben erhalten. Einen Überblick über alle Einträge findest Du unter [Server konfigurieren](/tutorials/gameserver/arma-reforger/configure-server).

## Server-FPS begrenzen

Die Server-FPS legen fest, wie oft Dein Server die Spielwelt pro Sekunde berechnet. Bohemia Interactive empfiehlt dringend, die Server-FPS auf einen Wert zwischen 60 und 120 zu begrenzen – ohne Begrenzung kann der Server versuchen, alle verfügbaren Ressourcen zu nutzen.

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Maximale FPS eintragen**\
   Trage im Feld **Maximale FPS** einen Wert zwischen `60` und `120` ein. Standardmäßig ist `120` eingestellt.

4. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu.

> [!WARNING]
> Lass das Feld **Maximale FPS** nicht leer. Ein leeres Feld bedeutet keine Begrenzung – der Server kann dann versuchen, alle verfügbaren Ressourcen zu nutzen.

## Performance messen

Mit dem Feld **[Advanced] Log FPS Interval** schreibt Dein Server in regelmäßigen Abständen eine Zeile mit Leistungswerten in die Konsole und in das Server-Log. So kannst Du prüfen, ob Deine Änderungen etwas bewirken.

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Intervall eintragen**\
   Trage im Feld **[Advanced] Log FPS Interval** ein, nach wie vielen Sekunden jeweils eine neue Zeile ausgegeben werden soll, z.B. `60` für einmal pro Minute. Mit `0` ist die Ausgabe deaktiviert.

4. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu.

> [!TIP]
> **Beispiel**
>
> ```text
> FPS: 60.0, frame time (avg: 16.7 ms, min: 9.3 ms, max: 23.7 ms), Mem: 3291106 kB, Player: 2, AI: 104, Veh: 0 (17), Proj (S: 12, M: 0, G: 0 | 12), RplItemsS: 410, RplItemsC0: 17068
> ```

### Werte der Leistungsstatistik

| Wert | Bedeutung |
| ---- | --------- |
| `FPS` | Aktuelle Server-FPS |
| `frame time` | Durchschnittliche (`avg`), minimale (`min`) und maximale (`max`) Zeit, die der Server für ein Frame benötigt |
| `Mem` | Aktuelle Speichernutzung in Kilobyte, wie sie der Server intern meldet |
| `Player` | Anzahl der Spieler auf dem Server |
| `AI` | Anzahl der KI-Einheiten, die aktuell auf dem Server gespawnt sind |
| `Veh` | Die Zahl in Klammern ist die Anzahl der Fahrzeuge, die aktuell auf dem Server gespawnt sind |

> [!NOTE]
> Der Wert bei `Mem` ist nur ein ungefährer Wert des Servers und kann von der tatsächlichen Speichernutzung abweichen.

> [!TIP]
> Wie Du ältere Ausgaben im Server-Log findest, erfährst Du unter [Server-Log auslesen](/tutorials/gameserver/arma-reforger/read-server-log).

## Sichtweiten in der config.json anpassen

Unter `gameProperties` in der `config.json` legst Du die Sichtweiten Deines Servers fest. Niedrigere Werte für `serverMaxViewDistance` und `networkViewDistance` können die Last auf Deinem Server verringern, da weniger Objekte an die Spieler übertragen werden. Beachte dabei, dass Objekte außerhalb der `networkViewDistance` nicht an die Spieler übertragen werden.

| Eintrag | Bereich | Standard bei EmeraldHost | Beschreibung |
| ------- | ------- | ------------------------ | ------------ |
| `serverMaxViewDistance` | 500 – 10000 | `2500` | Maximale Sichtweite auf dem Server |
| `networkViewDistance` | 500 – 5000 | `1000` | Maximale Reichweite, in der Objekte über das Netzwerk an die Spieler übertragen werden |
| `serverMinGrassDistance` | 0 oder 50 – 150 | `50` | Minimale Grasdistanz in Metern, die den Spielern vorgegeben wird. Mit `0` wird keine Distanz vorgegeben. |

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **config.json öffnen**\
   Öffne die Datei `config.json` im Hauptverzeichnis und suche den Bereich `"gameProperties"` innerhalb von `"game"`.

4. **Werte anpassen**\
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

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server nicht startet.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

## KI-Anzahl begrenzen

Viele KI-Einheiten erhöhen die Last auf Deinem Server deutlich. Mit dem Eintrag `aiLimit` im Bereich `"operating"` legst Du eine Obergrenze fest. Ist sie erreicht, können keine weiteren KI-Einheiten gespawnt werden. Standardmäßig ist kein Limit gesetzt.

> [!TIP]
> Wie Du `aiLimit` einträgst oder die KI komplett deaktivierst, erfährst Du unter [KI deaktivieren oder begrenzen](/tutorials/gameserver/arma-reforger/disable-ai).

## Navmesh-Streaming deaktivieren (optional)

Die KI nutzt ein sogenanntes Navmesh, um sich auf der Karte zu bewegen. Standardmäßig lädt der Server dieses Navmesh nach und nach. Wenn Du das Streaming deaktivierst, lädt der Server das gesamte Navmesh in den Arbeitsspeicher. Das sorgt für eine etwas bessere Server-Performance und schnellere Reaktionen von sich bewegenden KI-Einheiten.

> [!WARNING]
> Diese Einstellung ist für Fortgeschrittene gedacht. Je nach Karte benötigt Dein Server dadurch bis zu mehrere hundert MB mehr Arbeitsspeicher. Prüfe danach, ob der Arbeitsspeicher Deines Servers ausreicht, z.B. über den Wert `Mem` der [Leistungsstatistik](#werte-der-leistungsstatistik).

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **config.json öffnen**\
   Öffne die Datei `config.json` im Hauptverzeichnis.

4. **Navmesh-Streaming deaktivieren**\
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

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server nicht startet.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!NOTE]
> Um das Navmesh-Streaming wieder zu aktivieren, stoppe Deinen Server und entferne die Zeile `"disableNavmeshStreaming"` aus der `config.json`. Steht im Bereich `"operating"` ein anderer Eintrag davor, entferne auch das Komma am Ende dieses Eintrags. Prüfe die Datei anschließend mit [JSONLint](https://jsonlint.com/).

## Mods reduzieren

Jeder Mod erhöht die Last auf Deinem Server. Besonders Mods, die viele Objekte, Fahrzeuge oder KI-Einheiten hinzufügen, wirken sich auf die Performance aus. Nutze daher nur die Mods, die Du wirklich brauchst, und entferne nicht mehr benötigte Einträge aus dem Bereich `"mods"` – stoppe dazu vorher Deinen Server. Wie Du Mods verwaltest, erfährst Du unter [Mods hinzufügen](/tutorials/gameserver/arma-reforger/add-mods).
