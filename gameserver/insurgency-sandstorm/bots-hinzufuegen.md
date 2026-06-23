---
description: "Bots auf einem Insurgency: Sandstorm Server hinzufügen"
---

# So fügst du Bots auf deinem Insurgency: Sandstorm Server hinzu

Bots (KI-Gegner und -Mitspieler) eignen sich, um Koop-Modi wie Checkpoint zu füllen oder die Schwierigkeit anzupassen. Die Bot-Einstellungen werden in der Datei `Game.ini` festgelegt.

## Bots konfigurieren

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Game.ini öffnen</b><br>
   Die Datei `Game.ini` befindet sich im Verzeichnis `Insurgency/Saved/Config/LinuxServer/`. Öffne sie.

4. <b>Koop-Einstellungen eintragen</b><br>
   Füge folgenden Abschnitt hinzu und passe die Werte an:

   ```ini
   [/Script/Insurgency.INSCoopMode]
   bUseVehicleInsertion=True
   MinimumEnemies=5
   MaximumEnemies=40
   bBots=True
   FriendlyBotQuota=8
   ```

   | Einstellung | Standard | Beschreibung |
   |-------------|----------|--------------|
   | `bUseVehicleInsertion` | `True` | Legt fest, ob Bots per Fahrzeug einrücken |
   | `MinimumEnemies` | `5` | Minimale Anzahl gegnerischer Bots |
   | `MaximumEnemies` | `40` | Maximale Anzahl gegnerischer Bots |
   | `bBots` | `True` | Aktiviert KI-Bots im Koop-Modus |
   | `FriendlyBotQuota` | `8` | Anzahl freundlicher Bots in Koop-Modi |

5. <b>Versus-Einstellungen eintragen (optional)</b><br>
   Für Versus-Spielmodi ergänzt du zusätzlich:

   ```ini
   [/Script/Insurgency.INSMultiplayerMode]
   bBots=True
   BotQuota=5
   ```

   | Einstellung | Standard | Beschreibung |
   |-------------|----------|--------------|
   | `bBots` | `True` | Aktiviert Bots in Versus-Szenarien |
   | `BotQuota` | `5` | Füllt jedes Team bis zu diesem Wert mit Bots auf |

6. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: warning Achtung
Bearbeite die `Game.ini` nur bei gestopptem Server. Änderungen an einer laufenden Instanz werden beim Beenden überschrieben.
::::
