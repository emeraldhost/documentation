---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem Echoes of Elysium Server hinzu"
description: "Savegame auf einem Echoes of Elysium Server hinzufügen"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["echoes-of-elysium"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 3
related: ["gameserver/echoes-of-elysium/create-backup", "gameserver/echoes-of-elysium/download-savegame", "gameserver/echoes-of-elysium/join-server"]
---

Der komplette Spielstand eines Echoes of Elysium Servers liegt in einem einzigen Verzeichnis namens `world`. Dort speichert der Server Deine Welt mit allem, was ihr darin aufgebaut habt.

> [!NOTE]
> Es gibt **keinen Weltnamen**, den Du irgendwo eintragen müsstest. Welche Welt geladen wird, ergibt sich ausschließlich aus dem Inhalt des Verzeichnisses `world`. Ein Weltwechsel bedeutet also immer: den Inhalt dieses Verzeichnisses austauschen.

> [!TIP]
> **Woher bekommst Du einen Spielstand?**
>
> Diese Anleitung ist für Welten gedacht, die von einem Echoes of Elysium Server stammen – zum Beispiel beim Umzug auf einen anderen Server oder beim Zurückspielen einer eigenen Sicherung. Wie Du den Spielstand von einem Server herunterlädst, liest Du unter [Savegame herunterladen](/tutorials/gameserver/echoes-of-elysium/download-savegame).

## Savegame hochladen

1. **Backup erstellen**\
   Sichere den aktuellen Stand Deines Servers, bevor Du etwas überschreibst: [Backup erstellen](/tutorials/gameserver/echoes-of-elysium/create-backup).

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Solange der Server läuft, schreibt er selbst in die Weltdateien und würde Deine hochgeladenen Dateien überschreiben.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /world/
   ```

   > [!NOTE]
   > Das Verzeichnis `world` liegt im Hauptverzeichnis Deines Servers, der vollständige Pfad lautet also `/home/container/world/`. Existiert es noch nicht, starte den Server einmal, damit die Ordnerstruktur angelegt wird, und stoppe ihn danach wieder.

5. **Alte Weltdaten entfernen**\
   Lösche den vorhandenen Inhalt des Verzeichnisses `world`. Bleiben alte Dateien liegen, können sie mit Deinem hochgeladenen Stand vermischt werden.

   > [!WARNING]
   > Damit ist die bisherige Welt Deines Servers weg. Hast Du Schritt 1 übersprungen, hole das Backup jetzt nach.

6. **Neue Weltdaten hochladen**\
   Lade den **Inhalt** Deines Spielstands in das Verzeichnis `/world/` hoch – also die Dateien und Unterordner selbst, nicht noch einmal einen Ordner `world` darin.

7. **Server starten**\
   Starte Deinen Server. Beim Start wird jetzt Dein hochgeladener Spielstand geladen.

> [!CAUTION]
> **Verzeichnis nicht umbenennen**
>
> Behalte den Namen `world` bei. Bei jedem Start werden die Werte aus den Feldern der **Verwaltung** in die Serverkonfiguration `config.json` geschrieben – darunter auch das Weltverzeichnis. Trägst Du dort von Hand einen anderen Ordner ein, geht diese Änderung beim nächsten Start wieder verloren.

> [!TIP]
> **Welten parallel aufbewahren**
>
> Möchtest Du zwischen mehreren Welten wechseln, lade die jeweils andere Welt vorher auf Deinen PC herunter. Zusätzliche Ordner neben `world` auf dem Server werden vom Spiel nicht geladen.
