---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Citadel Forged with Fire Server bei"
description: "Einem Citadel Forged with Fire Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["citadel-forged-with-fire"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 5
related: ["gameserver/citadel-forged-with-fire/add-savegame", "gameserver/citadel-forged-with-fire/create-backup", "gameserver/citadel-forged-with-fire/download-savegame", "gameserver/citadel-forged-with-fire/kick-ban-players"]
---

Citadel Forged with Fire kennt **keine Direktverbindung über die IP-Adresse**. Du erreichst Deinen Server ausschließlich über den Serverbrowser im Spiel, indem Du dort nach dem **Namen Deines Servers** suchst.

## Verbindungsdaten finden

> [!IMPORTANT]
> Für den Beitritt brauchst Du den **Namen Deines Servers**. Die IP-Adresse sowie den Game Port und den Query Port findest Du in der **Verwaltung** – sie sind für die Suche im Spiel selbst nicht nötig, aber wichtig, falls Dein Server nicht in der Liste auftaucht.

## Über den Serverbrowser beitreten

1. **Citadel Forged with Fire starten**\
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. **Join Game öffnen**\
   Wähle im Hauptmenü **Join Game**. Es öffnet sich die Serverliste.

3. **Server suchen**\
   Gib im Suchfeld der Serverliste den Namen Deines Servers ein.

4. **Beitreten**\
   Wähle Deinen Server aus der Liste aus und klicke auf **Join**.

5. **Charakter erstellen**\
   Beim ersten Beitritt legst Du Deinen Charakter an. Dein Fortschritt wird anschließend auf dem Server gespeichert und beim nächsten Beitritt wieder geladen.

> [!NOTE]
> Ein Menüpunkt für eine Direktverbindung per `IP:Port` ist in Citadel Forged with Fire nicht vorhanden. Der Serverbrowser ist der vorgesehene Weg auf Deinen Server – such dort einfach nach dem Servernamen.

> [!NOTE]
> **Passwortgeschützter Server**
>
> Ist für Deinen Server ein Beitrittspasswort gesetzt, benötigst Du es beim Verbinden. Gib es nur an die Spieler weiter, die auf Deinen Server sollen.

## Welche Ports nutzt Citadel Forged with Fire?

> [!NOTE]
> Ein Server belegt mehrere Ports. Game Port und Query Port laufen dabei über **UDP**:
>
> | Konfigurationswert | Verwendung |
> |--------------------|------------|
> | `ConnectionPort` | Game Port – über ihn läuft die eigentliche Verbindung der Spieler zum Server |
> | `QueryPort` | Query Port – über ihn meldet sich Dein Server an der Serverliste an und wird dort gefunden |
> | `SteamPort` | Kommunikation mit Steam |
>
> Welche Ports für Deinen Server gelten, siehst Du in der **Verwaltung**. Game Port und Query Port dürfen nie derselbe Port sein.

## Server wird nicht gefunden

> [!WARNING]
> **Server erscheint nicht in der Liste**
>
> Taucht Dein Server im Serverbrowser nicht auf, liegt es meist am Query Port – nur über ihn meldet sich der Server an der Liste an. Prüfe in der **Verwaltung**, ob Game Port und Query Port unterschiedliche Ports sind, und starte Deinen Server anschließend neu. Direkt nach dem ersten Start kann es außerdem einige Minuten dauern, bis der Server in der Liste erscheint.

> [!CAUTION]
> **Join-Schaltfläche lässt sich nicht anklicken**
>
> Wird Dein Server zwar angezeigt, der Beitritt aber nicht ausgelöst, stimmt der Port in der `Engine.ini` nicht mit dem Game Port überein. Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und lege folgende Datei an, falls sie noch nicht existiert:
>
> ```text
> /Config/Engine.ini
> ```
>
> Ergänze darin diesen Abschnitt und trage als Port den **Game Port** aus Deiner Verwaltung ein:
>
> ```ini
> [URL]
> Port=<Game Port>
> ```
>
> Speichere die Datei und starte Deinen Server neu.

> [!NOTE]
> **Wo liegt die Konfiguration?**
>
> Die Konfigurationsdateien Deines Servers liegen im Ordner `/Config/`. Der Pfad `/Citadel/Saved/Config/LinuxServer/` verweist auf denselben Ordner – Du kannst also beide Wege nutzen, es sind dieselben Dateien.
