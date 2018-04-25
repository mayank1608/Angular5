// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,
	firebase: {
		apiKey: "AIzaSyDhVQ8RPzZPYsUjctOmFYpqN7KpdIdWe_s",
	    authDomain: "courselist-b0811.firebaseapp.com",
	    databaseURL: "https://courselist-b0811.firebaseio.com",
	    projectId: "courselist-b0811",
	    storageBucket: "courselist-b0811.appspot.com",
	    messagingSenderId: "616208239390"
	}
};
