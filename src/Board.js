import React, { Component } from 'react'
import IconHeader from './IconHeader'
import FriendCard from './FriendCard'
import { Divider } from 'semantic-ui-react'

class Board extends Component {
    render() {
        return (
            <div>
                <IconHeader />
                <Divider />
                <FriendCard />
            </div>
        )
    }
}
export default Board