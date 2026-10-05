---
slug: "flotte-aendern"
language: "de"
title: "So änderst Du die Flotte auf einem The Bus Server"
description: "Flotte auf einem The Bus Server ändern"
tags: []
date: "2026-02-24"
visibility: "public"
updated: "2026-10-05"
cta: "gameserver"
product_keys: ["the-bus"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Flotte ändern"
sort: 7
related: ["gameserver/the-bus/activate-dlc", "gameserver/the-bus/add-admin", "gameserver/the-bus/change-map", "gameserver/the-bus/change-operating-plan"]
---

Die Flotte legt fest, welche Busse auf Deinem Server zur Verfügung stehen. Du kannst die aktive Flotte über das **Admin-Menü** oder per **Befehl** ändern. Dafür benötigst Du Owner- oder Admin-Rechte, siehe [Admin hinzufügen](/tutorials/gameserver/the-bus/add-admin).

## Flotte über das Admin-Menü ändern

1. **Admin-Menü öffnen**\
   Öffne im Spiel das Pausenmenü und wähle das **Admin-Menü**.

2. **Flotte auswählen**\
   Wähle unter **Flotte** die gewünschte Flotte aus den verfügbaren Optionen.

> [!NOTE]
> Seit Update 3.2 EA wird die im Admin-Menü gewählte Flotte gespeichert und bleibt auch nach einem Neustart Deines Servers erhalten.

## Flotte per Befehl ändern

Alternativ kannst Du die Flotte über den Ingame-Chat wechseln. Welche Befehle Du nutzen kannst, hängt von Deinem Rang ab, siehe [Admin hinzufügen](/tutorials/gameserver/the-bus/add-admin).

Gib folgenden Befehl im Ingame-Chat ein:

```text
/fleet <flotte>
```

Ersetze `<flotte>` durch die gewünschte Flotte.

> [!TIP]
> Die genaue Angabe für `<flotte>` ist nicht offiziell dokumentiert. Eine Übersicht aller Befehle, die Dir auf Deinem Server zur Verfügung stehen, erhältst Du mit `/commands`.

## Flotten aus dem Workshop verwenden

Dein Server kann auch Flotten aus dem [Steam Workshop](https://steamcommunity.com/workshop/browse/?appid=491540) laden. Lade sie dazu wie andere Mods per [SFTP](/tutorials/gameserver/establish-sftp-connection) in den Ordner `/TheBus/Mods/` hoch. Wie das genau funktioniert, erfährst Du unter [Mods hinzufügen](/tutorials/gameserver/the-bus/add-mods).

Starte Deinen Server danach neu. Prüfe nach dem Start im Admin-Menü, ob die Flotte in der Auswahl erscheint.

> [!WARNING]
> Je nach Mod-Typ müssen auch alle Spieler die Flotte im Steam Workshop abonnieren, um Deinem Server beitreten zu können. Welche Mod-Typen es gibt, erfährst Du unter [Mod-Typen](/tutorials/gameserver/the-bus/add-mods#mod-typen).

## Busse aus DLCs

> [!NOTE]
> Busse aus einem DLC, z.B. den Ebus 2.2, können nur Spieler auswählen und fahren, die das DLC selbst besitzen. Wie Du DLCs auf Deinem Server aktivierst oder deaktivierst, erfährst Du unter [DLC aktivieren](/tutorials/gameserver/the-bus/activate-dlc).
