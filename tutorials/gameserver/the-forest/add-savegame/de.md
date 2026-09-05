---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem The Forest Server hinzu"
description: "Savegame auf einem The Forest Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["the-forest"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 4
related: ["gameserver/the-forest/add-admin", "gameserver/the-forest/create-backup", "gameserver/the-forest/download-savegame", "gameserver/the-forest/join-server"]
---

The Forest kennt **keinen Weltnamen**, sondern fünf feste **Save-Slots** (`1` bis `5`). Ein Spielstand ist dabei immer ein kompletter Ordner mit dem Namen `Slot1` bis `Slot5` – keine einzelne Datei. Du lädst diesen Ordner mit allen enthaltenen Dateien auf Deinen Server und stellst anschließend ein, welcher Slot geladen werden soll.

> [!TIP]
> Erstelle vor dem Hochladen ein [Backup](/tutorials/gameserver/the-forest/create-backup) Deines bisherigen Server-Spielstands, falls Du später zurückwechseln möchtest.

## Lokalen Spielstand finden

1. **Savegame-Ordner öffnen**\
   Drücke `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```text
   %userprofile%\AppData\LocalLow\SKS\TheForest
   ```

2. **Richtigen Unterordner wählen**\
   Öffne den Ordner, dessen Name aus einer langen Zahlenfolge besteht – das ist Deine SteamID64. Wechsle darin in den Ordner `Multiplayer`.

   > [!NOTE]
   > `Multiplayer` enthält die Welten, in denen Du selbst Host warst, `SinglePlayer` Deine Einzelspieler-Welten. Für einen Dedicated Server verwendest Du einen Spielstand aus `Multiplayer`.

3. **Slot-Ordner auswählen**\
   Darin liegen die Ordner `Slot1` bis `Slot5`. Wähle den Ordner des Spielstands, den Du übertragen möchtest – Du benötigst den **kompletten Ordner** samt Inhalt.

## Savegame hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Solange der Server läuft, schreibt er selbst in die Spielstandsdateien.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /TheForestDedicatedServer_Data/Multiplayer/
   ```

   > [!NOTE]
   > Existiert der Ordner noch nicht, starte den Server einmal, damit die Ordnerstruktur angelegt wird. Stoppe ihn anschließend wieder, bevor Du die Dateien hochlädst.

4. **Slot-Ordner hochladen**\
   Lade den kompletten Ordner `Slot1` (bzw. `Slot2` bis `Slot5`) mit allen enthaltenen Dateien in dieses Verzeichnis hoch. Ist dort bereits ein Ordner mit demselben Namen vorhanden, lösche ihn vorher oder benenne Deinen hochgeladenen Ordner auf eine freie Slot-Nummer um.

5. **Slot in der Konfiguration eintragen**\
   Öffne folgende Datei:

   ```text
   /TheForestDedicatedServer_Data/forest/config/config.cfg
   ```

   Trage dort die Nummer des Slots ein, den Du hochgeladen hast:

   ```text
   slot 1
   ```

6. **Init Type auf Continue stellen**\
   Öffne die **Verwaltung**, wechsle zu den **Einstellungen** und setze das Feld **Init Type** von `New` auf `Continue`.

7. **Server starten**\
   Speichere alle Änderungen und starte Deinen Server. Beim Start wird jetzt Dein hochgeladener Spielstand geladen.

> [!IMPORTANT]
> **Init Type** muss auf `Continue` stehen. Bleibt der Wert auf `New`, erzeugt der Server bei jedem Start eine frische Welt und Dein Fortschritt wird nicht gespeichert – Dein hochgeladener Spielstand wäre damit verloren.

> [!WARNING]
> Einige Werte in der `config.cfg` werden beim Serverstart aus den Feldern der Verwaltung neu geschrieben – darunter `initType`, `serverName`, `serverPassword`, `serverPlayers`, `difficulty`, die Ports und `serverSteamAccount`. Ändere diese Werte deshalb ausschließlich in der Verwaltung. Der Wert `slot` ist davon nicht betroffen und bleibt in der Datei erhalten.

> [!CAUTION]
> **Steam Account Token nicht vergessen**
>
> Ohne gültiges Steam Game Server Login Token (GSLT) läuft Dein Server anonym – dann kann es passieren, dass Spielerdaten und Spielstände nicht korrekt gespeichert werden. Erstelle Dir unter [steamcommunity.com/dev/managegameservers](https://steamcommunity.com/dev/managegameservers) ein Token mit der **App ID 242760** und trage es in der Verwaltung unter **Einstellungen** im Feld **Steam Account Token** ein.

> [!NOTE]
> Der Server speichert automatisch. Wie oft, steuert der Wert `serverAutoSaveInterval` in der `config.cfg` – die Angabe erfolgt in Minuten, kleinere Werte als `15` sind nicht möglich.
