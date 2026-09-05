---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem Frozen Flame Server hinzu"
description: "Savegame auf einem Frozen Flame Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["frozen-flame"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 4
related: ["gameserver/frozen-flame/add-admin", "gameserver/frozen-flame/create-backup", "gameserver/frozen-flame/download-savegame", "gameserver/frozen-flame/join-server"]
---

Der komplette Spielstand eines Frozen Flame Servers liegt im Ordner `SaveGames`. Du überträgst ihn also immer als **ganzen Ordner**, zum Beispiel wenn Du von einem anderen Server umziehst oder einen älteren Stand zurückspielst.

> [!NOTE]
> Einen Welt- oder Spielstandnamen trägst Du nirgends ein – Frozen Flame kennt keine solche Einstellung. Der Servername hat mit dem Spielstand nichts zu tun.

## Savegame hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Solange der Server läuft, schreibt er laufend in den Spielstand.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /FrozenFlame/Saved/
   ```

4. **Bisherigen Spielstand sichern**\
   Benenne den vorhandenen Ordner `SaveGames` um, zum Beispiel in `SaveGames_alt`, oder lade ihn vorher herunter.

   > [!WARNING]
   > Löschst Du den Ordner, ist der bisherige Spielstand Deines Servers weg. Erstelle vorher ein [Backup](/tutorials/gameserver/frozen-flame/create-backup) oder lade den bisherigen Stand herunter, falls Du zurückwechseln möchtest.

5. **Neuen Spielstand hochladen**\
   Lade Deinen Ordner `SaveGames` mit seinem kompletten Inhalt hoch, sodass er wieder unter folgendem Pfad liegt:

   ```text
   /FrozenFlame/Saved/SaveGames/
   ```

6. **Server starten**\
   Starte Deinen Server. Der neue Spielstand wird nun geladen.

> [!WARNING]
> Ein Spielstand gehört immer zu dem Spielmodus, in dem er entstanden ist. Übertrage deshalb nur Spielstände zwischen Servern, die denselben Spielmodus laden – also **Cataclysm** auf **Cataclysm** beziehungsweise **Campaign** auf **Campaign**.

> [!TIP]
> Am zuverlässigsten funktioniert der Wechsel zwischen zwei Spielständen, die beide von einem Dedicated Server stammen – zum Beispiel beim Umzug auf einen anderen Server. Wie Du Deinen bisherigen Stand sicherst, steht unter [Savegame herunterladen](/tutorials/gameserver/frozen-flame/download-savegame).

## Einzelspieler-Spielstand übertragen

> [!IMPORTANT]
> Es gibt **kein dokumentiertes Verfahren**, einen Einzelspieler- oder Local-Coop-Spielstand auf einen Dedicated Server zu übertragen. Die Entwickler beschreiben für das lokale Spiel lediglich, wo die Konfigurationsdatei liegt – ein Weg, den lokalen Spielstand auf einen Server zu übernehmen, wird nirgends genannt. Arbeite deshalb ausschließlich mit Spielständen, die von einem Frozen Flame Server stammen.
