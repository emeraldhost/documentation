---
description: Neue Welt auf einem Hytale Server erstellen
---

# So erstellst du eine neue Welt auf einem Hytale Server

Auf deinem Hytale Server können mehrere Welten gleichzeitig laufen. Jede Welt liegt als eigener Ordner unter `/universe/worlds/` und hat dort ihre eigene `config.json`, also auch eigene Einstellungen wie PvP, Seed oder Spawn-Punkt. Die Welt, die der Server beim ersten Start anlegt, heißt `default`.

## Verfügbare Weltgeneratoren

Beim Erstellen legst du mit `--gen` fest, wie die neue Welt generiert wird:

| Generator | Beschreibung |
| --------- | ------------ |
| `Hytale` | Standard-Weltgenerator mit normaler Landschaft. Er wird verwendet, wenn du `--gen` weglässt. |
| `Flat` | Flache Welt aus einer einzigen Lage Grasboden |
| `Void` | Leere Welt ohne Blöcke |

:::: info Hinweis
Zusätzlich gibt es den Generator `HytaleGenerator` (World Gen V2). Er soll den bisherigen Generator künftig ablösen, befindet sich aber noch in Entwicklung. Für eine normale Spielwelt verwendest du den Standard-Generator.
::::

## So erstellst du eine neue Welt per Befehl

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Hytale-Servers.

2. <b>Befehl eingeben</b><br>
   Gib folgenden Befehl in die Konsole ein:
   ```
   world add <name> --gen <Generator>
   ```
   Ersetze `<name>` durch den Namen der neuen Welt und `<Generator>` durch einen Generator aus der Tabelle oben. Lässt du `--gen <Generator>` weg, erstellt der Server eine normale Welt mit dem Standard-Generator.

3. <b>Rückmeldung prüfen</b><br>
   Hat alles geklappt, erscheint in der Konsole zum Beispiel:
   ```
   Created world "arena" with generator type "Flat" and storage type "default"!
   ```
   Gibt es bereits eine Welt oder einen Ordner mit diesem Namen, bricht der Befehl mit einer Fehlermeldung ab.

**Beispiele:**
```
world add arena --gen Flat
world add lobby --gen Void
world add survival
```

:::: info Hinweis
In der Konsole werden Befehle ohne `/` eingegeben. Im Spiel mit Admin-Rechten benötigst du den `/` (z.B. `/world add arena --gen Flat`).
::::

:::: tip Tipp
Die neue Welt bekommt einen eigenen Ordner unter `/universe/worlds/<name>/`. Der Server lädt beim Start automatisch alle Welten aus diesem Verzeichnis, die neue Welt bleibt also auch nach einem Neustart erhalten.
::::

## So wechselst du zur neuen Welt

Im Spiel wechselst du mit Admin-Rechten über diesen Befehl in eine andere Welt:

```
/tp world <name>
```

:::: info Hinweis
Dieser Befehl funktioniert nur im Spiel, nicht in der Konsole.
::::

## So setzt du die neue Welt als Standard

In der Standardwelt landen Spieler, wenn sie deinem Server zum ersten Mal beitreten. Um die neue Welt als Standard zu setzen, gib in der Konsole ein:

```
world setdefault <name>
```

Die Konsole bestätigt das mit "Set default world to ...". Der Server übernimmt die Änderung automatisch in die `config.json`.

Alternativ kannst du die Standardwelt bei gestopptem Server in der `config.json` im Hauptverzeichnis festlegen. Suche dort den Block `Defaults` und ändere den Wert von `World`, die übrigen Einträge lässt du unverändert:
```json
"Defaults": {
  "World": "arena",
  "GameMode": "Adventure"
}
```

:::: tip Tipp
Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) — ein fehlendes oder überzähliges Komma reicht, damit der Server die config.json nicht mehr laden kann.
::::

:::: info Hinweis
Spieler, die schon einmal auf dem Server waren, betreten ihn weiterhin in der Welt, in der sie sich zuletzt aufgehalten haben. Die Standardwelt gilt für neue Spieler und für Spieler, deren letzte Welt nicht mehr geladen ist.
::::

## So löschst du eine Welt

Mit `world remove <name>` entlädst du eine Welt nur. Ihr Ordner bleibt erhalten und der Server lädt sie beim nächsten Start wieder. Um eine Welt dauerhaft zu löschen, gehst du so vor:

1. <b>Andere Standardwelt setzen</b><br>
   Ist die Welt, die du löschen möchtest, aktuell die Standardwelt, lege vorher eine andere Welt als Standard fest, zum Beispiel mit `world setdefault arena`. Sonst erstellt der Server beim nächsten Start eine neu generierte Welt mit dem alten Namen.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Welt-Ordner löschen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und lösche den Ordner der Welt unter `/universe/worlds/<name>/`.

4. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: warning Achtung
Das Löschen des Ordners entfernt die Welt mit allen Bauwerken unwiderruflich. Erstelle vorher ein [Backup](backup-erstellen.md)!
::::

## Alle Welt-Befehle

| Befehl | Beschreibung |
| ------ | ------------ |
| `world list` | Alle geladenen Welten anzeigen |
| `world add <name> [--gen <Generator>]` | Neue Welt erstellen |
| `world load <name>` | Vorhandenen Welt-Ordner aus `/universe/worlds/` laden |
| `world remove <name>` | Welt entladen (der Ordner bleibt erhalten) |
| `world setdefault <name>` | Welt als Standard setzen |
| `world prune --confirm` | Alle Welten außer der Standardwelt, in denen sich gerade kein Spieler befindet, endgültig löschen |
| `/tp world <name>` | Im Spiel in eine andere Welt wechseln |

:::: danger Wichtig
`world prune --confirm` löscht die betroffenen Welten samt Ordner dauerhaft. Erstelle vorher ein [Backup](backup-erstellen.md)!
::::

:::: tip Tipp
Die Einstellungen einer einzelnen Welt änderst du in ihrer `config.json` unter `/universe/worlds/<name>/` oder in der Konsole mit `world settings` bzw. `world config` und dem Zusatz `--world <name>`, zum Beispiel `world config pvp true --world arena`.
::::
