import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  titleTemplate: ":title - EmeraldHost.de",
  head: [
    [
      'link',
      {
        rel: 'icon',
        sizes: '32x32',
        href: 'https://emeraldhost.de/favicon-32x32.png'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        sizes: '16x16',
        href: 'https://emeraldhost.de/favicon-16x16.png'
      }
    ]
  ],
  locales: {
    root: {
      label: 'Deutsch',
      lang: 'de-DE',
      link: '/',
      title: "Dokumentation",
      description: "Zentralen Wissensdatenbank von EmeraldHost! Hier möchten wir Dir, als unserem Kunden, unsere Produkte näher bringen und Dir zeigen, wie Du sie bestmöglich nutzen kannst.",
      themeConfig: {
        nav: [
          { text: 'Webseite', link: 'https://emeraldhost.de/de' },
          { text: 'Support', link: 'https://emeraldhost.de/de/support' },
          { text: 'Impressum', link: 'https://emeraldhost.de/de/impressum' }
        ],
        sidebar: [
          { text: 'Willkommen!', link: '/' },
          { text: 'Neukunden Rabatt sichern! 🎉', link: '/neukunden-rabatt-sichern' },
          {
            text: 'Gameserver',
            items: [
              { text: 'SFTP-Verbindung Herstellen', link: '/gameserver/sftp-verbindung-herstellen' },
              { text: 'SteamID64 Herausfinden', link: '/gameserver/steamid64-herausfinden' },
              { text: 'Epic Games ID Herausfinden', link: '/gameserver/epicgamesid-herausfinden' },
              {
                text: '7 Days to Die',
                link: '',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/7-days-to-die/admin-hinzufuegen' },
                  { text: 'Cheat-Modus aktivieren', link: '/gameserver/7-days-to-die/cheat-modus-aktivieren' },
                  { text: 'Crossplay aktivieren', link: '/gameserver/7-days-to-die/crossplay-aktivieren' },
                  { text: 'Map ändern', link: '/gameserver/7-days-to-die/map-aendern' },
                  { text: 'Mods hinzufügen', link: '/gameserver/7-days-to-die/mods-hinzufuegen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/7-days-to-die/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/7-days-to-die/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/7-days-to-die/spieler-kicken-bannen' },
                  { text: 'Whitelist aktivieren', link: '/gameserver/7-days-to-die/whitelist-aktivieren' }
                ]
              },
              {
                text: 'Aloft',
                link: '',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/aloft/admin-hinzufuegen' },
                  { text: 'Anzahl der Inseln ändern', link: '/gameserver/aloft/anzahl-der-inseln-aendern' },
                  { text: 'Ingame Konsole öffnen', link: '/gameserver/aloft/ingame-konsole-oeffnen' },
                  { text: 'Private Inseln aktivieren', link: '/gameserver/aloft/private-inseln-aktivieren' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/aloft/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/aloft/server-beitreten' },
                  { text: 'Server Name ändern', link: '/gameserver/aloft/server-name-aendern' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/aloft/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'American Truck Simulator',
                link: '/gameserver/american-truck-simulator',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/american-truck-simulator/admin-hinzufuegen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/american-truck-simulator/mods-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/american-truck-simulator/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/american-truck-simulator/spieler-kicken-bannen' },
                  { text: 'Spieler-Schaden deaktivieren', link: '/gameserver/american-truck-simulator/spieler-schaden-deaktivieren' }
                ]
              },
              {
                text: 'ARK Survival Evolved',
                link: '/gameserver/ark-survival-evolved',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/ark-survival-evolved/admin-hinzufuegen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/ark-survival-evolved/mods-hinzufuegen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/ark-survival-evolved/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/ark-survival-evolved/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/ark-survival-evolved/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Arma Reforger',
                link: '',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/arma-reforger/admin-hinzufuegen' },
                  { text: 'Admin werden', link: '/gameserver/arma-reforger/admin-werden' },
                  { text: 'Mods hinzufügen', link: '/gameserver/arma-reforger/mods-hinzufuegen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/arma-reforger/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/arma-reforger/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/arma-reforger/spieler-kicken-bannen' },
                  { text: 'Szenario ändern', link: '/gameserver/arma-reforger/szenario-aendern' }
                ]
              },
              {
                text: 'Barotrauma',
                link: '/gameserver/barotrauma',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/barotrauma/admin-hinzufuegen' },
                  { text: 'Bots hinzufügen', link: '/gameserver/barotrauma/bots-hinzufuegen' },
                  { text: 'Custom Ranks hinzufügen', link: '/gameserver/barotrauma/custom-ranks-hinzufuegen' },
                  { text: 'Karma aktivieren', link: '/gameserver/barotrauma/karma-aktivieren' },
                  { text: 'Mods hinzufügen', link: '/gameserver/barotrauma/mods-hinzufuegen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/barotrauma/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/barotrauma/server-beitreten' },
                  { text: 'Server Beschreibung ändern', link: '/gameserver/barotrauma/server-beschreibung-aendern' },
                  { text: 'Server Name ändern', link: '/gameserver/barotrauma/server-name-aendern' },
                  { text: 'Server Passwort setzen', link: '/gameserver/barotrauma/server-passwort-setzen' },
                  { text: 'Serverliste aktivieren', link: '/gameserver/barotrauma/serverliste-aktivieren' },
                  { text: 'Spielmodus ändern', link: '/gameserver/barotrauma/spielmodus-aendern' },
                  { text: 'Max Spieler ändern', link: '/gameserver/barotrauma/max-spieler-aendern' },
                  { text: 'Spieler bannen', link: '/gameserver/barotrauma/spieler-bannen' },
                  { text: 'Traitors aktivieren', link: '/gameserver/barotrauma/traitors-aktivieren' }
                ]
              },
              {
                text: 'BeamMP',
                link: '',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/beammp/admin-hinzufuegen' },
                  { text: 'Auth-Schlüssel hinterlegen', link: '/gameserver/beammp/auth-schluessel-hinterlegen' },
                  { text: 'Chat Logging aktivieren', link: '/gameserver/beammp/chat-logging-aktivieren' },
                  { text: 'Map ändern', link: '/gameserver/beammp/map-aendern' },
                  { text: 'Max Autos ändern', link: '/gameserver/beammp/max-autos-aendern' },
                  { text: 'Max Spieler ändern', link: '/gameserver/beammp/max-spieler-aendern' },
                  { text: 'Mods hinzufügen', link: '/gameserver/beammp/mods-hinzufuegen' },
                  { text: 'Privat-Modus aktivieren', link: '/gameserver/beammp/privat-modus-aktivieren' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/beammp/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/beammp/server-beitreten' },
                  { text: 'Server Beschreibung ändern', link: '/gameserver/beammp/server-beschreibung-aendern' },
                  { text: 'Server Name ändern', link: '/gameserver/beammp/server-name-aendern' },
                  { text: 'Server Version ändern', link: '/gameserver/beammp/server-version-aendern' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/beammp/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Conan Exiles',
                link: '/gameserver/conan-exiles',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/conan-exiles/admin-hinzufuegen' },
                  { text: 'BattlEye aktivieren', link: '/gameserver/conan-exiles/battleye-aktivieren' },
                  { text: 'Map ändern', link: '/gameserver/conan-exiles/map-aendern' },
                  { text: 'Max Spieler ändern', link: '/gameserver/conan-exiles/max-spieler-aendern' },
                  { text: 'Mods hinzufügen', link: '/gameserver/conan-exiles/mods-hinzufuegen' },
                  { text: 'PvP aktivieren', link: '/gameserver/conan-exiles/pvp-aktivieren' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/conan-exiles/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/conan-exiles/server-beitreten' },
                  { text: 'Server Community ändern', link: '/gameserver/conan-exiles/server-community-aendern' },
                  { text: 'Server Name ändern', link: '/gameserver/conan-exiles/server-name-aendern' },
                  { text: 'Server Region ändern', link: '/gameserver/conan-exiles/server-region-aendern' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/conan-exiles/spieler-kicken-bannen' },
                  { text: 'VAC aktivieren', link: '/gameserver/conan-exiles/vac-aktivieren' }
                ]
              },
              {
                text: 'Counter-Strike 2',
                link: '/gameserver/counter-strike-2',
                collapsed: true,
                items: [
                  { text: 'Map ändern', link: '/gameserver/counter-strike-2/map-aendern' },
                  { text: 'Mods hinzufügen', link: '/gameserver/counter-strike-2/mods-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/counter-strike-2/server-beitreten' },
                  { text: 'Server konfigurieren', link: '/gameserver/counter-strike-2/server-konfigurieren' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/counter-strike-2/spieler-kicken-bannen' },
                  { text: 'Spielmodus ändern', link: '/gameserver/counter-strike-2/spielmodus-aendern' },
                  { text: 'Workshop Maps hinzufügen', link: '/gameserver/counter-strike-2/workshop-maps-hinzufuegen' }
                ]
              },
              {
                text: 'Core Keeper',
                link: '/gameserver/core-keeper',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/core-keeper/admin-hinzufuegen' },
                  { text: 'Content Bundle ändern', link: '/gameserver/core-keeper/content-bundle-aendern' },
                  { text: 'Game ID ändern', link: '/gameserver/core-keeper/game-id-aendern' },
                  { text: 'Mods hinzufügen', link: '/gameserver/core-keeper/mods-hinzufuegen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/core-keeper/savegame-hinzufuegen' },
                  { text: 'Seasonal Events aktivieren', link: '/gameserver/core-keeper/seasonal-events-aktivieren' },
                  { text: 'Server beitreten', link: '/gameserver/core-keeper/server-beitreten' },
                  { text: 'Server Name ändern', link: '/gameserver/core-keeper/server-name-aendern' },
                  { text: 'Server Passwort setzen', link: '/gameserver/core-keeper/server-passwort-setzen' },
                  { text: 'Spieler bannen', link: '/gameserver/core-keeper/spieler-bannen' },
                  { text: 'Welt Index ändern', link: '/gameserver/core-keeper/welt-index-aendern' },
                  { text: 'Welt Modus ändern', link: '/gameserver/core-keeper/welt-modus-aendern' },
                  { text: 'Welt Seed ändern', link: '/gameserver/core-keeper/welt-seed-aendern' }
                ]
              },
              {
                text: 'DayZ',
                link: '/gameserver/dayz',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/dayz/admin-hinzufuegen' },
                  { text: 'Fadenkreuz aktivieren', link: '/gameserver/dayz/fadenkreuz-aktivieren' },
                  { text: 'Loot anpassen', link: '/gameserver/dayz/loot-anpassen' },
                  { text: 'Map ändern', link: '/gameserver/dayz/map-aendern' },
                  { text: 'Mods hinzufügen', link: '/gameserver/dayz/mods-hinzufuegen' },
                  { text: 'PvP einstellen', link: '/gameserver/dayz/pvp-einstellen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/dayz/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/dayz/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/dayz/spieler-kicken-bannen' },
                  { text: 'Tageszeit ändern', link: '/gameserver/dayz/tageszeit-aendern' },
                  { text: 'Third Person aktivieren', link: '/gameserver/dayz/third-person-aktivieren' },
                  { text: 'VoN aktivieren', link: '/gameserver/dayz/von-aktivieren' }
                ]
              },
              {
                text: 'Enshrouded',
                link: '/gameserver/enshrouded',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/enshrouded/admin-hinzufuegen' },
                  { text: 'Performance-Probleme auf Enshrouded Servern', link: '/gameserver/enshrouded/performance-probleme-auf-enshrouded-servern' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/enshrouded/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/enshrouded/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/enshrouded/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Euro Truck Simulator 2',
                link: '/gameserver/euro-truck-simulator-2',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/euro-truck-simulator-2/admin-hinzufuegen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/euro-truck-simulator-2/mods-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/euro-truck-simulator-2/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/euro-truck-simulator-2/spieler-kicken-bannen' },
                  { text: 'Spieler-Schaden deaktivieren', link: '/gameserver/euro-truck-simulator-2/spieler-schaden-deaktivieren' }
                ]
              },
              {
                text: 'FiveM',
                link: '/gameserver/fivem',
                collapsed: true,
                items: [
                  { text: 'Lizenz Key hinterlegen', link: '/gameserver/fivem/lizenz-key-hinterlegen' },
                  { text: 'Port einstellen', link: '/gameserver/fivem/port-einstellen' },
                  { text: 'Server beitreten', link: '/gameserver/fivem/server-beitreten' }
                ]
              },
              {
                text: 'Hytale',
                link: '',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/hytale/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/hytale/backup-erstellen' },
                  { text: 'Fallschaden aktivieren', link: '/gameserver/hytale/fallschaden-aktivieren' },
                  { text: 'Gamemode ändern', link: '/gameserver/hytale/gamemode-aendern' },
                  { text: 'Item-Verlust beim Tod', link: '/gameserver/hytale/item-verlust-beim-tod' },
                  { text: 'Max Spieler ändern', link: '/gameserver/hytale/max-spieler-aendern' },
                  { text: 'Max View Radius ändern', link: '/gameserver/hytale/max-view-radius-aendern' },
                  { text: 'Mods hinzufügen', link: '/gameserver/hytale/mods-hinzufuegen' },
                  { text: 'MOTD ändern', link: '/gameserver/hytale/motd-aendern' },
                  { text: 'Neue Welt erstellen', link: '/gameserver/hytale/neue-welt-erstellen' },
                  { text: 'NPCs deaktivieren', link: '/gameserver/hytale/npcs-deaktivieren' },
                  { text: 'Passwort setzen', link: '/gameserver/hytale/passwort-setzen' },
                  { text: 'Performance verbessern', link: '/gameserver/hytale/performance-verbessern' },
                  { text: 'PvP aktivieren', link: '/gameserver/hytale/pvp-aktivieren' },
                  { text: 'Server beitreten', link: '/gameserver/hytale/server-beitreten' },
                  { text: 'Server Name ändern', link: '/gameserver/hytale/server-name-aendern' },
                  { text: 'Spawn-Punkt setzen', link: '/gameserver/hytale/spawn-punkt-setzen' },
                  { text: 'Spieler kicken und bannen', link: '/gameserver/hytale/spieler-kicken-bannen' },
                  { text: 'Spielzeit pausieren', link: '/gameserver/hytale/spielzeit-pausieren' },
                  { text: 'Tageszeit ändern', link: '/gameserver/hytale/tageszeit-aendern' },
                  { text: 'Welt hochladen', link: '/gameserver/hytale/welt-hochladen' },
                  { text: 'Wetter ändern', link: '/gameserver/hytale/wetter-aendern' },
                  { text: 'World Seed ändern', link: '/gameserver/hytale/world-seed-aendern' },
                  { text: 'Whitelist aktivieren', link: '/gameserver/hytale/whitelist-aktivieren' }
                ]
              },
              {
                text: 'Minecraft Bedrock Edition',
                link: '/gameserver/minecraft-bedrock-edition',
                collapsed: true,
                items: [
                  { text: 'Behavior und Resource Packs hinzufügen', link: '/gameserver/minecraft-bedrock-edition/behavior-und-resource-packs-hinzufuegen' },
                  { text: 'OP-Rechte vergeben', link: '/gameserver/minecraft-bedrock-edition/op-rechte-vergeben' },
                  { text: 'Server beitreten', link: '/gameserver/minecraft-bedrock-edition/server-beitreten' },
                  { text: 'Slots erhöhen', link: '/gameserver/minecraft-bedrock-edition/slots-erhoehen' },
                  { text: 'Tick-Distance ändern', link: '/gameserver/minecraft-bedrock-edition/tick-distance-aendern' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/minecraft-bedrock-edition/spieler-kicken-bannen' },
                  { text: 'View-Distance ändern', link: '/gameserver/minecraft-bedrock-edition/view-distance-aendern' },
                  { text: 'Welt Hochladen', link: '/gameserver/minecraft-bedrock-edition/welt-hochladen' },
                  { text: 'Welt Löschen', link: '/gameserver/minecraft-bedrock-edition/welt-loeschen' },
                  { text: 'Whitelist aktivieren', link: '/gameserver/minecraft-bedrock-edition/whitelist-aktivieren' },
                  { text: 'World-Seed ändern', link: '/gameserver/minecraft-bedrock-edition/world-seed-aendern' },
                  {
                    text: 'Befehle',
                    link: '',
                    collapsed: true,
                    items: [
                      { text: 'Tp-Befehl verwenden', link: '/gameserver/minecraft-bedrock-edition/befehle/tp-befehl-verwenden' }
                    ]
                  }
                ]
              },
              {
                text: 'Minecraft Java Edition',
                link: '/gameserver/minecraft-java-edition',
                collapsed: true,
                items: [
                  { text: 'Minecraft EULA akzeptieren', link: '/gameserver/minecraft-java-edition/minecraft-eula-akzeptieren' },
                  { text: 'Modpack ändern', link: '/gameserver/minecraft-java-edition/modpack-aendern' },
                  { text: 'Mods hinzufügen', link: '/gameserver/minecraft-java-edition/mods-hinzufuegen' },
                  { text: 'MOTD ändern', link: '/gameserver/minecraft-java-edition/motd-aendern' },
                  { text: 'OP-Rechte vergeben', link: '/gameserver/minecraft-java-edition/op-rechte-vergeben' },
                  { text: 'Plugins installieren', link: '/gameserver/minecraft-java-edition/plugins-installieren' },
                  { text: 'Schwierigkeitsgrad ändern', link: '/gameserver/minecraft-java-edition/schwierigkeitsgrad-aendern' },
                  { text: 'Server beitreten', link: '/gameserver/minecraft-java-edition/server-beitreten' },
                  { text: 'Server-Icon ändern', link: '/gameserver/minecraft-java-edition/server-icon-aendern' },
                  { text: 'Simulation-Distance ändern', link: '/gameserver/minecraft-java-edition/simulation-distance-aendern' },
                  { text: 'Slots erhöhen', link: '/gameserver/minecraft-java-edition/slots-erhoehen' },
                  { text: 'Spawn-Schutz ändern', link: '/gameserver/minecraft-java-edition/spawn-schutz-aendern' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/minecraft-java-edition/spieler-kicken-bannen' },
                  { text: 'Version ändern', link: '/gameserver/minecraft-java-edition/version-aendern' },
                  { text: 'View-Distance ändern', link: '/gameserver/minecraft-java-edition/view-distance-aendern' },
                  { text: 'Welt Hochladen', link: '/gameserver/minecraft-java-edition/welt-hochladen' },
                  { text: 'Welt Löschen', link: '/gameserver/minecraft-java-edition/welt-loeschen' },
                  { text: 'Whitelist aktivieren', link: '/gameserver/minecraft-java-edition/whitelist-aktivieren' },
                  { text: 'World-Seed ändern', link: '/gameserver/minecraft-java-edition/world-seed-aendern' },
                  {
                    text: 'Befehle',
                    link: '',
                    collapsed: true,
                    items: [
                      { text: 'Gamemode verändern', link: '/gameserver/minecraft-java-edition/befehle/gamemode-veraendern' },
                      { text: 'Server moderieren', link: '/gameserver/minecraft-java-edition/befehle/server-moderieren' },
                      { text: 'Tp-Befehl verwenden', link: '/gameserver/minecraft-java-edition/befehle/tp-befehl-verwenden' },
                      { text: 'Wetter verändern', link: '/gameserver/minecraft-java-edition/befehle/wetter-veraendern' }
                    ]
                  },
                  {
                    text: 'Mods',
                    link: '',
                    collapsed: true,
                    items: [
                      { text: 'Simple Voice Chat einrichten', link: '/gameserver/minecraft-java-edition/mods/simple-voice-chat-einrichten' }
                    ]
                  },
                  {
                    text: 'Plugins',
                    link: '',
                    collapsed: true,
                    items: [
                      { text: 'Java mit Bedrock verknüpfen', link: '/gameserver/minecraft-java-edition/plugins/java-mit-bedrock-verknuepfen' }
                    ]
                  }
                ]
              },
              {
                text: 'Palworld',
                link: '/gameserver/palworld',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/palworld/admin-hinzufuegen' },
                  { text: 'Arbeitsgeschwindigkeit ändern', link: '/gameserver/palworld/arbeitsgeschwindigkeit-aendern' },
                  { text: 'Ausrüstungs-Haltbarkeit ändern', link: '/gameserver/palworld/ausruestungs-haltbarkeit-aendern' },
                  { text: 'Broadcast Nachricht senden', link: '/gameserver/palworld/broadcast-nachricht-senden' },
                  { text: 'Drop-Rate ändern', link: '/gameserver/palworld/drop-rate-aendern' },
                  { text: 'Eier-Ausbrützeit ändern', link: '/gameserver/palworld/eier-ausbrutzeit-aendern' },
                  { text: 'Fast Travel aktivieren', link: '/gameserver/palworld/fast-travel-aktivieren' },
                  { text: 'Gebäudeschaden ändern', link: '/gameserver/palworld/gebaeudeschaden-aendern' },
                  { text: 'Gilden-Einstellungen ändern', link: '/gameserver/palworld/gilden-einstellungen-aendern' },
                  { text: 'Hardcore-Modus aktivieren', link: '/gameserver/palworld/hardcore-modus-aktivieren' },
                  { text: 'HP-Regeneration ändern', link: '/gameserver/palworld/hp-regeneration-aendern' },
                  { text: 'Hunger & Ausdauer anpassen', link: '/gameserver/palworld/hunger-ausdauer-anpassen' },
                  { text: 'Max Dropped Items ändern', link: '/gameserver/palworld/max-dropped-items-aendern' },
                  { text: 'Mods hinzufügen', link: '/gameserver/palworld/mods-hinzufuegen' },
                  { text: 'Pal-Fangrate ändern', link: '/gameserver/palworld/pal-fangrate-aendern' },
                  { text: 'Pal-Schaden ändern', link: '/gameserver/palworld/pal-schaden-aendern' },
                  { text: 'Pal-Spawnrate ändern', link: '/gameserver/palworld/pal-spawnrate-aendern' },
                  { text: 'PvP aktivieren', link: '/gameserver/palworld/pvp-aktivieren' },
                  { text: 'Raids aktivieren', link: '/gameserver/palworld/raids-aktivieren' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/palworld/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/palworld/server-beitreten' },
                  { text: 'Server Config anpassen', link: '/gameserver/palworld/server-config-anpassen' },
                  { text: 'Server Name ändern', link: '/gameserver/palworld/server-name-aendern' },
                  { text: 'Server Passwort setzen', link: '/gameserver/palworld/server-passwort-setzen' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/palworld/spieler-kicken-bannen' },
                  { text: 'Spieler-Schaden ändern', link: '/gameserver/palworld/spieler-schaden-aendern' },
                  { text: 'Tageszeit-Geschwindigkeit ändern', link: '/gameserver/palworld/tageszeit-geschwindigkeit-aendern' },
                  { text: 'Todesstrafe deaktivieren', link: '/gameserver/palworld/todesstrafe-deaktivieren' },
                  { text: 'Welt zurücksetzen', link: '/gameserver/palworld/welt-zuruecksetzen' },
                  { text: 'XP-Rate ändern', link: '/gameserver/palworld/xp-rate-aendern' }
                ]
              },
              {
                text: 'Project Zomboid',
                link: '',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/project-zomboid/admin-hinzufuegen' },
                  { text: 'Max Spieler ändern', link: '/gameserver/project-zomboid/max-spieler-aendern' },
                  { text: 'Mods hinzufügen', link: '/gameserver/project-zomboid/mods-hinzufuegen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/project-zomboid/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/project-zomboid/server-beitreten' },
                  { text: 'Server Beschreibung ändern', link: '/gameserver/project-zomboid/server-beschreibung-aendern' },
                  { text: 'Server Name ändern', link: '/gameserver/project-zomboid/server-name-aendern' },
                  { text: 'Server Passwort setzen', link: '/gameserver/project-zomboid/server-passwort-setzen' },
                  { text: 'Serverliste aktivieren', link: '/gameserver/project-zomboid/serverliste-aktivieren' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/project-zomboid/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'RAGE:MP',
                link: '/gameserver/ragemp',
                collapsed: true,
                items: [
                  { text: 'Scripts hinzufügen', link: '/gameserver/ragemp/scripts-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/ragemp/server-beitreten' }
                ]
              },
              {
                text: 'RuneScape: Dragonwilds',
                link: '/gameserver/runescape-dragonwilds',
                collapsed: true,
                items: [
                  { text: 'Admin Passwort setzen', link: '/gameserver/runescape-dragonwilds/admin-passwort-setzen' },
                  { text: 'Custom Welt erstellen', link: '/gameserver/runescape-dragonwilds/custom-welt-erstellen' },
                  { text: 'Owner ID setzen', link: '/gameserver/runescape-dragonwilds/owner-id-setzen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/runescape-dragonwilds/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/runescape-dragonwilds/server-beitreten' },
                  { text: 'Server Passwort setzen', link: '/gameserver/runescape-dragonwilds/server-passwort-setzen' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/runescape-dragonwilds/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Satisfactory',
                collapsed: true,
                items: [
                  { text: 'Admin Passwort setzen', link: '/gameserver/satisfactory/admin-passwort-setzen' },
                  { text: 'Max Spieler ändern', link: '/gameserver/satisfactory/max-spieler-aendern' },
                  { text: 'Server Name ändern', link: '/gameserver/satisfactory/server-name-aendern' },
                  { text: 'Server Passwort setzen', link: '/gameserver/satisfactory/server-passwort-setzen' }
                ]
              },
              {
                text: 'Soulmask',
                link: '/gameserver/soulmask',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/soulmask/admin-hinzufuegen' },
                  { text: 'Admin Passwort setzen', link: '/gameserver/soulmask/admin-passwort-setzen' },
                  { text: 'Invitation Code finden', link: '/gameserver/soulmask/invitation-code-finden' },
                  { text: 'Map ändern', link: '/gameserver/soulmask/map-aendern' },
                  { text: 'Max Spieler ändern', link: '/gameserver/soulmask/max-spieler-aendern' },
                  { text: 'Mods hinzufügen', link: '/gameserver/soulmask/mods-hinzufuegen' },
                  { text: 'PvP einstellen', link: '/gameserver/soulmask/pvp-einstellen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/soulmask/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/soulmask/server-beitreten' },
                  { text: 'Server Name ändern', link: '/gameserver/soulmask/server-name-aendern' },
                  { text: 'Server Passwort setzen', link: '/gameserver/soulmask/server-passwort-setzen' },
                  { text: 'Shifting Sands einrichten', link: '/gameserver/soulmask/shifting-sands-einrichten' },
                  { text: 'Speicher-Intervall ändern', link: '/gameserver/soulmask/speicher-intervall-aendern' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/soulmask/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Terraria: tModLoader',
                link: '/gameserver/terraria-tmodloader',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/terraria-tmodloader/admin-hinzufuegen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/terraria-tmodloader/mods-hinzufuegen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/terraria-tmodloader/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/terraria-tmodloader/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/terraria-tmodloader/spieler-kicken-bannen' },
                  { text: 'Welt hinzufügen', link: '/gameserver/terraria-tmodloader/welt-hinzufuegen' }
                ]
              },
              {
                text: 'The Bus',
                link: '/gameserver/the-bus',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/the-bus/admin-hinzufuegen' },
                  { text: 'Bus spawnen', link: '/gameserver/the-bus/bus-spawnen' },
                  { text: 'Chat-Nachrichten senden', link: '/gameserver/the-bus/chat-nachrichten-senden' },
                  { text: 'DLC aktivieren', link: '/gameserver/the-bus/dlc-aktivieren' },
                  { text: 'Fahrplan ändern', link: '/gameserver/the-bus/fahrplan-aendern' },
                  { text: 'Flotte ändern', link: '/gameserver/the-bus/flotte-aendern' },
                  { text: 'KI-Busse aktivieren', link: '/gameserver/the-bus/ki-busse-aktivieren' },
                  { text: 'Map ändern', link: '/gameserver/the-bus/map-aendern' },
                  { text: 'Mods hinzufügen', link: '/gameserver/the-bus/mods-hinzufuegen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/the-bus/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/the-bus/server-beitreten' },
                  { text: 'Server konfigurieren', link: '/gameserver/the-bus/server-konfigurieren' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/the-bus/spieler-kicken-bannen' },
                  { text: 'Tageszeit ändern', link: '/gameserver/the-bus/tageszeit-aendern' },
                  { text: 'Teleportieren', link: '/gameserver/the-bus/teleportieren' },
                  { text: 'Ticketchance ändern', link: '/gameserver/the-bus/ticketchance-aendern' },
                  { text: 'Verkehr einstellen', link: '/gameserver/the-bus/verkehr-einstellen' },
                  { text: 'Wetter ändern', link: '/gameserver/the-bus/wetter-aendern' }
                ]
              },
              {
                text: 'V Rising',
                link: '',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/v-rising/admin-hinzufuegen' },
                  { text: 'BepInEx installieren', link: '/gameserver/v-rising/bepinex-installieren' },
                  { text: 'Mods hinzufügen', link: '/gameserver/v-rising/mods-hinzufuegen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/v-rising/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/v-rising/server-beitreten' },
                  { text: 'Server Beschreibung ändern', link: '/gameserver/v-rising/server-beschreibung-aendern' },
                  { text: 'Server Name ändern', link: '/gameserver/v-rising/server-name-aendern' },
                  { text: 'Server Passwort setzen', link: '/gameserver/v-rising/server-passwort-setzen' },
                  { text: 'Serverliste aktivieren', link: '/gameserver/v-rising/serverliste-aktivieren' },
                  { text: 'Speicher-Intervall ändern', link: '/gameserver/v-rising/speicher-intervall-aendern' },
                  { text: 'Spieleinstellungen ändern', link: '/gameserver/v-rising/spieleinstellungen-aendern' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/v-rising/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Valheim',
                link: '/gameserver/valheim',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/valheim/admin-hinzufuegen' },
                  { text: 'BepInEx installieren', link: '/gameserver/valheim/bepinex-installieren' },
                  { text: 'Branch wechseln', link: '/gameserver/valheim/branch-wechseln' },
                  { text: 'Mods hinzufügen', link: '/gameserver/valheim/mods-hinzufuegen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/valheim/savegame-hinzufuegen' },
                  { text: 'Backup Einstellungen ändern', link: '/gameserver/valheim/backup-einstellungen-aendern' },
                  { text: 'Crossplay aktivieren', link: '/gameserver/valheim/crossplay-aktivieren' },
                  { text: 'Server beitreten', link: '/gameserver/valheim/server-beitreten' },
                  { text: 'Server Name ändern', link: '/gameserver/valheim/server-name-aendern' },
                  { text: 'Server Passwort setzen', link: '/gameserver/valheim/server-passwort-setzen' },
                  { text: 'Serverliste aktivieren', link: '/gameserver/valheim/serverliste-aktivieren' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/valheim/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'VEIN',
                link: '/gameserver/vein',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/vein/admin-hinzufuegen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/vein/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/vein/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/vein/spieler-kicken-bannen' },
                  { text: 'Whitelist aktivieren', link: '/gameserver/vein/whitelist-aktivieren' }
                ]
              },
              {
                text: 'Windrose',
                link: '/gameserver/windrose',
                collapsed: true,
                items: [
                  { text: 'Invite Code setzen', link: '/gameserver/windrose/invite-code-setzen' },
                  { text: 'Island ID setzen', link: '/gameserver/windrose/island-id-setzen' },
                  { text: 'Max Spieler ändern', link: '/gameserver/windrose/max-spieler-aendern' },
                  { text: 'Notiz setzen', link: '/gameserver/windrose/notiz-setzen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/windrose/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/windrose/server-beitreten' },
                  { text: 'Server Name ändern', link: '/gameserver/windrose/server-name-aendern' },
                  { text: 'Server Passwort setzen', link: '/gameserver/windrose/server-passwort-setzen' },
                  { text: 'Welt-Einstellungen ändern', link: '/gameserver/windrose/welt-einstellungen-aendern' }
                ]
              }
            ]
          },
          {
            text: 'Rootserver',
            items: [
              {
                text: 'Dienste & Tools',
                collapsed: true,
                items: [
                  { text: 'Certbot installieren', link: '/rootserver/dienste-tools/certbot-installieren' },
                  { text: 'Docker installieren', link: '/rootserver/dienste-tools/docker-installieren' },
                  { text: 'Minecraft Server installieren', link: '/rootserver/dienste-tools/minecraft-server-installieren' },
                  { text: 'Screen nutzen', link: '/rootserver/dienste-tools/screen-nutzen' },
                  { text: 'phpMyAdmin, Apache2 und MySQL installieren', link: '/rootserver/dienste-tools/phpmyadmin-apache2-und-mysql' },
                  { text: 'TeamSpeak 3 Server installieren', link: '/rootserver/dienste-tools/teamspeak-3-server-installieren' },
                  { text: 'Webserver installieren', link: '/rootserver/dienste-tools/webserver-installieren' }
                ]
              },
              {
                text: 'Grundkonfiguration',
                collapsed: true,
                items: [
                  { text: 'Fail2Ban installieren', link: '/rootserver/grundkonfiguration/fail2ban-installieren' },
                  { text: 'SSH-Zugang absichern', link: '/rootserver/grundkonfiguration/ssh-zugang-absichern' },
                  { text: 'UFW installieren', link: '/rootserver/grundkonfiguration/ufw-installieren' }
                ]
              },
              {
                text: 'Tipps & Fehlerbehebung',
                collapsed: true,
                items: [
                  { text: 'Cronjobs erstellen', link: '/rootserver/tipps_fehlerbehebung/cronjobs-erstellen' }
                ]
              },
              {
                text: 'Windows',
                collapsed: true,
                items: [
                  { text: 'Windows Festplatte erweitern', link: '/rootserver/windows/windows-hard-drive-expand' }
                ]
              }
            ]
          },
          {
            text: 'TeamSpeak',
            items: [
              { text: 'TeamSpeak 6 Server Verfügbarkeit', link: '/teamspeak/teamspeak-6-server-verfuegbarkeit' },
              { text: 'ServerQuery Login', link: '/teamspeak/serverquery-login' }
            ]
          },
          {
            text: 'Domains',
            items: [
              {
                text: 'DNS-Einträge',
                link: '/domains/dns-eintraege',
                collapsed: true,
                items: [
                  { text: 'FiveM Server', link: '/domains/dns-eintraege/fivem-server' },
                  { text: 'Minecraft Server', link: '/domains/dns-eintraege/minecraft-server' },
                  { text: 'TeamSpeak Server', link: '/domains/dns-eintraege/teamspeak-server' }
                ]
              }
            ]
          },
          {
            text: 'Allgemein',
            items: [
              { text: 'Netzwerk-Trace erstellen', link: '/allgemein/netzwerk-trace-erstellen' },
              { text: 'PCAP-Datei erstellen', link: '/allgemein/pcap-datei-erstellen' }
            ]
          }
        ],
        outline: {
          label: 'Auf dieser Seite'
        },
        docFooter: {
          prev: 'Vorherige Seite',
          next: 'Nächste Seite'
        },
        socialLinks: [
          { icon: 'twitter', link: 'https://twitter.com/EmeraldHostDE' },
          { icon: 'instagram', link: 'https://www.instagram.com/emeraldhost.de/' },
          {
            icon: {
              svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>'
            },
            link: 'https://www.tiktok.com/@emeraldhost.de',
          },
          { icon: 'mastodon', link: 'https://mastodon.social/@emeraldhost' },
          { icon: 'facebook', link: 'https://www.facebook.com/EmeraldHostDE/' },
          { icon: 'youtube', link: 'https://www.youtube.com/@emeraldhost' },
          {
            icon: {
              svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bluesky</title><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"/></svg>'
            },
            link: 'https://bsky.app/profile/emeraldhost.bsky.social',
          },
          { icon: 'discord', link: 'https://discord.emeraldhost.de/' },
          { icon: 'github', link: 'https://github.com/emeraldhost/' }
        ],
        notFound: {
          title: 'Seite nicht gefunden',
          quote: 'Die von Dir aufgerufene Seite existiert nicht oder wurde entfernt.',
          linkLabel: 'Zurück zur Startseite',
          linkText: 'Zur Startseite',
          code: '404'
        },
        editLink: {
          pattern: 'https://github.com/emeraldhost/documentation/edit/master/:path',
          text: 'Diese Seite auf GitHub bearbeiten'
        },
        lastUpdated: {
          text: 'Zuletzt aktualisiert'
        },
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: "Documentation",
      description: "EmeraldHost's central knowledge base! Here, we aim to introduce you to our products and show you how to make the most of them.",
      themeConfig: {
        nav: [
          { text: 'Website', link: 'https://emeraldhost.de/en' },
          { text: 'Support', link: 'https://emeraldhost.de/en/support' },
          { text: 'Imprint', link: 'https://emeraldhost.de/en/imprint' }
        ],
        sidebar: [
          { text: 'Welcome!', link: '/en/' },
          { text: 'Secure your New Customer Discount! 🎉', link: '/en/secure-new-customer-discount' },
          {
            text: 'Gameserver',
            items: [
              { text: 'Establish SFTP Connection', link: '/en/gameserver/establish-sftp-connection' },
              { text: 'SteamID64 Find Out', link: '/en/gameserver/steamid64-find-out' },
              { text: 'Epic Games ID Find Out', link: '/en/gameserver/epicgamesid-find-out' },
              {
                text: '7 Days to Die',
                link: '/en/gameserver/7-days-to-die',
                collapsed: true,
                items: [
                  { text: 'Activate Crossplay', link: '/en/gameserver/7-days-to-die/activate-crossplay' },
                  { text: 'Add Admin', link: '/en/gameserver/7-days-to-die/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/7-days-to-die/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/7-days-to-die/add-savegame' },
                  { text: 'Change Map', link: '/en/gameserver/7-days-to-die/change-map' },
                  { text: 'Enable Cheat Mode', link: '/en/gameserver/7-days-to-die/enable-cheat-mode' },
                  { text: 'Enable Whitelist', link: '/en/gameserver/7-days-to-die/enable-whitelist' },
                  { text: 'Join Server', link: '/en/gameserver/7-days-to-die/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/7-days-to-die/kick-ban-players' }
                ]
              },
              {
                text: 'Aloft',
                link: '',
                collapsed: true,
                items: [
                  { text: 'Activate Private Islands', link: '/en/gameserver/aloft/activate-private-islands' },
                  { text: 'Add Admin', link: '/en/gameserver/aloft/add-admin' },
                  { text: 'Add Savegame', link: '/en/gameserver/aloft/add-savegame' },
                  { text: 'Change Number of Islands', link: '/en/gameserver/aloft/change-number-of-islands' },
                  { text: 'Change Server Name', link: '/en/gameserver/aloft/change-server-name' },
                  { text: 'Join Server', link: '/en/gameserver/aloft/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/aloft/kick-ban-players' },
                  { text: 'Open Ingame Console', link: '/en/gameserver/aloft/open-ingame-console' }
                ]
              },
              {
                text: 'American Truck Simulator',
                link: '/en/gameserver/american-truck-simulator',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/american-truck-simulator/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/american-truck-simulator/add-mods' },
                  { text: 'Deactivate Player Damage', link: '/en/gameserver/american-truck-simulator/deactivate-player-damage' },
                  { text: 'Join Server', link: '/en/gameserver/american-truck-simulator/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/american-truck-simulator/kick-ban-players' }
                ]
              },
              {
                text: 'ARK Survival Evolved',
                link: '/en/gameserver/ark-survival-evolved',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/ark-survival-evolved/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/ark-survival-evolved/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/ark-survival-evolved/add-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/ark-survival-evolved/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/ark-survival-evolved/kick-ban-players' }
                ]
              },
              {
                text: 'Arma Reforger',
                link: '',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/arma-reforger/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/arma-reforger/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/arma-reforger/add-savegame' },
                  { text: 'Become Admin', link: '/en/gameserver/arma-reforger/become-admin' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/arma-reforger/kick-ban-players' },
                  { text: 'Change Scenario', link: '/en/gameserver/arma-reforger/change-scenario' },
                  { text: 'Join Server', link: '/en/gameserver/arma-reforger/join-server' }
                ]
              },
              {
                text: 'Barotrauma',
                link: '/en/gameserver/barotrauma',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/barotrauma/add-admin' },
                  { text: 'Add Bots', link: '/en/gameserver/barotrauma/add-bots' },
                  { text: 'Add Custom Ranks', link: '/en/gameserver/barotrauma/add-custom-ranks' },
                  { text: 'Add Mods', link: '/en/gameserver/barotrauma/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/barotrauma/add-savegame' },
                  { text: 'Change Game Mode', link: '/en/gameserver/barotrauma/change-game-mode' },
                  { text: 'Change Max Players', link: '/en/gameserver/barotrauma/change-max-players' },
                  { text: 'Change Server Description', link: '/en/gameserver/barotrauma/change-server-description' },
                  { text: 'Change Server Name', link: '/en/gameserver/barotrauma/change-server-name' },
                  { text: 'Enable Server List', link: '/en/gameserver/barotrauma/enable-server-list' },
                  { text: 'Join Server', link: '/en/gameserver/barotrauma/join-server' },
                  { text: 'Enable Karma', link: '/en/gameserver/barotrauma/enable-karma' },
                  { text: 'Enable Traitors', link: '/en/gameserver/barotrauma/enable-traitors' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/barotrauma/kick-ban-players' },
                  { text: 'Set Server Password', link: '/en/gameserver/barotrauma/set-server-password' }
                ]
              },
              {
                text: 'BeamMP',
                link: '',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/beammp/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/beammp/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/beammp/add-savegame' },
                  { text: 'Change Map', link: '/en/gameserver/beammp/change-map' },
                  { text: 'Change Max Cars', link: '/en/gameserver/beammp/change-max-cars' },
                  { text: 'Change Max Players', link: '/en/gameserver/beammp/change-max-players' },
                  { text: 'Change Server Description', link: '/en/gameserver/beammp/change-server-description' },
                  { text: 'Change Server Name', link: '/en/gameserver/beammp/change-server-name' },
                  { text: 'Change Server Version', link: '/en/gameserver/beammp/change-server-version' },
                  { text: 'Enable Chat Logging', link: '/en/gameserver/beammp/enable-chat-logging' },
                  { text: 'Enable Private Mode', link: '/en/gameserver/beammp/enable-private-mode' },
                  { text: 'Join Server', link: '/en/gameserver/beammp/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/beammp/kick-ban-players' },
                  { text: 'Set Auth Key', link: '/en/gameserver/beammp/set-auth-key' }
                ]
              },
              {
                text: 'Conan Exiles',
                link: '/en/gameserver/conan-exiles',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/conan-exiles/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/conan-exiles/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/conan-exiles/add-savegame' },
                  { text: 'Change Map', link: '/en/gameserver/conan-exiles/change-map' },
                  { text: 'Change Max Players', link: '/en/gameserver/conan-exiles/change-max-players' },
                  { text: 'Change Server Community', link: '/en/gameserver/conan-exiles/change-server-community' },
                  { text: 'Change Server Name', link: '/en/gameserver/conan-exiles/change-server-name' },
                  { text: 'Change Server Region', link: '/en/gameserver/conan-exiles/change-server-region' },
                  { text: 'Enable BattlEye', link: '/en/gameserver/conan-exiles/enable-battleye' },
                  { text: 'Enable PvP', link: '/en/gameserver/conan-exiles/enable-pvp' },
                  { text: 'Enable VAC', link: '/en/gameserver/conan-exiles/enable-vac' },
                  { text: 'Join Server', link: '/en/gameserver/conan-exiles/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/conan-exiles/kick-ban-players' }
                ]
              },
              {
                text: 'Counter-Strike 2',
                link: '/en/gameserver/counter-strike-2',
                collapsed: true,
                items: [
                  { text: 'Add Mods', link: '/en/gameserver/counter-strike-2/add-mods' },
                  { text: 'Add Workshop Maps', link: '/en/gameserver/counter-strike-2/add-workshop-maps' },
                  { text: 'Change Game Mode', link: '/en/gameserver/counter-strike-2/change-game-mode' },
                  { text: 'Change Map', link: '/en/gameserver/counter-strike-2/change-map' },
                  { text: 'Configure Server', link: '/en/gameserver/counter-strike-2/configure-server' },
                  { text: 'Join Server', link: '/en/gameserver/counter-strike-2/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/counter-strike-2/kick-ban-players' }
                ]
              },
              {
                text: 'Core Keeper',
                link: '/en/gameserver/core-keeper',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/core-keeper/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/core-keeper/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/core-keeper/add-savegame' },
                  { text: 'Ban Players', link: '/en/gameserver/core-keeper/ban-players' },
                  { text: 'Change Content Bundle', link: '/en/gameserver/core-keeper/change-content-bundle' },
                  { text: 'Change Game ID', link: '/en/gameserver/core-keeper/change-game-id' },
                  { text: 'Change Server Name', link: '/en/gameserver/core-keeper/change-server-name' },
                  { text: 'Change World Index', link: '/en/gameserver/core-keeper/change-world-index' },
                  { text: 'Change World Mode', link: '/en/gameserver/core-keeper/change-world-mode' },
                  { text: 'Change World Seed', link: '/en/gameserver/core-keeper/change-world-seed' },
                  { text: 'Join Server', link: '/en/gameserver/core-keeper/join-server' },
                  { text: 'Enable Seasonal Events', link: '/en/gameserver/core-keeper/enable-seasonal-events' },
                  { text: 'Set Server Password', link: '/en/gameserver/core-keeper/set-server-password' }
                ]
              },
              {
                text: 'DayZ',
                link: '/en/gameserver/dayz',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/dayz/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/dayz/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/dayz/add-savegame' },
                  { text: 'Adjust Loot', link: '/en/gameserver/dayz/adjust-loot' },
                  { text: 'Change Map', link: '/en/gameserver/dayz/change-map' },
                  { text: 'Change Time', link: '/en/gameserver/dayz/change-time' },
                  { text: 'Configure PvP', link: '/en/gameserver/dayz/configure-pvp' },
                  { text: 'Enable Crosshair', link: '/en/gameserver/dayz/enable-crosshair' },
                  { text: 'Enable Third Person', link: '/en/gameserver/dayz/enable-third-person' },
                  { text: 'Enable VoN', link: '/en/gameserver/dayz/enable-von' },
                  { text: 'Join Server', link: '/en/gameserver/dayz/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/dayz/kick-ban-players' }
                ]
              },
              {
                text: 'Enshrouded',
                link: '/en/gameserver/enshrouded',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/enshrouded/add-admin' },
                  { text: 'Add Savegame', link: '/en/gameserver/enshrouded/add-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/enshrouded/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/enshrouded/kick-ban-players' },
                  { text: 'Performance Problems on Enshrouded Servers', link: '/en/gameserver/enshrouded/performance-problems-on-enshrouded-servers' }
                ]
              },
              {
                text: 'Euro Truck Simulator 2',
                link: '/en/gameserver/euro-truck-simulator-2',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/euro-truck-simulator-2/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/euro-truck-simulator-2/add-mods' },
                  { text: 'Deactivate Player Damage', link: '/en/gameserver/euro-truck-simulator-2/deactivate-player-damage' },
                  { text: 'Join Server', link: '/en/gameserver/euro-truck-simulator-2/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/euro-truck-simulator-2/kick-ban-players' }
                ]
              },
              {
                text: 'FiveM',
                link: '/en/gameserver/fivem',
                collapsed: true,
                items: [
                  { text: 'Join Server', link: '/en/gameserver/fivem/join-server' },
                  { text: 'Set License Key', link: '/en/gameserver/fivem/set-license-key' },
                  { text: 'Set Port', link: '/en/gameserver/fivem/set-port' }
                ]
              },
              {
                text: 'Hytale',
                link: '',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/hytale/add-admin' },
                  { text: 'Change Gamemode', link: '/en/gameserver/hytale/change-gamemode' },
                  { text: 'Change Max Players', link: '/en/gameserver/hytale/change-max-players' },
                  { text: 'Change Max View Radius', link: '/en/gameserver/hytale/change-max-view-radius' },
                  { text: 'Change MOTD', link: '/en/gameserver/hytale/change-motd' },
                  { text: 'Change Server Name', link: '/en/gameserver/hytale/change-server-name' },
                  { text: 'Change Time', link: '/en/gameserver/hytale/change-time' },
                  { text: 'Change Weather', link: '/en/gameserver/hytale/change-weather' },
                  { text: 'Create Backup', link: '/en/gameserver/hytale/create-backup' },
                  { text: 'Create New World', link: '/en/gameserver/hytale/create-new-world' },
                  { text: 'Disable NPCs', link: '/en/gameserver/hytale/disable-npcs' },
                  { text: 'Enable Fall Damage', link: '/en/gameserver/hytale/enable-fall-damage' },
                  { text: 'Enable PvP', link: '/en/gameserver/hytale/enable-pvp' },
                  { text: 'Enable Whitelist', link: '/en/gameserver/hytale/enable-whitelist' },
                  { text: 'Improve Performance', link: '/en/gameserver/hytale/improve-performance' },
                  { text: 'Add Mods', link: '/en/gameserver/hytale/add-mods' },
                  { text: 'Item Loss on Death', link: '/en/gameserver/hytale/item-loss-on-death' },
                  { text: 'Join Server', link: '/en/gameserver/hytale/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/hytale/kick-ban-players' },
                  { text: 'Pause Game Time', link: '/en/gameserver/hytale/pause-game-time' },
                  { text: 'Set Password', link: '/en/gameserver/hytale/set-password' },
                  { text: 'Set Spawn Point', link: '/en/gameserver/hytale/set-spawn-point' },
                  { text: 'Upload World', link: '/en/gameserver/hytale/upload-world' },
                  { text: 'Change World Seed', link: '/en/gameserver/hytale/change-world-seed' }
                ]
              },
              {
                text: 'Minecraft Bedrock Edition',
                link: '/en/gameserver/minecraft-bedrock-edition',
                collapsed: true,
                items: [
                  { text: 'Add Behavior and Resource Packs', link: '/en/gameserver/minecraft-bedrock-edition/add-behavior-und-resource-packs' },
                  { text: 'Change Tick Distance', link: '/en/gameserver/minecraft-bedrock-edition/change-tick-distance' },
                  { text: 'Change View Distance', link: '/en/gameserver/minecraft-bedrock-edition/change-view-distance' },
                  { text: 'Change World Seed', link: '/en/gameserver/minecraft-bedrock-edition/change-world-seed' },
                  { text: 'Delete World', link: '/en/gameserver/minecraft-bedrock-edition/delete-world' },
                  { text: 'Enable Whitelist', link: '/en/gameserver/minecraft-bedrock-edition/enable-whitelist' },
                  { text: 'Grant OP Rights', link: '/en/gameserver/minecraft-bedrock-edition/grant-op-rights' },
                  { text: 'Increase Slots', link: '/en/gameserver/minecraft-bedrock-edition/increase-slots' },
                  { text: 'Join Server', link: '/en/gameserver/minecraft-bedrock-edition/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/minecraft-bedrock-edition/kick-ban-players' },
                  { text: 'Upload World', link: '/en/gameserver/minecraft-bedrock-edition/upload-world' },
                  {
                    text: 'Commands',
                    link: '',
                    collapsed: true,
                    items: [
                      { text: 'Use Tp Command', link: '/en/gameserver/minecraft-bedrock-edition/commands/use-tp-command' }
                    ]
                  }
                ]
              },
              {
                text: 'Minecraft Java Edition',
                link: '/en/gameserver/minecraft-java-edition',
                collapsed: true,
                items: [
                  { text: 'Accept Minecraft EULA', link: '/en/gameserver/minecraft-java-edition/accept-minecraft-eula' },
                  { text: 'Change Modpack', link: '/en/gameserver/minecraft-java-edition/change-modpack' },
                  { text: 'Change MOTD', link: '/en/gameserver/minecraft-java-edition/change-motd' },
                  { text: 'Change Server Icon', link: '/en/gameserver/minecraft-java-edition/change-server-icon' },
                  { text: 'Change Simulation Distance', link: '/en/gameserver/minecraft-java-edition/change-simulation-distance' },
                  { text: 'Change Spawn Protection', link: '/en/gameserver/minecraft-java-edition/change-spawn-protection' },
                  { text: 'Change Difficulty', link: '/en/gameserver/minecraft-java-edition/change-difficulty' },
                  { text: 'Change Version', link: '/en/gameserver/minecraft-java-edition/change-version' },
                  { text: 'Change View Distance', link: '/en/gameserver/minecraft-java-edition/change-view-distance' },
                  { text: 'Change World Seed', link: '/en/gameserver/minecraft-java-edition/change-world-seed' },
                  { text: 'Delete World', link: '/en/gameserver/minecraft-java-edition/delete-world' },
                  { text: 'Enable Whitelist', link: '/en/gameserver/minecraft-java-edition/enable-whitelist' },
                  { text: 'Grant OP Rights', link: '/en/gameserver/minecraft-java-edition/grant-op-rights' },
                  { text: 'Increase Slots', link: '/en/gameserver/minecraft-java-edition/increase-slots' },
                  { text: 'Install Mods', link: '/en/gameserver/minecraft-java-edition/install-mods' },
                  { text: 'Install Plugins', link: '/en/gameserver/minecraft-java-edition/install-plugins' },
                  { text: 'Join Server', link: '/en/gameserver/minecraft-java-edition/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/minecraft-java-edition/kick-ban-players' },
                  { text: 'Upload World', link: '/en/gameserver/minecraft-java-edition/upload-world' },
                  {
                    text: 'Commands',
                    link: '',
                    collapsed: true,
                    items: [
                      { text: 'Use Tp Command', link: '/en/gameserver/minecraft-java-edition/commands/use-tp-command' }
                    ]
                  },
                  {
                    text: 'Mods',
                    link: '',
                    collapsed: true,
                    items: [
                      { text: 'Setup Simple Voice Chat', link: '/en/gameserver/minecraft-java-edition/mods/setup-simple-voice-chat' }
                    ]
                  },
                  {
                    text: 'Plugins',
                    link: '',
                    collapsed: true,
                    items: [
                      { text: 'Link Java with Bedrock', link: '/en/gameserver/minecraft-java-edition/plugins/link-java-with-bedrock' }
                    ]
                  }
                ]
              },
              {
                text: 'Palworld',
                link: '/en/gameserver/palworld',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/palworld/add-admin' },
                  { text: 'Broadcast Message', link: '/en/gameserver/palworld/broadcast-message' },
                  { text: 'Adjust Hunger & Stamina', link: '/en/gameserver/palworld/adjust-hunger-stamina' },
                  { text: 'Change Day/Night Speed', link: '/en/gameserver/palworld/change-day-night-speed' },
                  { text: 'Change Drop Rate', link: '/en/gameserver/palworld/change-drop-rate' },
                  { text: 'Change Egg Hatching Time', link: '/en/gameserver/palworld/change-egg-hatching-time' },
                  { text: 'Change Equipment Durability', link: '/en/gameserver/palworld/change-equipment-durability' },
                  { text: 'Change Guild Settings', link: '/en/gameserver/palworld/change-guild-settings' },
                  { text: 'Change HP Regeneration', link: '/en/gameserver/palworld/change-hp-regeneration' },
                  { text: 'Change Max Dropped Items', link: '/en/gameserver/palworld/change-max-dropped-items' },
                  { text: 'Change Pal Capture Rate', link: '/en/gameserver/palworld/change-pal-capture-rate' },
                  { text: 'Change Pal Damage', link: '/en/gameserver/palworld/change-pal-damage' },
                  { text: 'Change Pal Spawn Rate', link: '/en/gameserver/palworld/change-pal-spawn-rate' },
                  { text: 'Change Player Damage', link: '/en/gameserver/palworld/change-player-damage' },
                  { text: 'Change Server Name', link: '/en/gameserver/palworld/change-server-name' },
                  { text: 'Change Structure Damage', link: '/en/gameserver/palworld/change-structure-damage' },
                  { text: 'Change Work Speed', link: '/en/gameserver/palworld/change-work-speed' },
                  { text: 'Change XP Rate', link: '/en/gameserver/palworld/change-xp-rate' },
                  { text: 'Disable Death Penalty', link: '/en/gameserver/palworld/disable-death-penalty' },
                  { text: 'Edit Server Config', link: '/en/gameserver/palworld/edit-server-config' },
                  { text: 'Enable Fast Travel', link: '/en/gameserver/palworld/enable-fast-travel' },
                  { text: 'Enable Hardcore Mode', link: '/en/gameserver/palworld/enable-hardcore-mode' },
                  { text: 'Enable PvP', link: '/en/gameserver/palworld/enable-pvp' },
                  { text: 'Enable Raids', link: '/en/gameserver/palworld/enable-raids' },
                  { text: 'Add Mods', link: '/en/gameserver/palworld/add-mods' },
                  { text: 'Join Server', link: '/en/gameserver/palworld/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/palworld/kick-ban-players' },
                  { text: 'Reset World', link: '/en/gameserver/palworld/reset-world' },
                  { text: 'Set Server Password', link: '/en/gameserver/palworld/set-server-password' },
                  { text: 'Add Savegame', link: '/en/gameserver/palworld/upload-savegame' }
                ]
              },
              {
                text: 'Project Zomboid',
                link: '',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/project-zomboid/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/project-zomboid/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/project-zomboid/add-savegame' },
                  { text: 'Change Max Players', link: '/en/gameserver/project-zomboid/change-max-players' },
                  { text: 'Change Server Description', link: '/en/gameserver/project-zomboid/change-server-description' },
                  { text: 'Change Server Name', link: '/en/gameserver/project-zomboid/change-server-name' },
                  { text: 'Enable Server List', link: '/en/gameserver/project-zomboid/enable-server-list' },
                  { text: 'Join Server', link: '/en/gameserver/project-zomboid/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/project-zomboid/kick-ban-players' },
                  { text: 'Set Server Password', link: '/en/gameserver/project-zomboid/set-server-password' }
                ]
              },
              {
                text: 'RAGE:MP',
                link: '/en/gameserver/ragemp',
                collapsed: true,
                items: [
                  { text: 'Add Scripts', link: '/en/gameserver/ragemp/add-scripts' },
                  { text: 'Join Server', link: '/en/gameserver/ragemp/join-server' }
                ]
              },
              {
                text: 'RuneScape: Dragonwilds',
                link: '/en/gameserver/runescape-dragonwilds',
                collapsed: true,
                items: [
                  { text: 'Add Savegame', link: '/en/gameserver/runescape-dragonwilds/add-savegame' },
                  { text: 'Create Custom World', link: '/en/gameserver/runescape-dragonwilds/create-custom-world' },
                  { text: 'Set Admin Password', link: '/en/gameserver/runescape-dragonwilds/set-admin-password' },
                  { text: 'Join Server', link: '/en/gameserver/runescape-dragonwilds/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/runescape-dragonwilds/kick-ban-players' },
                  { text: 'Set Owner ID', link: '/en/gameserver/runescape-dragonwilds/set-owner-id' },
                  { text: 'Set Server Password', link: '/en/gameserver/runescape-dragonwilds/set-server-password' }
                ]
              },
              {
                text: 'Satisfactory',
                collapsed: true,
                items: [
                  { text: 'Change Max Players', link: '/en/gameserver/satisfactory/change-max-players' },
                  { text: 'Change Server Name', link: '/en/gameserver/satisfactory/change-server-name' },
                  { text: 'Set Admin Password', link: '/en/gameserver/satisfactory/set-admin-password' },
                  { text: 'Set Server Password', link: '/en/gameserver/satisfactory/set-server-password' }
                ]
              },
              {
                text: 'Soulmask',
                link: '/en/gameserver/soulmask',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/soulmask/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/soulmask/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/soulmask/add-savegame' },
                  { text: 'Change Map', link: '/en/gameserver/soulmask/change-map' },
                  { text: 'Change Max Players', link: '/en/gameserver/soulmask/change-max-players' },
                  { text: 'Change Server Name', link: '/en/gameserver/soulmask/change-server-name' },
                  { text: 'Configure PvP', link: '/en/gameserver/soulmask/configure-pvp' },
                  { text: 'Find Invitation Code', link: '/en/gameserver/soulmask/find-invitation-code' },
                  { text: 'Join Server', link: '/en/gameserver/soulmask/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/soulmask/kick-ban-players' },
                  { text: 'Set Admin Password', link: '/en/gameserver/soulmask/set-admin-password' },
                  { text: 'Set Server Password', link: '/en/gameserver/soulmask/set-server-password' },
                  { text: 'Change Save Interval', link: '/en/gameserver/soulmask/change-save-interval' },
                  { text: 'Setup Shifting Sands', link: '/en/gameserver/soulmask/setup-shifting-sands' }
                ]
              },
              {
                text: 'Terraria: tModLoader',
                link: '/en/gameserver/terraria-tmodloader',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/terraria-tmodloader/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/terraria-tmodloader/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/terraria-tmodloader/add-savegame' },
                  { text: 'Add World', link: '/en/gameserver/terraria-tmodloader/add-world' },
                  { text: 'Join Server', link: '/en/gameserver/terraria-tmodloader/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/terraria-tmodloader/kick-ban-players' }
                ]
              },
              {
                text: 'The Bus',
                link: '/en/gameserver/the-bus',
                collapsed: true,
                items: [
                  { text: 'Activate DLC', link: '/en/gameserver/the-bus/activate-dlc' },
                  { text: 'Add Admin', link: '/en/gameserver/the-bus/add-admin' },
                  { text: 'Change Fleet', link: '/en/gameserver/the-bus/change-fleet' },
                  { text: 'Change Map', link: '/en/gameserver/the-bus/change-map' },
                  { text: 'Change Operating Plan', link: '/en/gameserver/the-bus/change-operating-plan' },
                  { text: 'Change Ticket Chance', link: '/en/gameserver/the-bus/change-ticket-chance' },
                  { text: 'Change Time', link: '/en/gameserver/the-bus/change-time' },
                  { text: 'Change Traffic', link: '/en/gameserver/the-bus/change-traffic' },
                  { text: 'Change Weather', link: '/en/gameserver/the-bus/change-weather' },
                  { text: 'Configure Server', link: '/en/gameserver/the-bus/configure-server' },
                  { text: 'Enable AI Buses', link: '/en/gameserver/the-bus/enable-ai-buses' },
                  { text: 'Add Mods', link: '/en/gameserver/the-bus/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/the-bus/add-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/the-bus/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/the-bus/kick-ban-players' },
                  { text: 'Send Chat Messages', link: '/en/gameserver/the-bus/send-chat-messages' },
                  { text: 'Spawn Bus', link: '/en/gameserver/the-bus/spawn-bus' },
                  { text: 'Teleport', link: '/en/gameserver/the-bus/teleport' }
                ]
              },
              {
                text: 'V Rising',
                link: '',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/v-rising/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/v-rising/add-mods' },
                  { text: 'Install BepInEx', link: '/en/gameserver/v-rising/install-bepinex' },
                  { text: 'Add Savegame', link: '/en/gameserver/v-rising/add-savegame' },
                  { text: 'Change Game Settings', link: '/en/gameserver/v-rising/change-game-settings' },
                  { text: 'Change Save Interval', link: '/en/gameserver/v-rising/change-save-interval' },
                  { text: 'Change Server Description', link: '/en/gameserver/v-rising/change-server-description' },
                  { text: 'Change Server Name', link: '/en/gameserver/v-rising/change-server-name' },
                  { text: 'Enable Server List', link: '/en/gameserver/v-rising/enable-server-list' },
                  { text: 'Join Server', link: '/en/gameserver/v-rising/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/v-rising/kick-ban-players' },
                  { text: 'Set Server Password', link: '/en/gameserver/v-rising/set-server-password' }
                ]
              },
              {
                text: 'Valheim',
                link: '/en/gameserver/valheim',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/valheim/add-admin' },
                  { text: 'Install BepInEx', link: '/en/gameserver/valheim/install-bepinex' },
                  { text: 'Add Mods', link: '/en/gameserver/valheim/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/valheim/add-savegame' },
                  { text: 'Change Branch', link: '/en/gameserver/valheim/change-branch' },
                  { text: 'Change Backup Settings', link: '/en/gameserver/valheim/change-backup-settings' },
                  { text: 'Change Server Name', link: '/en/gameserver/valheim/change-server-name' },
                  { text: 'Enable Crossplay', link: '/en/gameserver/valheim/enable-crossplay' },
                  { text: 'Enable Server List', link: '/en/gameserver/valheim/enable-server-list' },
                  { text: 'Join Server', link: '/en/gameserver/valheim/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/valheim/kick-ban-players' },
                  { text: 'Set Server Password', link: '/en/gameserver/valheim/set-server-password' }
                ]
              },
              {
                text: 'VEIN',
                link: '/en/gameserver/vein',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/vein/add-admin' },
                  { text: 'Add Savegame', link: '/en/gameserver/vein/add-savegame' },
                  { text: 'Enable Whitelist', link: '/en/gameserver/vein/enable-whitelist' },
                  { text: 'Join Server', link: '/en/gameserver/vein/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/vein/kick-ban-players' }
                ]
              },
              {
                text: 'Windrose',
                link: '/en/gameserver/windrose',
                collapsed: true,
                items: [
                  { text: 'Add Savegame', link: '/en/gameserver/windrose/add-savegame' },
                  { text: 'Change Max Players', link: '/en/gameserver/windrose/change-max-players' },
                  { text: 'Change Server Name', link: '/en/gameserver/windrose/change-server-name' },
                  { text: 'Change World Settings', link: '/en/gameserver/windrose/change-world-settings' },
                  { text: 'Join Server', link: '/en/gameserver/windrose/join-server' },
                  { text: 'Set Invite Code', link: '/en/gameserver/windrose/set-invite-code' },
                  { text: 'Set Island ID', link: '/en/gameserver/windrose/set-island-id' },
                  { text: 'Set Note', link: '/en/gameserver/windrose/set-note' },
                  { text: 'Set Server Password', link: '/en/gameserver/windrose/set-server-password' }
                ]
              }
            ]
          },
          {
            text: 'Rootserver',
            items: [
              {
                text: 'Basic configuration',
                collapsed: true,
                items: [
                  { text: 'Install Fail2Ban', link: '/en/rootserver/basic_configuration/install-fail2ban' },
                  { text: 'Secure SSH Access', link: '/en/rootserver/basic_configuration/secure-ssh-access' },
                  { text: 'Install UFW', link: '/en/rootserver/basic_configuration/install-ufw' }
                ]
              },
              {
                text: 'Services & Tools',
                collapsed: true,
                items: [
                  { text: 'Install Certbot', link: '/en/rootserver/services-tools/install-certbot' },
                  { text: 'Install Docker', link: '/en/rootserver/services-tools/install-docker' },
                  { text: 'Install Minecraft Server', link: '/en/rootserver/services-tools/install-minecraft-server' },
                  { text: 'Use Screen', link: '/en/rootserver/services-tools/use-screen' },
                  { text: 'Install phpMyAdmin, Apache2 und MySQL', link: '/en/rootserver/services-tools/install-phpmyadmin-apache2-und-mysql' },
                  { text: 'Install TeamSpeak 3 Server', link: '/en/rootserver/services-tools/install-teamspeak-3-server' },
                  { text: 'Install Webserver', link: '/en/rootserver/services-tools/install-webserver' }
                ]
              },
              {
                text: 'Tips & troubleshooting',
                collapsed: true,
                items: [
                  { text: 'Create cronjobs', link: '/en/rootserver/tips_troubleshooting/create-cronjobs' }
                ]
              },
              {
                text: 'Windows',
                collapsed: true,
                items: [
                  { text: 'Expand Windows Hard Drive', link: '/en/rootserver/windows/windows-hard-drive-expand' }
                ]
              }
            ]
          },
          {
            text: 'TeamSpeak',
            items: [
              { text: 'TeamSpeak 6 Server Availability', link: '/en/teamspeak/teamspeak-6-server-availability' },
              { text: 'ServerQuery Login', link: '/en/teamspeak/serverquery-login' }
            ]
          },
          {
            text: 'Domains',
            items: [
              {
                text: 'DNS-Records',
                link: '/en/domains/dns-records',
                collapsed: true,
                items: [
                  { text: 'FiveM Server', link: '/en/domains/dns-records/fivem-server' },
                  { text: 'Minecraft Server', link: '/en/domains/dns-records/minecraft-server' },
                  { text: 'TeamSpeak Server', link: '/en/domains/dns-records/teamspeak-server' }
                ]
              }
            ]
          },
          {
            text: 'General',
            items: [
              { text: 'Create Network Trace', link: '/en/general/create-network-trace' },
              { text: 'Create PCAP File', link: '/en/general/create-pcap-file' }
            ]
          }
        ],
        outline: {
          label: 'On this page'
        },
        docFooter: {
          prev: 'Previous page',
          next: 'Next page'
        },
        socialLinks: [
          { icon: 'twitter', link: 'https://x.com/EmeraldHostINT' },
          { icon: 'instagram', link: 'https://www.instagram.com/emeraldhostint/' },
          {
            icon: {
              svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>'
            },
            link: 'https://www.tiktok.com/@emeraldhost.de',
          },
          { icon: 'mastodon', link: 'https://mastodon.social/@emeraldhostint' },
          { icon: 'facebook', link: 'https://www.facebook.com/EmeraldHostDE/' },
          { icon: 'youtube', link: 'https://www.youtube.com/@emeraldhost' },
          {
            icon: {
              svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bluesky</title><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"/></svg>'
            },
            link: 'https://bsky.app/profile/emeraldhostint.bsky.social',
          },
          { icon: 'discord', link: 'https://discord.emeraldhost.de/' },
          { icon: 'github', link: 'https://github.com/emeraldhost/' }
        ],
        notFound: {
          title: 'Page not found',
          quote: 'The page you requested does not exist or has been removed.',
          linkLabel: 'Back to Homepage',
          linkText: 'Go to Homepage',
          code: '404'
        },
        editLink: {
          pattern: 'https://github.com/emeraldhost/documentation/edit/master/:path',
          text: 'Edit this page on GitHub'
        },
        lastUpdated: {
          text: 'Last updated'
        }
      }
    }
  },
  themeConfig: {
    logo: "https://emeraldhost.b-cdn.net/branding/icon.svg",
    footer: {
      copyright: '© 2016 - 2026 EmeraldHost'
    },
    search: {
      provider: 'local'
    },
    lastUpdated: true,
    i18nRouting: false
  }
})
