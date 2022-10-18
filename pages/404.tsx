import {Button, Center, Text, VStack, Box} from "@chakra-ui/react"
import {useRouter} from "next/router"
import Head from "next/head"

const Custom404 = () => {
    const router = useRouter()

    return (
        <Box>
            <Head>
                <title>Page introuvable</title>
                <meta property="og:title" content="La page demandée est introuvable" key="page-introuvable"/>
                <meta name="description" content="La page demandée est introuvable"/>
            </Head>
            <Center h="100vh">
                <VStack>
                    <Text fontSize="6xl">404</Text>
                    <Text>Oups... La page demandée est introuvable !</Text>
                    <Button onClick={() => router.back()}>Utilisez la machine à remonter dans le temps</Button>
                </VStack>
            </Center>
        </Box>
    )
}

export default Custom404