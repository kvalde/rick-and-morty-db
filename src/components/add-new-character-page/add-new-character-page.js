import React from 'react';
import AddNewCharacterForm from '../add-new-character-form/add-new-character-form';
import OwnCharactersPage from '../own-characters-page/own-characters-page';

const addNewCharacterPage = () => {
    return (
        <div>
            <AddNewCharacterForm/>
            <OwnCharactersPage/>
        </div>
    )
}

export default addNewCharacterPage;