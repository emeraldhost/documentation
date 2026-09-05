---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem Don’t Starve Together Server hinzu"
description: "Savegame auf einem Don’t Starve Together Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["dont-starve-together"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 5
related: ["gameserver/dont-starve-together/add-admin", "gameserver/dont-starve-together/add-mods", "gameserver/dont-starve-together/create-backup", "gameserver/dont-starve-together/download-savegame"]
---

Du kannst eine lokal gespielte Welt auf Deinen Server übertragen, um dort mit dem bestehenden Spielstand weiterzuspielen.

## Cluster-Ordner auf dem Server finden

> [!NOTE]
> Der Name des Cluster-Ordners ist nicht vom Spiel vorgegeben, sondern wird beim Serverstart festgelegt und kann je nach Server unterschiedlich lauten. Suche per [SFTP](/tutorials/gameserver/establish-sftp-connection) oder im Datei-Browser nach der Datei `cluster.ini` – der Ordner, in dem sie liegt, ist Dein Cluster-Ordner.

Der Cluster-Ordner ist so aufgebaut:

```text
<Cluster-Ordner>/
├── Master/            # Shard der Oberwelt (enthält den Ordner save)
├── Caves/             # Shard der Höhlen (nur wenn Höhlen aktiv sind)
├── cluster.ini
├── cluster_token.txt
├── adminlist.txt      # nur vorhanden, wenn angelegt
├── whitelist.txt      # nur vorhanden, wenn angelegt
└── blocklist.txt      # nur vorhanden, wenn angelegt
```

Der eigentliche Spielstand liegt in den Ordnern `Master/save/` (Oberwelt) und `Caves/save/` (Höhlen). Es handelt sich um Ordner, nicht um eine einzelne Datei.

## Lokales Savegame finden

1. **Datenordner öffnen**\
   Starte Don’t Starve Together und klicke im Hauptmenü unten links auf **Data**. Der Ordner mit Deinen lokalen Welten wird geöffnet. Alternativ erreichst Du ihn auf dem PC über diesen Pfad:

   ```text
   C:\Users\<DeinBenutzer>\Documents\Klei\DoNotStarveTogether\<Zahlenordner>\
   ```

2. **Richtige Welt bestimmen**\
   Jede lokale Welt liegt in einem eigenen Ordner `Cluster_1`, `Cluster_2` und so weiter. Öffne die darin liegende `cluster.ini` und prüfe den Wert `cluster_name` – so erkennst Du, welcher Ordner zu welcher Welt gehört.

3. **Spielstand-Ordner öffnen**\
   In Deinem Welt-Ordner findest Du dieselbe Struktur wie auf dem Server, also `Master\` und – falls Du mit Höhlen gespielt hast – `Caves\`. Den Spielstand enthalten die Unterordner `Master\save\` und `Caves\save\`.

## Savegame hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server oder nutze den Datei-Browser in der Verwaltung.

3. **Alten Spielstand entfernen**\
   Wechsle in den Ordner `<Cluster-Ordner>/Master/save/` und lösche den kompletten Inhalt des Ordners.

4. **Neuen Spielstand hochladen**\
   Lade den gesamten Inhalt Deines lokalen Ordners `Master\save\` in das jetzt leere Verzeichnis `<Cluster-Ordner>/Master/save/` hoch.

5. **Höhlen übertragen**\
   Sind auf Deinem Server die Höhlen aktiv, wiederhole die Schritte 3 und 4 für den Ordner `<Cluster-Ordner>/Caves/save/` mit dem Inhalt Deines lokalen Ordners `Caves\save\`.

6. **Server starten**\
   Starte Deinen Server wieder.

> [!WARNING]
> Übertrage ausschließlich den Inhalt der `save`-Ordner. Ersetzt Du zusätzlich Dateien wie `cluster.ini`, `server.ini` oder `cluster_token.txt`, überschreibst Du die Ports und das Cluster Token Deines Servers und er lässt sich nicht mehr erreichen.

> [!IMPORTANT]
> Solange im `save`-Ordner ein Spielstand liegt, generiert der Server keine neue Welt. Umgekehrt bedeutet das: Ein Server, der bereits gelaufen ist, hat dort einen Spielstand liegen, der vor dem Hochladen entfernt werden muss.

> [!TIP]
> Erstelle vor dem Hochladen ein [Backup](/tutorials/gameserver/dont-starve-together/create-backup) Deines bisherigen Server-Spielstands, falls Du später zurückwechseln möchtest.

> [!NOTE]
> **Mods**
>
> Hat Deine lokale Welt Mods verwendet, musst Du diese auch auf dem Server einrichten. Wie das geht, erfährst Du unter [Mods hinzufügen](/tutorials/gameserver/dont-starve-together/add-mods).
