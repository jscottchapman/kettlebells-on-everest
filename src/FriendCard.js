import React, { Component } from 'react'
import { Card, Divider, Icon, Image, Progress } from 'semantic-ui-react'

class FriendCard extends Component {
    renderSore() {
        if(this.props.sore) {
            return (
            <Card.Description>
            {this.props.firstName} feels this amount of soreness: {this.props.sore}
            </Card.Description>
            )
        } else {
            return null
        }
    }

    renderThinksAbout() {
        if(this.props.sore) {
            return (
            <Card.Description>
            {this.props.firstName} thinks about this while swinging: "<strong>{this.props.thinksAbout}</strong>"
            </Card.Description>
            )
        } else {
            return null
        }
    }
    render() {
        
        return (
            <Card
            color={this.props.color}    
            >
                
                <Image src={this.props.avatar} />
                <Card.Content>
                    <Card.Header>{this.props.firstName} {this.props.lastName}</Card.Header>
                    <Card.Meta>{this.props.city}, {this.props.state}</Card.Meta>
                    {this.renderSore()}
                    <Divider />
                    {this.renderThinksAbout()}
                </Card.Content>
                <Card.Content extra>
                    <Progress
                    color='yellow'
                    value={this.props.swings}
                    total='8000'
                    progress='percent'
                    precision='0'
                    //indicating
                    
                    > {this.props.swings ? this.props.swings : 0} Swings
                    </Progress>
                    <Progress
                    value={this.props.climbing}
                    total='29029'
                    progress='percent'
                    precision='0'
                    //indicating
                    color='orange'
                    > {this.props.climbing ? this.props.climbing : 0} ft of Climbing
                    </Progress>
                </Card.Content>
            </Card>
        )
    }
}

export default FriendCard