import { Mail, Phone } from 'react-feather'

export default function About() {
  return (
    <>
      <article className='resume max-w-2xl p-6 mx-auto max-w-a4 xsm:p-8 sm:p-9 md:p-16'  >
        <style jsx>{`
        @media print {
          body {
            width: 21cm;
            height: 29.7cm;
          } 
        }

        @page {
          padding: 0;
          margin: 0cm;
          size: A4 portrait;
        }
      
      `}</style>
        <header className="flex-col items-center mb-8 md:mb-11">
          <h1 className="text-5xl font-semibold ">
            兰天游
          </h1>
        </header>
        <section>
          <div className="col-break-avoid">
            <section className="mb-4 col-break-avoid">
              <ul>
                <li className="mt-1.5 leading-normal  pl-7 text-md">
                  <span className='inline-block'>
                    <Mail color='rgba(117, 117, 117, 1)' size={30} />
                  </span>
                  dtlantianyou@gmail.com
                </li>
                <li className="mt-1.5 leading-normal  pl-7 text-md">
                  <span className='inline-block'>
                    <Phone color='rgba(117, 117, 117, 1)' size={30} />
                  </span>
                  151 1078 5777
                </li>
              </ul>
            </section>
          </div>
        </section>

        <section className="mt-8">
          <div className="col-break-avoid">
            <section className="mb-4 col-break-avoid">
              <ul className="my-2 mb-6 flex flex-wrap text-md leading-relaxed">
                <li
                  className="px-3 mr-1.5 mt-1.5 text-base  print:bg-white print:border-inset bg-gray-200"
                >
                  JavaScript
                </li>
                <li
                  className="px-3 mr-1.5 mt-1.5 text-base  print:bg-white print:border-inset bg-gray-200"
                >
                  React
                </li>
                <li
                  className="px-3 mr-1.5 mt-1.5 text-base  print:bg-white print:border-inset bg-gray-200"
                >
                  Go
                </li>
              </ul>
            </section>
          </div>

        </section>

        <section className="mt-8">
          <div className="col-break-avoid">
            <h2
              className="mb-4 font-bold tracking-widest text-2xl  print:font-normal"
            >
              项目
            </h2>

            <section className="mb-4 col-break-avoid">
              <header>
                <h3 className="text-lg font-semibold  leading-snugish">
                  电商
                </h3>
                <p className="leading-normal text-md ">
                  独立开发了一个电商网站具有注册，登陆，创建删除商品，购买支付等功能。通过GraphQL而不是REST实现前后端通信。
                </p>
              </header>
              <p className="mt-2 text-md  leading-normal">
                利用Next.JS 实现了全局布局设计，让导航栏显示加载时进度条，利用CSS实现购物车的折叠和弹出，对各个React Component用Jest简单测试，主要难点在于全部商品页的Pagination
              </p>
              <p className="mt-2 text-md  leading-normal">
                独立设计GraphQL schema以便前后端分离开发，利用Stripe实现支付，整个数据库用Docker容器化
              </p>
            </section>
          </div>
          <section className="mb-4 col-break-avoid">
            <header>
              <h3 className="text-lg font-semibold  leading-snugish">
                实时聊天室
              </h3>
              <p className="leading-normal text-md">
                Elixir, Phoenix, Socket.io, Postgresql
              </p>
            </header>
            <p className="pl-7 mt-2 text-md  leading-normal">
              了解函数式编程语言自学Phoenix 框架开发流程，实现了用GitHub账号登陆，难点在于用Socket.io实现每个聊天室的实时对话
            </p>
          </section>
        </section>

        <section className="mt-8">
          <div className="col-break-avoid">

            <section className="mt-8">
              <section className="mb-4 col-break-avoid">
                <header>

                  <h2
                    className="mb-4 font-bold tracking-widest text-2xl  print:font-normal"
                  >
                    上海财经大学
            </h2>
                  <p className="leading-normal text-md">
                    2016 – 2020 | 应用统计学 本科
                  </p>
                </header>
                <p className="pl-7 mt-2 text-md  leading-normal">
                  高等代数，数学分析，实变函数，概率论，数理统计，运筹学
                  <span>A/A-</span>
                </p>
                <p className="pl-7 mt-2 text-md  leading-normal">

                  编程，数据结构，数据库，操作系统，市场营销，中级宏观经济学，中级微观经济学，货币银行学，公司金融，数据分析，属性数据分析
                </p>
                <p className="pl-7 mt-2 text-md  leading-normal">

                  英语熟练，托福109，翻译过5万字文章，能流利阅读英文文档
                </p>
              </section>
            </section>
          </div>
        </section>
      </article >
    </>
  )
}