---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem CryoFall Server hinzu"
description: "Savegame auf einem CryoFall Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["cryofall"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 5
related: ["gameserver/cryofall/add-admin", "gameserver/cryofall/add-mods", "gameserver/cryofall/create-backup", "gameserver/cryofall/download-savegame"]
---

Die komplette Welt eines CryoFall Servers liegt im Ordner `/Data/Saves/`. Um einen anderen Spielstand zu verwenden, ersetzt Du diesen Ordner – einen Weltnamen musst Du dafür nirgends eintragen.

> [!NOTE]
> Diese Anleitung gilt für Spielstände, die von einem CryoFall Server stammen – etwa aus einem [heruntergeladenen Savegame](/tutorials/gameserver/cryofall/download-savegame) oder von einem anderen Server, den Du umziehen möchtest.

> [!WARNING]
> Verwende nur Spielstände, die mit derselben Spielversion erstellt wurden, die auch Dein Server nutzt. Spielstände älterer Versionen sind nach einem Update nicht mehr kompatibel.

## Savegame hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Solange der Server läuft, schreibt er regelmäßig in den Spielstand.

2. **Backup erstellen**\
   Sichere Deinen bisherigen Stand, bevor Du ihn ersetzt: [Backup erstellen](/tutorials/gameserver/cryofall/create-backup).

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /Data/
   ```

5. **Alten Spielstand entfernen**\
   Lösche den vorhandenen Ordner `Saves` samt Inhalt.

   > [!WARNING]
   > Damit ist die bisherige Welt Deines Servers weg. Überspringe Schritt 2 also nicht, falls Du zurückwechseln möchtest.

6. **Neuen Spielstand hochladen**\
   Lade Deinen Ordner `Saves` mit seinem kompletten Inhalt nach `/Data/` hoch. Der Ordnername muss exakt `Saves` lauten – Dein Server läuft unter Linux und unterscheidet Groß- und Kleinschreibung.

7. **Server starten**\
   Starte Deinen Server. Beim Start lädt er den vorhandenen Spielstand.

## Mehrere Welten über Slots verwalten

CryoFall speichert jede Welt in einem nummerierten Slot. So kannst Du mehrere Welten parallel aufbewahren und zwischen ihnen wechseln, ohne Dateien zu verschieben.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Konfiguration öffnen**\
   Öffne per [SFTP](/tutorials/gameserver/establish-sftp-connection) folgende Datei:

   ```text
   /Data/SettingsServer.xml
   ```

3. **Slot ändern**\
   Trage die gewünschte Slot-Nummer ein:

   ```xml
   <savegame_slot_id>0</savegame_slot_id>
   ```

4. **Server starten**\
   Speichere die Datei und starte Deinen Server. Existiert für den Slot bereits eine Welt, wird sie geladen – andernfalls erzeugt der Server eine neue Welt.

> [!IMPORTANT]
> Lädst Du einen fremden Spielstand hoch, muss die Slot-Nummer zu diesem Spielstand passen. Wird nach dem Start eine leere Welt erzeugt, ist in der Regel der falsche Slot eingetragen. Stoppe den Server, ändere `savegame_slot_id` und starte ihn erneut – der hochgeladene Spielstand geht dabei nicht verloren.

## Welt zurücksetzen

Möchtest Du komplett neu starten, löschst Du einfach den Spielstand – Dein Server erzeugt beim nächsten Start automatisch eine neue Welt.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Backup erstellen**\
   Sichere die alte Welt, falls Du sie später noch brauchst: [Backup erstellen](/tutorials/gameserver/cryofall/create-backup).

3. **Spielstand löschen**\
   Lösche per [SFTP](/tutorials/gameserver/establish-sftp-connection) den Ordner:

   ```text
   /Data/Saves/
   ```

4. **Server starten**\
   Starte Deinen Server. Er generiert eine neue Welt.

> [!WARNING]
> Beim Zurücksetzen gehen auch alle Charaktere, Basen und Fortschritte Deiner Spieler verloren. Kündige einen Wipe deshalb rechtzeitig an.

> [!NOTE]
> **Einzelspieler-Welten**
>
> Für Welten, die Du lokal in Deinem Spiel gestartet hast, liegt uns kein dokumentierter Weg vor, sie auf einen Server zu übertragen. Arbeite deshalb mit Spielständen, die von einem Server stammen.

> [!WARNING]
> **Änderungen aus der Verwaltung**
>
> Servername, Beschreibung, Serverliste, maximale Spielerzahl, Speicherintervall und Anzahl der Speicherstände werden bei jedem Start aus der **Verwaltung** in die Datei `SettingsServer.xml` geschrieben. Änderst Du diese Werte in der Datei, gehen sie beim nächsten Start verloren – stelle sie ausschließlich in der Verwaltung ein.
