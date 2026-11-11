---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem Stormforge Server hinzu"
description: "Lade eine Stormforge Welt per SFTP auf Deinen Server hoch und lege über worldPrefabID fest, welche Welt geladen wird."
tags: []
date: "2026-11-11"
visibility: "public"
cta: "gameserver"
product_keys: ["stormforge"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 5
related: ["gameserver/stormforge/create-backup", "gameserver/stormforge/download-savegame", "gameserver/stormforge/reset-world", "gameserver/stormforge/change-world-settings"]
---

Ein Stormforge Server speichert jede Welt in einem eigenen Ordner unter `/saves/Worlds/`. Der Ordner trägt die ID der Welt als Namen. Welche Welt beim Start geladen wird, legt der Eintrag `worldPrefabID` in der Datei `/settings.json` fest.

```text
/saves/Worlds/
└── 3f2b8c1e-5a47-4d09-9e6b-7c1d2a4f8b30/
    └── World_3f2b8c1e-5a47-4d09-9e6b-7c1d2a4f8b30.bytes
```

> [!TIP]
> **Woher bekommst Du einen Spielstand?**\
> Diese Anleitung ist für Welten gedacht, die von einem Stormforge Server stammen, zum Beispiel beim Umzug auf einen anderen Server oder beim Zurückspielen einer eigenen Sicherung. Wie Du die Welt von einem Server herunterlädst, liest Du unter [Savegame herunterladen](/tutorials/gameserver/stormforge/download-savegame).

## Savegame hochladen

1. **Backup erstellen**\
   Sichere den aktuellen Stand Deines Servers, bevor Du etwas änderst: [Backup erstellen](/tutorials/gameserver/stormforge/create-backup).

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Der Server schreibt die `settings.json` im laufenden Betrieb selbst neu, Deine Änderung ginge sonst verloren.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Welt-Ordner hochladen**\
   Wechsle in folgendes Verzeichnis und lade den kompletten Welt-Ordner hinein:

   ```text
   /saves/Worlds/
   ```

   Lade den Ordner als Ganzes hoch, also den Ordner mit der ID als Namen samt Inhalt und nicht nur die Dateien daraus.

5. **Welt in der settings.json eintragen**\
   Öffne die Datei `/settings.json` im Hauptverzeichnis Deines Servers, per SFTP oder im **Datei-Browser** über das Menü der Datei und **Bearbeiten**. Trage bei `worldPrefabID` exakt den Namen des hochgeladenen Ordners ein:

   ```json
   "worldPrefabID": "3f2b8c1e-5a47-4d09-9e6b-7c1d2a4f8b30",
   ```

   Ändere nur den Wert zwischen den Anführungszeichen und lasse alle anderen Einträge unverändert. Speichere die Datei.

6. **Server starten**\
   Starte Deinen Server. Beim Start wird jetzt die hochgeladene Welt geladen.

> [!CAUTION]
> **Ordner und Datei nicht umbenennen**\
> Der Name des Ordners und die ID im Dateinamen `World_<World-ID>.bytes` müssen übereinstimmen. Benenne deshalb weder den Ordner noch die Datei um.

> [!NOTE]
> **Welt plötzlich neu?**\
> Steht in `worldPrefabID` eine ID, zu der es in `/saves/Worlds/` keine Welt gibt, zum Beispiel wegen eines Tippfehlers, erzeugt der Server beim Start eine neue Welt. Stoppe den Server, trage die richtige ID ein und starte ihn wieder.

> [!TIP]
> **Zwischen Welten wechseln**\
> In `/saves/Worlds/` können mehrere Welt-Ordner nebeneinander liegen. Geladen wird nur die Welt, deren ID in `worldPrefabID` steht. Um die Welt zu wechseln, stoppst Du den Server, trägst die ID der anderen Welt ein und startest ihn wieder.

> [!NOTE]
> **Welt aus dem lokalen Spiel**\
> Das Spiel speichert lokale Welten auf Deinem PC unter `%USERPROFILE%\AppData\LocalLow\RobotoGames\Stormforge\Saves` im Unterordner `Worlds`. Das Hochladen einer solchen Welt läuft nach demselben Ablauf, ist aber nicht offiziell dokumentiert. Erstelle deshalb vorher unbedingt ein Backup.
