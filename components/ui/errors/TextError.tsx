import { Text } from 'react-native'

interface PropsType {
    hasError: boolean
    errorText: string

    otherStyle?: string
}

export default function TextError(
    {
        hasError,
        errorText,
        otherStyle
    }: PropsType
) {
    return (
        (hasError) &&
        <Text className={`text-base text-error-100 font-psemibold mt-1 ${otherStyle}`}>{errorText}</Text>
    )
}
