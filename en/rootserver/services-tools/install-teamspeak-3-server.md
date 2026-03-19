---
description: Install a TeamSpeak 3 server on a Linux VPS (Ubuntu/Debian)
---

# How to install a TeamSpeak 3 server on your Linux VPS

Instructions for installing a TeamSpeak 3 server on a Linux VPS.

We recommend the program [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) for SSH connections with servers.

1. <b>Update system</b><br>
   Update your system and install the necessary programs:

   ```bash
   apt update && apt upgrade -y
   ```

   ```bash
   apt install sudo bzip2
   ```

2. <b>Create user</b><br>
   Create a subuser for the server and log in:

   ```bash
   adduser teamspeak --disabled-login
   ```

   ```bash
   su teamspeak -l
   ```

3. <b>Download server</b><br>
   Copy the link for the latest 64-bit Linux server version [on the TeamSpeak downloads page](https://www.teamspeak.com/en/downloads/#server).

4. <b>Extract files</b><br>
   Download the file, extract it and navigate to the directory, for example with v3.13.7:

   ```bash
   wget https://files.teamspeak-services.com/releases/server/3.13.7/teamspeak3-server_linux_amd64-3.13.7.tar.bz2
   ```

   ```bash
   tar xvfj teamspeak3-server_linux_amd64-3.13.7.tar.bz2
   ```

   ```bash
   rm teamspeak3-server_linux_amd64-3.13.7.tar.bz2
   ```

   ```bash
   cd teamspeak3-server_linux_amd64
   ```

5. <b>Start server</b><br>
   Accept the licenses and start the server:

   ```bash
   touch .ts3server_license_accepted
   ```

   ```bash
   chmod +x ts3server_startscript.sh
   ```

   ```bash
   ./ts3server_startscript.sh start
   ```

:::: info
`./ts3server_startscript.sh` also works with `stop`, `restart` or `status`.
::::
