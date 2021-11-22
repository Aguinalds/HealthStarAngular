# HealthStarAngular

## *PACOTES*

- dotnet add package Microsoft.AspNetCore.Authentication

- dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer

- dotnet add package Microsoft.EntityFrameworkCore

- dotnet add package Microsoft.EntityFrameworkCore.SqlServer

- dotnet add package Microsoft.EntityFrameworkCore.Design

## *NOVAS*

- dotnet tool install -g dotnet-aspnet-codegenerator

- dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design

## *BANCO DE DADOS*

- dotnet tool install --global dotnet-ef

- dotnet ef migrations add Initial

- dotnet ef database update

## *EXECUTAR O PROJETO*

- dotnet watch run

## *ANGULAR*

- npm install -g @angular/cli

- ng new my-first-project  //Criar novo projeto (nao obrigatorio)

- cd my-first-project //Cd no projeto (nao obrigatorio)

- ng add @angular/material // Adicionar material angular

- ng serve --open

## *CRIAR PIPE ANGULAR*

- ng g pipe name-pipe

## *CRIAR SERVICE ANGULAR*

- ng g service service-name

## *CRIAR PAGE ANGULAR*

- ng g c <nome>

## *CRIAR PACKAGE JSON*

- npm init -y

## *CRIAR JSON SERVER*

- npm install json-server
## *CRIAR CONTROLLERS* (nao obrigatorio para setup)

- dotnet-aspnet-codegenerator controller -name LoginController -m Login -dc Banco -api --relativeFolderPath Controllers

## *EXPRESS GENERATOR*

- npm install -g express-generator

- express --view ejs

## *CORS*

- npm install -g cors

## *MONGODB*

- npm install -g mongodb

## *MONGOOSE*

- npm install -g mongoose   

## *NPM*

- npm install

## *RODAR SERVIDOR-APIS*

- nodemon ./bin/www

========================================================================================================================================================================================

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
