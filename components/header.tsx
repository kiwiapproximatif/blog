import {Box, Stack, Text} from "@chakra-ui/react"
import {useRouter} from "next/router"
import Link from "./link"

const Header = () => {
    const router = useRouter()
    const isIndex = router.pathname === "/"

    return (
        <Box>
            {isIndex && <Stack mt={8} mb={2}>
                <Text textAlign="justify">
                    Je m&apos;appelle Maxence Lambard alias <Link href="https://github.com/kiwiapproximatif"
                          title="Kiwi Approximatif"
                    />
                    , ingénieur d&apos;études au
                    Laboratoire LITIS à l&apos;Université Le Havre Normandie.
                </Text>
                <Text textAlign="justify">
                    Ici, tu trouveras des cours, des expériences et quelques curiosités !
                </Text>
            </Stack>}
        </Box>
    )
}

export default Header