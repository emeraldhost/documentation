---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem Soldat Server hinzu"
description: "Mods, eigene Karten und Scripts auf einem Soldat Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["soldat"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 3
related: ["gameserver/soldat/add-admin", "gameserver/soldat/create-backup", "gameserver/soldat/join-server", "gameserver/soldat/kick-ban-players"]
---

Bei Soldat gibt es zwei völlig unterschiedliche Arten von Mods. Klassische Mods – also andere Gostek-Grafiken, Waffenbilder, Sounds und Menüs – sind **reine Client-Sache**: Sie liegen im Soldat-Ordner auf dem PC des Spielers und werden dort über einen Startparameter geladen. Auf Deinen Server gehören sie nicht.

Serverseitig erweiterst Du Dein Spiel über drei Wege:

- **Eigene Karten**, die der Server automatisch an die Spieler überträgt
- **Server-Scripting** (ScriptCore 3) für eigene Spielregeln und Verwaltungsfunktionen
- **Mod-Pakete** (`.smod`) – diese Möglichkeit gibt es nur bei OpenSoldat

> [!NOTE]
> **Zwei Serverversionen**
>
> Für Soldat gibt es zwei Serverversionen mit unterschiedlicher Konfiguration. Welche bei Dir läuft, erkennst Du im Dateimanager beziehungsweise per [SFTP](/tutorials/gameserver/establish-sftp-connection):
>
> | Datei im Hauptverzeichnis | Version |
> |---------------------------|---------|
> | `soldat.ini` und `server.ini` | klassischer Soldat-Server |
> | `configs/server.cfg` | OpenSoldat |

## Eigene Karten hinzufügen

Karten sind der praktischste Weg, Deinen Server individuell zu gestalten. Sie liegen als `.pms`-Datei vor.

1. **Karte herunterladen**\
   Lade die gewünschte Karte herunter. Du benötigst die `.pms`-Datei.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Karte hochladen**\
   Lade die `.pms`-Datei per [SFTP](/tutorials/gameserver/establish-sftp-connection) in den Maps-Ordner Deines Servers hoch. Bei OpenSoldat ist das der Ordner `maps/`.

