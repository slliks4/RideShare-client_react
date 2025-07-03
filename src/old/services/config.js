const isDebug = process.env.REACT_APP_DEBUG === 'true'; // Converts to boolean field

// Sets api url based on debug
const  baseUrl =  isDebug ? (
    process.env.REACT_APP_LOCAL_BASE_URL 
) : (
    process.env.REACT_APP_BASE_URL
);

export { baseUrl, isDebug }