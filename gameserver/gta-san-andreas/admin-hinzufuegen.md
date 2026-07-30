---
description: Admin auf einem GTA San Andreas Server hinzufügen
---

# So fügst du einen Admin auf deinem GTA San Andreas Server hinzu

SA-MP und open.mp haben **kein Adminsystem mit Spieler-IDs**. Es gibt keine Admin-Datei, in die du eine ID einträgst, und kein Rechtesystem mit mehreren Stufen. Die einzige eingebaute Administrationsfunktion ist **RCON** — wer das RCON-Passwort kennt, ist Admin.

:::: info Hinweis
Abgestufte Adminrechte, Login über einen Account oder Befehle wie `/setadmin` kommen immer vom **Gamemode**, nicht vom Server. Wie du dort Admins einträgst, steht in der Dokumentation des jeweiligen Gamemodes.
::::

## RCON-Passwort setzen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Konfiguration öffnen</b><br>
   Öffne im Hauptverzeichnis deines Servers die Konfigurationsdatei. Bei **open.mp** ist das `config.json`, bei **SA-MP** die `server.cfg`.

4. <b>Passwort eintragen</b><br>

   **open.mp — `config.json`:**

   ```json
   {
       "rcon": {
           "password": "dein-sicheres-passwort"
       }
   }
   ```

   **SA-MP — `server.cfg`:**

   ```
   rcon_password dein-sicheres-passwort
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: danger Wichtig
Der Standardwert lautet `changeme`. Solange dieser Wert gesetzt ist, **startet dein Server nicht**. Vergib deshalb immer ein eigenes Passwort.
::::

:::: warning Achtung
Das RCON-Passwort ist nicht das Serverpasswort. Mit dem RCON-Passwort erhält jeder die volle Kontrolle über deinen Server — gib es nur an Personen weiter, denen du vertraust, und verwende ein anderes Passwort als das Beitrittspasswort deines Servers.
::::

## Im Spiel als Admin anmelden

1. <b>Server beitreten</b><br>
   Verbinde dich wie gewohnt mit deinem Server. Siehe [Server beitreten](server-beitreten.md).

2. <b>Chat öffnen</b><br>
   Drücke `T`, um den Chat zu öffnen.

3. <b>Anmelden</b><br>
   Melde dich mit deinem RCON-Passwort an:

   ```
   /rcon login dein-sicheres-passwort
   ```

4. <b>Befehle nutzen</b><br>
   Nach der Anmeldung führst du RCON-Befehle mit vorangestelltem `/rcon` aus:

   ```
   /rcon players
   ```

## Nützliche RCON-Befehle

| Befehl | Beschreibung |
|--------|--------------|
| `/rcon players` | Zeigt alle verbundenen Spieler mit ID, Name, IP-Adresse und Ping |
| `/rcon say <Text>` | Sendet eine Nachricht an alle Spieler |
| `/rcon hostname <Name>` | Ändert den angezeigten Servernamen |
| `/rcon password <Passwort>` | Setzt ein Beitrittspasswort — `password 0` entfernt es wieder |
| `/rcon mapname <Name>` | Ändert den im Serverbrowser angezeigten Kartennamen |
| `/rcon gmx` | Startet den Gamemode neu und lädt dabei den nächsten Eintrag aus deiner Gamemode-Liste |
| `/rcon changemode <Gamemode>` | Wechselt den Gamemode |
| `/rcon weather <ID>` | Ändert das Wetter |
| `/rcon gravity <Wert>` | Ändert die Schwerkraft |
| `/rcon exit` | Fährt den Server herunter |

:::: tip Tipp
Wie du Spieler mit RCON vom Server entfernst, erfährst du unter [Spieler kicken & bannen](spieler-kicken-bannen.md).
::::

## Externe Remote Console

Neben dem Weg über den Chat gibt es die externe Remote Console. Damit setzt du RCON-Befehle ab, ohne im Spiel zu sein — die Befehle werden dort **ohne** das Präfix `/rcon` eingegeben.

Ob dieser externe Zugang aktiv ist, steuern zwei Einstellungen:

**open.mp — `config.json`:**

```json
{
    "rcon": {
        "enable": true
    }
}
```

**SA-MP — `server.cfg`:**

```
rcon 1
```

:::: info Hinweis
Bei open.mp steht `rcon.enable` standardmäßig auf `false` und wird nur beim Serverstart eingelesen. Da die Dokumentation nicht eindeutig trennt, ob diese Einstellung auch die Anmeldung im Spiel betrifft, solltest du sie setzen und anschließend testen, ob `/rcon login` weiterhin funktioniert.
::::

:::: warning Achtung
Ein aktivierter externer RCON-Zugang ist aus dem Internet erreichbar. Nutze ihn nur mit einem starken Passwort und schalte ihn ab, wenn du ihn nicht brauchst.
::::
