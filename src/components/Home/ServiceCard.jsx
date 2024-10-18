import React from 'react'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

function ServiceCard({ image, title, description }) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);
    return (
        <>
            <div onClick={handleOpen}
                className="service-card relative overflow-hidden h-[250px] w-[250px] md:h-[200px] md:w-[300px] rounded-2xl md:hover:shadow-card-glow transition-all duration-300 cursor-pointer"
                style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                {/* <div className="absolute inset-0 flex  justify-center align-center md:justify-center  md:mt-20 mx-8 md:mx-4 text-white">
                    <h3 className="text-[26px] md:text-2xl font-cairo font-bold text-center md:mt-[0px] sm:mt-[20px] ">{title}</h3>
                    
                </div> */}
                <div className="absolute inset-0 flex justify-center items-center mx-8 md:mx-4 text-white">
                     <h3 className="text-[26px] md:text-2xl font-cairo font-bold text-center sm:mt-[20px] md:mt-0">{title}</h3>
                </div>


            </div>
            <Dialog
                className='bg-primary border border-[#ffffff25]'
                open={open}
                handler={handleOpen}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
            >
                <DialogHeader className='font-cairo font-bold text-white'>{title}</DialogHeader>
                <hr className='border-b-2 border-secondary w-[106px] mx-4 -mt-3 mb-3'/>
                <DialogBody className=' text-accent'>
                    {description}
                </DialogBody>
                <DialogFooter>
                    <Button onClick={handleOpen} className='bg-secondary text-white font-bold px-4 py-2 text-sm outline-none'>
                        Close
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    )
}

export default ServiceCard
