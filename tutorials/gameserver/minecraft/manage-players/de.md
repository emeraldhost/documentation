---
slug: "spieler-verwalten"
language: "de"
title: "So verwaltest Du Spieler auf Deinem Minecraft Java Edition Server"
description: "Allowlist, Operatoren, Banns, Spielmodus, Inventar und Statistiken Deiner Minecraft-Spieler direkt im Dashboard verwalten"
tags: []
date: "2026-10-20"
visibility: "public"
updated: "2026-10-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler verwalten"
sort: 39
related: ["gameserver/minecraft/grant-op-rights", "gameserver/minecraft/enable-whitelist", "gameserver/minecraft/kick-ban-players", "gameserver/minecraft/change-gamemode"]
---

Auf der Seite **Spieler** in der Verwaltung Deines Minecraft-Servers siehst Du, wer gerade spielt, wer schon einmal auf Deinem Server war und wer welche Rechte hat. Allowlist, Operatoren und Banns verwaltest Du dort an einem Ort – ganz ohne Befehle.

> [!NOTE]
> Änderungen wirken sofort: Jede Änderung wird als Befehl an die **Konsole** Deines Servers geschickt. Dort siehst Du dann z.B. „Made <Name> a server operator“.

## Spieler-Seite öffnen

Öffne die Verwaltung Deines Servers und klicke in der linken Seitenleiste auf **Spieler**.

Oben auf der Seite findest Du vier Karten:

- **Gerade online** – wie viele Spieler gerade spielen, z.B. „1 von 20 Plätzen“
- **Allowlist** – wie viele Spieler eingetragen sind, mit dem Schalter **Allowlist aktiv**
- **Operatoren** – wie viele Spieler Operator sind und wie viele davon gerade online sind
- **Gebannt** – wie viele Spieler gebannt sind

## Allowlist ein- und ausschalten

Die Allowlist (früher „Whitelist“) legt fest, wer Deinem Server beitreten darf. Ist sie aus, steht auf der Karte „Jeder kann beitreten“.

1. **Allowlist einschalten**\
   Aktiviere auf der Karte **Allowlist** den Schalter **Allowlist aktiv**.

