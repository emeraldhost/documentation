---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Minecraft PocketMine Edition Server hinzu"
description: "Admin auf einem Minecraft PocketMine Edition Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["minecraft-pocketmine"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/minecraft-pocketmine/add-mods", "gameserver/minecraft-pocketmine/add-savegame", "gameserver/minecraft-pocketmine/create-backup", "gameserver/minecraft-pocketmine/download-savegame"]
---

Adminrechte heißen bei PocketMine-MP **Operator-Rechte** (kurz „OP“). Vergeben werden sie über den Befehl `op`. Eingetragen wird dabei der **Minecraft- bzw. Xbox-Spielername** – keine UUID und keine XUID.

> [!NOTE]
> Alle Operatoren stehen in der Datei `ops.txt` im Hauptordner Deines Servers, eine Zeile pro Spieler. PocketMine-MP speichert die Namen dort automatisch klein geschrieben; beim Prüfen der Rechte spielt die Groß- und Kleinschreibung keine Rolle.

## Admin über die Konsole hinzufügen

Das ist der übliche Weg, wenn Du selbst noch keine Operator-Rechte hast.

1. **Konsole öffnen**\
   Öffne die **Verwaltung** Deines Servers und wechsle zur Konsole.

2. **Befehl eingeben**\
   Gib folgenden Befehl mit dem Spielernamen ein:

   ```text
   op <Spielername>
   ```

3. **Bestätigung abwarten**\
   Der Server bestätigt die Vergabe. Ist der Spieler gerade online, erhält er sofort seine Operator-Rechte.

> [!NOTE]
> Reagiert der Server in der Konsole nicht auf den Befehl, probiere ihn zusätzlich mit einem führenden `/` – also `/op <Spielername>`.

## Admin im Spiel hinzufügen

> [!WARNING]
> Um diesen Weg zu nutzen, musst Du selbst bereits Operator sein. Andernfalls nutze die Konsole.

1. **Server beitreten**\
   Verbinde Dich mit Deinem Server.

2. **Chat öffnen**\
   Öffne den Chat mit der für Dein Gerät passenden Taste beziehungsweise über das Chat-Symbol.

3. **Befehl eingeben**\
   Gib folgenden Befehl ein:

   ```text
   /op <Spielername>
   ```

## Adminrechte entziehen

```text
/deop <Spielername>
```

Damit verliert der Spieler seine Operator-Rechte wieder und wird aus der `ops.txt` entfernt.

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `/op <Spielername>` | Gibt dem angegebenen Spieler Operator-Rechte |
| `/deop <Spielername>` | Nimmt dem angegebenen Spieler die Operator-Rechte |

> [!TIP]
> Der Spieler muss **nicht** online sein. Du kannst auch einen Spieler zum Operator machen, der gerade nicht auf dem Server ist – wichtig ist nur, dass der Name exakt stimmt.

## ops.txt direkt bearbeiten

Alternativ kannst Du die Datei auch selbst bearbeiten.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server oder nutze den Datei-Browser in der Verwaltung.

3. **ops.txt öffnen**\
   Öffne im Hauptordner Deines Servers die Datei:

   ```text
   ops.txt
   ```

4. **Spielernamen eintragen**\
   Trage pro Zeile genau einen Spielernamen ein:

   ```text
   steve
   alex
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!WARNING]
> Die Datei wird beim Serverstart eingelesen. Änderungen, die Du im laufenden Betrieb direkt in der Datei vornimmst, greifen nicht zuverlässig und können vom Server überschrieben werden. Nutze im laufenden Betrieb immer die Befehle `op` und `deop`.

## Rechte feiner steuern

Operatoren erhalten über die Rechtegruppe `pocketmine.group.operator` gebündelt alle Adminrechte, zum Beispiel das Recht `pocketmine.command.op.give` zum Vergeben weiterer Operator-Rechte.

> [!NOTE]
> PocketMine-MP selbst bietet keine Möglichkeit, einzelne Rechte gezielt zu vergeben – es gibt nur „Operator“ oder „kein Operator“. Möchtest Du abgestufte Ränge oder einzelne Befehle für bestimmte Spieler freischalten, benötigst Du dafür ein Rechte-Plugin. Siehe [Mods hinzufügen](/tutorials/gameserver/minecraft-pocketmine/add-mods).

> [!TIP]
> Wie Du Spieler als Admin vom Server entfernst, erfährst Du unter [Spieler kicken & bannen](/tutorials/gameserver/minecraft-pocketmine/kick-ban-players).
