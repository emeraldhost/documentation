---
slug: "gsl-token-setzen"
language: "de"
title: "So setzt Du den GSL Token auf Deinem Garry's Mod Server"
description: "GSL Token (Steam Game Server Login Token) auf einem Garry's Mod Server setzen"
tags: []
date: "2026-10-01"
visibility: "public"
cta: "gameserver"
product_keys: ["garrys-mod"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "GSL Token setzen"
sort: 11
related: ["gameserver/garrys-mod/join-server", "gameserver/garrys-mod/configure-server", "gameserver/garrys-mod/change-map", "gameserver/garrys-mod/change-gamemode"]
---
Der GSL Token (Steam Game Server Login Token, kurz GSLT) verknüpft Deinen Server mit einem Steam-Konto. Seit dem Update im Mai 2020 sollte jeder Garry's Mod Server einen solchen Token haben – Server ohne Token werden in der Serverliste stark abgewertet und dadurch kaum noch gefunden. Die direkte Verbindung über IP und Port ([Server beitreten](/tutorials/gameserver/garrys-mod/join-server)) funktioniert auch ohne Token.

## Voraussetzungen für Dein Steam-Konto

Damit Du einen Token erstellen kannst, muss Dein Steam-Konto folgende Bedingungen erfüllen:

- Das Konto ist weder in der Community gebannt noch gesperrt.
- Das Konto ist kein eingeschränktes Konto („limited account“).
- Im Konto ist eine gültige Telefonnummer hinterlegt.
- Du besitzt Garry's Mod auf diesem Konto.

## Token erstellen

1. **Steam-Game-Server-Seite öffnen**\
   Öffne [https://steamcommunity.com/dev/managegameservers](https://steamcommunity.com/dev/managegameservers) und melde Dich mit Deinem Steam-Konto an.

2. **App-ID eintragen**\
   Trage im Feld für die App-ID des Basisspiels **4000** (Garry's Mod) ein.

   > [!WARNING]
   > Verwende immer die App-ID `4000`. Die App-ID `4020` gehört zum Dedicated-Server-Tool und ist hier falsch.

3. **Token erstellen und kopieren**\
   Erstelle den Token und kopiere ihn. Er erscheint anschließend in der Liste Deiner Game Server Accounts.

   > [!TIP]
   > **Beispiel**
   >
   > So ähnlich sieht ein Token aus (Beispielwert, nicht verwendbar):
   >
   > ```text
   > BEISPIELTOKEN0000000000000000000
   > ```

> [!IMPORTANT]
> Jeder Server benötigt einen **eigenen** Token. Erscheint in der Konsole die Meldung `Connection to Steam servers lost. (Steam error code 6)` und werden Spieler getrennt, liegt das meist daran, dass derselbe Token auf mehreren Servern genutzt wird.

## Token in der Verwaltung hinterlegen

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Token eintragen**\
   Füge den Token im Feld **Steam Account Token** ein. Das Feld erwartet genau 32 Zeichen aus Buchstaben und Ziffern. Der Server startet damit mit dem Parameter:

   ```text
   +sv_setsteamaccount BEISPIELTOKEN0000000000000000000
   ```

4. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu, damit der Token übernommen wird.

## Token überprüfen

1. **Konsole öffnen**\
   Öffne in der Verwaltung Deines Servers die Konsole und beobachte den Start.

2. **Start kontrollieren**\
   Ein ungültiger oder abgelaufener Token verhindert, dass der Server startet. Startet Dein Server nicht, prüfe den Token im Feld **Steam Account Token** auf Tippfehler und Leerzeichen und vergleiche ihn mit dem Token in der Liste unter [Steam Game Server Accounts](https://steamcommunity.com/dev/managegameservers).

## Token erneuern

Ist Dein Token in falsche Hände geraten oder funktioniert er nicht mehr, erstellst Du einfach einen neuen.

1. **Token neu generieren**\
   Öffne erneut [https://steamcommunity.com/dev/managegameservers](https://steamcommunity.com/dev/managegameservers) und wähle beim betroffenen Token **Regenerate token**. Der alte Token wird damit ungültig.

2. **Neuen Token eintragen**\
   Trage den neuen Token wie oben beschrieben im Feld **Steam Account Token** ein, speichere die Einstellung und starte Deinen Server neu.

> [!NOTE]
> Änderst Du das Passwort Deines Steam-Kontos oder wird es zurückgesetzt, werden alle Deine bisherigen Tokens ungültig. Tokens, mit denen sich lange Zeit kein Server anmeldet, laufen außerdem ab. Generiere in beiden Fällen einen neuen Token und trage ihn erneut in der Verwaltung ein.

> [!WARNING]
> Gib Deinen Token niemals an Dritte weiter. Hast Du ihn doch weitergegeben, lösche ihn unter [Steam Game Server Accounts](https://steamcommunity.com/dev/managegameservers). Wird ein Game Server Account gesperrt, kann Dein Steam-Konto beim Spielen von Garry's Mod eingeschränkt werden.
