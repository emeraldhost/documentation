---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Don’t Starve Together Server bei"
description: "Einem Don’t Starve Together Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["dont-starve-together"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 6
related: ["gameserver/dont-starve-together/add-savegame", "gameserver/dont-starve-together/create-backup", "gameserver/dont-starve-together/download-savegame", "gameserver/dont-starve-together/kick-ban-players"]
---

Du kannst Deinem Server auf zwei Wegen beitreten: über die Serversuche im Spiel oder über eine Direktverbindung in der Konsole.

## Verbindungsdaten finden

> [!WARNING]
> **Wichtig**
>
> Für die Direktverbindung benötigst Du die **IP-Adresse** und den **Game Port** Deines Servers. Beide findest Du in der Verwaltung Deines Servers. Die Ports `master_server_port` und `authentication_port` aus dem Abschnitt `[STEAM]` der Datei `server.ini` sind interne Steam-Ports und werden **nicht** für die Verbindung verwendet.

## Über die Serversuche im Spiel

1. **Don’t Starve Together starten**\
   Starte das Spiel und warte, bis Du im Hauptmenü bist.

2. **Serversuche öffnen**\
   Klicke im Hauptmenü auf **Browse Games**.

3. **Nach dem Server suchen**\
   Gib im Suchfeld den exakten Namen Deines Servers ein. Das ist der Wert, der in der Datei `cluster.ini` unter `cluster_name` steht.

4. **Server beitreten**\
   Wähle Deinen Server aus der Liste aus und tritt bei. Ist ein Server Passwort gesetzt, wirst Du anschließend zur Eingabe aufgefordert.

> [!NOTE]
> Nach einem Start kann es bis zu 10 Minuten dauern, bis Dein Server in der Serversuche auftaucht. Voraussetzung für die Listung ist außerdem ein gültiges Cluster Token in der Datei `cluster_token.txt`. Dein Token erstellst Du in Deinem [Klei-Account](https://accounts.klei.com/account/game/servers?game=DontStarveTogether).

## Über die Konsole direkt verbinden

1. **Don’t Starve Together starten**\
   Starte das Spiel und bleibe im Hauptmenü.

2. **Konsole öffnen**\
   Drücke `~`, um die Konsole zu öffnen.

3. **Verbindungsbefehl eingeben**\
   Gib den Befehl mit der IP-Adresse und dem Game Port Deines Servers ein und bestätige mit Enter:

   ```text
   c_connect("123.45.67.89", 10999)
   ```

4. **Mit Passwort verbinden**\
   Ist auf Deinem Server ein Passwort gesetzt, hängst Du es als dritten Wert an:

   ```text
   c_connect("123.45.67.89", 10999, "meinPasswort")
   ```

> [!TIP]
> Die IP-Adresse und das Passwort gehören immer in Anführungszeichen, der Port nicht. Lässt Du den Port weg, verbindet sich das Spiel auf den Standardport `10999`. Trage deshalb immer den Port ein, der in Deiner Verwaltung angezeigt wird – viele Server nutzen einen abweichenden Port.
