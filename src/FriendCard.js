import React, { Component } from 'react'
import { Card, Icon, Image, Progress } from 'semantic-ui-react'

class FriendCard extends Component {
    render() {
        return (
            <Card>
                <Image src={this.props.avatar} />
                <Card.Content>
                    <Card.Header>{this.props.firstName} {this.props.lastName}</Card.Header>
                    <Card.Meta>Joined in {this.props.joined}</Card.Meta>
                    <Card.Description>
                        {this.props.firstName} is a {this.props.jobTitle} living in {this.props.city} {this.props.state}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Progress
                    value='4000'
                    total='8000'
                    progress='percent'
                    > Swings
                    </Progress>
                    <Progress
                    value='4000'
                    total='8000'
                    progress='percent'
                    > Climbing
                    </Progress>
                </Card.Content>
            </Card>
        )
    }
}

export default FriendCard