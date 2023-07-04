import React from 'react';
import useDrivePicker from 'react-google-drive-picker';

function GoogleDrive() {
  const [openPicker] = useDrivePicker();

  const handleOpenPicker = () => {
    openPicker({
      clientId: "xxxxxxxxxxxxxxxxx",
      developerKey: "xxxxxxxxxxxx",
      viewId: "DOCS",
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      callbackFunction: (data) => {
        if (data.action === 'cancel') {
          console.log('User clicked cancel/close button');
        }
        console.log(data);
      },
    });
  };

  return (
    <div>
      <button onClick={handleOpenPicker}>Open Picker</button>
    </div>
  );
}

export default GoogleDrive;
