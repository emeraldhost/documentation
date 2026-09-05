---
slug: "resources-hinzufuegen"
language: "de"
title: "So fügst Du Resources auf Deinem FiveM Server hinzu"
description: "Resources auf einem FiveM Server installieren und in der server.cfg starten"
tags: []
date: "2026-08-07"
visibility: "public"
cta: "gameserver"
product_keys: ["fivem"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Resources hinzufügen"
sort: 7
related: ["gameserver/fivem/add-admin", "gameserver/fivem/create-backup", "gameserver/fivem/enable-txadmin", "gameserver/fivem/import-database"]
---

Skripte, Maps, Fahrzeuge und Frameworks werden bei FiveM alle auf die gleiche Weise installiert: als **Resource**. Jede Resource ist ein eigener Ordner, der eine `fxmanifest.lua` enthält, im `resources`-Verzeichnis Deines Servers liegt und in der `server.cfg` gestartet wird.

> [!TIP]
> Erstelle vor der Installation ein [Backup](/tutorials/gameserver/fivem/create-backup). So kommst Du schnell zurück auf einen funktionierenden Stand, falls eine Resource Deinen Server nicht mehr starten lässt.

## Wo befindet sich der resources-Ordner?

Resources werden aus einem Ordner namens `resources/` im Server-Datenverzeichnis geladen. Wo dieses Verzeichnis liegt, hängt davon ab, wie Du Deinen Server eingerichtet hast:

| Setup | Pfad |
|-------|------|
| Standard (empfohlen) | `/home/container/resources` |
| txAdmin Recipe / Deployer | `/home/container/txData/<Profilname>/resources` |
| Manueller Import | Der Ordner, den Du beim Import angegeben hast |

> [!WARNING]
> Lädst Du eine Resource in das falsche `resources`-Verzeichnis hoch, findet der Server sie nicht. Der Guide [Gameserver Port einstellen](/tutorials/gameserver/fivem/set-port) listet dieselben Setups mit dem Pfad zur jeweiligen `server.cfg` auf.

## Resource hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung, bevor Du Dateien änderst.

2. **Archiv entpacken**\
   Entpacke das heruntergeladene Archiv auf Deinem PC. Der Server kann keine ZIP- oder RAR-Dateien lesen.

3. **Ordnerstruktur prüfen**\
   Die `fxmanifest.lua` muss direkt im Ordner der Resource liegen. Viele Downloads sind doppelt verschachtelt (z.B. `mein-skript-main/mein-skript/`) – lade dann nur den inneren Ordner hoch:

   ```text
   resources/
   └── mein-skript/
       ├── fxmanifest.lua
       ├── client.lua
       └── server.lua
   ```

4. **Ordnernamen merken**\
   Der Ordnername ist der Name der Resource – genau diesen Namen trägst Du später in die `ensure`-Zeile ein.

   > [!WARNING]
   > Deine Server laufen unter Linux, deshalb wird zwischen Groß- und Kleinschreibung unterschieden. Der Name in der `ensure`-Zeile muss exakt dem Ordnernamen entsprechen.

5. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

6. **Ordner hochladen**\
   Lade den Ordner der Resource in Dein `resources`-Verzeichnis hoch.

## Kategorien mit eckigen Klammern

Jeder Ordner im `resources`-Verzeichnis wird als Resource gelesen – außer Ordner in `[eckigen Klammern]`. Diese sind **Kategorien** und dürfen mehrere Resources enthalten:

```text
resources/
├── [standalone]/
│   ├── skript-a/
│   └── skript-b/
└── mein-skript/
```

> [!NOTE]
> Du kannst eine komplette Kategorie mit einer einzigen Zeile starten, zum Beispiel `ensure [standalone]`. Frameworks wie QBCore bringen bereits eigene Kategorien mit, etwa `[qb]`, `[standalone]` oder `[voice]`. Ein FiveM-Standardserver liefert unter anderem `[system]`, `[managers]`, `[gameplay]` und `[local]` mit.

Kategorien lassen sich auch verschachteln. Kategorienamen werden nie Teil des Resource-Namens: Eine Resource unter `[standalone]/mein-skript` heißt weiterhin einfach `mein-skript`.

## Resource in der server.cfg starten

1. **server.cfg öffnen**\
   Öffne die `server.cfg` Deines Servers per SFTP oder über den **CFG Editor** in der txAdmin Web-Oberfläche.

2. **ensure-Zeile eintragen**\
   Trage für jede neue Resource eine eigene Zeile ein:

   ```text
   ensure mein-skript
   ```

3. **Reihenfolge beachten**\
   Resources werden in der Reihenfolge gestartet, in der die Zeilen in der `server.cfg` stehen. Abhängigkeiten müssen deshalb weiter oben stehen als die Skripte, die sie benötigen – also z.B. erst Dein Framework und Deine Datenbank-Resource, dann die einzelnen Skripte.

4. **Server starten**\
   Speichere die Datei und starte Deinen Server über die Verwaltung.

> [!NOTE]
> Bei jedem Serverstart schreibt die Verwaltung die Zeilen `endpoint_add_tcp`, `endpoint_add_udp`, `sv_hostname`, `set sv_licenseKey`, `set steam_webApiKey` und `sv_maxclients` in der `server.cfg` neu. Deine `ensure`-Zeilen und alle anderen eigenen Einträge bleiben erhalten.

## ensure, start und stop im Vergleich

| Befehl | Wirkung |
|--------|---------|
| `ensure <name>` | Startet die Resource. Läuft sie bereits, wird sie neu gestartet. |
| `start <name>` | Startet die Resource, wenn sie gestoppt ist. |
| `stop <name>` | Stoppt die Resource, wenn sie läuft. |
| `restart <name>` | Startet eine laufende Resource neu. |
| `refresh` | Liest den `resources`-Ordner neu ein, damit neu hochgeladene Resources verfügbar werden. |

`ensure`, `start`, `stop` und `restart` funktionieren alle auch mit Kategorienamen.

> [!TIP]
> Nutze in der `server.cfg` immer `ensure`. Damit läuft die Resource nach dem Start garantiert, unabhängig davon, ob sie vorher schon aktiv war.

## Konsole prüfen

Beobachte nach dem Start die Konsole in der Verwaltung – oder die **Live Console** in txAdmin, falls Du txAdmin nutzt. Typische Meldungen:

- `Started resource <name>` – die Resource wurde erfolgreich gestartet.
- `Couldn't find resource <name>.` – der Ordnername stimmt nicht mit der `ensure`-Zeile überein, oder der Ordner liegt im falschen `resources`-Verzeichnis.
- `<name> does not have a resource manifest (fxmanifest.lua)` – im Ordner fehlt die `fxmanifest.lua`. Das passiert typischerweise, wenn ein doppelt verschachtelter Ordner hochgeladen wurde.
- Fehler beim Start eines Skripts – meist fehlt eine Abhängigkeit oder sie steht in der `server.cfg` unterhalb des Skripts.

> [!TIP]
> Du kannst eine hochgeladene Resource auch ohne Neustart aktivieren: Führe in der Konsole zuerst `refresh` und danach `ensure <name>` aus. Trage die `ensure`-Zeile trotzdem in die `server.cfg` ein, damit die Resource beim nächsten Serverstart wieder geladen wird.

## Resource entfernen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **ensure-Zeile entfernen**\
   Lösche die passende `ensure`-Zeile aus der `server.cfg` oder kommentiere sie mit einem `#` am Zeilenanfang aus.

3. **Ordner löschen**\
   Lösche den Ordner der Resource per [SFTP](/tutorials/gameserver/establish-sftp-connection) aus dem `resources`-Verzeichnis.

4. **Server starten**\
   Starte Deinen Server und prüfe die Konsole auf Folgefehler durch andere Skripte, die die Resource benötigt haben.

> [!NOTE]
> Viele Skripte und Frameworks brauchen zusätzlich eine MySQL-Datenbank. Wie Du sie anlegst und wo Du die Zugangsdaten findest, erklärt der Guide [Datenbank erstellen](/tutorials/gameserver/create-database).
