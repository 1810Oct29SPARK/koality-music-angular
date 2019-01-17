# Koality Music Angular (front-end project)

The front-end project that serves as the presentation layer for the Koality Music project.  
*The back-end project is in the same organization called **koality-music-java***.

## Developers

* Eddy Soma
* Emma Banks
* Ryan Umanzor
* Jeremy Shropshire
* Danny Trevino

## Project Module Structure

* **Core Module** - for running the app; the only module loaded on startup; manages core routing and module imports.
* **Shared Module** - for maintaining global resources in the app including domain objects and other static data.
* **Publisher Module** - for handling the presentation logic for the app users who are registered as publishers; only load when the user logins in successfully as a publisher.
* **Customer Module** - for handling the presentation logic for the app users who are registered as customers; only load when the user logins in successfully as a customer.

## Current Features

*  **Publisher**
	1. Registration
	2. Login and logout
	3. Edit profile and upload profile picture
	4. Publish tracks
	5. Create and release albums using published tracks
	6. View their published tracks and albums
	6. Read reviews on their music publication

* **Customer**
	1. Registration
	2. Login and logout
	3. Edit profile and upload profile picture
	4. Access the Koality store to view the music available for purchase
	5. Purchase individual tracks
	6. Use the Koality player to play and download purchased tracks
	7. Purchase entire albums
	8. Get music recommendations based on genre
	8. Post reviews on purchased tracks and albums
	9. Delete reviews

## Future Features

1. Customers will be able to create custom playlists
2. Customers will be able to subscribe to publishers and get notifications when new releases are available
3. Publishers will be able to see their subscribers

## Supporting Technologies and Libraries

* Bootstrap 4
* NG Bootstrap
* Angular Material
* Google Fonts

## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Remarks

This project is temporarily finished as of January 17, 2018.