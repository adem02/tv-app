import React from 'react'
import Header from './Header';
import { Container } from '@mui/material'

const Layout = props => {

    return (
        <React.Fragment>
            <Header />
            <Container>
                {props.children}
            </Container>
        </React.Fragment>
    )
}

export default Layout;