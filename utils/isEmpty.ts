export default function isEmptyString(str: string | null | undefined): boolean {
    return !str || str.length === 0;
}