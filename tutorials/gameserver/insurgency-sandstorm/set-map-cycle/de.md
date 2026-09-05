---
slug: "map-cycle-aendern"
language: "de"
title: "So richtest Du einen Map Cycle auf Deinem Insurgency: Sandstorm Server ein"
description: "Map Cycle auf einem Insurgency: Sandstorm Server einrichten"
tags: []
date: "2026-06-23"
visibility: "public"
cta: "gameserver"
product_keys: ["insurgency-sandstorm"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Map Cycle einrichten"
sort: 11
related: ["gameserver/insurgency-sandstorm/set-game-stats-token", "gameserver/insurgency-sandstorm/set-gsl-token", "gameserver/insurgency-sandstorm/set-server-password", "gameserver/insurgency-sandstorm/setup-coop-server"]
---

Mit einem Map Cycle wechselt Dein Server automatisch durch eine von Dir festgelegte Liste von Szenarien (Karte + Spielmodus). Die Liste wird in einer Textdatei gespeichert und über einen Startparameter geladen.

## Schritt 1: Map-Cycle-Datei anlegen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Ordner anlegen**\
   Wechsle in den Ordner `Insurgency/Config/Server/`. Falls die Ordner `Config` und `Server` noch nicht existieren, lege sie an.

4. **Datei erstellen**\
   Erstelle in diesem Ordner eine Textdatei, z.B. `MapCycle.txt`. Der Name ist frei wählbar – Du kannst auch mehrere Listen (z.B. `Coop.txt`, `Versus.txt`) anlegen.

5. **Szenarien eintragen**\
   Trage die gewünschten Szenarien ein – **ein Szenario pro Zeile**:

   ```text
   Scenario_Refinery_Checkpoint_Security
   Scenario_Hideout_Push_Insurgents
   Scenario_Crossing_Firefight_West
   ```

   Eine vollständige Liste der Szenarien findest Du in der Anleitung [Szenario ändern](/tutorials/gameserver/insurgency-sandstorm/change-scenario) bzw. im offiziellen [Server Admin Guide](https://mod.io/g/insurgencysandstorm/r/server-admin-guide).

## Schritt 2: Map Cycle laden

1. **Einstellungen öffnen**\
   Öffne in der Verwaltung die **Einstellungen**.

2. **Parameter anpassen**\
   Im Feld **Zusätzliche Parameter** ist standardmäßig `-Mods -Mapcycle=ppMapCycle` hinterlegt. Ändere den Wert von `-Mapcycle=` auf den Namen Deiner Datei (**ohne** `.txt`) und lass `-Mods` stehen – es darf nur **ein** `-Mapcycle=` aktiv sein:

   ```text
   -Mods -Mapcycle=MapCycle
   ```

3. **Server starten**\
   Speichere die Einstellung und starte Deinen Server.

> [!NOTE]
> Der Aufbau eines Szenario-Namens: `Scenario_<Karte>_<Spielmodus>_<Team>`. Der Spielmodus `Checkpoint` ist Koop, `Push`/`Firefight`/`Skirmish` sind Versus-Modi. Beim Modus `Skirmish` entfällt der Team-Teil.
