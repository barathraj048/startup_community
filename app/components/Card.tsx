import { Span } from 'next/dist/trace';
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
      Avatar:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEREhMTEhMWFRUVFxUYFRcXFRcVFxkWFRUXFhoYFhcYHSggGBomHxgWITEiJSkrLi8uFyAzODMtNygtLisBCgoKDg0OGxAQGi0lICUtLS0yKy0tLSsvLS0tLS8tLy0tLS03LS0tLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLf/AABEIAPIA0QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwEDBAUGAgj/xABKEAABAwICBgUHCQUFCQEAAAABAAIDBBEFIQYSMUFRYRMicYGRBzJSobHR4hQXQmRykqPB8CNigrLhFTPC0uMIRFNUY3ODk6Ik/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAEDBAIFBv/EACcRAAICAgIBAwQDAQAAAAAAAAABAhEDBBIhMSJBUQUTcbEyUtFC/9oADAMBAAIRAxEAPwCcUREAREQBERAERWauqjiYXyPaxjcy5zg1o7SckBeVHOAFybAbyo+x7yp0cd204kmd6TbRsvw13gnvDT2qO8a0uNSetTRkcJZaicjs1pQ0dzQulFkWTbV6V4fEbPq4AR9HpWl33QSVgP8AKHhY/wB6HdHKfYxfP8r9Y31Q3k0WHcF4XXBEWfQ0OnuGO2VTB9oPZ/M0LbUONUs4vDPFL/25GvPg0kr5jVHW3pwQs+omYlCX6nSM1/QLgH/cPW9Syl8zU2ktQG9GZRNHvim1Z4+5sl9T+Egra0OmtVTkGnkfGL5wveZ4D9gSEvjH7ocftDYo4E2fQiKPtFvKjTzkR1TRTyHIPveFx+0c4/4sv3lIIK5aokIiKAEREAREQBERAEREAREQBERAERaHTTSRmH0zpTZzz1YmE+c8jf8AugXJ5DiQgMXTXTSHDmWP7SdwuyIG2XpPP0W37zu2EiD8ex+prX69RIXW81oyjZ9hmwduZO8lVxSCoeTUVTtV8vXHSG0jwdhbGASGZWBIa2wsDktWrYqjlsIiLog8SzNb5xtw4nsG0rGfWPPmROPM9UetZYaBuVUBry+pP0Wjw968F1UNwP3fetmiUDUSzPP97DfmAQR2HNWW1zmHquLm8HZkcr+5b1WZ6Rj9rRfiMj4qKJLdJXNky2O4H8uKkjyc6dupXNpql16cmzHHMwk7M/8Ah8vo7dl1E9ThrmdZhJA+8Pf3LNw6t6QWPnD1jinnpg+uEUb6CaVyOwuY/wB5LQtuWna+FoL2i+52q17AeLATdSBh9ayeKOaM3ZI1r2nk4XFxuPJVNUdGQiIoAREQBERAEREAREQBERAFFflDxBsUvymVofINaOgicLsYG26SqkacnEusGjMWax2f0ZUXz35ScRM+Iz59WIiJg4CMWI++XnvXUV2QznKmd8j3PkcXvcbuc43JJ3kq2TbardRO1gu7+pPALDiidN1pMmfRYN/Mq05L3yvWyjbrfvHJvjv7lcbE4+c4nkOqPVn61da0AWGQVUBRrQNgVUVuedrBdxt7e4IC4iwYquSU2hic7nu79w8VkGnrRmYAeQc2/wDMVw8kE6bO44pyVpMvIsanrGuJaQWvG1rsisldnAWDV0efSR5OGduP9VnIgOk8n+MiL5WSepJRz5cXtA1G9ubm96kryP4ox1C2EyN6SN8gDC4a+oTrg6t72u4juUINaBe2/NXYHNDgXAkDg7Vd2tdY2PcVDjZNn1Oij/ydaQyuLKeWQzRyMc+lnd556MgSQTC5PStuDe5uM7kWUgKpqjoIiKAEREAREQBERAEREAXzJjzSayr2k/KKknumkJ9h8F9NqBfKFhxp5cWktm8wshPE1ziZCOeqydn8ZXcXRDI5pmmd5e7zG+aP161tVbp4gxoaN36JVxWHIRFaqJtUZC7ibNaNpJ3IC3WVWpYAaz3ea0Z+oLOwjRh0jg+e7nHZGP8AER7Bks/AMELCHP60z9+5t9zfzK7uipGxtsNu88f6Lzc+05PjDx8nq4NRQXLJ5+P9NbR4EGgBxDQNjWAAD8vUsz+yIuB+8VnIsVGzmzkNKNFmyN1mnrN81/0m8L22t9i4+nldcxyC0jMiOPMclL65LSvRPph0kHVkb5vu7PZzvZa9fPwfF+P0ZNnB9xcl5/Zyq8TStYC5xsAsST5Yw6joHa32HH1jJdDozofNM9s1YLMaQWxna4/vAZBvrK3zzQirs86OCcnVGog1rXcLE524cB22sriu1T9Z73ek5x8XEq0rV4KmSD5Iv2kr4t8b4qiPk4XglPfHJb+EKalEHkPpSZqmW2TY2Mvze4uP8g8VL6qn5OkERFySEREAREQBERAEREAUfeWehDqISAZtmhLz+63pGtv2Ol9akFYeMYbHVQSQSebI0tNtovscOYNiOYUryD5gRbHSmibHUzwixax2obZAlrQHEcOsCuXw9rn1IgEj9W5u4HPqtJNr5bclZKSirZEYuTpG1e8Db2ADMk8AN5W0wjDC09LIP2hya3bqA7ubjvPd27HCMCaDeNpJ2F7yXEd52dgXUUWHMjz853E7uwbl5ufaeRcY9I9bX1FifKfbLWE0GoNZ3nHYOA962KqqLIaG7dhERSQERVQFFUKiICK5m2c4cCR4GyysHwqarlEMDNd5BNrgANFrucTsaLjx4kBNM2/J5ZiLZ2e0f9wnb/FreC33+z010tfUSuzEdPqdhkkYfE6hK9pTTimjw5RqTTJh0J0cbh9MIrhz3EvlcNheQBlyAAA7L71v0RcAIiIAiIgCIiAIiIAiIgCx8QqHRxPe2N0jmtJaxttZztzRfIXO85BZCsVlWyJpe82A9Z4Abyl0Er6R8/6YaIV9PRz19RqNeXhzmA67rzSWc4kdVvWcLC527rZ8ToJFr1Vt+o63aXNb+a+h9I8ahrKeemdG7UmjezWuLguGTtXZcGx27lBPk0pi2te14s5jXBw4Frsx4hU5cqnCVM04cUoZY8kSI+aS3R0zAQ3Ivdk2++3pHiVgz4bWuzMoPIPc31BoC3tROyJus4hrR+rABWq0VTIDUGJsMQtqunJD3k7A2JuY/itlnsWGEZSdRRuyTjFXNnLy0VWzO0na1xd/KVlYRisokbHISQ426wzBOzPb4q3hmlMs8nRxR9M6xOrHHITZu05XsOZFswukoqxsrdYZbiDtaeBXU4Sj/JHGOcJv0syERFUaDmcaxWXpDHGSA3I6o6xNzv28Niw4qKrfnaTtc4t/mK6utq2xNL3dwG0ngFzeK6TywSBksfQkgODZI5L6p2G5tccwFZCEpfxRRknCD9TMmDDK1uYlA5F7neoghbGmq5mENnYAN0jc2/xej27Few75VLAKhkTZ4/pGFxL2EC5Do3ZnaD1SciCr1NUslbrMNwf1YhROEoupI6xzhNXBka+VppE8J3OiIPPVeT+akj/Zzwkx0c9QRYzyhrebIRYH7znjuUeeViIulpWtFyWua0DeS5oACmPRfFYqGlp6VkZIija1zrhus/a9wbntcXHbvW3HkjHGrZhy45SyS4o7tFiYdiMc7dZh2bQciDzCy1cmmrRnaadMIiKSAiIgCIiAIiIAiIgC43TWcmVjNzWX73Egn1BdkuV02pD1JRs8x3tH+JU7CfB0aNZpZFZHH9sv1r2Grw5dvFY9HhYZiJqWDqVELieUrXMBB7Wm/aHLyYejlDX7A4X5tvt7LLpmMAFgAANgGxedCTVnr5YRdUY2J0vSxlu+4I7Wm9u/Md66Pyt4e+poA6HrBjtc2z6pY5utluFxfkSVplnYfis0GTHZeic2+G7uWjXzrE+0YtrXeVdPsiXQ3GK3D6gvp42lz29G4SMc5li4EHqkG4IFrHPnkpcqsFkip4J5B+1cHCfKxJe98rL23t1nN7wNwV2DF2MdrtpadsnptjAPiM/WrGI4tNPk92XogWb/AF71fmz45Q4xM+DWyxyKcq6MFF4lfZUifuK8++6PTp1ZtKHBHzQ1ErBeRrC2D7eT3WvlcgNaDzduJUTabY1XV8zTUxtDogWNEcbmjbmXaxJDrjME5W2bbyvh+KzQeY7I7WnNvhu7lfqMYZI7XfS07n+m6ME+Jz9a34c+OMOMjzM+tllkc40U8jmHSU9E58vVDyC2+Q1Wt87sztfg2+yy0dFTdGHD0nvd95xI9VltsQxaabJ7ur6LRZvhv71gqnYzrI+kX6uu8S7fZz9fhnTYhDK4dSmi1s9hke5wb4Bpd3Be5sZfrdWwbuuNvat4Wg3BG3aubrowZXNjG8AAcbZ+u6zzk3Rtwwim7O50Qqj08ZGyQEEci0u9oCkBcNoPQHpA7dE21/3iNX2ay7lb9ZPgeXttfc6CIi0GUIiIAiIgCIiAIiIArNZTNlY5jtjhb3EcxtV5EasJ0RjiuGGN5jlaDbYSMiOIVhjQAAMgNik2soo5m6sjQ4buI7DtC1J0Tp73vJbhrC3susMtZ36T0Ibca9RxKLIr4Ojkez0XEDsvl6rLHWZqujWnasISi8TM1gReyhnSLLjdUCwHQSNLtYDVvkQb3vxG5OikcP2YBzAJJsAOPPs5qm3dUaeMauzcMdcKqtU0RaMzcq6rl4Mzq+giL1GwuIaNpIA7SbKSDyUoqG7g2Jg1nZZD2ngu2donTk3u8cg4W9YutnQYbFAP2bbX2naT2krTHWlfZkluRS9J5wigEEYYMztceLjtP5dyzURbUklSPPbbdsIiKSAiIgCIiAIiIAiIgCIiAIiIDitMabVmD90jf/puR9WqtAu/0koDNCdUXc3rN522jvHrsuAXnZ4cZ/k9TWnyhXweZZA0XOQG02Jt223c9yq1wIBBuDsIzB7CqqyaVl7gapOZLSWXPE6pF+9VdF/ZeQBWhEf+I7wZ/lQxO9N3gz/KooWXV4ila7NpuL2uNncdh7l4NK0+dd32iXD7pyHgrynodhbXRmm6SoZwZd5/h2eshapdpohQFkZkcM5LW+wNnjmfBWYY8poq2J8YM6BERekeSEREAREQBERAEREAREQBERAEREAREQBcfpZhDY7ztsGkjXHBzja47T6yuwWo0sh16OccGa33CHfkq8sVKLLcE3GaOCRaynrC3I5j1hbCKVrth968s9hpo9oiKSAi8ySBuZNlg1FcTk3Lnv7uCEpNnU6NYSKhxc49Rhs4cXWvq8hsv2rugLLm/J/Fakv6cj3eFmf4V0q9HBFKCfyeVszbyNfAREVxnCIiAIiIAiIgCIiAIiIAiIgCIsavr4YGF80jI2D6T3Bo8TvQJWZKLka7yk4XExzvlGvq/RYx7nO5Nyse29uajPSLy2VUl20cTYG7nvtJJ2geY08rOXPJFqwZG/BPJNtq57HdJ8PaySGSrgD3tczUEjXPu4FoGq0k7SvmXF9IqyrJ+UVEst/ouedTuYOqO4LCoMpY/ts/mC5c+jRHVa7bJmloD9E35H3rFcxzdoI/XFboqi8uj0VJmsirXDbn2+9epK9x2AD1rOMLTtaPAIIGj6I8AgtfBqQHOO8nxWRFQuPnZesrYhEocjp9GtI8PiiZTmqhZKy4cx8jWO1i4utZxFznuXVseHC4IIOwg3C+SdLz/wDtqPt/kFi4ZjFTTG9PPLEf3HuaD2gGx716UJVFI8+eq5NtM+wkXz3o/wCWevhs2paypZvJAik+80ap7296lDCfKjhc8Ye6Uwk5FkjHawPa0EEcwVYpIzywZE/F/g7RFhYZi9PUt1oJmSgbdRwdbtAzHes1dFTTXTCIiEBERAEREAREQBERAF89+Vaad2JTNmJ1WavQg+aIy0G7RzOtc8QeCmjTHSSPD6d0z+s49WJl7a7yMhyA2k8B2L5zxPEJamV80ztaR5u4+wAbgBkBwCqyP2PU+m4nyc/bwYqx6ija7MZHju71kIqz1pRUlTNLLEWmxFj+tivYWzWnhHGSMeLwFs5I2vGq7ZuO8di3GhmjGvKJnyNtE4FrW5uJGYLvRb7bFQ5JK2ZMmJx7XgkgqiIsRwEREAREQEPaZttW1H2gfFjT+a0zGkmwFydikHTzRvXcaljwCdUOY42vYWBYeNhs5XXLwwNjFm5ne7jyHALbCScUdY8Tl+DHp6EDN2Z4bh71loik1xioqkbfRCadlbTGnJEhlY3Le0uGs13Fure/IX3L6bXyhDM5jmvY4tc0gtcDYgjMEHivoLyd6XDEYLPsKiKwlaMgb7JGjgfUQRwvZjfseZ9SxN1NeDrURFaeSEREAREQBERAEVitrI4WF8rwxo3k27hxPJcJjflDObaVn/keP5WfmfBAR35TsedV10rb/s6dzoWDgWm0h7S4Hua1cmtlpHRSOlfUNOs6Ql0gsM3HMuAHHatPFUtdlsPAqiSafZ9BqZoSxpR9i8vEkobtK9rWa93E8VyaJz4mfHO12QOfgs/Dq58Lg5rrEb/yI3haKRu9ZFJUX6p27uaURDJ3TJWwbF2VA9F4HWb+beI9i2SiuiqXMcCCQR5pG0LvcCxps41XWbINo3O5t9yzTx12jjLhr1R8G3REVRnCw8TxJkDdZ20+a0bXH3c1bxjFWU7bnN581vHmeAXA4lXPkcXPN3HwA4AbgrIY+XbL8WLl2/BXGMUfO+7j2AbAOA9+9aqSZrdpXiqn1RYbT6lhxt3lakiyeSnSM+Odrsgc+eSuLWSmxFtq2THXAPFBCd9MqttotjrqCqiqAbNabSD0onEB48MxzAWkmna3bt4LMwnDXzOD5BqsBBDfS4X5KYpt9FexlhCD5H1UCqqNME8oMjLNqW9I302gNeO1vmu9Xeu/wvFIalmvC8PG/cRyc05g9q0HzhmIiIAiIgC0ulOkDKKIOI1nuuI2cSNpP7ouL9o4rdKG9NMT+UVchB6rD0bOxhsT3u1j2WQGuxXFJql+vM8uO4bGtHBo3D9FYaIuiChF1qMTwNkmYyPEbe/itwihqzqMnF2jg6ygliuDct4i9u8blhtKkaSMO2haTEcEjOdrc25eI2Kt4/g3Y9z+5zisOyPsWdV0piIBN8sjayxJQqvB6HJSjyRnwS6wv49q2FNMciDZzcwRtuNhC5+CUtN/ELaQSjIhQasWSyRMBxwTWY+wkHcH23jny/QyMaxdtO2215HVb+buXtXBMfsINt4I29q9zSue4ucSScySqftK7Onrx5X7FK2qc4l7zrOO8/rYtbLJYEle55dpOwLV1M+seQ2e9XJEZciXgtucXG53q+ArUI3rJp4S9waN+/hzUmW6TkzEkOav0lLLJkwG3G5Df69y32H4Ey+fWttJ2dw9630ULW7ArFj+Tz8m6v8Ag02G6PtZZz8zz/IfmVvGtAFgqorUkvBhnOU3cmFfoqySF4kieWOGwj2HcRyOSsIpOCXNDtKBWNLHgNmYLkDY5uzWbw3XHMcV0qgvBcRNNPHMPoOGsOLTk4eF1OTHAgEG4IuDyK5JPSIiAwccregp5pd7GOI+1azR42UGKbtI8KNXA6EP6PWLSTq62TTrWtcbwFyXzafWfwvjUgj5FIPzafWfwvjT5tPrP4XxoQR8ikH5tPrP4Xxp82n1n8L40BHy8vFwbqQ/m0+s/hfGvEvkyuLCqtf/AKPxoCHsWg1mX3tz7t/v7lo2OsQSLgbjnfkp0Pkn+t/g/wCotafIe3/nT/6B/nVc427R6GrsRjFxmRtJhML8wC2+zVP5HJWv7Bkbmx3c5pHsUwUPkm6MAfK9awsP2PxrM+bT6z+F8a64pmdbGSD9MiG4KaUCzmHuzHvXqanktYMN/BTF82n1n8L40+bT6z+F8a5+3E1L6pm41SITOBzP882HAAn22V2LBo2+ddx5m3qCmf5tPrP4XxrHqvJZr/73Y2Iv0N/8a6UYoyy2cs32yC6ot13aoAF7AAW2ZLZYLBYF535DsG31+xSX8x7f+ed/6B/nWxi8kgaA0VeQFv7n/UXEY92zRsbEXj4QZw9MOqFdXeweTDVFvlV//D8aufNp9Z/C+NWnnkfIpB+bT6z+F8afNp9Z/C+NAR8ikH5tPrP4Xxp82n1n8L40BHymLQWt6WiivtYDGf4DYf8Azq+K575tPrP4XxrpNFcANEx7Ol6QOdrDq6tjYA/SN9g8EJN4iIoAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAf/9k='
    },
  ];

  return (
    <div>
      <div className='text-black font-bold text-xl sm:text-2xl md:text-3xl mt-16 '>
        {query ? <span>Results of "{query}" are below...</span> : <span>Recommended startups</span>}
      </div>
    <div className='card_grid mt-8'>
      {info.map(({ _createdAt, Views, Author, _id, description, image, title ,Avatar}) => (
        <div key={_id} className='startup-card'>
          <div className='flex justify-between text-[16px] font-medium'>
            <span className='startup-card_date'>{_createdAt}</span>
            <span>{Views} views</span>
          </div>
          <div className='mt-[2rem] flex justify-between object-cover'>
            <div>
            <span className='font-semibold text-lg sm:text-xl mb-[1rem]'>{Author.Name}</span>
            <h1 className='startup-card_title font-bold text-xl sm:text-2xl'>{title}</h1> 
            </div>
            <div>
              <img src={Avatar} alt="avatar" className='h-[40px] w-[40px] rounded-full' />
            </div>
          </div>
          <span className='startup-card_desc font-light text-[12px] sm:text-[18px] tracking-wide'>{description}</span>
          <img src={image} alt={title} className='startup-card_img' />
        </div>
      ))}
    </div>
    </div>
  );
}

export default Card;
