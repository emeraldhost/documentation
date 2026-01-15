---
description: Spawn-Punkt auf einem Hytale Server setzen
---

# So setzt du den Spawn-Punkt auf einem Hytale Server

Der Spawn-Punkt bestimmt, wo neue Spieler oder Spieler nach dem Tod erscheinen.

## Zum Spawn teleportieren

Um zum aktuellen Spawn-Punkt zu teleportieren:

```
spawn
```

:::: tip Hinweis
In der Konsole werden Befehle ohne `/` eingegeben. Im Spiel mit Admin-Rechten benötigst du den `/` (z.B. `/spawn`).
::::

## Spawn-Punkt setzen

:::: warning Hinweis
Hytale hat standardmäßig keinen `/setspawn` Befehl. Du kannst den Spawn-Punkt mit dem **HyCommands Mod** setzen.
::::

## So installierst du den HyCommands Mod

Der HyCommands Mod von NightBeamStudio ist ein umfangreiches Server-Utility für Hytale. Er fügt nützliche Befehle wie `/setspawn`, `/sethome`, `/home` und `/warp` hinzu.

### Download

Der Mod kann hier heruntergeladen werden: [HyCommands auf CurseForge](https://www.curseforge.com/hytale/mods/hycommands)

### Installation

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Mod herunterladen</b><br>
   Lade die .jar Datei des HyCommands Mods von CurseForge herunter.

3. <b>Mod hochladen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und lade die .jar Datei in den `mods/` Ordner hoch.

4. <b>Server starten</b><br>
   Starte deinen Server.

### Spawn-Punkt setzen (mit HyCommands)

Mit HyCommands kannst du im Spiel als Admin:

```
/setspawn
```

Der Spawn-Punkt wird auf deine aktuelle Position gesetzt.

## Respawn-Verhalten konfigurieren

Du kannst das Respawn-Verhalten nach dem Tod in der Welt-Konfiguration anpassen:

1. Öffne `/universe/worlds/<weltname>/config.json`
2. Im `Death` Block findest du `RespawnController`:

```json
"Death": {
  "RespawnController": {
    "Type": "HomeOrSpawnPoint"
  }
}
```

**Verfügbare Respawn-Typen:**
- `HomeOrSpawnPoint` - Respawn am Home oder Spawn-Punkt
- `SpawnPoint` - Nur am Spawn-Punkt

:::: tip Hinweis
Für weitere Spawn-Optionen siehe auch [Neue Welt erstellen](neue-welt-erstellen.md) - neue Welten haben ihren eigenen Spawn-Punkt.
::::
