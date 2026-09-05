---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem Minecraft Endstone Edition Server hinzu"
description: "Savegame auf einem Minecraft Endstone Edition Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 5
related: ["gameserver/minecraft-endstone-edition/add-admin", "gameserver/minecraft-endstone-edition/add-mods", "gameserver/minecraft-endstone-edition/create-backup", "gameserver/minecraft-endstone-edition/download-savegame"]
---

Ein Spielstand ist bei Endstone immer ein **kompletter Ordner** und keine einzelne Datei. Alle Welten liegen im Ordner `worlds` im Hauptordner Deines Servers. Welche Welt geladen wird, entscheidet der Eintrag `level-name` in der Datei `server.properties`.

> [!IMPORTANT]
> Die Welt in den Ordner zu legen reicht **nicht** aus. Geladen wird ausschließlich die Welt, die unter `level-name` eingetragen ist. Passt der Name nicht exakt zum Ordnernamen, erzeugt der Server stattdessen eine komplett neue Welt.

> [!NOTE]
> Endstone startet im Hintergrund den offiziellen Bedrock Dedicated Server. Bestehende Bedrock-Welten funktionieren deshalb unverändert weiter – Du musst nichts konvertieren.

## Aufbau eines Welt-Ordners

```text
worlds
|___ meine_welt
     |___ db
     |___ level.dat
     |___ levelname.txt
```

| Datei / Ordner | Inhalt |
|----------------|--------|
| `db` | Die eigentliche Datenbank mit allen Chunks der Welt |
| `level.dat` | Weltdaten wie Seed, Spielregeln, Spawnpunkt und Zeit |
| `levelname.txt` | Der im Spiel lesbare Name der Welt |

> [!WARNING]
> Lade immer den kompletten Ordner samt `db`-Unterordner hoch. Fehlt der Ordner `db`, ist die Welt leer beziehungsweise unbrauchbar.

## Lokale Welt finden

Möchtest Du eine Welt aus Deinem Minecraft Bedrock Client auf den Server übertragen, findest Du sie auf Deinem PC unter:

```text
C:\Users\<Benutzername>\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds\
```

> [!NOTE]
> Die Unterordner tragen eine interne Welt-ID und nicht den Namen, den Du im Spiel siehst. Den lesbaren Namen findest Du in der Datei `levelname.txt` im jeweiligen Ordner.

> [!WARNING]
> Lade die Welt immer **entpackt** als Ordner hoch. Eine `.zip`- oder `.mcworld`-Datei kann der Server nicht laden. Benenne eine `.mcworld`-Datei dafür in `.zip` um, entpacke sie auf Deinem PC und lade den entpackten Ordner hoch.

## Savegame hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Solange der Server läuft, schreibt er laufend in die geladene Welt.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server oder nutze den Datei-Browser in der Verwaltung.

3. **Verzeichnis öffnen**\
   Wechsle im Hauptordner Deines Servers in folgenden Ordner:

   ```text
   worlds
   ```

4. **Welt-Ordner hochladen**\
   Lade den kompletten Ordner Deiner Welt mit allen enthaltenen Dateien hoch. Vergib einen Ordnernamen ohne Leer- und Sonderzeichen, zum Beispiel `meine_welt`.

5. **server.properties öffnen**\
   Öffne im Hauptordner Deines Servers die Datei:

   ```text
   server.properties
   ```

6. **Weltnamen eintragen**\
   Suche den folgenden Eintrag und trage dort den Ordnernamen Deiner hochgeladenen Welt ein:

   ```text
   level-name=meine_welt
   ```

   > [!IMPORTANT]
   > Der Eintrag muss **exakt** dem Ordnernamen entsprechen – Groß- und Kleinschreibung inklusive. `Meine_Welt` und `meine_welt` sind zwei verschiedene Welten.

7. **Server starten**\
   Speichere die Änderung und starte Deinen Server. Beim Start wird jetzt Deine hochgeladene Welt geladen.

> [!TIP]
> Erstelle vor dem Wechsel ein [Backup](/tutorials/gameserver/minecraft-endstone-edition/create-backup) Deiner bisherigen Welt oder lade sie herunter: [Savegame herunterladen](/tutorials/gameserver/minecraft-endstone-edition/download-savegame).

## Neue Welt erzeugen lassen

Existiert der unter `level-name` eingetragene Ordner nicht, legt der Server die Welt beim Start neu an. Das ist gleichzeitig der häufigste Grund dafür, dass nach dem Hochladen plötzlich eine leere Welt erscheint: Dann stimmt der Eintrag `level-name` nicht mit dem Ordnernamen überein.
