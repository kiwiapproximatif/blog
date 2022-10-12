import {Container, Text, VStack} from "@chakra-ui/react"

const Footer = () => {
    return (
        <Container maxW="2xl" sx={{"flexShrink": 0}} bg="white">
            <VStack my={4}>
                <Text>
                    Copyright &copy; Maxence Lambard. Tous droits réservés
                </Text>
            </VStack>
        </Container>
    )
}

export default Footer