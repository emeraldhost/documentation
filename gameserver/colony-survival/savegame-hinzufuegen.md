---
description: Savegame auf einem Colony Survival Server hinzufügen
---

# So fügst du ein Savegame zu deinem Colony Survival Server hinzu

Ein Spielstand in Colony Survival ist **ein kompletter Ordner**, keine einzelne Datei. Jede Welt liegt in einem eigenen Unterordner im Savegame-Verzeichnis deines Servers, und der Name dieses Ordners entscheidet darüber, welche Welt geladen wird.

```
/gamedata/savegames/<Weltname>/
```

:::: danger Wichtig
Der Ordnername muss exakt mit dem Wert übereinstimmen, den du in der **Verwaltung** im Feld **World Name** einträgst – inklusive Groß- und Kleinschreibung. Findet der Server keinen passenden Ordner, erstellt er stattdessen eine neue, leere Welt.
::::

## Dateien eines Spielstands

| Datei | Inhalt |
|-------|--------|
| `world.sqlite3` | Die eigentliche Welt als SQLite-Datenbank – Gelände, Bauten, Kolonien und Siedler |
| `world.sqlite3-wal` | Write-Ahead-Log der Datenbank (nicht immer vorhanden) |
| `world.sqlite3-shm` | Shared-Memory-Datei des Write-Ahead-Logs (nicht immer vorhanden) |
| `worldconfig.json` | Anzeigename der Welt, Welttyp und die Liste der aktivierten Mods |
| `permissionusers.json` | Optional: Rechte der Spieler auf dieser Welt |
| `permissiongroups.json` | Optional: eigene Rechtegruppen für diese Welt |

:::: info Hinweis
Stammt die Welt aus einer älteren Spielversion, kann sie statt `world.sqlite3` noch einen Ordner `regions/` und eine Datei `settings_readonly.json` enthalten. Lade in diesem Fall ebenfalls den kompletten Ordner hoch – der Server wandelt die Welt beim Laden um. Sehr alte Welten (aus der Zeit vor Version 0.9) lassen sich nicht mehr laden.
::::

## Savegame hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Solange der Server läuft, schreibt er laufend in die Datenbank und sperrt das Savegame-Verzeichnis.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /gamedata/savegames/
   ```

   :::: info Hinweis
   Existiert der Ordner noch nicht, starte deinen Server einmal, damit die Ordnerstruktur angelegt wird. Stoppe ihn anschließend wieder.
   ::::

4. <b>Bisherigen Stand sichern</b><br>
   Erstelle ein [Backup](backup-erstellen.md) oder lade den bisherigen Weltordner herunter, falls du später zurückwechseln möchtest.

5. <b>Weltordner hochladen</b><br>
   Lade den kompletten Ordner deiner Welt mit allen enthaltenen Dateien in dieses Verzeichnis hoch. Vergib einen eindeutigen Ordnernamen ohne Leer- und Sonderzeichen, zum Beispiel `MeineWelt`.

   :::: warning Achtung
   Existiert bereits ein Ordner mit demselben Namen, lösche ihn vorher oder benenne deinen hochgeladenen Ordner um. Vermische niemals die Dateien zweier Welten in einem Ordner.
   ::::

6. <b>World Name eintragen</b><br>
   Öffne die **Verwaltung**, wechsle zu den **Einstellungen** und trage im Feld **World Name** exakt den Ordnernamen aus Schritt 5 ein.

7. <b>Server starten</b><br>
   Starte deinen Server. Beim Start wird jetzt deine hochgeladene Welt geladen.

:::: tip Tipp
Prüfe nach dem Start die Konsole in der Verwaltung. Lädt der Server die gewünschte Welt, taucht ihr Name dort auf. Erstellt er stattdessen eine neue Welt, stimmt der Ordnername nicht mit dem Feld **World Name** überein.
::::

## Welt von einem anderen Server übernehmen

Am zuverlässigsten funktioniert der Wechsel zwischen zwei Welten, die beide von einem Dedicated Server stammen – etwa beim Umzug auf einen anderen Server. Lade dort den kompletten Weltordner herunter und folge anschließend den Schritten oben.

:::: warning Mods nicht vergessen
In der Datei `worldconfig.json` steht, welche Mods für diese Welt aktiviert sind. Fehlen diese Mods auf dem neuen Server, kann die Welt fehlerhaft laden. Lade die passenden Mods deshalb mit hoch: [Mods hinzufügen](mods-hinzufuegen.md).
::::

## Lokalen Spielstand finden

Hast du eine Koop-Welt auf deinem PC gehostet und möchtest sie auf den Server übertragen, findest du sie im Installationsordner des Spiels:

```
...\Steam\steamapps\common\Colony Survival\gamedata\savegames\
```

Ist die Steam-Cloud-Synchronisation aktiv, liegen deine Welten stattdessen hier:

```
...\Steam\steamapps\common\Colony Survival\gamedata\savegames\_cloud\<SteamAccountID>\
```

:::: danger Einzelspieler-Welten
Übertrage nur Welten, die du bereits im Mehrspieler genutzt hast. Eine reine Einzelspieler-Welt ist im Spiel als solche markiert und lässt sich im Client erst umwandeln – ob ein Dedicated Server sie ohne diese Umwandlung lädt, ist nicht dokumentiert. Arbeite in jedem Fall ausschließlich mit Kopien.
::::
