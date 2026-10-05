---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem The Bus Server bei"
description: "Einem The Bus Server beitreten"
tags: []
date: "2026-02-24"
visibility: "public"
updated: "2026-10-05"
cta: "gameserver"
product_keys: ["the-bus"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 13
related: ["gameserver/the-bus/add-mods", "gameserver/the-bus/add-savegame", "gameserver/the-bus/kick-ban-players", "gameserver/the-bus/send-chat-messages"]
---

Am einfachsten verbindest Du Dich über die **Server-GUID**. Diese ID zeigt Dein Server nach jedem Start in der Konsole an. Alternativ findest Du Deinen Server über die öffentliche Serverliste im Spiel.

> [!WARNING]
> Der Multiplayer von The Bus ist nur auf dem PC verfügbar. Spieler auf PlayStation 5 oder Xbox Series X|S können Deinem Server nicht beitreten.

## Über die Server-GUID beitreten

1. **Server-GUID kopieren**\
   Öffne die Verwaltung Deines Servers und wechsle zur **Konsole**. Nach dem Start erscheint dort eine Zeile wie diese:

   ```text
   Server can be reached with the GUID: "ABCDEF1234567890"
   ```

   Kopiere die ID zwischen den Anführungszeichen.

   > [!NOTE]
   > Die ID oben ist nur ein Beispiel. Verwende immer die GUID, die in der Konsole Deines Servers angezeigt wird.

2. **The Bus starten**\
   Starte The Bus und öffne das **Multiplayer**-Menü.

3. **Server hinzufügen**\
   Öffne das Fenster zum Hinzufügen eines Servers und füge dort die kopierte GUID ein.

4. **Verbinden**\
   Verbinde Dich mit dem Server. Ist ein Server-Passwort gesetzt, gibst Du es beim Beitreten ein.

> [!TIP]
> Funktioniert die GUID nicht, starte Deinen Server einmal neu und kopiere die GUID danach erneut aus der Konsole. In älteren Versionen wurde beim ersten Start eine falsche GUID angezeigt – dieser Fehler wurde mit Version 1.1 behoben. Halte Dein Spiel außerdem immer auf dem neuesten Stand. Weitere Lösungen findest Du unter [Server-Probleme beheben](/tutorials/gameserver/the-bus/troubleshoot-server).

## Über die Serverliste beitreten

Deinen Server kannst Du auch über seinen Namen in der öffentlichen Serverliste im **Multiplayer**-Menü finden. Damit er dort erscheint, muss er in der Serverliste angezeigt werden:

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Serverliste aktivieren**\
   Setze das Feld **Serverliste** auf `1`. Mit `0` wird Dein Server nicht in der öffentlichen Liste angezeigt.

4. **Speichern und neu starten**\
   Speichere die Einstellung und starte Deinen Server neu.

5. **Server in der Liste suchen**\
   Starte The Bus, öffne das **Multiplayer**-Menü und suche Deinen Server anhand seines Namens. Ist ein Server-Passwort gesetzt, gibst Du es beim Beitreten ein.

> [!NOTE]
> Den Namen Deines Servers legst Du in den **Einstellungen** im Feld **Server Name** fest. Mehr dazu findest Du unter [Server konfigurieren](/tutorials/gameserver/the-bus/configure-server).
