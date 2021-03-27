import React from "react";
import AddNewCharacterForm from "../add-new-character-form/add-new-character-form";
import OwnCharactersPage from "../own-characters-page/own-characters-page";

const AddNewCharacterPage = ({ theme }) => {
    return (
        <div>
            <AddNewCharacterForm theme={theme} />
            <OwnCharactersPage theme={theme} />
        </div>
    );
};

export default AddNewCharacterPage;