4. **Karte in die Rotation eintragen**\
   Öffne die Datei `mapslist.txt` im Hauptverzeichnis Deines Servers und trage die Karte ein – eine Karte pro Zeile:

   ```text
   ctf_Ash
   ctf_Laos
   ctf_Run
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!IMPORTANT]
> Der Kartenname wird **ohne Pfad und ohne die Endung `.pms`** eingetragen, aber **mit dem Präfix des Spielmodus** (zum Beispiel `ctf_`). Die Schreibweise unterscheidet Groß- und Kleinschreibung – auf Deinem Linux-Server ist das entscheidend. Heißt die Datei `ctf_Laos.pms`, muss in der Liste exakt `ctf_Laos` stehen.

> [!WARNING]
> **Leerzeilen** in der `mapslist.txt` führen zu Ladefehlern, und Einträge für Karten, die gar nicht auf dem Server liegen, können den Server zum Absturz bringen. Prüfe nach jeder Änderung, ob jede Zeile einer vorhandenen Datei entspricht.

### Karten im laufenden Betrieb verwalten

Als angemeldeter Admin kannst Du die Rotation auch im Spiel anpassen:

| Befehl | Beschreibung |
|--------|-------------|
| `/addmap <Mapname>` | Karte zur laufenden Rotation hinzufügen |
| `/delmap <Mapname>` | Karte aus der Rotation entfernen |
| `/map <Mapname>` | Sofort auf eine bestimmte Karte wechseln |
| `/nextmap` | Zur nächsten Karte wechseln |
| `/restart` | Aktuelle Runde neu starten |

> [!NOTE]
> Mit `/delmap` lassen sich nur Karten entfernen, die zuvor mit `/addmap` hinzugefügt wurden. Dauerhafte Änderungen nimmst Du in der `mapslist.txt` vor.

## Karten automatisch an die Spieler übertragen

Damit Mitspieler Deine eigenen Karten nicht selbst installieren müssen, überträgt der Server sie beim Beitritt.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Einstellung setzen**\
   Klassischer Server – im Abschnitt `[NETWORK]` der `soldat.ini`:

   ```text
   Allow_Download=1
   ```

   OpenSoldat – in der `configs/server.cfg`:

   ```text
   set net_allowdownload 1
   set fileserver_enable 1
   ```

3. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!NOTE]
> Beim klassischen Server ist `Allow_Download` von Haus aus auf `1` gesetzt – Du musst es also nur prüfen, wenn Downloads nicht funktionieren. Die Übertragung von Karten, Szenerie und Texturen läuft über TCP auf dem **Game Port + 10**. Welche Ports für Deinen Server gelten, siehst Du in der **Verwaltung**.

> [!TIP]
> OpenSoldat kann fehlende Dateien alternativ von einer eigenen Webadresse laden lassen. Dafür trägst Du in der `configs/server.cfg` die Option `sv_downloadurl` ein.

## Server-Scripting aktivieren

Das eigentliche Mod-System für Soldat-Server ist das serverseitige Scripting (ScriptCore 3). Damit lassen sich eigene Spielmodi, Statistiken, Automatisierungen und Verwaltungsbefehle umsetzen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Scripting einschalten**\
   Klassischer Server – im Abschnitt `[NETWORK]` der `server.ini`:

   ```text
   Scripting=1
   ```

   OpenSoldat – in der `configs/server.cfg`. Dort ist Scripting bereits ab Werk aktiv, der Eintrag dient nur zur Kontrolle:

   ```text
   set sc_enable 1
   ```

3. **Script hochladen**\
   Lade Dein Script per [SFTP](/tutorials/gameserver/establish-sftp-connection) in einen eigenen Unterordner hoch:

   ```text
   scripts/<Scriptname>/
   ```

4. **Konfigurationsdatei anlegen**\
   Lege im Scriptordner die Datei `sc3.cfg` an:

   ```text
   [Config]
   Name=MeinScript
   MainFile=main.pas
   Sandboxed=2
   ```

5. **Server starten**\
   Starte Deinen Server und prüfe in der Serverkonsole, ob das Script fehlerfrei kompiliert wurde.

### Optionen der sc3.cfg

| Option | Bedeutung |
|--------|-----------|
| `Name` | Pflichtfeld, maximal 20 Zeichen – erscheint in allen Konsolenausgaben zu diesem Script |
| `MainFile` | Einstiegsdatei des Scripts, standardmäßig `main.pas` |
| `Debug` | Zusätzliche Debug-Ausgaben aktivieren |
| `Sandboxed` | Dateizugriff des Scripts: `0` gesamtes Laufwerk, `1` Serverordner, `2` nur die eigenen Scriptdaten (Standard) |
| `AllowDlls` | Erlaubt dem Script das Einbinden externer Bibliotheken |
| `AllowIniEdit` | Erlaubt dem Script das Lesen und Schreiben von `soldat.ini` und `server.ini` – wirkt nur mit `Sandboxed=1` |
| `Gamemod` | Meldet den Server in der Lobby als Gamemod-Server |
| `Legacy` | Kompatibilitätsmodus für ältere Scripts (ScriptCore 2) |

Zusätzlich kennt die Datei die Abschnitte `[SearchPaths]` und `[Defines]`.

> [!IMPORTANT]
> Belasse `Sandboxed` möglichst auf `2`. Mit `0` darf ein Script auf das gesamte Laufwerk zugreifen – installiere nur Scripts aus Quellen, denen Du vertraust.

> [!TIP]
> **Verhalten bei Fehlern**
>
> Stürzt ein Script ab, steuert `OnScriptCrash` (klassisch) beziehungsweise `sc_onscriptcrash` (OpenSoldat), was passiert: neu kompilieren, Server herunterfahren, ignorieren oder das Script deaktivieren.

## Mod-Pakete bei OpenSoldat

Nur OpenSoldat kann serverseitig ein Mod-Paket laden. Mods liegen dort als `.smod`-Datei vor.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Mod hochladen**\
   Lade die `.smod`-Datei per [SFTP](/tutorials/gameserver/establish-sftp-connection) in den Ordner `mods/` hoch.

3. **Mod eintragen**\
   Trage in der `configs/server.cfg` den Dateinamen **ohne die Endung `.smod`** ein:

   ```text
   set fs_mod MeinMod
   ```

4. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!WARNING]
> Mit `sv_pure` verlangst Du, dass alle Spieler dieselbe `.smod`-Datei verwenden wie der Server. Ohne diese Einstellung können Spieler mit abweichenden Dateien auf den Server – mit ihr benötigen Deine Mitspieler die Moddatei. Damit sie fehlende Dateien beziehen können, kannst Du zusätzlich `sv_downloadurl` setzen.

## Was nicht auf den Server gehört

> [!NOTE]
> Klassische Soldat-Mods aus dem Ordner `mods/` des **Spiels** werden über den Client-Startparameter `-mod <Name>` geladen. Sie verändern nur die Darstellung auf dem PC des Spielers und lassen sich beim klassischen Soldat-Server nicht serverseitig erzwingen. Für den klassischen Server ist kein Mod-Parameter dokumentiert – nutze dort eigene Karten und Server-Scripting.

> [!WARNING]
> Stoppe Deinen Server immer, bevor Du Dateien hochlädst oder Konfigurationsdateien bearbeitest. Änderungen an `mapslist.txt`, `soldat.ini`, `server.ini` und `configs/server.cfg` werden erst beim Serverstart eingelesen.

> [!TIP]
> Wie Du Dir anschließend Adminrechte gibst, um Karten und Spielmodi im Spiel umzuschalten, erfährst Du unter [Admin hinzufügen](/tutorials/gameserver/soldat/add-admin).
