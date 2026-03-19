---
description: Step-by-step instructions on how to add admins to your Euro Truck Simulator 2 server.
---

# How to Add Admins to Your Euro Truck Simulator 2 Server

## Requirements

- Access to the server folder (either via an SFTP connection or direct access to the server files)
    - You can find the SFTP access data in the overview of your game server.
- Steam64_ID of the users to be added as admins
- Text editor (such as Notepad, Notepad++, Windows Editor or Visual Studio Code)

## Steps

1. <b>Locate Config File</b><br>
   Establish an SFTP connection to your server.
   Navigate to the path "`.local/share/Euro Truck Simulator 2`".

2. <b>Edit Config File</b><br>
   Search for the file named "`server_config.sii`".
   Open this file in a text editor.

3. <b>Add New Admins</b><br>
   Search for the line starting with "`moderator_list:`".
   Change the number in the line "`moderator_list:`" to match the number of admins.
   Add the Steam64\_IDs of the users you want to add as admin. Each Steam64\_ID should be on a new line and look like this: "`moderator_list[X]:  Steam64_ID`". X stands for the corresponding position in the list.

      An example could look like this:

      ```
      moderator_list: 3
      moderator_list[0]: Steam64_ID
      moderator_list[1]: Steam64_ID
      moderator_list[2]: Steam64_ID
      ```

4. <b>Save and Restart</b><br>
   Save the changes to the configuration file and close the text editor.
   Restart the server via the web interface.

### That was it! With these steps you should be able to add new admins to your Euro Truck Simulator 2 server. Have fun playing
