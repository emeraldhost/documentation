---
slug: "welt-einstellungen-aendern"
language: "de"
title: "So änderst Du die Welt-Einstellungen Deines Stormforge Servers"
description: "Schwierigkeit, Todesstrafe, Stürme und Multiplikatoren Deines Stormforge Servers in der settings.json anpassen."
tags: []
date: "2026-11-11"
visibility: "public"
cta: "gameserver"
product_keys: ["stormforge"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Welt-Einstellungen ändern"
sort: 12
related: ["gameserver/stormforge/change-world-seed", "gameserver/stormforge/pause-world-when-empty", "gameserver/stormforge/reset-world", "gameserver/stormforge/create-backup"]
---

Die Welt-Einstellungen Deines Stormforge Servers stehen im Block `worldSettings` der Datei `settings.json` im Hauptverzeichnis Deines Servers. Auf einem dedizierten Server können Spieler die Welt-Einstellungen nicht über das Menü im Spiel ändern. Du änderst sie in der Datei und startest den Server danach.

## Einstellungen in der settings.json ändern

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Bearbeite die Datei nur bei gestopptem Server, denn der laufende Server schreibt sie selbst neu.

2. **settings.json öffnen**\
   Öffne in der Verwaltung den [Datei-Browser](/tutorials/gameserver/use-file-browser) und wähle bei der Datei `settings.json` im Menü (⋮) **Bearbeiten**. Alternativ bearbeitest Du die Datei per [SFTP](/tutorials/gameserver/establish-sftp-connection):

   ```text
   /settings.json
   ```

3. **Werte anpassen**\
   Ändere im Block `worldSettings` die gewünschten Werte (siehe Tabelle unten). Textwerte stehen in Anführungszeichen, Zahlen ohne. Dezimalzahlen schreibst Du mit Punkt, zum Beispiel `0.5`.

4. **Speichern und Server starten**\
   Speichere die Datei und starte Deinen Server.

## Einstellbare Werte

| Schlüssel | Bedeutung | Gültige Werte | Standard |
| --- | --- | --- | --- |
| `combatDifficulty` | Schwierigkeit der Kämpfe. Was die einzelnen Stufen ändern, dokumentiert das Spiel nicht. | `Easy`, `Casual`, `Normal`, `Hard` | `Normal` |
| `deathPenalty` | Was beim Tod mit Deinen Gegenständen passiert. `KeepAll`: Du behältst alles. `DropRecoverable`: Du lässt sie fallen und kannst sie zurückholen, das Spiel hinterlässt dafür einen Beutel. `LoseAll`: Du verlierst alles. | `KeepAll`, `DropRecoverable`, `LoseAll` | `DropRecoverable` |
| `movingStormsDifficulty` | Die Chaos-Stürme, die über die Karte ziehen und Deine Basis treffen können. `Off` schaltet sie ab, `Normal` ist der Standard. Was die übrigen Stufen ändern, dokumentiert das Spiel nicht. | `Off`, `Easy`, `Normal`, `Medium`, `Hard` | `Normal` |
| `enemyHealthScale` | Multiplikator für das Leben der Gegner. `1` ist der Standard, ein kleinerer Wert bedeutet weniger Leben. | Zahl, z.B. `0.5` bis `1.5` | `1` |
| `resourceRate` | Multiplikator für die Ressourcen-Rate. `1` ist der Standard. | Zahl | `1` |
| `durabilityLossScale` | Multiplikator für den Haltbarkeitsverlust Deiner Ausrüstung. `1` ist der Standard. | Zahl | `1` |
| `worldPreset` | Schwierigkeits-Preset. Was die einzelnen Presets ändern, dokumentiert das Spiel nicht. | `Easy`, `Casual`, `Normal`, `Hard`, `Custom` | `Normal` |

Den Seed im selben Block behandelt die Anleitung [Welt Seed ändern](/tutorials/gameserver/stormforge/change-world-seed). Ob die Welt ohne Spieler pausiert, legst Du mit einem eigenen Schlüssel außerhalb von `worldSettings` fest, siehe [Welt ohne Spieler pausieren](/tutorials/gameserver/stormforge/pause-world-when-empty).

## Beispiel

In diesem Ausschnitt der `settings.json` sind zwei Werte geändert: Beim Tod behältst Du alle Gegenstände (`deathPenalty`), und die Gegner haben weniger Leben (`enemyHealthScale`).

```json
"worldSettings": {
    "seed": "",
    "name": "",
    "combatDifficulty": "Normal",
    "deathPenalty": "KeepAll",
    "resourceRate": 1,
    "worldPreset": "Normal",
    "enemyHealthScale": 0.5,
    "movingStormsDifficulty": "Normal",
    "durabilityLossScale": 1
},
```

> [!WARNING]
> **Ungültige Werte verhindern den Start**\
> Der Server beendet sich sofort bei einem unbekannten Schlüssel, einem falsch geschriebenen Textwert, einer leeren Datei oder ungültigem JSON. EmeraldHost fängt beim Start einen Teil davon ab: Unbekannte Schlüssel werden automatisch entfernt. Eine Datei, die kein gültiges JSON ist, bleibt als `settings.json.invalid-<Datum>` erhalten, und es wird eine neue `settings.json` mit Standardwerten und Deinen Werten aus der Verwaltung angelegt. Ein falscher Wert wie `"combatDifficulty": "Hart"` wird nicht repariert: Der Server startet dann nicht. Schreibe die Werte deshalb genau so wie in der Tabelle.

## Wirkung auf eine bestehende Welt

`combatDifficulty`, `enemyHealthScale`, `deathPenalty` und `movingStormsDifficulty` gelten nach dem Neustart auch für Deine bestehende Welt. Der Seed wirkt nur auf eine neu generierte Welt. Bei `resourceRate`, `durabilityLossScale` und `worldPreset` prüfst Du nach dem Neustart im Spiel, ob die Änderung aktiv ist.

## Werte, die bei jedem Start überschrieben werden

Diese Schlüssel schreibt EmeraldHost bei jedem Start neu in die `settings.json`. Änderungen von Hand gehen dort verloren, ändere sie stattdessen im **Config-Editor** der Verwaltung:

| Schlüssel | Quelle |
| --- | --- |
| `worldSettings.name` | Feld **Weltname** im Config-Editor |
| `serverName` | Feld **Server Name**, siehe [Server Name ändern](/tutorials/gameserver/stormforge/change-server-name) |
| `password` | Feld **Server Passwort**, siehe [Server Passwort setzen](/tutorials/gameserver/stormforge/set-server-password) |
| `maxPlayers` | Feld **Maximale Spieler**, siehe [Max Spieler ändern](/tutorials/gameserver/stormforge/change-max-players) |
| `port` | Game Port Deines Servers aus der Verwaltung |
| `localOnly`, `savesDirectory` | Feste Werte (`false` und `saves`) |

Auch `worldPrefabID` wird verwaltet. Der Schlüssel legt fest, welche Welt geladen wird. Ändere ihn nur, wenn Du eine andere Welt laden möchtest, siehe [Savegame hinzufügen](/tutorials/gameserver/stormforge/add-savegame). Alle anderen Schlüssel, die hier nicht genannt sind, lässt Du unverändert.
