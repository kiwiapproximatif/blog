import Footer from "./footer"
import Header from "./header"
import Section from "./section"
import { Container, Divider, Spacer } from "@chakra-ui/react"
import { ChildrenProp } from "../types"

export interface BaseProps extends ChildrenProp { }

const Base = ({ children }: BaseProps) => {
    return (
        <Container maxW='2xl'>
            <Header />
            <Section>
                {children}
            </Section>
            <Footer />
        </Container>
    )
}

export default Base