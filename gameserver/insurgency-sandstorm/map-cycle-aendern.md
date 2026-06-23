---
description: "Map Cycle auf einem Insurgency: Sandstorm Server einrichten"
---

# So richtest du einen Map Cycle auf deinem Insurgency: Sandstorm Server ein

Mit einem Map Cycle wechselt dein Server automatisch durch eine von dir festgelegte Liste von Szenarien (Karte + Spielmodus). Die Liste wird in einer Textdatei gespeichert und über einen Startparameter geladen.

## Schritt 1: Map-Cycle-Datei anlegen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Ordner anlegen</b><br>
   Wechsle in den Ordner `Insurgency/Config/Server/`. Falls die Ordner `Config` und `Server` noch nicht existieren, lege sie an.

4. <b>Datei erstellen</b><br>
   Erstelle in diesem Ordner eine Textdatei, z.B. `MapCycle.txt`. Der Name ist frei wählbar — du kannst auch mehrere Listen (z.B. `Coop.txt`, `Versus.txt`) anlegen.

5. <b>Szenarien eintragen</b><br>
   Trage die gewünschten Szenarien ein — **ein Szenario pro Zeile**:

   ```
   Scenario_Refinery_Checkpoint_Security
   Scenario_Hideout_Push_Insurgents
   Scenario_Crossing_Firefight_West
   ```

   Eine vollständige Liste der Szenarien findest du in der Anleitung [Szenario ändern](szenario-aendern.md) bzw. im offiziellen [Server Admin Guide](https://mod.io/g/insurgencysandstorm/r/server-admin-guide).

## Schritt 2: Map Cycle laden

1. <b>Einstellungen öffnen</b><br>
   Öffne in der Verwaltung die **Einstellungen**.

2. <b>Parameter anpassen</b><br>
   Im Feld **Zusätzliche Parameter** ist standardmäßig `-Mods -Mapcycle=ppMapCycle` hinterlegt. Ändere den Wert von `-Mapcycle=` auf den Namen deiner Datei (**ohne** `.txt`) und lass `-Mods` stehen — es darf nur **ein** `-Mapcycle=` aktiv sein:

   ```
   -Mods -Mapcycle=MapCycle
   ```

3. <b>Server starten</b><br>
   Speichere die Einstellung und starte deinen Server.

:::: info Hinweis
Der Aufbau eines Szenario-Namens: `Scenario_<Karte>_<Spielmodus>_<Team>`. Der Spielmodus `Checkpoint` ist Koop, `Push`/`Firefight`/`Skirmish` sind Versus-Modi. Beim Modus `Skirmish` entfällt der Team-Teil.
::::
