---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem The Front Server hinzu"
description: "Savegame auf einem The Front Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["the-front"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 4
related: ["gameserver/the-front/add-admin", "gameserver/the-front/create-backup", "gameserver/the-front/download-savegame", "gameserver/the-front/join-server"]
---

The Front kennt **keinen Weltnamen** in der Konfiguration. Ein Spielstand ist immer der komplette Ordner `GameStates` – keine einzelne Datei. Du lädst diesen Ordner mit allem Inhalt an die Stelle, an der Dein Server seinen Spielstand erwartet.

> [!NOTE]
> **Woher kommt der Spielstand?**
>
> Diese Anleitung beschreibt die Übertragung von Server zu Server – also einen Spielstand, den Du zuvor von einem The Front Server heruntergeladen hast. Für Spielstände aus dem Einzelspieler- oder Koop-Modus gibt es keinen dokumentierten Weg auf einen Dedicated Server.

> [!TIP]
> Erstelle vor dem Hochladen ein [Backup](/tutorials/gameserver/the-front/create-backup) Deines bisherigen Server-Spielstands, falls Du später zurückwechseln möchtest.

## Savegame hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Solange der Server läuft, schreibt er selbst in die Spielstandsdateien.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /TheFrontManager/<Konfigurationsname>/Saved/
   ```

   > [!NOTE]
   > **Welcher Konfigurationsname?**
   >
   > Der Ordner trägt den Konfigurationsnamen Deines Servers – denselben Namen, der auch in der Konfigurationsdatei `ServerConfig_<Konfigurationsname>.ini` steckt. Öffne den Ordner `/TheFrontManager/` – in der Regel liegt dort genau ein Unterordner, und das ist Deiner.
   >
   > Existiert der Ordner noch nicht, starte den Server einmal, damit die Struktur angelegt wird, und stoppe ihn anschließend wieder.
   >
   > Gibt es kein `TheFrontManager`-Verzeichnis, arbeitet Dein Server ohne eigenes Benutzerverzeichnis. Der Spielstand liegt dann unter `/ProjectWar/Saved/`.

4. **Alten Spielstand entfernen**\
   Benenne den vorhandenen Ordner `GameStates` um (zum Beispiel in `GameStates_alt`) oder lösche ihn.

   > [!WARNING]
   > Damit ist der bisherige Spielstand Deines Servers nicht mehr aktiv. Sichere ihn vorher über [Savegame herunterladen](/tutorials/gameserver/the-front/download-savegame) oder ein [Backup](/tutorials/gameserver/the-front/create-backup).

5. **GameStates hochladen**\
   Lade Deinen Ordner `GameStates` mit allen Unterordnern und Dateien in dieses Verzeichnis hoch. Der Ordner muss exakt `GameStates` heißen.

6. **Server starten**\
   Starte Deinen Server. Beim Start wird jetzt Dein hochgeladener Spielstand geladen.

> [!CAUTION]
> **Konfigurationsname nicht ändern**
>
> Der Konfigurationsname Deines Servers bestimmt sowohl den Ordner, in dem Dein Spielstand liegt, als auch den Namen der Konfigurationsdatei. Änderst Du diesen Namen, sucht Dein Server in einem anderen Ordner – und legt dort eine komplett neue, leere Welt an. Dein alter Spielstand bleibt dabei auf der Festplatte liegen, wird aber nicht mehr geladen.
>
> Der Name darf keine Leerzeichen und keine Sonderzeichen enthalten.

> [!WARNING]
> Lade immer den kompletten Ordner `GameStates` hoch. Er enthält neben der Welt auch die Spieler-, Bau- und Gildendaten (`Worlds/`, `Players/`, `Accounts/`, `ConstructData.sav`, `GuildData.sav`). Mischst Du Dateien aus verschiedenen Spielständen, passen Welt und Spielerdaten nicht mehr zusammen.

> [!TIP]
> **Server zurücksetzen**
>
> Möchtest Du stattdessen komplett neu anfangen, stoppe den Server, lösche den Ordner `GameStates` und starte den Server erneut. Beim nächsten Start wird eine frische Welt erzeugt.
