---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem Unturned Server hinzu"
description: "Mods auf einem Unturned Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["unturned"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 3
related: ["gameserver/unturned/add-admin", "gameserver/unturned/add-savegame", "gameserver/unturned/create-backup", "gameserver/unturned/download-savegame"]
---

Unturned besitzt ein eigenes Download-System für den Steam Workshop: Du trägst die File IDs der gewünschten Mods und Karten in die Datei `WorkshopDownloadConfig.json` ein, und Dein Server lädt sie beim Start selbstständig herunter.

> [!TIP]
> **Das Beste daran**
>
> Deine Mitspieler müssen **nichts** manuell installieren und auch nichts abonnieren. Beim Verbinden lädt der Client alle Mods Deines Servers automatisch herunter.

## File ID herausfinden

1. **Steam Workshop öffnen**\
   Öffne den [Steam Workshop für Unturned](https://steamcommunity.com/app/304930/workshop/) und suche den gewünschten Mod oder die gewünschte Karte.

2. **File ID kopieren**\
   Die File ID findest Du in der URL der Workshop-Seite. Kopiere die Zahl nach `?id=`.

   > [!TIP]
   > **Beispiel**
   >
   > In der URL `https://steamcommunity.com/sharedfiles/filedetails/?id=2136497468` ist die File ID `2136497468`.

## Mods zum Server hinzufügen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Konfigurationsdatei öffnen**\
   Öffne folgende Datei:

   ```text
   /Servers/<ServerID>/WorkshopDownloadConfig.json
   ```

   > [!NOTE]
   > **Welcher Ordner ist meiner?**
   >
   > `<ServerID>` ist der Ordnername unter `/Servers/`. Er stammt aus dem Startparameter Deines Servers – in der Regel liegt dort genau ein Ordner.

4. **File IDs eintragen**\
   Trage die IDs im Bereich `File_IDs` ein, mehrere durch Komma getrennt:

   ```json
   "File_IDs":
   [
       2136497468,
       1497352180
   ],
   ```

   > [!WARNING]
   > Ändere nur den Bereich `File_IDs` und lass die übrigen Einträge der Datei unangetastet. Hinter der letzten ID darf **kein** Komma stehen, sonst ist die Datei ungültig und Dein Server startet nicht. Prüfe die Datei nach dem Bearbeiten deshalb mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/).

5. **Server starten**\
   Speichere die Datei und starte Deinen Server. Beim Start werden alle eingetragenen Mods samt ihrer Abhängigkeiten heruntergeladen und aktualisiert.

## Workshop-Karte verwenden

Eine Karte aus dem Workshop braucht zwei Einträge: die File ID zum Herunterladen und den Kartennamen, damit der Server sie auch lädt.

1. **File ID eintragen**\
   Trage die File ID der Karte wie oben beschrieben in die `WorkshopDownloadConfig.json` ein.

2. **Karte auswählen**\
   Öffne die Datei

   ```text
   /Servers/<ServerID>/Server/Commands.dat
   ```

   und trage den Namen der Karte ein – eine Anweisung pro Zeile:

   ```text
   Map Elver
   ```

3. **Server starten**\
   Speichere beide Dateien und starte Deinen Server.

> [!IMPORTANT]
> Bei einem Kartenwechsel beginnt die Welt von vorn. Erstelle vorher ein [Backup](/tutorials/gameserver/unturned/create-backup) Deines bisherigen Spielstands.

### File IDs beliebter Karten

| Karte | File ID |
|-------|---------|
| Elver | `2136497468` |
| Carpat | `1497352180` |
| Hawaii | `1753134636` |
| Greece | `1702240229` |
| Arid | `2683620106` |
| Buak | `3000549606` |
| A6 Polaris | `2898548949` |
| Escalation | `3251926587` |
| France | `1975500516` |
| Ireland | `1411633953` |
| Belgium | `1727125581` |
| Kuwait | `2483365750` |
| California | `1905768396` |
| Rio de Janeiro | `3416057692` |

## Weitere Einstellungen der Datei

| Eintrag | Bedeutung |
|---------|-----------|
| `File_IDs` | Die Liste der Mods und Karten, die Dein Server herunterlädt |
| `Ignore_Children_File_IDs` | Abhängigkeiten, die bewusst **nicht** mit heruntergeladen werden sollen |
| `Use_Cached_Downloads` | Bereits heruntergeladene Dateien erneut verwenden |
| `Should_Monitor_Updates` | Der Server überwacht, ob es für einen Mod ein Update gibt |
| `Shutdown_Update_Detected_Timer` | Wartezeit in Sekunden bis zum Herunterfahren nach einem erkannten Update (Standard `600`) |
| `Shutdown_Update_Detected_Message` | Nachricht, die die Spieler bei einem erkannten Update sehen |
| `Shutdown_Kick_Message` | Nachricht beim Trennen der Spieler |

> [!NOTE]
> **Automatische Update-Überwachung**
>
> Erkennt Dein Server ein Workshop-Update, warnt er die Spieler und fährt nach Ablauf des Timers herunter, damit der Mod beim nächsten Start aktualisiert wird. Startet Dein Server nach einem Mod-Update also von selbst neu, ist das kein Fehler.

## Mods entfernen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Eintrag löschen**\
   Entferne die File ID aus dem Bereich `File_IDs` und achte darauf, dass hinter der letzten verbleibenden ID kein Komma steht.

3. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!WARNING]
> Entfernst Du einen Mod, verschwinden auch alle Gegenstände, Fahrzeuge und Objekte aus diesem Mod, die in Deiner Welt platziert wurden. Erstelle vorher ein [Backup](/tutorials/gameserver/unturned/create-backup).

## Häufige Probleme

> [!WARNING]
> **Mod wird nicht heruntergeladen**
>
> Workshop-Inhalte, die seit dem Engine-Wechsel in Version 3.28 nicht mehr aktualisiert wurden, werden vom Server nicht heruntergeladen. Prüfe auf der Workshop-Seite, wann der Mod zuletzt aktualisiert wurde, und weiche notfalls auf eine gepflegte Alternative aus.

> [!CAUTION]
> **Mods nicht von Hand hochladen**
>
> Lade Mods nicht manuell per SFTP in den `Workshop`-Ordner. Automatisch heruntergeladen werden bei Deinen Mitspielern nur die Mods, die in der `WorkshopDownloadConfig.json` eingetragen sind – von Hand hochgeladene Mods fehlen den Clients und der Beitritt scheitert. Trage Mods deshalb ausschließlich in der `WorkshopDownloadConfig.json` ein.
