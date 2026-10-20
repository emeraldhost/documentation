---
slug: "konsole-nutzen"
language: "de"
title: "So nutzt Du die Konsole Deines Gameservers"
description: "Die Live Konsole Deines Gameservers öffnen, Ausgaben mitlesen und Befehle direkt an den Server senden"
tags: []
date: "2026-10-20"
visibility: "public"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Konsole nutzen"
sort: 16
related: ["gameserver/set-up-scheduled-tasks", "gameserver/use-config-editor", "gameserver/view-metrics", "gameserver/establish-sftp-connection"]
---

In der **Konsole** Deiner Serververwaltung siehst Du live, was Dein Server ausgibt, und kannst Befehle direkt an ihn senden. So prüfst Du z.B., ob Dein Server sauber startet, findest Fehlermeldungen oder führst Admin-Befehle aus, ohne selbst im Spiel zu sein.

## Live Konsole öffnen

Öffne die Verwaltung Deines Servers und wechsle zur **Konsole**. Dort findest Du die Box **Live Konsole** mit den aktuellen Ausgaben Deines Servers.

Die **Live Konsole** siehst Du außerdem in der **Übersicht** Deines Servers. Auch dort kannst Du direkt Befehle eingeben.

> [!TIP]
> Über das Symbol oben rechts in der Box **Live Konsole** öffnest Du die Konsole in einem eigenen Fenster. So behältst Du die Ausgaben im Blick, während Du in der Verwaltung weiterarbeitest.

## Befehl senden

1. **Befehl eingeben**\
   Klicke in das Eingabefeld **Befehl eingeben…** der **Live Konsole** und tippe Deinen Befehl ein.

2. **Ohne Slash eingeben**\
   Gib den Befehl ohne `/` am Anfang ein – nur den Befehl selbst. Fährst Du mit der Maus über das „/“ links neben dem Eingabefeld, siehst Du den Hinweis „Befehle ohne Slash (/) eingeben – nur der Befehl“.

3. **Absenden**\
   Klicke rechts auf den Senden-Button. Der Befehl wird an Deinen Server geschickt und die Antwort erscheint in der Konsole.

Welche Befehle es gibt, hängt vom Spiel ab. Bei Minecraft schickst Du z.B. mit diesem Befehl eine Nachricht an alle Spieler:

```text
say Der Server startet in 5 Minuten neu
```

> [!NOTE]
> Im Spiel tippst Du viele Befehle mit `/` davor in den Chat, z.B. `/op`. In der Konsole lässt Du den `/` weg und gibst nur `op` ein.

## Aktionen aus der Verwaltung in der Konsole

Manche Bereiche der Verwaltung schicken Deine Änderungen als Befehl an die Konsole, z.B. die Seite **Spieler** bei Minecraft. Machst Du dort einen Spieler zum Operator, siehst Du in der Konsole eine Meldung wie diese:

```text
System chat: Made <Name> a server operator
```

So kannst Du in der Konsole nachvollziehen, ob eine Aktion bei Deinem Server angekommen ist. Mehr zu Operatoren erfährst Du unter [Minecraft OP-Rechte vergeben](/tutorials/gameserver/minecraft/grant-op-rights).

> [!TIP]
> Befehle, die regelmäßig laufen sollen, musst Du nicht jedes Mal von Hand eingeben. Mit der Aktion **Befehl senden** lässt Du sie automatisch ausführen – mehr dazu unter [Geplante Aufgaben einrichten](/tutorials/gameserver/set-up-scheduled-tasks).
