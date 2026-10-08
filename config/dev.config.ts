export const devConfig = {
    environment: "dev",
    uiBaseURL: process.env.DEV_UI_URL!,
    apiBaseURL: process.env.DEV_API_URL!
};

console.log("API URL:", devConfig.apiBaseURL);