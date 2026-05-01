import { Mail, MessageCircleQuestionMark, PhoneCall, Send } from 'lucide-react'
const ContactInfo = () => {
  return (
     <div className="">
                {/* text main */}
                <div className="lg:gap-4 lg:font-[700px] font-sans  lg:p-10">
                    <span className="text-4xl opacity-55 flex justify-center items-center">
                        Men bilan bog'laning
                    </span>
                </div>
                {/* for cards */}
                <div className="lg:flex lg:gap-4 lg:px-10 p-3 ">
                   
                    {/* for first card */}
                    <div className="flex border border-gray-500 rounded-2xl p-10 flex-col gap-2">
                        <div className="rounded-xl bg-green-600 w-10 p-2">
                            <PhoneCall />
                        </div>
                        <span className="font-bold italic text-xl">
                            Bizga qo'ng'iroq qiling
                        </span>
                        <span className="text-gray-500">
                            Sizda savol tug‘ildimi? Biz yordam beramiz!
                        </span>
                        <a href="vipplast.uz" className="text-amber-400">+998 91 062 62 26</a>
                    </div>
                  
                  
                    {/* for secon card */}
                    <div className="flex border border-gray-500 rounded-2xl p-10 flex-col gap-2">
                        <div className="rounded-xl bg-amber-600 w-10 p-2">
                            <Mail />
                        </div>
                        <span className="font-bold italic text-xl">
                            Bizga email orqali yozing
                        </span>
                        <span className="text-gray-500">
                            G‘oya va takliflaringiz bormi? Biz doim muloqotga tayyormiz!
                        </span>
                        {/* link qo'y */}
                        <a href="########" className="text-amber-400">ashurboyevalimardon@gmail.com</a>
                    </div>
                   
                   
                   
                   
                    {/* for third card */}
                    <div className="flex border border-gray-500 rounded-2xl p-10 flex-col gap-2">
                        <div className="rounded-xl bg-amber-600 w-10 p-2">
                            <MessageCircleQuestionMark />
                        </div>
                        <span className="font-bold italic text-xl">
                            Taklif va g'oyalar uchun
                        </span>
                        <span className="text-gray-500">
                            G‘oya va takliflaringiz bormi? Biz doim muloqotga tayyormiz!
                        </span>
                        <a href="vipplast.uz" className="text-amber-400">support@.uzbot</a>
                    </div>
                   
                   
                   
                   
                   
                    {/* for fourth card */}
                    <div className="flex border border-gray-500 rounded-2xl p-10 flex-col gap-2 ">
                        <div className="rounded-xl bg-amber-600 w-10 p-2">
                            <Send />
                        </div>
                        <span className="font-bold italic text-xl">
                            Bizga yozing
                        </span>
                        <span className="text-gray-500">
                            Telegram chatda sizning savollaringizga javob topiladi
                        </span>
                        <a href="vipplast.uz" className="text-amber-400">@salom_dunyo</a>
                    </div>
                </div>
               
               
               
                <div className="border rounded-2xl bg-gray-200 lg:border-hidden m-5">
                    <h1 className="lg:font-mono gap-4 lg:p-10 p-2 lg:font-[500px] lg:text-4xl text-2xl text-green-800 flex justify-center">Information about company:</h1>
                  
                    {/* for information */}
                    <div className="grid lg:grid-cols-3 p-2">
                      
                      
                      
                        {/* for name */}
                        <div className="flex flex-col px-8">
                            <span className="text-gray-500">
                                Name of company:
                            </span>
                            <span className="lg:text-2xl font-bold text-xl">
                               OOO "FutureStartup" MChJ 
                            </span>
                        </div>
                      
                      
                      
                      
                        {/* yo'nalishi uchun */}
                        <div className="flex flex-col px-10">
                            <span className="text-gray-500">
                               Korxona yo'nalishi:
                            </span>
                            <span className="text-xl font-bold">

                                Startup support.
                            </span>
                        </div>
                      
                      
                      
                      
                        {/* yuridik manzili uchun */}
                        <div className="flex flex-col px-10">
                            <span className="text-gray-500">
                                Korxona yuridik manzili:
                            </span>
                            <span className="font-bold text-xl">
                                Toshkent viloyati. Angrenskiy
                            </span>
                        </div>
                      
                      
                      
                      
                        {/* Korxona inn raqami */}
                        <div className="flex flex-col p-10">
                            <span className="text-gray-500">
                                Korxona INN raqami:
                            </span>
                            <span className="text-xl font-mono">
                                7777777
                            </span>
                        </div>
                    
                    
                    
                    
                    
                    
                    
                    </div>
                </div>








            </div>
  )}
export default ContactInfo