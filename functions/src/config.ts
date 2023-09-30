// config.ts
import {defineString} from "firebase-functions/params";

// Define parameters for your functions
export const minInstancesConfig = defineString("HELLO_WORLD_MININSTANCES", {
  default: "2",
  description: "Minimum instances for the function",
});

export const welcomeMessage = defineString("WELCOME_MESSAGE", {
  default: "Hello from Firebase using Express.js!",
  description: "Welcome message for the function",
});
