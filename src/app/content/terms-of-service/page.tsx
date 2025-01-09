
import Link from 'next/link'
import * as React from 'react'
import { routes } from 'src/utils/constants'

const Page: React.FC = () => (
  <div className="flex flex-col mt-8">
    <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
      Terms of Services (Websites, Applications, Forms...etc.)
    </h2>
    <i>Last updated 7 Jan, 2025</i>
    <br /><br />
    These terms of website govern your use of this website, our forms, our products, features, app, and services we offer. Please read them carefully. This website or our other websites, features, products, serices and applications are jointly referred to as the "Services".
    <br /><br />
    Reference to "website" in this document refers to PostFoo(postfoo.com) website. "Portfolio" referred here in the document means a collection of different investments held by an individual or group of individuals or institution or any other entity. "Fund" referred here in the document means is a pool of capital collected from multiple investors to invest in a diversified portfolio of assets. "Stock" or "Equity" or "Security" referred here in the document means any type of financial instrument that represents an ownership in a company or corporation.
    <br /><br />
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      <li>Most of our Services available on websites, applications or in the forms are free to access.</li>
      <li>Some of our Services are paid. You are solely responsible for the payment of any fees or charges for the use of such Services.</li>
      <li>You are solely responsible for the management of your portfolios, funds and stocks (or any other investment instruments).</li>
      <li>PostFoo allows you to track your own portfolios, funds and stocks (or any other investment instruments).</li>
      <li>PostFoo doesn't provide any financial, investment or trading advice.</li>
      <li>PostFoo doesn't provide any investment portfolio management/analysis/strategy services.</li>
      <li>Do not make financial, investment or trading decisions based on data provided by PostFoo.</li>
      <li>PostFoo is not a platform for trading, or investing.</li>
      <li>PostFoo doesn't guarantee any returns on your portfolios, funds or stocks.</li>
      <li>Any data you provide to PostFoo is your own data and you are solely responsible for it.</li>
      <li>PostFoo relies on third parties to collect the market, fund, security, or other data, and doesn't guarantee data accuracy, completeness, timeliness, or reliability.</li>
      <li>PostFoo will not be reponsbile for lost profits, revenues, or data, financial losses or indirect, special, consequential, exemplary or punitive damages. PostFoo is not responsible for any kind hardware or software damages due to our Services.</li>
      <li>You are solely responsible for content you post (text, photos, audios, videos or any type of content) while using our Services including forums, account registration forms, and contact us forms.</li>
      <li>You retain the ownership of any intellectual property rights that you hold in the content you posted. Although you license us to use, host, store, reproduce, modify, create deviation works, communicate, publish, publicy perform, publicy display or distrubute such content.</li>
      <li>We may review content to determine whether its illegal or violates our policies, & we may remove or refuse to display the content that we reasonably believe violates our policies or the law.</li>
      <li>You shall not post content which is offensive, unlawful threatening, misleading, defamatory, obscene, pornographic, criminally inciting, hateful, harassing or otherwise unlawful in any manner whatsoever.</li>
      <li>You shall not use any “deep-link”, “page-scrape”, “robot”, “spider” or other automatic device, program, algorithm or methodology, or any similar or equivalent manual process, to access, acquire, copy or monitor any portion of the Services or any Content, or in any way reproduce or circumvent the navigational structure or presentation of the websites.</li>
      <li>You shall not attempt to gain unauthorized access to any portion or feature of the websites or applications, or any other systems or networks connected to the websites, by hacking, "password mining" or any other illegitimate means.</li>
      <li>Most of our Services are available on mobile devices. Do not use such Services in a way that distracts you and prevents you from obeying traffic or safety laws.</li>
      <li>You may need to create an account in order to access some of our Services. To protect your account, keep your password confidential. You are responsible for the activity that happens on or through your account.</li>
      <li>You are not allowed to copy or use our logos, graphics, or audios without written consent from us.</li>
      <li>Using our Services does not give you ownership of any intellectual property rights in our Services or the content you access.</li>
      <li>Our <Link href={routes.PRIVACY_POLICY}>privacy policy</Link> explain how we treat your personal data & protect your privacy when you use our Services. By using our Services, you agree that PostFoo can use such data in accordance with our privacy policies.</li>
      <li>We are constantly changing and improving our Services. We may add or remove functionalities or features, and we may suspend or stop a Service altogether.</li>
      <li>You can stop using our Services at any time, although we’ll be sorry to see you go.</li>
      <li>We don’t make any commitments about the content within the Services, the specific functions of the Services, or their reliability, availability, or ability to meet your needs. We provide the Services “as is”. There are certain things that we don’t promise about our Services.</li>
      <li>We may modify these terms to, for example, reflect changes to the law or changes to our Services. You should look at the terms regularly. These terms control the relationship between "PostFoo" and you. They do not create any third party beneficiary rights.</li>
    </ul>
  </div>
)

export default Page
