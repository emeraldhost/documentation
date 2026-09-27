---
description: Spawn-Punkt auf einem Hytale Server setzen
---

# So setzt du den Spawn-Punkt auf einem Hytale Server

Der Spawn-Punkt bestimmt, wo neue Spieler oder Spieler nach dem Tod erscheinen. Jede Welt auf deinem Server hat ihren eigenen Spawn-Punkt.

## Zum Spawn teleportieren

Im Spiel teleportierst du dich mit Admin-Rechten zum Spawn-Punkt der Welt, in der du dich gerade befindest:

```
/spawn
```

Über die Konsole deiner Verwaltung kannst du einen Spieler, der gerade online ist, zum Spawn teleportieren:

```
spawn <Spielername>
```

:::: info Hinweis
In der Konsole werden Befehle ohne `/` eingegeben. Im Spiel mit Admin-Rechten benötigst du den `/` (z.B. `/spawn`).
::::

## So setzt du den Spawn-Punkt im Spiel

1. <b>Position einnehmen</b><br>
   Stelle dich im Spiel an die Stelle, an der der Spawn-Punkt liegen soll, und schau in die Richtung, in die Spieler nach dem Spawnen blicken sollen.

2. <b>Befehl eingeben</b><br>
   Gib mit Admin-Rechten folgenden Befehl ein:
   ```
   /spawn set
   ```
   Der Spawn-Punkt der aktuellen Welt wird auf deine Position gesetzt. Zur Bestätigung erscheint die Meldung "Set spawn to: ...".

## So setzt du den Spawn-Punkt über die Konsole

In der Konsole gibst du die Welt und die Koordinaten mit an:

```
spawn set --world <weltname> --position <x> <y> <z>
```

Beispiel für die Standardwelt `default`:
```
spawn set --world default --position 10 120 10
```

:::: tip Tipp
Der Server speichert den neuen Spawn-Punkt sofort in der `config.json` der Welt unter `/universe/worlds/<weltname>/`. Ein Neustart ist nicht nötig.
::::

## So setzt du den Spawn-Punkt zurück

Um den ursprünglichen Spawn-Punkt wiederherzustellen, den die Welt bei ihrer Erstellung hatte, gib im Spiel ein:

```
/spawn set default
```

In der Konsole gibst du zusätzlich die Welt an:

```
spawn set default --world <weltname>
```

## Respawn-Verhalten konfigurieren

Wo Spieler nach dem Tod wieder erscheinen, kannst du in der Welt-Konfiguration anpassen:

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Welt-Konfiguration öffnen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und öffne die Datei `/universe/worlds/<weltname>/config.json`.

3. <b>Death Block einfügen</b><br>
   Standardmäßig enthält die Datei keinen `Death` Block. Suche nach der Zeile `"GameplayConfig": "Default",` und füge darunter den `Death` Block hinzu. Da danach weitere Einstellungen folgen, muss hinter der letzten schließenden Klammer `}` des `Death` Blocks ein Komma stehen:
   ```json
   "Death": {
     "RespawnController": {
       "Type": "WorldSpawnPoint"
     },
     "ItemsLossMode": "Configured",
     "ItemsAmountLossPercentage": 50.0,
     "ItemsDurabilityLossPercentage": 10.0
   }
   ```

4. <b>Server starten</b><br>
   Starte deinen Server.

**Verfügbare Respawn-Typen:**
- `HomeOrSpawnPoint` - Respawn am eigenen Respawn-Punkt des Spielers, sonst am Spawn-Punkt der Welt (Standard)
- `WorldSpawnPoint` - Respawn immer am Spawn-Punkt der Welt

:::: warning Achtung
Ein `Death` Block in der Welt-Konfiguration ersetzt die gesamten Tod-Einstellungen dieser Welt. Fehlen darin die Angaben zum Item-Verlust, verlieren Spieler beim Tod keine Items mehr. Die Werte im Beispiel entsprechen dem Standard von Hytale. Mehr dazu erfährst du unter [Item-Verlust beim Tod](item-verlust-beim-tod.md).
::::

:::: tip Tipp
Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) — ein fehlendes oder überzähliges Komma reicht, damit der Server die Welt-Konfiguration nicht mehr laden kann.
::::

:::: info Hinweis
Wie du weitere Welten mit eigenem Spawn-Punkt erstellst, erfährst du unter [Neue Welt erstellen](neue-welt-erstellen.md).
::::
