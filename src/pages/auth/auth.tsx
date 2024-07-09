import logo from "../../assets/logo.svg";
import SignUp from "./signUp";

const Auth = () => {
  return (
    <div
      className='h-screen relative overflow-auto'
      style={{
        backgroundColor: "#111b21",
      }}
    >
      <div
        style={{
          height: "240px",
          backgroundColor: "#00a884",
          padding: "2rem 0",
        }}
      >
        <div
          className='flex items-center gap-2'
          style={{
            width: "90%",
            margin: "0 auto",
            height: "40px",
          }}
        >
          <img alt='Logo' src={logo} />
          <p className='uppercase text-white font-medium text-lg'>Chat App</p>
        </div>
      </div>

      <div
        className='bg-white rounded absolute grid grid-rows-1 grid-cols-2 overflow-hidden'
        style={{
          height: "calc(100vh - 6rem - 40px)",
          width: "90%",
          margin: "0 auto",
          top: "calc(4rem + 40px)",
          left: "5%",
        }}
      >
        <SignUp />
        <div className='bg-red-200'></div>
      </div>
    </div>
  );
};

export default Auth;
