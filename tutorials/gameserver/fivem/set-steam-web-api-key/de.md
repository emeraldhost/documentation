---
slug: "steam-web-api-key-hinterlegen"
language: "de"
title: "So hinterlegst Du den Steam Web API Key auf Deinem FiveM Server"
description: "Steam Web API Key auf einem FiveM Server hinterlegen"
tags: []
date: "2026-08-07"
visibility: "public"
cta: "gameserver"
product_keys: ["fivem"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Steam Web API Key hinterlegen"
sort: 10
related: ["gameserver/fivem/kick-ban-players", "gameserver/fivem/set-license-key", "gameserver/fivem/set-port", "gameserver/fivem/set-up-database"]
---

Mit einem **Steam Web API Key** kann Dein FiveM Server den Steam-Identifier Deiner Spieler auslesen (z.B. `steam:110000100000000`). Viele Skripte greifen auf diesen Identifier zurück, etwa für Whitelists, Bans oder die Spielerverwaltung.

Der Key ist optional. Ohne ihn läuft Dein Server ganz normal, Deine Spieler erhalten dann lediglich keinen Steam-Identifier.

> [!NOTE]
> Im Feld **Steam Web API Key** steht standardmäßig `none`. Mit diesem Wert überspringt Dein Server die Steam-Authentifizierung vollständig. Trage nur dann einen Key ein, wenn eines Deiner Skripte den Steam-Identifier benötigt.

## Steam Web API Key erstellen

1. **Steam-Seite öffnen**\
   Öffne die Seite [steamcommunity.com/dev/apikey](https://steamcommunity.com/dev/apikey) und melde Dich mit Deinem Steam-Konto an.

2. **Domain angeben**\
   Steam fragt nach einem Domainnamen, der dem Key zugeordnet wird. Trage hier die Domain Deines Projekts ein.

   > [!NOTE]
   > Ein eingeschränktes Steam-Konto (limited account) kann keinen Steam Web API Key erstellen. Wie Du diese Einschränkung aufhebst, beschreibt der [Steam Support](https://help.steampowered.com/de/faqs/view/71D3-35C2-AD96-AA3A).

3. **Key kopieren**\
   Bestätige die Nutzungsbedingungen, registriere den Key und kopiere ihn.

## Steam Web API Key hinterlegen

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Key eintragen**\
   Trage den kopierten Key im Feld **Steam Web API Key** ein.

   > [!NOTE]
   > Das Feld darf nicht leer bleiben. Trage entweder einen gültigen Key oder `none` ein.

4. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu.

> [!NOTE]
> Der Wert aus diesem Feld wird bei jedem Serverstart als `set steam_webApiKey` in die `server.cfg` geschrieben. Änderst Du diese Zeile stattdessen per [SFTP](/tutorials/gameserver/establish-sftp-connection), geht Deine Änderung beim nächsten Start verloren.

> [!WARNING]
> Behandle den Key wie ein Passwort. Er gehört zu Deinem Steam-Konto, gib ihn also niemals weiter und veröffentliche ihn nicht in Screenshots oder Auszügen Deiner `server.cfg`.

> [!TIP]
> Änderst Du Dein Steam-Passwort oder Deine Steam Guard Einstellungen, kann der Key ungültig werden. In der Server-Konsole erscheint dann ein Hinweis, dass Dein Steam Web API Key ungültig sein könnte. Erstelle in diesem Fall einen neuen Key und hinterlege ihn erneut.
