# GetItDone with ToDo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Project Structure:

src/                    		  --> all of the source files for the application.
  app /							  --> All the app specific modules and components.
	todos /						  --> Contains the To Do Component, controller and the services associated with it.
		sharedService / 		  --> Contains the service related to the To Do Application.
			todos.service.spec.ts --> Unit test for checking whether the service is being created properly.
			todos.service.ts 	  --> The service class which connects to the Angular Firebase to store and retrieve the data.
		todos.component.css 	  --> The stylesheet for the To do component.
		todos.component.html 	  --> The HTML template for the To do component.
		todos.component.spec.ts   --> The unit test for checking whether the To Do component is being created properly.
		todos.component.ts 		  --> The controller logic for the To Do template.
	app.component.css 			  --> The stylesheet for the root App component.
	app.component.html			  --> HTML template for the root App component.
	app.component.ts			  --> The controller logic of App component. 
	app.component.spec.ts 		  --> The Unit Test class which will check AppComponent is created or not.
	app.module.ts 				  --> The root Angular Module which gives information regarding how the applications parts fit together.
  assets /      	 	  	  	  --> Folder for storing other resources.
  environments / 				  --> All the information about dev or production environment.
	environment.ts				  --> The development environment controller.
	environment.prod.ts			  --> The production environment controller.
  styles.css      		  		  --> Global stylesheet for the overall application.
  main.ts
  polyfills.ts
  tests.ts
  tsconfig.app.json
  tsconfig.spec.json
  typings.d.ts
  index.html            		  --> The app layout file (the main html template file of the app).
e2e-tests/            		  --> End-to-end test.
karma.conf.js         		  --> Config file for running unit tests with Karma.
README.md					  --> Description of the Get It Done - To Do Application.
package.json				  --> The complete dependencies and scripts required to run the application.
package-lock.json
tsconfig.json				  --> TypeScript config file.
protractor-conf.js    		  --> Protractor config file.


