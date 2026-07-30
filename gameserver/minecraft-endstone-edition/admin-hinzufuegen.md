---
description: Admin auf einem Minecraft Endstone Edition Server hinzufügen
---

# So fügst du einen Admin auf deinem Minecraft Endstone Edition Server hinzu

Endstone bringt kein eigenes Admin-System mit, sondern nutzt die Operator-Stufen des Bedrock Dedicated Servers. Alle Admin-Befehle von Endstone – etwa `/ban` oder `/reload` – sind an die Stufe **Operator** gebunden.

## Rechte-Stufen im Überblick

| Stufe | Bedeutung |
|-------|-----------|
| `visitor` | Kann die Welt nur betrachten – kein Bauen und kein Interagieren |
| `member` | Standardstufe – kann bauen, abbauen und craften |
| `operator` | Vollständige Adminrechte inklusive aller Admin-Befehle |

:::: danger Wichtig
Damit Befehle **im Spiel-Chat** genutzt werden können, muss in der Datei `server.properties` im Hauptordner deines Servers folgender Eintrag gesetzt sein:

```
allow-cheats=true
```

Steht dort `false`, kann auch ein Spieler mit der Stufe Operator im Chat keine Befehle ausführen. In der Konsole deines Servers stehen dir die Befehle unabhängig von dieser Einstellung zur Verfügung.
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
   Der Server bestätigt die Vergabe. Ist der Spieler gerade online, erhält er seine Operator-Rechte sofort.

:::: info Hinweis
In der Konsole deines Servers gibst du Befehle ohne führenden `/` ein. Im Spiel-Chat schreibst du sie mit `/`.
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

Damit verliert der Spieler seine Operator-Rechte wieder.

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `/op <Spielername>` | Gibt dem angegebenen Spieler Operator-Rechte |
| `/deop <Spielername>` | Nimmt dem angegebenen Spieler die Operator-Rechte |

## Admin über die permissions.json eintragen

Alternativ trägst du einen Spieler direkt in die Rechte-Datei ein. Verwendet wird dort die **XUID** des Spielers, nicht sein Name.

:::: tip Tipp
Die XUID eines Spielers wird in der Konsole deines Servers angezeigt, sobald der Spieler dem Server beitritt.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server oder nutze den Datei-Browser in der Verwaltung.

3. <b>permissions.json öffnen</b><br>
   Öffne im Hauptordner deines Servers die Datei:

   ```
   permissions.json
   ```

4. <b>Eintrag hinzufügen</b><br>
   Füge innerhalb der eckigen Klammern folgenden Eintrag ein:

   ```json
   [
       {
           "permission": "operator",
           "xuid": "2535413418839840"
       }
   ]
   ```

   :::: info Hinweis
   Möchtest du mehrere Spieler eintragen, trennst du die Einträge mit einem Komma:

   ```json
   [
       {
           "permission": "operator",
           "xuid": "2535413418839840"
       },
       {
           "permission": "member",
           "xuid": "2535413418839841"
       }
   ]
   ```
   ::::

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: warning Achtung
Achte auf gültiges JSON: Jeder Eintrag steht in geschweiften Klammern, die Einträge werden durch Kommas getrennt, und nach dem letzten Eintrag steht **kein** Komma. Ist die Datei fehlerhaft, kann der Server sie nicht einlesen.
::::

:::: tip Tipp
Wie du Spieler als Admin vom Server entfernst, erfährst du unter [Spieler kicken & bannen](spieler-kicken-bannen.md).
::::