2. **Spieler eintragen**\
   Trage alle Spieler ein, die weiterhin beitreten dürfen – siehe [Spieler hinzufügen](#spieler-hinzufuegen).

> [!WARNING]
> Ist die Allowlist aktiv, kommen nur noch eingetragene Spieler auf Deinen Server. Trage Dich am besten zuerst selbst ein.

## Spielerliste durchsuchen

Unter den Karten findest Du die Tabs **Online**, **Allowlist**, **Operatoren**, **Gebannt** und **Alle bekannten Spieler**, jeweils mit der Anzahl der Spieler. Über das Suchfeld **Name oder UUID** findest Du einen bestimmten Spieler.

Die Tabelle zeigt für jeden Spieler:

| Spalte | Inhalt |
|--------|--------|
| **Spieler** | Name und gekürzte UUID |
| **Rechte** | z.B. **Operator 4** |
| **Online** | seit wann der Spieler online ist |
| **Zuerst gesehen** | wann der Spieler das erste Mal auf Deinem Server war |

Wer online ist, meldet Dein Server laufend an das Dashboard.

### Aktionen in der Spielerliste

Über das Menü **…** am Ende einer Zeile erreichst Du je nach Spieler diese Aktionen:

- **Details** – öffnet die [Detailseite des Spielers](#spieler-detailseite)
- **Nachricht senden**
- **Kicken**
- **Op entziehen** und **Op-Level ändern**
- **Zur Allowlist hinzufügen**
- **Bannen**

## Spieler hinzufügen {#spieler-hinzufuegen}

Über **Spieler hinzufügen** trägst Du einen Spieler auch dann ein, wenn er noch nie auf Deinem Server war.

1. **Dialog öffnen**\
   Klicke oben rechts auf **Spieler hinzufügen**.

2. **Namen eintragen**\
   Gib im Feld **Minecraft-Name** den Namen ein, mit dem Dein Mitspieler in Minecraft spielt. Erlaubt sind 3 bis 16 Zeichen aus Buchstaben, Zahlen und `_`. Die UUID wird automatisch bei Mojang abgefragt und gespeichert, damit der Eintrag auch nach einer Namensänderung stimmt.

3. **Ziel wählen**\
   Wähle unter **Wohin?** aus, was mit dem Spieler passieren soll:

   | Auswahl | Wirkung | Button |
   |---------|---------|--------|
   | **Allowlist** | Zählt, sobald Du die Allowlist einschaltest. | **Zur Allowlist hinzufügen** |
   | **Operator** | Bekommt Level 4 und darf alle Befehle im Spiel nutzen. | **Op geben** |
   | **Bannen** | Kommt nicht mehr auf den Server, auch nicht über die Allowlist. | **Bannen** |

4. **Bestätigen**\
   Klicke auf den passenden Button. Beim Bannen kannst Du vorher im Feld **Grund (Optional)** einen Grund mit höchstens 120 Zeichen angeben. Diesen sieht der Spieler, wenn er beitreten will.

## Nachricht an alle senden

1. **Dialog öffnen**\
   Klicke oben auf **Nachricht an alle**. Im Dialog siehst Du, wie viele Spieler gerade online sind und die Nachricht im Chat sehen.

2. **Nachricht schreiben**\
   Gib Deinen Text im Feld **Nachricht** ein, z.B. „Neustart in 5 Minuten, sucht Euch ein sicheres Plätzchen.“ Die Nachricht darf höchstens 200 Zeichen lang sein. Darunter siehst Du eine Vorschau, wie sie im Chat erscheint:

   ```text
   [Server] Deine Nachricht
   ```

3. **Senden**\
   Klicke auf **Senden**.

> [!TIP]
> Einen Neustart musst Du nicht von Hand ankündigen: Mit [geplanten Aufgaben](/tutorials/gameserver/set-up-scheduled-tasks) kannst Du Neustarts automatisch ausführen lassen.

## Spieler-Detailseite {#spieler-detailseite}

Klickst Du in der Liste auf einen Spieler (oder im Menü **…** auf **Details**), öffnet sich seine Detailseite. Oben siehst Du den Namen, Badges wie **Online** oder **Op-Level 4** und die Buttons **Kicken** und **Bannen**. Über **Spieler** kommst Du zurück zur Übersicht.

Ist der Spieler online, wirken Rechte, Spielmodus und Kicken sofort. Inventar, Position und Statistiken zeigen dagegen den letzten Speicherstand – wie lange der zurückliegt, siehst Du im Hinweis oben auf der Seite, z.B. „vor 2 Minuten“.

> [!NOTE]
> Minecraft legt den Speicherstand des Spielers erst an, sobald er das erste Mal gespielt und der Server gespeichert hat. Bis dahin steht auf der Detailseite „Noch kein Speicherstand“.

### Inventar

Im Bereich **Inventar** siehst Du die Gegenstände des Spielers so wie im Spiel: Rüstung, Zweithand, Inventar und Schnellleiste. Über die Tabs **Inventar** und **Endertruhe** wechselst Du zwischen dem normalen Inventar und der Endertruhe.

Daneben siehst Du:

- **Belegt … von 41 Plätzen** – wie viele Inventarplätze belegt sind
- **In der Hand** – der Gegenstand, den der Spieler gerade hält
- **Rüstung** – wie viele der 4 Rüstungsteile der Spieler trägt
- **Leben**, **Hunger** und **Erfahrung** – Gesundheit, Hungerleiste und Erfahrungslevel

Mit den Buttons **Heilen**, **Sättigen**, **Aushungern** und **Töten** füllst Du Leben oder Hungerleiste des Spielers auf, leerst die Hungerleiste oder tötest den Spieler.

Die Werte stammen aus der Datei `world/players/data/<UUID>.dat`. Darunter siehst Du unter **Gespeichert vor …**, wann sie zuletzt gespeichert wurde.

### Position und Spawnpunkt

In der rechten Spalte zeigt **Position** die Koordinaten des Spielers (x, y, z) und die Dimension, in der er sich befindet.

Im Bereich **Spawnpunkt** siehst Du:

- **Spawnpunkt** – wo der Spieler wieder erscheint, z.B. **Weltspawn**
- **Letzter Tod** – Dimension und Koordinaten des letzten Todes, z.B. „Oberwelt bei …“

Mit **Zum Spawnpunkt teleportieren** schickst Du den Spieler zurück zu seinem Spawnpunkt.

### Spielmodus

In der rechten Spalte findest Du außerdem die UUID des Spielers (zum Kopieren), wann er zuerst und zuletzt gesehen wurde, seine Spielzeit und den **Spielmodus**. Wähle dort **Überleben**, **Kreativ**, **Abenteuer** oder **Zuschauer**. Die Änderung wirkt sofort per Konsole.

> [!NOTE]
> „Der angezeigte Modus ist der Stand vom letzten Speichern.“ Hat sich der Spielmodus seitdem im Spiel geändert, zeigt das Dashboard das erst nach dem nächsten Speichern an.

> [!TIP]
> Den Standard-Spielmodus für alle neuen Spieler stellst Du unter [Spielmodus ändern](/tutorials/gameserver/minecraft/change-gamemode) ein.

### Rechte und Zugang

In der Box **Rechte und Zugang** steuerst Du per Schalter:

- **Auf der Allowlist** – der Spieler darf beitreten, wenn die Allowlist aktiv ist
- **Operator** – der Spieler darf Befehle im Spiel nutzen, je nach Level

Unter **Operator-Level** wählst Du eine Stufe von 1 bis 4. Level 4 erlaubt alle Befehle, auch `/stop` und `/save-all`. Was die einzelnen Stufen bedeuten, findest Du unter [OP-Rechte vergeben](/tutorials/gameserver/minecraft/grant-op-rights#op-level).

> [!IMPORTANT]
> Das Operator-Level steht in der Datei `ops.json` und lässt sich nur bei gestopptem Server ändern. Läuft der Server, überschreibt Minecraft die Änderung wieder.

### Verlauf

Unter **Verlauf** siehst Du, wer aus Deinem Team was bei diesem Spieler geändert hat, z.B. „Nachricht gesendet“ oder „Zum Operator gemacht“.

### Statistiken

Unter **Statistiken** siehst Du, was Minecraft für den Spieler über alle Spielsitzungen mitzählt:

| Wert | Bedeutung |
|------|-----------|
| **Spielzeit** | wie lange der Spieler insgesamt auf Deinem Server gespielt hat |
| **Tode** | wie oft der Spieler gestorben ist, inklusive wo zuletzt, z.B. „Zuletzt in der Oberwelt“ |
| **Spieler besiegt** | wie viele andere Spieler er besiegt hat, mit dem **Verhältnis** |
| **Blöcke abgebaut** | wie viele Blöcke der Spieler abgebaut hat |
| **Strecke** | wie weit sich der Spieler bewegt hat, inklusive des Anteils, den er gesprintet ist |
| **Am meisten abgebaut** | welche Blöcke der Spieler am häufigsten abgebaut hat |

Die Werte stammen aus der Datei `world/players/stats/<UUID>.json`.
