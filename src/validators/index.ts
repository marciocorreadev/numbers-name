export function numberValidate(number: Number | string | undefined) {
    return !number || isNaN(Number(number))
}