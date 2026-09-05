---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Fistful of Frags Server bei"
description: "Einem Fistful of Frags Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["fistful-of-frags"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 4
related: ["gameserver/fistful-of-frags/add-admin", "gameserver/fistful-of-frags/add-mods", "gameserver/fistful-of-frags/create-backup", "gameserver/fistful-of-frags/kick-ban-players"]
---

Auf Deinen Fistful of Frags Server kommst Du auf zwei Wegen: über den **Serverbrowser** im Spiel oder über eine **Direktverbindung** mit der Entwicklerkonsole. Eine Lobby gibt es nicht – der Beitritt über IP und Port funktioniert immer.

## Verbindungsdaten finden

> [!NOTE]
> Die **IP-Adresse** und den **Game Port** Deines Servers findest Du in der **Verwaltung** Deines Servers. Fistful of Frags nutzt für den Spielbetrieb und für Serverabfragen denselben Port – es gibt **keinen separaten Query Port**.

> [!WARNING]
> Trage immer den **Game Port** aus der Verwaltung ein. Der Port `27005` ist der lokale Client-Port Deines Spiels und darf nicht als Serveradresse verwendet werden.

## Entwicklerkonsole im Spiel aktivieren

Die Konsole ist standardmäßig deaktiviert. Du brauchst sie für die Direktverbindung.

1. **Fistful of Frags starten**\
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. **Optionen öffnen**\
   Öffne im Hauptmenü über das Zahnrad-Symbol die **Optionen** und wechsle auf den Reiter **Keyboard**.

3. **Erweiterte Einstellungen öffnen**\
   Klicke auf die Schaltfläche **Advanced**.

4. **Konsole aktivieren**\
   Setze den Haken bei **Enable Developer Console** und bestätige die Einstellung.

## Über die Spielkonsole verbinden

1. **Konsole öffnen**\
   Drücke im Spiel `~` beziehungsweise `` ` ``, um die Konsole zu öffnen.

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

> [!TIP]
> Alternativ kannst Du Deinen Server auch direkt über Steam ansteuern. Gib dazu im Browser oder im Windows-Ausführen-Dialog folgende Adresse ein – Steam startet das Spiel und verbindet Dich automatisch:
>
> ```text
> steam://connect/123.45.67.89:27015
> ```

## Über den Serverbrowser im Spiel

1. **Serverbrowser öffnen**\
   Starte Fistful of Frags und öffne im Hauptmenü den Serverbrowser.

2. **Server suchen**\
   Wechsle auf den Reiter **Internet** und suche nach dem Namen Deines Servers.

3. **Beitreten**\
   Wähle Deinen Server aus und verbinde Dich.

## Über die Steam-Favoriten

Findest Du Deinen Server nicht in der Liste, trägst Du ihn direkt in Steam ein.

1. **Steam öffnen**\
   Öffne den Steam-Client.

2. **Server-Browser öffnen**\
   Klicke oben links auf **Anzeige** und wähle **Spielserver**.

3. **Server hinzufügen**\
   Klicke auf den Tab **Favoriten** und dann unten rechts auf **+**.

4. **Serveradresse eintragen**\
   Gib die IP-Adresse und den Game Port Deines Servers ein und bestätige.

5. **Beitreten**\
   Wähle den Server aus und verbinde Dich. Der Server erscheint anschließend auch im Serverbrowser des Spiels unter den Favoriten.

## Server in der öffentlichen Serverliste anzeigen

Damit Dein Server zuverlässig in der öffentlichen Serverliste geführt wird, empfiehlt sich ein **Steam Game Server Login Token (GSLT)**.

1. **Token erstellen**\
   Erstelle unter [Steam Game Server Accounts](https://steamcommunity.com/dev/managegameservers) einen Token mit der App-ID `265630`.

   > [!NOTE]
   > `265630` ist die App-ID des Spiels und die richtige ID für den Token. Der Server selbst wird über eine andere App-ID installiert – für den GSLT ist immer `265630` einzutragen.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **server.cfg öffnen**\
   Öffne per [SFTP](/tutorials/gameserver/establish-sftp-connection) folgende Datei:

   ```text
   /fof/cfg/server.cfg
   ```

4. **Token eintragen**\
   Trage folgende Zeile ein:

   ```text
   sv_setsteamaccount "DEIN-TOKEN"
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!NOTE]
> Bietet die Verwaltung Deines Servers ein eigenes Feld für den **GSL Token**, kannst Du den Token auch dort eintragen. Jeder Server benötigt einen eigenen Token. Die Direktverbindung über IP und Port funktioniert auch ohne Token.

## Weitere Einstellungen zur Sichtbarkeit

Diese Werte trägst Du in der `/fof/cfg/server.cfg` ein:

| Einstellung | Bedeutung |
|-------------|-----------|
| `sv_lan 0` | Server ist öffentlich erreichbar und wird bei Steam angemeldet (`1` = nur LAN) |
| `sv_region` | Region für den Serverbrowser (Standardwert `255` = weltweit) |
| `sv_tags` | Eigene Schlagwörter, nach denen Spieler im Serverbrowser filtern können |
| `sv_visiblemaxplayers` | Slotanzahl, die im Serverbrowser angezeigt wird |
| `sv_steamgroup` | Gruppen-ID einer Steam-Gruppe, für die der Server hervorgehoben wird |

> [!TIP]
> Nach Änderungen an der `server.cfg` musst Du Deinen Server neu starten, damit die Werte übernommen werden.

## Welche Ports nutzt Fistful of Frags?

> [!NOTE]
>
> | Port | Verwendung |
> |------|------------|
> | **Game Port** | Spielbetrieb, Serverabfragen und RCON – dieser Port wird für den Beitritt eingetragen |
> | Client Port `27005` | Lokaler Port auf dem PC des Spielers, keine Serveradresse |
> | SourceTV Port | Nur relevant, wenn Du SourceTV für Zuschauer nutzt |
>
> Welche Werte für Deinen Server gelten, siehst Du in der **Verwaltung**.
