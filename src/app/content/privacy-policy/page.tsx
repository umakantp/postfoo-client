import Link from 'next/link'
import * as React from 'react'
import { routes } from 'src/utils/constants'

const Page: React.FC = () => (
  <div className="container flex flex-col mt-8">
    <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
      Privacy Policy
    </h2>
    <i>Last updated 7 Jan, 2025</i>
    <br /><br />
    <div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Thank you for choosing to be part of PostFoo (postfoo.com, "Post Foo", "we", "us", or "our").
        We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our
        practices with regards to your personal information, please contact us at admin@postfoo.com.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        When you visit our website <Link href={routes.HOME}>https://postfoo.com</Link>, mobile application, and use our services, you trust us with your
        personal information. We take your privacy very seriously. In this privacy policy, we seek to explain to you in the clearest way possible what
        information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is
        important. If there are any terms in this privacy policy that you do not agree with, please discontinue use of our Sites or Apps and our services.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        This privacy policy applies to all information collected through our website (such as <Link href={routes.HOME}>https://postfoo.com</Link>),
        mobile application, ("Apps"), and/or any related services, sales, marketing or events (we refer to them collectively in this privacy policy
        as the "Services").
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Please read this privacy policy carefully as it will help you make informed decisions about sharing your personal information with us.
      </p>
    </div>
    <div>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">TABLE OF CONTENTS</h3>
      <ol>
        <li><a href="#WhatInformationDoWeCollect">WHAT INFORMATION DO WE COLLECT?</a></li>
        <li><a href="#HowDoWeUseYourInformation">HOW DO WE USE YOUR INFORMATION?</a></li>
        <li><a href="#WillYourInformationBeSharedWithAnyone">WILL YOUR INFORMATION BE SHARED WITH ANYONE?</a></li>
        <li><a href="#WhoWillYourInformationBeSharedWith">WHO WILL YOUR INFORMATION BE SHARED WITH?</a></li>
        <li><a href="#DoWeUseCookiesAndOtherTrackingTechnologies">DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</a></li>
        <li><a href="#HowDoWeHandleYourSocialLogins">HOW DO WE HANDLE YOUR SOCIAL LOGINS?</a></li>
        <li><a href="#HowLongDoWeKeepYourInformation">HOW LONG DO WE KEEP YOUR INFORMATION?</a></li>
        <li><a href="#HowDoWeKeepYourInformationSafe">HOW DO WE KEEP YOUR INFORMATION SAFE?</a></li>
        <li><a href="#DoWeCollectInformationFromMinors">DO WE COLLECT INFORMATION FROM MINORS?</a></li>
        <li><a href="#WhatAreYourPrivacyRights">WHAT ARE YOUR PRIVACY RIGHTS?</a></li>
        <li><a href="#DataBreach">DATA BREACH</a></li>
        <li><a href="#ControlsForDNTFeatures">CONTROLS FOR DO-NOT-TRACK FEATURES</a></li>
        <li><a href="#DoWeMakeUpdatesToThisPolicy">DO WE MAKE UPDATES TO THIS POLICY?</a></li>
        <li><a href="#HowCanYouContactUsAboutThisPolicy">HOW CAN YOU CONTACT US ABOUT THIS POLICY?</a></li>
      </ol>
    </div>

    <div>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6" id="WhatInformationDoWeCollect">WHAT INFORMATION DO WE COLLECT?</h3>
      <div>
        <h5 className="font-semibold tracking-tight mt-3">Personal information you disclose to us</h5>
        <blockquote className="mt-6 border-l-2 pl-2 italic mb-2">In Short: We collect personal information that you provide to us.</blockquote>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          We collect personal information that you voluntarily provide to us when registering at the Services or Apps, expressing an interest
          in obtaining information about us or our products and services, when participating in activities on the Services or Apps (such as
          posting messages in our online forums or entering competitions, contests or giveaways) or otherwise contacting us.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The personal information that we collect depends on the context of your interactions with us and the Services or Apps, the choices you
          make and the products and features you use. The personal information we collect can include the following:
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Publicly Available Personal Information: We collect first name, and last name; phone number; current address; email addresses; birth date; and other similar data.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Personal Information Provided by You: We collect data about app usage; passwords; and other similar data.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Social Media Login Data: We may provide you with the option to register using social media account details, like your Facebook,
          X (formerly Twitter), Google or other social media account. If you choose to register in this way, we will collect the Information described in the section
          called "<a href="#HowDoWeHandleYourSocialLogins">HOW DO WE HANDLE YOUR SOCIAL LOGINS</a>" below.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          All personal information that you provide to us must be true, complete and accurate, and you must notify us or of any changes to such personal
          information or update directly in your account settings.
        </p>
      </div>

      <div>
        <h5 className="font-semibold tracking-tight mt-3">Information automatically collected</h5>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          In Short: Some information — such as IP address and/or browser and device characteristics — is collected automatically when you
          visit our Services or Apps.
        </blockquote>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          We automatically collect certain information when you visit, use or navigate the Services or Apps. This information does not reveal your
          specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser
          and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and
          when you use our Services or Apps and other technical information. This information is primarily needed to maintain the security and
          operation of our Services or Apps, and for our internal analytics and reporting purposes.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Like many businesses or organisations, we also collect information through cookies and similar technologies. You can find out more about this
          in our Cookies Policy: <Link href={routes.COOKIE_POLICY}>https://postfoo.com{routes.COOKIE_POLICY}</Link>.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Online Identifiers. We collect devices; applications; tools and protocols, such as IP (Internet Protocol) addresses; cookie identifiers,
          or others such as the ones used for analytics and marketing; and other similar data.
        </p>
      </div>

      <div>
        <h5 className="font-semibold tracking-tight mt-3">Information collected through our Apps</h5>
        <blockquote className="mt-6 border-l-2 pl-6 italic mb-6">In Short: We may collect information regarding your geo-location, push notifications, when you use our apps.</blockquote>
        <div>
          If you use our Apps, we may also collect the following information:
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              Geo-Location Information: We may request access or permission to and track location-based information from your mobile device,
              either continuously or while you are using our mobile application, to provide location-based services. If you wish to change our access
              or permissions, you may do so in your device's settings.
            </li>
            <li>
              Push Notifications: We may request to send you push notifications regarding your account or the mobile application. If you wish to
              opt-out from receiving these types of communications, you may turn them off in your device's settings.
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6" id="HowDoWeUseYourInformation">HOW DO WE USE YOUR INFORMATION?</h3>
      <div>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          In Short: We process your information for purposes based on legitimate interests, the fulfillment of our contract with you,
          compliance with our legal obligations, and/or your consent.
        </blockquote>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          We use personal information collected via our Services or Apps for a variety of purposes described below. We process your
          personal information for these purposes in reliance on our legitimate interests, in order to enter into or perform a contract
          with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next
          to each purpose listed below.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">We use the information we collect or receive:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            To facilitate account creation and logon process. If you choose to link your account with us to a third party account (such as
            your Google or Facebook account), we use the information you allowed us to collect from those third parties to facilitate account creation
            and logon process for the performance of the contract. See the section below headed
            "<a href="#HowDoWeHandleYourSocialLogins">HOW DO WE HANDLE YOUR SOCIAL LOGINS</a>" for further information.
          </li>
          <li>
            To send administrative information to you. We may use your personal information to send you product, service and new feature information
            and/or information about changes to our terms, conditions, and policies.
          </li>
          <li>
            Deliver targeted advertising to you. We may use your information to develop and display content and advertising (and work with third
            parties who do so) tailored to your interests and/or location and to measure its effectiveness. For more information, see our
            Cookie Policy: <Link href={routes.COOKIE_POLICY}>https://postfoo.com{routes.COOKIE_POLICY}</Link>.
          </li>
          <li>
            To protect our Services. We may use your information as part of our efforts to keep our Services or Apps safe and secure (for example, for
            fraud monitoring and prevention).
          </li>
          <li>
            To enable user-to-user communications. We may use your information in order to enable user-to-user communications with each user's consent.
          </li>
          <li>
            To respond to legal requests and prevent harm. If we receive a subpoena or other legal request, we may need to inspect the data we hold to
            determine how to respond.
          </li>
          <li>
            To manage user accounts. We may use your information for the purposes of managing our account and keeping it in working order.
          </li>
          <li>
            To deliver services to the user. We may use your information to provide you with the requested service.
          </li>
          <li>
            To respond to user inquiries/offer support to users. We may use your information to respond to your inquiries and solve any potential issues
            you might have with the use of our Services.
          </li>
          <li>
            Information on your funds, investments, and portfolios are collected to help you track your investments and manage your portfolios.
          </li>
        </ul>
      </div>
    </div>

    <div>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6" id="WillYourInformationBeSharedWithAnyone">WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h3>
      <div>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          In Short: We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to
          fulfill obligations.
        </blockquote>
        <p className="leading-7 [&:not(:first-child)]:mt-6">We may process or share data based on the following legal basis:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            Consent: We may process your data if you have given us specific consent to use your personal information in a specific purpose.
          </li>
          <li>
            Legitimate Interests: We may process your data when it is reasonably necessary to achieve our legitimate interests.
          </li>
          <li>
            Performance of a Contract: Where we have entered into a contract with you, we may process your personal information to fulfill the
            terms of our contract.
          </li>
          <li>
            Legal Obligations: We may disclose your information where we are legally required to do so in order to comply with applicable law,
            governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including
            in response to public authorities to meet national security or law enforcement requirements).
          </li>
          <li>
            Vital Interests: We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding
            potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal
            activities, or as evidence in litigation in which we are involved.
          </li>
        </ul>
        <p className="leading-7 [&:not(:first-child)]:mt-6">More specifically, we may need to process your data or share your personal information in the following situations:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            Vendors, Consultants and Other Third-Party Service Providers: We may share your data with third party vendors, service providers, contractors
            or agents who perform services for us or on our behalf and require access to such information to do that work. Examples include:
            payment processing, data analysis, email delivery, hosting services, customer service and marketing efforts. We may allow selected third
            parties to use tracking technology on the Services or Apps, which will enable them to collect data about how you interact with the Services
            or Apps over time. This information may be used to, among other things, analyze and track data, determine the popularity of certain content
            and better understand online activity. Unless described in this Policy, we do not share, sell, rent or trade any of your information with
            third parties for their promotional purposes.
          </li>
          <li>
            Organisation Transfers: We may share or transfer your information in connection with, or during negotiations of, any merger, sale of
            organisations assets, financing, or acquisition of all or a portion of our organisation to another organisation.
          </li>
          <li>
            Third-Party Advertisers: We may use third-party advertising companies to serve ads when you visit the Services or Apps. These companies may
            use information about your visits to our Website(s) and other websites that are contained in web cookies and other tracking technologies in
            order to provide advertisements about goods and services of interest to you. See our Cookie
            Policy: <Link href={routes.COOKIE_POLICY}>https://postfoo.com{routes.COOKIE_POLICY}</Link> for further information.
          </li>
          <li>
            Affiliates: We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy policy.
            Affiliates include our parent organisations if any and any subsidiaries, joint venture partners or other organisations that we control or that
            are under common control with us.
          </li>
        </ul>
      </div>

      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6" id="WhoWillYourInformationBeSharedWith">WHO WILL YOUR INFORMATION BE SHARED WITH?</h3>
        <div>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            In Short: We only share information with the following third parties
          </blockquote>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            We only share and disclose your information with the following third parties. We have categorized each party so that you may easily understand
            the purpose of our data collection and processing practices. If we have processed your data based on your consent and you wish to revoke your
            consent, please contact us.
          </p>
          <div className="my-6 w-full overflow-y-auto">
            <table className="w-full">
              <thead>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">REASON</th>
                  <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"><span>THIRD PARTIES</span></th>
                </tr>
              </thead>
              <tbody>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">Allow Users to Connect to their Third-Party Accounts:</td>
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"><span>Facebook account, X (formerly Twitter) account & Google account</span></td>
                </tr>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">Content Optimization:</td>
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"><span>Google Fonts, Google Site Search and YouTube video embed</span></td>
                </tr>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">Data Backup and Security:</td>
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"><span>Google Drive Backup</span></td>
                </tr>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">Functionality and Infrastructure Optimization:</td>
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"><span>DigitalOcean</span></td>
                </tr>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">Social Media Sharing and Advertising:</td>
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"><span>Facebook social plugins, X (formerly Twitter) social plugins and Google+ social plugins</span></td>
                </tr>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">User Account Registration and Authentication:</td>
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"><span>Facebook Login, X (formerly Twitter) Login, Google Sign-In, and Google Authenticator</span></td>
                </tr>
                <tr className="m-0 border-t p-0 even:bg-muted"  >
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">Web and Mobile Analytics:</td>
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"><span>Google Analytics and Google Tag Manager</span></td>
                </tr>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">Website Performance Monitoring:</td>
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"><span>Web Performance</span></td>
                </tr>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">Website or Application Testing:</td>
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"><span>TestFlight, Google Website Optimizer and Google Play Console</span></td>
                </tr>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">Sending Emails & SMS:</td>
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"><span>Send Pulse</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6" id="DoWeUseCookiesAndOtherTrackingTechnologies">DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h3>
        <div>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            In Short: We may use cookies and other tracking technologies to collect and store your information.
          </blockquote>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            We may use cookies and similar tracking technologies (like web beacons, local storage and pixels) to access or store information.
            Specific information about how we use such technologies and how you can refuse certain cookies is set out in our
            Cookie Policy: <Link href={routes.COOKIE_POLICY}>https://postfoo.com{routes.COOKIE_POLICY}</Link>.
          </p>
        </div>
      </div>

      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6" id="HowDoWeHandleYourSocialLogins">HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h3>
        <div>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            In Short: If you choose to register or log in to our services using a social media account, we may have access to certain information about you.
          </blockquote>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Our Services or Apps offer you the ability to register and login using your third party social media account details (like you
            Facebook, X (formerly Twitter) or Google+ logins). Where you choose to do this, we will receive certain profile information about you from your
            social media provider. The profile Information we receive may vary depending on the social media provider concerned, but will often
            include your name, e-mail address, profile picture as well as other information you choose to make public.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            We will use the information we receive only for the purposes that are described in this privacy policy or that are otherwise made clear
            to you on the Services or Apps. Please note that we do not control, and are not responsible for, other uses of your personal information
            by your third party social media provider. We recommend that you review their privacy policy to understand how they collect, use
            and share your personal information, and how you can set your privacy preferences on their sites and apps.
          </p>
        </div>
      </div>

      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6" id="HowLongDoWeKeepYourInformation">HOW LONG DO WE KEEP YOUR INFORMATION?</h3>
        <div>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy policy unless otherwise required by law.
          </blockquote>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention
            period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this policy will require us keeping your
            personal information for longer than the period of time in which users have an account with us.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            When we have no ongoing legitimate organisational need to process your personal information, we will either delete or anonymize it, or, if
            this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal
            information and isolate it from any further processing until deletion is possible.
          </p>
        </div>
      </div>

      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6" id="HowDoWeKeepYourInformationSafe">HOW DO WE KEEP YOUR INFORMATION SAFE?</h3>
        <div>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            In Short: We aim to protect your personal information through technical security measures.
          </blockquote>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            We have implemented appropriate technical security measures designed to protect the security of any personal information we
            process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to
            protect your personal information, transmission of personal information to and from our Services or Apps is at your own risk. You should
            only access the services within a secure environment.
          </p>
        </div>
      </div>

      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6" id="DoWeCollectInformationFromMinors">DO WE COLLECT INFORMATION FROM MINORS?</h3>
        <div>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            In Short: We do not knowingly collect data from or market to children under 18 years of age.
          </blockquote>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            We do not knowingly solicit data from or market to children under 18 years of age. By using the Services or Apps, you represent that you
            are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services or Apps.
            If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take
            reasonable measures to promptly delete such data from our records. If you become aware of any data we have collected from children under age 18,
            please contact us at admin@postfoo.com.
          </p>
        </div>
      </div>

      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6" id="WhatAreYourPrivacyRights">WHAT ARE YOUR PRIVACY RIGHTS?</h3>
        <div>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            In Short: In some regions, such as the European Economic Area, you have rights that allow you greater access to and control over
            your personal information. You may review, change, or terminate your account at any time
          </blockquote>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            In some regions (like the European Economic Area), you have certain rights under applicable data protection laws. These may
            include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii)
            to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you
            may also have the right to object to the processing of your personal information. To make such a request, please email us at
            admin@postfoo.com. We will consider and act upon any request in accordance with applicable data protection laws.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time.
            Please note however that this will not affect the lawfulness of the processing before its withdrawal.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            If you are resident in the European Economic Area and you believe we are unlawfully processing your personal information, you also
            have the right to complain to your local data protection supervisory authority. You can find their contact details
            here: <a href="http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm" target="_blank" rel="noopener noreferrer">
              http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
            </a>
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            If you have questions or comments about your privacy rights, you may email us at admin@postfoo.com.
          </p>
        </div>
        <div>
          <h5 className="font-semibold tracking-tight mt-3">Account Information</h5>
          <p className="leading-7 [&:not(:first-child)]:mt-6">If you would at any time like to review or change the information in your account or terminate your account, you can:</p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Log into your account settings and update your user account.</li>
            <li>Drop us a note at admin@postfoo.com from the verified email address.</li>
          </ul>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases.
            However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations,
            enforce our Terms of Use and/or comply with legal requirements.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            <u>Cookies and similar technologies:</u> Most Web browsers are set to accept cookies by default. If you prefer, you can usually
            choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could
            affect certain features or services of our Services or Apps. To opt-out of interest-based advertising by advertisers on our
            Services or Apps visit <a href="http://www.aboutads.info/choices/" rel="noopener noreferrer" target="_blank">https://www.aboutads.info/choices/</a>. For further
            information, please see our Cookie Policy: <Link href={routes.COOKIE_POLICY}>https://postfoo.com{routes.COOKIE_POLICY}</Link>.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            <u>Opting out of email marketing:</u> You can unsubscribe from our marketing email list at any time by clicking on the
            unsubscribe link in the emails that we send or by contacting us using the details provided below. You will then be removed
            from the marketing email list – however, we will still need to send you service-related emails that are necessary for the
            administration and use of your account. To otherwise opt-out, you may.
          </p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Access your account settings and update preferences.</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6" id="DataBreach">DATA BREACH</h3>
        <div>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            A privacy breach occurs when there is unauthorized access to or collection, use, disclosure or disposal of personal
            information. You will be notified about data breaches when PostFoo believes you are likely to be at risk or
            serious harm. For example, a data breach may be likely to result in serious financial harm or harm to your mental or physical
            well-being. In the event that PostFoo becomes aware of a security breach which has resulted or may result in
            unauthorized access, use or disclosure of personal information PostFoo will promptly investigate the matter
            and notify the applicable Supervisory Authority not later than 72 hours after having become aware of it, unless the personal
            data breach is unlikely to result in a risk to the rights and freedoms of natural persons.
          </p>
        </div>
      </div>

      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6" id="ControlsForDNTFeatures">CONTROLS FOR DO-NOT-TRACK FEATURES</h3>
        <div>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature
            or setting you can activate to signal your privacy preference not to have data about your online browsing activities
            monitored and collected. No uniform technology standard for recognizing and implementing DNT signals has been finalized.
            As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your
            choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will
            inform you about that practice in a revised version of this privacy policy.
          </p>
        </div>
      </div>

      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6" id="DoWeMakeUpdatesToThisPolicy">DO WE MAKE UPDATES TO THIS POLICY?</h3>
        <div>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            In Short: Yes, we will update this policy as necessary to stay compliant with relevant laws.
          </blockquote>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            We may update this privacy policy from time to time. The updated version will be indicated by an updated “Revised”
            date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy
            policy, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification.
            We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.
          </p>
        </div>
      </div>

      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6" id="HowCanYouContactUsAboutThisPolicy">HOW CAN YOU CONTACT US ABOUT THIS POLICY?</h3>
        <div>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            If you have questions or comments about this policy, you may email us at admin@postfoo.com
          </p>
        </div>
      </div>

      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Based on the laws of some countries, you may have the right to request access to the personal information we collect
          from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal
          information, please email us at admin@postfoo.com with subject line as `Request to review, update, or delete personal information`. We
          will respond to your request within 30 days.
        </p>
      </div>
    </div>
  </div>
)

export default Page
