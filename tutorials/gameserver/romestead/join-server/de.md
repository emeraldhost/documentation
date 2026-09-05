---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Romestead Server bei"
description: "Einem Romestead Server beitreten"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 3
related: ["gameserver/romestead/create-backup", "gameserver/romestead/download-savegame", "gameserver/romestead/kick-ban-players"]
---

Romestead hat **keinen Serverbrowser**. Du verbindest Dich immer direkt über die **IP-Adresse** und den **Game Port** Deines Servers – und zwar über zwei getrennte Eingabefelder im Spiel.

## Verbindungsdaten finden

> [!IMPORTANT]
> Die IP-Adresse und den Game Port Deines Servers findest Du in der **Verwaltung**. Romestead nutzt zum Verbinden ausschließlich den Game Port – einen Query Port gibt es bei diesem Spiel nicht.

## Server beitreten

1. **Romestead starten**\
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. **Multiplayer öffnen**\
   Wähle im Hauptmenü **Multiplayer** und anschließend **Join multiplayer**.

3. **Charakter wählen**\
   Wähle einen vorhandenen Charakter aus oder lege einen neuen an.

4. **Direktverbindung öffnen**\
   Klicke auf die Schaltfläche **Advanced/LAN**. Dort trägst Du die Verbindungsdaten Deines Servers von Hand ein.

5. **IP-Adresse und Port eintragen**\
   Trage die IP-Adresse in das Adressfeld ein und den Game Port in das separate Port-Feld.

   > [!WARNING]
   > Es sind **zwei getrennte Felder**. Zeigt Dir die Verwaltung die Adresse zum Beispiel als `123.45.67.89:8123` an, gehört `123.45.67.89` in das IP-Feld und `8123` in das Port-Feld. Trägst Du beides zusammen in ein einziges Feld ein, schlägt die Verbindung fehl.

6. **Verbinden**\
   Klicke auf **Connect**.

7. **Passwort eingeben**\
   Ist für Deinen Server ein Passwort gesetzt, wirst Du jetzt danach gefragt.

   > [!NOTE]
   > Das Serverpasswort unterscheidet Groß- und Kleinschreibung. Gib es exakt so ein, wie es hinterlegt ist.

## Warum finde ich meinen Server in keiner Liste?

> [!NOTE]
> Romestead besitzt keinen öffentlichen Serverbrowser, in dem dedizierte Server gesammelt auftauchen. Der einzige Weg auf Deinen Server führt deshalb über **Advanced/LAN** mit IP-Adresse und Game Port. Notiere Dir beide Werte am besten, damit Du sie nicht jedes Mal in der Verwaltung nachsehen musst.

> [!TIP]
> Gib IP-Adresse und Game Port genau so an Deine Mitspieler weiter, wie sie in der Verwaltung stehen – am besten als zwei getrennte Werte, damit niemand versehentlich alles in ein Feld tippt.

## Verbindung schlägt fehl

Kommst Du nicht auf Deinen Server, arbeite die folgenden Punkte ab:

1. **Läuft der Server?**\
   Prüfe in der **Verwaltung**, ob Dein Server gestartet ist. Sieh Dir dabei die Konsole an: Beitreten kannst Du erst, wenn der Server die Welt vollständig geladen hat.

2. **Stimmen IP und Port?**\
   Vergleiche beide Werte noch einmal mit der Verwaltung und achte darauf, dass die IP-Adresse im IP-Feld und der Game Port im Port-Feld steht.

3. **Ist das Passwort korrekt?**\
   Achte auf Groß- und Kleinschreibung sowie auf Leerzeichen am Anfang oder Ende.

4. **Wurde das Passwort gerade geändert?**\
   Nach einer Änderung des Serverpassworts musst Du den Server über die Verwaltung neu starten, damit das neue Passwort gilt.
