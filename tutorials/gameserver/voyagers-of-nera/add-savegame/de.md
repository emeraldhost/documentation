---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem Voyagers of Nera Server hinzu"
description: "Savegame auf einem Voyagers of Nera Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["voyagers-of-nera"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 3
related: ["gameserver/voyagers-of-nera/create-backup", "gameserver/voyagers-of-nera/download-savegame", "gameserver/voyagers-of-nera/join-server"]
---

Voyagers of Nera kennt **keinen Weltnamen in der Konfiguration**. Welche Welt geladen wird, entscheidet allein der Ordner, der unter `PersistedData` liegt. Ein Spielstand ist dabei immer ein kompletter Ordner, der nach der Server-ID benannt ist – keine einzelne Datei.

> [!TIP]
> Erstelle vor dem Hochladen ein [Backup](/tutorials/gameserver/voyagers-of-nera/create-backup) Deines bisherigen Server-Spielstands, falls Du später zurückwechseln möchtest.

## Lokalen Spielstand finden

Diesen Abschnitt brauchst Du nur, wenn Du einen Spielstand von Deinem eigenen PC übertragen möchtest. Kommt der Spielstand von einem anderen Server, hast Du den Ordner bereits über [Savegame herunterladen](/tutorials/gameserver/voyagers-of-nera/download-savegame) gesichert.

1. **Savegame-Ordner öffnen**\
   Drücke `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```text
   %localappdata%\BoatGame\Saved\PersistedData\nera
   ```

2. **Richtigen Ordner wählen**\
   Darin liegt pro Welt ein Ordner, der nach der Server-ID benannt ist. Wähle den Ordner des Spielstands, den Du übertragen möchtest – Du benötigst den **kompletten Ordner** samt Inhalt.

   > [!TIP]
   > **Welche ID gehört zu welcher Welt?**
   >
   > Die Server-ID wird Dir im Spiel im Auswahlbildschirm der Speicherstände rechts neben dem jeweiligen Eintrag angezeigt. So erkennst Du, welcher Ordner zu welcher Welt gehört.

## Savegame hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Solange der Server läuft, schreibt er selbst in die Spielstandsdateien.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /BoatGame/Saved/PersistedData/
   ```

   > [!NOTE]
   > Existiert der Ordner noch nicht, starte den Server einmal, damit die Ordnerstruktur angelegt wird. Stoppe ihn anschließend wieder, bevor Du die Dateien hochlädst.

4. **Bisherigen Spielstand entfernen**\
   Lösche den vorhandenen Ordner mit der zufälligen Zeichenfolge im Namen. Das ist die Welt, die Dein Server beim ersten Start selbst erzeugt hat.

   > [!IMPORTANT]
   > Lösche dabei **nicht** den Ordner `CustomConfig`. Darin liegen Deine Servereinstellungen – ohne ihn setzt Dein Server die Spieleinstellungen auf die Standardwerte zurück.

5. **Spielstand hochladen**\
   Lade Deinen kompletten Spielstand-Ordner mit allen enthaltenen Dateien in dieses Verzeichnis hoch.

   > [!WARNING]
   > Achte darauf, dass der Ordner nicht verschachtelt landet. Richtig ist `/BoatGame/Saved/PersistedData/<Server-ID>/`, falsch wäre `/BoatGame/Saved/PersistedData/<Server-ID>/<Server-ID>/`. Entpacke Archive vorher auf Deinem PC und lade den Spielstand-Ordner selbst hoch – nicht das Archiv und keinen zusätzlichen übergeordneten Ordner.

6. **Server starten**\
   Starte Deinen Server. Beim Start wird jetzt Dein hochgeladener Spielstand geladen.

> [!WARNING]
> **Nur ein Spielstand-Ordner**
>
> Unter `PersistedData` sollte neben `CustomConfig` genau ein Spielstand-Ordner liegen. Bleiben mehrere Welten liegen, ist nicht eindeutig, welche Dein Server lädt.

> [!NOTE]
> Der Server speichert automatisch. In welchem Abstand das passiert, stellst Du in der **Verwaltung** über den Autosave-Wert ein – die Angabe erfolgt in Sekunden.
