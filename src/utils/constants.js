import { FaCheck, FaSkullCrossbones } from "react-icons/fa";

export const successCheckout = {title: 'Great choices!!', subtitle: 'Cheers, checkout Successful!', icon: <div className="sm:mx-0 flex h-12 max-w-12 flex-shrink-0 items-center justify-center rounded-full sm:h-10 sm:w-10"><FaCheck className='text-xl' /></div>}
export const failedCheckout = {title: 'Oh snap!!', subtitle: 'Please select a product first', icon: <div className="sm:mx-0 flex h-12 max-w-12 flex-shrink-0 items-center justify-center rounded-full sm:h-10 sm:w-10"><FaSkullCrossbones className='text-xl' /></div>}