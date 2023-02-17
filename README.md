# qm-autofill

An autofill script for QueryManager.com, so you don't have to copy and paste every time. Because querying is already enough of a pain.

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
