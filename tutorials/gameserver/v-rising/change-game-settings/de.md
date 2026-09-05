---
slug: "spieleinstellungen-aendern"
language: "de"
title: "So änderst Du die Spieleinstellungen auf Deinem V Rising Server"
description: "Voreingestellte Spieleinstellungen auf einem V Rising Server ändern"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["v-rising"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieleinstellungen ändern"
sort: 14
related: ["gameserver/v-rising/install-bepinex", "gameserver/v-rising/add-savegame", "gameserver/v-rising/change-save-interval", "gameserver/v-rising/change-server-description"]
---

Du kannst die voreingestellten Spieleinstellungen über die Verwaltung anpassen. Diese bestimmen den Spielmodus und die Schwierigkeit Deines Servers.

> [!NOTE]
> Einige Einstellungen gelten möglicherweise nicht mehr, nachdem die Speicherdatei zum ersten Mal erstellt wurde. Lasse das Feld leer, wenn Du einen hochgeladenen Einzelspieler-Speicher oder eine benutzerdefinierte `ServerGameSettings.json` im Verzeichnis `~/save-data/Settings/` verwendest.

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Spieleinstellungen auswählen**\
   Trage im Feld **Voreingestellte Spieleinstellungen** den gewünschten Wert ein:

   | Wert | Beschreibung |
   |------|-------------|
   | `StandardPvE` | Standard PvE |
   | `StandardPvE_Easy` | Standard PvE (Leicht) |
   | `StandardPvE_Hard` | Standard PvE (Schwer) |
   | `StandardPVP` | Standard PvP |
   | `StandardPvP_Easy` | Standard PvP (Leicht) |
   | `StandardPvP_Hard` | Standard PvP (Schwer) |
   | `Level30PvE` | PvE bis Level 30 |
   | `Level30PvP` | PvP bis Level 30 |
   | `Level50PvE` | PvE bis Level 50 |
   | `Level50PvP` | PvP bis Level 50 |
   | `Level70PvE` | PvE bis Level 70 |
   | `Level70PvP` | PvP bis Level 70 |
   | `SoloPvP` | Solo PvP |
   | `DuoPvP` | Duo PvP |
   | `HardcorePvP` | Hardcore PvP |
   | `Custom` | Benutzerdefiniert |

4. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu.

> [!TIP]
> Wähle `Custom`, wenn Du Deine eigenen Einstellungen über die `ServerGameSettings.json` im Verzeichnis `~/save-data/Settings/` verwenden möchtest.
