import { useCallback, useState, useEffect, useRef } from "react";
import { TfiLayoutGrid3 } from "react-icons/tfi";
import { TfiLayoutMediaRightAlt } from "react-icons/tfi";
import { TfiGallery } from "react-icons/tfi";
import { TfiBook } from "react-icons/tfi";
import { RiAdminFill } from "react-icons/ri";
function NoteSection() {
  return (
    <div className="bg-[#161616] h-screen text-white">
      <div className="p-5 ml-10 uppercase">
        <h1 className="-ml-5 text-3xl font-bold">Welcome To Dashboard</h1>
      </div>
      <hr />
      <div className=" gap-4">
        <div>
          <div className="grid grid-cols-1 grid-rows-2  bg-black  ">
            <div>
              <div className="grid grid-cols-4 grid-rows-1 gap-16 ml-16 mr-16 place-items-stretch text-black">
                <button className="bg-green-700 flex justify-center rounded-2xl mt-10">
                  Save
                </button>
                <button className="bg-orange-400 flex justify-center rounded-2xl mt-10">
                  Share
                </button>
                <button className="bg-white flex justify-center rounded-2xl mt-10">
                  Add
                </button>
                <button className="bg-white flex justify-center rounded-2xl mt-10 ">
                  Edit
                </button>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-1 grid-rows-2 gap-0 bg-slate-800 rounded-xl">
                <div className="ml-3 flex flex-col justify-center">
                  <h1>Share Notes</h1>
                  <h2>View and edit your shared notes</h2>
                </div>
                <div className="bg-gray-950 shadow-lg mb-2 ml-2 mr-2  rounded-lg">
                  <h1>37% in Pogress</h1>

                  <div className="grid grid-cols-6 grid-rows-1 gap-0 rounded-full bg-slate-50">
                    <div className="bg-[#e37c0d] rounded-l-full"></div>
                    <div className="bg-[#e37c0d] text-[#e37c0d] ">2</div>
                  </div>

                </div>
              </div>

              <h4></h4>
            </div>
          </div>
        </div>

        <div>
          <h1 className=" p-2 pl-3 text-green-500 font-bold text-2xl">
            Catagory
          </h1>

          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <div className="bg-[#313131] rounded-lg p-2 ">
              {/* for reco  */}
              <div className="grid grid-cols-1 grid-rows-3 gap-0">
                <div>
                  <div className="grid grid-cols-3 grid-rows-1 gap-0 mt-3">
                    <div className="ml-3"><TfiLayoutGrid3 /></div>
                    <div className="col-start-3 flex justify-end mr-3" ><RiAdminFill /></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm">1 new Notes</h3>
                  <h1 className="text-2xl">history</h1>
                </div>
                <div><div className="grid grid-cols-6 grid-rows-1 gap-0 rounded-full bg-slate-50 mt-4">
                    <div className="bg-[#e37c0d] rounded-l-full"></div>
                    <div className="bg-[#e37c0d] text-[#e37c0d] ">2</div>
                  </div></div>
              </div>
              {/* for reco */}
            </div>
            <div className="col-start-1 row-start-2 bg-[#313131] rounded-lg p-2">
              {/* for reco  */}
              <div className="grid grid-cols-1 grid-rows-3 gap-0">
                <div>
                  <div className="grid grid-cols-3 grid-rows-1 gap-0 mt-3">
                    <div className="m-3"><TfiLayoutMediaRightAlt /></div>
                    <div className="col-start-3 flex justify-end mr-3" ><RiAdminFill /></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm">2 new Notes</h3>
                  <h1 className="text-2xl">English</h1>
                </div>
                <div><div className="grid grid-cols-6 grid-rows-1 gap-0 rounded-full bg-slate-50 mt-4">
                    <div className="bg-[#e37c0d] rounded-l-full"></div>
                    <div className="bg-[#e37c0d] text-[#e37c0d] ">2</div>
                  </div></div>
              </div>
              {/* for reco */}
            </div>
            <div className="col-start-2 row-start-2 bg-[#313131] rounded-lg p-2">
              {/* for reco  */}
              <div className="grid grid-cols-1 grid-rows-3 gap-0">
                <div>
                  <div className="grid grid-cols-3 grid-rows-1 gap-0 mt-3">
                    <div className="ml3"><TfiBook /></div>
                    <div className="col-start-3 flex justify-end mr-3" ><RiAdminFill /></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm">4 new Notes</h3>
                  <h1 className="text-2xl">Mathematics</h1>
                </div>
                <div><div className="grid grid-cols-6 grid-rows-1 gap-0 rounded-full bg-slate-50 mt-4">
                    <div className="bg-[#e37c0d] rounded-l-full"></div>
                    <div className="bg-[#e37c0d] text-[#e37c0d] ">2</div>
                  </div></div>
              </div>
              {/* for reco */}
            </div>
            <div className="col-start-2 row-start-1 bg-[#313131] rounded-lg p-2">
              {/* for reco  */}
              <div className="grid grid-cols-1 grid-rows-3 gap-0">
                <div>
                  <div className="grid grid-cols-3 grid-rows-1 gap-0 mt-3">
                    <div className="ml-3"><TfiGallery /></div>
                    <div className="col-start-3 flex justify-end mr-3" ><RiAdminFill /></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm">3 new Notes</h3>
                  <h1 className="text-2xl">Chemistry</h1>
                </div>
                <div><div className="grid grid-cols-6 grid-rows-1 gap-0 rounded-full bg-slate-50 mt-4">
                    <div className="bg-[#e37c0d] rounded-l-full"></div>
                    <div className="bg-[#e37c0d] text-[#e37c0d] ">2</div>
                  </div></div>
              </div>
              {/* for reco */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteSection;
