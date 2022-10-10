import { Text, VStack, Container } from "@chakra-ui/react"

const Footer = () => {
    return (
        <Container maxW="2xl" sx={{ "flexShrink": 0 }} bg="white">
            <VStack m={4}>
                <Text>
                    Copyright &copy; Maxence Lambard. All Rights Reserved
                </Text>
            </VStack>
        </Container>
    )
}

export default Footer