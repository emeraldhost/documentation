---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Palworld Server hinzu"
description: "Admin auf einem Palworld Server hinzufügen"
tags: []
date: "2026-02-28"
visibility: "public"
cta: "gameserver"
product_keys: ["palworld"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/palworld/broadcast-message", "gameserver/palworld/adjust-hunger-stamina", "gameserver/palworld/change-day-night-speed", "gameserver/palworld/change-drop-rate"]
---

Du kannst über ein Admin Passwort Dir und anderen Spielern Admin-Rechte vergeben.

## Admin Passwort festlegen

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Admin Passwort setzen**\
   Trage das gewünschte Admin Passwort ein und speichere die Einstellung.

4. **Server neu starten**\
   Starte Deinen Server neu, damit die Änderung übernommen wird.

> [!WARNING]
> Setze das Admin Passwort nicht direkt in der `PalWorldSettings.ini`, da es beim nächsten Serverstart von der Verwaltung überschrieben wird.

## Als Admin anmelden

1. **Server beitreten**\
   Tritt Deinem Server bei.

2. **Chat öffnen**\
   Drücke `Enter`, um den Chat zu öffnen.

3. **Admin-Login**\
   Gib folgenden Befehl ein:

   ```text
   /AdminPassword DeinAdminPasswort
   ```

> [!NOTE]
> Die Admin-Anmeldung gilt nur für die aktuelle Sitzung. Nach einem Neuverbinden musst Du den Befehl erneut eingeben.

> [!TIP]
> Teile das Admin Passwort nur mit vertrauenswürdigen Spielern. Jeder mit dem Passwort kann sich Admin-Rechte vergeben.
