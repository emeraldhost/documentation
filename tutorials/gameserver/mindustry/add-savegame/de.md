---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem Mindustry Server hinzu"
description: "Savegame auf einem Mindustry Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["mindustry"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 5
related: ["gameserver/mindustry/add-admin", "gameserver/mindustry/add-mods", "gameserver/mindustry/create-backup", "gameserver/mindustry/download-savegame"]
---

Ein Spielstand ist in Mindustry eine einzelne Datei mit der Endung `.msav`. Dein Server liest sie aus dem Ordner `/config/saves/`.

> [!NOTE]
> Es gibt **kein Feld für einen Weltnamen** in einer Konfiguration. Der sogenannte Slot ist schlicht der Dateiname ohne die Endung `.msav`. Die Datei `meinewelt.msav` lädst Du also mit dem Befehl `load meinewelt`.

## Savegame hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Läuft eine Partie, überschreibt der Server Deine Datei sonst unter Umständen durch einen Auto-Save.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /config/saves/
   ```

   > [!NOTE]
   > Existiert der Ordner noch nicht, lege ihn an. Die Schreibweise muss exakt `config/saves` lauten – Dein Server läuft unter Linux und unterscheidet Groß- und Kleinschreibung.

4. **Datei hochladen**\
   Lade Deine `.msav`-Datei direkt in diesen Ordner hoch. Lege keine Unterordner an – der Server liest ausschließlich Dateien, die direkt im Ordner liegen.

   > [!TIP]
   > Verwende einen kurzen Dateinamen ohne Leerzeichen, zum Beispiel `meinewelt.msav`. Diesen Namen gibst Du später ohne Endung als Slot an.

5. **Server starten**\
   Starte Deinen Server über die Verwaltung.

6. **Konsole öffnen**\
   Öffne in der Verwaltung die **Konsole** Deines Servers.

7. **Spielstände auflisten**\
   Kontrolliere, ob Dein Spielstand erkannt wurde:

   ```text
   saves
   ```

   Der Server listet alle gefundenen Slots ohne Endung auf.

8. **Spielstand laden**\
   Läuft bereits eine Partie, beende sie zuerst mit `stop`. Lade anschließend Deinen Spielstand:

   ```text
   load meinewelt
   ```

   Danach hostet Dein Server den geladenen Stand und Spieler können beitreten.

> [!WARNING]
> Mit dem Laden eines anderen Spielstands ersetzt Du die laufende Partie. Erstelle vorher ein [Backup](/tutorials/gameserver/mindustry/create-backup) oder lade den bisherigen Stand herunter, falls Du zurückwechseln möchtest.

> [!IMPORTANT]
> Meldet der Server `No (valid) save data found for slot.`, passt entweder der Slotname nicht oder die Datei ist beschädigt beziehungsweise unvollständig hochgeladen. Prüfe die Schreibweise mit `saves` und lade die Datei im Zweifel erneut hoch.

## Spielstand automatisch beim Start laden

Damit Dein Server nach einem Neustart selbstständig denselben Spielstand lädt, hinterlegst Du einen Startbefehl in der **Konsole**:

```text
config startCommands load meinewelt
```

> [!WARNING]
> Setze den Befehl **nicht** in Anführungszeichen. Mindustry übernimmt alles hinter dem Einstellungsnamen wortwörtlich – Anführungszeichen würden mitgespeichert und der Startbefehl beim nächsten Start ins Leere laufen.

> [!NOTE]
> Mehrere Startbefehle trennst Du durch ein Komma, zum Beispiel `config startCommands load meinewelt,pause off`. Die Einstellung wird sofort gespeichert und gilt ab dem nächsten Serverstart.

## Lokalen Spielstand finden

Deine Einzelspieler-Spielstände liegen auf Deinem PC im Datenverzeichnis von Mindustry:

| System | Pfad |
|--------|------|
| Windows | `%AppData%\Mindustry\saves\` |
| Linux | `~/.local/share/Mindustry/saves/` |
| macOS | `~/Library/Application Support/Mindustry/saves/` |

> [!WARNING]
> **Steam-Version**
>
> Die Steam-Version legt ihr Datenverzeichnis **im Spielordner** ab. Die Spielstände findest Du dort unter `saves/saves/` innerhalb Deines Mindustry-Installationsordners und nicht in den oben genannten Pfaden.

> [!IMPORTANT]
> Server- und Einzelspieler-Spielstände nutzen dasselbe Format `.msav`. Ob sich ein Einzelspieler-Spielstand 1:1 auf einem Dedicated Server weiterspielen lässt, ist jedoch nicht offiziell dokumentiert. Arbeite deshalb ausschließlich mit Kopien und lege vorher ein [Backup](/tutorials/gameserver/mindustry/create-backup) an.

## Eigene Karte hinzufügen

Karten sind kein Spielstand, sondern ein eigener Dateityp – sie liegen in einem anderen Ordner, nutzen aber ebenfalls die Endung `.msav`.

1. **Karte hochladen**\
   Lade die `.msav`-Datei Deiner Karte per [SFTP](/tutorials/gameserver/establish-sftp-connection) in folgendes Verzeichnis hoch:

   ```text
   /config/maps/
   ```

2. **Karten neu einlesen**\
   Gib in der **Konsole** Deiner Verwaltung ein:

   ```text
   reloadmaps
   ```

3. **Karte prüfen**\
   Lass Dir alle eigenen Karten anzeigen:

   ```text
   maps custom
   ```

4. **Karte starten**\
   Beende eine eventuell laufende Partie mit `stop` und starte anschließend Deine Karte:

   ```text
   host meine_karte
   ```

   > [!NOTE]
   > Leerzeichen im Kartennamen darfst Du als Unterstrich schreiben, Groß- und Kleinschreibung spielt beim Kartennamen keine Rolle. Meldet der Server `No map with name '...' found.`, kontrolliere den Namen mit `maps custom`.

> [!WARNING]
> Startest Du eine Karte mit `host`, beginnt eine neue Partie. Dein bisheriger Fortschritt bleibt nur erhalten, wenn Du ihn vorher mit `save <Slotname>` gesichert hast.
