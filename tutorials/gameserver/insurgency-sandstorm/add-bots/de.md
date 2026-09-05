---
slug: "bots-hinzufuegen"
language: "de"
title: "So fügst Du Bots auf Deinem Insurgency: Sandstorm Server hinzu"
description: "Bots auf einem Insurgency: Sandstorm Server hinzufügen"
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
short_title: "Bots hinzufügen"
sort: 3
related: ["gameserver/insurgency-sandstorm/add-admins", "gameserver/insurgency-sandstorm/add-mods", "gameserver/insurgency-sandstorm/add-mutators", "gameserver/insurgency-sandstorm/additional-parameters"]
---

Bots (KI-Gegner und -Mitspieler) eignen sich, um Koop-Modi wie Checkpoint zu füllen oder die Schwierigkeit anzupassen. Die Bot-Einstellungen werden in der Datei `Game.ini` festgelegt.

## Bots konfigurieren

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Game.ini öffnen**\
   Die Datei `Game.ini` befindet sich im Verzeichnis `Insurgency/Saved/Config/LinuxServer/`. Öffne sie.

4. **Koop-Einstellungen eintragen**\
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

5. **Versus-Einstellungen eintragen (optional)**\
   Für Versus-Spielmodi ergänzt Du zusätzlich:

   ```ini
   [/Script/Insurgency.INSMultiplayerMode]
   bBots=True
   BotQuota=5
   ```

   | Einstellung | Standard | Beschreibung |
   |-------------|----------|--------------|
   | `bBots` | `True` | Aktiviert Bots in Versus-Szenarien |
   | `BotQuota` | `5` | Füllt jedes Team bis zu diesem Wert mit Bots auf |

6. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!WARNING]
> Bearbeite die `Game.ini` nur bei gestopptem Server. Änderungen an einer laufenden Instanz werden beim Beenden überschrieben.
