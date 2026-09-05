---
slug: "verkehr-einstellen"
language: "de"
title: "So stellst Du den Verkehr auf einem The Bus Server ein"
description: "Verkehr auf einem The Bus Server einstellen"
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
short_title: "Verkehr einstellen"
sort: 19
related: ["gameserver/the-bus/change-ticket-chance", "gameserver/the-bus/change-time", "gameserver/the-bus/change-weather", "gameserver/the-bus/configure-server"]
---

Du kannst die Verkehrsdichte auf Deinem Server per Befehl anpassen.

## So änderst Du den Verkehr

Gib folgenden Befehl im Ingame-Chat ein:

```text
/traffic <wert>
```

Der Wert liegt zwischen `0` und `100`.

**Beispiele:**

```text
/traffic 0
/traffic 50
/traffic 100
```

| Wert | Beschreibung |
|------|-------------|
| `0` | Kein Verkehr |
| `50` | Mittlerer Verkehr |
| `100` | Maximaler Verkehr |

> [!TIP]
> Dieser Befehl erfordert Owner- oder Admin-Rechte.
