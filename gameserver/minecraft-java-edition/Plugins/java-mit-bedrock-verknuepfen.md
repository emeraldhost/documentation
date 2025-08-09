---
description: Minecraft Java mit Bedrock verknüpfen sodass beide MC-Versionen auf den gleichen Server joinen können.
---

# Minecraft Java mit Bedrock verknüpfen sodass beide MC-Versionen auf den gleichen Server joinen können.

## Anforderungen

1. <b>Für diese Anleitung einen PaperMC Server</b>

2. <b>Der Server sollte 1.16.5 oder höher haben</b>

3. <b>Geduld</b>

## Plugins

1. <b>Als Hauptplugin solltest du [GeyserMC runterladen](https://geysermc.org/download?project=geyser) du benötigst die Version für Paper</b>

2. <b>Damit die Nutzer von Bedrock auch auf deinen Server sich authentifizieren können benötigst du [Floodgate](https://geysermc.org/download?project=floodgate) wie bei Geyser auch natürlich die Paper Version</b>

3. <b>Da Bedrock Spieler (fast) immer eine andere Version wie Java Spieler haben benötigst du [ViaVersion](https://www.spigotmc.org/resources/viaversion.19254/) damit können Spieler mit neueren Versionen auf ältere Version joinen</b>

4. <b>Bedrock Clients sind manchmal aber auch etwas älter deswegen empfehle ich auch [ViaBackwards](https://www.spigotmc.org/resources/viabackwards.27448/) damit können ältere Versionen auf neuere Versionen joinen</b>

## Schritt 1:

  <b>Plugins hochladen</b><br>
    Öffne den Dateimanager oder SFTP Dateimanager deines Server.
    Gehe dort in den Plugins Ordner und lade dort die Plugins,
    die du im vorherigen Schritt heruntergeladen hast hoch.
    Bei EmeraldiHost findest du diesen Links in deiner Sidebar.
    
  <img src="https://i.imgur.com/YcXtUvJ.png" />

  <b>Server starten.</b><br>
    Jetzt wo alle Plugins drauf sind,
    kannst du den Server einmal ganz normal starten.
    Dann sollten alle Plugins deren eigenen Konfigurationsordner
    in dem Plugins-Ordner erstellen.
    
### Mögliche Fehler:

  <b>Ich sehe den Plugin-Ordner nicht</b><br>
    Wenn du den Plugin-Ordner nicht siehst, keine Sorge.
    Du musst den Server einfach zuerst ganz normal starten,
    dann werden alle benötigten Ordner erstellt.

## Schritt 2:
  <b>GeyserMC konfigurieren</b><br>
    Begebe dich in den Plugins Ordner und dort in den
    Geyser-Spigot Ordner. (Keine Sorge du hast nicht
    die falsche Version runtergeladen, Geyser nennt
    es nur Spigot statt Paper.) Öffne dort die config.yml
    Datei, scrolle nun ein bisschen runter bis du die Zeile
    "clone-remote-port" findest diese änderst du um von false
    zu true.

  <img src="https://i.imgur.com/fN14tcw.png" />

  <b>Optionale Konfigurationen</b><br>
    Ich empfehle "command-suggestions" auf false zu stellen.
    Und "show-cooldown" auf actionbar zu setzen.
    Dies gibt den Nutzer ggf. bessere Spielerfahrung.

  <b>Wenn du nun mit diesem Schritt fertig bist,
  speichere die Datei.</b><br>

  <b>Keydatei kopieren</b><br>
    Einer der wichtigsten Schritte ist die key.pem Datei.
    Diese solltest du im Plugins/Floodgate Ordner finden.
    Lade dir diese herunter (Wenn du auf dem Webpanel bist.).
    Oder kopiere sie dir (Wenn du in WinSCP etc. bist.).
    Wenn du sie dir heruntergeladen hast oder kopiert hast,
    gehe erneut in den Geyser Ordner und füge oder lade sie dort hoch.

  <b>Optionale Floodgate Option</b><br>
   Wenn du den Bedrock-Spieler Prefix vor deren Namen ändern willst,
   dann begebe dich in die Floodgate config.yml Datei und änder dort 
   relativ weit oben die Zeile "username-prefix: "_"" dort wo _ in den
   Anführungszeichen steht kannst du den Prefix änder zu z.B. ein Ausrufezeichen.
   Es ist aber wichtig das du die Anführungszeichen dort lässt!

  <b>Wenn du nun mit diesem Schritt fertig bist,
    speichere die Datei.</b><br>

  <b>Chatnachrichten von Bedrock-Spielern</b><br>
    Damit Bedrock-Spieler Chatnachrichten versenden können musst du
    in der server.properties Datei die Zeile "enforce-secure-profile"
    auf "false" setzen

  <img src="https://i.imgur.com/IDylgtD.png" />
