---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Arma 3 Servers herunter"
description: "Savegame von einem Arma 3 Server herunterladen"
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
short_title: "Savegame herunterladen"
sort: 4
related: ["gameserver/arma-3/add-savegame", "gameserver/arma-3/create-backup", "gameserver/arma-3/join-server", "gameserver/arma-3/kick-ban-players"]
---

Läuft auf Deinem Server eine persistente Mission wie Antistasi, Vindicta, KP Liberation oder Wasteland, kannst Du deren Fortschritt jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen.

> [!NOTE]
> **Kein Savegame vorhanden?**
>
> Ein Arma-3-Server speichert von sich aus keinen Weltstand. Gespeichert wird nur, wenn die Mission das selbst übernimmt. Läuft bei Dir eine Vanilla-Mission, existiert keine Spielstandsdatei.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Datei herunterlädst. Persistente Missionen speichern im laufenden Betrieb – lädst Du währenddessen herunter, kann der Spielstand unvollständig sein.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Profilverzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis. Der Ordner darin trägt den Profilnamen Deines Servers:

   ```text
   /serverprofile/home/
   ```

4. **Datei herunterladen**\
   Lade aus dem Profilordner die Datei mit der Endung `.vars.Arma3Profile` auf Deinen PC herunter:

   ```text
   /serverprofile/home/<Profilname>/<Profilname>.vars.Arma3Profile
   ```

5. **Server starten**\
   Starte Deinen Server wieder.

> [!TIP]
> **Mission mitsichern**
>
> Ein Spielstand ist ohne die passende Mission nutzlos. Lade deshalb zusätzlich die verwendete `.pbo`-Datei aus dem Ordner `/mpmissions` herunter.

> [!TIP]
> **Konfiguration mitsichern**
>
> Möchtest Du auch Deine Servereinstellungen sichern, lade zusätzlich die Datei `/server.cfg` herunter.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/arma-3/add-savegame). Beachte dabei, dass die Datei zum Profilnamen des Zielservers passen muss.

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für vollständige Sicherungen Deines Servers kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/arma-3/create-backup).
