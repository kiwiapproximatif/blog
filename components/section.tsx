import {Box} from "@chakra-ui/react"
import {ChildrenProp} from "../types"

export interface SectionProps extends ChildrenProp {
}

const Section = ({children}: SectionProps) => {
    return (
        <Box py={4}>
            {children}
        </Box>
    )
}

export default Section