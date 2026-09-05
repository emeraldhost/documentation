---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Mindustry Server bei"
description: "Einem Mindustry Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["mindustry"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 6
related: ["gameserver/mindustry/add-savegame", "gameserver/mindustry/create-backup", "gameserver/mindustry/download-savegame", "gameserver/mindustry/kick-ban-players"]
---

Mindustry hat im Beitritts-Menü eine echte Direktverbindung: Du trägst die **IP-Adresse** und den **Game Port** Deines Servers ein und verbindest Dich sofort. Das ist der zuverlässigste Weg auf Deinen Server.

## Verbindungsdaten finden

> [!IMPORTANT]
> Die IP-Adresse und den Game Port Deines Servers findest Du in der **Verwaltung**. Trage immer genau den dort angezeigten Port ein – Mindustry verwendet ohne Portangabe einen fest eingebauten Standardwert, der bei einem gehosteten Server in der Regel nicht passt.

> [!NOTE]
> Mindustry hat **keinen separaten Query Port**. Statusabfragen und das Spiel laufen über denselben Game Port, jeweils über TCP und UDP.

## Über die Direktverbindung beitreten

1. **Mindustry starten**\
   Starte Mindustry auf Deinem PC.

2. **Beitritts-Menü öffnen**\
   Wähle im Hauptmenü **Play** und anschließend **Join Game**.

3. **Server hinzufügen**\
   Klicke im Bereich **Remote** auf **Add Server**.

4. **Serveradresse eintragen**\
   Trage die IP-Adresse und den Game Port Deines Servers ein, getrennt durch einen Doppelpunkt:

   > [!TIP]
   > **Beispiel**
   >
   > ```text
   > 123.45.67.89:<Game Port>
   > ```
   >
   > Ersetze IP-Adresse und Game Port durch die Werte aus Deiner **Verwaltung**.

   > [!NOTE]
   > **IPv6**
   >
   > Hat Dein Server eine IPv6-Adresse, setzt Du sie in eckige Klammern:
   >
   > ```text
   > [2001:db8::1]:<Game Port>
   > ```

5. **Eintrag bestätigen**\
   Bestätige die Eingabe. Der Server erscheint danach dauerhaft im Bereich **Remote** und wird bei jedem Öffnen des Menüs abgefragt.

6. **Beitreten**\
   Zeigt der Eintrag Servername, Karte und Spielerzahl an, klicke ihn an, um beizutreten.

## Die Bereiche im Beitritts-Menü

| Bereich | Bedeutung |
|---------|-----------|
| **Local** | Sucht Server im selben lokalen Netzwerk. Dein gehosteter Server wird hier **nicht** gefunden. |
| **Remote** | Deine selbst hinzugefügten Server. Hierüber trittst Du Deinem Server bei. |
| **Global** | Eine von der Community gepflegte Serverliste. Dein Server erscheint dort nicht automatisch. |

## Server wird nicht gefunden

> [!WARNING]
> Dein Server ist erst erreichbar, wenn er tatsächlich eine Karte hostet. Solange keine Karte geladen ist, nimmt er keine Verbindungen an. Prüfe in der **Konsole** Deiner Verwaltung, ob eine Karte läuft, und starte sie andernfalls:
>
> ```text
> host <Kartenname>
> ```
>
> Alternativ lädst Du einen vorhandenen Spielstand, wodurch der Server ebenfalls online geht:
>
> ```text
> load <Slotname>
> ```

> [!TIP]
> Bleibt der Eintrag im Bereich **Remote** grau oder meldet einen Fehler, prüfe zuerst die Schreibweise von IP-Adresse und Port. Ein häufiger Fehler ist der Game Port aus einer alten Anleitung statt des Ports aus Deiner Verwaltung.
