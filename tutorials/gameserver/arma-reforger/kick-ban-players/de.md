---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf einem Arma Reforger Server"
description: "Spieler auf einem Arma Reforger Server kicken und bannen"
tags: []
date: "2026-02-22"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
product_keys: ["arma-reforger"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 8
related: ["gameserver/arma-reforger/become-admin", "gameserver/arma-reforger/download-savegame", "gameserver/arma-reforger/change-scenario", "gameserver/arma-reforger/create-backup"]
---

> [!WARNING]
> **Voraussetzung**
>
> Du musst als Admin eingeloggt sein, um diese Befehle nutzen zu können. Siehe [Admin werden](/tutorials/gameserver/arma-reforger/become-admin).

## Spieler-ID herausfinden

Bevor Du einen Spieler kicken oder bannen kannst, benötigst Du dessen Spieler-ID.

1. **Chat öffnen**\
   Öffne den Chat mit der Taste `/`.

2. **Spieler auflisten**\
   Gib folgenden Befehl ein:

    ```text
    #players
    ```

3. **ID notieren**\
   Notiere Dir die ID des gewünschten Spielers aus der Liste.

## Spieler kicken

Ein gekickter Spieler wird vom Server entfernt, kann aber sofort wieder beitreten.

```text
#kick <spielerId>
```

Beispiel:

```text
#kick 5
```

## Spieler bannen

Ein gebannter Spieler kann dem Server nicht mehr beitreten, bis der Ban abgelaufen ist oder manuell entfernt wird.

```text
#ban <spielerId> <dauer>
```

Die Dauer wird in Sekunden angegeben. `0` bedeutet ein permanenter Ban.

Beispiele:

| Befehl | Wirkung |
|--------|---------|
| `#ban 5 0` | Permanenter Ban |
| `#ban 5 3600` | Ban für 1 Stunde |
| `#ban 5 86400` | Ban für 24 Stunden |

## Ban aufheben

```text
#ban remove <spielerId>
```

## Alle Bans anzeigen

```text
#ban list
```

> [!TIP]
> Verwende immer die numerische Spieler-ID statt des Spielernamens, um sicherzustellen, dass der richtige Spieler betroffen ist.
