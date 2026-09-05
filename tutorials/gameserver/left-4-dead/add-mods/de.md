---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem Left 4 Dead Server hinzu"
description: "Mods und Plugins auf einem Left 4 Dead Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["left-4-dead"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 3
related: ["gameserver/left-4-dead/add-admin", "gameserver/left-4-dead/create-backup", "gameserver/left-4-dead/join-server", "gameserver/left-4-dead/kick-ban-players"]
---

Auf einem Left 4 Dead Server gibt es zwei Arten von Erweiterungen: **Plugins** über Metamod:Source und SourceMod, die rein serverseitig laufen, und **Custom-Kampagnen** als VPK-Addons, die zusätzlich jeder Spieler installieren muss.

> [!IMPORTANT]
> Dein Server läuft unter Linux. Lade deshalb bei Metamod:Source und SourceMod immer das **Linux-Paket** (`.tar.gz`) herunter – das `.zip`-Paket ist die Windows-Variante und funktioniert nicht.

## Metamod:Source installieren

Metamod:Source klinkt sich in die Source Engine ein und ist die Grundlage für SourceMod.

1. **Metamod:Source herunterladen**\
   Lade die aktuelle stabile Version von [Metamod:Source](https://www.metamodsource.net/downloads.php?branch=stable) für Left 4 Dead als **Linux**-Paket (`.tar.gz`) herunter.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Dateien hochladen**\
   Entpacke das Archiv und lade den enthaltenen `addons`-Ordner in folgendes Verzeichnis hoch:

   ```text
   /left4dead/
   ```

   Danach existiert der Ordner `/left4dead/addons/metamod/`.

5. **metamod.vdf ersetzen**\
   Öffne die Datei `/left4dead/addons/metamod.vdf` und ersetze ihren Inhalt vollständig durch diesen:

   ```text
   "Plugin"
   {
   	"file"	"../left4dead/addons/metamod/bin/server"
   }
   ```

6. **Server starten**\
   Starte Deinen Server und prüfe in der Serverkonsole mit `meta version`, ob Metamod:Source geladen wurde.

> [!IMPORTANT]
> Schritt 5 ist bei Left 4 Dead zwingend. Dem Paket liegt eine `metamod.vdf` bei, die auf `addons/metamod/bin/server` verweist – dieser Pfad passt für Left 4 Dead **nicht**. Ohne den vorangestellten `../left4dead/` lädt die Engine Metamod:Source nicht, und `meta version` antwortet mit `Unknown command`.

> [!TIP]
> Die passende Datei kannst Du Dir auch vom [VDF-Generator](https://www.metamodsource.net/vdf) von Metamod:Source erzeugen lassen. Wähle dort als Spiel **Left 4 Dead** aus.

## SourceMod installieren

SourceMod baut auf Metamod:Source auf und stellt die Plugin-Umgebung sowie die Adminfunktionen bereit.

1. **SourceMod herunterladen**\
   Lade die aktuelle stabile Version von [SourceMod](https://www.sourcemod.net/downloads.php) (aktuell die Reihe 1.12) als **Linux**-Paket (`.tar.gz`) herunter.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Dateien hochladen**\
   Entpacke das Archiv und lade die enthaltenen Ordner `addons` und `cfg` per [SFTP](/tutorials/gameserver/establish-sftp-connection) in folgendes Verzeichnis hoch:

   ```text
   /left4dead/
   ```

   Vorhandene Ordner werden dabei ergänzt, nicht ersetzt. Danach existiert der Ordner `/left4dead/addons/sourcemod/`.

4. **Server starten**\
   Starte Deinen Server und prüfe in der Serverkonsole mit `sm version`, ob SourceMod geladen wurde.

> [!NOTE]
> Achte beim Hochladen darauf, die `metamod.vdf` aus Schritt 5 der Metamod-Installation nicht wieder zu überschreiben. Das SourceMod-Paket enthält zwar keine VDF-Datei, manche FTP-Programme ersetzen beim Zusammenführen aber ganze Ordner.

## Plugins installieren

1. **Plugin herunterladen**\
   Lade das gewünschte Plugin herunter. Fertige Plugins liegen als `.smx`-Datei vor.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Plugin hochladen**\
   Lade die `.smx`-Datei per [SFTP](/tutorials/gameserver/establish-sftp-connection) in folgendes Verzeichnis hoch:

   ```text
   /left4dead/addons/sourcemod/plugins/
   ```

4. **Server starten**\
   Starte Deinen Server und prüfe mit `sm plugins list`, ob das Plugin geladen wurde.

> [!NOTE]
> Plugins werden ausschließlich serverseitig ausgeführt. Deine Mitspieler müssen dafür nichts installieren.

## Custom-Kampagnen installieren

Custom-Kampagnen liegen als `.vpk`-Datei vor und werden auf dem Server genauso installiert wie beim Spieler.

1. **Kampagne herunterladen**\
   Lade die gewünschte Kampagne als `.vpk`-Datei herunter.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **VPK hochladen**\
   Lade die `.vpk`-Datei in folgendes Verzeichnis hoch:

   ```text
   /left4dead/addons/
   ```

4. **Kampagne aktivieren**\
   Gib in der Serverkonsole folgenden Befehl ein:

   ```text
   update_addon_paths;mission_reload
   ```

   Damit wird die Kampagne ohne Neustart übernommen. Alternativ startest Du Deinen Server neu.

> [!IMPORTANT]
> Custom-Kampagnen müssen **alle Mitspieler** zusätzlich lokal installieren. Wer die Kampagne nicht hat, kann sie auf Deinem Server nicht spielen.

> [!WARNING]
> Für Left 4 Dead gibt es keinen Steam Workshop. Custom-Kampagnen bekommst Du deshalb nur über Drittanbieter-Seiten. Lade `.vpk`-Dateien nur aus Quellen, denen Du vertraust.

## Ordnerstruktur im Überblick

```text
/left4dead/addons/                        <- .vpk-Dateien für Custom-Kampagnen
/left4dead/addons/metamod.vdf             <- Ladedatei für Metamod:Source
/left4dead/addons/metamod/
/left4dead/addons/sourcemod/
/left4dead/addons/sourcemod/plugins/      <- .smx-Plugindateien
/left4dead/addons/sourcemod/configs/      <- Konfigurationen, z.B. Adminlisten
/left4dead/cfg/                           <- server.cfg und weitere Konfigurationen
```

## Installation prüfen

Gib die folgenden Befehle in der Serverkonsole ein:

| Befehl | Beschreibung |
|--------|-------------|
| `meta version` | Version von Metamod:Source anzeigen |
| `meta list` | Von Metamod geladene Erweiterungen anzeigen |
| `sm version` | Version von SourceMod anzeigen |
| `sm plugins list` | Geladene SourceMod-Plugins anzeigen |

> [!WARNING]
> Antwortet der Server auf einen dieser Befehle mit `Unknown command`, wurde die jeweilige Komponente nicht geladen. Prüfe in dem Fall zuerst den Inhalt der `metamod.vdf`, danach, ob Du das Linux-Paket verwendet hast und ob die Ordner tatsächlich unter `/left4dead/addons/` liegen.

> [!WARNING]
> Stoppe Deinen Server immer, bevor Du Dateien hochlädst. Nach einem Spielupdate können Metamod:Source, SourceMod und einzelne Plugins inkompatibel sein – prüfe dann, ob Aktualisierungen verfügbar sind.

> [!TIP]
> Wie Du Dir mit SourceMod anschließend Adminrechte gibst, erfährst Du unter [Admin hinzufügen](/tutorials/gameserver/left-4-dead/add-admin).
