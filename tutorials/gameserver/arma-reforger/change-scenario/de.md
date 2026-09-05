---
slug: "szenario-aendern"
language: "de"
title: "So änderst Du das Szenario auf Deinem Arma Reforger Server"
description: "Szenario auf einem Arma Reforger Server ändern und Workshop-Szenarien hinzufügen"
tags: []
date: "2025-06-22"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["arma-reforger"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Szenario ändern"
sort: 9
related: ["gameserver/arma-reforger/download-savegame", "gameserver/arma-reforger/kick-ban-players", "gameserver/arma-reforger/create-backup", "gameserver/arma-reforger/join-server"]
---

Du kannst sowohl offizielle als auch benutzerdefinierte Workshop-Szenarien auf Deinem Server verwenden.

## Szenario ändern

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Szenario ID eintragen**\
   Trage die gewünschte Szenario ID in das Feld **Szenario ID** ein.

   > [!TIP]
   > **Beispiel**
   >
   > ```text
   > {ECC61978EDCC2B5A}Missions/23_Campaign.conf
   > ```

4. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu.

### Verfügbare Szenarien

| Szenario | Szenario ID |
|----------|-------------|
| Tutorial | `{90F086877C27B6F6}Missions/99_Tutorial.conf` |
| Conflict | `{ECC61978EDCC2B5A}Missions/23_Campaign.conf` |
| Game Master - Everon | `{59AD59368755F41A}Missions/21_GM_Eden.conf` |
| Game Master - Arland | `{2BBBE828037C6F4B}Missions/22_GM_Arland.conf` |
| Conflict: St. Philippe & Morton | `{C700DB41F0C546E1}Missions/23_Campaign_NorthCentral.conf` |
| Conflict: Morton & St. Pierre | `{28802845ADA64D52}Missions/23_Campaign_SWCoast.conf` |
| Combat Ops: Arland | `{DAA03C6E6099D50F}Missions/24_CombatOps.conf` |
| Conflict: Arland | `{C41618FD18E9D714}Missions/23_Campaign_Arland.conf` |
| Combat Ops - Everon | `{DFAC5FABD11F2390}Missions/26_CombatOpsEveron.conf` |

## Workshop-Szenario hinzufügen

Du kannst auch benutzerdefinierte Szenarien aus dem [Arma Reforger Workshop](https://reforger.armaplatform.com/workshop) verwenden.

### Mod-Informationen finden

1. **Workshop öffnen**\
   Öffne den [Arma Reforger Workshop](https://reforger.armaplatform.com/workshop) und suche das gewünschte Szenario.

2. **Informationen notieren**\
   Notiere Dir die folgenden Informationen von der Workshop-Seite:
   - **Mod-ID** – die ID des Mods
   - **Name** – der Name des Mods
   - **Version** – die aktuelle Versionsnummer
   - **Szenario ID** – zu finden im Tab **Scenarios**

### config.json anpassen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **config.json öffnen**\
   Öffne die Datei `config.json` im Datei-Browser.

3. **Mod hinzufügen**\
   Suche den `"mods"`-Bereich und füge den Mod hinzu:

   ```json
   "mods": [
     {
       "modId": "596338F447D34E39",
       "name": "NightOps - Everon 1985",
       "version": "1.0.26"
     }
   ]
   ```

   Für mehrere Mods trennst Du die Einträge mit einem Komma:

   ```json
   "mods": [
     {
       "modId": "596338F447D34E39",
       "name": "NightOps - Everon 1985",
       "version": "1.0.26"
     },
     {
       "modId": "59655E11FDD04B97",
       "name": "Raid on Saint Pierre",
       "version": "1.0.49"
     }
   ]
   ```

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server nicht startet.

4. **Szenario ID setzen**\
   Trage die Szenario ID des Workshop-Szenarios in der Verwaltung unter **Einstellungen** im Feld **Szenario ID** ein.

   > [!TIP]
   > **Beispiel**
   >
   > ```text
   > {1C7C31ACBB314DCF}Missions/MissionHeader_1.conf
   > ```

5. **Server starten**\
   Speichere alle Änderungen und starte Deinen Server.

> [!NOTE]
> Wenn ein Workshop-Szenario aktualisiert wird, musst Du die Versionsnummer in der `config.json` ebenfalls anpassen.

> [!TIP]
> Du kannst die Mod-Informationen auch lokal finden, nachdem Du den Mod im Spiel abonniert hast. Öffne dazu die Datei `ServerData.json` im Ordner `Dokumente/My Games/ArmaReforger/addons/`.
