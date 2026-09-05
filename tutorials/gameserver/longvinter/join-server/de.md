---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Longvinter Server bei"
description: "Einem Longvinter Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["longvinter"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 5
related: ["gameserver/longvinter/add-savegame", "gameserver/longvinter/create-backup", "gameserver/longvinter/download-savegame", "gameserver/longvinter/kick-ban-players"]
---

Longvinter bietet im Hauptmenü einen Serverbrowser. Darin gibt es die Funktion **Connect by IP**, über die Du Dich direkt mit Deinem eigenen Server verbindest. Zum Verbinden verwendest Du dabei den **Game Port**, nicht den Query Port.

## Verbindungsdaten finden

> [!IMPORTANT]
> Die IP-Adresse und die Ports Deines Servers findest Du in der **Verwaltung**. Für den Beitritt benötigst Du die IP-Adresse und den **Game Port**. Der Query Port wird nur dafür verwendet, dass Dein Server in der öffentlichen Serverliste erscheint – über ihn verbindest Du Dich nicht.

## Über Connect by IP verbinden

Die Direktverbindung ist der zuverlässigste Weg auf Deinen Server.

1. **Longvinter starten**\
   Starte Longvinter und warte, bis das Hauptmenü geladen ist.

2. **Serverbrowser öffnen**\
   Wähle im Hauptmenü den **Server Browser**.

3. **Connect by IP öffnen**\
   Klicke oben rechts über der Serverliste auf **Connect by IP**.

4. **Serveradresse eintragen**\
   Trage die IP-Adresse und den Game Port Deines Servers ein, getrennt durch einen Doppelpunkt:

   ```text
   <IP-Adresse>:<Game Port>
   ```

   > [!WARNING]
   > Trage hier den **Game Port** aus der Verwaltung ein. Mit dem Query Port schlägt die Verbindung fehl.

5. **Verbinden**\
   Bestätige die Eingabe mit Enter beziehungsweise über die Verbinden-Schaltfläche.

## Über die Serverliste beitreten

Dein Server erscheint zusätzlich in der Serverliste im **Server Browser**. Suche dort nach dem Namen Deines Servers und tritt ihm per Klick bei.

> [!NOTE]
> Damit Dein Server in der Liste auftaucht, muss der **Query Port** erreichbar sein. Wird er dort nicht angezeigt, nutze stattdessen **Connect by IP** – dieser Weg funktioniert unabhängig davon, ob Dein Server gelistet wird.

## Passwortgeschützter Server

Hat Dein Server ein Passwort, wirst Du beim Beitreten danach gefragt.

> [!WARNING]
> Das Serverpasswort von Longvinter darf ausschließlich aus Buchstaben und Zahlen bestehen. Sonderzeichen werden nicht unterstützt und können dazu führen, dass niemand mehr beitreten kann.

## Server wird in der falschen Region angezeigt

> [!NOTE]
> Longvinter sortiert Server in der Serverliste nach Region. Wird Dein Server in der falschen Region angezeigt, lässt sich das über den Schlüssel `ServerRegion` in der Konfigurationsdatei Deines Servers korrigieren:
>
> ```text
> /Longvinter/Saved/Config/LinuxServer/Game.ini
> ```
>
> Mögliche Werte sind `EU`, `NA`, `SA`, `AS` und `AU`. Prüfe zuerst, ob Deine **Verwaltung** dafür bereits ein eigenes Feld anbietet. Stoppe Deinen Server, bevor Du die Datei bearbeitest – siehe [Admin hinzufügen](/tutorials/gameserver/longvinter/add-admin).

## „Continue“ führt auf den falschen Server

> [!NOTE]
> Über **Continue** verbindest Du Dich im Hauptmenü erneut mit dem zuletzt gespielten Server. Die Entwickler führen dazu einen bekannten Fehler: Die Schaltfläche arbeitet nicht immer zuverlässig und kann Dich auf einen falschen Server bringen. Das liegt nicht an Deinem Server – Dein Fortschritt bleibt erhalten. Verbinde Dich in diesem Fall einfach wieder über **Connect by IP** oder über die Serverliste.

## Welche Ports nutzt Longvinter?

> [!NOTE]
> Ein Longvinter-Server belegt zwei Ports:
>
> | Port | Protokoll | Verwendung |
> |------|-----------|------------|
> | Game Port | UDP | Spieldaten – hierüber verbinden sich die Spieler mit Deinem Server |
> | Query Port | TCP und UDP | Serverabfrage – damit Dein Server in der Serverliste erscheint |
>
> Welche Werte für Deinen Server gelten, siehst Du in der **Verwaltung**.

> [!WARNING]
> Longvinter basiert auf der Unreal Engine und überträgt die Spieldaten ausschließlich über **UDP**. Ein zusätzlicher TCP-Port für den Game Port ist nicht nötig – Anleitungen, die das behaupten, sind falsch.
