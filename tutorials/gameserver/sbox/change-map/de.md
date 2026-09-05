---
slug: "map-aendern"
language: "de"
title: "So änderst Du die Map auf Deinem s&box Server"
description: "Map auf einem s&box Server ändern"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["sbox"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Map ändern"
sort: 4
related: ["gameserver/sbox/add-admin", "gameserver/sbox/change-gamemode", "gameserver/sbox/create-backup", "gameserver/sbox/join-server"]
---

Maps sind in s&box – genau wie Gamemodes – Packages von sbox.game. Du gibst die gewünschte Map als zweiten Wert hinter dem Gamemode an.

## Package-Ident der Map herausfinden

Jede Map auf sbox.game hat eine Adresse nach dem Muster `sbox.game/<organisation>/<package>`. Den Ident bildest Du, indem Du den Schrägstrich durch einen Punkt ersetzt.

| Adresse auf sbox.game | Package-Ident |
|-----------------------|---------------|
| `sbox.game/facepunch/flatgrass` | `facepunch.flatgrass` |
| `sbox.game/facepunch/construct` | `facepunch.construct` |

## Map dauerhaft ändern

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen** beziehungsweise zu den Startparametern Deines Servers.

3. **Map eintragen**\
   Ergänze den Startparameter `+game` um den Package-Ident der Map. Der erste Wert ist immer der Gamemode, der zweite die Map:

   ```text
   +game facepunch.sandbox facepunch.flatgrass
   ```

4. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu.

## Map im laufenden Betrieb wechseln

Du kannst die Map auch live über die **Server-Konsole** in der Verwaltung wechseln. Gib dabei Gamemode und Map gemeinsam an:

```text
game facepunch.sandbox facepunch.flatgrass
```

> [!WARNING]
> Der Wechsel trennt alle verbundenen Spieler und lädt den Server neu. Die Änderung gilt nur bis zum nächsten Neustart – dauerhaft stellst Du die Map über den Startparameter `+game` ein.

> [!NOTE]
> Im offiziellen Sandbox-Modus steht zusätzlich der Befehl `map` zur Verfügung, mit dem Du nur die Map wechselst:
>
> ```text
> map facepunch.flatgrass
> ```
>
> Dieser Befehl gehört zum Gamemode und ist deshalb nicht auf jedem Server vorhanden. Der Weg über `game` funktioniert dagegen immer.

## Wenn die Map nicht geladen wird

> [!IMPORTANT]
> Nicht jeder Gamemode lässt eine freie Mapwahl zu. Manche Gamemodes bringen ihre eigene Map mit oder verwalten die Mapfolge selbst und ignorieren Deine Angabe. Welche Maps unterstützt werden, steht auf der sbox.game-Seite des jeweiligen Gamemodes.

> [!TIP]
> Prüfe den Ident auf Tippfehler: Er besteht ausschließlich aus Organisation, einem Punkt und dem Package-Namen – ohne `sbox.game/`, ohne Schrägstriche und ohne Dateiendung.
