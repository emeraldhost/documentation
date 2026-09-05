---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem GTA San Andreas Server hinzu"
description: "Gamemodes, Filterscripts, Plugins und eigene Modelle auf einem GTA San Andreas Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["gta-samp"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 3
related: ["gameserver/gta-samp/add-admin", "gameserver/gta-samp/create-backup", "gameserver/gta-samp/join-server", "gameserver/gta-samp/kick-ban-players"]
---

Ein SA-MP- beziehungsweise open.mp-Server hat kein klassisches Mod-System. Erweitert wird er über vier Wege:

| Weg | Was es ist | Zielordner |
|-----|------------|------------|
| **Gamemode** | Das Hauptskript, das bestimmt, was auf dem Server passiert (Rollenspiel, Rennen, Freeroam …) | `/gamemodes/` |
| **Filterscript** | Kleines Zusatzskript, das parallel zum Gamemode läuft | `/filterscripts/` |
| **Plugin** | Native Erweiterung des Servers, z.B. für MySQL oder den Streamer | `/plugins/` |
| **Custom Models / Artwork** | Eigene 3D-Modelle und Texturen als `.dff`- und `.txd`-Dateien | `/models/` |

> [!NOTE]
> Es gibt zwei Server-Varianten mit unterschiedlichen Konfigurationsdateien: **SA-MP** nutzt `server.cfg`, **open.mp** nutzt `config.json`. open.mp liest `server.cfg` weiterhin, empfiehlt aber `config.json`, weil dort mehr Einstellungen verfügbar sind. Welche Datei bei Dir liegt, siehst Du per [SFTP](/tutorials/gameserver/establish-sftp-connection) im Hauptverzeichnis Deines Servers.

> [!WARNING]
> Stoppe Deinen Server über die Verwaltung, bevor Du Dateien hochlädst oder die Konfiguration änderst.

## Gamemode installieren

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Gamemode hochladen**\
   Lade die `.amx`-Datei Deines Gamemodes in folgendes Verzeichnis hoch:

   ```text
   /gamemodes/
   ```

   > [!NOTE]
   > Auf den Server gehört immer die kompilierte `.amx`-Datei. Die zugehörige `.pwn`-Datei ist nur der Quelltext und wird vom Server nicht gestartet.

4. **Gamemode eintragen**\
   Trage den Dateinamen **ohne** die Endung `.amx` in Deiner Konfiguration ein.

   **open.mp – `config.json`:**

   ```json
   {
       "pawn": {
           "main_scripts": ["mein-gamemode 1", "zweiter-gamemode 1"]
       }
   }
   ```

   **SA-MP – `server.cfg`:**

   ```text
   gamemode0 mein-gamemode 1
   ```

   Die Zahl dahinter gibt an, wie viele Runden der Gamemode läuft, bevor der Server zum nächsten Eintrag wechselt. In der `config.json` trennst Du mehrere Gamemodes durch ein Komma – nutzt Du nur einen Gamemode, entfällt der zweite Eintrag samt Komma.

   > [!TIP]
   > Bearbeitest Du die `config.json`, prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit Dein Server die Konfiguration nicht mehr einlesen kann.

5. **Server starten**\
   Speichere die Änderung und starte Deinen Server.

> [!TIP]
> Möchtest Du mehrere Gamemodes im Wechsel laufen lassen, trägst Du sie wie im Beispiel als weitere Einträge in `main_scripts` ein beziehungsweise nutzt in der `server.cfg` fortlaufend `gamemode0`, `gamemode1`, `gamemode2` und so weiter.

## Filterscript installieren

Filterscripts laufen zusätzlich zum Gamemode und lassen sich beliebig kombinieren.

1. **Filterscript hochladen**\
   Lade die `.amx`-Datei per [SFTP](/tutorials/gameserver/establish-sftp-connection) in folgendes Verzeichnis hoch:

   ```text
   /filterscripts/
   ```

2. **Filterscript eintragen**

   **open.mp – `config.json`:**

   ```json
   {
       "pawn": {
           "side_scripts": ["filterscripts/Race_System", "filterscripts/Anticheat"]
       }
   }
   ```

   **SA-MP – `server.cfg`:**

   ```text
   filterscripts Race_System Anticheat Adminspec
   ```

   In der `config.json` trennst Du mehrere Filterscripts durch ein Komma – nutzt Du nur ein Filterscript, entfällt der zweite Eintrag samt Komma. In der `server.cfg` trennst Du mehrere Filterscripts durch Leerzeichen.

3. **Server starten**\
   Speichere die Änderung und starte Deinen Server.

