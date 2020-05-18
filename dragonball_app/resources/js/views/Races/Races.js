import React from 'react';
import User_Page_Template from "../../templates/User_Page_Template";
import Card from "../../components/molecules/Card/Card";
import hulkhoganImage from "../../assets/icons/hulkhogan.jpg";

const characters = [
    {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at consequat neque. Ut ac felis elementum, cursus lorem non, finibus dolor. Donec eu egestas leo, sed tempor justo. Duis sollicitudin, elit in cursus tempor, risus enim posuere metus, at tincidunt nibh quam ac tortor. Donec eget mattis eros. Sed non convallis mi, quis faucibus nulla. Morbi gravida, urna at rutrum pulvinar, ante arcu pellentesque tellus, aliquet dignissim lacus tortor at libero. Suspendisse in mi lacinia, faucibus nisi quis, facilisis nunc. Curabitur feugiat massa est, non porttitor eros congue non.',
        title: 'Title',
        avatarSrc: hulkhoganImage,
        created: '3 days ago',
    },
    {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at consequat neque. Ut ac felis elementum, cursus lorem non, finibus dolor. Donec eu egestas leo, sed tempor justo. Duis sollicitudin, elit in cursus tempor, risus enim posuere metus, at tincidunt nibh quam ac tortor. Donec eget mattis eros. Sed non convallis mi, quis faucibus nulla. Morbi gravida, urna at rutrum pulvinar, ante arcu pellentesque tellus, aliquet dignissim lacus tortor at libero. Suspendisse in mi lacinia, faucibus nisi quis, facilisis nunc. Curabitur feugiat massa est, non porttitor eros congue non.',
        title: 'Title',
        avatarSrc: hulkhoganImage,
        created: '3 days ago',
    },
    {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at consequat neque. Ut ac felis elementum, cursus lorem non, finibus dolor. Donec eu egestas leo, sed tempor justo. Duis sollicitudin, elit in cursus tempor, risus enim posuere metus, at tincidunt nibh quam ac tortor. Donec eget mattis eros. Sed non convallis mi, quis faucibus nulla. Morbi gravida, urna at rutrum pulvinar, ante arcu pellentesque tellus, aliquet dignissim lacus tortor at libero. Suspendisse in mi lacinia, faucibus nisi quis, facilisis nunc. Curabitur feugiat massa est, non porttitor eros congue non.',
        title: 'Title',
        avatarSrc: hulkhoganImage,
        created: '3 days ago',
    },
    {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at consequat neque. Ut ac felis elementum, cursus lorem non, finibus dolor. Donec eu egestas leo, sed tempor justo. Duis sollicitudin, elit in cursus tempor, risus enim posuere metus, at tincidunt nibh quam ac tortor. Donec eget mattis eros. Sed non convallis mi, quis faucibus nulla. Morbi gravida, urna at rutrum pulvinar, ante arcu pellentesque tellus, aliquet dignissim lacus tortor at libero. Suspendisse in mi lacinia, faucibus nisi quis, facilisis nunc. Curabitur feugiat massa est, non porttitor eros congue non.',
        title: 'Title',
        avatarSrc: hulkhoganImage,
        created: '3 days ago',
    },
    {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at consequat neque. Ut ac felis elementum, cursus lorem non, finibus dolor. Donec eu egestas leo, sed tempor justo. Duis sollicitudin, elit in cursus tempor, risus enim posuere metus, at tincidunt nibh quam ac tortor. Donec eget mattis eros. Sed non convallis mi, quis faucibus nulla. Morbi gravida, urna at rutrum pulvinar, ante arcu pellentesque tellus, aliquet dignissim lacus tortor at libero. Suspendisse in mi lacinia, faucibus nisi quis, facilisis nunc. Curabitur feugiat massa est, non porttitor eros congue non.',
        title: 'Title',
        avatarSrc: hulkhoganImage,
        created: '3 days ago',
    },
    {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at consequat neque. Ut ac felis elementum, cursus lorem non, finibus dolor. Donec eu egestas leo, sed tempor justo. Duis sollicitudin, elit in cursus tempor, risus enim posuere metus, at tincidunt nibh quam ac tortor. Donec eget mattis eros. Sed non convallis mi, quis faucibus nulla. Morbi gravida, urna at rutrum pulvinar, ante arcu pellentesque tellus, aliquet dignissim lacus tortor at libero. Suspendisse in mi lacinia, faucibus nisi quis, facilisis nunc. Curabitur feugiat massa est, non porttitor eros congue non.',
        title: 'Title',
        avatarSrc: hulkhoganImage,
        created: '3 days ago',
    }
];

const Races = ({match: { params }}) => (
    <User_Page_Template pageType={params.name}>
        {characters.map(item => (
            <Card
                cardType = {params.name}
                title = {item.title}
                content = {item.content}
                avatarSrc = {item.avatarSrc}
                created = {item.created}
                key={item.title}
            />
        ))}
    </User_Page_Template>
);

export default Races;
