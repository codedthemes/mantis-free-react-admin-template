import './settings-page.scss';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { CustomInput } from 'components/CustomInput';
import MainCard from 'components/MainCard';
import { SectionHeader } from 'components/cards/headers/SectionHeader';

const initialUserSettings = {
  name: 'Gabriel Blake',
  email: 'Gabriel.blake28@gmail.com',
  title: 'Software Engineer'
};

const SettingsPage = () => {
  const [editedSettings, setEditedSettings] = useState({
    name: 'Gabriel Blake',
    email: 'Gabriel.blake28@gmail.com',
    title: 'Software Engineer'
  });
  const [personalSettingsChanged, setPersonalSettingsChanged] = useState(true);

  useEffect(() => {
    // Compare fetched user settings with edited settings
    const settingsChanged = JSON.stringify(initialUserSettings) === JSON.stringify(editedSettings);

    // Enable the button if settings have changed
    setPersonalSettingsChanged(settingsChanged);
  }, [initialUserSettings, editedSettings]);

  const handleUpdateSettings = () => {
    // handle settings update
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedSettings({ ...editedSettings, name: e.target.value });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedSettings({ ...editedSettings, email: e.target.value });
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedSettings({ ...editedSettings, title: e.target.value });
  };

  return (
    <>
      <MainCard
        contentSX={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end'
        }}
        title="Personal"
      >
        <div className="settings-container">
          <div className="settings-section">
            <CustomInput title="Name" value={editedSettings.name} handleChange={handleNameChange} />
          </div>
          <div className="settings-section">
            <CustomInput title="Title" value={editedSettings.title} handleChange={handleTitleChange} />
          </div>
          <div className="settings-section">
            <CustomInput disabled={true} title="Email" value={editedSettings.email} handleChange={handleEmailChange} />
          </div>
        </div>
        <Button variant="contained" disabled={personalSettingsChanged} onClick={handleUpdateSettings}>
          Save
        </Button>
      </MainCard>
    </>
  );
};

export default SettingsPage;
