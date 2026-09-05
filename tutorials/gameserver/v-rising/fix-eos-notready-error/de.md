---
slug: "eos-notready-fehler-beheben"
language: "de"
title: "So behebst Du den „EOS session is in the NotReady state“-Fehler"
description: "EOS NotReady Fehler auf einem V Rising Server beheben"
tags: []
date: "2026-04-15"
visibility: "public"
cta: "gameserver"
product_keys: ["v-rising"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "EOS NotReady Fehler beheben"
sort: 4
related: ["gameserver/v-rising/create-backup", "gameserver/v-rising/enable-server-list", "gameserver/v-rising/join-server", "gameserver/v-rising/kick-ban-players"]
---

In den Logs Deines V Rising Servers kann folgender Eintrag auftauchen:

```text
EOS session is in the NotReady state. Waiting to modify until it's in the Joined state!
```

## Was bedeutet das?

Dein V Rising Server wartet darauf, dass die Verbindung zu den **Epic Online Services (EOS)** hergestellt ist. Solange die EOS-Session im Status `NotReady` steht, kann der Server keine Änderungen an der Sitzung vornehmen – z.B. den Server im Public Listing eintragen oder Spieler beitreten lassen.

In der Regel ist das nur eine Momentaufnahme während des Serverstarts. Bleibt der Fehler aber dauerhaft bestehen, erscheint Dein Server auch nicht in der öffentlichen Serverliste.

## Mögliche Ursachen und Lösungen

### 1. EOS-Listing nicht aktiviert

Prüfe in der [Serverliste-Konfiguration](/tutorials/gameserver/v-rising/enable-server-list), ob sowohl **Steam Serverliste** als auch **Epic Games Serverliste** auf `true` gesetzt sind. Beide Optionen sind nötig, damit der Server korrekt registriert wird.

### 2. Server noch nicht vollständig gestartet

EOS braucht nach dem Start einige Sekunden bis Minuten, um die Session aufzubauen. Warte nach einem Neustart mindestens 2-3 Minuten, bevor Du weitere Maßnahmen ergreifst.

### 3. Firewall oder Netzwerk blockiert EOS

Der Server muss ausgehende Verbindungen zu den Epic Online Services herstellen können. Stelle sicher, dass keine Firewall-Regel diese Verbindungen blockiert. Auf EmeraldHost-Servern ist dies standardmäßig freigegeben.

### 4. Sitzung durch vorherige Verbindung blockiert

Manchmal bleibt eine alte Session bei Epic hängen. Ein sauberer Neustart löst das meist:

1. **Server vollständig stoppen**\
   Stoppe Deinen Server in der Verwaltung und warte ca. 30 Sekunden.

2. **Server neu starten**\
   Starte den Server neu und gib ihm 2-3 Minuten Zeit, die EOS-Session neu aufzubauen.

### 5. EOS-Dienste haben eine Störung

In seltenen Fällen liegt das Problem bei Epic selbst. Prüfe den Status der Epic Online Services unter [status.epicgames.com](https://status.epicgames.com).

> [!TIP]
> Wenn der Fehler nach Neustart und Prüfung der Serverliste-Einstellungen bestehen bleibt, erstelle ein [Support-Ticket](https://emeraldhost.de/de/support). Wir prüfen dann die Server-Logs im Detail.
