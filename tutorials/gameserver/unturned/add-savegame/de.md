---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem Unturned Server hinzu"
description: "Savegame auf einem Unturned Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["unturned"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 5
related: ["gameserver/unturned/add-admin", "gameserver/unturned/add-mods", "gameserver/unturned/create-backup", "gameserver/unturned/download-savegame"]
---

Ein Unturned-Spielstand ist kein einzelnes File, sondern besteht aus den Ordnern `Level/` (die Welt) und `Players/` (die Charaktere) innerhalb Deines Server-Ordners unter `/Servers/`. Einen Weltnamen musst Du dabei nirgends eintragen – der Ordner unter `Level/` heißt immer wie die Karte, auf der der Spielstand entstanden ist.

> [!TIP]
> Erstelle vor dem Hochladen ein [Backup](/tutorials/gameserver/unturned/create-backup) Deines bisherigen Spielstands, falls Du später zurückwechseln möchtest.

## Aufbau eines Spielstands

```text
/Servers/<ServerID>/
        ├── Level/<Kartenname>/   ← Bauten, Fahrzeuge, Objekte
        └── Players/              ← Charaktere, je Spieler ein Unterordner
```

> [!NOTE]
> **Welcher Ordner ist meiner?**
>
> `<ServerID>` ist der Ordnername unter `/Servers/`. Er stammt aus dem Startparameter Deines Servers – in der Regel liegt dort genau ein Ordner.

## Savegame hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Solange der Server läuft, schreibt er selbst in die Spielstandsdateien und würde Deine Dateien beim Beenden überschreiben.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in den Ordner Deines Servers:

   ```text
   /Servers/<ServerID>/
   ```

   > [!NOTE]
   > Existiert der Ordner noch nicht, starte den Server einmal, damit die Ordnerstruktur angelegt wird. Stoppe ihn anschließend wieder, bevor Du die Dateien hochlädst.

4. **Alten Spielstand entfernen**\
   Lösche die vorhandenen Ordner `Level/` und `Players/`, falls Du den bisherigen Spielstand vollständig ersetzen möchtest. Bleiben Reste der alten Welt liegen, kann es zu Mischständen kommen.

5. **Ordner hochladen**\
   Lade die Ordner `Level/` und `Players/` Deines Spielstands vollständig in dieses Verzeichnis hoch.

6. **Karte eintragen**\
   Öffne die Datei

   ```text
   /Servers/<ServerID>/Server/Commands.dat
   ```

   und trage dort die Karte ein, die zum Ordnernamen unter `Level/` passt – eine Anweisung pro Zeile:

   ```text
   Map Washington
   ```

7. **Server starten**\
   Speichere alle Änderungen und starte Deinen Server. Beim Start wird jetzt Dein hochgeladener Spielstand geladen.

> [!CAUTION]
> **Karte und Ordnername müssen zusammenpassen**
>
> Heißt der Ordner unter `Level/` zum Beispiel `Elver`, muss in der `Commands.dat` auch `Map Elver` stehen. Stimmt der Name nicht überein, erzeugt der Server eine neue, leere Welt – Dein hochgeladener Spielstand wird dann ignoriert.

> [!WARNING]
> **Workshop-Karten zusätzlich eintragen**
>
> Stammt Dein Spielstand von einer Workshop-Karte (z.B. Elver, Carpat oder Hawaii), reicht der `Map`-Eintrag nicht aus. Die Karte muss zusätzlich in der Datei `WorkshopDownloadConfig.json` hinterlegt sein, damit Dein Server sie herunterlädt. Wie das geht, steht unter [Mods hinzufügen](/tutorials/gameserver/unturned/add-mods).

## Charaktere übernehmen

Im Ordner `Players/` liegen die Spielerstände. Möchtest Du nur die Welt übernehmen und alle Spieler frisch starten lassen, lädst Du ausschließlich `Level/` hoch und lässt `Players/` weg. Umgekehrt bleiben die Charaktere erhalten, wenn Du `Players/` unangetastet lässt und nur `Level/` austauschst.

> [!CAUTION]
> **Einzelspieler-Welten**
>
> Ob sich eine Einzelspieler-Welt aus dem `Worlds`-Ordner Deiner lokalen Unturned-Installation auf einem Dedicated Server verwenden lässt, ist **nicht dokumentiert**. Es gibt dafür kein offizielles Verfahren. Arbeite in jedem Fall nur mit Kopien und erstelle vorher ein Backup – ein Versuch kann fehlschlagen oder zu unerwartetem Verhalten führen. Zuverlässig funktioniert der Wechsel zwischen zwei Spielständen, die beide von einem Dedicated Server stammen.

> [!NOTE]
> Unturned speichert nicht automatisch. Damit Dein Fortschritt erhalten bleibt, gib vor jedem Stoppen `save` in der Konsole ein oder fahre den Server mit `shutdown` herunter.
