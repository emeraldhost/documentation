---
slug: "bepinex-installieren"
language: "de"
title: "So installierst Du BepInEx auf Deinem Valheim Server"
description: "BepInEx für Mods auf einem Valheim Server nutzen"
tags: []
date: "2026-04-10"
visibility: "public"
updated: "2026-10-20"
cta: "gameserver"
product_keys: ["valheim"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "BepInEx installieren"
sort: 3
related: ["gameserver/valheim/add-admin", "gameserver/valheim/download-savegame", "gameserver/valheim/add-mods", "gameserver/valheim/add-savegame"]
---

**BepInEx** ist das Mod-Framework für Valheim. Ohne BepInEx lädt Dein Server keine Mods.

> [!IMPORTANT]
> Auf einem normalen Valheim Server kannst Du BepInEx nicht selbst installieren. Unsere Server laufen unter Linux, und dort lädt BepInEx nur, wenn der Server mit einem speziellen Startbefehl gestartet wird. Lädst Du die Dateien von BepInEx einfach per SFTP hoch, startet Dein Server zwar normal, ignoriert aber alle Mods. Für Mods benötigst Du deshalb das Produkt **Valheim BepInEx**.

## Valheim BepInEx Server

Beim Produkt [Valheim BepInEx](https://emeraldhost.de/de/valheim-bepinex-server-mieten?utm_source=documentation&utm_medium=marketing&utm_campaign=bepinex-installieren) ist alles bereits eingerichtet:

- Bei der Installation des Servers wird automatisch die aktuelle Version des [BepInExPack für Valheim](https://thunderstore.io/c/valheim/p/denikson/BepInExPack_Valheim/) installiert.
- Der Server startet automatisch mit BepInEx. Du musst nichts weiter einrichten.
- Die übrigen Einstellungen in der Verwaltung, z.B. Server Name, Welt Name, Crossplay und Backups, funktionieren genauso wie beim normalen Valheim Server.

Mods lädst Du anschließend als `.dll`-Dateien in den Ordner `/BepInEx/plugins/` hoch. Wie das geht, erfährst Du unter [Mods hinzufügen](/tutorials/gameserver/valheim/add-mods).

## Von einem normalen Valheim Server wechseln

Hast Du bereits einen normalen Valheim Server, legst Du darauf selbst eine Instanz mit Valheim BepInEx an. Deine bisherige Instanz bleibt dabei erhalten, Du kannst jederzeit zwischen den Instanzen wechseln.

1. **Welt sichern**: Lade Deine Welt herunter, damit Du sie in der neuen Instanz weiterspielen kannst (siehe [Savegame herunterladen](/tutorials/gameserver/valheim/download-savegame)).

2. **Instanzen öffnen**: Öffne die Verwaltung Deines Servers und klicke in der linken Seitenleiste auf **Instanzen**.

3. **Instanz erstellen**: Klicke auf **Instanz erstellen**, suche nach „Valheim“, wähle **Valheim BepInEx** aus und gehe zum nächsten Schritt.

4. **Instanz konfigurieren**: Gib unter **Name** einen Namen für die Instanz ein und lege **Arbeitsspeicher** und **Speicherplatz** fest. Unten siehst Du, ob sich Dein Monatspreis dadurch ändert. Gehe dann zum nächsten Schritt.

5. **Instanz anlegen**: Prüfe in der **Übersicht** Deine Auswahl und klicke auf **Erstellen**. Die Instanz wird automatisch eingerichtet, das kann einige Minuten dauern.

6. **Instanz aktivieren**: Wechsle auf die neue Instanz. Klicke dazu in der Kopfzeile auf das Symbol **Instanz wechseln** oder wähle im Dropdown **Aktionen** den Eintrag **Instanz wechseln**. Auf der Seite **Instanzen**, die sich dann öffnet, wechselst Du über das Menü (**…**) der neuen Instanz auf sie (siehe [Instanzen nutzen](/tutorials/gameserver/use-instances)).

7. **Welt hochladen**: Lade Deine gesicherte Welt in die neue Instanz hoch (siehe [Savegame hinzufügen](/tutorials/gameserver/valheim/add-savegame)).

8. **Server starten**: Starte Deinen Server und prüfe wie unten beschrieben, ob BepInEx geladen wird.

> [!NOTE]
> Wie viele Instanzen Du anlegen kannst, siehst Du oben auf der Seite **Instanzen**. Sind alle Plätze belegt, kannst Du sie über **Instanz-Plätze erweitern** aufstocken.

## Prüfen, ob BepInEx geladen wird

1. **Konsole öffnen**: Öffne die Konsole in der Verwaltung Deines Servers und starte den Server.

2. **Startmeldungen prüfen**: Beim Start erscheinen in der Konsole Meldungen von BepInEx. Wird BepInEx geladen, legt es außerdem die Log-Datei `/BepInEx/LogOutput.log` an. Darin steht für jeden geladenen Mod eine Zeile wie:

   ```text
   [Info   :   BepInEx] Loading [BeispielMod 1.0.0]
   ```

> [!NOTE]
> Fehlt die Datei `/BepInEx/LogOutput.log` nach einem Neustart, wurde BepInEx nicht geladen. Prüfe in diesem Fall, ob Dein Server das Produkt Valheim BepInEx ist.

## Spieler auf Konsolen

Spieler auf Xbox, PlayStation und über den Game Pass können keine Mods installieren. Setzt ein Mod voraus, dass ihn auch die Spieler installiert haben, können diese Spieler Deinem Server nicht mehr beitreten. Mods, die nur auf dem Server laufen, sind davon nicht betroffen.
