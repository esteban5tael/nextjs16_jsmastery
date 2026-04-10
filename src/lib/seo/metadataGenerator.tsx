//  import { generateAsyncTitle,generateAsyncDescription } from "@/lib/seo";

export const APP_NAME = "DevEvents";
export const APP_DESCRIPTION =
    "The Hub for Every Dev Event You Can't Miss! Discover, Share, and Connect with Dev Events Worldwide.";

const generateTitle = (title?: string) => {
    return title ? `${title} | ${APP_NAME}` : APP_NAME;
};

const generateDescription = (description?: string) => {
    return description || APP_DESCRIPTION;
};

const generateAsyncTitle = async (
    title?: string,
): Promise<string> => {
    return title ? `${title} | ${APP_NAME}` : APP_NAME;
};

const generateAsyncDescription = async (
    description?: string,
): Promise<string> => {
    return description || APP_DESCRIPTION;
};

export {
    generateTitle,
    generateDescription,
    generateAsyncTitle,
    generateAsyncDescription,
};
