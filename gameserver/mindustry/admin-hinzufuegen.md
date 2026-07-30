---
description: Admin auf einem Mindustry Server hinzufügen
---

# So fügst du einen Admin auf deinem Mindustry Server hinzu

Mindustry kennt **keine Admin-Datei**, die du per SFTP bearbeiten könntest. Adminrechte vergibst du ausschließlich über die **Konsole** deines Servers. Gespeichert werden sie in der Binärdatei `config/settings.bin`.

:::: danger Wichtig
Adminrechte hängen an der **Mindustry-UUID** eines Spielers – nicht an einem Steam- oder Epic-Konto. Die UUID vergibt Mindustry selbst, du liest sie über die Konsole aus.
::::

:::: info Hinweis
Dein Server muss laufen **und** eine Karte hosten. Ist keine Partie aktiv, lehnt der Befehl mit `Open the server first.` ab. Wie du eine Karte startest, steht unter [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

## Admin über den Namen hinzufügen

Solange der Spieler online ist, reicht sein Spielername.

1. <b>Spieler verbinden lassen</b><br>
   Der Spieler, der Adminrechte erhalten soll, muss deinem Server beitreten und online bleiben. Wie das geht, steht unter [Server beitreten](server-beitreten.md).

2. <b>Konsole öffnen</b><br>
   Öffne in der Verwaltung die **Konsole** deines Servers.

3. <b>Rechte vergeben</b><br>
   Gib den folgenden Befehl ein und ersetze `<Spielername>` durch den exakten Namen des Spielers:

   ```
   admin add <Spielername>
   ```

   :::: tip Beispiel
   ```
   admin add MaxMustermann
   ```
   ::::

4. <b>Ergebnis prüfen</b><br>
   Der Server bestätigt mit `Changed admin status of player: <Name>`. Die Rechte gelten sofort – ein Neustart ist nicht nötig.

:::: warning Achtung
Meldet der Server `Nobody with that name or ID could be found.`, ist der Spieler entweder nicht online oder der Name stimmt nicht exakt. Kontrolliere die Schreibweise mit `players` oder nutze die UUID.
::::

## Admin über die UUID hinzufügen

Über die UUID funktioniert der Befehl auch dann, wenn der Spieler gerade nicht verbunden ist – vorausgesetzt, er war schon einmal auf deinem Server.

1. <b>UUID ermitteln</b><br>
   Nutze in der Konsole einen dieser Befehle:

   | Befehl | Ausgabe |
   |--------|---------|
   | `players` | Alle verbundenen Spieler mit Adminstatus, Name, UUID und IP |
   | `admins` | Alle Admins mit letztem bekannten Namen, UUID und IP |
   | `info <Name/UUID/IP>` | Ausführliche Infos zu einem Spieler |
   | `search <Name>` | Sucht Spieler anhand eines Namensteils |

   :::: tip Tipp
   Beim Verbinden schreibt dein Server ohnehin Name und UUID in die Konsole. Du findest die UUID also auch im Konsolenprotokoll des jeweiligen Beitritts.
   ::::

2. <b>Rechte vergeben</b><br>
   Trage die UUID statt des Namens ein:

   ```
   admin add <UUID>
   ```

## Adminrechte entziehen

```
admin remove <Spielername/UUID>
```

:::: info Hinweis
Das erste Argument muss immer `add` oder `remove` sein. Andernfalls meldet der Server `Second parameter must be either 'add' or 'remove'.`
::::

## Was ein Admin im Spiel darf

Als Admin erhältst du im Spiel über die Spielerliste zusätzliche Aktionen:

| Aktion | Wirkung |
|--------|---------|
| **Kick** | Trennt den Spieler vom Server |
| **Ban** | Sperrt den Spieler dauerhaft aus |
| **Trace** | Zeigt Verbindungs- und Spielerinformationen an |
| **Wave** | Ruft die nächste Angriffswelle |
| **Switch Team** | Weist einen Spieler einem anderen Team zu |

:::: tip Tipp
Wie du Spieler zusätzlich über die Konsole entfernst, erfährst du unter [Spieler kicken & bannen](spieler-kicken-bannen.md).
::::

## Server nur für bestimmte Spieler öffnen

Möchtest du nur ausgewählte Spieler zulassen, aktiviere die Whitelist:

1. <b>Whitelist aktivieren</b><br>
   ```
   config whitelist true
   ```

2. <b>Spieler freischalten</b><br>
   Trage die UUID des Spielers ein:

   ```
   whitelist add <UUID>
   ```

3. <b>Liste prüfen</b><br>
   Ohne weiteres Argument zeigt dir der Befehl alle freigeschalteten Spieler mit Name und UUID:

   ```
   whitelist
   ```

:::: info Hinweis
Die Whitelist arbeitet ausschließlich mit UUIDs – Spielernamen werden hier nicht akzeptiert. Versucht ein nicht freigeschalteter Spieler beizutreten, sieht er `You are not whitelisted here.`, und dein Server nennt in der Konsole direkt den passenden `whitelist add`-Befehl.
::::

:::: danger Wichtig
Bearbeite `config/settings.bin` niemals mit einem Texteditor. Die Datei enthält neben den Adminrechten auch Banns, Whitelist und sämtliche Servereinstellungen in binärer Form und wird dabei zerstört.
::::
