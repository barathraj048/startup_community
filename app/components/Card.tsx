import React from 'react';

function Card({ query }: { query: any }) {
  const info = [
    {
      _createdAt: '19 May 2005',
      Views: 44,
      Author: { Name: 'Raj' }, // Corrected 'Auther' to 'Author'
      _id: 1,
      description: 'Description.......................................', // Corrected typo
      image: 'https://via.placeholder.com/400', // Use an actual image URL for the demo
      category: 'robot',
      title: 'We Robot',
    },
  ];

  return (
    <div className='card_grid mt-16'>
      {query && <span>Results of "{query}" are below...</span>}
      {info.map(({ _createdAt, Views, Author, _id, description, image, title }) => (
        <div key={_id} className='startup-card'>
          <div className='flex justify-between text-[16px] font-medium'>
            <span className='startup-card_date'>{_createdAt}</span>
            <span>{Views} views</span>
          </div>
          <span className='px-4 font-semibold'>{Author.Name}</span>
          <h1 className='startup-card_title'>{title}</h1>
          <span className='startup-card_desc'>{description}</span>
          <img src={image} alt={title} className='startup-card_img' />
        </div>
      ))}
    </div>
  );
}

export default Card;
