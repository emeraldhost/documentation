---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines HumanitZ Servers herunter"
description: "Savegame von einem HumanitZ Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["humanitz"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 3
related: ["gameserver/humanitz/add-savegame", "gameserver/humanitz/create-backup", "gameserver/humanitz/join-server", "gameserver/humanitz/kick-ban-players"]
---

Du kannst den Spielstand Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. HumanitZ speichert im laufenden Betrieb automatisch – lädst Du währenddessen herunter, kann der Spielstand unvollständig sein.

> [!NOTE]
> **Projektordner**
>
> Alle Pfade in dieser Anleitung beginnen mit dem Projektordner `HumanitZServer`. Läuft Dein Server noch auf einer älteren Version vor HumanitZ 1.0, heißt dieser Ordner stattdessen `TSSGame`. Prüfe per SFTP, welcher der beiden Ordner bei Dir vorhanden ist, und passe die Pfade entsprechend an.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /HumanitZServer/Saved/SaveGames/SaveList/
   ```

4. **Ordner herunterladen**\
   Lade den kompletten Ordner `Default` mit allen enthaltenen Dateien auf Deinen PC herunter.

5. **Server starten**\
   Starte Deinen Server wieder.

## Welche Dateien gehören zum Spielstand?

| Datei | Inhalt |
|-------|--------|
| `Save_<Name>.sav` | Der eigentliche Spielstand mit Welt, Basen, Fahrzeugen und Spielerdaten. Standardmäßig heißt die Datei `Save_DedicatedSaveMP.sav`. |
| `Save_ClanData.sav` | Die Clan- bzw. Gruppendaten Deines Servers |

> [!WARNING]
> Lade immer den kompletten Ordner `Default` herunter. Fehlt `Save_ClanData.sav`, gehen beim Wiedereinspielen die Clan-Daten verloren.

> [!NOTE]
> **Welcher Name ist der richtige?**
>
> Wie Deine Spielstandsdatei heißt, bestimmt der Wert `SaveName` im Abschnitt `[Host Settings]` der Datei `/HumanitZServer/GameServerSettings.ini`. Steht dort `SaveName="DedicatedSaveMP"`, ist `Save_DedicatedSaveMP.sav` Dein aktueller Spielstand.

> [!TIP]
> **Konfiguration mitsichern**
>
> Möchtest Du auch Deine Servereinstellungen sichern, lade zusätzlich folgende Dateien herunter:
>
> ```text
> /HumanitZServer/GameServerSettings.ini
> /HumanitZServer/F_BannedPlayers.txt
> /HumanitZServer/F_MVPAccess.txt
> ```
>
> Die beiden Textdateien sind nur vorhanden, wenn Du Banns bzw. eine Whitelist eingerichtet hast.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/humanitz/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/humanitz/create-backup).
