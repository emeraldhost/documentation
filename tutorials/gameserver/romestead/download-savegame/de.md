---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Romestead Servers herunter"
description: "Savegame von einem Romestead Server herunterladen"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 2
related: ["gameserver/romestead/create-backup", "gameserver/romestead/join-server", "gameserver/romestead/kick-ban-players"]
---

Du kannst die Welt Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um sie auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Romestead speichert alle sechs Minuten automatisch – lädst Du mitten in einen Speichervorgang hinein herunter, kann der Spielstand unvollständig sein.

1. **Welt speichern**\
   Führe in der **Konsole** Deines Servers folgenden Befehl aus, damit der aktuelle Stand vollständig auf die Festplatte geschrieben wird:

   ```text
   save
   ```

   > [!NOTE]
   > Der Server ist während des Speichervorgangs kurz eingefroren. Warte die Meldung in der Konsole ab, bevor Du weitermachst.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Verzeichnis öffnen**\
   Wechsle in das Hauptverzeichnis Deines Servers – dort, wo auch die `config.json` liegt.

5. **Welt herunterladen**\
   Lade den kompletten Ordner mit allen enthaltenen Dateien und Unterordnern auf Deinen PC herunter:

   ```text
   /saved_worlds/
   ```

6. **Server starten**\
   Starte Deinen Server wieder.

> [!NOTE]
> **Welche Welt lädt mein Server?**
>
> Welche Welt beim Start geladen wird, steht in der `config.json` im Hauptverzeichnis Deines Servers beim Wert `AutoStartWorldName`.

> [!WARNING]
> Lade den Ordner immer komplett herunter. Einzelne Dateien daraus ergeben keinen nutzbaren Spielstand.

> [!TIP]
> **Konfiguration mitsichern**
>
> Möchtest Du auch Deine Servereinstellungen sichern, lade zusätzlich folgende Datei herunter:
>
> ```text
> /config.json
> ```
>
> Dort stehen unter anderem der Name der automatisch geladenen Welt und die weiteren Grundeinstellungen Deines Servers.

> [!NOTE]
> **Spielstand aus dem Einzelspieler**
>
> Für Welten aus dem lokalen Einzelspieler-Modus gibt es keinen dokumentierten Weg auf einen dedizierten Server: Weder der Speicherort der lokalen Welten noch ein Übertragungsverfahren sind offiziell beschrieben. Lege Deine Welt daher direkt auf dem Server an.

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/romestead/create-backup).
