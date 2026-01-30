function isPalindrome(x: number): boolean {

    if (x < 0) return false;

    const s: string = x.toString();

    const reversedS: string = s.split('').reverse().join('');

    return s === reversedS;
};