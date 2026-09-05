---
slug: "server-log-auslesen"
language: "de"
title: "So liest Du das Server Log Deines Enshrouded Servers aus"
description: "Server Log eines Enshrouded Servers auslesen"
tags: []
date: "2026-08-13"
visibility: "public"
cta: "gameserver"
product_keys: ["enshrouded"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server-Log auslesen"
sort: 10
related: ["gameserver/enshrouded/join-server", "gameserver/enshrouded/kick-ban-players", "gameserver/enshrouded/performance-problems-on-enshrouded-servers", "gameserver/enshrouded/reset-world"]
---

Das Server Log protokolliert, was Dein Enshrouded Server tut: den Start, das Laden des Spielstands und jede Verbindung eines Spielers. Bei Problemen ist es die erste Anlaufstelle – und genau das, was der Support von Dir braucht.

Du kommst auf zwei Wegen an das Log: live in der Konsole der Verwaltung oder als Datei per SFTP.

## Log live in der Konsole mitlesen

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers und wechsle zur **Konsole**.

2. **Server starten**\
   Starte Deinen Server. Die Konsole gibt ab jetzt jede Zeile des Logs direkt aus.

3. **Ausgabe verfolgen**\
   Lies die Meldungen von oben nach unten mit. Achte besonders auf die Zeilen kurz vor einem Absturz oder einem fehlgeschlagenen Beitritt – dort steht meistens die Ursache.

> [!NOTE]
> Die Konsole zeigt die Ausgabe des laufenden Server-Prozesses. Möchtest Du einen Vorfall nachlesen, der länger zurückliegt, nutze die Log-Datei.

## Log-Datei herunterladen

1. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

2. **Ordner logs öffnen**\
   Wechsle in den Ordner `logs` im Hauptverzeichnis.

3. **Datei herunterladen**\
   Lade die Datei `enshrouded_server.log` auf Deinen PC herunter. Sie enthält dieselbe Ausgabe, die Du auch in der Konsole siehst.

> [!TIP]
> Ältere Logs archiviert Enshrouded im Unterordner `logs/backup`. Sieh dort nach, wenn Du einen länger zurückliegenden Vorfall suchst – findest Du den Ordner nicht, liegt nur das aktuelle Log vor. Lade die Datei deshalb am besten direkt nach einem Problem herunter, dann hast Du die Ausgabe zum Vorfall auf jeden Fall gesichert.

## Typische Meldungen einordnen

### Server erfolgreich gestartet

Dein Server ist vollständig hochgefahren und bereit für Spieler, sobald diese Meldungen erscheinen:

```text
[Session] 'HostOnline' (up)!
[Session] finished transition from 'Lobby' to 'Host_Online' (current='Host_Online')!
[server] Load deserialization took <Zeit> s
```

Fehlen diese Meldungen, hat Dein Server den Start nicht abgeschlossen. Dann sind die Zeilen davor entscheidend für die Ursachensuche.

### Spieler verbindet sich

Verbindet sich ein Spieler, tauchen unter anderem diese Zeilen auf:

```text
[online] Session accepted with peer ( id 76561198000000000 ).
[online] Added Peer #0.
```

Die Zahl hinter `id` ist die [SteamID64](/tutorials/gameserver/steamid64-find-out) des Spielers. Darüber siehst Du, wer sich wann verbunden hat.

### Verbindung beendet oder fehlgeschlagen

Ein fehlgeschlagener Beitritt sieht zum Beispiel so aus:

```text
[online] Session failed for peer #0 with error 4.
[online] Removed Peer #0.
```

Eine `Removed Peer`-Zeile besagt für sich genommen nur, dass die Verbindung eines Spielers beendet wurde. Erst eine `Session failed`-Zeile direkt davor zeigt, dass der Beitritt fehlgeschlagen ist.

## Wenn Du nicht weiterkommst

Wirst Du aus dem Log nicht schlau, hänge die Datei `enshrouded_server.log` einfach an ein [Support-Ticket](https://emeraldhost.de/de/support) an und beschreibe kurz, wann das Problem aufgetreten ist. Damit können wir gezielt nachsehen.

> [!NOTE]
> Wenn Dein Server ruckelt oder Verbindungen abbrechen, ohne dass im Log ein Fehler auftaucht, liegt es häufig an der Serversoftware selbst. Mehr dazu findest Du unter [Performance-Probleme auf Enshrouded Servern](/tutorials/gameserver/enshrouded/performance-problems-on-enshrouded-servers).
