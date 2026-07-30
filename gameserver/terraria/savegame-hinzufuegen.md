---
description: Savegame auf einem Terraria Server hinzufügen
---

# So fügst du ein Savegame zu deinem Terraria Server hinzu

Du kannst eine lokale Welt auf deinen Server übertragen, um dort mit einer bestehenden Welt weiterzuspielen. Eine Welt besteht im normalen Terraria aus **einer einzigen `.wld`-Datei**.

## Lokales Savegame finden

1. <b>Welt-Ordner öffnen</b><br>
   Drücke `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```
   %userprofile%\Documents\My Games\Terraria\Worlds
   ```

   :::: info Hinweis
   Unter Linux liegen die Welten in `~/.local/share/Terraria/Worlds`, unter macOS in `~/Library/Application Support/Terraria/Worlds`.
   ::::

2. <b>Welt auswählen</b><br>
   Suche die gewünschte `.wld`-Datei heraus, z.B. `MeineWelt.wld`. Vermeide Leerzeichen im Dateinamen und verwende stattdessen Unterstriche, z.B. `Meine_Welt.wld`.

## Savegame hochladen und anwenden

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Welt hochladen</b><br>
   Lade die `.wld`-Datei in folgendes Verzeichnis hoch:

   ```
   /saves/Worlds/
   ```

4. <b>Weltnamen setzen</b><br>
   Öffne die Verwaltung, navigiere zu den **Einstellungen** und trage im Feld **World Name** den Dateinamen deiner Welt ein – **ohne** die Endung `.wld` (z.B. `Meine_Welt` für `Meine_Welt.wld`).

5. <b>Server starten</b><br>
   Speichere die Einstellungen und starte deinen Server.

:::: danger Wichtig
Der Weltname wird **exakt** so gesucht, wie du ihn einträgst – Groß- und Kleinschreibung inklusive. Findet der Server im Ordner `/saves/Worlds/` keine passende `.wld`-Datei, erzeugt er beim Start automatisch eine **neue, leere Welt** mit diesem Namen. Heißt deine Datei `MeineWelt.wld` und du trägst `meinewelt` ein, landest du also in einer frisch generierten Welt statt in deiner hochgeladenen.
::::

:::: warning Achtung
Bearbeite die Datei `serverconfig.txt` nicht von Hand, um die Welt zu wechseln. Die Werte `worldpath`, `worldname`, `world`, `difficulty`, `autocreate`, `port`, `maxplayers`, `motd`, `seed`, `password` und `npcstream` werden bei **jedem Serverstart** aus den Einstellungen in der Verwaltung neu geschrieben. Ändere stattdessen immer die passende Einstellung im Panel.
::::

:::: warning Welt wechseln
Möchtest du eine alte Welt vollständig ersetzen, entferne im Ordner `/saves/Worlds/` auch die alte `.wld`-Datei sowie die zugehörigen `.bak`-Sicherungsdateien. So kommt es später nicht zu Verwechslungen.
::::

:::: info Hinweis
Existiert der Ordner `/saves/Worlds/` noch nicht, starte den Server einmal, damit die Ordnerstruktur angelegt wird. Stoppe den Server anschließend wieder, bevor du die Datei hochlädst.
::::

:::: warning tModLoader
`.twld`-Dateien gehören zu tModLoader und werden von einem normalen Terraria-Server nicht verwendet. Eine tModLoader-Welt gehört auf einen tModLoader-Server: [Savegame hinzufügen (tModLoader)](../terraria-tmodloader/savegame-hinzufuegen.md).
::::

:::: tip Tipp
Erstelle vor dem Hochladen ein [Backup](backup-erstellen.md) deiner bisherigen Server-Welt, falls du später zurückwechseln möchtest.
::::
