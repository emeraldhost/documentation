---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem ARK Survival Evolved Server hinzu"
description: "Mods auf einem ARK Survival Evolved Server hinzufügen"
tags: []
date: "2026-03-10"
visibility: "public"
cta: "gameserver"
product_keys: ["ark-survival-evolved"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 3
related: ["gameserver/ark-survival-evolved/add-admin", "gameserver/ark-survival-evolved/add-savegame", "gameserver/ark-survival-evolved/create-backup", "gameserver/ark-survival-evolved/download-savegame"]
---

Du kannst Steam Workshop Mods auf Deinem Server hinzufügen, um das Spielerlebnis zu erweitern.

> [!WARNING]
> Nach einem Spielupdate können Mods inkompatibel sein und Abstürze verursachen.

## Mod-ID herausfinden

1. **Steam Workshop öffnen**\
   Öffne den [Steam Workshop für ARK](https://steamcommunity.com/app/346110/workshop/) und suche den gewünschten Mod.

2. **Mod-ID kopieren**\
   Die Mod-ID findest Du in der URL der Workshop-Seite. Kopiere die Zahl nach `?id=`.

   > [!TIP]
   > **Beispiel**
   >
   > In der URL `https://steamcommunity.com/sharedfiles/filedetails/?id=1785800853` ist die Mod-ID `1785800853`.

## Mods zum Server hinzufügen

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Mod-IDs eintragen**\
   Trage im Feld **Mods** die Mod-IDs durch Komma getrennt ein.

   > [!TIP]
   > **Beispiel**
   >
   > ```text
   > 1785800853,731604991,889745138
   > ```

4. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu. Die Mods werden beim Start automatisch heruntergeladen und installiert.

> [!NOTE]
> Die Reihenfolge der Mod-IDs bestimmt die Ladereihenfolge. Der erste Mod wird als Hauptmod geladen.

> [!IMPORTANT]
> Alle Spieler müssen die **gleichen Mods** über den Steam Workshop abonniert haben, um dem Server beitreten zu können.
