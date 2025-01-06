// Get a Cookie
export const getCookie = (cookieName) => {
    const cookies = document.cookie
        .split('; ')
        .find(row => row.startsWith(`${cookieName}=`));
    return cookies ? cookies.split('=')[1] : null;
};

// Set a Cookie
export const setCookie = (cookieName, value, options = {}) => {
    let cookieString = `${cookieName}=${value};`;

    if (options.expires) {
        const expirationDate = new Date();
        // Calculate expiration time in milliseconds (30 minutes = 30 * 60 * 1000 ms)
        expirationDate.setTime(expirationDate.getTime() + options.expires * 60 * 1000);
        cookieString += `expires=${expirationDate.toUTCString()};`;
    }

    if (options.path) {
        cookieString += `path=${options.path};`;
    }

    if (options.secure) {
        cookieString += 'secure;';
    }

    if (options.sameSite) {
        cookieString += `samesite=${options.sameSite};`;
    }

    document.cookie = cookieString;
};

// Delete a Cookie
export const deleteCookie = (cookieName) => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};
