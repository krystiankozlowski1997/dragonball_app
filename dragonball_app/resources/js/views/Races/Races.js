import React from 'react';
import Grid_Template from "../../templates/Grid_Template";
import Card from "../../components/molecules/Card/Card";
import hulkhoganImage from "../../assets/icons/hulkhogan.jpg";

const characters = [
    {
        id: 1,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at consequat neque. Ut ac felis elementum, cursus lorem non, finibus dolor. Donec eu egestas leo, sed tempor justo. Duis sollicitudin, elit in cursus tempor, risus enim posuere metus, at tincidunt nibh quam ac tortor. Donec eget mattis eros. Sed non convallis mi, quis faucibus nulla. Morbi gravida, urna at rutrum pulvinar, ante arcu pellentesque tellus, aliquet dignissim lacus tortor at libero. Suspendisse in mi lacinia, faucibus nisi quis, facilisis nunc. Curabitur feugiat massa est, non porttitor eros congue non.',
        title: 'Title',
        avatarSrc: hulkhoganImage,
        created: '3 days ago',
    },
    {
        id: 2,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at consequat neque. Ut ac felis elementum, cursus lorem non, finibus dolor. Donec eu egestas leo, sed tempor justo. Duis sollicitudin, elit in cursus tempor, risus enim posuere metus, at tincidunt nibh quam ac tortor. Donec eget mattis eros. Sed non convallis mi, quis faucibus nulla. Morbi gravida, urna at rutrum pulvinar, ante arcu pellentesque tellus, aliquet dignissim lacus tortor at libero. Suspendisse in mi lacinia, faucibus nisi quis, facilisis nunc. Curabitur feugiat massa est, non porttitor eros congue non.',
        title: 'Title',
        avatarSrc: hulkhoganImage,
        created: '3 days ago',
    },
    {
        id: 3,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at consequat neque. Ut ac felis elementum, cursus lorem non, finibus dolor. Donec eu egestas leo, sed tempor justo. Duis sollicitudin, elit in cursus tempor, risus enim posuere metus, at tincidunt nibh quam ac tortor. Donec eget mattis eros. Sed non convallis mi, quis faucibus nulla. Morbi gravida, urna at rutrum pulvinar, ante arcu pellentesque tellus, aliquet dignissim lacus tortor at libero. Suspendisse in mi lacinia, faucibus nisi quis, facilisis nunc. Curabitur feugiat massa est, non porttitor eros congue non.',
        title: 'Title',
        avatarSrc: hulkhoganImage,
        created: '3 days ago',
    },
    {
        id: 4,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at consequat neque. Ut ac felis elementum, cursus lorem non, finibus dolor. Donec eu egestas leo, sed tempor justo. Duis sollicitudin, elit in cursus tempor, risus enim posuere metus, at tincidunt nibh quam ac tortor. Donec eget mattis eros. Sed non convallis mi, quis faucibus nulla. Morbi gravida, urna at rutrum pulvinar, ante arcu pellentesque tellus, aliquet dignissim lacus tortor at libero. Suspendisse in mi lacinia, faucibus nisi quis, facilisis nunc. Curabitur feugiat massa est, non porttitor eros congue non.',
        title: 'Title',
        avatarSrc: hulkhoganImage,
        created: '3 days ago',
    },
    {
        id: 5,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at consequat neque. Ut ac felis elementum, cursus lorem non, finibus dolor. Donec eu egestas leo, sed tempor justo. Duis sollicitudin, elit in cursus tempor, risus enim posuere metus, at tincidunt nibh quam ac tortor. Donec eget mattis eros. Sed non convallis mi, quis faucibus nulla. Morbi gravida, urna at rutrum pulvinar, ante arcu pellentesque tellus, aliquet dignissim lacus tortor at libero. Suspendisse in mi lacinia, faucibus nisi quis, facilisis nunc. Curabitur feugiat massa est, non porttitor eros congue non.',
        title: 'Title',
        avatarSrc: hulkhoganImage,
        created: '3 days ago',
    },
    {
        id: 6,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at consequat neque. Ut ac felis elementum, cursus lorem non, finibus dolor. Donec eu egestas leo, sed tempor justo. Duis sollicitudin, elit in cursus tempor, risus enim posuere metus, at tincidunt nibh quam ac tortor. Donec eget mattis eros. Sed non convallis mi, quis faucibus nulla. Morbi gravida, urna at rutrum pulvinar, ante arcu pellentesque tellus, aliquet dignissim lacus tortor at libero. Suspendisse in mi lacinia, faucibus nisi quis, facilisis nunc. Curabitur feugiat massa est, non porttitor eros congue non.',
        title: 'Title',
        avatarSrc: hulkhoganImage,
        created: '3 days ago',
    }
];

const Races = ({match: { params }}) => (
    <Grid_Template pageType={params.name}>
        {characters.map(({id, content, title, avatarSrc, created}) => (
            <Card
                id = {id}
                cardType = {params.name}
                title = {title}
                content = {content}
                avatarSrc = {avatarSrc}
                created = {created}
                key={id}
            />
        ))}
    </Grid_Template>
);

export default Races;
