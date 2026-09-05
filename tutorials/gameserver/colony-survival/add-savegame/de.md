---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem Colony Survival Server hinzu"
description: "Savegame auf einem Colony Survival Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["colony-survival"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 5
related: ["gameserver/colony-survival/add-admin", "gameserver/colony-survival/add-mods", "gameserver/colony-survival/create-backup", "gameserver/colony-survival/download-savegame"]
---

Ein Spielstand in Colony Survival ist **ein kompletter Ordner**, keine einzelne Datei. Jede Welt liegt in einem eigenen Unterordner im Savegame-Verzeichnis Deines Servers, und der Name dieses Ordners entscheidet darüber, welche Welt geladen wird.

```text
/gamedata/savegames/<Weltname>/
```

> [!IMPORTANT]
> Der Ordnername muss exakt mit dem Wert übereinstimmen, den Du in der **Verwaltung** im Feld **World Name** einträgst – inklusive Groß- und Kleinschreibung. Findet der Server keinen passenden Ordner, erstellt er stattdessen eine neue, leere Welt.

## Dateien eines Spielstands

| Datei | Inhalt |
|-------|--------|
| `world.sqlite3` | Die eigentliche Welt als SQLite-Datenbank – Gelände, Bauten, Kolonien und Siedler |
| `world.sqlite3-wal` | Write-Ahead-Log der Datenbank (nicht immer vorhanden) |
| `world.sqlite3-shm` | Shared-Memory-Datei des Write-Ahead-Logs (nicht immer vorhanden) |
| `worldconfig.json` | Anzeigename der Welt, Welttyp und die Liste der aktivierten Mods |
| `permissionusers.json` | Optional: Rechte der Spieler auf dieser Welt |
| `permissiongroups.json` | Optional: eigene Rechtegruppen für diese Welt |

> [!NOTE]
> Stammt die Welt aus einer älteren Spielversion, kann sie statt `world.sqlite3` noch einen Ordner `regions/` und eine Datei `settings_readonly.json` enthalten. Lade in diesem Fall ebenfalls den kompletten Ordner hoch – der Server wandelt die Welt beim Laden um. Sehr alte Welten (aus der Zeit vor Version 0.9) lassen sich nicht mehr laden.

## Savegame hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Solange der Server läuft, schreibt er laufend in die Datenbank und sperrt das Savegame-Verzeichnis.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /gamedata/savegames/
   ```

   > [!NOTE]
   > Existiert der Ordner noch nicht, starte Deinen Server einmal, damit die Ordnerstruktur angelegt wird. Stoppe ihn anschließend wieder.

4. **Bisherigen Stand sichern**\
   Erstelle ein [Backup](/tutorials/gameserver/colony-survival/create-backup) oder lade den bisherigen Weltordner herunter, falls Du später zurückwechseln möchtest.

5. **Weltordner hochladen**\
   Lade den kompletten Ordner Deiner Welt mit allen enthaltenen Dateien in dieses Verzeichnis hoch. Vergib einen eindeutigen Ordnernamen ohne Leer- und Sonderzeichen, zum Beispiel `MeineWelt`.

   > [!WARNING]
   > Existiert bereits ein Ordner mit demselben Namen, lösche ihn vorher oder benenne Deinen hochgeladenen Ordner um. Vermische niemals die Dateien zweier Welten in einem Ordner.

6. **World Name eintragen**\
   Öffne die **Verwaltung**, wechsle zu den **Einstellungen** und trage im Feld **World Name** exakt den Ordnernamen aus Schritt 5 ein.

7. **Server starten**\
   Starte Deinen Server. Beim Start wird jetzt Deine hochgeladene Welt geladen.

> [!TIP]
> Prüfe nach dem Start die Konsole in der Verwaltung. Lädt der Server die gewünschte Welt, taucht ihr Name dort auf. Erstellt er stattdessen eine neue Welt, stimmt der Ordnername nicht mit dem Feld **World Name** überein.

## Welt von einem anderen Server übernehmen

Am zuverlässigsten funktioniert der Wechsel zwischen zwei Welten, die beide von einem Dedicated Server stammen – etwa beim Umzug auf einen anderen Server. Lade dort den kompletten Weltordner herunter und folge anschließend den Schritten oben.

> [!WARNING]
> **Mods nicht vergessen**
>
> In der Datei `worldconfig.json` steht, welche Mods für diese Welt aktiviert sind. Fehlen diese Mods auf dem neuen Server, kann die Welt fehlerhaft laden. Lade die passenden Mods deshalb mit hoch: [Mods hinzufügen](/tutorials/gameserver/colony-survival/add-mods).

## Lokalen Spielstand finden

Hast Du eine Koop-Welt auf Deinem PC gehostet und möchtest sie auf den Server übertragen, findest Du sie im Installationsordner des Spiels:

```text
...\Steam\steamapps\common\Colony Survival\gamedata\savegames\
```

Ist die Steam-Cloud-Synchronisation aktiv, liegen Deine Welten stattdessen hier:

```text
...\Steam\steamapps\common\Colony Survival\gamedata\savegames\_cloud\<SteamAccountID>\
```

> [!CAUTION]
> **Einzelspieler-Welten**
>
> Übertrage nur Welten, die Du bereits im Mehrspieler genutzt hast. Eine reine Einzelspieler-Welt ist im Spiel als solche markiert und lässt sich im Client erst umwandeln – ob ein Dedicated Server sie ohne diese Umwandlung lädt, ist nicht dokumentiert. Arbeite in jedem Fall ausschließlich mit Kopien.
