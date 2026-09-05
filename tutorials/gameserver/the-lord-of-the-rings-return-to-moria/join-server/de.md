---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem The Lord of the Rings Return to Moria Server bei"
description: "Einem The Lord of the Rings Return to Moria Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["the-lord-of-the-rings-return-to-moria"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 4
related: ["gameserver/the-lord-of-the-rings-return-to-moria/add-savegame", "gameserver/the-lord-of-the-rings-return-to-moria/create-backup", "gameserver/the-lord-of-the-rings-return-to-moria/download-savegame", "gameserver/the-lord-of-the-rings-return-to-moria/kick-ban-players"]
---

Return to Moria hat **keinen öffentlichen Serverbrowser**. Deinen Server erreichst Du auf zwei Wegen: über den **Invite-Code**, den der Server beim Start ausgibt, oder über die **Direktverbindung** mit IP-Adresse und Port.

## Verbindungsdaten finden

> [!IMPORTANT]
> Die IP-Adresse und den **Game Port** Deines Servers findest Du in der **Verwaltung**. Return to Moria nutzt zum Verbinden ausschließlich den Game Port – einen separaten **Query Port** gibt es bei diesem Spiel nicht.

## Mit dem Invite-Code beitreten

Der Invite-Code ist der einfachste Weg, weil Deine Mitspieler dafür weder IP-Adresse noch Port brauchen.

1. **Server starten**\
   Starte Deinen Server über die Verwaltung und warte, bis er vollständig hochgefahren ist.

2. **Invite-Code auslesen**\
   Öffne in der Verwaltung die **Konsole**. Sobald die Server-Session beginnt, gibt der Server den Invite-Code dort aus.

   > [!TIP]
   > Der Code steht außerdem im Logfile Deines Servers, das Du per [SFTP](/tutorials/gameserver/establish-sftp-connection) herunterladen kannst:
   >
   > ```text
   > /Moria/Saved/Logs/Moria.log
   > ```

3. **Spiel starten**\
   Starte Return to Moria und warte, bis das Hauptmenü geladen ist.

4. **Welt beitreten**\
   Wähle im Menü den Punkt zum Beitreten einer Welt (**Join World** beziehungsweise **Join Other World**).

5. **Code eingeben**\
   Trage den Invite-Code in das Suchfeld ein und bestätige die Eingabe. Der Server wird daraufhin gefunden und Du kannst beitreten.

## Direkt über die IP verbinden

Die Direktverbindung funktioniert unabhängig vom Invite-Code und ist der zuverlässigste Weg auf Deinen Server.

1. **Spiel starten**\
   Starte Return to Moria auf Deinem PC beziehungsweise Deiner Konsole.

2. **Beitrittsmenü öffnen**\
   Wähle im Hauptmenü **Join Other World**.

3. **Erweiterte Optionen öffnen**\
   Öffne dort die **Advanced Join Options** und wechsle in den Bereich **Direct Join**.

4. **Serveradresse eintragen**\
   Trage die IP-Adresse (oder die Domain) Deines Servers und den **Game Port** aus der Verwaltung in die vorgesehenen Felder ein. Ist für Deinen Server ein Passwort gesetzt, trägst Du es im selben Fenster ein.

5. **Verbinden**\
   Bestätige die Eingabe über **Join Server**.

## Passwortgeschützter Server

Ist für Deinen Server ein Passwort gesetzt, brauchen Deine Mitspieler es sowohl beim Beitritt über den Invite-Code als auch bei der Direktverbindung.

> [!WARNING]
> Das Passwort unterscheidet zwischen Groß- und Kleinschreibung. Gib es Deinen Mitspielern deshalb genau so weiter, wie es in den Servereinstellungen hinterlegt ist.

> [!NOTE]
> Der Eintrag `OptionalPassword` in der `MoriaServerConfig.ini` wird bei jedem Start automatisch aus den Servereinstellungen Deines Servers übernommen. Eine Änderung direkt in der Datei bleibt deshalb nicht bestehen.

## Crossplay und Spielerzahl

> [!NOTE]
> Spieler auf **Steam**, im **Epic Games Store**, auf **PlayStation 5** und **Xbox Series X|S** können gemeinsam auf denselben Server. Ein besonderer Zugang für Konsolen ist dafür nicht nötig. Gleichzeitig können **maximal acht Spieler** auf einem Server spielen.

## Invite-Code zurücksetzen

Möchtest Du einen neuen Invite-Code – zum Beispiel, weil der alte in falsche Hände geraten ist –, löschst Du die Datei, aus der der Code erzeugt wird.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Seed-Datei löschen**\
   Lösche folgende Datei:

   ```text
   /Moria/Saved/Config/InviteSeed.cfg
   ```

4. **Server starten**\
   Starte Deinen Server. Beim nächsten Sessionstart wird ein neuer Invite-Code erzeugt und in der Konsole ausgegeben.

> [!WARNING]
> Der alte Invite-Code funktioniert danach nicht mehr. Gib den neuen Code an alle Mitspieler weiter, die weiterhin beitreten sollen.

## Kein Serverbrowser

> [!WARNING]
> Return to Moria besitzt **keine öffentliche Serverliste**. Dein Server taucht also nirgends automatisch auf – ohne Invite-Code oder Direktverbindung kann niemand beitreten.

> [!NOTE]
> Die Werte `ListenPort`, `AdvertiseAddress` und `AdvertisePort` in der `MoriaServerConfig.ini` werden bei jedem Start automatisch passend für Deinen Server gesetzt. Ändere sie nicht von Hand – Deine Änderungen werden überschrieben und Dein Server ist unter Umständen nicht mehr erreichbar.
