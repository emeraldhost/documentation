---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Project Zomboid Server hinzu"
description: "Admin auf einem Project Zomboid Server hinzufügen"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["project-zomboid"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/project-zomboid/add-mods", "gameserver/project-zomboid/add-savegame", "gameserver/project-zomboid/change-max-players", "gameserver/project-zomboid/change-server-description"]
---

## Admin-Benutzer und Passwort festlegen

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Admin-Daten eintragen**\
   Trage den gewünschten **Admin-Benutzernamen** und das **Admin-Passwort** in den entsprechenden Feldern ein.

4. **Server neu starten**\
   Speichere die Einstellungen und starte Deinen Server neu.

## Als Admin anmelden

1. **Server beitreten**\
   Tritt Deinem Server bei.

2. **Einloggen**\
   Logge Dich mit dem Admin-Benutzernamen und dem Admin-Passwort ein.

## Zugriffsebenen

Du kannst über den Befehl `/setaccesslevel` im Chat anderen Spielern Rechte vergeben:

```text
/setaccesslevel Spielername admin
```

| Zugriffsebene | Beschreibung |
|---------------|-------------|
| `admin` | Vollzugriff auf alle Befehle und Einstellungen |
| `moderator` | Kann Spieler kicken, bannen und verwalten |
| `overseer` | Kann Spieler überwachen und eingeschränkt verwalten |
| `gm` | Game Master mit eingeschränkten Verwaltungsrechten |
| `observer` | Kann den Server beobachten, aber keine Änderungen vornehmen |
