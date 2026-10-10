export function getMails(list: unknown[]): string[] {
    let res: string[] = [];
    for (const item of list) {
        if (typeof item === 'string') {
            if(validateEmail(item.toLowerCase())){
                res.push(item);
            }
        }
    }
    return res.toSorted();
}

const validateEmail = (email: string): boolean => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regex.test(email);
};