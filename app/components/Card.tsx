import React from 'react'

function Card() {
   const info=[{
      _createdAt:'19 May 2005',
      Views:44,
      Auther:{Name:'Raj', 

      },
      _id:1,
      discription : 'Discription.......................................',
      image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DOKZFHo5p4VA&psig=AOvVaw2lkEa8pxJ97OS-ev75vpyC&ust=1733136002182000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOCzrfCwhooDFQAAAAAdAAAAABAE',
      carogery:'robot',
      title:'we robot'
   }]
  return (
    <div className='card_grid mt-16'>
      {
         info && (
            <div>
              {info.map((info) => {
                return <div key={info._id} className='startup-card'>
                  <div className='flex justify-between text-[16px] font-medium'>
                     <span className='startup-card_date'>{info._createdAt}</span>
                     <span>@ {info.Views}</span>
                  </div>
                  <span className='px-4 font-semibold'>{info.Auther.Name}</span>
                  <h1 className=''>{info.title}</h1>
                  <span className='startup-card_desc'>{info.discription}</span>
                  <img src={info.image} alt="img" className='startup-card_img'/>
                  </div> 
              })}
            </div>
          )
          
      }
    </div>
  )
}

export default Card
