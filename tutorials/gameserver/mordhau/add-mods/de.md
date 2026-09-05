---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods auf Deinem Mordhau Server hinzu"
description: "Mods über mod.io auf einem Mordhau Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["mordhau"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 3
related: ["gameserver/mordhau/add-admin", "gameserver/mordhau/create-backup", "gameserver/mordhau/join-server", "gameserver/mordhau/kick-ban-players"]
---

Mods für Mordhau werden über **mod.io** bereitgestellt – nicht über den Steam Workshop. Du lädst dabei keine Dateien hoch: Du trägst nur die **numerische mod.io-ID** der Mod in die `Game.ini` ein, der Server lädt sie beim Start selbst herunter.

> [!IMPORTANT]
> Anleitungen, die für Mordhau von Steam-Workshop-IDs sprechen, sind falsch. Mordhau nutzt ausschließlich [mod.io](https://mod.io/g/mordhau).

## Mod-ID finden

1. **mod.io öffnen**\
   Öffne den [Mordhau-Bereich auf mod.io](https://mod.io/g/mordhau) und suche Dir die gewünschte Mod aus.

2. **ID übernehmen**\
   Jede Mod hat eine eigene numerische ID, zum Beispiel `1700790`. Genau diese Zahl trägst Du später ein – nicht den Namen der Mod.

   > [!TIP]
   > Viele Mod-Beschreibungen enthalten die fertigen Zeilen für die `Game.ini`, inklusive der ID und – bei Karten-Mods – des passenden Kartennamens. Lies die Beschreibung immer durch, bevor Du die Mod einträgst.

## Mods eintragen

1. **Server stoppen**\
   Stoppe Deinen Server über die **Verwaltung**.

   > [!WARNING]
   > Bearbeite die `Game.ini` ausschließlich bei gestopptem Server. Mordhau schreibt die Datei beim Beenden komplett neu und entfernt dabei unter anderem Kommentare – Änderungen im laufenden Betrieb gehen verloren.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Game.ini öffnen**\
   Öffne folgende Datei:

   ```text
   /Mordhau/Saved/Config/LinuxServer/Game.ini
   ```

4. **Mod-IDs eintragen**\
   Ergänze im Abschnitt `[/Script/Mordhau.MordhauGameSession]` pro Mod eine eigene `Mods=`-Zeile:

   ```ini
   [/Script/Mordhau.MordhauGameSession]
   Mods=1700790
   Mods=2673283
   ```

   > [!NOTE]
   > Jede ID braucht eine eigene Zeile. Mehrere IDs durch Komma getrennt in eine Zeile zu schreiben, funktioniert nicht.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server. Beim Start lädt er die eingetragenen Mods herunter und bindet sie ein. Der erste Start dauert dadurch länger als gewohnt.

## Karten-Mods in die Rotation aufnehmen

Eine Karten-Mod wird durch den `Mods=`-Eintrag nur heruntergeladen – gespielt wird sie erst, wenn die Karte auch in der Rotation steht. Ergänze dazu im Abschnitt `[/Script/Mordhau.MordhauGameMode]` eine `MapRotation=`-Zeile mit dem Kartennamen aus der Mod-Beschreibung:

```ini
[/Script/Mordhau.MordhauGameSession]
Mods=2673283

[/Script/Mordhau.MordhauGameMode]
MapRotation=HRD_Catacombs
```

> [!NOTE]
> Der Kartenname ist nicht der Anzeigename der Mod, sondern der interne Name der Karte. Er steht in der Beschreibung der jeweiligen Mod auf mod.io.

## Mods, die einen Server-Actor benötigen

Manche Gameplay-Mods müssen zusätzlich beim Kartenstart geladen werden. Solche Mods geben in ihrer Beschreibung einen Pfad an, den Du unter `[/Script/Mordhau.MordhauGameMode]` einträgst:

```ini
[/Script/Mordhau.MordhauGameMode]
SpawnServerActorsOnMapLoad=/ServerSideCmds/BP_ServerSideCMDs.BP_ServerSideCMDs_C
```

> [!WARNING]
> Trage hier nur den Pfad ein, den die Mod-Beschreibung ausdrücklich nennt. Ein selbst zusammengesetzter Pfad führt dazu, dass die Mod nicht startet.

## Nicht jede Mod läuft auf einem Linux-Server

> [!IMPORTANT]
> Dein Server läuft unter Linux. **Server-seitige Mods** (auf mod.io häufig als „server-side“ oder „server only“ gekennzeichnet) funktionieren dort zuverlässig. **Karten- und Content-Mods** werden von ihren Erstellern dagegen meist nur für Windows erzeugt und können auf einem Linux-Server fehlerhaft sein – etwa durch Spieler, die durch den Boden oder durch Objekte fallen.
>
> Prüfe deshalb vor dem Einsatz einer Karten-Mod, ob der Ersteller Linux-Server ausdrücklich unterstützt, und teste die Karte auf Deinem Server, bevor Du sie in die öffentliche Rotation nimmst.

## Clientseitige Mods

Ob die Spieler eine Mod ebenfalls benötigen, hängt von der Mod ab: Reine Server-Mods laufen ausschließlich auf dem Server, Karten- und Content-Mods brauchen die Spieler auch lokal. Was für Deine Mod gilt, steht in ihrer Beschreibung auf mod.io.

Ob clientseitige Mods auf Deinem Server überhaupt erlaubt sind, steuerst Du über folgenden Eintrag im Abschnitt `[/Script/Mordhau.MordhauGameMode]`:

```ini
[/Script/Mordhau.MordhauGameMode]
bDisableClientMods=False
```

| Wert | Bedeutung |
|------|-----------|
| `False` | Clientseitige Mods sind erlaubt |
| `True` | Clientseitige Mods werden auf Deinem Server unterbunden |

## Mod entfernen

1. **Server stoppen**\
   Stoppe Deinen Server über die **Verwaltung**.

2. **Einträge löschen**\
   Entferne die `Mods=`-Zeile der Mod aus der `Game.ini` – und, falls vorhanden, auch die zugehörigen Einträge unter `MapRotation=` und `SpawnServerActorsOnMapLoad=`.

3. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!WARNING]
> Bleibt eine Karte in der `MapRotation=` stehen, deren Mod Du entfernt hast, versucht der Server auf eine nicht vorhandene Karte zu wechseln. Räume beide Einträge immer gemeinsam auf.

> [!NOTE]
> Der Ordner `LinuxServer` und die `Game.ini` entstehen erst, nachdem Dein Server einmal vollständig gestartet ist. Findest Du die Datei nicht, starte Deinen Server einmal und stoppe ihn wieder.
