---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Operation Harsh Doorstop Server bei"
description: "Einem Operation Harsh Doorstop Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["operation-harsh-doorstop"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 4
related: ["gameserver/operation-harsh-doorstop/add-admin", "gameserver/operation-harsh-doorstop/add-mods", "gameserver/operation-harsh-doorstop/create-backup", "gameserver/operation-harsh-doorstop/kick-ban-players"]
---

Deinen Server findest Du entweder über den Serverbrowser im Spiel oder Du trägst ihn in Steam als Favoriten ein. Für den Eintrag in Steam benötigst Du in der Regel den **Query Port** und nicht den Game Port.

## Verbindungsdaten finden

> [!IMPORTANT]
> Die IP-Adresse und die Ports Deines Servers findest Du in der **Verwaltung**. Feste Standardwerte gibt es nicht – die Ports werden Deinem Server zugewiesen und können sich von denen anderer Server unterscheiden.

## Über den Serverbrowser im Spiel

Das ist der einfachste Weg: Hier benötigst Du weder IP-Adresse noch Port.

1. **Operation Harsh Doorstop starten**\
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. **Multiplayer öffnen**\
   Wähle im Hauptmenü den Reiter **Multiplayer**.

3. **Server suchen**\
   Suche in der Serverliste nach dem Namen Deines Servers. Nutze dazu die Suchfunktion beziehungsweise den Filter der Liste.

4. **Server beitreten**\
   Wähle Deinen Server aus und bestätige den Beitritt.

> [!NOTE]
> Ein frisch gestarteter Server erscheint nicht sofort in der Liste. Warte nach dem ersten Start ein paar Minuten, bevor Du suchst.

## Über die Steam-Favoriten

Wenn Dein Server im Serverbrowser nicht auftaucht, trägst Du ihn direkt in Steam ein.

> [!NOTE]
> Trage den Server am einfachsten ein, während Operation Harsh Doorstop geschlossen ist. Anschließend startest Du das Spiel direkt über den Favoriten-Eintrag.

1. **Steam öffnen**\
   Öffne den Steam-Client.

2. **Server-Browser öffnen**\
   Klicke oben links auf **Anzeige** und wähle **Server** beziehungsweise **Spielserver**.

3. **Server hinzufügen**\
   Wechsle auf den Tab **Favoriten** und klicke unten rechts auf **+** beziehungsweise **Server hinzufügen**.

4. **Serveradresse eintragen**\
   Gib die IP-Adresse und den **Query Port** Deines Servers ein, getrennt durch einen Doppelpunkt:

   ```text
   <IP-Adresse>:<Query Port>
   ```

   > [!TIP]
   > Die für Deinen Server gültigen Werte stehen in der **Verwaltung**. Findet Steam den Server damit nicht, versuche denselben Eintrag mit dem **Game Port**.

5. **Liste aktualisieren**\
   Klicke auf **Aktualisieren**, damit Steam den Server abfragt. Antwortet der Server, siehst Du Name, Karte und Spielerzahl.

6. **Beitreten**\
   Verbinde Dich direkt aus Steam heraus oder starte das Spiel und wähle den Server im Favoriten-Bereich aus.

## Welche Ports nutzt Operation Harsh Doorstop?

> [!NOTE]
> Ein Operation Harsh Doorstop Server belegt mehrere Ports mit unterschiedlichen Aufgaben:
>
> | Port | Protokoll | Verwendung |
> |------|-----------|------------|
> | Game Port | UDP | Über diesen Port laufen die eigentlichen Spieldaten |
> | Query Port | UDP | Hierüber fragen Steam und der Serverbrowser Deinen Server ab – diesen Port trägst Du in den Steam-Favoriten ein |
> | RCON-Port | TCP | Fernsteuerung des Servers über einen RCON-Client |
>
> Welche Werte für Deinen Server gelten, siehst Du in der **Verwaltung**.

> [!WARNING]
> **Server wird nicht gefunden**
>
> Erscheint Dein Server weder im Serverbrowser noch nach dem Eintrag in den Favoriten, prüfe folgende Punkte:
>
> - Läuft der Server laut Verwaltung tatsächlich?
> - Hast Du den **Query Port** eingetragen? Probiere ersatzweise den **Game Port**.
> - Zeigt die Verwaltung nur einen Port an, frage im Zweifel beim Support nach, welcher Port der Query Port ist.
> - Hast Du die Liste in Steam nach dem Hinzufügen aktualisiert? Ohne Aktualisierung bleibt der Eintrag leer.

> [!NOTE]
> **Mods auf dem Server**
>
> Läuft auf Deinem Server eine modifizierte Karte oder ein modifizierter Spielmodus, brauchst Du die passenden Inhalte auch auf Deinem PC. Abonniere die verwendeten Mods im **Steam Workshop** und starte das Spiel danach neu. Mehr dazu unter [Mods hinzufügen](/tutorials/gameserver/operation-harsh-doorstop/add-mods).
