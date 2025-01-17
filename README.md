# TechXChange
A React-Native mobile app designed to facilitate Electronic Device Trading.

## Authors

[Evan O'Shea](https://github.com/evanoshea21) \
[Aristotle Jalalianfard](https://github.com/n0kam1)\
[Erin Antoine](https://github.com/erinantoine1)\
[Kyle Robers](https://github.com/kylrober)

## Built With

![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)![Google Cloud](https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white)![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)![ExpressJS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

## Product Overview

#### Highlighted Features

- Firebase Authentication used in tandem with MySql DB in order to login and retrieve user information
- React Native's Stack and Tab navigators implemented to manage user navigation
- Google Places API used to autocomplete user input (for Address) while registering
- AWS Amplify & S3 integrated to work with Expo-client ImagePicker component, so user can upload/take an image from their phone

<p align="center">
<img src="./assets/overview2.gif" height="600">
</p>


## Home Screen
Author: [Evan O'Shea](https://github.com/evanoshea21)

<img src="./assets/homescreen5.gif" height="600">

#### Optimization Feature
Global Context `isReady` was made to keep track of when user updates one of 3 lists (Items, Trades, Bookmarks). \
This limits when AJAX requests are made to only occur when inputs from the user are detected. \
Object:
```js
const [isReady, setIsReady] = useState({
   yourItems: true,
   trades: true,
   bookmarks: true
})
```

**Examples:**
1. User adds a new device, hence new GET req for yourItems permitted.
2. User Bookmarks another item, hence new GET req for yourBookmarks permitted

#### Your Devices (items):

- Displays User's added devices
- Global Context `isReady` used to limits pull requests only when list changes (mentioned above)

#### Your Pending Trades (proposed & offered):

- 3-stage trading process. Status is either *Proposed*, *Approved*, or *Completed*. This allows a proposer to Accept the trade, hence Confirming it once the recipient of the trade proposition Approves it.
- Global Context only pulls from trades if trade is proposed by user or refresh button is clicked
- Toggle Button allows user to change views, between trades they *Proposed* and trades they are *Offered*

#### Your Bookmarks:

- Uses Global context to ONLY pull from bookmarks after each time an item is bookmarked (reduces unnecessary AJAX requests)
- Items that are **Yours** cannot be bookmarked (bookmark button doesn't display)
- Items that are already bookmarked by you displays a disabled grey button

## Item Details Screen/Propose Trade Screen
Author: [Erin Antoine](https://github.com/erinantoine1)

<img src="./assets/proposeForm.gif" height="600">

#### Highlighted Features

- View item details/current owner information
- Ability to bookmark items for later viewing/trading
- React Native's Stack and Tab navigators implemented to manage user navigation
- Ability to propose a trade from your devices (items that have been previously added to the account via "Add Items" screen)

##### View Item Details/Current Owner Information:

- All information about a device is presented upon navigation to the Item Details screen (item name, description, condition) along with a clear image of the item available for trade
- Information about the current owner is also available upon navigation to the Item Details screen (name, location, short owner tagline) along with an avatar of the user (if they uploaded to their account)

##### Bookmark Item:

- Items will be added to bookmarks table of database, which can later be accessed via the Home screen
- Items that are Yours cannot be bookmarked (bookmark button doesn't display)
- Items that are already bookmarked by you displays a disabled grey button

##### Navigation:

- From the Item Details screen, one can navigate to the previous page (where item image was originally clicked-Home or Search screens) by clicking "Back"
- Users may navigate to the Propose Trade screen via the button at the bottom of the Item Details screen (unless it is the user's item)
- From the Propose Trade screen, one can navigate to the previous page by clicking "Item Details", and any changes to the propose trade form will not be saved

##### Propose a Trade:

- Users will select from their devices to trade (represented by round avatars in the first section of the screen)
- On press, your selected device will be highlighted in blue
- You can preview the trade before submission in the second section of the screen (images of both devices will be displayed)
- Submit your proposal by clicking on the "Propose Trade" button at the bottom of the screen
- View trade progress via the Home screen

## Search Items Screen
Author: [Aristotle Jalalianfard](https://github.com/n0kam1)

<img src="./assets/search.gif" height="600">

## Add Items Screen
Author: [Kyle Robers](https://github.com/kylrober)

<img src="./assets/addItem.gif" height="600">

-------------------------------------------
### More Demo Clips

|         Login              |               Register (with Google Places Address AutoComplete)                    |        Trade Process   |
| :---------------------------------: | :----------------------------: | :-----------------------------------: |
| <img src="./assets/login.gif" height="400"> | <img src="./assets/register.gif" height="400"> | <img src="./assets/trade.gif" height="400">           |

## Getting Started

### Basic Setup
1. Clone repo
2. run `npm install`
3. Open terminal for expo client. Run `npm start`
4. Open terminal for node server (to communicate wit your db). Run `npm run server`

**To test with dummy data**

0. First, you must have mysql downloaded and running on your local machine
1. Open a new terminal and run `cd server/db`
2. Run following commands:
- `mysql -u [yourSqlUserName] -p [yourPassword] < schema.sql`
- `mysql -u [yourSqlUserName] -p [yourPassword] < seed.sql`

### To setup Firebase & Google Places API for Login/Reg functionality
**Firebase**
1. Create a firebase account
2. Add project > add Authentication > enable email-password login/signup > get web config file
3. Create a `.env` file and paste in your firebase values. Use the example config in repo
**Google Places**
1. Create a google cloud account and add billing
2. Get API for google places. Input into your config file

### To setup with Amplify Aws + S3 (for image uploads in profile)
Amplify is Amazon's full stack project manager. It will make it easier to add and connect to an S3 bucket for image storage

1. Run `npm install -g @aws-amplify/cli` to install Amplify CLI
2. Run `amplify configure` (will prompt you to create an AWS iam user in the browswer)
  - sign into aws account in browser
  - once signed in, return to terminal and press enter to finish config
3. Run `amplify init` to initilise a new Amplify project in your app
  - choose profile to connect to the local IAM User you just made
  - an amplify folder in your project will appear
4. Run `amplify add storage` (IMPORTANT: make sure to setup with "Auth + Guests" when asked; won't work otherwise)
5. Run `amplify push` to deploy the Storage and Auth resources in Aws Amplify project
6. You should see a `src` directory appear with file named `aws-exports.js`. Is should display your s3 bucket information if done correctly.

If done correctly you can start the app and add/take pictures from your local device.

