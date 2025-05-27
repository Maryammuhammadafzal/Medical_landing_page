import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import doctor1 from "../../public/doctor-1.jpg"
import doctor2 from "../../public/doctor-2.jpg"
import doctor3 from "../../public/doctor-3.jpg"
import doctor4 from "../../public/doctor-4.jpg"
const TeamPage = () => {
        let doctors_data = [
                {
                        doctor_image: doctor1,
                        doctor_name: "Dr. Emily Carter",
                        doctor_title: "Internal Medicine"
                },
                {
                        doctor_image: doctor2,
                        doctor_name: "Dr. Sophia Nguyen",
                        doctor_title: "Cardiology"
                },
                {
                        doctor_image: doctor3,
                        doctor_name: "Dr. David Kim",
                        doctor_title: "Women's Health"
                },
                {
                        doctor_image: doctor4,
                        doctor_name: "Internal Medicine",
                        doctor_title: "Pediatrics"
                },
        ]
  return (
  <div className="w-full h-auto my-25 flex flex-col justify-center items-center ">
      <div className="xl:w-[90%] w-full flex  flex-col justify-center gap-14 items-center h-auto">
        <h2 className="lg:text-5xl text-4xl font-semibold  text-[#2E8B57]">
          Our Team
        </h2>
      
      <div className="cards flex justify-center gap-6 max-lg:flex-wrap items-center w-full h-auto">
        {doctors_data &&
          doctors_data.map(({ doctor_image , doctor_name , doctor_title } , index) => (
            <Card key={index}
                       className="flex justify-end flex-col relative items-center bg-cover bg-center h-[400px] w-[300px] rounded-lg"
                       style={{ backgroundImage: `url(${doctor_image.src})` }}
                     >
                       <CardContent className="bg-[#A8D5BA] text-[#2E8B57] absolute bottom-0 left-0 min-h-[90px] rounded-lg p-5 w-full flex flex-col justify-end items-center">
                      <h3 className="font-bold text-xl md:text-2xl">{doctor_name}</h3>
                         <p className="font-semibold text-sm text-white">
                          {doctor_title}
                         </p>

                       </CardContent>
                     </Card>
          ))}
      </div>
      </div>
    </div>
  )
}

export default TeamPage
