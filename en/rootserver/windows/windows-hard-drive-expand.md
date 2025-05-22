---
description: Expanding the C: Drive on Windows Server
---

# Expanding the C: Drive on Windows Server

When deploying a Windows Server, it may happen that the entire available storage space is not automatically assigned to the `C:` partition. This guide describes how you can automatically add the unallocated space to your `C:` drive using a provided script.

## Requirements
* A **Windows Server** where the script will be executed.
* **Administrator rights** on the server.

## Steps

1. **Download the script**
   * Download the following script **directly** to your Windows Server:
     ```
     https://cdn.emeraldhost.de/products/rootserver/windows-patch/extend-disk/remove_recovery_and_extend.bat
     ```

2. **Run the script as administrator**
   1. Navigate to the location of the downloaded file.
   2. Right-click on the file `remove_recovery_and_extend.bat`.
   3. Select **Run as administrator**.

3. **Automatic expansion of the `C:` drive**
   * After running the script, the unused space will be automatically added to the `C:` partition without any manual intervention.

4. **Troubleshooting**
   * If the script does not run correctly or the partition expansion fails:
      - Ensure you have **administrator rights**.
      - Restart the server after running the script and check the disk space again.
      - If problems persist, feel free to contact our [Support](https://emeraldhost.de/support).

### That's it! With these steps, you should be able to automatically expand the `C:` drive of your Windows Server.
