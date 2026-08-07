---
description: Resources auf einem FiveM Server installieren und in der server.cfg starten
---

# So fügst du Resources auf deinem FiveM Server hinzu

Skripte, Maps, Fahrzeuge und Frameworks werden bei FiveM alle auf die gleiche Weise installiert: als **Resource**. Jede Resource ist ein eigener Ordner, der eine `fxmanifest.lua` enthält, im `resources`-Verzeichnis deines Servers liegt und in der `server.cfg` gestartet wird.

:::: tip Tipp
Erstelle vor der Installation ein [Backup](backup-erstellen.md). So kommst du schnell zurück auf einen funktionierenden Stand, falls eine Resource deinen Server nicht mehr starten lässt.
::::

## Wo befindet sich der resources-Ordner?

Resources werden aus einem Ordner namens `resources/` im Server-Datenverzeichnis geladen. Wo dieses Verzeichnis liegt, hängt davon ab, wie du deinen Server eingerichtet hast:

| Setup | Pfad |
|-------|------|
| Standard (empfohlen) | `/home/container/resources` |
| txAdmin Recipe / Deployer | `/home/container/txData/<Profilname>/resources` |
| Manueller Import | Der Ordner, den du beim Import angegeben hast |

:::: warning Achtung
Lädst du eine Resource in das falsche `resources`-Verzeichnis hoch, findet der Server sie nicht. Der Guide [Gameserver Port einstellen](port-einstellen.md) listet dieselben Setups mit dem Pfad zur jeweiligen `server.cfg` auf.
::::

## Resource hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung, bevor du Dateien änderst.

2. <b>Archiv entpacken</b><br>
   Entpacke das heruntergeladene Archiv auf deinem PC. Der Server kann keine ZIP- oder RAR-Dateien lesen.

3. <b>Ordnerstruktur prüfen</b><br>
   Die `fxmanifest.lua` muss direkt im Ordner der Resource liegen. Viele Downloads sind doppelt verschachtelt (z.B. `mein-skript-main/mein-skript/`) — lade dann nur den inneren Ordner hoch:

   ```
   resources/
   └── mein-skript/
       ├── fxmanifest.lua
       ├── client.lua
       └── server.lua
   ```

4. <b>Ordnernamen merken</b><br>
   Der Ordnername ist der Name der Resource — genau diesen Namen trägst du später in die `ensure`-Zeile ein.

   :::: warning Achtung
   Deine Server laufen unter Linux, deshalb wird zwischen Groß- und Kleinschreibung unterschieden. Der Name in der `ensure`-Zeile muss exakt dem Ordnernamen entsprechen.
   ::::

5. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

6. <b>Ordner hochladen</b><br>
   Lade den Ordner der Resource in dein `resources`-Verzeichnis hoch.

## Kategorien mit eckigen Klammern

Jeder Ordner im `resources`-Verzeichnis wird als Resource gelesen — außer Ordner in `[eckigen Klammern]`. Diese sind **Kategorien** und dürfen mehrere Resources enthalten:

```
resources/
├── [standalone]/
│   ├── skript-a/
│   └── skript-b/
└── mein-skript/
```

:::: info Hinweis
Du kannst eine komplette Kategorie mit einer einzigen Zeile starten, zum Beispiel `ensure [standalone]`. Frameworks wie QBCore bringen bereits eigene Kategorien mit, etwa `[qb]`, `[standalone]` oder `[voice]`. Ein FiveM-Standardserver liefert unter anderem `[system]`, `[managers]`, `[gameplay]` und `[local]` mit.
::::

Kategorien lassen sich auch verschachteln. Kategorienamen werden nie Teil des Resource-Namens: Eine Resource unter `[standalone]/mein-skript` heißt weiterhin einfach `mein-skript`.

## Resource in der server.cfg starten

