---
description: Admin auf einem Necesse Server hinzufügen
---

# So fügst du einen Admin auf deinem Necesse Server hinzu

Necesse kennt **keine Admin-Datei**, die du per SFTP bearbeiten könntest. Rechte vergibst du ausschließlich über den Befehl `/permissions` – entweder direkt in der Konsole deiner Verwaltung oder im Chat des Spiels. Angegeben wird dabei der **Spielername**, nicht die SteamID64.

:::: danger Wichtig
Der Spieler muss **online** auf deinem Server sein, während du ihm Rechte gibst. Für einen Spieler, der gerade nicht verbunden ist, lässt sich keine Rechtestufe setzen.
::::

## Rechtestufen

| Stufe | Rechte |
|-------|--------|
| `user` | Standardstufe ohne Sonderrechte |
| `moderator` | Darf Spieler kicken |
| `admin` | Darf zusätzlich bannen, Welteinstellungen ändern und Cheat-Befehle nutzen |
| `owner` | Darf alle Befehle nutzen, inklusive der Rechtevergabe |

## Admin über die Konsole hinzufügen

Der zuverlässigste Weg führt über die Konsole in der Verwaltung. Dort brauchst du selbst keine Rechte – die Konsole spricht direkt mit dem Server.

1. <b>Server starten</b><br>
   Starte deinen Server über die Verwaltung, falls er nicht bereits läuft.

2. <b>Spieler verbinden lassen</b><br>
   Der Spieler, der Rechte erhalten soll, muss dem Server beitreten und online bleiben. Wie du deinem Server beitrittst, steht unter [Server beitreten](server-beitreten.md).

3. <b>Konsole öffnen</b><br>
   Öffne in der Verwaltung die **Konsole** deines Servers.

4. <b>Rechte vergeben</b><br>
   Gib den folgenden Befehl ein und ersetze `<Spielername>` durch den exakten Namen des Spielers:

   ```
   /permissions set <Spielername> admin
   ```

   :::: tip Beispiel
   ```
   /permissions set MaxMustermann owner
   ```
   ::::

5. <b>Ergebnis prüfen</b><br>
   Der Server bestätigt die Änderung in der Konsole. Die Rechte gelten sofort – ein Neustart ist nicht nötig.

## Admin im Spiel hinzufügen

Hast du selbst bereits die Stufe `owner`, kannst du weitere Rechte auch direkt im Spiel vergeben.

1. <b>Chat öffnen</b><br>
   Drücke im Spiel `Enter`, um den Chat zu öffnen.

2. <b>Befehl eingeben</b><br>
   Nutze denselben Befehl wie in der Konsole:

   ```
   /permissions set <Spielername> moderator
   ```

## Rechte prüfen und entziehen

| Befehl | Beschreibung |
|--------|-------------|
| `/permissions list` | Zeigt alle Spieler mit vergebenen Rechten an |
| `/permissions get <Spielername>` | Zeigt die Rechtestufe eines Spielers an |
| `/permissions set <Spielername> user` | Entzieht alle Sonderrechte |

:::: warning Achtung
Groß- und Kleinschreibung des Spielernamens müssen exakt stimmen. Nutze `/permissions list`, um die eingetragene Schreibweise zu kontrollieren.
::::

## Weitere Befehle für Owner

| Befehl | Beschreibung |
|--------|-------------|
| `/stop` | Fährt den Server sauber herunter |
| `/allowcheats` | Schaltet Cheat-Befehle für die Welt frei |
| `/regen` | Erzeugt die aktuelle Ebene (Insel bzw. Dimension) neu |

:::: danger Wichtig
`/allowcheats` lässt sich **nicht rückgängig machen**. Einmal freigeschaltet, bleiben die Cheat-Befehle für diese Welt dauerhaft aktiv. `/regen` erzeugt die betroffene Ebene komplett neu und vernichtet dabei alles, was ihr dort gebaut habt – erstelle vorher ein [Backup](backup-erstellen.md).
::::

:::: tip Tipp
Wie du als Admin Spieler vom Server entfernst, erfährst du unter [Spieler kicken & bannen](spieler-kicken-bannen.md).
::::
