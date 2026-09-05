---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Colony Survival Server hinzu"
description: "Admin auf einem Colony Survival Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["colony-survival"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/colony-survival/add-mods", "gameserver/colony-survival/add-savegame", "gameserver/colony-survival/create-backup", "gameserver/colony-survival/download-savegame"]
---

Colony Survival verwaltet Rechte über **Gruppen**. Jeder Spieler startet in der Gruppe `peasant`; Adminrechte bekommt er, indem Du ihn einer höheren Gruppe zuweist. Auf einem frischen Server gibt es aber noch niemanden, der diese Zuweisung im Spiel vornehmen dürfte – deshalb legst Du den ersten Admin über eine Datei fest.

> [!TIP]
> Für den Eintrag in die Datei benötigst Du die SteamID64 des Spielers. Hier findest Du eine Anleitung, wie Du Deine [SteamID64](/tutorials/gameserver/steamid64-find-out) herausfindest.

## Die Rechtegruppen

| Gruppe | Rechte |
|--------|--------|
| `peasant` | Standardgruppe für alle Spieler – normales Spielen ohne Adminbefehle |
| `king` | Cheats, Teleport, Zeit- und Loot-Befehle sowie `/save`, `/backup` und das Stoppen des Servers |
| `god` | Enthält alle Rechte von `king` und darf zusätzlich Rechte vergeben sowie Whitelist und Blacklist verwalten |

> [!NOTE]
> Für die volle Adminrolle – inklusive Bannen und Vergeben von Rechten an andere Spieler – brauchst Du die Gruppe `god`.

## Ersten Admin eintragen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Datei öffnen oder anlegen**\
   Wechsle in den Ordner Deiner Welt und öffne dort die Datei `permissionusers.json`. `<Weltname>` ist der Ordnername Deiner Welt – er entspricht dem Feld **World Name** in der Verwaltung:

   ```text
   /gamedata/savegames/<Weltname>/permissionusers.json
   ```

   > [!NOTE]
   > Die Datei existiert anfangs nicht. Lege sie in diesem Fall neu an.

4. **SteamID64 eintragen**\
   Trage Deine SteamID64 mit der Gruppe `god` ein. Wichtig: Vor der SteamID64 steht ein `1.` – das ist die Kennung für einen Steam-Spieler und gehört zwingend dazu:

   ```json
   {
     "1.76561198012345678": {
       "includes": ["god"]
     }
   }
   ```

   Mehrere Admins trennst Du durch ein Komma:

   ```json
   {
     "1.76561198012345678": {
       "includes": ["god"]
     },
     "1.76561198087654321": {
       "includes": ["king"]
     }
   }
   ```

   > [!WARNING]
   > Ohne das vorangestellte `1.` erkennt der Server den Eintrag nicht und Du bleibst ohne Rechte. Enthält die Datei bereits Einträge wie `"2.0"` oder `"3.0"`, lass sie unverändert stehen und ergänze Deinen Eintrag daneben.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

6. **Rechte prüfen**\
   Tritt Deinem Server bei, drücke `T` für den Chat und gib einen Adminbefehl ein, zum Beispiel:

   ```text
   /reloadpermission
   ```

   Läuft der Befehl durch, hast Du Adminrechte. Fehlen Dir die Rechte, meldet der Server, dass Dir die passende Berechtigung fehlt.

> [!WARNING]
> Achte auf gültiges JSON: doppelte Anführungszeichen, Kommas zwischen den Einträgen und kein Komma hinter dem letzten Eintrag. Ist die Datei fehlerhaft, werden die Rechte nicht übernommen. Prüfe die Datei nach dem Bearbeiten im Zweifel mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/).

## Weitere Admins im Spiel hinzufügen

Sobald Du selbst in der Gruppe `god` bist, vergibst Du alle weiteren Rechte bequem im Chat.

1. **Chat öffnen**\
   Drücke im Spiel `T`, um den Chat zu öffnen.

2. **Gruppe zuweisen**\
   Weise dem Spieler die gewünschte Gruppe zu – wahlweise über seinen Spielernamen oder seine SteamID64:

   ```text
   /setgroup god Sam
   ```

   ```text
   /setgroup king 76561198012345678
   ```

   > [!NOTE]
   > Enthält der Spielername Leerzeichen, setzt Du ihn in Anführungszeichen: `/setgroup god "The Dragon Whisperer"`

3. **Rechte entziehen**\
   Zum Zurücknehmen entfernst Du die Gruppe wieder:

   ```text
   /removegroup god Sam
   ```

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `/setgroup <Gruppe> <Spieler>` | Setzt die Gruppe eines Spielers |
| `/addgroup <Gruppe> <Spieler>` | Fügt einem Spieler eine zusätzliche Gruppe hinzu |
| `/removegroup <Gruppe> <Spieler>` | Entfernt eine Gruppe wieder |
| `/addpermission <Recht> <Spieler>` | Vergibt ein einzelnes Recht |
| `/removepermission <Recht> <Spieler>` | Entzieht ein einzelnes Recht |
| `/reloadpermission` | Lädt die Rechtedateien neu ein |
| `/save` | Speichert die Welt |
| `/backup` | Erstellt ein Backup der Welt |
| `/tps` | Zeigt die Serverleistung an |
| `/time day` · `/time night` · `/time add <Stunden>` | Steuert die Tageszeit |
| `/worldseed` | Zeigt den Seed der Welt an |
| `/colony addowner <Spieler>` · `/colony removeowner <Spieler>` | Verwaltet die Mitbesitzer einer Kolonie |

> [!NOTE]
> Adminbefehle gibst Du immer im Chat im Spiel ein. Der Chat öffnet sich mit `T` und schließt sich mit `Esc`.

## Eigene Rechtegruppen anlegen

> [!TIP]
> Die Standardgruppen liegen in `/gamedata/settings/permissiongroups.json`. Diese Datei wird bei Updates überschrieben. Möchtest Du eigene Gruppen definieren, kopiere sie in den Ordner Deiner Welt:
>
> ```text
> /gamedata/savegames/<Weltname>/permissiongroups.json
> ```
>
> Dort bleiben Deine Anpassungen auch nach einem Update erhalten.

> [!CAUTION]
> **Cheat-Befehle schalten Erfolge dauerhaft ab**
>
> Einige Befehle stehen erst zur Verfügung, wenn Du mit `/disableachievements` die Cheats aktivierst. Dieser Schritt lässt sich für die betroffene Welt **nicht rückgängig machen** – Steam-Erfolge sind darin danach dauerhaft deaktiviert.

> [!TIP]
> Wie Du Spieler vom Server aussperrst, erfährst Du unter [Spieler kicken & bannen](/tutorials/gameserver/colony-survival/kick-ban-players).
