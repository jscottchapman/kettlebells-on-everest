import React, { Component } from 'react'
import { Card, Icon, Image, Progress } from 'semantic-ui-react'

class FriendCard extends Component {
    render() {
        return (
            <Card
            color={this.props.color}    
            >
                
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
                    color='yellow'
                    value={this.props.swings}
                    total='8000'
                    //progress='percent'
                    //precision='0'
                    //indicating
                    
                    > Swings
                    </Progress>
                    <Progress
                    value={this.props.climbing}
                    total='29029'
                    //progress='percent'
                    //precision='0'
                    //indicating
                    color='orange'
                    > Climbing
                    </Progress>
                </Card.Content>
            </Card>
        )
    }
}

export default FriendCard