---
description: Neue Welt auf einem Hytale Server erstellen
---

# So erstellst du eine neue Welt auf einem Hytale Server

Auf deinem Hytale Server kannst du mehrere Welten erstellen. Jede Welt läuft unabhängig und kann eigene Einstellungen haben.

## Verfügbare Welt-Typen

| Typ | Beschreibung |
| --- | ------------ |
| `normal` | Standard-Welt mit natürlicher Landschaft |
| `flat` | Flache Welt ohne Terrain |
| `void` | Leere Welt ohne Blöcke |

## So erstellst du eine neue Welt per Befehl

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Hytale-Servers.

2. <b>Befehl eingeben</b><br>
   Gib folgenden Befehl in die Konsole ein:
   ```
   world create <name> [typ]
   ```
   Ersetze `<name>` durch den Namen der neuen Welt und `[typ]` durch den gewünschten Welt-Typ.

**Beispiele:**
```
world create arena flat
world create survival normal
world create creative void
```

:::: tip Hinweis
In der Konsole werden Befehle ohne `/` eingegeben. Im Spiel mit Admin-Rechten benötigst du den `/` (z.B. `/world create arena flat`).
::::

## So wechselst du zur neuen Welt

Nach dem Erstellen kannst du zur Welt wechseln:

```
world tp <name>
```

## So setzt du die neue Welt als Standard

Damit Spieler beim Beitreten automatisch in der neuen Welt spawnen:

```
world setdefault <name>
```

Oder in der `config.json` im Hauptverzeichnis:
```json
"Defaults": {
  "World": "arena",
  "GameMode": "Adventure"
}
```

## Alle Welt-Befehle

| Befehl | Beschreibung |
| ------ | ------------ |
| `world list` | Alle Welten anzeigen |
| `world create <name> [typ]` | Neue Welt erstellen |
| `world load <name>` | Welt laden |
| `world unload <name>` | Welt entladen |
| `world delete <name>` | Welt löschen (unwiderruflich!) |
| `world tp <name>` | Zur Welt teleportieren |
| `world setdefault <name>` | Welt als Standard setzen |
| `world config <setting> <wert>` | Welt-Einstellung ändern |

:::: warning Achtung
`world delete` löscht die Welt dauerhaft. Erstelle vorher ein Backup!
::::
