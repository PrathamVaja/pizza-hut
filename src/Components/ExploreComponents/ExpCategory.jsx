import React from 'react'

const ExpCategory = () => {

    const items = [

        {
            img: './images/exp_organic.png',
            name: ' Organic Food ',
            avail: '12 Dishes in the Menu'
        },
        {
            img: './images/exp_ginger.png',
            name: ' Zinger Burgers',
            avail: '04 Dishes in the Menu'
        },
        {
            img: './images/exp_grill.png',
            name: ' Grill Food ',
            avail: '12 Dishes in the Menu'
        },
        {
            img: './images/exp_bar.png',
            name: ' Bar B Q ',
            avail: '12 Dishes in the Menu'
        }
    ]

    return (
        <>

            <div className=" flex flex-wrap items-center justify-center gap-[30px]">
                {items.map((item, index) => (
                    <div key={index}>
                        <div className="w-[250px] h-[150px]  mb-[50px] p-2 rounded-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${item.img})` }}  >
                        
                          
                            <div className=' w-full h-full  rounded-full border-2 border-white '>
                            </div>

                            <div className=' flex flex-col items-center mt-4 '>
                                <p className=' fredoka text-[24px] font-[600] items-center '>{item.name}</p>
                                <p className=' fredoka text-[#F3274C] font-[600] text-[15px] items-center '>{item.avail}</p>
                            </div>
                           
                          
                            
                        </div>
                    </div>
                ))}
            </div>




        </>
    )
}

export default ExpCategory