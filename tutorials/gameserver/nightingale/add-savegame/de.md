---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem Nightingale Server hinzu"
description: "Savegame auf einem Nightingale Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["nightingale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 4
related: ["gameserver/nightingale/add-admin", "gameserver/nightingale/create-backup", "gameserver/nightingale/download-savegame", "gameserver/nightingale/join-server"]
---

Nightingale kennt **keinen Welt- oder Spielstandnamen**. Der Server lädt immer das, was im Ordner `Offline` liegt. Darin stecken Deine Realms und Deine Charaktere:

| Verzeichnis | Inhalt |
|-------------|--------|
| `/NWX/Saved/Offline/DedicatedServer/Deploy/` | Die Realms, also alle Welten samt Bauten |
| `/NWX/Saved/Offline/<PlatformID>/Profiles/` | Die Charakterdaten eines Spielers. `<PlatformID>` ist die Steam- bzw. Epic-ID des Spielers. |

> [!TIP]
> Erstelle vor dem Übertragen ein [Backup](/tutorials/gameserver/nightingale/create-backup) Deines bisherigen Server-Spielstands, falls Du später zurückwechseln möchtest.

## Weg 1: Übertragung direkt aus dem Spiel

Das ist der offizielle und einfachste Weg. Beim allerersten Beitritt auf einen noch leeren Server lädt Dein Client Deinen Charakter **und alle zu ihm gehörenden Realms** automatisch hoch.

1. **Server vorbereiten**\
   Der Server muss leer sein, also noch keinen Spielstand enthalten. Ist bereits ein Spielstand vorhanden, setze ihn vorher wie weiter unten beschrieben zurück.

2. **Server starten**\
   Starte Deinen Server über die Verwaltung und warte, bis er vollständig hochgefahren ist.

3. **Mit dem gewünschten Charakter beitreten**\
   Verbinde Dich als Erster mit genau dem Charakter, dessen Fortschritt Du übertragen möchtest. Wie Du Deinem Server beitrittst, steht unter [Server beitreten](/tutorials/gameserver/nightingale/join-server).

4. **Übertragung abwarten**\
   Charakter und Realms werden beim Beitritt hochgeladen. Je nach Umfang Deiner Welten kann das einen Moment dauern.

> [!IMPORTANT]
> Der erste Charakter, der sich verbindet, bestimmt damit den Inhalt des Servers. Möchtest Du **nicht**, dass ein Spielstand hochgeladen wird, verbinde Dich zuerst mit einem **neu erstellten Charakter**.

## Weg 2: Spielstand per SFTP hochladen

Diesen Weg nutzt Du für einen Spielstand, der bereits von einem Nightingale Server stammt – etwa aus einem [Backup](/tutorials/gameserver/nightingale/create-backup) oder von einem anderen Server.

> [!WARNING]
> Für einen Spielstand von Deinem eigenen PC nutzt Du **Weg 1**. Ein Server legt seine Realms im Unterordner `DedicatedServer/Deploy` ab – ein lokaler Spielstand Deines Clients ist anders aufgebaut und lässt sich nicht einfach in dieses Verzeichnis kopieren.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Solange der Server läuft, schreibt er selbst in die Spielstandsdateien.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /NWX/Saved/
   ```

   > [!NOTE]
   > Existiert der Ordner noch nicht, starte den Server einmal, damit die Ordnerstruktur angelegt wird. Stoppe ihn anschließend wieder, bevor Du die Dateien hochlädst.

4. **Bisherigen Spielstand entfernen**\
   Lösche den vorhandenen Ordner `Offline` auf dem Server, damit sich alter und neuer Spielstand nicht vermischen.

5. **Ordner hochladen**\
   Lade den kompletten Ordner `Offline` mit allen Unterordnern in das Verzeichnis `/NWX/Saved/` hoch.

6. **Server starten**\
   Starte Deinen Server. Beim Start wird jetzt Dein hochgeladener Spielstand geladen.

> [!WARNING]
> Lade Realms und Charaktere immer gemeinsam hoch. Fehlt der Ordner `Profiles` des passenden Spielers, fehlt auch der Charakter, der zu den Welten gehört.

## Spielstand zurücksetzen

Möchtest Du auf Deinem Server neu anfangen, löschst Du den gespeicherten Zustand komplett:

1. **Backup erstellen**\
   Erstelle vorher ein [Backup](/tutorials/gameserver/nightingale/create-backup). Dieser Schritt lässt sich nicht rückgängig machen.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Ordner löschen**\
   Lösche folgende beiden Ordner vollständig:

   ```text
   /NWX/Saved/Offline/
   /NWX/Saved/Config/
   ```

5. **Server starten**\
   Starte Deinen Server. Er legt die Ordner beim Start neu an und ist wieder leer.

> [!WARNING]
> Mit `/NWX/Saved/Config/` löschst Du auch den Serverzustand – darunter die Liste der gebannten Spieler. Nach dem Zurücksetzen sind alle Banns aufgehoben.

## Schwierigkeit der ersten Welt

> [!NOTE]
> Die Startschwierigkeit setzt Du in der **Verwaltung** über die Variable **Difficulty** (`easy`, `medium`, `hard` oder `extreme`). Sie wirkt nur auf die **allererste Welt**, die der Server selbst erzeugt – also nur dann, wenn kein Charakter mit eigenen Realms importiert wird. Bereits vorhandene Realms bleiben unverändert.
