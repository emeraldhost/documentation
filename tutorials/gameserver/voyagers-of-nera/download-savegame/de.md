---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Voyagers of Nera Servers herunter"
description: "Savegame von einem Voyagers of Nera Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["voyagers-of-nera"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 2
related: ["gameserver/voyagers-of-nera/add-savegame", "gameserver/voyagers-of-nera/create-backup", "gameserver/voyagers-of-nera/join-server"]
---

Du kannst den Spielstand Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen.

Ein Spielstand ist bei Voyagers of Nera immer ein **kompletter Ordner**, der nach der Server-ID benannt ist. Diese ID besteht aus einer zufälligen Zeichenfolge, die Dein Server beim ersten Start selbst erzeugt.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Der Server speichert in regelmäßigen Abständen automatisch – lädst Du währenddessen herunter, kann der Spielstand unvollständig sein.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /BoatGame/Saved/PersistedData/
   ```

4. **Spielstand-Ordner herunterladen**\
   Lade den kompletten Ordner mit der zufälligen Zeichenfolge im Namen – Deine Server-ID – mit allen enthaltenen Dateien auf Deinen PC herunter.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!NOTE]
> **Welcher Ordner ist der richtige?**
>
> Neben Deinem Spielstand liegt im selben Verzeichnis der Ordner `CustomConfig`. Darin stehen Deine Servereinstellungen, es ist **kein** Spielstand. Der Ordner mit der zufälligen Zeichenfolge ist Deine Welt.

> [!WARNING]
> Ein Spielstand ist immer der komplette Ordner. Lade ihn stets vollständig herunter – einzelne Dateien daraus ergeben keinen nutzbaren Spielstand.

> [!TIP]
> **Konfiguration mitsichern**
>
> Möchtest Du auch Deine Servereinstellungen sichern, lade zusätzlich folgenden Ordner herunter:
>
> ```text
> /BoatGame/Saved/PersistedData/CustomConfig/
> ```

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/voyagers-of-nera/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/voyagers-of-nera/create-backup).
