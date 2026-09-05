---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem Necesse Server hinzu"
description: "Mods auf einem Necesse Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["necesse"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 3
related: ["gameserver/necesse/add-admin", "gameserver/necesse/add-savegame", "gameserver/necesse/create-backup", "gameserver/necesse/download-savegame"]
---

Mods sind in Necesse einzelne **`.jar`-Dateien**. Dein Server lädt sie aus einem eigenen Ordner, den Du per SFTP befüllst.

> [!WARNING]
> Stoppe Deinen Server, bevor Du Mods hinzufügst, aktualisierst oder entfernst. Erstelle vorher außerdem ein [Backup](/tutorials/gameserver/necesse/create-backup) – Mods können die Welt dauerhaft verändern.

> [!NOTE]
> **Kein automatischer Workshop-Download**
>
> Dein Server kann Mods **nicht** selbst aus dem Steam Workshop laden. Du lädst die `.jar`-Datei jedes Mods immer manuell hoch.

> [!CAUTION]
> **Startparameter beachten**
>
> Necesse liest den Ordner `mods` nur, wenn der Startbefehl Deines Servers den Parameter `-mod ./mods` enthält. Kontrolliere nach dem Neustart in der Konsole, ob Deine Mods aufgelistet werden. Fehlen sie dort, ergänzen wir den Parameter gerne kostenlos für Dich – schreibe uns dazu einfach ein Support-Ticket.

## Mod-Datei besorgen

1. **Mod auswählen**\
   Suche Dir den gewünschten Mod im Steam Workshop von Necesse oder auf der Seite des Mod-Autors.

2. **`.jar`-Datei beschaffen**\
   Du benötigst die reine `.jar`-Datei des Mods. Bietet der Autor keinen Direktdownload an, abonniere den Mod im Steam Workshop und starte Necesse einmal – das Spiel lädt den Mod dann herunter und legt die `.jar`-Datei in Deinem lokalen Mod-Ordner ab:

   ```text
   %appdata%\Necesse\mods
   ```

3. **Version prüfen**\
   Achte darauf, dass der Mod zur Spielversion Deines Servers passt. Mods für eine andere Version können den Serverstart verhindern.

## Mod hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Mod-Ordner öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /mods/
   ```

   > [!NOTE]
   > Existiert der Ordner noch nicht, lege ihn im Hauptverzeichnis Deines Servers an. Der Name muss exakt `mods` lauten – Dein Server läuft unter Linux und unterscheidet Groß- und Kleinschreibung.

4. **`.jar`-Datei hochladen**\
   Lade die `.jar`-Datei direkt in diesen Ordner hoch. Lege keine Unterordner an – der Server liest ausschließlich die Dateien, die direkt im Ordner liegen.

5. **Server starten**\
   Starte Deinen Server über die Verwaltung.

6. **Konsole prüfen**\
   Beim Start listet Dein Server die erkannten Mods in der Konsole auf. Erscheint Dein Mod dort, wurde er geladen.

> [!IMPORTANT]
> Alle Mods, die **nicht** als `clientside` gekennzeichnet sind, müssen auf dem Server **und** bei jedem Spieler in derselben Version installiert sein. Fehlt ein solcher Mod auf einer Seite oder liegt er in einer anderen Version vor, schlägt der Beitritt fehl. Jeder Spieler abonniert den Mod dafür im Steam Workshop und aktiviert ihn im Mod-Menü des Spiels. Mods, die der Autor als `clientside` markiert hat, kannst Du dagegen allein nutzen – der Server braucht sie nicht.

## Mods entfernen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Datei löschen**\
   Lösche die entsprechende `.jar`-Datei aus dem Ordner `/mods/`.

3. **Server starten**\
   Starte Deinen Server wieder.

> [!WARNING]
> Entfernst Du einen Mod, der Blöcke, Gegenstände oder Gegner zur Welt hinzugefügt hat, verschwinden dessen Inhalte aus Deiner Welt. Spiele im Zweifel ein [Backup](/tutorials/gameserver/necesse/create-backup) zurück, statt den Mod einfach zu löschen.

> [!WARNING]
> **Mods werden nicht geladen**
>
> Taucht Dein Mod nach dem Neustart nicht in der Konsole auf, prüfe zuerst Schreibweise und Ablageort der Datei: Sie muss direkt in `/mods/` liegen und auf `.jar` enden. Wird weiterhin kein Mod erkannt, fehlt in der Regel der Startparameter `-mod ./mods` – melde Dich dafür per Support-Ticket bei uns.

> [!NOTE]
> Nach einem Spielupdate können Mods inkompatibel werden und den Serverstart verhindern. Aktualisiere Deine Mods in diesem Fall oder entferne sie vorübergehend aus dem Ordner `/mods/`.
