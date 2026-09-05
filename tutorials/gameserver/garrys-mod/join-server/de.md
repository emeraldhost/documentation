---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Garry's Mod Server bei"
description: "Einem Garry's Mod Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["garrys-mod"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 4
related: ["gameserver/garrys-mod/add-admin", "gameserver/garrys-mod/add-mods", "gameserver/garrys-mod/create-backup", "gameserver/garrys-mod/kick-ban-players"]
---

## Verbindungsdaten finden

> [!NOTE]
> Die **IP-Adresse** und den **Port** Deines Servers findest Du in der **Verwaltung** Deines Servers. Garry's Mod nutzt für den Spielbetrieb und für Serverabfragen denselben Port – Du brauchst also keinen separaten Query Port. Standardmäßig ist das der Port `27015`.

## Über den Legacy Browser im Spiel

1. **Garry's Mod starten**\
   Starte Garry's Mod.

2. **Serversuche öffnen**\
   Wähle im Hauptmenü **Find Multiplayer Game** und anschließend **Legacy Browser**.

3. **Server hinzufügen**\
   Klicke auf **Add a Server** und trage die IP-Adresse und den Port Deines Servers ein.

   > [!TIP]
   > **Beispiel**
   >
   > ```text
   > 123.45.67.89:27015
   > ```

4. **Zu den Favoriten hinzufügen**\
   Bestätige mit **Add this address to favorites**.

5. **Server beitreten**\
   Wähle Deinen Server in der Favoritenliste aus und klicke auf **Connect**.

## Über den Steam-Server-Browser

1. **Steam öffnen**\
   Öffne den Steam-Client.

2. **Server-Browser öffnen**\
   Klicke oben links auf **Anzeige** und wähle **Spielserver**.

3. **Server hinzufügen**\
   Klicke auf den Tab **Favoriten** und dann unten rechts auf **+**.

4. **Serveradresse eintragen**\
   Gib die IP-Adresse und den Port Deines Servers ein und bestätige mit **OK**.

5. **Verbinden**\
   Wähle den Server aus und klicke auf **Verbinden**.

## Über die Spielkonsole

1. **Garry's Mod starten**\
   Starte Garry's Mod.

2. **Konsole öffnen**\
   Drücke `~`, um die Konsole zu öffnen.

3. **Verbinden**\
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

> [!WARNING]
> Trage immer den **Game Port** Deines Servers ein. Der Port `27005` ist der lokale Client-Port Deines Spiels und darf nicht als Serveradresse verwendet werden.

> [!NOTE]
> **Server erscheint nicht in der öffentlichen Serverliste?**
>
> Seit Mai 2020 werden Garry's Mod Server ohne einen Steam Game Server Login Token (GSLT) in der Serverliste stark abgewertet. Einen Token kannst Du unter [Steam Game Server Accounts](https://steamcommunity.com/dev/managegameservers) mit der App-ID `4000` erstellen. Trage ihn anschließend in der **Verwaltung** Deines Servers unter **Einstellungen** im Feld **Steam Account Token** ein und starte den Server neu. Der Server startet damit mit dem Parameter `+sv_setsteamaccount <Token>`. Jeder Server benötigt einen eigenen Token. Die direkte Verbindung über IP und Port funktioniert auch ohne Token.
