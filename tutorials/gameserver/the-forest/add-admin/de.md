---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem The Forest Server hinzu"
description: "Admin auf einem The Forest Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["the-forest"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/the-forest/add-savegame", "gameserver/the-forest/create-backup", "gameserver/the-forest/download-savegame", "gameserver/the-forest/join-server"]
---

The Forest kennt **keine Admin-Liste mit SteamIDs**. Stattdessen gibt es ein einziges **Admin-Passwort** für den Server: Wer es beim Beitreten einträgt, ist Admin. Du musst also keine IDs sammeln – Du gibst das Passwort einfach an die Personen weiter, die Adminrechte bekommen sollen.

> [!WARNING]
> Jeder, der das Admin-Passwort kennt, hat volle Adminrechte auf Deinem Server – inklusive Befehlen wie `/ban` und `/shutdown`. Gib es nur an Personen weiter, denen Du vertraust, und verwende ein anderes Passwort als das Server-Passwort.

## Admin-Passwort setzen

1. **Verwaltung öffnen**\
   Öffne die **Verwaltung** Deines Servers und wechsle zu den **Einstellungen**.

2. **Admin-Passwort eintragen**\
   Trage im Feld **Admin Password** Dein gewünschtes Passwort ein.

3. **Server neu starten**\
   Speichere die Änderung und starte Deinen Server neu, damit das neue Passwort übernommen wird.

> [!IMPORTANT]
> Ab Werk ist ein Standard-Passwort hinterlegt. Ändere es unbedingt, bevor Dein Server öffentlich erreichbar ist – sonst kann sich jeder, der das Standard-Passwort kennt, Adminrechte verschaffen.

> [!NOTE]
> **Warum nicht in der Konfigurationsdatei?**
>
> Der Konfigurationswert dafür heißt `serverPasswordAdmin`. Dein Server übergibt das Admin-Passwort aber beim Start als Parameter, und Startparameter überschreiben passende Einträge aus der Konfigurationsdatei. Ein Eintrag in der `config.cfg` hätte deshalb keine Wirkung – setze das Passwort ausschließlich in der Verwaltung.

## Als Admin beitreten

1. **Server auswählen**\
   Starte The Forest, öffne **Multiplayer → Join Game**, stelle die Quelle auf **Dedicated (Internet)** und wähle Deinen Server aus. Wie Du Deinen Server findest, steht unter [Server beitreten](/tutorials/gameserver/the-forest/join-server).

2. **Admin-Passwort eingeben**\
   Es öffnet sich die Passwortabfrage. Trage Dein Passwort in das Feld **Admin Password** ein – nicht in das Feld für das normale Server-Passwort.

   > [!NOTE]
   > Ist zusätzlich ein Server-Passwort gesetzt, füllst Du beide Felder aus: oben das Server-Passwort, darunter das Admin-Passwort.

3. **Beitreten**\
   Klicke auf **Join** beziehungsweise **Continue**.

## Adminrechte prüfen

1. **Chat öffnen**\
   Drücke im Spiel `Enter`, um den Chat zu öffnen.

2. **Befehlsliste aufrufen**\
   Gib folgenden Befehl ein:

   ```text
   /help
   ```

3. **Ergebnis**\
   Erscheint die Liste der verfügbaren Befehle, hast Du Adminrechte. Passiert nichts, wurde das Admin-Passwort beim Beitreten nicht oder falsch eingetragen – verlasse den Server und tritt erneut bei.

> [!TIP]
> Welche Befehle Dir als Admin zur Verfügung stehen und wie Du Spieler entfernst, erfährst Du unter [Spieler kicken & bannen](/tutorials/gameserver/the-forest/kick-ban-players).

> [!NOTE]
> Adminrechte gelten immer nur für die aktuelle Sitzung. Nach einem Verbindungsabbruch oder einem Serverneustart musst Du das Admin-Passwort beim nächsten Beitritt erneut eintragen.
