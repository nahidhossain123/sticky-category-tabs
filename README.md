# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Brief explanation
After reviewing the design shown in the video, I decided to create a category screen that serves as a container for all UI components. To maintain modularity and scalability, I divided the screen into the following components:
a) Custom Header
b) Horizontal Scroll Tab
c) Category Renderer
d) Some UI Compoentns e.g buttons,
I have created a category screen where i render all the component.
Architectural Decisions:
   choose component based architecture as it is easy to use, test , debug and mantain 
   use typescript for typesefty that allows better developer experince and effect to write error free code 
   

## Notes:
More Time
1. start unit testing 
2. impove the UI 
3. Code clean up

Trade-offs
4. I saw when i am clicking on the horizontal scroll tab it auto scrolling to left 


