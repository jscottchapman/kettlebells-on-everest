import React, { Component } from 'react'
import { Header, Icon, Image } from 'semantic-ui-react'

class IconHeader extends Component{
    render() {
        return (
            <div>
                <Image
                src='kettlebellsCoverImage.jpg'
                size='large'
                space='bottom'
                centered
                rounded
                />
                <Header as="h1" icon textAlign='center'>
                    Kettlebells on Everest                    
                </Header>
            </div>
        )
    }
}

export default IconHeader