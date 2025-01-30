import * as React from 'react'

const NoticeUnsupportedBrowser: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="grid gap-1">
        <h1 className="font-heading text-xl">Your browser is not supported</h1>
        <p className="text-sm text-muted-foreground">PostFoo is not supported on your browser. Please use a supported browser to use PostFoo. Please try using one of the following browsers:</p>
        <br />
        <div className="flex flex-row">
          <a className="display-block flex flex-col items-center justify-center mr-4" href="https://www.google.com/chrome/">
            <img src="/images/browsers/chrome.svg" alt="Chrome" width={30} height={30} />
            <p className="text-sm text-muted-foreground text-center">Chrome</p>
          </a>
          <a className="display-block flex flex-col items-center justify-center mr-4" href="https://www.microsoft.com/en-us/edge">
            <img src="/images/browsers/edge.svg" alt="Edge" width={30} height={30} />
            <p className="text-sm text-muted-foreground text-center">Edge</p>
          </a>
          <a className="display-block flex flex-col items-center justify-center mr-4" href="https://www.mozilla.org/en-US/firefox/new/">
            <img src="/images/browsers/firefox.svg" alt="Firefox" width={30} height={30} />
            <p className="text-sm text-muted-foreground text-center">Firefox</p>
          </a>
          <a className="display-block flex flex-col items-center justify-center mr-4" href="https://www.apple.com/safari/">
            <img src="/images/browsers/safari-ios.svg" alt="Safari" width={30} height={30} />
            <p className="text-sm text-muted-foreground text-center">Safari</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default NoticeUnsupportedBrowser
