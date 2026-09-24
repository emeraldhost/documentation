---
slug: "welt-zuruecksetzen"
language: "de"
title: "So setzt Du die Welt auf Deinem Valheim Server zurück"
description: "Welt auf einem Valheim Server zurücksetzen"
tags: []
date: "2026-09-24"
visibility: "public"
cta: "gameserver"
product_keys: ["valheim"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Welt zurücksetzen"
sort: 16
related: ["gameserver/valheim/restore-automatic-backup", "gameserver/valheim/add-savegame", "gameserver/valheim/create-backup", "gameserver/valheim/change-world-modifiers"]
---
Du kannst auf Deinem Server jederzeit mit einer komplett neuen Welt beginnen. Der Server erstellt die neue Welt beim Start automatisch mit einem zufälligen Seed. Die Charaktere Deiner Spieler samt Inventar bleiben dabei erhalten, da Valheim sie nicht auf dem Server, sondern bei den Spielern speichert. Auch die Listen der Admins, der gebannten Spieler und die Whitelist bleiben bestehen, da der Server sie unabhängig von der Welt speichert.

> [!WARNING]
> Sichere Deine aktuelle Welt, bevor Du sie zurücksetzt: Erstelle über die Verwaltung ein [Backup](/tutorials/gameserver/valheim/create-backup) oder lade die Welt auf Deinen PC herunter ([Savegame herunterladen](/tutorials/gameserver/valheim/download-savegame)).

## Neue Welt unter neuem Namen erstellen (empfohlen)

Bei diesem Weg bleibt Deine bisherige Welt unverändert auf dem Server und Du kannst jederzeit zu ihr zurückwechseln.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Neuen Welt-Namen eintragen**\
   Navigiere in der Verwaltung zu den **Einstellungen**. Notiere Dir den bisherigen Eintrag im Feld **Welt Name** (standardmäßig `Dedicated`) und trage dort einen neuen Namen ein, den noch keine Welt auf Deinem Server trägt (z.B. `MeineWelt2`). Der Name darf höchstens 20 Zeichen lang sein. Ein Name, der sich von einer vorhandenen Welt nur in der Groß- und Kleinschreibung unterscheidet, zählt dabei nicht als neuer Name.

3. **Server starten**\
   Speichere die Einstellungen und starte Deinen Server. Findet der Server keine Welt mit dem eingetragenen Namen, erstellt er automatisch eine neue Welt.

> [!TIP]
> Um zur alten Welt zurückzuwechseln, trägst Du im Feld **Welt Name** wieder den bisherigen Namen ein und startest den Server neu. Auf diese Weise kannst Du auch zwischen mehreren Welten wechseln.

## Welt unter gleichem Namen neu erstellen

Bei diesem Weg benennst Du die bisherige Welt um oder löschst sie. Beim nächsten Start erstellt der Server unter demselben Namen eine neue Welt.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und wechsle in folgendes Verzeichnis:

   ```text
   /.config/unity3d/IronGate/Valheim/worlds_local/
   ```

   Alternativ kannst Du auch den Dateimanager der Verwaltung nutzen.

3. **Welt-Ordner umbenennen oder löschen**\
   Seit Valheim 1.0 speichert der Server jede Welt in einem eigenen Ordner, der so heißt wie der Eintrag im Feld **Welt Name** (z.B. `MeineWelt`). Benenne diesen Ordner um (z.B. in `MeineWelt_alt`), wenn die alte Welt auf dem Server bleiben soll, oder lösche ihn. Möchtest Du die alte Welt zusätzlich auf Deinem PC aufbewahren, lade den Ordner vor dem Löschen per SFTP herunter.

   Liegen statt des Ordners die Dateien `MeineWelt.fwl` und `MeineWelt.db` im Verzeichnis (Welt aus einer Version vor Valheim 1.0), gehst Du mit diesen beiden Dateien genauso vor.

4. **Alte Sicherungen herunterladen oder löschen**\
   Ordner und Dateien, deren Name mit `MeineWelt_backup_` beginnt (z.B. `MeineWelt_backup_auto-20260115-183000`), sind Sicherungen der alten Welt, die der Server selbst angelegt hat. Da sie denselben Welt-Namen tragen, liegen sie sonst zwischen den Sicherungen der neuen Welt. Die Sicherungen mit `auto` im Namen behandelt der Server dann wie automatische Backups der neuen Welt und löscht sie mit der Zeit, wenn er neue Backups anlegt. Möchtest Du die alten Sicherungen behalten, lade sie per SFTP auf Deinen PC herunter. Benötigst Du sie nicht mehr, lösche sie.

5. **Server starten**\
   Starte Deinen Server. Er erstellt unter demselben Namen automatisch eine neue Welt.

> [!NOTE]
> **Welt plötzlich neu?**
>
> Stimmt der Eintrag im Feld **Welt Name** mit keiner vorhandenen Welt überein, zum Beispiel wegen eines Tippfehlers, erstellt der Server beim Start ohne Rückfrage eine neue Welt. Deine bisherige Welt ist dann nicht verloren, sondern liegt unverändert im Verzeichnis `worlds_local`. Trage den richtigen Namen ein und starte den Server neu.

> [!NOTE]
> Einen bestimmten Seed kannst Du über die Verwaltung nicht festlegen, der Server wählt ihn für eine neue Welt immer zufällig. Möchtest Du eine Welt mit einem bestimmten Seed spielen, erstelle sie lokal im Spiel und lade sie anschließend über [Savegame hinzufügen](/tutorials/gameserver/valheim/add-savegame) auf Deinen Server hoch.
