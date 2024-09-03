function Register() {
  return (
    <>
      <div className="flex w-full h-screen absolute text-white justify-center items-center mt-28 ">
        <div className="h-[61vh] w-[35vw] bg-black bg-opacity-40 ">
          <form>
            <div className="flex flex-col m-3 px-4 ">
              <label className="font-bold text-xl  mb-2" htmlFor="email">
                Email:
              </label>
              <input
                className="h-10 text-gray-800 rounded-lg text-[18px] px-2 "
                type="email"
                id="email"
                name="email"
                placeholder="abc@example.com"
              />
            </div>

            <div className="flex flex-col m-3 px-4">
              <label className="font-bold text-xl  mb-2" htmlFor="mobileNumber">
                Mobile Number:
              </label>
              <input
                style={{ MozAppearance: "textfield", WebkitAppearance: "none" }}
                className="h-10 text-gray-800 rounded-lg text-[18px] px-2 appearance-none "
                type="number"
                id="mobileNumber"
                name="mobileNumber"
                maxLength="10"
                placeholder="Enter 10-digit mobile number"
              />
            </div>

            <div className="flex flex-col m-3 px-4">
              <label className="font-bold text-xl  mb-2" htmlFor="example">
                Create Profile for:
              </label>
              <select
                className="h-10 text-gray-800 rounded-lg text-[18px] px-2 "
                id="example"
                name="example"
              >
                <option value="Choose an option">Choose an option</option>
                <option value="self">Self</option>
                <option value="value3">Daughter</option>
                <option value="value1">Son</option>
                <option value="value1">Brother</option>
                <option value="value1">Sister</option>
                <option value="value1">Relative/Friend</option>
              </select>
            </div>

            <div className="flex flex-col m-3 px-4">
              <label className="font-bold text-xl  mb-2" htmlFor="password">
                Password:
              </label>
              <input
                className="h-10 text-gray-800 rounded-lg text-[18px] px-2 "
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>

            <div className=" m-3 px-4 py-6">
              <button
                className="w-[31vw] h-11 border-2 rounded-2xl text-bold text-2xl bg-pink-700 "
                type="submit"
              >
                REGISTER FREE
              </button>

              <p className="text-xs mt-6 text-wrap text-center">
                By clicking on register free you confirm that you accept the
                Terms & Conditions and Privacy Policy.
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;




// import React from 'react';
// import { useForm } from 'react-hook-form';

// function Register() {
//   // Initialize React Hook Form
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   // Form submission handler
//   const onSubmit = (data) => {
//     console.log(data);
//     // Handle form submission logic here
//   };

//   return (
//     <div className="flex w-full h-screen absolute text-white justify-center items-center mt-28 ">
//       <div className="h-[61vh] w-[35vw] bg-black bg-opacity-40 ">
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="flex flex-col m-3 px-4">
//             <label className="font-bold text-xl mb-2" htmlFor="email">
//               Email:
//             </label>
//             <input
//               className="h-10 text-gray-800 rounded-lg text-[18px] px-2"
//               type="email"
//               id="email"
//               {...register('email', { required: 'Email is required' })}
//               placeholder="abc@example.com"
//             />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
//           </div>

//           <div className="flex flex-col m-3 px-4">
//             <label className="font-bold text-xl mb-2" htmlFor="mobileNumber">
//               Mobile Number:
//             </label>
//             <input
//               style={{ MozAppearance: "textfield", WebkitAppearance: "none" }}
//               className="h-10 text-gray-800 rounded-lg text-[18px] px-2 appearance-none"
//               type="text"
//               id="mobileNumber"
//               {...register('mobileNumber', { 
//                 required: 'Mobile number is required',
//                 maxLength: { value: 10, message: 'Mobile number cannot exceed 10 digits' }
//               })}
//               placeholder="Enter 10-digit mobile number"
//             />
//             {errors.mobileNumber && <p className="text-red-500 text-sm">{errors.mobileNumber.message}</p>}
//           </div>

//           <div className="flex flex-col m-3 px-4">
//             <label className="font-bold text-xl mb-2" htmlFor="profileFor">
//               Create Profile for:
//             </label>
//             <select
//               className="h-10 text-gray-800 rounded-lg text-[18px] px-2"
//               id="profileFor"
//               {...register('profileFor', { required: 'Please select an option' })}
//             >
//               <option value="">Choose an option</option>
//               <option value="self">Self</option>
//               <option value="daughter">Daughter</option>
//               <option value="son">Son</option>
//               <option value="brother">Brother</option>
//               <option value="sister">Sister</option>
//               <option value="relativeFriend">Relative/Friend</option>
//             </select>
//             {errors.profileFor && <p className="text-red-500 text-sm">{errors.profileFor.message}</p>}
//           </div>

//           <div className="flex flex-col m-3 px-4">
//             <label className="font-bold text-xl mb-2" htmlFor="password">
//               Password:
//             </label>
//             <input
//               className="h-10 text-gray-800 rounded-lg text-[18px] px-2"
//               type="password"
//               id="password"
//               {...register('password', { required: 'Password is required' })}
//               placeholder="Enter your password"
//             />
//             {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
//           </div>

//           <div className="m-3 px-4 py-6">
//             <button
//               className="w-[31vw] h-11 border-2 rounded-2xl text-bold text-2xl bg-pink-700"
//               type="submit"
//             >
//               REGISTER FREE
//             </button>

//             <p className="text-xs mt-6 text-wrap text-center">
//               By clicking on register free you confirm that you accept the
//               Terms & Conditions and Privacy Policy.
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Register;
