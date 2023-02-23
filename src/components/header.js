import React from "react";

export default function Header() {
  return (
    <>
      <header className=" ml-5 mt-5 flex h-[100px]">
        <div className="w-6 h-6 m-2">
          <svg focusable="false" viewBox="0 0 24 24 ">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
        </div>

        {/* <img class="gb_Fc gb_ce" src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" srcset="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png 2x " alt="" aria-hidden="true" role="presentation" style="width:40px;height:40px"></img> */}
        <span className="text-2xl text-gray-800">Keep</span>
        <div className="h-[46px] w-[500px] ml-10 flex rounded-[10px] shadow-2xl z-50">
          <svg
            focusable="false"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            xmlns="http://www.w3.org/2000/svg"
            className=" m-3"
          >
            <path d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"></path>
            <path d="M0,0h24v24H0V0z" fill="none"></path>
          </svg>
          <input
            className="h-[46px] w-[100%] p-2 rounded-[10px] text-lg"
            placeholder="Search"
          />
        </div>
        <div>
            
        </div>
        
      </header>
    </>
  );
}
