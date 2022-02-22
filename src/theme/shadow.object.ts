import { theme } from './theme.object';

export const shadow = {
    inset: {
        a: `-2.5px -2.5px 5px ${theme.c.shadow.a} inset, 2.5px 2.5px 5px ${theme.c.shadow.b} inset`,
        b: `-5px -5px 10px ${theme.c.shadow.a} inset, 5px 5px 10px ${theme.c.shadow.b} inset`,
    },
    raised: {
        a: `-2.5px -2.5px 5px ${theme.c.shadow.a}, 2.5px 2.5px 5px ${theme.c.shadow.b}`,
        b: `-5px -5px 10px ${theme.c.shadow.a}, 5px 5px 10px ${theme.c.shadow.b}`,
        c: `-10px -10px 20px ${theme.c.shadow.a}, 10px 10px 20px ${theme.c.shadow.b}`,
        d: `-20px -20px 40px ${theme.c.shadow.a}, 20px 20px 40px ${theme.c.shadow.b}`,
    },
};
