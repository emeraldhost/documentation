---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Soldat Server bei"
description: "Einem Soldat Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["soldat"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 4
related: ["gameserver/soldat/add-admin", "gameserver/soldat/add-mods", "gameserver/soldat/create-backup", "gameserver/soldat/kick-ban-players"]
---

Auf Deinen Soldat Server kommst Du auf zwei Wegen: über den **Serverbrowser** im Spiel oder über eine **Direktverbindung** mit IP-Adresse und Port. Beide Wege laufen über denselben Port – einen separaten Query Port gibt es bei Soldat nicht.

## Verbindungsdaten finden

> [!IMPORTANT]
> Für die Verbindung benötigst Du die **IP-Adresse** und den **Game Port** Deines Servers. Beides findest Du in der **Verwaltung** Deines Servers. Hat Dein Server ein Spielpasswort, brauchst Du zusätzlich dieses.

## Direkt über die IP verbinden

Die Direktverbindung ist der zuverlässigste Weg auf Deinen Server, weil sie unabhängig von der öffentlichen Serverliste funktioniert.

1. **Soldat starten**\
   Starte Soldat auf Deinem PC und warte, bis das Hauptmenü geladen ist.

2. **Join Game öffnen**\
   Wähle im Hauptmenü **Join Game**.

3. **Verbindungsdaten eintragen**\
   Trage in die Felder für **IP**, **Port** und **Password** die Daten Deines Servers ein:

   ```text
   IP:       123.45.67.89
   Port:     <Game Port aus der Verwaltung>
   Password: <Spielpasswort, falls gesetzt>
   ```

   > [!NOTE]
   > Das Feld **Password** ist das Spielpasswort des Servers, nicht das Adminpasswort. Ist auf Deinem Server kein Spielpasswort gesetzt, bleibt das Feld leer.

4. **Verbinden**\
   Bestätige die Eingabe und Du landest direkt auf Deinem Server.

## Über den Serverbrowser

1. **Join Game öffnen**\
   Starte Soldat und wähle im Hauptmenü **Join Game**.

2. **Serverliste abrufen**\
   Klicke auf **Request Servers**. Soldat lädt daraufhin die Liste der Internet- und LAN-Server.

3. **Server auswählen**\
   Suche Deinen Server anhand seines Namens in der Liste und verbinde Dich.

> [!WARNING]
> Im Serverbrowser erscheint Dein Server nur, wenn er sich in der Lobby registriert. Wie Du das einstellst, steht weiter unten unter [Server in der Serverliste anzeigen](#server-in-der-serverliste-anzeigen). Findest Du Deinen Server nicht, nutze die Direktverbindung – sie funktioniert immer.

## Über eine Verknüpfung oder die Kommandozeile

Soldat kann sich beim Start direkt mit einem Server verbinden. Das eignet sich gut für eine Desktop-Verknüpfung, die Du Deinen Mitspielern gibst.

1. **Startparameter verwenden**\
   Hänge an die Verknüpfung Deines Soldat-Clients folgenden Parameter an:

   ```text
   -join <IP-Adresse> <Game Port> <Passwort>
   ```

2. **Alternativ eine soldat-Adresse verwenden**\
   Statt der Einzelparameter kannst Du auch eine vollständige Adresse übergeben:

   ```text
   -joinurl soldat://<IP-Adresse>:<Game Port>/<Passwort>
   ```

> [!NOTE]
> Port und Passwort sind optional. Lässt Du sie weg, greift Soldat auf feste Vorgabewerte zurück und landet dadurch meist nicht auf Deinem Server – trage deshalb immer den Game Port aus Deiner **Verwaltung** ein.

## Server in der Serverliste anzeigen

Damit Dein Server im Serverbrowser auftaucht, muss er sich bei der Lobby anmelden. Wie Du das einstellst, hängt von Deiner Serverversion ab.

> [!NOTE]
> **Zwei Serverversionen**
>
> Für Soldat gibt es zwei Serverversionen mit unterschiedlicher Konfiguration. Welche bei Dir läuft, erkennst Du im Dateimanager beziehungsweise per [SFTP](/tutorials/gameserver/establish-sftp-connection):
>
> | Datei im Hauptverzeichnis | Version |
> |---------------------------|---------|
> | `soldat.ini` und `server.ini` | klassischer Soldat-Server |
> | `configs/server.cfg` | OpenSoldat |

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Konfiguration öffnen**\
   Öffne per [SFTP](/tutorials/gameserver/establish-sftp-connection) die Konfigurationsdatei Deiner Serverversion.

3. **Lobby-Eintrag aktivieren**\
   Klassischer Server – im Abschnitt `[NETWORK]` der `soldat.ini`:

   ```text
   Lobby_Register=1
   ```

   OpenSoldat – in der `configs/server.cfg`:

   ```text
   set sv_lobby 1
   ```

4. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!WARNING]
> Die Lobby-Registrierung ist bei **beiden** Serverversionen standardmäßig deaktiviert. Ein frisch aufgesetzter Server ist also zunächst nur über die Direktverbindung erreichbar.

## Welche Ports nutzt Soldat?

> [!NOTE]
> Ein Soldat-Server nutzt seinen Game Port mehrfach:
>
> | Port | Protokoll | Verwendung |
> |------|-----------|------------|
> | **Game Port** | UDP | Spielbetrieb – dieser Port wird beim Beitritt eingetragen |
> | **Game Port** | TCP | Remote-Admin-Konsole |
> | **Game Port + 10** | TCP | Übertragung von Maps, Szenerie und Texturen an die Spieler |
>
> Einen separaten Query Port gibt es nicht. Welche Ports für Deinen Server gelten, siehst Du in der **Verwaltung**.

> [!TIP]
> Kommen Spieler auf den Server, laden aber Deine eigenen Karten nicht herunter, prüfe die Einstellung für Datei-Downloads. Mehr dazu unter [Mods hinzufügen](/tutorials/gameserver/soldat/add-mods).
