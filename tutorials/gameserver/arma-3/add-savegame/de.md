---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem Arma 3 Server hinzu"
description: "Savegame auf einem Arma 3 Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["arma-3"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 5
related: ["gameserver/arma-3/add-admin", "gameserver/arma-3/add-mods", "gameserver/arma-3/create-backup", "gameserver/arma-3/download-savegame"]
---

Ein Arma-3-Server speichert von sich aus **keinen Weltstand**. Ob es überhaupt einen Spielstand gibt, entscheidet allein die Mission: Persistente Missionen und Kampagnen wie Antistasi, Vindicta, KP Liberation oder Wasteland bringen eine eigene Speicherfunktion mit und legen ihren Fortschritt im **Serverprofil** ab. Vanilla-Missionen speichern gar nichts.

Der Spielstand ist dabei immer eine einzelne Datei mit der Endung `.vars.Arma3Profile`, benannt nach dem Profil des Servers – zum Beispiel `server.vars.Arma3Profile`.

> [!CAUTION]
> **persistent ist kein Savegame**
>
> Der Wert `persistent` in der `server.cfg` speichert nichts. Er sorgt lediglich dafür, dass die Mission weiterläuft, wenn alle Spieler den Server verlassen. Anleitungen, die `persistent = 1;` als Speicherfunktion beschreiben, sind falsch.

> [!TIP]
> Erstelle vor dem Hochladen ein [Backup](/tutorials/gameserver/arma-3/create-backup) Deines Servers, falls Du später zurückwechseln möchtest.

## Lokalen Spielstand finden

1. **Profilordner öffnen**\
   Drücke `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```text
   %userprofile%\Documents\Arma 3
   ```

2. **Datei auswählen**\
   Suche darin die Datei mit der Endung `.vars.Arma3Profile`. Der Teil davor ist Dein Profilname, zum Beispiel `Max.vars.Arma3Profile`.

   > [!NOTE]
   > Verwendest Du ein zusätzliches Profil, liegt die Datei stattdessen unter `%userprofile%\Documents\Arma 3 - Other Profiles\<Profilname>\`.

## Profilnamen Deines Servers ermitteln

Dein Server speichert unter dem Profilnamen, den er beim Start verwendet. Diesen Namen brauchst Du, damit die hochgeladene Datei auch geladen wird.

1. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

2. **Profilverzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /serverprofile/home/
   ```

3. **Profilnamen ablesen**\
   Der Ordner, der hier liegt, trägt den Profilnamen Deines Servers. Darin findest Du die zugehörige Datei:

   ```text
   /serverprofile/home/<Profilname>/<Profilname>.vars.Arma3Profile
   ```

   > [!NOTE]
   > Existiert der Ordner noch nicht, starte Deinen Server einmal mit der gewünschten Mission und stoppe ihn anschließend wieder – dann wird das Profil angelegt.

## Savegame hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Solange der Server läuft, schreibt er selbst in die Profildatei.

2. **Datei umbenennen**\
   Benenne Deine lokale Datei auf den Profilnamen Deines Servers um. Heißt der Profilordner `server`, muss die Datei `server.vars.Arma3Profile` heißen.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Datei hochladen**\
   Lade die Datei in den Profilordner hoch und überschreibe die vorhandene Datei:

   ```text
   /serverprofile/home/<Profilname>/
   ```

5. **Mission bereitstellen**\
   Stelle sicher, dass auf dem Server dieselbe Mission läuft, mit der der Spielstand erstellt wurde. Missionen liegen als `.pbo`-Datei im Ordner `/mpmissions`.

6. **Server starten**\
   Starte Deinen Server und lade den Spielstand über die Ladefunktion der Mission – bei den meisten persistenten Missionen geschieht das direkt beim Missionsstart über ein Menü.

> [!WARNING]
> **Spielstand aus dem Einzelspieler**
>
> Einzelspieler-Spielstände und Dedicated-Server-Spielstände werden innerhalb derselben Datei unter unterschiedlichen Variablennamen abgelegt. Ein Einzelspieler-Spielstand wird deshalb auf dem Server unter Umständen nicht als ladbar erkannt.

> [!WARNING]
> Wie ein Spielstand geladen wird, legt die jeweilige Mission fest. Prüfe im Zweifel die Dokumentation der Mission, die Du einsetzt – eine einheitliche Ladefunktion gibt es in Arma 3 nicht.

## Spielstand zurücksetzen

Möchtest Du komplett neu anfangen, löschst Du die Datei `<Profilname>.vars.Arma3Profile` bei gestopptem Server. Einen anderen Weg, den Fortschritt einer persistenten Mission zurückzusetzen, gibt es nicht.

> [!IMPORTANT]
> Lade Dir die Datei vor dem Löschen herunter – siehe [Savegame herunterladen](/tutorials/gameserver/arma-3/download-savegame). Einmal gelöscht, lässt sich der Fortschritt nicht wiederherstellen.
