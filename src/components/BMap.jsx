import React from 'react'
import InfiniteMenu from '../Animations/InfiniteMenu'

const BMap = () => {

  const items = [
    {
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/9e/20/bb/sanchi-stupa.jpg?w=1400&h=800&s=1',
      link: 'https://google.com/',
      title: 'Sanchi Stupa',
      description: 'Sanchi Stupa is a Buddhist pilgrimage site in Bhopal. It is a UNESCO World Heritage Site and one of the most important Buddhist pilgrimage sites in the world.'
    },
    {
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/d9/90/ac/img-20190317-wa0012-largejpg.jpg?w=1000&h=800&s=1',
      link: 'https://google.com/',
      title: 'Tribal Museum',
      description: 'Tribal Museum is a museum in Bhopal. It is a UNESCO World Heritage Site and one of the most important tribal museums in the world.'
    },
    {
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/ab/fe/5e/lake-view-from-van-vihar.jpg?w=1000&h=800&s=1',
      link: 'https://google.com/',
      title: 'Van Vihar National Park',
      description: 'Van Vihar National Park is a national park in Bhopal. It is a UNESCO World Heritage Site and one of the most important national parks in the world.'
    },
    {
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b2/e2/e4/raja-bhoja-the-builder.jpg?w=700&h=-1&s=1',
      link: 'https://google.com/',
      title: 'Upper Lake',
      description: 'Upper Lake is a lake in Bhopal. It is a UNESCO World Heritage Site and one of the most important lakes in the world.'
    },
    {
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/d2/75/a9/from-outside.jpg?w=1000&h=800&s=1',
      link: 'https://google.com/',
      title: 'DB Mall',
      description: 'DB Mall is a mall in Bhopal.One of the best mall with all the brands. You may have to walk a lot here to move with no seating instead of food courts. You can get suns discount during festivals.'
    },
    {
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/5e/7d/cf/the-tropic-of-cancer.jpg?w=1000&h=800&s=1',
      link: 'https://google.com/',
      title: 'Tropic of Cancer',
      description: 'Great place to remember the geography lessons learnt in school 😊'
    },
    {
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/56/d3/9b/taj-ul-masajid.jpg?w=1000&h=800&s=1',
      link: 'https://google.com/',
      title: 'Taj-ul-Masajid',
      description: 'Taj-ul-Masajid is a mosque in Bhopal. It is a UNESCO World Heritage Site and one of the most important mosques in the world.'
    },
    {
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/3c/3a/74/20181101-134746-largejpg.jpg?w=1000&h=800&s=1',
      link: 'https://google.com/',
      title: 'Manav Sanghralaya',
      description: '1. A great museum for art work surrounded by forest. Lot of photo shoot are done here.\n2. Place is very calm, captivating and soothing and one must visit here.\n3. There are equipment as old as 500-1000 years.'
    },
    {
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/de/0d/dd/air-craft.jpg?w=1000&h=800&s=1',
      link: 'https://google.com/',
      title: 'Yodhasthala',
      description: 'A know your army establishment open for all, free of cost. The landscape provides an insight into the nations pride, the indian army, its stories of valor and its achievements. '
    },
    {
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/73/c6/82/kerwa-dam.jpg?w=1000&h=800&s=1',
      link: 'https://google.com/',
      title: 'Kerwa Dam',
      description: 'It is a picnic spot with reasonable facilities. There is a good restaurant here which is operated by MP Tourism. It gets crowded on holidays.'
    },
    {
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/4b/be/3b/temple-on-the-hillock.jpg?w=800&h=600&s=1',
      link: 'https://google.com/',
      title: 'Manuabhan Tekri',
      description: 'Nice place, situated at mountain, from the top we can see all Bhopal city, there is a rope way also, there is a jain temple also must visit place'
    },
    {
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/e6/94/0e/20181227-170231-largejpg.jpg?w=1000&h=800&s=1',
      link: 'https://google.com/',
      title: 'People\'s Mall',
      description: 'A one stop destination for all celebrations events & film shoot Entertainment Multiplex 7D Drive Inn Cinema Scary house Gaming zone Water Amusement Park Adventure sports wall climbing '
    },
    {
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/df/01/a0/view-from-front.jpg?w=1000&h=-1&s=1',
      link: 'https://google.com/',
      title: 'Birla Mandir',
      description: 'Visiting the shrines were very nostalgic. Visit to this temple will certainly not disappoint anyone.'
    },
    {
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/1b/7c/5a/temple-with-its-beauty.jpg?w=1000&h=-1&s=1',
      link: 'https://google.com/',
      title: 'Lakshmi Narayana Temple',
      description: 'Temple is So nice and beautiful,temple is cleane and big,construction of temple is good,place is nice and cool.'
    },{
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/44/a8/fe/kolar-dam.jpg?w=1000&h=-1&s=1',
      link: 'https://google.com/',
      title: 'Kolar Dam',
      description: 'Its a huge dam, near Bhopal. But unless you have access to the Kolar Guest House, you may not find any picnic spot. Though there are resorts around the area, find out their activities, rates and availability.'
    },
    
  ];

  return (
    <div>
      <div style={{ height: 'screen', position: 'relative' }}>
  <InfiniteMenu items={items}/>
</div>
    </div>
  )
}

export default BMap