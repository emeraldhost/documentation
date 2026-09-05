---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Abiotic Factor Servers herunter"
description: "Savegame von einem Abiotic Factor Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["abiotic-factor"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 3
related: ["gameserver/abiotic-factor/add-savegame", "gameserver/abiotic-factor/create-backup", "gameserver/abiotic-factor/join-server", "gameserver/abiotic-factor/kick-ban-players"]
---

Du kannst den Spielstand Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Der Server schreibt im laufenden Betrieb in die Weltdateien – lädst Du währenddessen herunter, kann der Spielstand unvollständig sein.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /AbioticFactor/Saved/SaveGames/Server/Worlds/
   ```

4. **Weltordner herunterladen**\
   Lade den kompletten Ordner Deiner Welt mit allen enthaltenen Dateien auf Deinen PC herunter. Standardmäßig heißt der Ordner `Cascade`.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!WARNING]
> Ein Spielstand ist immer der komplette Weltordner. Lade ihn stets vollständig herunter – einzelne Dateien daraus ergeben keinen nutzbaren Spielstand.

> [!NOTE]
> **Welcher Ordner ist der richtige?**
>
> Liegen mehrere Weltordner nebeneinander, ist derjenige aktuell, der über den Weltnamen Deines Servers geladen wird – standardmäßig `Cascade`. Im Zweifel hilft der Zeitstempel der Dateien: Der zuletzt geänderte Ordner ist der aktive Spielstand.

> [!TIP]
> **Einstellungen mitsichern**
>
> Die Gameplay- und Sandbox-Einstellungen Deiner Welt stehen in der Datei `SandboxSettings.ini` im Weltordner – sie wird also zusammen mit dem Ordner heruntergeladen. Über den Startparameter `-SandboxIniPath=` kann die Datei an einem anderen Ort liegen, zum Beispiel direkt unter `/AbioticFactor/Saved/`.
>
> Deine Adminliste liegt außerhalb des Weltordners und muss separat gesichert werden:
>
> ```text
> /AbioticFactor/Saved/SaveGames/Server/Admin.ini
> ```

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/abiotic-factor/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/abiotic-factor/create-backup).
