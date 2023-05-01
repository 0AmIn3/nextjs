import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BiTransfer } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Textarea } from "@mui/joy";
const index = () => {
  const [modal, setModal] = useState(false);
  const [arrleft, setArrleft] = useState([ 'Определтить язык', 'Русский' , "Английский" , 'Корейский' ]);
  const [arrright, setArrright] = useState([ 'Определтить язык', 'Русский' , "Английский" , 'Корейский' ]);


 



  return (
    <div>
      <div className="flex items-center gap-4">
        <FcGoogle style={{ fontSize: "30px" }} />{" "}
        <p className=" text-3xl">Переводчик</p>
      </div>
      <div className="flex flex-col mt-6   px-3">
        <div className="w-full bor2 flex relative justify-between">
          <div className="flex jj gap-4  w-[40%] items-center   ">
            <div className="jj flex gap-4">
            {/* <p  className=" text-xl">Определтить язык</p> */}

              {arrleft.map((item , inx) => (
                <p key={inx} onClick={() =>{
                  let all = document.querySelectorAll('.leftLang')

                  all.forEach((item) =>{
                    item.classList.remove('active')
                  })
                  let imd = arrleft.indexOf(item)
                  all[imd].classList.add('active')

                }}  className=" text-xl leftLang" >{item}</p>
              ))}
          
            </div>
            {modal ? (
              <IoIosArrowUp
                onClick={() => setModal(false)}
                style={{ fontSize: "25px" }}
              />
            ) : (
              <IoIosArrowDown
                onClick={() => setModal(true)}
                style={{ fontSize: "25px" }}
              />
            )}
          </div>

          <div className=" w-[40%] flex gap-4 items-center  mr-6">
            <div className="jj flex gap-4">
            {/* <p className=" text-xl">Определтить язык</p> */}

              {arrright.map((item , inx) => (
                <p key={inx} onClick={() =>{
                  let all = document.querySelectorAll('.rightLang')

                  all.forEach((item) =>{
                    item.classList.remove('active')
                  })
                  all[inx].classList.add('active')

                }}  className=" text-xl rightLang">{item}</p>
              ))}
            </div>
            {modal ? (
              <IoIosArrowUp
                onClick={() => setModal(false)}
                style={{ fontSize: "25px" }}
              />
            ) : (
              <IoIosArrowDown
                onClick={() => setModal(true)}
                style={{ fontSize: "25px" }}
              />
            )}
          </div>
          <BiTransfer className="tran" style={{ fontSize: "25px" }} />
        </div>
        <div className="h-[200px] flex">
          <div className="w-[50%] bor3 h-full">
            <Textarea
              className="h-full border-none aa "
              color="none"
              size="lg"
              name="Size"
              placeholder=""
            />
          </div>
          <div className="w-[50%] h-full">
            <Textarea
              className="h-full border-none aa "
              color="none"
              size="lg"
              name="Size"
              placeholder="ПЕРЕВОД"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
