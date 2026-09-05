---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem HumanitZ Server hinzu"
description: "Savegame auf einem HumanitZ Server hinzufügen"
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
short_title: "Savegame hinzufügen"
sort: 4
related: ["gameserver/humanitz/add-admin", "gameserver/humanitz/create-backup", "gameserver/humanitz/download-savegame", "gameserver/humanitz/join-server"]
---

Der Spielstand eines HumanitZ Servers liegt in einer einzelnen Datei nach dem Muster `Save_<Name>.sav`. Welchen Namen Dein Server lädt, bestimmt der Wert `SaveName` in der Konfigurationsdatei – Dateiname und Konfiguration müssen deshalb zusammenpassen.

> [!TIP]
> Erstelle vor dem Hochladen ein [Backup](/tutorials/gameserver/humanitz/create-backup) Deines bisherigen Server-Spielstands, falls Du später zurückwechseln möchtest.

> [!NOTE]
> **Projektordner**
>
> Alle Pfade in dieser Anleitung beginnen mit dem Projektordner `HumanitZServer`. Läuft Dein Server noch auf einer älteren Version vor HumanitZ 1.0, heißt dieser Ordner stattdessen `TSSGame`. Prüfe per SFTP, welcher der beiden Ordner bei Dir vorhanden ist, und passe die Pfade entsprechend an.

## Dateien des Spielstands

| Datei | Inhalt |
|-------|--------|
| `Save_<Name>.sav` | Der eigentliche Spielstand mit Welt, Basen, Fahrzeugen und Spielerdaten. Standardmäßig heißt die Datei `Save_DedicatedSaveMP.sav`. |
| `Save_ClanData.sav` | Die Clan- bzw. Gruppendaten des Servers |

Beide Dateien liegen im selben Ordner und gehören zusammen. Übertrage sie deshalb immer gemeinsam.

## Savegame hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Solange der Server läuft, schreibt er selbst in die Spielstandsdatei.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /HumanitZServer/Saved/SaveGames/SaveList/Default/
   ```

   > [!NOTE]
   > Existiert der Ordner noch nicht, starte den Server einmal, damit die Ordnerstruktur angelegt wird. Stoppe ihn anschließend wieder, bevor Du die Dateien hochlädst.

4. **Dateien hochladen**\
   Lade Deine `Save_<Name>.sav` und die zugehörige `Save_ClanData.sav` in dieses Verzeichnis hoch. Sind dort bereits Dateien mit demselben Namen vorhanden, überschreibst Du sie – sichere sie vorher, falls Du sie noch brauchst.

5. **SaveName eintragen**\
   Öffne folgende Datei:

   ```text
   /HumanitZServer/GameServerSettings.ini
   ```

   Trage im Abschnitt `[Host Settings]` den Namen Deines Spielstands ein – **ohne** das führende `Save_` und **ohne** die Endung `.sav`:

   ```ini
   [Host Settings]
   SaveName="DedicatedSaveMP"
   ```

   > [!TIP]
   > **Beispiel**
   >
   > | Datei auf dem Server | Eintrag in der Konfiguration |
   > |----------------------|------------------------------|
   > | `Save_DedicatedSaveMP.sav` | `SaveName="DedicatedSaveMP"` |
   > | `Save_MeineWelt.sav` | `SaveName="MeineWelt"` |

6. **Server starten**\
   Speichere alle Änderungen und starte Deinen Server. Beim Start wird jetzt Dein hochgeladener Spielstand geladen.

> [!IMPORTANT]
> Dateiname und `SaveName` müssen exakt zusammenpassen. Findet der Server keine passende Datei, erzeugt er unter diesem Namen eine **neue, leere Welt** – Dein hochgeladener Spielstand wird dann nicht geladen. Achte auch auf Groß- und Kleinschreibung: Dein Server läuft unter Linux, dort wird sie unterschieden.

> [!WARNING]
> Ein geänderter `SaveName` bedeutet immer einen anderen Spielstand. Möchtest Du zwischen zwei Welten wechseln, kannst Du beide `.sav`-Dateien im Ordner belassen und nur den `SaveName` umstellen.

## Umzug auf einen anderen Server

Beim Umzug von einem anderen HumanitZ Server lädst Du am einfachsten den kompletten Ordner `Default` herunter und auf dem neuen Server wieder hoch. Wie Du ihn herunterlädst, steht unter [Savegame herunterladen](/tutorials/gameserver/humanitz/download-savegame).

> [!NOTE]
> **Einzelspieler-Spielstand**
>
> Für die Übertragung eines Einzelspieler-Spielstands auf einen Dedicated Server gibt es **kein dokumentiertes Verfahren**. Weder das offizielle Wiki noch die Serverdokumentation beschreiben einen solchen Weg. Diese Anleitung bezieht sich deshalb ausschließlich auf Spielstände, die von einem Dedicated Server stammen.
