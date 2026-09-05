---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem Abiotic Factor Server hinzu"
description: "Savegame auf einem Abiotic Factor Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["abiotic-factor"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 4
related: ["gameserver/abiotic-factor/add-admin", "gameserver/abiotic-factor/create-backup", "gameserver/abiotic-factor/download-savegame", "gameserver/abiotic-factor/join-server"]
---

Ein Spielstand ist in Abiotic Factor immer ein **kompletter Weltordner**, keine einzelne Datei. Du lädst diesen Ordner mit allen enthaltenen Dateien auf Deinen Server und sorgst anschließend dafür, dass der Server ihn auch lädt.

> [!TIP]
> Erstelle vor dem Hochladen ein [Backup](/tutorials/gameserver/abiotic-factor/create-backup) Deines bisherigen Server-Spielstands, falls Du später zurückwechseln möchtest.

> [!NOTE]
> **Warum sehen die Pfade wie Windows-Pfade aus?**
>
> Abiotic Factor stellt nur ein Windows-Serverprogramm bereit, das auf Deinem Linux-Server über eine Kompatibilitätsschicht läuft. Deshalb heißen die Ordner auf dem Server genauso wie unter Windows – zum Beispiel `Saved/Config/WindowsServer`. Das ist so gewollt.

## Lokalen Spielstand finden

1. **Savegame-Ordner öffnen**\
   Drücke `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```text
   %LocalAppData%\AbioticFactor\Saved\SaveGames
   ```

2. **Richtigen Unterordner wählen**\
   Öffne den Ordner, dessen Name aus einer langen Zahlenfolge besteht – das ist Deine [SteamID64](/tutorials/gameserver/steamid64-find-out). Wechsle darin in den Ordner `Worlds`.

3. **Weltordner auswählen**\
   Darin liegt für jede Welt ein eigener Ordner. Wähle den Ordner der Welt, die Du übertragen möchtest – Du benötigst den **kompletten Ordner** samt Inhalt.

> [!CAUTION]
> **Konsolen-Spielstände lassen sich nicht übertragen**
>
> Spielstände von PlayStation 5, Xbox und aus der Windows-Gamepass-Version lassen sich **nicht** auf einen Dedicated Server übertragen. Der beschriebene Weg funktioniert nur mit Spielständen der PC-Version aus Steam.

## Savegame hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Solange der Server läuft, schreibt er selbst in die Spielstandsdateien.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /AbioticFactor/Saved/SaveGames/Server/Worlds/
   ```

   > [!NOTE]
   > Existiert der Ordner noch nicht, starte den Server einmal, damit die Ordnerstruktur angelegt wird. Stoppe ihn anschließend wieder, bevor Du die Dateien hochlädst.

4. **Vorhandenen Weltordner merken**\
   Schau nach, wie der Weltordner heißt, den Dein Server aktuell verwendet. Standardmäßig heißt er `Cascade`.

5. **Weltordner hochladen**\
   Lade Deinen kompletten Weltordner mit allen enthaltenen Dateien in dieses Verzeichnis hoch.

6. **Ordnernamen angleichen**\
   Benenne den hochgeladenen Ordner exakt so, wie der Weltordner Deines Servers heißt (standardmäßig `Cascade`). Den bisherigen Ordner benennst Du vorher um oder löschst ihn, damit es keine Namenskollision gibt.

   > [!TIP]
   > **Alternative über den Weltnamen**
   >
   > Statt den Ordner umzubenennen, kannst Du dem Server auch sagen, welchen Ordner er laden soll. Dafür gibt es den Startparameter `-WorldSaveName=<Ordnername>`. Bietet Deine Verwaltung ein Feld für den Weltnamen an, trägst Du dort einfach den Namen Deines hochgeladenen Ordners ein.

7. **Server starten**\
   Starte Deinen Server. Beim Start wird jetzt Dein hochgeladener Spielstand geladen.

> [!WARNING]
> Der Ordnername und der eingestellte Weltname müssen exakt übereinstimmen – inklusive Groß- und Kleinschreibung. Passt beides nicht zusammen, legt der Server beim Start eine **neue, leere Welt** an, statt Deinen Spielstand zu laden.

> [!NOTE]
> **Gameplay-Einstellungen**
>
> Die Schwierigkeits- und Sandbox-Einstellungen stehen in der Datei `SandboxSettings.ini`. Auf einem Dedicated Server liegt sie im Weltordner selbst:
>
> ```text
> /AbioticFactor/Saved/SaveGames/Server/Worlds/Cascade/SandboxSettings.ini
> ```
>
> Lädst Du den kompletten Weltordner hoch, wird sie also automatisch mit übertragen. Über den Startparameter `-SandboxIniPath=` lässt sich der Ort der Datei verlegen – findest Du sie nicht im Weltordner, schau zusätzlich direkt unter `/AbioticFactor/Saved/` nach.
