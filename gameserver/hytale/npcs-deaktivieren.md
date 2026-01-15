---
description: NPCs auf einem Hytale Server deaktivieren
---

# So deaktivierst du NPCs auf einem Hytale Server

Du kannst das Spawnen von NPCs (Kreaturen, Monster, Tiere) pro Welt deaktivieren. Das ist nützlich für reine Bau-Server oder PvP-Arenen.

:::: tip Hinweis
Stoppe deinen Server bevor du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.
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

4. <b>Server starten</b><br>
   Starte deinen Server, damit die Änderungen übernommen werden.

## So deaktivierst du NPCs per Befehl

Admins können das NPC-Spawning auch im Spiel kontrollieren:

```
/spawning
```

Nutze `/spawning -help` für verfügbare Optionen.

:::: tip Hinweis
In der Konsole werden Befehle ohne `/` eingegeben. Im Spiel mit Admin-Rechten benötigst du den `/`.
::::

## Bereits gespawnte NPCs entfernen

Um alle NPCs in einem Bereich zu entfernen, kannst du den Kill-Befehl verwenden oder die Welt neu laden.

:::: tip Hinweis
Das Deaktivieren von NPCs betrifft nur zukünftiges Spawning. Bereits existierende NPCs bleiben bestehen.
::::
