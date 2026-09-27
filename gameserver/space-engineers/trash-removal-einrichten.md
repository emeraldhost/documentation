---
description: Trash Removal, AFK-Kick und Pause bei leerem Server auf einem Space Engineers Server einrichten
---

# So richtest du das automatische Aufräumen (Trash Removal) auf deinem Space Engineers Server ein

Space Engineers bringt ein eigenes Aufräumsystem mit: **Trash Removal** entfernt Trümmer und kleine verlassene Grids, begrenzt herumliegende Objekte und hält Grids an, die sich fern von Spielern bewegen. So bleibt deine Welt übersichtlich und der Server muss weniger Objekte berechnen — ganz ohne Plugins.

In dieser Anleitung richtest du drei Dinge ein:

- **Trash Removal** — was der Server automatisch löscht
- **AFK-Kick** — inaktive Spieler automatisch vom Server trennen
- **Simulation pausieren, wenn niemand online ist**

Für keine dieser Einstellungen gibt es ein Feld in der Verwaltung. Du änderst sie in den Dateien deines Servers oder im Admin-Menü im Spiel. Die Verwaltung überschreibt diese Werte beim Start nicht, deine Änderungen bleiben also erhalten.

## So bearbeitest du die Dateien

:::: warning Achtung
Stoppe deinen Server, bevor du eine Datei bearbeitest. Der Server schreibt die `Sandbox_config.sbc` bei jedem Speichern der Welt neu und überschreibt dabei deine Änderungen.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Backup erstellen</b><br>
   Erstelle ein [Backup](../backup-erstellen.md) oder lade dir eine Kopie der Datei herunter, die du bearbeiten willst. So kannst du den alten Stand wiederherstellen, falls beim Bearbeiten etwas schiefgeht.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server oder nutze den Datei-Browser in der Verwaltung.

4. <b>Datei öffnen</b><br>
   Öffne die passende Datei:

   | Einstellungen | Datei |
   | --- | --- |
   | Trash Removal und AFK-Kick | `/config/Saves/World/Sandbox_config.sbc` |
   | Pause bei leerem Server | `/config/SpaceEngineers-Dedicated.cfg` |

5. <b>Werte ändern</b><br>
   Suche den jeweiligen Eintrag und ändere nur den Wert zwischen den Tags. Die Einträge stehen bereits in der Datei, du musst keine neuen Zeilen anlegen.

6. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

Wie du Welteinstellungen allgemein änderst, erfährst du unter [Welteinstellungen ändern](welt-einstellungen-aendern.md).

:::: danger Wichtig
Achte auf gültiges XML: Jeder Wert steht zwischen einem öffnenden und einem gleichnamigen schließenden Tag, zum Beispiel `<AFKTimeountMin>30</AFKTimeountMin>`.

- Kann der Server die `Sandbox_config.sbc` nicht lesen, verwirft er sie und lädt die Einstellungen stattdessen aus der `Sandbox.sbc`. Beim nächsten Speichern überschreibt er die `Sandbox_config.sbc`, deine Änderungen gehen verloren.
- Kann der Server die `SpaceEngineers-Dedicated.cfg` nicht lesen, verwirft er sie und nutzt die Standardwerte des Spiels. Dann fehlen unter anderem der Pfad zu deiner Welt, deine Admins und deine Bans — deine Welt wird nicht geladen.
::::

:::: tip Tipp
Beim Laden der Welt zeigt die Server-Konsole die Zeile `Sandbox world configuration file found, overriding checkpoint settings.` Fehlt sie, konnte der Server deine `Sandbox_config.sbc` nicht lesen. Stoppe den Server dann, spiele deine Sicherung aus Schritt 2 wieder ein und ändere die Werte erneut.
::::

## Trash Removal

Trash Removal ist auf deinem Server bereits aktiv. Es prüft laufend alle Grids — also Schiffe, Stationen und Trümmer — und löscht diejenigen, die keine der Schutzregeln erfüllen.

### Was mit den Standardwerten gelöscht wird

Mit den Standardwerten löscht der Server ein Grid nur, wenn **alle** folgenden Punkte zutreffen:

- Es hat **weniger als 20 Blöcke**.
- Es ist **mehr als 500 m** von jedem Spieler entfernt.
- Es ist **nicht statisch**, also keine Station.
- Es hat **keinen Strom**.
- Es wird **nicht gesteuert**.
- Es hat **keinen Produktionsblock** wie eine Raffinerie oder einen Assembler.
- Es hat **keinen Medical Room und kein Survival Kit**.

