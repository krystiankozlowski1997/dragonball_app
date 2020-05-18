import React, {Component, Fragment} from 'react';
import Details_Template from "../../templates/Details_Template";
import { routes } from '../../routes/index';
import hulkhoganImage from "../../assets/icons/hulkhogan.jpg";

class Details_Page extends Component {
    state = {
        pageType: 'sayans',
    };

    componentDidMount() {
        const { match: { params } } = this.props;

        this.setState({ pageType: params.name})
    };

    render(){
        const character = {
            id: 1,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at consequat neque. Ut ac felis elementum, cursus lorem non, finibus dolor. Donec eu egestas leo, sed tempor justo. Duis sollicitudin, elit in cursus tempor, risus enim posuere metus, at tincidunt nibh quam ac tortor. Donec eget mattis eros. Sed non convallis mi, quis faucibus nulla. Morbi gravida, urna at rutrum pulvinar, ante arcu pellentesque tellus, aliquet dignissim lacus tortor at libero. Suspendisse in mi lacinia, faucibus nisi quis, facilisis nunc. Curabitur feugiat massa est, non porttitor eros congue non.',
            title: 'Title',
            avatarSrc: hulkhoganImage,
            created: '3 days ago',
        };

        return(
            <Details_Template
                pageType={this.state.pageType}
                title={character.title}
                created={character.created}
                content={character.content}
                avatarSrc={character.avatarSrc}
            >
            </Details_Template>
        );
    }
}

export default Details_Page;
