export const getWhichSelected = (
    x: string | null,
    y: string | null,
    selectedClass: string,
    unselectedClass: string
): string => (x === y ? selectedClass : unselectedClass);