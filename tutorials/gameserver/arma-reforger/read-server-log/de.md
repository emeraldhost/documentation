---
slug: "server-log-auslesen"
language: "de"
title: "So liest Du das Server-Log Deines Arma Reforger Servers aus"
description: "Server-Log eines Arma Reforger Servers in der Konsole mitlesen und die Log-Dateien per SFTP herunterladen"
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
short_title: "Server-Log auslesen"
sort: 15
related: ["gameserver/arma-reforger/troubleshoot-server", "gameserver/arma-reforger/improve-performance", "gameserver/arma-reforger/configure-server", "gameserver/arma-reforger/add-mods"]
---
Das Server-Log protokolliert, was Dein Arma Reforger Server tut: den Start, das Laden von Mods und Szenario sowie Fehler im laufenden Betrieb. Bei Problemen ist es die erste Anlaufstelle – und genau das, was der Support von Dir braucht.

Du kommst auf zwei Wegen an das Log: live in der Konsole der Verwaltung oder als Dateien per SFTP.

## Log live in der Konsole mitlesen

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers und wechsle zur **Konsole**.

2. **Server starten**\
   Starte Deinen Server. Die Konsole gibt ab jetzt die Ausgabe des Servers direkt aus.

3. **Ausgabe verfolgen**\
   Lies die Meldungen von oben nach unten mit. Achte besonders auf die Zeilen kurz vor einem Absturz oder einem fehlgeschlagenen Start – dort steht meistens die Ursache.

> [!NOTE]
> Die Konsole dient bei Arma Reforger nur zum Mitlesen. Der Server kennt keine Konsolenbefehle, Eingaben in der Konsole haben daher keine Wirkung.

## Log-Dateien herunterladen

Arma Reforger speichert seine Logs im Profilordner des Servers. Bei jedem Serverstart legt der Server dort einen eigenen Unterordner an, dessen Name Datum und Uhrzeit des Starts enthält.

1. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

2. **Ordner logs öffnen**\
   Öffne im Hauptverzeichnis den Ordner `profile` und darin den Unterordner `logs`.

3. **Passenden Start auswählen**\
   Öffne den Unterordner des Serverstarts, der Dich interessiert. Den neuesten Start erkennst Du am jüngsten Datum und der spätesten Uhrzeit im Ordnernamen.

4. **Dateien herunterladen**\
   Lade die `.log`-Dateien aus diesem Ordner auf Deinen PC herunter und öffne sie mit einem beliebigen Texteditor.

> [!WARNING]
> Arma Reforger behält standardmäßig nur die 10 neuesten Logs, ältere werden automatisch gelöscht. Lade die Dateien deshalb am besten direkt nach einem Problem herunter, bevor sie durch weitere Neustarts verloren gehen.

## Worauf Du im Log achten solltest

### Fehler nach einer Änderung an der config.json

Startet Dein Server nicht mehr, nachdem Du die `config.json` bearbeitet hast, sieh Dir die letzten Zeilen in der Konsole oder im neuesten Log an. Dort findest Du die Fehlermeldung, an der der Start abgebrochen ist.

> [!TIP]
> Häufigste Ursache ist ungültiges JSON. Prüfe die Datei mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server nicht startet.

### Fehler beim Herunterladen von Mods

Die Mods aus der `config.json` lädt Dein Server beim Start herunter. Fehlt ein Mod im Spiel oder bleibt der Start beim Laden der Mods hängen, suche im Log nach Fehlermeldungen rund um den Download. Prüfe danach die Einträge in der `config.json`, wie unter [Mods hinzufügen](/tutorials/gameserver/arma-reforger/add-mods) beschrieben.

### Liste der verfügbaren Szenarien

Bei jedem Start schreibt Dein Server die Pfade der Szenario-Dateien (`.conf`), die er findet, ins Log – das sind die im Spiel enthaltenen Szenarien. Darüber findest Du die genaue Szenario ID, die Du in das Feld **Szenario ID** einträgst.

> [!TIP]
> **Beispiel**
>
> ```text
> {ECC61978EDCC2B5A}Missions/23_Campaign.conf
> ```

> [!NOTE]
> Workshop-Szenarien tauchen in dieser Liste nicht auf. Die Szenario ID eines Workshop-Szenarios findest Du auf der Workshop-Seite im Tab **Scenarios**. Mehr dazu unter [Szenario ändern](/tutorials/gameserver/arma-reforger/change-scenario).

### Performance-Statistiken

Setzt Du in den **Einstellungen** das Feld **[Advanced] Log FPS Interval** auf einen Wert größer als 0, schreibt Dein Server in diesem Abstand (in Sekunden) eine Zeile mit Performance-Werten ins Log, z.B.:

```text
FPS: 60.0, frame time (avg: 16.7 ms, min: 9.3 ms, max: 23.7 ms), Mem: 3291106 kB, Player: 2, AI: 104, Veh: 0 (17), Proj (S: 12, M: 0, G: 0 | 12), RplItemsS: 410, RplItemsC0: 17068
```

Dort siehst Du unter anderem die aktuellen Server-FPS, die Zahl der Spieler und die Zahl der KI-Einheiten. Wie Du diese Werte einordnest, erfährst Du unter [Performance verbessern](/tutorials/gameserver/arma-reforger/improve-performance).

## Wenn Du nicht weiterkommst

Wirst Du aus dem Log nicht schlau, hänge die `.log`-Dateien des betroffenen Serverstarts einfach an ein [Support-Ticket](https://emeraldhost.de/de/support) an und beschreibe kurz, wann das Problem aufgetreten ist. Damit können wir gezielt nachsehen.

> [!NOTE]
> Lösungen für typische Fehler findest Du unter [Häufige Probleme beheben](/tutorials/gameserver/arma-reforger/troubleshoot-server).
