---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem Citadel Forged with Fire Server hinzu"
description: "Savegame auf einem Citadel Forged with Fire Server hinzufügen"
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
short_title: "Savegame hinzufügen"
sort: 4
related: ["gameserver/citadel-forged-with-fire/add-admin", "gameserver/citadel-forged-with-fire/create-backup", "gameserver/citadel-forged-with-fire/download-savegame", "gameserver/citadel-forged-with-fire/join-server"]
---

Ein Spielstand ist in Citadel Forged with Fire **kein einzelner Speicherstand, sondern ein kompletter Ordner**. Darin liegen die Weltdaten sowie die Daten aller Spieler – die Charakterdaten sind dabei nach der **SteamID64** des jeweiligen Spielers benannt.

> [!NOTE]
> Du musst **keinen Welt- oder Spielstandnamen** in einer Konfigurationsdatei eintragen. Dein Server lädt immer den Spielstand, der im Savegame-Ordner liegt – der Servername hat damit nichts zu tun.

> [!TIP]
> Erstelle vor dem Hochladen ein [Backup](/tutorials/gameserver/citadel-forged-with-fire/create-backup) Deines bisherigen Spielstands, falls Du später zurückwechseln möchtest.

## Lokalen Spielstand finden

Möchtest Du einen Spielstand von Deinem PC übertragen, findest Du ihn im Installationsordner des Spiels – **nicht** im `AppData`-Verzeichnis:

1. **Steam-Bibliothek öffnen**\
   Öffne Steam und wechsle in Deine **Bibliothek**.

2. **Lokale Dateien öffnen**\
   Klicke mit der rechten Maustaste auf **Citadel Forged with Fire**, wähle **Verwalten** und anschließend **Lokale Dateien durchsuchen**.

3. **Savegame-Ordner öffnen**\
   Wechsle im geöffneten Fenster in folgendes Verzeichnis:

   ```text
   Citadel\Saved\SaveGames
   ```

4. **Kompletten Inhalt kopieren**\
   Du benötigst den **gesamten Inhalt** dieses Ordners. Einzelne Dateien daraus ergeben keinen nutzbaren Spielstand.

## Savegame hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Solange der Server läuft, speichert er automatisch weiter und würde Deine hochgeladenen Dateien wieder überschreiben.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /Citadel/Saved/SaveGames/
   ```

   > [!NOTE]
   > Existiert der Ordner noch nicht, starte Deinen Server einmal, damit die Ordnerstruktur angelegt wird. Stoppe ihn anschließend wieder, bevor Du die Dateien hochlädst.

4. **Alten Spielstand entfernen**\
   Lösche den vorhandenen Inhalt des Ordners.

   > [!WARNING]
   > Damit ist der bisherige Spielstand Deines Servers weg. Lade ihn vorher herunter oder erstelle ein [Backup](/tutorials/gameserver/citadel-forged-with-fire/create-backup), falls Du zurückwechseln möchtest.

5. **Neuen Spielstand hochladen**\
   Lade den kompletten Inhalt Deines Savegame-Ordners in dieses Verzeichnis hoch. Achte darauf, die Ordnerstruktur unverändert zu übernehmen.

6. **Server starten**\
   Starte Deinen Server. Beim Start wird jetzt Dein hochgeladener Spielstand geladen.

## Spielstand auf Deinem PC einspielen

Möchtest Du umgekehrt einen Spielstand auf Deinem PC nutzen, gehst Du genauso vor:

1. **Spiel schließen**\
   Beende Citadel Forged with Fire vollständig.

2. **Dateien austauschen**\
   Kopiere den Inhalt des Spielstands in den Ordner `Citadel\Saved\SaveGames` in Deinem Spielinstallationsordner.

3. **Spiel starten**\
   Starte das Spiel neu – der Spielstand steht Dir nun zur Verfügung.

> [!IMPORTANT]
> Die Charakterdaten sind nach der SteamID64 des jeweiligen Spielers benannt. Übernimmst Du einen Spielstand von einem anderen Server oder von einem anderen PC, sind die Charaktere weiterhin an dieselben Steam-Konten gebunden. Ein Spieler mit einer anderen SteamID64 startet auf diesem Spielstand mit einem neuen Charakter.

> [!WARNING]
> Übertrage immer den **kompletten Ordnerinhalt**. Welt- und Spielerdaten gehören zusammen – fehlen einzelne Dateien, kann der Spielstand unvollständig oder gar nicht geladen werden.

> [!TIP]
> Wie Du den Spielstand Deines Servers sicherst, erfährst Du unter [Savegame herunterladen](/tutorials/gameserver/citadel-forged-with-fire/download-savegame).
