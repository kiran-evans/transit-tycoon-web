export const generateUid = (): string => {
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    let uid = "";
    for (let i = 0; i < 16; i++) {
        uid += characters[Math.floor(Math.random() * characters.length)];
    }
    return uid;
}