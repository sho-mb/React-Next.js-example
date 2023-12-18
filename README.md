# React-Next.js-example

This is example of learning structure of React / NEXT.js 

## Environment 

** Frontend
- Using Npm 10.2.3 / React framework NEXT.js

- Using App Router on NEXT.js
  - Learn more about App router 
  https://nextjs.org/docs#app-router-vs-pages-router

** Backend
- Using C# .NET core version : 8.0.100

** Database
- MySql Ver 8.1.0 for macos13.3 on x86_64 (Homebrew)

## Basic Features

- DbInitializer.cs will automatically run to create initial data in your DB

- Must run C# and react at the same time in order to run application
  My recommendation use VS code, Use terminal in IDE and run via CLI.

- Using Swagger UI go to http://localhost:5024/swagger/index.html

### How to run app

- Using CLI on terminal. East manage by using IDE VSCode go tab > terminal > New terminal
  You need to open total 2 ternminal in both directory API and mango-burgershop-view.

- In mango-burgershop-view directory 
  run "npm run dev" for development.
  run "npm run build" and "npm run start" then application start running.
  *you need to run backend first!

- In API directory
  run "dotnet run" then application start running.

- Go to http://localhost:3000 to index page

### Restfull API
- You can use / Get / Post / Put / Delete
- You can add endpoint, Check in lib/hamburgerApi.ts
