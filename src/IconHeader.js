import React, { Component } from 'react'
import { Divider, Header, Icon, Image } from 'semantic-ui-react'

class IconHeader extends Component{
    render() {
        return (
            <div>
                <Divider hidden />
                <div>
                    <Image
                    src='kettlebellsCoverImage.jpg'
                    size='large'
                    space='top'
                    centered
                    rounded
                    />
                    <Header as="h1" textAlign='center'>
                        Kettlebells on Everest                    
                    </Header>
                </div>
            </div>
        )
    }
}

export default IconHeader