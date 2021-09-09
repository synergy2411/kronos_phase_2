# package.json -> npm init -y

# Redux package -> npm install redux

# Angular workspace
- ng new <workspace-name> --createApplication=false
- cd <workspace-name>
- ng generate application counter-app

# ng --version

# ngrx - ng for Angular rx for ReactiveX
- @ngrx/store
- @ngrx/effects
- @ngrx/store-devtools

- npm install @ngrx/store@10 --save
- npm install @ngrx/store-devtools -D

https://ukg.zoom.us/j/99811054935?pwd=TzNIZXg1YzBmT2hNTVdDczlZTWhDQT09


- ng add @angular/pwa
- ng build -> dist/counter-app
- npm install http-server -g

---------------------
- testing - Unit Testing - 
    - Jasmine : testing framework for JS Apps
    - Karma : test runner
- library
    - ng generate library kronos-lib --prefix=kl
    - ng build kronos-lib
    - import in Angular App Module



- app optimization techniques
    Change Detection Strategies :
    - Default
    - onPush

    Parent -> Child



- deployment on Firebase cloud

- ng test --code-coverage

# Data Storage 
- Angular Services - Singleton - not visible to UI
- Redux Store - STATE
- Web Storage - localStorage || SessionStorage

# Deployment Steps - Firebase
- ng build --prod
- npm install -g firebase-tools
- firebase login
- firebase init
- firebase deploy


# Service with Modules

- Service registered with Eagerly loaded modules will have application-wide singleton instance
- Service registered with Lazily loaded modules create a separate DI tree

- Shared Modules with ModuleWithProviders



# Change Detection
 - Default
 - onPush => mutable changes

 - Any event
 - XHR Call
 - Timer
 - Activity trigger by user 




 synergy2411@outlook.com