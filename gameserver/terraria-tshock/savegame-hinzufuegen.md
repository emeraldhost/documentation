---
description: Savegame auf einem Terraria tShock Server hinzufügen
---

# So fügst du ein Savegame zu deinem Terraria tShock Server hinzu

Du kannst eine bestehende Welt auf deinen Server übertragen, um dort weiterzuspielen. tShock nutzt das ganz normale Terraria-Weltformat – eine Welt besteht also aus **einer einzigen `.wld`-Datei**. Du kannst dafür eine Einzelspieler-Welt, die Welt eines normalen Terraria-Servers oder die Welt eines anderen tShock-Servers verwenden.

:::: tip Tipp
Erstelle vor dem Hochladen ein [Backup](backup-erstellen.md) deiner bisherigen Server-Welt, falls du später zurückwechseln möchtest.
::::

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
   Suche die gewünschte `.wld`-Datei heraus, z.B. `MeineWelt.wld`. Verwende **keine Leerzeichen** im Dateinamen, sondern Unterstriche, z.B. `Meine_Welt.wld`.

   :::: danger Wichtig
   Ein Leerzeichen im Weltnamen zerreißt den Startbefehl deines Servers – die Welt wird dann nicht geladen. Benenne die Datei vor dem Hochladen um, falls nötig.
   ::::

## Savegame hochladen und anwenden

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Welt hochladen</b><br>
   Lade die `.wld`-Datei direkt in das **Hauptverzeichnis** deines Servers hoch:

   ```
   /
   ```

   :::: info Hinweis
   Bei tShock liegt die Welt nicht in einem Unterordner, sondern direkt im Hauptverzeichnis – dort, wo auch der Ordner `tshock` liegt.
   ::::

4. <b>Weltnamen setzen</b><br>
   Öffne die Verwaltung, navigiere zu den **Einstellungen** und trage im Feld **Welt Name** den Dateinamen deiner Welt ein – **ohne** die Endung `.wld` (z.B. `Meine_Welt` für `Meine_Welt.wld`).

5. <b>Server starten</b><br>
   Speichere die Einstellungen und starte deinen Server. Beim Start wird jetzt deine hochgeladene Welt geladen.

:::: danger Wichtig
Der Weltname wird **exakt** so gesucht, wie du ihn einträgst – Groß- und Kleinschreibung inklusive. Findet der Server keine passende `.wld`-Datei, erzeugt er beim Start automatisch eine **neue, leere Welt** mit diesem Namen. Heißt deine Datei `MeineWelt.wld` und du trägst `meinewelt` ein, landest du also in einer frisch generierten Welt statt in deiner hochgeladenen.
::::

:::: warning Welt wechseln
Möchtest du eine alte Welt vollständig ersetzen, entferne die alte `.wld`-Datei aus dem Hauptverzeichnis. So kommt es später nicht zu Verwechslungen. Sichere sie vorher, falls du zurückwechseln möchtest: [Savegame herunterladen](savegame-herunterladen.md).
::::

:::: info Server Side Characters
Eine `.wld`-Datei enthält nur die Welt. Sind die Server Side Characters aktiv (Wert `Enabled` in `/tshock/sscconfig.json`), liegen Inventar und Fortschritt der Spieler in `/tshock/tshock.sqlite`. Möchtest du auch die Charaktere von einem anderen tShock-Server übernehmen, überträgst du zusätzlich diese Datei – dabei wandern allerdings auch Accounts, Gruppen und Banns mit.
::::

:::: warning tModLoader
`.twld`-Dateien gehören zu tModLoader und werden von einem tShock-Server nicht verwendet. Eine tModLoader-Welt gehört auf einen tModLoader-Server: [Savegame hinzufügen (tModLoader)](../terraria-tmodloader/savegame-hinzufuegen.md).
::::
