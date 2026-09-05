---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem IOSoccer Server bei"
description: "Einem IOSoccer Server beitreten"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["iosoccer"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 4
related: ["gameserver/iosoccer/add-admin", "gameserver/iosoccer/add-mods", "gameserver/iosoccer/create-backup", "gameserver/iosoccer/kick-ban-players"]
---

Auf Deinen IOSoccer Server kommst Du auf zwei Wegen: über den **Serverbrowser** im Spiel oder über eine **Direktverbindung** mit der Entwicklerkonsole. Eine Lobby gibt es nicht – der Beitritt über IP und Port funktioniert immer.

## Verbindungsdaten finden

> [!NOTE]
> Die **IP-Adresse** und den **Game Port** Deines Servers findest Du in der **Verwaltung** Deines Servers. IOSoccer nutzt für den Spielbetrieb und für Serverabfragen denselben Port – es gibt **keinen separaten Query Port**.

> [!WARNING]
> Trage immer den **Game Port** aus der Verwaltung ein. Der Port `27005` ist der lokale Client-Port Deines Spiels und darf nicht als Serveradresse verwendet werden.

## Entwicklerkonsole im Spiel aktivieren

Für die Direktverbindung brauchst Du die Entwicklerkonsole. Reagiert sie bei Dir nicht, schaltest Du sie so frei:

1. **IOSoccer starten**\
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. **Optionen öffnen**\
   Öffne im Hauptmenü die **Optionen** und wechsle auf den Reiter **Keyboard**.

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

3. **Verbindung wiederholen**\
   Bricht die Verbindung ab, kommst Du mit dem Befehl `retry` zurück auf denselben Server, ohne die Adresse erneut eintippen zu müssen.

> [!TIP]
> Alternativ kannst Du Deinen Server auch direkt über Steam ansteuern. Gib dazu im Browser oder im Windows-Ausführen-Dialog folgende Adresse ein – Steam startet das Spiel und verbindet Dich automatisch:
>
> ```text
> steam://connect/123.45.67.89:27015
> ```

## Über den Serverbrowser im Spiel

1. **Serverbrowser öffnen**\
   Starte IOSoccer und öffne im Hauptmenü den Serverbrowser.

2. **Server suchen**\
   Wechsle auf den Reiter **Internet** und suche nach dem Namen Deines Servers.

3. **Beitreten**\
   Wähle Deinen Server aus und verbinde Dich.

> [!NOTE]
> Der Serverbrowser blendet im Reiter **Internet** standardmäßig Server aus, die eine andere Spielversion nutzen. Taucht Dein Server dort nicht auf, obwohl er läuft, prüfe zuerst, ob Server und Spiel auf demselben Stand sind. Über die Direktverbindung erreichst Du ihn trotzdem.

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

Diese Werte trägst Du per [SFTP](/tutorials/gameserver/establish-sftp-connection) in folgende Datei ein. Existiert sie noch nicht, lege sie an:

```text
/iosoccer/cfg/server.cfg
```

| Einstellung | Bedeutung |
|-------------|-----------|
| `sv_lan 0` | Server ist öffentlich erreichbar und wird bei Steam angemeldet (`1` = nur LAN) |
| `sv_region` | Region für den Serverbrowser (Standardwert `255` = weltweit) |
| `sv_tags` | Eigene Schlagwörter, nach denen Spieler im Serverbrowser filtern können |

> [!NOTE]
> Ein **Steam Game Server Login Token (GSLT)** brauchst Du für IOSoccer nicht – der Server unterstützt kein Login-Token, weil er auf einem älteren Zweig der Source Engine läuft. Mit `sv_lan 0` meldet er sich auch ohne Token bei den Steam-Masterservern an. Meldet er sich einmal nicht rechtzeitig an, stößt Du die Anmeldung in der Serverkonsole mit `heartbeat` erneut an.

> [!TIP]
> Nach Änderungen an der `server.cfg` musst Du Deinen Server neu starten, damit die Werte übernommen werden.

## Welche Ports nutzt IOSoccer?

> [!NOTE]
>
> | Port | Verwendung |
> |------|------------|
> | **Game Port** | Spielbetrieb, Serverabfragen und RCON – dieser Port wird für den Beitritt eingetragen |
> | Client Port `27005` | Lokaler Port auf dem PC des Spielers, keine Serveradresse |
> | SourceTV Port | Nur relevant, wenn Du SourceTV für Zuschauer nutzt |
>
> Welche Werte für Deinen Server gelten, siehst Du in der **Verwaltung**.
