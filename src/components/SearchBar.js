import React, {useState} from 'react'
function SearchBar(props) {
  const [searchInput, setSearchInput] = useState("");

//  console.log(searchInput);

 const [data,setData]=useState(null)
 const [print,setPrint]=useState(false)

const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};

function getData(val)
{
  // console.warn(val.target.value)
  setData(val.target.value)
  setPrint(false)
}

  return (

<div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <div class="relative mb-4 flex w-full flex-wrap items-stretch">
              <input
                type="search"
                // class = "text-white"
                class="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-white outline-none transition duration-300 ease-in-out focus:border-primary focus:text-white focus:shadow-te-primary focus:outline-none dark:text-white dark:placeholder:text-white"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon1"
                onChange={handleChange}
                value={searchInput} />
              <button onClick = {(e) => props.onClick(e,searchInput )}
                class="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium border border-solid border-neutral-300 uppercase leading-tight text-white shadow-xl transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                type="button"
                id="button-addon1"
                data-te-ripple-init
                data-te-ripple-color="light"              
              
              > 
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5">
                  <path
                    fill-rule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clip-rule="evenodd" />
                </svg>
              </button>

            </div>
          </div>
        </div>

  );
}

// const SearchBar = (props) => {

//  const [searchInput, setSearchInput] = useState("");

//  console.log(searchInput);

//  const [data,setData]=useState(null)
//  const [print,setPrint]=useState(false)

// const handleChange = (e) => {
//   e.preventDefault();
//   setSearchInput(e.target.value);
// };

// function getData(val)
// {
//   // console.warn(val.target.value)
//   setData(val.target.value)
//   setPrint(false)
// }

// return <div>

// {/* <input
//    type="search"
//    placeholder="Search here"
//    onChange={handleChange}
//    value={searchInput} /> */}

   

// <div class="flex justify-center">
//           <div class="mb-3 xl:w-96">
//             <div class="relative mb-4 flex w-full flex-wrap items-stretch">
//               <input
//                 type="search"
//                 // class = "text-white"
//                 class="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-white outline-none transition duration-300 ease-in-out focus:border-primary focus:text-white focus:shadow-te-primary focus:outline-none dark:text-white dark:placeholder:text-white"
//                 placeholder="Search"
//                 aria-label="Search"
//                 aria-describedby="button-addon1"
//                 onChange={handleChange}
//                 value={searchInput} />
                
//               <button
//                 class="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium border border-solid border-neutral-300 uppercase leading-tight text-white shadow-xl transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
//                 type="button"
//                 id="button-addon1"
//                 data-te-ripple-init
//                 data-te-ripple-color="light"
//                 onClick = {props.onCLick}> 
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                   class="h-5 w-5">
//                   <path
//                     fill-rule="evenodd"
//                     d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
//                     clip-rule="evenodd" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>



// {/* 
// <table>
//   <tr>
//     <th>Country</th>
//     <th>Continent</th>
//   </tr>

// {countries.map((country, *index*) => {

// <div>
//   <tr>
//     <td>{country.name}</td>
//     <td>{country.continent}</td>
//   </tr>
// </div>

// })}
// </table> */}

// </div>


// };

export default SearchBar;