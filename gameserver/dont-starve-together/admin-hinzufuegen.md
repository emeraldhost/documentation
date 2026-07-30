---
description: Admin auf einem Don’t Starve Together Server hinzufügen
---

# So fügst du einen Admin auf deinem Don’t Starve Together Server hinzu

Admins werden auf deinem Server über die Datei `adminlist.txt` festgelegt. Dort trägst du die Klei-User-ID jedes Spielers ein, der Admin-Rechte bekommen soll.

:::: warning Achtung
Don’t Starve Together verwendet **keine** SteamID64 für Admins, sondern die Klei-User-ID. Sie beginnt bei Online-Servern immer mit `KU_`.
::::

## Klei-User-ID herausfinden

Du hast mehrere Möglichkeiten, deine Klei-User-ID zu finden:

- **Im Spiel:** Klicke im Hauptmenü auf **Account**. Es öffnet sich die Kontoseite in deinem Browser, auf der die User-ID steht.
- **Im Browser:** Melde dich unter [accounts.klei.com](https://accounts.klei.com/account/info) mit deinem Steam-Konto an. Deine User-ID steht in der Kontoübersicht.
- **Über die Konsole:** Drücke im Spiel `~` und gib folgenden Befehl ein:

  ```
  TheNet:GetUserID()
  ```

- **Für andere Spieler:** Bist du bereits Admin, listet dir dieser Konsolenbefehl alle Spieler mit ihrer User-ID auf:

  ```
  c_listallplayers()
  ```

  Die Ausgabe hat das Format `[1] (KU_xxxxxxxx) SpielerName <charakter>`.

:::: tip Tipp
Du findest die User-ID auch serverseitig: In den Shard-Ordnern `Master` und `Caves` liegt die Datei `server_chat_log.txt`. Vor jeder Chat-Nachricht steht die Klei-User-ID des Spielers, der sie geschrieben hat.
::::

## Admin eintragen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server oder nutze den Datei-Browser in der Verwaltung.

3. <b>Cluster-Ordner öffnen</b><br>
   Wechsle in den Ordner, in dem die Datei `cluster.ini` liegt. Das ist dein Cluster-Ordner.

4. <b>adminlist.txt öffnen</b><br>
   Öffne dort die Datei `adminlist.txt`. Existiert sie noch nicht, lege sie neu an:

   ```
   <Cluster-Ordner>/adminlist.txt
   ```

5. <b>User-IDs eintragen</b><br>
   Trage pro Zeile genau eine Klei-User-ID ein — ohne Kommas und ohne Anführungszeichen:

   ```
   KU_xxxxxxxx
   KU_yyyyyyyy
   ```

6. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server. Erst beim Start liest der Server die `adminlist.txt` neu ein.

:::: info Hinweis
Die Datei liegt im Cluster-Ordner, also auf derselben Ebene wie `cluster.ini` — nicht in den Shard-Ordnern `Master` oder `Caves`. Sie gilt automatisch für alle Shards deines Servers.
::::

:::: tip Tipp
Läuft dein Server im Offline-Modus, beginnen die User-IDs stattdessen mit `OU_` und bestehen nur aus Ziffern. Das Format der Datei bleibt gleich.
::::