1. <b>server.cfg öffnen</b><br>
   Öffne die `server.cfg` deines Servers per SFTP oder über den **CFG Editor** in der txAdmin Web-Oberfläche.

2. <b>ensure-Zeile eintragen</b><br>
   Trage für jede neue Resource eine eigene Zeile ein:

   ```
   ensure mein-skript
   ```

3. <b>Reihenfolge beachten</b><br>
   Resources werden in der Reihenfolge gestartet, in der die Zeilen in der `server.cfg` stehen. Abhängigkeiten müssen deshalb weiter oben stehen als die Skripte, die sie benötigen — also z.B. erst dein Framework und deine Datenbank-Resource, dann die einzelnen Skripte.

4. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server über die Verwaltung.

:::: info Hinweis
Bei jedem Serverstart schreibt die Verwaltung die Zeilen `endpoint_add_tcp`, `endpoint_add_udp`, `sv_hostname`, `set sv_licenseKey`, `set steam_webApiKey` und `sv_maxclients` in der `server.cfg` neu. Deine `ensure`-Zeilen und alle anderen eigenen Einträge bleiben erhalten.
::::

## ensure, start und stop im Vergleich

| Befehl | Wirkung |
|--------|---------|
| `ensure <name>` | Startet die Resource. Läuft sie bereits, wird sie neu gestartet. |
| `start <name>` | Startet die Resource, wenn sie gestoppt ist. |
| `stop <name>` | Stoppt die Resource, wenn sie läuft. |
| `restart <name>` | Startet eine laufende Resource neu. |
| `refresh` | Liest den `resources`-Ordner neu ein, damit neu hochgeladene Resources verfügbar werden. |

`ensure`, `start`, `stop` und `restart` funktionieren alle auch mit Kategorienamen.

:::: tip Tipp
Nutze in der `server.cfg` immer `ensure`. Damit läuft die Resource nach dem Start garantiert, unabhängig davon, ob sie vorher schon aktiv war.
::::

## Konsole prüfen

Beobachte nach dem Start die Konsole in der Verwaltung — oder die **Live Console** in txAdmin, falls du txAdmin nutzt. Typische Meldungen:

- `Started resource <name>` — die Resource wurde erfolgreich gestartet.
- `Couldn't find resource <name>.` — der Ordnername stimmt nicht mit der `ensure`-Zeile überein, oder der Ordner liegt im falschen `resources`-Verzeichnis.
- `<name> does not have a resource manifest (fxmanifest.lua)` — im Ordner fehlt die `fxmanifest.lua`. Das passiert typischerweise, wenn ein doppelt verschachtelter Ordner hochgeladen wurde.
- Fehler beim Start eines Skripts — meist fehlt eine Abhängigkeit oder sie steht in der `server.cfg` unterhalb des Skripts.

:::: tip Tipp
Du kannst eine hochgeladene Resource auch ohne Neustart aktivieren: Führe in der Konsole zuerst `refresh` und danach `ensure <name>` aus. Trage die `ensure`-Zeile trotzdem in die `server.cfg` ein, damit die Resource beim nächsten Serverstart wieder geladen wird.
::::

## Resource entfernen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>ensure-Zeile entfernen</b><br>
   Lösche die passende `ensure`-Zeile aus der `server.cfg` oder kommentiere sie mit einem `#` am Zeilenanfang aus.

3. <b>Ordner löschen</b><br>
   Lösche den Ordner der Resource per [SFTP](../sftp-verbindung-herstellen.md) aus dem `resources`-Verzeichnis.

4. <b>Server starten</b><br>
   Starte deinen Server und prüfe die Konsole auf Folgefehler durch andere Skripte, die die Resource benötigt haben.

:::: info Hinweis
Viele Skripte und Frameworks brauchen zusätzlich eine MySQL-Datenbank. Wie du sie anlegst und wo du die Zugangsdaten findest, erklärt der Guide [Datenbank erstellen](../datenbank-erstellen.md).
::::