Typische Beispiele sind Trümmer nach einem Kampf, abgerissene Einzelblöcke oder zurückgelassene kleine Schiffe ohne Strom. Grids, die fest mit einem geschützten Grid verbunden sind — zum Beispiel über einen Rotor, einen Kolben oder einen Verbinder —, löscht Trash Removal ebenfalls nicht.

:::: info Hinweis
Trash Removal misst den Abstand nur zu Spielern, die gerade online sind. Ist niemand auf dem Server, gelten alle Grids als geschützt, aufgeräumt wird erst wieder, wenn jemand spielt. Einzige Ausnahme ist `PlayerInactivityThreshold` (siehe unten).
::::

### Die Einstellungen in der Sandbox_config.sbc

Die Einträge stehen in der `Sandbox_config.sbc` direkt untereinander. In der vorinstallierten Welt sehen sie so aus:

```xml
<RemoveOldIdentitiesH>0</RemoveOldIdentitiesH>
<TrashRemovalEnabled>true</TrashRemovalEnabled>
<StopGridsPeriodMin>15</StopGridsPeriodMin>
<TrashFlagsValue>1562</TrashFlagsValue>
<AFKTimeountMin>0</AFKTimeountMin>
<BlockCountThreshold>20</BlockCountThreshold>
<PlayerDistanceThreshold>500</PlayerDistanceThreshold>
<OptimalGridCount>0</OptimalGridCount>
<PlayerInactivityThreshold>0</PlayerInactivityThreshold>
<PlayerCharacterRemovalThreshold>15</PlayerCharacterRemovalThreshold>
```

