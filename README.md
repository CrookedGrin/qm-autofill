# qm-autofill

An autofill script for QueryManager.com, so you don't have to copy and paste every time. Because querying is already enough of a pain.
<img width="571" alt="image" src="https://user-images.githubusercontent.com/1148607/219791976-437f7a46-e6fa-4132-adbe-06eac20994c6.png">

## Installation

This script will run on QueryManager.com using the [TamperMonkey](https://www.tampermonkey.net/) browser extension, which allows you to inject javascript in your browser. Follow the instructions on TamperMonkey to install the browser plugin.

1. Install [TamperMonkey](https://www.tampermonkey.net/)
1. Click [here](https://raw.githubusercontent.com/crookedgrin/qm-autofill/main/querymanager.user.js) to load the script
1. Confirm your intention to install the script. (If you want to make sure it's not doing anything shady, you can look at [the source code](https://github.com/CrookedGrin/qm-autofill/blob/main/querymanager.user.js).)
1. Navigate to a QueryManager page as usual
1. Fill out the form the way you want it
1. Hit the "Save" button at the top right to store all your form fields in your browser.
1. If you want to update your saved fields, hit "Save" again at any point.
*WARNING*: _Hitting "Save" will the **overwrite** your stored entries with what's currently in the form_.
1. The next time you load QueryManager.com, you can hit "Fill" to apply the stored data.

## Notes

- Each QueryManager form is configured slightly differently, depending on how the agent set it up. Some fields might look the same, but actually have a slightly different name / id for different agents. For example, one form might have a `sample_pages` field and another might have a `sample_chapters` field. This script just matches an exact field ID, so you might have to populate the same thing again. But the storage is additive, so the next time you encounter that field, the script will be able to populate it.
- If you want to see the data the script is saving, you can see it by opening [your browser's Inspector panel](https://blog.hubspot.com/website/how-to-inspect), going to the `Application` pane, and looking under `localStorage`. Once you've saved, you'll see an entry there for `https://querymanager.com`, with a table of the stored values. You can clear the data from there, but you won't be able to restore it, so be careful.
  - <img width="512" alt="image" src="https://user-images.githubusercontent.com/1148607/219792139-6d590c33-2d6a-49fc-9fc4-cb07192c9891.png">
- If you're logging into QueryTracker, be aware that this script will save your QT password unencrypted in `localStorage`. If enough people complain about that, I may add an option to disable or encrypt it.
- Formatting in QueryManager is weird. I've done my best to preserve it, but your mileage may vary. Check your work!
- Make sure you've followed the agent's instructions and checked whether anything is different from the last form you submitted.
