---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf einem Hytale Server hinzu"
description: "Admin auf einem Hytale Server hinzufügen"
tags: []
date: "2026-01-15"
visibility: "public"
updated: "2026-09-27"
cta: "gameserver"
product_keys: ["hytale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/hytale/change-gamemode", "gameserver/hytale/change-max-players", "gameserver/hytale/change-max-view-radius", "gameserver/hytale/change-motd"]
---

Admins (Operatoren) landen auf Deinem Hytale Server in der Berechtigungsgruppe `hytale:Admin` und dürfen damit alle Befehle nutzen. Der Server speichert die Rechte in der Datei `permissions.json` im Hauptverzeichnis.

## Voraussetzung

Du brauchst den Namen oder die UUID des Spielers. Über den Namen klappt es nur, solange der Spieler auf dem Server online ist. Mit der UUID kannst Du auch Spieler zum Admin machen, die gerade offline sind.

> [!TIP]
> Seine UUID sieht jeder Spieler im Spiel mit dem Befehl `/whoami`.

## So vergibst Du Admin-Rechte

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Hytale-Servers.

2. **Befehl eingeben**\
   Gib folgenden Befehl in die Konsole ein:

   ```text
   op add <Spielername>
   ```

   Alternativ mit der UUID des Spielers:

   ```text
   op add <UUID>
   ```

3. **Bestätigung**\
   In der Konsole erscheint die Meldung „... is now an operator!“. Ist der Spieler online, erhält er die Nachricht „You have been made an operator.“ und hat ab sofort Admin-Rechte.

## So entfernst Du Admin-Rechte

Um einem Spieler die Admin-Rechte zu entziehen, verwende:

```text
op remove <Spielername>
```

Auch hier kannst Du statt des Namens die UUID angeben.

## So ernennst Du weitere Admins im Spiel

Spieler mit Admin-Rechten können direkt im Spiel weitere Admins ernennen:

```text
/op add <Spielername>
```

> [!NOTE]
> Befehle in der Server-Konsole benötigen keinen Schrägstrich (/) am Anfang. Im Spiel muss der Schrägstrich verwendet werden.

## Was bewirkt die Einstellung „Allow operators“?

In den **Einstellungen** Deiner Verwaltung findest Du das Feld **Allow operators**. Es steht standardmäßig auf `1` und schaltet den Befehl `/op self` frei. Damit kann sich jeder Spieler im Spiel selbst zum Admin machen. Ein weiteres `/op self` entzieht die Rechte wieder.

> [!WARNING]
> Solange **Allow operators** auf `1` steht, kann sich jeder Spieler, der Deinem Server beitreten kann, mit `/op self` Admin-Rechte geben. Vergib Admin-Rechte deshalb am besten über die Konsole und setze das Feld danach auf `0`.

So schaltest Du `/op self` ab:

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Hytale-Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Allow operators deaktivieren**\
   Setze das Feld **Allow operators** auf `0`.

4. **Server neustarten**\
   Starte Deinen Server neu, damit die Änderung übernommen wird.

> [!NOTE]
> Das Feld betrifft nur den Befehl `/op self`. Admins, die Du bereits ernannt hast, behalten ihre Rechte, und `op add` sowie `op remove` funktionieren weiterhin.
