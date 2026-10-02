---
slug: "ki-deaktivieren"
language: "de"
title: "So deaktivierst oder begrenzt Du die KI auf Deinem Arma Reforger Server"
description: "KI auf einem Arma Reforger Server komplett deaktivieren oder die Anzahl der KI-Einheiten begrenzen"
tags: []
date: "2026-10-02"
visibility: "public"
cta: "gameserver"
product_keys: ["arma-reforger"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "KI deaktivieren"
sort: 19
related: ["gameserver/arma-reforger/improve-performance", "gameserver/arma-reforger/configure-server", "gameserver/arma-reforger/change-scenario-settings", "gameserver/arma-reforger/set-up-game-master"]
---
Über den Bereich `"operating"` in der `config.json` kannst Du die KI auf Deinem Server komplett abschalten oder eine Obergrenze für die Anzahl der KI-Einheiten festlegen. Das ist z.B. sinnvoll für reine PvP-Server oder um die Serverleistung zu schonen.

> [!NOTE]
> Der Bereich `"operating"` ist in der `config.json` Deines Servers standardmäßig nicht vorhanden. Du legst ihn einmalig selbst an. Die Verwaltung überschreibt diesen Bereich beim Serverstart nicht, Deine Einstellungen bleiben also erhalten.

## Verfügbare Optionen

| Option | Standardwert | Beschreibung |
|--------|--------------|--------------|
| `disableAI` | `false` | Bei `true` wird die KI auf dem Server komplett deaktiviert. |
| `aiLimit` | `-1` | Maximale Anzahl an KI-Einheiten. Ist die Grenze erreicht, kann kein System weitere KI spawnen. Negative Werte werden ignoriert, es gilt dann keine Grenze. |

## KI komplett deaktivieren

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **config.json öffnen**\
   Öffne die Datei `config.json` im Hauptverzeichnis Deines Servers.

4. **operating-Bereich hinzufügen**\
   Füge nach dem Bereich `"game"` den neuen Bereich `"operating"` hinzu. Setze dafür hinter die schließende Klammer von `"game"` ein Komma:

   ```json
   {
     "game": {
       ...
     },
     "operating": {
       "disableAI": true
     }
   }
   ```

   Der Bereich `"operating"` steht auf derselben Ebene wie `"game"` und nicht innerhalb davon. `...` steht hier für Deine bestehenden Einstellungen im Bereich `"game"`, die Du unverändert lässt.

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server nicht startet.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!WARNING]
> Mit `"disableAI": true` wird die KI-Funktionalität auf dem Server vollständig abgeschaltet. Szenarien, in denen KI-Gegner oder KI-Trupps vorkommen (z.B. Combat Ops oder Conflict mit KI-Trupps), funktionieren dann nicht mehr wie vorgesehen. Wähle die vollständige Deaktivierung nur, wenn Dein Szenario ohne KI auskommt.

## Anzahl der KI-Einheiten begrenzen

Statt die KI komplett abzuschalten, kannst Du auch eine Obergrenze festlegen. Das hilft vor allem bei Leistungsproblemen durch zu viele KI-Einheiten. Die Grenze gilt für alle Systeme, die KI spawnen – damit z.B. auch für KI, die ein [Game Master](/tutorials/gameserver/arma-reforger/set-up-game-master) platziert.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **config.json öffnen**\
   Öffne die Datei `config.json` im Hauptverzeichnis Deines Servers.

4. **aiLimit eintragen**\
   Füge im Bereich `"operating"` den Eintrag `"aiLimit"` mit der gewünschten Höchstzahl hinzu. Gibt es den Bereich noch nicht, legst Du ihn wie oben beschrieben nach `"game"` an:

   ```json
   "operating": {
     "aiLimit": 60
   }
   ```

   Hast Du zuvor `"disableAI": true` eingetragen, setze den Wert auf `false` oder entferne den Eintrag – sonst bleibt die KI komplett deaktiviert und die Grenze hat keine Wirkung. Mehrere Einträge innerhalb von `"operating"` trennst Du mit einem Komma. Hinter dem letzten Eintrag steht kein Komma.

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server nicht startet.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!NOTE]
> Um die Begrenzung wieder aufzuheben, setzt Du `"aiLimit"` auf `-1` oder entfernst den Eintrag. Spielerlimits pro Fraktion legst Du über den Bereich `missionHeader` fest – siehe [Szenario-Einstellungen ändern](/tutorials/gameserver/arma-reforger/change-scenario-settings).

> [!TIP]
> Weitere Tipps für eine bessere Serverleistung findest Du in der Anleitung [Performance verbessern](/tutorials/gameserver/arma-reforger/improve-performance). Einen Überblick über alle Einstellungen der `config.json` bekommst Du unter [Server konfigurieren](/tutorials/gameserver/arma-reforger/configure-server).
