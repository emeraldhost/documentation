---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Counter-Strike Global Offensive Server bei"
description: "Einem Counter-Strike Global Offensive Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["counter-strike-global-offensive"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 4
related: ["gameserver/counter-strike-global-offensive/add-admin", "gameserver/counter-strike-global-offensive/add-mods", "gameserver/counter-strike-global-offensive/create-backup", "gameserver/counter-strike-global-offensive/kick-ban-players"]
---

Counter-Strike Global Offensive wurde in Steam durch Counter-Strike 2 ersetzt. Bevor Du Deinem Server beitreten kannst, musst Du Deinen Client deshalb auf die klassische CS:GO-Version zurückstellen. Danach kommst Du über die **Steam-Favoriten** oder per **Direktverbindung** in der Spielkonsole auf Deinen Server.

> [!IMPORTANT]
> Eine normale Counter-Strike 2 Installation kann einem Counter-Strike Global Offensive Server **nicht** beitreten. Ohne den Wechsel auf den Beta-Zweig `csgo_legacy` schlägt jeder Verbindungsversuch fehl.

## Client auf die CS:GO-Version umstellen

1. **Steam-Bibliothek öffnen**\
   Öffne den Steam-Client und wechsle in Deine **Bibliothek**.

2. **Eigenschaften öffnen**\
   Klicke mit der rechten Maustaste auf **Counter-Strike 2** und wähle **Eigenschaften**.

3. **Beta-Zweig auswählen**\
   Wechsle auf den Reiter **Betas** und wähle im Dropdown-Menü den Eintrag `csgo_legacy` aus.

   > [!NOTE]
   > Der Zweig heißt in Steam „Legacy Version of CS:GO“ und benötigt **keinen** Zugangscode. Lass das Feld für den Beta-Zugangscode einfach leer.

4. **Update abwarten**\
   Schließe das Fenster. Steam lädt anschließend die CS:GO-Dateien herunter. Warte, bis der Download abgeschlossen ist, und starte das Spiel danach ganz normal über die Bibliothek.

> [!TIP]
> Möchtest Du später wieder Counter-Strike 2 spielen, stellst Du das Dropdown-Menü im Reiter **Betas** einfach zurück auf **None**.

## Verbindungsdaten finden

> [!NOTE]
> Die **IP-Adresse** und den **Game Port** Deines Servers findest Du in der **Verwaltung** Deines Servers. Counter-Strike Global Offensive nutzt für den Spielbetrieb und für Serverabfragen denselben Port – es gibt **keinen separaten Query Port**.

> [!WARNING]
> Trage immer den **Game Port** aus der Verwaltung ein. Der Port `27005` ist der lokale Client-Port Deines Spiels und darf nicht als Serveradresse verwendet werden.

## Über die Steam-Favoriten

1. **Steam öffnen**\
   Öffne den Steam-Client.

2. **Server-Browser öffnen**\
   Klicke oben links auf **Anzeige** und wähle **Spielserver**.

3. **Server hinzufügen**\
   Klicke auf den Tab **Favoriten** und dann unten rechts auf **+**.

4. **Serveradresse eintragen**\
   Trage die IP-Adresse und den Game Port Deines Servers ein, getrennt durch einen Doppelpunkt:

   > [!TIP]
   > **Beispiel**
   >
   > ```text
   > 123.45.67.89:27015
   > ```
   >
   > Setze hier die IP-Adresse und den Game Port aus Deiner Verwaltung ein.

5. **Server im Spiel auswählen**\
   Starte Counter-Strike Global Offensive, wähle im Hauptmenü **Play CS:GO** und öffne den **Community Server Browser**. Auf dem Tab **Favorites** findest Du Deinen Server und kannst ihm beitreten.

## Entwicklerkonsole im Spiel aktivieren

Die Konsole ist in Counter-Strike Global Offensive standardmäßig deaktiviert. Du brauchst sie für die Direktverbindung.

1. **Counter-Strike Global Offensive starten**\
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. **Einstellungen öffnen**\
   Öffne die **Einstellungen** und wechsle zum Bereich **Spiel**.

3. **Konsole aktivieren**\
   Stelle die Option **Entwicklerkonsole** auf **Ja**.

> [!TIP]
> Alternativ kannst Du die Konsole dauerhaft über den Startparameter `-console` aktivieren. Diesen trägst Du in Steam über einen Rechtsklick auf das Spiel unter **Eigenschaften** bei den **Startoptionen** ein.

## Über die Spielkonsole verbinden

1. **Konsole öffnen**\
   Drücke im Spiel `~`, um die Konsole zu öffnen.

2. **Verbinden**\
   Gib folgenden Befehl ein:

   ```text
   connect IP:Port
   ```

   > [!TIP]
   > **Beispiel**
   >
   > ```text
   > connect 123.45.67.89:27015
   > ```
   >
   > Setze hier die IP-Adresse und den Game Port aus Deiner Verwaltung ein.

## Steam Account Token (GSLT)

> [!NOTE]
> In der **Verwaltung** Deines Servers findest Du das Pflichtfeld **Steam Account Token**. Dahinter steckt der Steam Game Server Login Token (GSLT), den der Server beim Start über `sv_setsteamaccount` an Steam übergibt. Der Token ist genau 32 Zeichen lang und besteht aus Buchstaben und Ziffern.
>
> Einen Token erstellst Du unter [Steam Game Server Accounts](https://steamcommunity.com/dev/managegameservers) mit der App-ID `730`. Trage ihn anschließend in der Verwaltung ein und starte Deinen Server neu.

> [!WARNING]
> Jeder gleichzeitig laufende Server benötigt einen **eigenen** Token. Denselben Token auf mehreren Servern zu verwenden, ist nicht zulässig.
