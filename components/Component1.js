import React from 'react'

const Card = ({text,heading,desc}) =>{
  return(
      <div className="w-64 mx-2 my-5 h-fit flex_center flex-col">
          <span className="flex_center text-3xl py-3 text-purple-900">{text}</span>
          <h2 className="text-xs">{heading}</h2>
          <p className="para2">{desc}</p>
      </div>
  )
}

const Component1 = () => {
  return (
    <div className='main_contain flex_center'>
      <div className='w-full md:w-5/6 flex_between md:flex-row flex-col'>
        <Card text="2 Million" heading="Customers" desc="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" />
        <Card text="1K" heading="Downloads" desc="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" />
        <Card text="$73 Million" heading="Transaction" desc="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" />
        <Card text="2.0" heading="Latest Version" desc="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" />
      </div>
    </div>
  )
}

export default Component1

