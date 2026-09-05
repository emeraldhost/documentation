---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem Kerbal Space Program Server hinzu"
description: "Savegame auf einem Kerbal Space Program Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["kerbal-space-program"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 5
related: ["gameserver/kerbal-space-program/add-admin", "gameserver/kerbal-space-program/add-mods", "gameserver/kerbal-space-program/create-backup", "gameserver/kerbal-space-program/download-savegame"]
---

Der Spielstand eines DarkMultiPlayer-Servers steckt nicht in einer einzelnen Datei, sondern in einem kompletten Ordner namens `Universe` im Hauptverzeichnis Deines Servers. Darin legt der Server für jedes Schiff, jeden Kerbal und jeden Spieler eigene Textdateien an.

> [!NOTE]
> Der Ordnername `Universe` ist fest vorgegeben. Du musst also keinen Welt- oder Spielstandnamen in einer Konfiguration eintragen – der Servername hat mit dem Spielstand nichts zu tun.

## Aufbau des Spielstands

| Ordner | Inhalt |
|--------|--------|
| `Universe/Vessels/` | Eine Datei je Schiff |
| `Universe/Kerbals/` | Eine Datei je Kerbal |
| `Universe/Scenarios/` | Fortschritt wie Wissenschaft, Geld, Ruf und Forschungsbaum – je Spieler ein eigener Unterordner |
| `Universe/Crafts/` | Gemeinsame Bauplan-Bibliothek |
| `Universe/Flags/` | Hochgeladene Flaggen |
| `Universe/Players/` | Öffentliche Schlüssel der Spieler |
| `Universe/Groups/` | Spielergruppen |
| `Universe/Permissions/` | Besitzrechte an Schiffen |

## Einzelspieler-Spielstand umwandeln

Eine normale KSP-Speicherdatei (`persistent.sfs`) lässt sich nicht direkt hochladen. Der DMP-Client bringt dafür einen Konverter mit, der aus Deinem lokalen Spielstand einen fertigen `Universe`-Ordner erzeugt.

1. **DMP-Client installieren**\
   Installiere den DMP-Client wie unter [Server beitreten](/tutorials/gameserver/kerbal-space-program/join-server) beschrieben und starte Kerbal Space Program.

2. **Spielernamen eintragen**\
   Trage im DMP-Fenster im Hauptmenü im Feld **Player name** genau den Namen ein, mit dem Du später auch auf dem Server spielen möchtest.

3. **Optionen öffnen**\
   Klicke im DMP-Fenster auf **Options** und anschließend auf **Advanced**.

4. **Konverter starten**\
   Klicke auf **Generate DMP universe from saved game...**. Es öffnet sich das Fenster **Universe Converter** mit Deinen lokalen Spielständen – klicke dort den gewünschten Spielstand an. Deine Spielstände liegen lokal unter:

   ```text
   [KSP-Ordner]/saves/<Name des Spielstands>/
   ```

   > [!WARNING]
   > Ein bereits vorhandener Ordner `Universe` in Deinem KSP-Ordner wird dabei ohne Rückfrage gelöscht und neu erzeugt.

5. **Ergebnis prüfen**\
   Im KSP-Ordner liegt jetzt der neue Ordner `Universe` mit den Unterordnern `Vessels`, `Kerbals` und `Scenarios`. Genau diesen Ordner lädst Du im nächsten Schritt hoch.

## Savegame hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Solange der Server läuft, schreibt er ständig in den Ordner `Universe`.

2. **Bisherigen Stand sichern**\
   Erstelle ein [Backup](/tutorials/gameserver/kerbal-space-program/create-backup) oder lade den vorhandenen Ordner herunter: [Savegame herunterladen](/tutorials/gameserver/kerbal-space-program/download-savegame).

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Alten Spielstand entfernen**\
   Lösche im Hauptverzeichnis Deines Servers den vorhandenen Ordner:

   ```text
   /Universe/
   ```

5. **Neuen Spielstand hochladen**\
   Lade Deinen `Universe`-Ordner mit allen Unterordnern in das Hauptverzeichnis hoch. Der Ordner muss exakt `Universe` heißen.

6. **Server starten**\
   Starte Deinen Server. Fehlende Unterordner legt er beim Start selbst an.

> [!IMPORTANT]
> Der Fortschritt liegt bei DarkMultiPlayer **pro Spieler** unter `Universe/Scenarios/<Spielername>/`. Nach der Umwandlung existiert nur der Ordner Deines eigenen Spielernamens. Alle anderen Spieler starten auf dem Server mit frischem Fortschritt – einen gemeinsamen Karriere- oder Wissenschaftsstand für alle gibt es bei DMP nicht.

> [!WARNING]
> Verwende auf dem Server denselben Spielernamen wie beim Umwandeln. Weicht der Name ab, findet der Server unter `Universe/Scenarios/` keinen passenden Ordner und Dein umgewandelter Fortschritt wird Dir nicht zugeordnet.

> [!TIP]
> Passen Spielmodus und Schwierigkeit nicht zu Deinem hochgeladenen Spielstand, stellst Du beides in der **Verwaltung** unter **Einstellungen** ein (**Game Mode** und **Game Difficulty**). Beide Werte werden bei jedem Serverstart aus der Verwaltung in die Konfiguration geschrieben – eine Änderung direkt in der Datei bleibt wirkungslos.

> [!NOTE]
> Schiffe aus dem umgewandelten Spielstand liegen als einzelne Dateien in `Universe/Vessels/`. Ein einzelnes Schiff lässt sich dadurch gezielt entfernen, ohne den ganzen Spielstand anzufassen – stoppe den Server auch dafür.
