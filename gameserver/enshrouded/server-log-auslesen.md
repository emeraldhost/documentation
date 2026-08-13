---
description: Server Log eines Enshrouded Servers auslesen
---

# So liest du das Server Log deines Enshrouded Servers aus

Das Server Log protokolliert, was dein Enshrouded Server tut: den Start, das Laden des Spielstands und jede Verbindung eines Spielers. Bei Problemen ist es die erste Anlaufstelle — und genau das, was der Support von dir braucht.

Du kommst auf zwei Wegen an das Log: live in der Konsole der Verwaltung oder als Datei per SFTP.

## Log live in der Konsole mitlesen

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers und wechsle zur **Konsole**.

2. <b>Server starten</b><br>
   Starte deinen Server. Die Konsole gibt ab jetzt jede Zeile des Logs direkt aus.

3. <b>Ausgabe verfolgen</b><br>
   Lies die Meldungen von oben nach unten mit. Achte besonders auf die Zeilen kurz vor einem Absturz oder einem fehlgeschlagenen Beitritt — dort steht meistens die Ursache.

:::: info Hinweis
Die Konsole zeigt die Ausgabe des laufenden Server-Prozesses. Möchtest du einen Vorfall nachlesen, der länger zurückliegt, nutze die Log-Datei.
::::

## Log-Datei herunterladen

1. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

2. <b>Ordner logs öffnen</b><br>
   Wechsle in den Ordner `logs` im Hauptverzeichnis.

3. <b>Datei herunterladen</b><br>
   Lade die Datei `enshrouded_server.log` auf deinen PC herunter. Sie enthält dieselbe Ausgabe, die du auch in der Konsole siehst.

:::: tip Tipp
Ältere Logs archiviert Enshrouded im Unterordner `logs/backup`. Sieh dort nach, wenn du einen länger zurückliegenden Vorfall suchst — findest du den Ordner nicht, liegt nur das aktuelle Log vor. Lade die Datei deshalb am besten direkt nach einem Problem herunter, dann hast du die Ausgabe zum Vorfall auf jeden Fall gesichert.
::::

## Typische Meldungen einordnen

### Server erfolgreich gestartet

Dein Server ist vollständig hochgefahren und bereit für Spieler, sobald diese Meldungen erscheinen:

```
[Session] 'HostOnline' (up)!
[Session] finished transition from 'Lobby' to 'Host_Online' (current='Host_Online')!
[server] Load deserialization took <Zeit> s
```

Fehlen diese Meldungen, hat dein Server den Start nicht abgeschlossen. Dann sind die Zeilen davor entscheidend für die Ursachensuche.

### Spieler verbindet sich

Verbindet sich ein Spieler, tauchen unter anderem diese Zeilen auf:

```
[online] Session accepted with peer ( id 76561198000000000 ).
[online] Added Peer #0.
```

Die Zahl hinter `id` ist die [SteamID64](../steamid64-herausfinden.md) des Spielers. Darüber siehst du, wer sich wann verbunden hat.

### Verbindung beendet oder fehlgeschlagen

Ein fehlgeschlagener Beitritt sieht zum Beispiel so aus:

```
[online] Session failed for peer #0 with error 4.
[online] Removed Peer #0.
```

Eine `Removed Peer`-Zeile besagt für sich genommen nur, dass die Verbindung eines Spielers beendet wurde. Erst eine `Session failed`-Zeile direkt davor zeigt, dass der Beitritt fehlgeschlagen ist.

## Wenn du nicht weiterkommst

Wirst du aus dem Log nicht schlau, hänge die Datei `enshrouded_server.log` einfach an ein [Support-Ticket](https://emeraldhost.de/de/support) an und beschreibe kurz, wann das Problem aufgetreten ist. Damit können wir gezielt nachsehen.

:::: info Hinweis
Wenn dein Server ruckelt oder Verbindungen abbrechen, ohne dass im Log ein Fehler auftaucht, liegt es häufig an der Serversoftware selbst. Mehr dazu findest du unter [Performance-Probleme auf Enshrouded Servern](performance-probleme-auf-enshrouded-servern.md).
::::
