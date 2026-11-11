---
slug: "automatische-updates-steuern"
language: "de"
title: "So steuerst Du die automatischen Updates Deines Stormforge Servers"
description: "Automatische Updates auf einem Stormforge Server steuern und eine neue Version per Neustart installieren."
tags: []
date: "2026-11-11"
visibility: "public"
cta: "gameserver"
product_keys: ["stormforge"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Automatische Updates steuern"
sort: 1
related: ["gameserver/stormforge/join-server", "gameserver/stormforge/create-backup", "gameserver/stormforge/download-savegame", "gameserver/stormforge/change-world-settings"]
---

Dein Stormforge Server kann sich bei jedem Start selbst auf die aktuelle Version bringen. Ob das passiert, entscheidest Du in der Verwaltung über das Feld **Auto Update**.

| Feld | Werte | Standard | Bedeutung |
| ---- | ----- | -------- | --------- |
| **Auto Update** | `1` / `0` | `1` | `1` = der Server sucht bei jedem Start bei Steam nach einer neuen Serverversion und installiert sie, `0` = kein Update, die installierte Version bleibt unverändert |

Stormforge ist im Early Access und bekommt häufig Updates. Laut offizieller FAQ müssen alle Spieler dieselbe Spielversion haben wie der Server. Lass **Auto Update** deshalb im Normalfall auf `1`.

> [!TIP]
> Erstelle vor einem Update ein Backup: [Backup erstellen](/tutorials/gameserver/stormforge/create-backup). So kannst Du Deine Welt und Deine Einstellungen wiederherstellen, falls dabei etwas schiefgeht.

## Auto Update ein- oder ausschalten

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Config-Editor öffnen**\
   Navigiere zum **Config-Editor**.

3. **Wert eintragen**\
   Trage im Feld **Auto Update** den gewünschten Wert ein: `1` für automatische Updates, `0` um sie abzuschalten. Speichere die Einstellung.

4. **Server neu starten**\
   Starte Deinen Server neu, damit die Einstellung greift.

## Update installieren

Dein Server startet nie von selbst neu. Eine neue Version kommt erst mit Deinem nächsten Neustart auf den Server.

1. **Auto Update prüfen**\
   Öffne in der Verwaltung den **Config-Editor** und prüfe, ob im Feld **Auto Update** der Wert `1` steht.

2. **Server neu starten**\
   Starte Deinen Server neu. Beim Start wird die aktuelle Serverversion gesucht und installiert.

3. **Spiel aktualisieren**\
   Lass Steam auch Dein Spiel aktualisieren. Welche Version Dein Spiel hat, siehst Du im Hauptmenü von Stormforge.

Deine Spielstände und Einstellungen bleiben bei einem Update erhalten.

> [!NOTE]
> Die Suche nach einer neuen Version läuft höchstens einmal alle 5 Minuten. Startest Du Deinen Server innerhalb dieser Zeit erneut, wird nicht noch einmal gesucht. Fehlt Dir danach eine gerade erschienene Version, warte 5 Minuten und starte Deinen Server noch einmal neu.

> [!TIP]
> **Regelmäßiger Neustart**\
> Unter **Geplante Aufgaben** kannst Du einen regelmäßigen Neustart einrichten, zum Beispiel jede Nacht. So holt sich Dein Server neue Versionen, ohne dass Du daran denken musst: [Geplante Aufgaben einrichten](/tutorials/gameserver/set-up-scheduled-tasks).

## Wann Du Auto Update abschalten kannst

- **Kein Versionssprung mitten in einer Session**\
  Jeder Neustart installiert sonst eine bereits erschienene neue Version. Solange **Auto Update** auf `0` steht, bleibt Dein Server auf der Version, die gerade installiert ist.

- **Ein Update macht Dir Probleme**\
  Läuft Dein Server auf einer Version, mit der alles funktioniert, hältst Du ihn mit `0` genau dort fest. `0` verhindert allerdings nur kommende Updates: Ein bereits installiertes Update lässt sich darüber nicht rückgängig machen.

> [!WARNING]
> Lass **Auto Update** nur vorübergehend auf `0`. Deine Mitspieler bekommen die neue Version über Steam automatisch. Läuft Dein Server dann noch auf der alten Version, können sie ihm nicht mehr beitreten, bis Server und Spiel wieder auf derselben Version sind. Setze den Wert deshalb rechtzeitig wieder auf `1` und starte Deinen Server neu.

Wenn der Beitritt trotz gleicher Version nicht klappt, hilft Dir die Anleitung [Server beitreten](/tutorials/gameserver/stormforge/join-server) weiter.
