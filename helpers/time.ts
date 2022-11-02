export function fmtMSS(s: string | number | any) { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s }
