// ==UserScript==
// @name         QueryManager autofill
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Save the non-standard form field entries on QueryManager.com so you don't have to copy/paste every time
// @author       M.A. Daross
// @match        https://querymanager.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=querymanager.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const fields = document.getElementsByClassName("form-control");
    const editables = document.querySelectorAll("[contenteditable]");
    const editableMap = new Map();
    editables.forEach(el => {
        const id = el.parentElement.parentElement.parentElement.getElementsByTagName('label')[0].getAttribute('for');
        el.id = id;
        editableMap.set(id, el);
    });

    const saveButton = document.createElement('button');
    document.body.appendChild(saveButton);
    saveButton.appendChild(document.createTextNode('Save'));
    saveButton.id = "qm_autosave";
    saveButton.style.position = "fixed";
    saveButton.style.top = "1rem";
    saveButton.style.right = "1rem";
    saveButton.addEventListener('click', () => {
        for (let field of fields) {
            if (field.value) {
                localStorage.setItem("field-" + field.id, field.value);
            }
        }
        for (const [key, editableDiv] of editableMap) {
            if (editableDiv.innerText != '') {
                localStorage.setItem("ed-" + key, editableDiv.innerText.replace(/\n/g, '<br>'));
            }
        };
    });

    const fillButton = document.createElement('button');
    document.body.appendChild(fillButton);
    fillButton.appendChild(document.createTextNode('Fill'));
    fillButton.id = "qm_autofill";
    fillButton.style.position = "fixed";
    fillButton.style.top = "3.5rem";
    fillButton.style.right = "1rem";
    fillButton.addEventListener('click', () => {
        for (var key in localStorage) {
            if (key.includes("field-")) {
                const id = key.replace("field-","");
                const field = document.getElementById(id);
                if (field) {
                    field.value = localStorage.getItem(key);
                }
            }
            if (key.includes("ed-")) {
                const id = key.replace("ed-","");
                if (editableMap.has(id)) {
                    const edDiv = editableMap.get(id);
                    edDiv.focus();
                    edDiv.innerText = localStorage.getItem(key).replace(/<br>/g, '\n');
                    edDiv.blur();
                }
            }
        }
        // Listen for submit button click so we can populate the email confirmation
        document.getElementById('submitBtn').addEventListener('click', () => {
            const confirmEmailField = document.getElementById('confirmEmail');
            confirmEmailField.value = localStorage.getItem('field-email');
        });
    });

})();

