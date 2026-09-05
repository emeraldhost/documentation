---
slug: "welt-herunterladen"
language: "de"
title: "So lädst Du die Welt Deines Space Engineers Servers herunter"
description: "Welt von einem Space Engineers Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["space-engineers"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Welt herunterladen"
sort: 14
related: ["gameserver/space-engineers/change-server-name", "gameserver/space-engineers/configure-automatic-backups", "gameserver/space-engineers/enable-experimental-mode", "gameserver/space-engineers/enable-ingame-scripts"]
---

Du kannst die Welt Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung, zum Archivieren oder um sie auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Während der Server läuft, speichert er regelmäßig – Du würdest sonst eine unvollständige oder beschädigte Welt herunterladen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server oder nutze den Datei-Browser.

3. **Welt-Ordner öffnen**\
   Wechsle auf dem Server in folgenden Ordner:

   ```text
   Saves/World/
   ```

4. **Weltdaten herunterladen**\
   Lade den **kompletten Inhalt** dieses Ordners auf Deinen PC herunter – unter anderem `Sandbox.sbc`, `Sandbox_config.sbc` und die `.sbs`-Dateien. Lade immer alle Dateien herunter, einzelne Dateien allein ergeben keine lauffähige Welt.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!NOTE]
> Der Weltname ist auf Deinem Server fest auf **World** eingestellt und kann nicht geändert werden (sichtbar in den **Einstellungen**). Deine Welt liegt daher immer im Ordner `Saves/World/` – es gibt keinen weiteren Ordner, in dem Du suchen müsstest.

> [!TIP]
> **Welt wieder einspielen**
>
> Möchtest Du die Welt später wieder auf einen Server übertragen, folge der Anleitung [Welt hochladen](/tutorials/gameserver/space-engineers/upload-world).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für regelmäßige Sicherungen kannst Du die [automatischen Backups](/tutorials/gameserver/space-engineers/configure-automatic-backups) Deines Servers nutzen oder ein manuelles [Backup erstellen](/tutorials/gameserver/create-backup).