`AFKTimeountMin` gehört zum [AFK-Kick](#afk-kick), die übrigen Einträge erklärt diese Tabelle:

| Eintrag | Standard | Bedeutung |
| --- | --- | --- |
| `TrashRemovalEnabled` | `true` | Schaltet Trash Removal ein (`true`) oder aus (`false`). Mit `false` entfallen auch `StopGridsPeriodMin`, `PlayerCharacterRemovalThreshold` und `RemoveOldIdentitiesH`. |
| `BlockCountThreshold` | `20` | Grids mit mindestens so vielen Blöcken löscht Trash Removal nie. |
| `PlayerDistanceThreshold` | `500` | Grids, die näher als diese Entfernung in Metern an einem Spieler sind, löscht Trash Removal nicht. |
| `TrashFlagsValue` | `1562` | Legt fest, welche Eigenschaften ein Grid vor dem Löschen schützen. Ändere diesen Wert im Spiel, siehe [Schutzregeln im Spiel ändern](#schutzregeln-im-spiel-andern). |
| `StopGridsPeriodMin` | `15` | Grids, die sich fern von Spielern bewegen, hält der Server nach dieser Zeit in Minuten an. `0` schaltet das ab. |
| `PlayerCharacterRemovalThreshold` | `15` | Entfernt die Spielfigur eines Spielers, der die Verbindung getrennt hat, nach dieser Zeit in Minuten. `0` schaltet das ab. |
| `RemoveOldIdentitiesH` | `0` | Entfernt inaktive Spieler-Identitäten, denen keine Grids gehören, nach dieser Zeit in Stunden. `0` schaltet das ab. |
| `PlayerInactivityThreshold` | `0` | Löscht **alle** Grids eines Spielers, wenn er so viele Stunden nicht mehr online war. `0` schaltet das ab. |
| `OptimalGridCount` | `0` | Hält die Anzahl der Grids in der Welt bei ungefähr diesem Wert. `0` schaltet das ab. |

:::: warning Achtung
`PlayerInactivityThreshold` löscht Grids ohne Rücksicht auf Blockanzahl, Strom oder Abstand. Keen warnt in der Beschreibung der Einstellung ausdrücklich: „!WARNING! This will remove all grids of the player." Gezählt wird die Zeit seit dem letzten Logout des Besitzers. Wähle den Wert großzügig, zum Beispiel `720` für 30 Tage, damit Spieler im Urlaub nicht ihre Basis verlieren.
::::

:::: warning Achtung
Auch `OptimalGridCount` hebelt Schutzregeln aus. Keen warnt: „It ignores Powered and Fixed flags, Block Count and lowers Distance from player." Sind mehr Grids in der Welt als eingestellt, verringert der Server schrittweise den geschützten Abstand zu Spielern und entfernt dann auch Stationen, Grids mit Strom und Grids mit vielen Blöcken. Lass den Wert auf `0`, wenn du dir nicht sicher bist.
::::

:::: info Hinweis
Die `SpaceEngineers-Dedicated.cfg` enthält im Block `<SessionSettings>` ebenfalls Einträge wie `<TrashRemovalEnabled>` oder `<AFKTimeountMin>`. Diese nutzt der Server nur, wenn er eine neue Welt erstellt. Für deine bestehende Welt zählen allein die Werte in der `Sandbox_config.sbc`.
::::

### Herumliegende Objekte begrenzen

Mit `MaxFloatingObjects` legst du fest, wie viele Objekte gleichzeitig frei in der Welt herumliegen dürfen — zum Beispiel Erz, Steine oder Bauteile. Wird die Grenze überschritten, entfernt der Server zuerst die ältesten Objekte. Der Eintrag steht ebenfalls in der `Sandbox_config.sbc`:

```xml
<MaxFloatingObjects>56</MaxFloatingObjects>
```

Das Spiel sieht Werte von `2` bis `100` vor. Trägst du mehr als `100` ein, schaltet der Server beim Laden automatisch den [Experimental Modus](experimental-modus-aktivieren.md) ein — auch wenn er in der Verwaltung auf `false` steht (siehe [Erzwungener Experimental Modus](welt-einstellungen-aendern.md#erzwungener-experimental-modus)).

:::: info Crossplay-Server
Ist auf deinem Server [Crossplay](crossplay-aktivieren.md) aktiv, setzt der Server beim Laden der Welt feste Grenzen: `MaxFloatingObjects` höchstens `50`, `BlockCountThreshold` mindestens `50` und `PlayerDistanceThreshold` höchstens `250`. Werte außerhalb dieser Grenzen korrigiert er automatisch.
::::

### Veränderte Voxel zurücksetzen (optional)

Trash Removal kann auch veränderte Voxel zurücksetzen, zum Beispiel abgetragene Planetenoberflächen. Diese Funktion ist standardmäßig aus:

```xml
<VoxelTrashRemovalEnabled>false</VoxelTrashRemovalEnabled>
<VoxelPlayerDistanceThreshold>5000</VoxelPlayerDistanceThreshold>
<VoxelGridDistanceThreshold>5000</VoxelGridDistanceThreshold>
<VoxelAgeThreshold>24</VoxelAgeThreshold>
```

Mit `true` setzt der Server Voxel-Bereiche in ihren Ursprungszustand zurück, die mehr als `VoxelPlayerDistanceThreshold` Meter von Spielern und mehr als `VoxelGridDistanceThreshold` Meter von Grids entfernt sind und seit mindestens `VoxelAgeThreshold` Minuten nicht verändert wurden.

:::: tip Tipp
Lass die Funktion aus, wenn Spieler abseits ihrer Grids Tunnel, Höhlen oder Minen angelegt haben, die erhalten bleiben sollen.
::::

### Schutzregeln im Spiel ändern

Welche Eigenschaften ein Grid schützen, speichert `TrashFlagsValue` als Zahl. Diese Zahl musst du nicht selbst berechnen: Im Admin-Menü setzt du die Schutzregeln per Haken. Dafür muss dein Server laufen. Er übernimmt die Werte sofort und schreibt sie beim nächsten Speichern der Welt in die `Sandbox_config.sbc`.

1. <b>Als Admin beitreten</b><br>
   Tritt deinem Server mit einem Konto bei, das Admin-Rechte hat — siehe [Admins hinzufügen](admins-hinzufuegen.md).

2. <b>Admin-Menü öffnen</b><br>
   Drücke `Alt` + `F10`.

3. <b>Trash Removal auswählen</b><br>
   Wähle oben in der Auswahlliste des Admin-Menüs **Trash Removal** und in der zweiten Auswahlliste darunter **General**.

4. <b>Schutzregeln festlegen</b><br>
   Ein **Haken** bedeutet: Grids mit dieser Eigenschaft **dürfen gelöscht werden**. **Ohne Haken** schützt die Eigenschaft das Grid.

   | Checkbox | Standard | Betrifft |
   | --- | --- | --- |
   | **Fixed (stations)** | kein Haken | statische Grids, also Stationen |
   | **Stationary** | Haken | Grids, die stillstehen |
   | **Linearly moving** | Haken | Grids, die sich gleichmäßig bewegen |
   | **Accelerating** | Haken | Grids, die beschleunigen oder abbremsen |
   | **Powered** | kein Haken | Grids mit Strom |
   | **Controlled** | kein Haken | Grids, die gerade gesteuert werden |
   | **With production** | kein Haken | Grids mit Raffinerie, Assembler oder einem anderen Produktionsblock |
   | **With respawn point** | kein Haken | Grids mit Medical Room oder Survival Kit |

   Unter den Checkboxen stellst du außerdem `BlockCountThreshold` (**With less blocks than**), `PlayerDistanceThreshold` (**Distance from player (m)**) und `PlayerInactivityThreshold` (**Time since logout of owner (h)**) ein.

5. <b>Weitere Werte einstellen</b><br>
   Wählst du in der zweiten Auswahlliste **Other**, findest du **Optimal grid count**, **Delete offline char. after (m)** (`PlayerCharacterRemovalThreshold`), **AFK Timeout**, **Stop Grids Period (m)** und **Remove Old Identities (h)**.

6. <b>Änderungen übernehmen</b><br>
   Klicke auf **Submit changes**. Stoppe oder starte deinen Server danach erst neu, wenn die Server-Konsole `Autosave` gemeldet hat — erst dann stehen die neuen Werte in der `Sandbox_config.sbc`. Wie oft der Server speichert, legst du mit **Automatischer Backup Interval** fest (siehe [Automatische Backups einrichten](automatische-backups-aktivieren.md)).

:::: warning Achtung
Setzt du bei **With respawn point** einen Haken, kann Trash Removal auch Schiffe und Stationen mit Medical Room oder Survival Kit löschen — und damit womöglich den einzigen Respawn-Punkt eines Spielers. Das Spiel weist dich beim Setzen des Hakens selbst darauf hin.
::::

:::: info Hinweis
Die Bezeichnungen stammen aus der englischen Spielversion. Mit der Schaltfläche **Suspend** bzw. **Enable** unter **General** schaltest du Trash Removal komplett aus oder wieder ein.
::::

## AFK-Kick

Mit dem AFK-Kick trennt der Server Spieler automatisch, die eine bestimmte Zeit lang nichts eingegeben haben. Standardmäßig ist er aus.

Setze in der `Sandbox_config.sbc` den Eintrag `AFKTimeountMin` auf die gewünschte Zeit in Minuten, zum Beispiel `30`:

```xml
<AFKTimeountMin>30</AFKTimeountMin>
```

Mit `0` schaltest du den AFK-Kick wieder ab. Alternativ stellst du den Wert im Admin-Menü unter **Trash Removal** > **Other** bei **AFK Timeout** ein.

:::: warning Achtung
Der Eintrag heißt wirklich `AFKTimeountMin` — mit dem Tippfehler „Timeount" aus dem Original des Spiels. Übernimm die Schreibweise exakt. Schreibst du `AFKTimeoutMin`, erkennt der Server den Eintrag nicht.
::::

Eine Minute vor dem Kick zeigt das Spiel dem Spieler den Hinweis `Please note: If you remain inactive for 1 minute you will be disconnected.` Jede Eingabe mit Tastatur, Maus oder Controller setzt die Zeit zurück. Der AFK-Kick gilt auch für Admins. Gekickte Spieler können sofort wieder beitreten.

## Simulation pausieren, wenn niemand online ist

Normalerweise läuft deine Welt auch ohne Spieler weiter. Mit `PauseGameWhenEmpty` berechnet der Server die Spielwelt nur, solange mindestens ein Spieler verbunden ist. Sobald jemand beitritt, läuft die Welt weiter.

Der Eintrag steht nicht in der Welt, sondern in `/config/SpaceEngineers-Dedicated.cfg`. Setze ihn auf `true`:

```xml
<PauseGameWhenEmpty>true</PauseGameWhenEmpty>
```

:::: warning Achtung
Während der Pause steht alles still: Raffinerien, Assembler, Timer-Blöcke, Programmierbare Blöcke und andere Anlagen arbeiten nicht weiter, solange niemand online ist. Soll deine Basis auch offline weiterproduzieren, lass den Wert auf `false`.
::::

:::: info Hinweis
Weil die Welt pausiert, speichert der Server bei leerem Server auch nicht automatisch. Was seit dem letzten automatischen Speichern passiert ist, speichert er deshalb erst, wenn wieder jemand online ist.
::::

## Wurde etwas Falsches gelöscht?

Trash Removal löscht endgültig. Hat der Server ein Grid entfernt, das bleiben sollte, setze deine Welt über ein Backup zurück — siehe [Automatisches Backup wiederherstellen](automatisches-backup-wiederherstellen.md). Passe danach die Schutzregeln an, damit das nicht erneut passiert.
