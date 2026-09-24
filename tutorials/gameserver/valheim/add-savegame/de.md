---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem Valheim Server hinzu"
description: "Savegame auf einem Valheim Server hinzufügen"
tags: []
date: "2024-01-12"
visibility: "public"
updated: "2026-09-24"
cta: "gameserver"
product_keys: ["valheim"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 7
related: ["gameserver/valheim/install-bepinex", "gameserver/valheim/add-mods", "gameserver/valheim/change-branch", "gameserver/valheim/change-backup-settings"]
---

Du kannst einen lokalen Spielstand auf Deinen Server übertragen, um mit einer bestehenden Welt weiterzuspielen.

## Lokales Savegame finden

1. **Savegame-Ordner öffnen**\
   Drücke `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```text
   %userprofile%\AppData\LocalLow\IronGate\Valheim\worlds_local
   ```

2. **Weltordner identifizieren**\
   Seit Valheim 1.0 ist jede Welt ein eigener Ordner, der so heißt wie die Welt, zum Beispiel `MeineWelt`. Die Dateien darin gehören als Satz zusammen, deshalb überträgst Du immer den kompletten Ordner. Ordner mit `_backup_` im Namen sind Sicherungen Deiner Welt und nicht der aktuelle Stand.

> [!NOTE]
> Findest Du statt eines Ordners nur die zwei Dateien `<WeltName>.fwl` und `<WeltName>.db`, liegt die Welt noch im Format von vor Valheim 1.0 vor. Auch solche Welten kannst Du hochladen, siehe [Welten im alten Format hochladen](#welten-im-alten-format-hochladen).

## Savegame hochladen und anwenden

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und wechsle in folgendes Verzeichnis:

   ```text
   /.config/unity3d/IronGate/Valheim/worlds_local/
   ```

3. **Gleichnamige Welt umbenennen**\
   Liegt dort bereits ein Ordner mit demselben Namen wie Deine Welt, benenne ihn um (zum Beispiel von `MeineWelt` in `MeineWelt_alt`) oder lade ihn zuerst auf Deinen PC herunter und lösche ihn erst dann. Lade Deine Welt nie in einen bestehenden Weltordner hinein, sonst vermischen sich die Dateien zweier Spielstände.

4. **Weltordner hochladen**\
   Lade den kompletten Ordner Deiner Welt mit unverändertem Namen in das Verzeichnis `worlds_local` hoch. Anschließend liegt Deine Welt zum Beispiel unter:

   ```text
   /.config/unity3d/IronGate/Valheim/worlds_local/MeineWelt/
   ```

   > [!IMPORTANT]
   > Lade den Ordner direkt in `worlds_local` hoch und nicht in einen weiteren Unterordner, denn der Server sucht Welten nur eine Ordnerebene tief. Benenne keine Dateien im Ordner um und mische keine Dateien aus verschiedenen Ständen. Findet der Server keinen vollständigen Satz an Dateien, kann er die Welt nicht laden und löscht die unvollständigen Dateien beim Start.

5. **Welt-Namen setzen**\
   Öffne die Verwaltung, navigiere zu den **Einstellungen** und trage im Feld **Welt Name** exakt den Namen Deines Weltordners ein, im Beispiel also `MeineWelt`. Das Feld erlaubt höchstens 20 Zeichen.

6. **Server starten**\
   Speichere die Einstellungen und starte Deinen Server.

> [!WARNING]
> Falls der Ordner `worlds_local` nicht existiert, starte den Server einmal, damit die Ordnerstruktur automatisch erstellt wird. Stoppe den Server anschließend wieder, bevor Du die Dateien hochlädst.

> [!TIP]
> Lädt der Server statt Deiner Welt eine neue, leere Welt, hat er Deine Welt nicht gefunden, zum Beispiel wegen eines Tippfehlers im Feld **Welt Name** oder weil der Ordner nicht direkt in `worlds_local` liegt. Der Server hat dann unter dem eingetragenen Namen eine neue Welt angelegt. Stoppe den Server, lösche den neu angelegten Ordner und behebe den Fehler.

> [!TIP]
> Erstelle vor dem Hochladen ein [Backup](/tutorials/gameserver/valheim/create-backup) Deines bisherigen Server-Savegames, falls Du später zurückwechseln möchtest.

## Welten im alten Format hochladen

Welten, die seit Valheim 1.0 noch nicht geöffnet wurden, sowie Sicherungen aus der Zeit davor bestehen aus den zwei Dateien `<WeltName>.fwl` und `<WeltName>.db`. Auch solche Welten kannst Du auf Deinen Server übertragen. Gehe dabei wie oben beschrieben vor, mit folgenden Unterschieden:

- Lade statt eines Ordners die beiden Dateien `<WeltName>.fwl` und `<WeltName>.db` direkt in das Verzeichnis `worlds_local` hoch. Beide Dateien müssen aus demselben Stand stammen.
- Trage im Feld **Welt Name** den Namen der Dateien ohne Dateiendung ein, zum Beispiel `MeineWelt` für `MeineWelt.fwl` und `MeineWelt.db`.

Sobald der Server die Welt zum ersten Mal speichert, wandelt er sie automatisch in einen Weltordner im neuen Format um. Die ursprünglichen Dateien benennt er dabei in `<WeltName>_backup_<Zeitstempel>.fwl` und `.db` um, damit Dir der alte Stand als Sicherung erhalten bleibt.

> [!WARNING]
> Benenne einen bestehenden Weltordner mit demselben Namen auch hier vorher um oder entferne ihn, wie in Schritt 3 beschrieben. Liegen ein Weltordner und ein Dateipaar mit demselben Namen nebeneinander, lädt der Server nur den neueren Stand und legt den älteren automatisch als Backup ab. Das kann auch Deine gerade hochgeladene Welt sein.
