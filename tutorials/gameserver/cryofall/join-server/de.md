---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem CryoFall Server bei"
description: "Einem CryoFall Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["cryofall"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 6
related: ["gameserver/cryofall/add-savegame", "gameserver/cryofall/create-backup", "gameserver/cryofall/download-savegame", "gameserver/cryofall/kick-ban-players"]
---

CryoFall nutzt zum Verbinden **nur einen einzigen Port** – den Game Port Deines Servers. Einen separaten Query Port gibt es nicht. Im Spiel führen zwei Wege auf Deinen Server: die öffentliche Serverliste (**Community servers list**) oder der Eintrag über die Adresse (**Custom servers list**).

## Verbindungsdaten finden

> [!IMPORTANT]
> Für die Verbindung benötigst Du die **IP-Adresse** und den **Game Port** Deines Servers. Beides findest Du in der **Verwaltung** Deines Servers.

> [!NOTE]
> Du musst den Port nirgends selbst eintragen. Dein Server übernimmt den Port aus der Verwaltung bei jedem Start automatisch in seine Konfiguration.

## Über die Custom servers list beitreten

Das ist der zuverlässigste Weg – er funktioniert auch dann, wenn Dein Server nicht öffentlich gelistet ist.

1. **CryoFall starten**\
   Starte CryoFall und warte, bis das Hauptmenü geladen ist.

2. **Serverliste öffnen**\
   Wähle im Hauptmenü **SERVERS**.

3. **Auf Custom servers list wechseln**\
   Öffne den Bereich **Custom servers list**. Hier trägst Du Server manuell ein.

4. **Serveradresse hinzufügen**\
   Trage die IP-Adresse und den Game Port Deines Servers ein, getrennt durch einen Doppelpunkt:

   ```text
   123.45.67.89:6000
   ```

   > [!TIP]
   > Die Werte im Beispiel sind Platzhalter. Setze die IP-Adresse und den Game Port ein, die Dir in Deiner Verwaltung angezeigt werden.

5. **Server beitreten**\
   Bestätige die Eingabe. Dein Server erscheint anschließend dauerhaft in dieser Liste und Du kannst ihn von dort aus betreten.

## Über die Community servers list beitreten

In der öffentlichen Serverliste taucht Dein Server nur auf, wenn er als öffentlicher Server eingetragen ist.

1. **Serverliste aktivieren**\
   Stelle in der **Verwaltung** Deines Servers die Einstellung **Serverliste** auf aktiviert und starte den Server neu.

2. **Server suchen**\
   Wähle im Hauptmenü **SERVERS** und anschließend **Community servers list**. Suche dort nach dem Namen Deines Servers.

3. **Server beitreten**\
   Wähle Deinen Server aus der Liste aus, um ihn zu betreten.

> [!WARNING]
> Bis ein neu gestarteter Server in der öffentlichen Liste erscheint, können einige Minuten vergehen. Nutze in dieser Zeit den Eintrag über die **Custom servers list**.

## Über die Server-GUID beitreten

Statt der IP-Adresse kannst Du Deinen Mitspielern auch die GUID Deines Servers geben. Sie wird beim ersten Start vom Master-Server vergeben und bleibt gleich, selbst wenn sich die IP-Adresse ändert.

1. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

2. **Konfiguration öffnen**\
   Öffne folgende Datei:

   ```text
   /Data/SettingsServer.xml
   ```

3. **GUID auslesen**\
   Suche den folgenden Eintrag und kopiere den Wert:

   ```xml
   <server_public_guid></server_public_guid>
   ```

4. **GUID weitergeben**\
   Deine Mitspieler tragen die GUID im Spiel unter **SERVERS → Custom servers list** ein – genau wie eine Adresse.

> [!IMPORTANT]
> Ändere den Wert von `server_public_guid` niemals selbst. Er wird vom Master-Server vergeben; Du darfst ihn nur weitergeben.

## Welche Ports nutzt CryoFall?

> [!NOTE]
> Ein CryoFall Server belegt genau **einen Port**:
>
> | Port | Protokoll | Verwendung |
> |------|-----------|------------|
> | Game Port | UDP | Spieldaten und Verbindungsaufbau – hierüber verbinden sich alle Spieler |
>
> Einen separaten Query Port gibt es bei CryoFall nicht. Welcher Game Port für Deinen Server gilt, siehst Du in der **Verwaltung**.

## Server für bestimmte Spieler reservieren

> [!WARNING]
> **Kein Serverpasswort**
>
> CryoFall kennt **kein Serverpasswort**. Möchtest Du Deinen Server nur für ausgewählte Spieler öffnen, nutzt Du stattdessen die Whitelist – siehe [Spieler kicken & bannen](/tutorials/gameserver/cryofall/kick-ban-players).
