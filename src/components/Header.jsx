function Header() {
  return (
    <>
      <div className="flex w-full h-12 justify-between text-white items-center p-16 absolute">
        <div className="text-[80px]" style={{fontFamily: "Dancing Script"}} >Nikah Naama</div>
        <div>
          <ul className="text-2xl flex gap-x-16">
            <li>Login</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
    </>
  );
}


export default Header;
