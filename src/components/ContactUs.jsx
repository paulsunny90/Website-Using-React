import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
function ContactUs() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
return (
    <div className='flex flex-col items-center gap-7 pt-40 px-4 sm:px-12 lg:px-24 xl:px-40 text-center  text-gray-700 dark:text-white'>
      <Title title={"Reach out to us"} desc={`Rady to grow your barand? let's conect and buled something exceptional togther.`} />
      <form action=""onSubmit={onSubmit} className='grid mb-2 grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full text-stsrt ' >
        <div className=''>
          <p className='mb-2 text-sm font-medium '>your name</p>
          <div className='flex pl-3 rounedd-lg border border-gry-300 dark:border-gary-600'>
            <img src={assets.person_icon} alt="" />
            <input type="text" name="name" id="" placeholder='Enter your name' className='w-full p-3 text-sm outline-none' />
          </div>
        </div>

        <div>
          <p className='mb-2 text-sm font-medium'>Email id</p>
          <div className='flex pl-3 rounedd-lg border border-gry-300 dark:border-gary-600'>
            <img src={assets.email_icon} alt={assets.email_icon} />
            <input type="text" placeholder='Enter your Email' name='email' className='w-full p-3 text-sm outline-none' />
          </div>

        </div>
        <div className='sm:col-span-2 max-sm:col-span-2'>
          <p className='mb-2 text-sm font-medium'>Massage </p>
          <textarea rows={8} placeholder='Enter your Massage' name='massage' className='w-full p-3 text-sm outline-none rounedd-lg border border-gry-300 dark:border-gary-600' />

        </div>
        <button type='submit' className='w-max flex text-sm bg-primary text-white px-10 py-3
                    items-center gap-2     rounded-full 
                     cursor-pointer hover:scale-103 transition-all'>Submit
          <img src={assets.arrow_icon} alt="arrow_icon" className="width={14}" />
      </button>

      </form>
      <span>{result}</span>
    
    </div>
  )}


export default ContactUs