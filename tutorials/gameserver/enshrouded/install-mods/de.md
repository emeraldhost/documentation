---
slug: "mods-installieren"
language: "de"
title: "So installierst Du Mods auf Deinem Enshrouded Server"
description: "Den Enshrouded Mod Loader (EML) aktivieren und Mods auf einem Enshrouded Server installieren"
tags: []
date: "2026-11-04"
visibility: "public"
cta: "gameserver"
product_keys: ["enshrouded"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods installieren"
sort: 15
related: ["gameserver/enshrouded/control-automatic-updates", "gameserver/enshrouded/create-backup", "gameserver/enshrouded/join-server", "gameserver/enshrouded/read-server-log"]
---

Enshrouded bietet offiziell noch keine Mod-Unterstützung. Mit dem **Enshrouded Mod Loader (EML)** kannst Du trotzdem Mods auf Deinem Server nutzen. Den Mod Loader aktivierst Du in der Verwaltung im **Config-Editor**, danach lädst Du Deine Mods einfach in den Ordner `mods` hoch.

> [!IMPORTANT]
> Der Enshrouded Mod Loader wurde von der Community entwickelt und ist kein offizielles Werkzeug von Keen Games. Enshrouded selbst unterstützt Mods offiziell noch nicht. Für Fehler, die durch Mods entstehen, gibt es deshalb keine Garantie.

> [!WARNING]
> Nach einem Enshrouded Update können Mods und der Mod Loader nicht mehr funktionieren, bis ihre Autoren sie angepasst haben. Startet Dein Server nach einem Update nicht mehr oder verhält er sich seltsam, prüfe zuerst, ob es für Deine Mods schon eine neue Version gibt.

## Vorbereitung

- **Backup erstellen**\
  Erstelle vor der Installation ein Backup Deines Servers, damit Du Deine Welt im Notfall wiederherstellen kannst: [Backup erstellen](/tutorials/gameserver/enshrouded/create-backup).

- **Server einmal starten**\
  Ist Dein Server ganz neu, starte ihn einmal ohne Mod Loader, damit alle Dateien und Deine Welt angelegt werden.

- **EML-kompatible Mods wählen**\
  Lade die gewünschten Mods herunter, z.B. von [Nexus Mods](https://www.nexusmods.com/games/enshrouded). Prüfe in der Beschreibung jeder Mod, dass sie für den Enshrouded Mod Loader (EML) gemacht ist und zu Deiner Enshrouded Version passt.

## Mod Loader aktivieren

1. **Server stoppen**\
   Stoppe Deinen Server in der Verwaltung.

2. **Config-Editor öffnen**\
   Navigiere in der Verwaltung zum **Config-Editor**.

3. **Mod Loader einschalten**\
   Aktiviere die Option **Enshrouded Mod Loader (EML)** und speichere die Einstellung.

4. **Server starten und wieder stoppen**\
   Starte Deinen Server einmal, damit der Mod Loader eingerichtet und der Ordner `mods` angelegt wird. Sobald der Server vollständig gestartet ist, stoppe ihn wieder.

## Mods hochladen

1. **Mod entpacken**\
   Entpacke die heruntergeladene `.zip`-Datei auf Deinem Computer. Darin findest Du einen Ordner mit dem Namen der Mod, der unter anderem eine Datei `mod.json` enthält.

2. **Mit dem Server verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server oder öffne in der Verwaltung den **Datei-Browser**.

3. **Ordner mods öffnen**\
   Öffne im Hauptverzeichnis Deines Servers den Ordner `mods`.

4. **Mod hochladen**\
   Lade den kompletten Mod-Ordner in den Ordner `mods` hoch. Am Ende muss die Struktur so aussehen:

   ```text
   mods/
   └── <Mod-Name>/
       └── mod.json
   ```

   **Beispiel 1 – eine Mod:** Du hast die Datei `MoreStackSize.zip` heruntergeladen. Nach dem Entpacken lädst Du den Ordner `MoreStackSize` hoch:

   ```text
   mods/
   └── MoreStackSize/
       └── mod.json
   ```

   **Beispiel 2 – mehrere Mods:** Nutzt Du zusätzlich die Mod `FasterCrafting`, liegt sie als eigener Ordner direkt daneben:

   ```text
   mods/
   ├── FasterCrafting/
   │   └── mod.json
   └── MoreStackSize/
       └── mod.json
   ```

   Die Namen in den Beispielen sind nur Platzhalter, bei Dir stehen dort die Ordnernamen Deiner Mods.

   Liegt die `mod.json` direkt in `mods` oder einen Ordner zu tief, wird die Mod nicht geladen.

5. **Server starten**\
   Starte Deinen Server. Der Mod Loader lädt jetzt alle Mods aus dem Ordner `mods`.

> [!TIP]
> Für weitere Mods wiederholst Du einfach die Schritte unter „Mods hochladen“. Jede Mod bekommt ihren eigenen Ordner in `mods`.

## Mods für Deine Mitspieler

Manche Mods müssen nicht nur auf dem Server, sondern auch bei Deinen Mitspielern installiert sein. Ob das nötig ist, steht in der Beschreibung der jeweiligen Mod. Sag Deinen Mitspielern in diesem Fall Bescheid, welche Mods und Versionen sie brauchen.

## Mod entfernen oder Mod Loader deaktivieren

- **Einzelne Mod entfernen**\
  Stoppe Deinen Server, lösche den Ordner der Mod in `mods` und starte den Server wieder.

- **Mod Loader deaktivieren**\
  Stoppe Deinen Server, deaktiviere im **Config-Editor** die Option **Enshrouded Mod Loader (EML)** und starte den Server wieder. Dein Server läuft dann wieder ohne Mods.

## Probleme nach einem Update

Funktionieren Deine Mods nach einem Enshrouded Update nicht mehr, gehst Du so vor:

1. **Mod Loader deaktivieren**\
   Deaktiviere den **Enshrouded Mod Loader (EML)** im **Config-Editor**, damit Dein Server wieder ohne Mods startet.

2. **Neue Versionen einspielen**\
   Prüfe auf den Seiten Deiner Mods, ob es schon eine an das Update angepasste Version gibt, und ersetze die alten Mod-Ordner in `mods` durch die neuen.

3. **Mod Loader wieder aktivieren**\
   Aktiviere den Mod Loader wieder und starte Deinen Server.

> [!TIP]
> Willst Du nicht von einem Update überrascht werden, kannst Du die automatischen Updates vorübergehend abschalten. Wie das geht und worauf Du dabei achten musst, erfährst Du unter [Automatische Updates steuern](/tutorials/gameserver/enshrouded/control-automatic-updates).

Startet Dein Server mit Mods nicht, findest Du den Grund meist im Server-Log, siehe [Server-Log auslesen](/tutorials/gameserver/enshrouded/read-server-log).
