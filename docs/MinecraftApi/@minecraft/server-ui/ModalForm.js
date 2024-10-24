// import modal form from 'mojang-minecraft-ui' module;
import { ModalFormData } from "mojang-minecraft-ui";

const ModalForm = new ModalFormData();

// Adds a dropdown with choices to the form.
const choices = ["choice 1", "choice 2", "choice 3"];

ModalForm.dropdown("dropdown", choices);

/**
 * @remarks
 * Adds a numeric slider to the form.
 * @param {string} label
 * @param {number} minimumValue
 * @param {number} maximumValue
 * @param {number} valueStep
 * @param {number} defaultValue
 */
ModalForm.slider("slider", 0, 100, 50);

// Adds a textbox to the form.
ModalForm.textField("text field", "text");

// This builder method sets the title for the modal dialog.
ModalForm.title("Modal Form");

// Adds a toggle checkbox button to the form.
ModalForm.toggle("toggle");

// get player object from world object in 'mojang-minecraft' module
import { world } from "mojang-minecraft";
const player = [...world.getPlayers()][0];

ModalForm.show(player)
// This method returns a promise that resolves when the form has a response.
.then(function (formResponse) {
    // The form response is an object with the following properties:
    // isCanceled: boolean
    // formValues: any[]

    const { isCanceled, formValues } = formResponse;
    console.warn(`isCanceled: ${isCanceled}`);
    console.warn(`formValues: ${formValues}`);
})
// This method executes when an error in the promise function occurs.
.catch(function (error) {
    console.error(error);
});