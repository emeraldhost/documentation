---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Terraria tModLoader Server hinzu"
description: "Admin auf einem Terraria tModLoader Server hinzufügen"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["terraria-tmodloader"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/terraria-tmodloader/add-mods", "gameserver/terraria-tmodloader/add-savegame", "gameserver/terraria-tmodloader/add-world", "gameserver/terraria-tmodloader/create-backup"]
---

Admins werden in Terraria tModLoader über einen Authentifizierungscode vergeben, der beim Serverstart in der Serverkonsole angezeigt wird.

## Admin über Auth-Code einrichten

1. **Server starten**\
   Starte Deinen Server über die Verwaltung.

2. **Auth-Code auslesen**\
   Öffne die Serverkonsole in der Verwaltung. Beim Start wird ein Authentifizierungscode angezeigt, z.B.:

   ```text
   To enable cheats, type in the command 'auth <code>'
   ```

   Notiere Dir diesen Code.

3. **Server beitreten**\
   Tritt Deinem Server als Spieler bei.

4. **Auth-Befehl eingeben**\
   Gib im Ingame-Chat folgenden Befehl ein:

   ```text
   /auth <code>
   ```

   Ersetze `<code>` durch den Auth-Code aus der Serverkonsole.

5. **Passwort festlegen (optional)**\
   Nach erfolgreicher Authentifizierung kannst Du ein dauerhaftes Passwort festlegen:

   ```text
   /password <neues_passwort>
   ```

   Mit diesem Passwort kannst Du Dich in Zukunft direkt als Admin einloggen, ohne den Auth-Code zu benötigen.

> [!NOTE]
> Der Auth-Code ändert sich bei jedem Serverneustart. Wenn Du ein dauerhaftes Passwort festgelegt hast, kannst Du Dich mit `/auth <passwort>` einloggen.

> [!TIP]
> Um weiteren Spielern Admin-Rechte zu geben, teile ihnen den aktuellen Auth-Code mit oder richte ein dauerhaftes Passwort ein, das sie verwenden können.

> [!WARNING]
> **Hinweis**
>
> Das Auth-Code-System ist eine Funktion von tModLoader. Vanilla-Terraria-Server verwenden stattdessen die Serverkonsole direkt fuer Admin-Befehle und haben kein Auth-System. Wenn Du Vanilla Terraria ohne tModLoader nutzt, benoetigst Du ein Mod wie Hero's Mod oder TShock, um ein Ingame-Admin-System zu erhalten.
