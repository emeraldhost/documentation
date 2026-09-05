---
slug: "ticketchance-aendern"
language: "de"
title: "So änderst Du die Ticketchance auf einem The Bus Server"
description: "Ticketchance auf einem The Bus Server ändern"
tags: []
date: "2026-02-24"
visibility: "public"
cta: "gameserver"
product_keys: ["the-bus"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Ticketchance ändern"
sort: 18
related: ["gameserver/the-bus/change-map", "gameserver/the-bus/change-operating-plan", "gameserver/the-bus/change-time", "gameserver/the-bus/change-traffic"]
---

Du kannst die Wahrscheinlichkeit, dass Fahrgäste ein Ticket kaufen, per Befehl anpassen.

## So änderst Du die Ticketchance

Gib folgenden Befehl im Ingame-Chat ein:

```text
/tickets <wert>
```

Der Wert ist ein Prozentwert zwischen `0` und `100`.

**Beispiele:**

```text
/tickets 0
/tickets 50
/tickets 100
```

| Wert | Beschreibung |
|------|-------------|
| `0` | Keine Fahrgäste kaufen Tickets |
| `50` | 50% der Fahrgäste kaufen Tickets |
| `100` | Alle Fahrgäste kaufen Tickets |

> [!TIP]
> Dieser Befehl erfordert Owner- oder Admin-Rechte.
