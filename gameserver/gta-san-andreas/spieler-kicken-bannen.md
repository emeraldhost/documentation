---
description: Spieler auf einem GTA San Andreas Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem GTA San Andreas Server

Spieler entfernst du über **RCON** — entweder im Spiel per Chat oder über die externe Remote Console.

:::: info Hinweis
Du musst dafür als RCON-Admin angemeldet sein. Siehe [Admin hinzufügen](admin-hinzufuegen.md).
::::

## Spieler-ID ermitteln

Kick und Ban arbeiten mit der **Spieler-ID**, nicht mit dem Namen.

1. <b>Chat öffnen</b><br>
   Drücke im Spiel `T`, um den Chat zu öffnen.

2. <b>Spielerliste abrufen</b><br>
   Lass dir alle verbundenen Spieler mit ID, Name, IP-Adresse und Ping anzeigen:

   ```
   /rcon players
   ```

3. <b>ID notieren</b><br>
   Notiere dir die ID des Spielers — und bei einem geplanten Ban zusätzlich seine IP-Adresse.

:::: danger Wichtig
Die Spieler-ID ist nur ein temporärer Slot. Verlässt ein Spieler den Server, kann dieselbe ID sofort einem anderen Spieler zugewiesen werden. Frage die Liste deshalb direkt vor dem Kick oder Ban erneut ab, sonst erwischst du den Falschen.
::::

## Spieler kicken

```
/rcon kick 3
```

Der Spieler wird vom Server getrennt und kann sofort wieder beitreten.

## Spieler bannen

```
/rcon ban 3
```

Der Spieler wird vom Server geworfen und ausgesperrt.

:::: warning Achtung
Der Ban wird über die **IP-Adresse** ausgesprochen, auch wenn du eine Spieler-ID angibst. Einen Ban auf den Spielernamen oder einen Account gibt es nicht. Bei wechselnden IP-Adressen kann ein gebannter Spieler daher zurückkehren — umgekehrt sperrst du bei geteilten Anschlüssen unter Umständen mehrere Personen aus.
::::

## IP-Adresse direkt bannen

```
/rcon banip 123.45.67.89
```

Damit sperrst du eine IP-Adresse aus, auch wenn der Spieler gerade nicht verbunden ist. Platzhalter sind erlaubt, sodass sich ganze Bereiche sperren lassen:

```
/rcon banip 123.45.67.*
```

## Bann aufheben

```
/rcon unbanip 123.45.67.89
```

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|--------------|
| `/rcon players` | Alle verbundenen Spieler mit ID, Name, IP-Adresse und Ping anzeigen |
| `/rcon kick <ID>` | Spieler vom Server trennen |
| `/rcon ban <ID>` | Spieler aussperren (wirkt über seine IP-Adresse) |
| `/rcon banip <IP>` | IP-Adresse aussperren, Platzhalter erlaubt |
| `/rcon unbanip <IP>` | Bann für eine IP-Adresse aufheben |
| `/rcon reloadbans` | Bann-Liste neu einlesen |

## Bann-Liste per SFTP bearbeiten

Alle Banns landen in einer Datei im Hauptverzeichnis deines Servers. Welche es ist, hängt von deiner Server-Variante ab:

| Server | Datei |
|--------|-------|
| **open.mp** | `bans.json` |
| **SA-MP** | `samp.ban` |

Die Datei enthält unter anderem die gesperrte IP-Adresse sowie Datum, Uhrzeit und den Namen beziehungsweise Grund des Banns.

1. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

2. <b>Datei bearbeiten</b><br>
   Öffne die Bann-Datei im Hauptverzeichnis und entferne oder ergänze die gewünschten Einträge.

3. <b>Liste neu einlesen</b><br>
   Führe anschließend im Spiel folgenden Befehl aus:

   ```
   /rcon reloadbans
   ```

:::: warning Achtung
Nach einer manuellen Änderung an der Bann-Datei ist `reloadbans` zwingend nötig. Ohne diesen Befehl arbeitet der laufende Server weiter mit der alten Liste und überschreibt deine Änderungen unter Umständen wieder.
::::

:::: info Hinweis
Ob eine bestehende `samp.ban` beim Wechsel von SA-MP auf open.mp automatisch in die `bans.json` übernommen wird, ist nicht dokumentiert. Prüfe deine Bann-Liste nach einem Wechsel und trage fehlende Einträge über `/rcon banip` erneut ein.
::::
