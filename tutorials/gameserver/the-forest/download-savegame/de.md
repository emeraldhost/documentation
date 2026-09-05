---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines The Forest Servers herunter"
description: "Savegame von einem The Forest Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["the-forest"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 3
related: ["gameserver/the-forest/add-savegame", "gameserver/the-forest/create-backup", "gameserver/the-forest/join-server", "gameserver/the-forest/kick-ban-players"]
---

Du kannst den Spielstand Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. The Forest speichert in regelmäßigen Abständen automatisch – lädst Du währenddessen herunter, kann der Spielstand unvollständig sein.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /TheForestDedicatedServer_Data/Multiplayer/
   ```

4. **Slot-Ordner herunterladen**\
   Lade den kompletten Ordner Deines Spielstands – `Slot1` bis `Slot5` – mit allen enthaltenen Dateien auf Deinen PC herunter.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!NOTE]
> **Welcher Slot ist der richtige?**
>
> Welchen Slot Dein Server verwendet, steht in der Datei `/TheForestDedicatedServer_Data/forest/config/config.cfg` beim Wert `slot`. Steht dort `slot 1`, ist `Slot1` Dein aktueller Spielstand.

> [!WARNING]
> Ein Spielstand ist immer der komplette `Slot#`-Ordner. Lade ihn stets vollständig herunter – einzelne Dateien daraus ergeben keinen nutzbaren Spielstand.

> [!TIP]
> **Konfiguration mitsichern**
>
> Möchtest Du auch Deine Servereinstellungen sichern, lade zusätzlich folgende Datei herunter:
>
> ```text
> /TheForestDedicatedServer_Data/forest/config/config.cfg
> ```

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/the-forest/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/the-forest/create-backup).
