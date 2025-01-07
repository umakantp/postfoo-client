import Link from 'next/link'
import { routes } from 'src/utils/constants'

const Page = () => {
  return (
    <div className="container flex flex-col mt-8">
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">Cookie Policy</h2>
      <hr />
      <i>Last updated 7 Jan, 2025</i>
      <br /><br />
      <div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          At PostFoo (postfoo.com), we believe in being clear and open about how we collect and use data related to you.
          This Cookie Policy applies to any of our product or service that links to this policy or incorporates it by reference. We use cookies and
          similar technologies to collect and use data as part of our Services as defined in
          our <Link href={routes.PRIVACY_POLICY}>Privacy Policy</Link> ("Services") and which includes our sites, communications, and mobile applications.
          In the spirit of transparency, this policy provides detailed information about how and when we use these technologies.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          By continuing to visit or use our Services, you are agreeing to the use of cookies and similar technologies for the purposes described in this policy.
        </p>
      </div>

      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">Types of Cookie Technologies</h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          A cookie is a small file placed onto your device that enables features and functionality on postfoo.com or mobile app. Any browser visiting our
          sites may receive cookies from us or cookies from third parties such as Google Analytics, partners or service providers. We use 3 types of cookies,
          essential cookies, functionality cookies and thirdparty cookies (or service provider cookies). And other than cookies technologies like web beacon,
          pixel, local storage and other technologies are used to track things like performance of our website, popular pages or content, or opening of emails
          sent by us. These technologies are also refered as term "cookies" in this policy.
        </p>

        <div>
          <h5 className="font-semibold tracking-tight mt-3">1. Essential cookies</h5>
          <p className="leading-7 [&:not(:first-child)]:mt-3">
            Some cookies are essential for the operation of our website or mobile app. For example, some cookies allow us to identify who has accepted cookie policy or
            opted out of tracking cookies, some cookies are used to track how many users have visited our website or mobile app.
          </p>
        </div>

        <div>
          <h5 className="font-semibold tracking-tight mt-3">2. Functionality cookies</h5>
          <p className="leading-7 [&:not(:first-child)]:mt-3">
            Functionality cookies are cookies which are used provide additional features over just browsing through website. Such cookies example can help us
            to remember your preferences like which languaged you have selected or can help us to identify members and ensure they can access the member
            only pages. If a member opts to disable these cookies, the user will not be able to access all of the content available.
          </p>
        </div>

        <div>
          <h5 className="font-semibold tracking-tight mt-3">3. Third Party cookies</h5>
          <p className="leading-7 [&:not(:first-child)]:mt-3">
            Third Party cookies are set by other services integrated or used within our website, such as Google Analytics or Facebook like widget.
          </p>
        </div>

        <div>
          <h5 className="font-semibold tracking-tight mt-3">4. Pixels or Web beacon</h5>
          <p className="leading-7 [&:not(:first-child)]:mt-3">
            A pixel is a tiny image that may be found within web pages and emails, requiring a call (which provides device and visit information) to our
            servers in order for the pixel to be rendered in those web pages and emails. We use pixels to learn more about your interactions with
            email content or web content, such as whether you interacted with links or buttons within content. Pixels can also enable us to place cookies
            on your browser.
          </p>
        </div>

        <div>
          <h5 className="font-semibold tracking-tight mt-3">5. Local storage</h5>
          <p className="leading-7 [&:not(:first-child)]:mt-3">
            Local storage enables a website or application to store information locally on your device(s). Local storage may be used to improve the our websites
            experience, for example, by enabling features, remembering your preferences and speeding up site functionality or measuring the performance or login tokens to identify you to allow you to access your account.
          </p>
        </div>

        <div>
          <h5 className="font-semibold tracking-tight mt-3">6. Other technologies</h5>
          <p className="leading-7 [&:not(:first-child)]:mt-3">
            We also use other tracking technologies, such as mobile advertising IDs and tags for similar purposes as described in this Cookie Policy.
            References to similar technologies in this policy includes other tracking technologies.
          </p>
        </div>
      </div>

      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">How do we use Cookie Technologies?</h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">Below we describe the purposes for which we use cookie technologies for various purposes.</p>

        <div>
          <h5 className="font-semibold tracking-tight mt-3">1. Authentication</h5>
          <p className="leading-7 [&:not(:first-child)]:mt-3">We use cookies, local storage and similar technologies to recognize you when you visit our Services</p>
          <p className="leading-7 [&:not(:first-child)]:mt-3">
            If you're signed into our website, these technologies help us show you the right information and personalize your experience in line with
            your settings. For example, cookies or local storage enable us to identify you and verify your account.
          </p>
        </div>

        <div>
          <h5 className="font-semibold tracking-tight mt-3">2. Security</h5>
          <p className="leading-7 [&:not(:first-child)]:mt-3">We use cookies, local storage and similar technologies to make your interactions with our Services faster and more secure.</p>
          <p className="leading-7 [&:not(:first-child)]:mt-3">
            For example, we use cookies to enable and support our security features, keep your account safe and to help us detect malicious activity
            and violations of our User Agreement.
          </p>
        </div>

        <div>
          <h5 className="font-semibold tracking-tight mt-3">3. Preferences, features and services</h5>
          <p className="leading-7 [&:not(:first-child)]:mt-3">
            We use cookies, local storage and similar technologies to enable the functionality of our Services, such as helping you to fill out forms on our Services
            more easily and providing you with features, insights and customized content in conjunction with our plugins. We also use these technologies
            to remember information about your browser and your preferences.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-3">
            For example, we use cookies to enable and support our security features, keep your account safe and to help us detect malicious activity
            and violations of our User Agreement.
          </p>
        </div>

        <div>
          <h5 className="font-semibold tracking-tight mt-3">4. Performance, analytics and research</h5>
          <p className="leading-7 [&:not(:first-child)]:mt-3">
            Cookies and similar technologies help us learn more about how well our Services and plugins perform in different locations.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-3">
            We or our service providers use these technologies to understand, improve, and research products, features and services, including as you
            navigate through our sites, applications or devices. We, or our service providers, use these technologies to determine and measure the
            performance of website pages and to learn whether you have interacted with our websites, content or emails and provide analytics based on
            those interactions. We use service providers which use these technologies to get analytics like finding popular content, finding most used
            devices, most used operating system or browser, or which geographical areas are visiting which pages...etc.
          </p>
        </div>

        <div>
          <h5 className="font-semibold tracking-tight mt-3">5. Target ads from our affiliates, partners, or agents</h5>
          <p className="leading-7 [&:not(:first-child)]:mt-3">
            Our affiliates, partners or agents some times display ads on the website and cookie could be set determine if you seen or clicked the ad or other
            cookies could be used to determine your interests and likes, so we are able to deliver correct advertisements to you.
          </p>
        </div>
      </div>

      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">What third parties use these technologies in connection with our Services?</h3>
        <div className="mt-3">
          <p className="leading-7 [&:not(:first-child)]:mt-3">
            Third parties such as Google Analytics or our other service providers may use cookies & similar technologies in connection with our Services.
            They use it help us monitor our website traffic. We may also use third party cookies to help us with market research, revenue tracking, improving
            site functionality and monitoring compliance with our terms and conditions and copyright policy.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-3">
            Advertisers sometimes use their own cookies to provide you with targeted advertising. For example, advertisers may use a profile they have built
            on sites that you have previously visited to present you with more relevant advertisements during your visit to www.avengermotorcycle.club.
            We believe that it is useful to our users to see advertisements that are more relevant to their interests. If you are based in the European Union
            and would like to learn more about how advertisers use these types of cookies or to choose not to receive them, please
            visit <a href="https://www.youronlinechoices.eu" rel="noopener noreferrer" target="_blank">www.youronlinechoices.eu</a>. If you are based in the United States and would like to learn more, please
            visit <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">http://www.aboutads.info/choices/</a>.
          </p>
        </div>
      </div>

      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">Can you block block cookies from our website?</h3>
        <div className="mt-3">
          <p className="leading-7 [&:not(:first-child)]:mt-3">As we’ve explained above, cookies help you to get the most out of our websites.</p>
          <p className="leading-7 [&:not(:first-child)]:mt-3">
            The first time you accessed our website you should have seen an overlay which explained that by continuing to access our site, you are
            consenting to our use of cookies. However, if you do wish to disable our cookies then please follow the instructions on our “How to Manage Cookies” page.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-3">
            Please remember that if you do choose to disable cookies, you may find that certain sections of our website do not work properly
          </p>
        </div>
      </div>

      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">Do we track whether users open our emails?</h3>
        <div className="mt-3">
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Some of our emails may contain a single, campaign-unique “web beacon pixel” to tell us whether our emails are opened and verify any clicks through
            to links or advertisements within the email. We may use this information for purposes including determining which of our emails are more
            interesting to users, to query whether users who do not open our emails wish to continue receiving them and to inform our advertisers in aggregate
            how many users have clicked on their advertisements. The pixel will be deleted when you delete the email. If you do not wish the pixel to be
            downloaded to your device, you should select to receive emails from us in plain text rather than HTML.
          </p>
        </div>
      </div>

      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-3">LIST OF COOKIES & HOW TO DISABLE THOSE COOKIES</h3>
        <p className="leading-7 [&:not(:first-child)]:mt-3">To opt out of various cookies, please follow as below:</p>
        <div className="my-6 w-full overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">COOKIES</th><th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right" style={{width: '90px'}}>OPTOUT</th><th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"><span>REASON WE USE / DESCRIPTION</span></th>
              </tr>
            </thead>
            <tbody>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">Essential</td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">N/A</td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">There is no option to opt out of these cookies. It help us to track if you have opted out of other cookie technologies or how many users have visited our website or mobile app.</td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">Functionality & Third Party</td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Go to Google Chrome (or any other browser) settings and disable cookies.
                </td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  You not able to use many features on website & applications like authentication and signup. If you opt out these
                  cookies, we will log you out if you are already logged in. you may not able to use any third party social plugins, relevant product ads from
                  our partners or affiliates and not able to use many other such features.
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">Internet Based Ad Cookies</td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"><a href="http://www.aboutads.info/choices/" rel="noopener noreferrer" target="_blank">Click here</a></td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Any internet based ads can be disabled by going to the provided link. It is recommended to frequently visit that page regularly
                  review your coices.
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">Pixels</td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">Member Only</td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Right now, we are not sending any promotional emails.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">FURTHER INFORMATION</h3>
        <p className="leading-7 [&:not(:first-child)]:mt-3">
          If you have any questions about our use of cookies or other technologies, please email us at admin@postfoo.com
        </p>
      </div>
    </div>
  )
}

export default Page
