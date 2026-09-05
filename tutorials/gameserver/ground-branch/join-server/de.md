---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Ground Branch Server bei"
description: "Einem Ground Branch Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["ground-branch"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 4
related: ["gameserver/ground-branch/add-admin", "gameserver/ground-branch/add-mods", "gameserver/ground-branch/create-backup", "gameserver/ground-branch/kick-ban-players"]
---

Ground Branch bringt einen eigenen **Server Browser** mit. Darüber findest Du Deinen Server entweder in der Liste oder verbindest Dich gezielt über die IP-Adresse.

## Verbindungsdaten finden

> [!IMPORTANT]
> Die IP-Adresse und die Ports Deines Servers findest Du in der **Verwaltung**. Ground Branch belegt einen **Game Port** und einen **Query Port** – beide werden Dir dort angezeigt und sind bereits freigegeben.

## Über den Server Browser

1. **Ground Branch starten**\
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. **Server Browser öffnen**\
   Wähle im Hauptmenü **Server Browser**.

3. **Richtigen Reiter wählen**\
   Oben stehen die Reiter **Internet**, **Favorites**, **Friends**, **History** und **LAN**. Für Deinen gemieteten Server bleibst Du auf **Internet**.

4. **Server suchen**\
   Gib im Suchfeld (**Search servers…**) den Namen Deines Servers ein. Zusätzlich kannst Du über die Filter passwortgeschützte, volle oder leere Server sowie Server mit Mods ein- und ausblenden.

5. **Server beitreten**\
   Wähle Deinen Server aus der Liste aus und klicke auf **Connect**. Über **Spectate** trittst Du stattdessen als Zuschauer bei.

> [!TIP]
> Mit dem **Stern-Symbol** neben dem Servernamen legst Du Deinen Server als Favorit ab. Danach findest Du ihn jederzeit im Reiter **Favorites**, unabhängig davon, ob er gerade in der öffentlichen Liste auftaucht.

## Direkt über die IP verbinden

Taucht Dein Server in der Liste nicht auf, verbindest Du Dich direkt über die Adresse.

1. **Server Browser öffnen**\
   Wähle im Hauptmenü **Server Browser**.

2. **Connect via IP wählen**\
   Klicke auf **Connect via IP**. Es öffnet sich der Dialog **Enter server IP address**.

3. **Serveradresse eintragen**\
   Trage die IP-Adresse und den Port Deines Servers aus der Verwaltung ein, getrennt durch einen Doppelpunkt:

   ```text
   <IP-Adresse>:<Port>
   ```

   > [!NOTE]
   > **Welchen Port eintragen?**
   >
   > Nutze zuerst den **Game Port** aus der Verwaltung. Erscheint die Meldung **No server found at that IP address**, wiederhole den Vorgang mit dem **Query Port**.

4. **Verbinden**\
   Bestätige die Eingabe. Der Client baut die Verbindung anschließend direkt auf.

## Passwortgeschützter Server

Ist für Deinen Server ein Passwort gesetzt, erscheint beim Beitritt der Dialog **Password required**. Trage dort das Serverpasswort ein, das Du in der Verwaltung hinterlegt hast.

## Server mit Mods

Nutzt Dein Server Mods, weist der Server Browser Dich vor dem Beitritt darauf hin und startet einen **Mod-Sync**.

> [!NOTE]
> Der Client abonniert und lädt die benötigten Workshop-Inhalte dabei automatisch – Du musst die Mods nicht von Hand heraussuchen. Warte den Download ab und tritt anschließend erneut bei. Über die Schaltfläche **Sync Mods** in den Serverdetails lädst Du die Mods eines Servers auch schon vor dem Beitritt herunter. Mehr dazu unter [Mods hinzufügen](/tutorials/gameserver/ground-branch/add-mods).

## Der Server wird nicht gefunden

Prüfe der Reihe nach:

- Läuft Dein Server laut **Verwaltung**? Nach einem Start dauert es einen Moment, bis er sich in der Serverliste meldet.
- Stimmen IP-Adresse und Port exakt mit den Angaben in der Verwaltung überein?
- Verwendest Du dieselbe Spielversion wie der Server? Nach einem Update muss Dein Client aktualisiert sein – bei abweichender Version verweigert der Server den Beitritt.
- Ist auf dem Server eine Whitelist aktiv, kommen nur Admins und freigeschaltete Spieler auf den Server. Du erhältst dann einen entsprechenden Hinweis.

> [!TIP]
> Findest Du Deinen Server im Reiter **Internet** dauerhaft nicht, nutze **Connect via IP** und lege ihn danach über das Stern-Symbol als Favorit ab.
