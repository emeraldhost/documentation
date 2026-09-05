---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem Myth of Empires Server hinzu"
description: "Savegame auf einem Myth of Empires Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["myth-of-empires"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 4
related: ["gameserver/myth-of-empires/add-admin", "gameserver/myth-of-empires/create-backup", "gameserver/myth-of-empires/download-savegame", "gameserver/myth-of-empires/join-server"]
---

Myth of Empires kennt **keinen Weltnamen**. Ein Spielstand ist immer der komplette Ordner `Saved` – keine einzelne Datei. Du lädst diesen Ordner mit allem Inhalt an die Stelle, an der Dein Server seinen Spielstand erwartet.

> [!NOTE]
> **Woher kommt der Spielstand?**
>
> Diese Anleitung beschreibt die Übertragung von Server zu Server – also einen Spielstand, den Du zuvor von einem Myth of Empires Server heruntergeladen hast. Für Spielstände aus dem Einzelspieler-Modus gibt es keinen dokumentierten Weg auf einen Dedicated Server.

> [!TIP]
> Erstelle vor dem Hochladen ein [Backup](/tutorials/gameserver/myth-of-empires/create-backup) Deines bisherigen Server-Spielstands, falls Du später zurückwechseln möchtest.

## Savegame hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Solange der Server läuft, schreibt er selbst in die Spielstandsdateien.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /MOE/
   ```

   > [!NOTE]
   > Existiert der Ordner `Saved` noch nicht, starte den Server einmal, damit die Struktur angelegt wird, und stoppe ihn anschließend wieder.

4. **Alten Spielstand entfernen**\
   Benenne den vorhandenen Ordner `Saved` um (zum Beispiel in `Saved_alt`) oder lösche ihn.

   > [!WARNING]
   > Damit ist der bisherige Spielstand Deines Servers nicht mehr aktiv. Sichere ihn vorher über [Savegame herunterladen](/tutorials/gameserver/myth-of-empires/download-savegame) oder ein [Backup](/tutorials/gameserver/myth-of-empires/create-backup).

5. **Saved hochladen**\
   Lade Deinen Ordner `Saved` mit allen Unterordnern und Dateien in dieses Verzeichnis hoch. Der Ordner muss exakt `Saved` heißen.

6. **Server-ID prüfen**\
   Vergleiche die **Server-ID** Deines Servers mit der des Servers, von dem der Spielstand stammt. Beide müssen übereinstimmen, sonst findet Dein Server den hochgeladenen Spielstand nicht.

7. **Server starten**\
   Starte Deinen Server. Beim Start wird jetzt Dein hochgeladener Spielstand geladen.

> [!CAUTION]
> **Server-ID nicht ändern**
>
> Der Spielstand wird unter der **Server-ID** abgelegt – es gibt keinen Weltnamen, den Du in einer Konfiguration eintragen könntest. Änderst Du die Server-ID, sucht Dein Server unter einer anderen ID und legt eine komplett neue, leere Welt an. Der alte Spielstand bleibt dabei auf der Festplatte liegen, wird aber nicht mehr geladen.

> [!WARNING]
> Lade immer den kompletten Ordner `Saved` hoch. Er enthält neben der Welt auch die Spieler- und Baudaten sowie Deine Servereinstellungen. Mischst Du Dateien aus verschiedenen Spielständen, passen Welt und Spielerdaten nicht mehr zusammen.

> [!NOTE]
> Im Ordner `Saved` liegen unter `Config/WindowsServer/` auch Deine Servereinstellungen. Lädst Du den Ordner komplett hoch, überschreibst Du damit die bisherigen Einstellungen Deines Servers. Der Ordner heißt auch auf Deinem Linux-Server `WindowsServer` – Myth of Empires stellt nur ein Windows-Serverprogramm bereit, das über eine Kompatibilitätsschicht läuft.

> [!TIP]
> **Server zurücksetzen**
>
> Möchtest Du stattdessen komplett neu anfangen, stoppe den Server, lösche den Ordner `Saved` und starte den Server erneut. Beim nächsten Start wird eine frische Welt erzeugt.
