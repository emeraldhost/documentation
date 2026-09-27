---
description: NPCs auf einem Hytale Server deaktivieren
---

# So deaktivierst du NPCs auf einem Hytale Server

Du kannst das Spawnen von NPCs (Kreaturen, Monster, Tiere) pro Welt deaktivieren. Das ist nützlich für reine Bau-Server oder PvP-Arenen.

:::: info Hinweis
Stoppe deinen Server, bevor du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.
::::

## So deaktivierst du NPCs per Konfiguration

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Welt-Konfiguration öffnen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und navigiere zu:
   ```
   /universe/worlds/<weltname>/config.json
   ```
   Ersetze `<weltname>` durch den Namen deiner Welt (z.B. `default`).

3. <b>NPC-Spawning ändern</b><br>
   Suche nach der Einstellung `IsSpawningNPC` und ändere den Wert:
   ```json
   "IsSpawningNPC": false
   ```
   - `true` - NPCs spawnen (Standard)
   - `false` - Keine NPCs spawnen

   :::: tip Tipp
   Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) — ein fehlendes oder überzähliges Komma reicht, damit der Server die Welt-Konfiguration nicht mehr laden kann.
   ::::

4. <b>Server starten</b><br>
   Starte deinen Server, damit die Änderungen übernommen werden.

## So deaktivierst du NPCs per Befehl

Per Befehl schaltest du das NPC-Spawning im laufenden Betrieb um. Die Änderung wird direkt in der Welt-Konfiguration gespeichert.

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Hytale-Servers.

2. <b>Befehl eingeben</b><br>
   Gib folgenden Befehl in die Konsole ein:
   ```
   spawning disable --world default
   ```
   Ersetze `default` durch den Namen deiner Welt. Der Server bestätigt mit `Spawning disabled for world "default"`. Um das Spawning wieder zu aktivieren, verwende:
   ```
   spawning enable --world default
   ```

Admins können das NPC-Spawning auch im Spiel steuern. Ohne `--world` gilt der Befehl für die Welt, in der du dich gerade befindest:

```
/spawning disable
```

Alternativ funktioniert auch `world settings spawningnpc set false --world default`. Mit `spawning --help` zeigst du alle Unterbefehle an.

:::: info Hinweis
In der Konsole werden Befehle ohne `/` eingegeben und brauchen die Option `--world`, sonst antwortet der Server mit `Sender must be a player or provide the --world option!`. Im Spiel mit Admin-Rechten benötigst du den `/`.
::::

## Bereits gespawnte NPCs entfernen

Das Deaktivieren betrifft nur zukünftiges Spawning. Bereits existierende NPCs bleiben bestehen. Um die NPCs einer Welt zu entfernen, gib in der Konsole ein:

```
npc clean --world default --confirm
```

Der Zusatz `--confirm` ist Pflicht, ohne ihn führt der Server den Befehl nicht aus. Im Spiel lautet der Befehl `/npc clean --confirm`.

:::: warning Achtung
`npc clean` entfernt alle NPCs, die in der Welt gerade geladen sind, also auch friedliche Tiere. NPCs in Bereichen, die gerade nicht geladen sind, erfasst der Befehl nicht. Dieser Schritt lässt sich nicht rückgängig machen.
::::

:::: tip Tipp
Möchtest du die NPCs behalten, aber stillstehen lassen, friere sie stattdessen ein: `world settings freezeallnpcs set true --world default`. Mit `false` hebst du das wieder auf. Die Einstellung wird in der Welt-Konfiguration als `IsAllNPCFrozen` gespeichert.
::::
