---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Plugins zu Deinem Terraria tShock Server hinzu"
description: "Plugins auf einem Terraria tShock Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["terraria-tshock"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 3
related: ["gameserver/terraria-tshock/add-admin", "gameserver/terraria-tshock/add-savegame", "gameserver/terraria-tshock/create-backup", "gameserver/terraria-tshock/download-savegame"]
---

tShock hat **kein Mod-System für den Client**. Erweitert wird ein tShock-Server über **Plugins**: `.dll`-Dateien, die ausschließlich auf dem Server liegen und dort neue Befehle, Regeln oder Automatismen ergänzen.

> [!NOTE]
> Deine Spieler müssen dafür nichts installieren. Sie verbinden sich weiterhin mit dem ganz normalen Terraria-Client: [Server beitreten](/tutorials/gameserver/terraria-tshock/join-server).

> [!IMPORTANT]
> `.tmod`-Dateien funktionieren auf einem tShock-Server **nicht**. Sie gehören zu tModLoader und benötigen einen eigenen Servertyp: [Mods hinzufügen (tModLoader)](/tutorials/gameserver/terraria-tmodloader/add-mods).

## Plugin herunterladen

1. **Passendes Plugin suchen**\
   Eine gepflegte Übersicht verfügbarer Plugins findest Du im offiziellen [tShock-Wiki](https://github.com/Pryaxis/TShock/wiki) sowie auf GitHub unter dem Thema [tshock-plugin](https://github.com/topics/tshock-plugin).

2. **Version prüfen**\
   Ein Plugin muss zu der tShock-Version passen, die auf Deinem Server läuft. Welche Version installiert wird, steuerst Du in der Verwaltung über das Feld **tShock Version**.

   > [!WARNING]
   > Passt ein Plugin nicht zur installierten tShock-Version, wird es beim Start nicht geladen oder der Server bricht mit einer Fehlermeldung ab. Prüfe daher immer die Angaben des Entwicklers zur unterstützten Version.

3. **Datei entpacken**\
   Lade das Plugin herunter und entpacke es, falls es als Archiv vorliegt. Du benötigst die enthaltene `.dll`-Datei. Bringt ein Plugin zusätzliche Bibliotheken mit, gehören auch diese `.dll`-Dateien mit auf den Server.

> [!CAUTION]
> **Nur vertrauenswürdige Quellen**
>
> Ein Plugin ist ausführbarer Programmcode, der mit den vollen Rechten Deines Servers läuft. Lade Plugins deshalb ausschließlich aus offiziellen bzw. bekannten Quellen herunter – auch das tShock-Wiki warnt ausdrücklich davor, Plugins unbekannter Herkunft zu installieren.

## Plugin hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Plugins werden nur beim Serverstart geladen.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Plugin-Ordner öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /ServerPlugins/
   ```

   > [!NOTE]
   > Der Ordner wird bei der Installation von tShock angelegt und enthält bereits die Datei `TShockAPI.dll`. Lösche vorhandene Dateien dort nicht – sie gehören zu tShock selbst.

4. **Datei hochladen**\
   Lade die `.dll`-Datei des Plugins in diesen Ordner hoch.

5. **Server starten**\
   Starte Deinen Server und beobachte die Serverkonsole. Geladene Plugins werden dort beim Start mit Namen und Version aufgeführt.

## Plugin konfigurieren

Die meisten Plugins legen ihre Konfigurationsdatei beim ersten Start automatisch im Ordner `/tshock/` ab. Gehe also so vor:

1. **Server einmal starten**\
   Starte den Server nach dem Hochladen einmal, damit das Plugin seine Dateien anlegt.

2. **Server stoppen**\
   Stoppe den Server wieder, bevor Du die Konfiguration bearbeitest.

3. **Konfiguration anpassen**\
   Öffne die Konfigurationsdatei des Plugins im Ordner `/tshock/` und passe die Werte an.

4. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!TIP]
> Viele Plugins bringen eigene Befehle mit. Welche Befehle Dir zur Verfügung stehen, zeigt Dir `/help` im Spiel. Damit auch andere Gruppen die neuen Befehle nutzen dürfen, musst Du die zugehörigen Berechtigungen vergeben: [Admin hinzufügen](/tutorials/gameserver/terraria-tshock/add-admin).

## Plugin entfernen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Datei löschen**\
   Lösche die `.dll`-Datei des Plugins aus dem Ordner `/ServerPlugins/`.

3. **Server starten**\
   Starte Deinen Server. Das Plugin ist damit deaktiviert.

> [!WARNING]
> Startet Dein Server nach dem Hochladen eines Plugins nicht mehr, entferne die zuletzt hinzugefügte `.dll`-Datei wieder. Füge Plugins am besten einzeln hinzu und starte dazwischen den Server – so erkennst Du sofort, welches Plugin Probleme macht.

> [!TIP]
> Erstelle vor größeren Änderungen ein [Backup](/tutorials/gameserver/terraria-tshock/create-backup) Deines Servers.
