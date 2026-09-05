---
slug: "gamemode-aendern"
language: "de"
title: "So änderst Du den Gamemode auf Deinem s&box Server"
description: "Gamemode auf einem s&box Server ändern"
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
short_title: "Gamemode ändern"
sort: 3
related: ["gameserver/sbox/add-admin", "gameserver/sbox/change-map", "gameserver/sbox/create-backup", "gameserver/sbox/join-server"]
---

In s&box gibt es keine feste Spielauswahl: Welcher Gamemode auf Deinem Server läuft, legst Du über den **Package-Ident** eines Spielmodus von sbox.game fest.

## Package-Ident herausfinden

Jeder Gamemode auf sbox.game hat eine Adresse nach dem Muster `sbox.game/<organisation>/<package>`. Den Ident bildest Du, indem Du den Schrägstrich durch einen Punkt ersetzt.

| Adresse auf sbox.game | Package-Ident |
|-----------------------|---------------|
| `sbox.game/facepunch/sandbox` | `facepunch.sandbox` |
| `sbox.game/wpr/ttt` | `wpr.ttt` |

> [!NOTE]
> Ältere Anleitungen nennen noch die Adresse `asset.party`. Diese leitet inzwischen auf sbox.game weiter, der Aufbau des Idents ist unverändert.

## Gamemode dauerhaft ändern

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen** beziehungsweise zu den Startparametern Deines Servers.

3. **Gamemode eintragen**\
   Trage den Package-Ident des gewünschten Gamemodes hinter `+game` ein:

   ```text
   +game facepunch.sandbox
   ```

4. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu.

> [!TIP]
> Du kannst hinter dem Gamemode direkt eine Map angeben: `+game facepunch.sandbox facepunch.flatgrass`. Mehr dazu unter [Map ändern](/tutorials/gameserver/sbox/change-map).

## Gamemode im laufenden Betrieb wechseln

Du kannst den Gamemode auch live über die **Server-Konsole** in der Verwaltung wechseln:

```text
game facepunch.sandbox
```

> [!WARNING]
> Der Wechsel trennt alle verbundenen Spieler und lädt den Server neu. Diese Änderung gilt nur bis zum nächsten Neustart – dauerhaft stellst Du den Gamemode über den Startparameter `+game` ein.

## Was passiert beim Wechsel?

Der Server lädt den Gamemode samt aller benötigten Inhalte automatisch aus der Cloud herunter und legt sie im Ordner `/download/` ab. Der erste Start eines neuen Gamemodes dauert dadurch etwas länger.

> [!NOTE]
> Deine Spieler müssen nichts installieren. Fehlende Inhalte inklusive Spielcode überträgt der Server beim Beitritt direkt an die Clients.

> [!IMPORTANT]
> Es gibt auf einem s&box Server keinen Addon- oder Mod-Ordner, in den Du zusätzliche Inhalte legen könntest. Welche Abhängigkeiten geladen werden, bestimmt allein das Gamemode-Package. Möchtest Du andere Inhalte, wählst Du einen anderen Gamemode.
