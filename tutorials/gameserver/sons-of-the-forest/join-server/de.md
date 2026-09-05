---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Sons Of The Forest Server bei"
description: "Einem Sons Of The Forest Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["sons-of-the-forest"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 5
related: ["gameserver/sons-of-the-forest/add-savegame", "gameserver/sons-of-the-forest/create-backup", "gameserver/sons-of-the-forest/download-savegame", "gameserver/sons-of-the-forest/kick-ban-players"]
---

Du kannst Deinem Server direkt über die IP-Adresse beitreten oder ihn im Serverbrowser des Spiels suchen. Die Direktverbindung ist die zuverlässigste Variante, da sie unabhängig von der Serverliste funktioniert.

## Verbindungsdaten finden

> [!WARNING]
> **Wichtig**
>
> Die **IP-Adresse** und die Ports Deines Servers findest Du in der **Verwaltung**. Für die Direktverbindung benötigst Du den **Game Port**, für den Eintrag im Steam-Server-Browser den **Query Port**. Verwende immer die dort angezeigten Werte – die Ports werden Deinem Server fest zugewiesen und können von den Standard-Ports des Spiels abweichen.

## Über die Direktverbindung

1. **Sons Of The Forest starten**\
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. **Multiplayer öffnen**\
   Wähle im Hauptmenü **Multiplayer** und anschließend **Join**.

3. **Direktverbindung wählen**\
   Klicke unten auf **Direct**.

4. **Serveradresse eingeben**\
   Gib die IP-Adresse und den **Game Port** Deines Servers ein.

   > [!TIP]
   > **Beispiel**
   >
   > ```text
   > 123.45.67.89:8766
   > ```

5. **Server beitreten**\
   Klicke auf **Join**. Ist auf dem Server ein Passwort gesetzt, gib es anschließend ein.

## Über den Serverbrowser im Spiel

1. **Sons Of The Forest starten**\
   Starte das Spiel.

2. **Multiplayer öffnen**\
   Wähle im Hauptmenü **Multiplayer** und anschließend **Join**.

3. **Quelle umstellen**\
   Stelle **Source** auf **Dedicated**. Bei den anderen Quellen (P2P, Friends, LAN) wird Dein Server nicht angezeigt.

4. **Server suchen**\
   Gib im Filterfeld den exakten Namen Deines Servers ein.

5. **Server beitreten**\
   Wähle Deinen Server aus der Liste und klicke auf **Join**.

## Über die Steam-Favoriten

1. **Steam öffnen**\
   Öffne den Steam-Client.

2. **Server-Browser öffnen**\
   Klicke oben links auf **Anzeige** und wähle **Spielserver**.

3. **Server hinzufügen**\
   Wechsle auf den Tab **Favoriten** und klicke auf **Server hinzufügen**.

4. **Serveradresse eintragen**\
   Gib die IP-Adresse und den **Query Port** Deines Servers ein.

   > [!TIP]
   > **Beispiel**
   >
   > ```text
   > 123.45.67.89:27016
   > ```

5. **Server beitreten**\
   Starte Sons Of The Forest und wähle Deinen Server aus der Favoritenliste aus.

> [!NOTE]
> Nach einem Neustart dauert es einige Minuten, bis Dein Server im Serverbrowser auftaucht. Nutze in dieser Zeit die Direktverbindung – sie funktioniert sofort.

> [!WARNING]
> **Server wird nicht gefunden**
>
> Steht in der Serverkonfiguration `LanOnly` auf `true`, erscheint Dein Server grundsätzlich nicht in der öffentlichen Serverliste. Die Einstellung findest Du in der Datei `/serverconfig/dedicatedserver.cfg`, die Du per [SFTP](/tutorials/gameserver/establish-sftp-connection) bearbeiten kannst.
