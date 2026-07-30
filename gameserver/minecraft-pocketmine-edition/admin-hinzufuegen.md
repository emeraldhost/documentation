---
description: Admin auf einem Minecraft PocketMine Edition Server hinzufügen
---

# So fügst du einen Admin auf deinem Minecraft PocketMine Edition Server hinzu

Adminrechte heißen bei PocketMine-MP **Operator-Rechte** (kurz "OP"). Vergeben werden sie über den Befehl `op`. Eingetragen wird dabei der **Minecraft- bzw. Xbox-Spielername** – keine UUID und keine XUID.

:::: info Hinweis
Alle Operatoren stehen in der Datei `ops.txt` im Hauptordner deines Servers, eine Zeile pro Spieler. PocketMine-MP speichert die Namen dort automatisch klein geschrieben; beim Prüfen der Rechte spielt die Groß- und Kleinschreibung keine Rolle.
::::

## Admin über die Konsole hinzufügen

Das ist der übliche Weg, wenn du selbst noch keine Operator-Rechte hast.

1. <b>Konsole öffnen</b><br>
   Öffne die **Verwaltung** deines Servers und wechsle zur Konsole.

2. <b>Befehl eingeben</b><br>
   Gib folgenden Befehl mit dem Spielernamen ein:

   ```
   op <Spielername>
   ```

3. <b>Bestätigung abwarten</b><br>
   Der Server bestätigt die Vergabe. Ist der Spieler gerade online, erhält er sofort seine Operator-Rechte.

:::: info Hinweis
Reagiert der Server in der Konsole nicht auf den Befehl, probiere ihn zusätzlich mit einem führenden `/` – also `/op <Spielername>`.
::::

## Admin im Spiel hinzufügen

:::: warning Achtung
Um diesen Weg zu nutzen, musst du selbst bereits Operator sein. Andernfalls nutze die Konsole.
::::

1. <b>Server beitreten</b><br>
   Verbinde dich mit deinem Server.

2. <b>Chat öffnen</b><br>
   Öffne den Chat mit der für dein Gerät passenden Taste beziehungsweise über das Chat-Symbol.

3. <b>Befehl eingeben</b><br>
   Gib folgenden Befehl ein:

   ```
   /op <Spielername>
   ```

## Adminrechte entziehen

```
/deop <Spielername>
```

Damit verliert der Spieler seine Operator-Rechte wieder und wird aus der `ops.txt` entfernt.

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `/op <Spielername>` | Gibt dem angegebenen Spieler Operator-Rechte |
| `/deop <Spielername>` | Nimmt dem angegebenen Spieler die Operator-Rechte |

:::: tip Tipp
Der Spieler muss **nicht** online sein. Du kannst auch einen Spieler zum Operator machen, der gerade nicht auf dem Server ist – wichtig ist nur, dass der Name exakt stimmt.
::::

## ops.txt direkt bearbeiten

Alternativ kannst du die Datei auch selbst bearbeiten.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server oder nutze den Datei-Browser in der Verwaltung.

3. <b>ops.txt öffnen</b><br>
   Öffne im Hauptordner deines Servers die Datei:

   ```
   ops.txt
   ```

4. <b>Spielernamen eintragen</b><br>
   Trage pro Zeile genau einen Spielernamen ein:

   ```
   steve
   alex
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: warning Achtung
Die Datei wird beim Serverstart eingelesen. Änderungen, die du im laufenden Betrieb direkt in der Datei vornimmst, greifen nicht zuverlässig und können vom Server überschrieben werden. Nutze im laufenden Betrieb immer die Befehle `op` und `deop`.
::::

## Rechte feiner steuern

Operatoren erhalten über die Rechtegruppe `pocketmine.group.operator` gebündelt alle Adminrechte, zum Beispiel das Recht `pocketmine.command.op.give` zum Vergeben weiterer Operator-Rechte.

:::: info Hinweis
PocketMine-MP selbst bietet keine Möglichkeit, einzelne Rechte gezielt zu vergeben – es gibt nur "Operator" oder "kein Operator". Möchtest du abgestufte Ränge oder einzelne Befehle für bestimmte Spieler freischalten, benötigst du dafür ein Rechte-Plugin. Siehe [Mods hinzufügen](mods-hinzufuegen.md).
::::

:::: tip Tipp
Wie du Spieler als Admin vom Server entfernst, erfährst du unter [Spieler kicken & bannen](spieler-kicken-bannen.md).
::::
