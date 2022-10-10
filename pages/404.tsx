import { Center, VStack, Text, Button } from "@chakra-ui/react"
import { useRouter } from "next/router"

const Custom404 = () => {
    const router = useRouter()

    return (
        <Center h="100vh">
            <VStack>
                <Text fontSize="6xl">404</Text>
                <Text>Oups... Page not found!</Text>
                <Button onClick={() => router.back()}>Use the time travel machine</Button>
            </VStack>
        </Center>
    )
}

export default Custom404