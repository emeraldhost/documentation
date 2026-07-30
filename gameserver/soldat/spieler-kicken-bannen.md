---
description: Spieler auf einem Soldat Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Soldat Server

Spieler entfernst du auf einem Soldat Server über Chat-Befehle im Spiel. Alle Banns landen zusätzlich in einer Textdatei auf deinem Server, die du jederzeit selbst bearbeiten kannst.

:::: info Hinweis
Du benötigst Adminrechte, um diese Befehle nutzen zu können. Siehe [Admin hinzufügen](admin-hinzufuegen.md).
::::

:::: info Hinweis
Soldat bannt über die **IP-Adresse**. Eine Steam-ID oder eine Spieler-UUID gibt es hier nicht.
::::

:::: warning Zwei Serverversionen
Die Befehle in dieser Anleitung sind die des **klassischen** Soldat-Servers. **OpenSoldat** verwendet teilweise andere Namen:

| Klassisch | OpenSoldat |
|-----------|------------|
| `/mute` / `/unmute` | `/gmute` / `/ungmute` – schaltet den Spieler serverweit stumm |
| `/tempban <Minuten> <IP>` | nicht vorhanden |
| `/banlast` | nicht vorhanden |
| – | `/banhw <HWID>` – Bann über die Hardware-ID |
| – | `/banlist` – Bannliste ausgeben |

`/kick`, `/kicklast`, `/ban`, `/banip`, `/unban` und `/unbanlast` gibt es in beiden Versionen. Welche Version bei dir läuft, erkennst du daran, ob im Hauptverzeichnis eine `soldat.ini` oder ein Ordner `configs` mit einer `server.cfg` liegt.
::::

## Befehle im Spiel nutzen

1. <b>Als Admin anmelden</b><br>
   Melde dich im Chat mit deinem Adminpasswort an:

   ```
   /adminlog DeinAdminPasswort
   ```

2. <b>Befehl ausführen</b><br>
   Gib den gewünschten Befehl mit führendem `/` ein, zum Beispiel:

   ```
   /ban .:Major:.
   ```

   Statt des Spielernamens kannst du bei `/kick` und `/ban` auch die Spielernummer angeben:

   ```
   /ban 2
   ```

## Spieler kicken

```
/kick <Spielername oder Spielernummer>
```

Der Spieler wird vom Server getrennt, kann aber jederzeit wieder beitreten. Der Befehl funktioniert auch für Bots.

Mit folgendem Befehl entfernst du den zuletzt beigetretenen Spieler, ohne seinen Namen zu kennen:

```
/kicklast
```

## Spieler bannen

```
/ban <Spielername oder Spielernummer>
```

Der Spieler wird sofort vom Server geworfen und kann sich nicht mehr verbinden.

Kennst du nur die IP-Adresse, bannst du direkt darüber:

```
/banip <IP-Adresse>
```

Für einen zeitlich begrenzten Bann gibst du die Dauer in Minuten an:

```
/tempban <Minuten> <IP-Adresse>
```

Den zuletzt beigetretenen Spieler bannst du mit folgendem Befehl für eine Stunde:

```
/banlast
```

## Bann aufheben

```
/unban <IP-Adresse>
```

Den zuletzt ausgesprochenen Bann hebst du so auf:

```
/unbanlast
```

## Chat eines Spielers ausblenden

```
/mute <Spielername oder Spielernummer>
```

```
/unmute <Spielername oder Spielernummer>
```

:::: info Hinweis
Laut Dokumentation blendet `/mute` den Chat des Spielers nur für dich aus – es ist keine serverweite Stummschaltung. Stört ein Spieler alle anderen, hilft nur ein Kick oder ein Bann.
::::

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `/kick <Name oder Nummer>` | Spieler oder Bot vom Server trennen |
| `/kicklast` | Zuletzt beigetretenen Spieler kicken |
| `/ban <Name oder Nummer>` | Spieler dauerhaft aussperren |
| `/banip <IP-Adresse>` | IP-Adresse dauerhaft aussperren |
| `/tempban <Minuten> <IP-Adresse>` | IP-Adresse zeitlich begrenzt aussperren |
| `/banlast` | Zuletzt beigetretenen Spieler für eine Stunde bannen |
| `/unban <IP-Adresse>` | Bann aufheben |
| `/unbanlast` | Zuletzt ausgesprochenen Bann aufheben |
| `/mute <Name oder Nummer>` | Chat des Spielers für dich ausblenden |
| `/unmute <Name oder Nummer>` | Chat des Spielers wieder einblenden |

## Banns über die Datei verwalten

Alle Banns stehen in der Datei `banned.txt` im Hauptverzeichnis deines Servers. Pro Zeile steht ein Eintrag im folgenden Aufbau:

```
xxx.xxx.xxx.xxx:Dauer:Grund
```

Beispiele:

```
196.207.192.245:132760800:Banned by {USA} ~ Retartron
82.51.146.35:-1000:Banned by an admin
```

| Feld | Bedeutung |
|------|-----------|
| IP-Adresse | Die gesperrte IPv4-Adresse. Platzhalter sind erlaubt, damit lassen sich ganze IP-Bereiche sperren. |
| Dauer | Restdauer des Banns in Ticks. Ein **negativer Wert bedeutet dauerhaft**. |
| Grund | Freitext, der den Bann beschreibt |

### Eintrag entfernen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>banned.txt öffnen</b><br>
   Öffne per [SFTP](../sftp-verbindung-herstellen.md) die Datei `banned.txt` im Hauptverzeichnis deines Servers.

3. <b>Zeile löschen</b><br>
   Entferne die komplette Zeile des Eintrags, den du aufheben möchtest.

4. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: warning Achtung
Bearbeite die Datei nur bei gestopptem Server. Der Server schreibt sie im laufenden Betrieb selbst – Änderungen können sonst überschrieben werden.
::::

## Automatische Kicks und Banns

Soldat kann Spieler auch selbstständig entfernen. Beim klassischen Server verteilen sich diese Einstellungen auf zwei Dateien, bei OpenSoldat stehen sie gesammelt in der `configs/server.cfg`.

| Klassisch | Datei | OpenSoldat | Bedeutung |
|-----------|-------|------------|-----------|
| `PunishTK` | `server.ini` | `sv_punishtk` | Bestrafung für das Töten von Teamkameraden |
| `TKWarnings_Before_TempBan` | `server.ini` | `sv_warnings_tk` | Anzahl der Teamkills, bevor ein zeitweiser Bann folgt – wirkt nur mit `PunishTK=1` |
| `Max_Flood_Warnings` | `soldat.ini` | `sv_warnings_flood` | Verwarnungen wegen Chat-Spam, danach folgt ein Kick für 20 Minuten |
| `Max_Ping_Warnings` | `soldat.ini` | `sv_warnings_ping` | Verwarnungen wegen zu hohem Ping, danach folgt ein Kick für 15 Minuten |
| `Disable_AntiCheat_Kick` | `soldat.ini` | `sv_anticheatkick` | Steuert, ob der Anti-Cheat-Schutz Spieler automatisch kickt |

:::: info Hinweis
Änderungen an diesen Dateien wirken erst nach einem Neustart des Servers.
::::

:::: warning Achtung
Banns über die Hardware-ID (HWID) kennt nur **OpenSoldat**, dort über den Befehl `/banhw`. Der klassische Soldat-Server bringt keinen HWID-Bann mit – kursierende Befehle dafür stammen aus einem eingestellten Community-Script. Nutze dort die IP-basierten Banns.
::::
