import { v4 as uuidv4 } from 'uuid';

const chillBops = () => {
  return [
    {
      name: 'Whoopty',
      cover:
        'https://assets.audiomack.com/cj/9df9c1bd9be599b7fe9b066d2d18ba2243b97b12b33f5257901b637c348f0847.jpeg?width=280&height=280&max=true',
      artist: 'CJ',
      audio:
        'https://music.audiomack.com/streaming/cj/whoopty-1.mp3?Expires=1606507652&Signature=YQvvRW9c8EjV0FGpY7J9YyO4WCTTvOmnsLBq~B1~ywpp1FUqCppCPbizhU0QOscW7BGOaZ7aPIQYUlwF71YTxQkOX~cH4pGkNeXXeLSz8ktEjd9kcIfQ32OZYXV-XS6YKejuxwASW2-WG7zY5JE9JSgna2vl7CGdKk3J6o-6fl0_&Key-Pair-Id=APKAIKAIRXBA2H7FXITA',
      color: ['#DB332E', '#742424'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Runnin/',
      cover:
        'https://assets.audiomack.com/21savage/a51f5da86bb0ff4c383a7b8386d2f82ec18e8a22442a2f0c19219ca3359db662.jpeg?width=280&height=280&max=true',
      artist: '21 Savage & Metro Boomin',
      audio:
        'https://music.audiomack.com/albums/21savage/savage-mode-ii/streaming/6-runnin-explicit-21-savage-metro-boomin.mp3?Expires=1606508079&Signature=DUlawugXonnf5jnP69U51y6eymqnrYGBsrLEDmU3No0h2qqLK0TRGnFreHqicdXC1~Td2VOBXCxCgcc9tyHzz-E9r41xcN0zOrq8G8WKm6h0inC7uyggVwb-HPUNvbw7bGPgbkAYt5mZSdKgOCnIMm3A-xuhuNWF3Y6PbXLmUxw_&Key-Pair-Id=APKAIKAIRXBA2H7FXITA',
      color: ['#DB332E', '#B8DEE0'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Tyler Herro',
      cover:
        'https://assets.audiomack.com/jackharlow/c34b7d102674f6fbb94b2bbeed22117e8debb04753135dd3e2a25a3adceec049.jpeg?width=280&height=280&max=true',
      artist: 'Jack Harlow',
      audio:
        'https://music.audiomack.com/streaming/jackharlow/tyler-herro.mp3?Expires=1610260596&Signature=iLRD6IDM~ZK7DBw~xqDrv3NVoc7rBtkNkS4l7aZPyrU67opC4GI3RDRVn1hjsQBLBxVUoL3SuQXtXvfGVO918-h~LNx9FFe7eQGaFlAtLHDmsVwlBwPMuoj8A3nm61q6RwsIZmwe~GDfnTacHAy0zROS03Xi535tI1wZP2sL-4c_&Key-Pair-Id=APKAIKAIRXBA2H7FXITA',
      color: ['#EFE2D0', '#C46E2F'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Martin & Gina',
      cover:
        'https://assets.audiomack.com/polog/a70863d36f4964be0b76205a6ef2e5a124243bdd2a0cfd181e57192baf79945e.jpeg?width=280&height=280&max=true',
      artist: 'Polo G',
      audio:
        'https://music.audiomack.com/albums/polog/the-goat/streaming/martin-gina-explicit.mp3?Expires=1606507886&Signature=fnJFKwwqG4cHLEinYZKAeUlql9DNRBRmMjelHPUeJVOcdDOeOzHkTyJDgA3wuoJBAx4mCQPPLFzR9TVlA~481WmLKHbD~2pyg2GjuA1av3hukbqUKrO5jkConx9YXb~xqtmpCOAQvnFvHiJ2niJ-TAjf082xxZJMR7-Vaniwn3k_&Key-Pair-Id=APKAIKAIRXBA2H7FXITA',
      color: ['#0C0C0C', '#42453F'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Holy Ground',
      cover:
        'https://assets.audiomack.com/davido/2de67507a7316b8f82e56187d4efac3a0f62a0c87465d501bb964800da337e73.jpeg?width=280&height=280&max=true',
      artist: 'Davido',
      audio:
        'https://music.audiomack.com/albums/davido/a-better-time/streaming/holy-ground.mp3?Expires=1606508590&Signature=Oc0doPIelfRL757KQPNoL-tJu87O3kSjFmbdbg4vMpxHz01v9xmrh3jC~jUGqHRDSJJwLrknT1hb9xD4uijWmCWol3F17D~sejOC3kcf-bVRxVZCUovpqC7ed0ucqIkNTMqAfoMX~88PAk6-nZzjZVjyQQ~FQ1Po3bJpWa-O1bQ_&Key-Pair-Id=APKAIKAIRXBA2H7FXITA',
      color: ['#BFC1C3', '#5A5345'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'No Stress',
      cover:
        'https://assets.audiomack.com/wizkid/7a0a60e23501ccd56e801edcd487a34e69c14b329f0db8264355b7f9aab63b4e.jpeg?width=280&height=280&max=true',
      artist: 'Wizkid',
      audio:
        'https://music.audiomack.com/albums/wizkid/made-in-lagos/streaming/no-stress-.mp3?Expires=1606508590&Signature=B2mzieL6nMSTloydAi84mC-TSVSYYL0HFGsJGJZ0wDrlUIg3R3UWSOuYRqiOzIcLKKS369TJU7-BBP0mT3BUQHKXAeca7EdpbqhLbzQBSTUbI5K0FiCjsvbgBNFBMh53wsX4ZNegDD~4oJH6JHsDhgbnUI94rSo370BZCX6F~8o_&Key-Pair-Id=APKAIKAIRXBA2H7FXITA',
      color: ['#F2E1CF', '#A49487'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Grignotines de Luxe',
      cover: 'https://f4.bcbits.com/img/a1754762286_10.jpg',
      artist: 'FouKi',
      audio:
        'https://t4.bcbits.com/stream/3294656f818c45b02fa0d8ae5f62b0c4/mp3-128/1502688101?p=0&ts=1606429316&t=3cbe8d6777c169e834007b8263bb20378ae7bfc2&token=1606429316_1cdc8c3860329aa32ef3ee47f8a9d468b4862f95',
      color: ['#DE3756', '#1465C7'],
      id: uuidv4(),
      active: false,
    },
  ];
};

export default chillBops;