## Plugin installieren

> [!IMPORTANT]
> Dein Server läuft unter **Linux** und benötigt Plugins deshalb zwingend als `.so`-Datei. Windows-Plugins im `.dll`-Format funktionieren **nicht**. Viele Plugins werden für beide Systeme angeboten – achte beim Download auf die Linux-Version.

1. **Plugin hochladen**\
   Lade die `.so`-Datei per [SFTP](/tutorials/gameserver/establish-sftp-connection) in folgendes Verzeichnis hoch:

   ```text
   /plugins/
   ```

2. **Include ablegen**\
   Bringt das Plugin eine Include-Datei mit (z.B. `streamer.inc` oder `sscanf2.inc`), gehört diese in folgendes Verzeichnis, damit Du Deinen Gamemode damit kompilieren kannst:

   ```text
   /qawno/include/
   ```

3. **Plugin eintragen**

   **open.mp – `config.json`:**

   ```json
   {
       "pawn": {
           "legacy_plugins": ["mysql", "streamer"]
       }
   }
   ```

   **SA-MP – `server.cfg`:**

   ```text
   plugins mysql.so streamer.so
   ```

4. **Server starten**\
   Speichere die Änderung und starte Deinen Server.

> [!NOTE]
> open.mp bringt zusätzlich eigene Komponenten mit, die im Ordner `/components/` liegen. Diese sind nicht mit den klassischen SA-MP-Plugins identisch und werden nicht in `legacy_plugins` eingetragen.

## Eigene Modelle (Custom Models) einbinden

Mit Custom Models bringst Du eigene Fahrzeuge, Objekte oder Skins auf den Server. Die Spieler laden diese Dateien beim Verbinden automatisch herunter – sie müssen bei sich **nichts** installieren.

1. **Modelle hochladen**\
   Lade Deine `.dff`- und `.txd`-Dateien per [SFTP](/tutorials/gameserver/establish-sftp-connection) in folgendes Verzeichnis hoch:

   ```text
   /models/
   ```

2. **Artwork aktivieren**

   **open.mp – `config.json`:**

   ```json
   {
       "artwork": {
           "enable": true,
           "models_path": "models"
       }
   }
   ```

   **SA-MP – `server.cfg`:**

   ```text
   useartwork 1
   artpath models
   ```

3. **Modelle im Skript registrieren**\
   Die Dateien allein reichen nicht. Dein Gamemode muss die Modelle in `OnGameModeInit` über `AddSimpleModel` beziehungsweise `AddCharModel` registrieren. Erst dadurch werden sie an die Spieler ausgeliefert.

4. **Server starten**\
   Speichere die Änderungen und starte Deinen Server.

> [!WARNING]
> Custom Models wurden mit SA-MP 0.3.DL R1 eingeführt und funktionieren in älteren Versionen nicht. Zusätzlich muss `useartwork` beziehungsweise `artwork.enable` aktiviert sein, sonst werden die Modelle ignoriert.

> [!NOTE]
> Die heruntergeladenen Modelle landen bei Deinen Spielern im Cache unter `Dokumente\GTA San Andreas User Files\SAMP\cache` in einem Unterordner pro Server-IP und Port. Bei Anzeigefehlern nach einem Modell-Update hilft es den Spielern, diesen Ordner zu leeren.

> [!TIP]
> Kommen die Modelle bei Deinen Spielern nicht an, kannst Du sie bei open.mp alternativ von einem externen Webserver ausliefern lassen. Trage dessen HTTP-Adresse in `artwork.cdn` ein – die Dateien werden dann von dort geladen statt vom Server selbst.

## Wo speichern Skripte ihre Daten?

Alles, was ein Gamemode dauerhaft speichert – Accounts, Häuser, Fahrzeuge, Statistiken – legt er selbst an. Der einzige Ordner, in den Pawn-Skripte schreiben dürfen, ist:

```text
/scriptfiles/
```

> [!NOTE]
> Skripte können nicht auf Dateien außerhalb von `scriptfiles` zugreifen. Viele größere Gamemodes speichern ihre Daten stattdessen in einer MySQL- oder SQLite-Datenbank. Wie Du diese Daten sicherst, steht unter [Backup erstellen](/tutorials/gameserver/gta-samp/create-backup).

> [!IMPORTANT]
> Singleplayer-Mods für GTA San Andreas (`.asi`-Plugins, CLEO-Skripte, ausgetauschte Modelle) sind **keine** Servermods. Sie gehören nicht auf den Server und verhindern auf dem PC Deiner Spieler sogar den Start des Multiplayer-Clients.
