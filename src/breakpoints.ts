export const breakpoints = {
    mobileS: '@media screen and (max-width: 320px)',
    mobileM: '@media screen and (max-width: 375px)',
    mobileL: '@media screen and (max-width: 425px)',
    tablet: '@media screen and (max-width: 768px)',
    media: (size: string) => `@media screen and (max-width: ${size})`,
};
