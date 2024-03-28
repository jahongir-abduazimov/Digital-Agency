import "./index.css";

function header() {
  return (
    <header className="z-50 bg-[#ffffff66] fixed w-full filter">
      <div className="container">
        <nav className="nav">
          <a className="logo flex items-center gap-[14px]" href="/">
            <div className="w-[44px] h-[44px] bg-[#165DF5] rounded-full"></div>
            <p className="font-[400]">
              Digital <span className="text-[#165DF5] font-[500]">Agency</span>
            </p>
          </a>
          <ul className="nav-list">
            <li className="nav-list-item">
              <a href="#">Ana Sayfa</a>
            </li>
            <li className="nav-list-item">
              <a href="#">Kurumsal</a>
            </li>
            <li className="nav-list-item">
              <a href="#">Neler Yapıyoruz?</a>
            </li>
            <li className="nav-list-item">
              <a href="#">Blog</a>
            </li>
          </ul>
          <div className="flex items-center gap-5">
            <p>EN</p>
            <button className="header-button">Müşteri Girişi</button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default header;
