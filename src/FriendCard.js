import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

    // "id": 1,
    // "name": {
    //   "first": "Creight",
    //   "last": "Tyrone"
    // },
    // "jobTitle": "Technical Writer",
    // "joined": 2011,
    // "friends": 59,
    // "avatar": "https://robohash.org/etinvoluptatem.bmp?size=200x200&set=set1",
    // "city": "El Paso",
    // "state": "Texas"

class FriendCard extends Component {
    render() {
        return (
            <Card>
                <Image src='https://robohash.org/etinvoluptatem.bmp?size=200x200&set=set1' />
                <Card.Content>
                    <Card.Header>Creight</Card.Header>
                    <Card.Meta>Joined in 2011</Card.Meta>
                    <Card.Description>
                        Creight is a Technical Writer living in El Paso, Texas
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='user' />
                    59 friends
                </Card.Content>
            </Card>
        )
    }
}

export default FriendCard