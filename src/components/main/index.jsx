import "./index.css"

import Coffee from "../../assets/images/Coffee.svg";
import ClockClockwise from "../../assets/images/ClockClockwise.svg";
import Package from "../../assets/images/Package.svg";
import Rectangle from "../../assets/images/Rectangle10.png"

function main() {
    return (
        <main>
            <section id="intro" className="pt-[163px] pb-[139px]">
                <div className="container">
                    <div className="flex flex-col items-center gap-[30px] pb-[49px]">
                        <h1 className="font-semibold text-[64px] text-black text-center capitalize leading-[76px]">İşinize uygun <span className="text-[#165DF5]">tasarım</span> <br /> ve <span className="text-[#165DF5]">yazılımlar</span></h1>
                        <p className="text-[#00000099] font-medium max-w-[700px] text-center">
                            360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır. İşletmelerin ihtiyaçlarına uygun web tasarım ve web yazılım hizmetleri sunmaktayız.
                        </p>
                        <button id="button" className="flex items-center bg-[#165DF5] gap-[10px] py-[12px] px-[25px] rounded-[50px] hover:bg-[#165df5bf] duration-200">
                            <span className="font-medium text-white">Detaylı İncele</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <g clip-path="url(#clip0_2412_1718)">
                                        <path d="M4.875 3.75L11.125 10L4.875 16.25" stroke="white" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.125 3.75L17.375 10L11.125 16.25" stroke="white" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2412_1718">
                                            <rect width="20" height="20" fill="white" transform="translate(0.5)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className="intro-bt w-full h-[530px] flex flex-col items-center justify-center">
                        <div className="w-[709px] text-center">
                            <h2 className="font-bold text-[50px] leading-[60px] text-white mb-[22px]">Web sitesi ve Kurumsal Kimlik Tasarımları</h2>
                            <p className="font-[450] text-[18.6px] text-[#FFFFFF99]">
                                Online dünyadaki yüzünüz olan web sitelerinizi tasarlar. E-ticaret siteleri dahil olmak üzere tüm ihyitaçlarınıza çözümler sunar.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-[120px]">
                <div className="container">
                    <div className="w-[710px] mx-auto text-center flex flex-col gap-4 mb-[50px]">
                        <p className="font-medium">Neler <span className="text-[#165DF5]">Yapıyoruz?</span></p>
                        <p className="font-medium text-[32px]">3 adımda çalışma sürecimiz</p>
                        <p className="font-medium text-[#00000099]">360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır. İşletmelerin ihtiyaçlarına uygun web tasarım ve web yazılım hizmetleri sunmaktayız.</p>
                    </div>
                    <div className="flex justify-between">
                        <div className="w-[344px] flex flex-col items-center">
                            <div className="mb-[20px] w-[64px] h-[64px] flex items-center justify-center bg-[#30BA0E33] border-[0.1px] border-[#30BA0E66] rounded-[8px]">
                                <img src={Coffee} alt="" />
                            </div>
                            <p className="mb-[11px] font-medium text-[20px]">Keşif ve Planlama</p>
                            <p className="text-center text-[#00000099] font-medium">Belirlenen strateji ile tasarımın ve yazılımın oluşturulması sağlanır.</p>
                        </div>
                        <div className="w-[344px] flex flex-col items-center">
                            <div className="mb-[20px] w-[64px] h-[64px] flex items-center justify-center bg-[#165DF566] border-[0.1px] border-[#165DF599] rounded-[8px]">
                                <img src={Package} alt="" />
                            </div>
                            <p className="mb-[11px] font-medium text-[20px]">Tasarım ve Geliştirme</p>
                            <p className="text-center text-[#00000099] font-medium">Belirlenen strateji ile tasarımın ve yazılımın oluşturulması sağlanır.</p>
                        </div>
                        <div className="w-[344px] flex flex-col items-center">
                            <div className="mb-[20px] w-[64px] h-[64px] flex items-center justify-center bg-[#8D0EBA33] border-[0.1px] border-[#8D0EBA66] rounded-[8px]">
                                <img src={ClockClockwise} alt="" />
                            </div>
                            <p className="mb-[11px] font-medium text-[20px]">Test ve Yayına Alma</p>
                            <p className="text-center text-[#00000099] font-medium">Belirlenen strateji ile tasarımın ve yazılımın oluşturulması sağlanır.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-[70px] bg-[#165DF51A]">
                <div className="container">
                    <div className="w-[771px] mx-auto flex flex-col items-center gap-[30px] pb-[49px]">
                        <h1 className="font-semibold text-[50px] text-black text-center capitalize leading-[61px]">Ürününüz veya hizmetiniz için en iyisini birlikte yapalım.</h1>
                        <p className="text-[#00000099] font-medium max-w-[700px] text-center">
                            360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır. İşletmelerin ihtiyaçlarına uygun web tasarım ve web yazılım hizmetleri sunmaktayız.
                        </p>
                        <button className="flex items-center bg-[#165DF5] gap-[10px] py-[12px] px-[25px] rounded-[50px] hover:bg-[#165df5bf] duration-200">
                            <span className="font-medium text-white">HEMEN TEKLİF ALIN</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <g clip-path="url(#clip0_2412_1718)">
                                        <path d="M4.875 3.75L11.125 10L4.875 16.25" stroke="white" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.125 3.75L17.375 10L11.125 16.25" stroke="white" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2412_1718">
                                            <rect width="20" height="20" fill="white" transform="translate(0.5)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-[120px]">
                <div className="container">
                    <div className="w-[710px] mx-auto text-center flex flex-col gap-4 mb-[66px]">
                        <p className="font-medium">Neler <span className="text-[#165DF5]">Yapıyoruz?</span></p>
                        <p className="font-medium text-[32px]">Sizin için neler yapıyoruz?</p>
                        <p className="font-medium text-[#00000099]">360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır. İşletmelerin ihtiyaçlarına uygun web tasarım ve web yazılım hizmetleri sunmaktayız.</p>
                    </div>
                    <div className="relative flex items-center">
                        <div className="relative right-[120px]">
                            <img src={Rectangle} alt="" />
                        </div>
                        <div className="w-[565px]">
                            <p className="font-medium mb-[30px] text-[36px] leading-[50px]">Sizin için neler yapabiliriz beraber bakalım.</p>
                            <p className="w-[418px] text-[#00000066] text-[18px] mb-[86px] font-medium">Tüm platformlarda sunduğumuz, web tasarım hizmetimiz ile ilgili bilgiler edinelim.</p>
                            <div className="flex flex-col gap-[30px]">
                                <div className="line-parent flex items-center gap-[20px]">
                                    <div className="line w-[8px] h-[110px] duration-300"></div>
                                    <div>
                                        <p className="font-medium text-[24px] mb-[10px]">Web Tasarım</p>
                                        <p className="font-medium text-[#00000066] text-[18px]">Var olan veya yeni kurulan işletmenizin, modern bir kurumsal kimliğe sahip olması için web sitesi.</p>
                                    </div>
                                </div>
                                <div className="line-parent flex items-center gap-[20px]">
                                    <div className="line w-[8px] h-[110px] duration-300"></div>
                                    <div>
                                        <p className="font-medium text-[24px] mb-[10px]">Dijital Pazarlama</p>
                                        <p className="font-medium text-[#00000066] text-[18px]">Web sitenizin veya işletmenizin, daha popüler hale gelmesi için çeşitli hizmetler sunuyoruz.</p>
                                    </div>
                                </div>
                                <div className="line-parent flex items-center gap-[20px]">
                                    <div className="line w-[8px] h-[110px] duration-300"></div>
                                    <div>
                                        <p className="font-medium text-[24px] mb-[10px]">Prodüksiyon</p>
                                        <p className="font-medium text-[#00000066] text-[18px]">İşletmenizin tanıtımının daha güzel hale gelmesi için, fotoğraf çekimi ve prodüksiyon yapıyoruz.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
export default main;
