const React = require("react")
exports.onRenderBody = ({
  setHeadComponents,
  setPreBodyComponents,
  setPostBodyComponents,
}) => {
  setPostBodyComponents([
    <script
      key="3"
      type="text/javascript"
      src="https://account.snatchbot.me/script.js"
    />,
    <script
      dangerouslySetInnerHTML={{
        __html: `

        if(window) {
            window.sntchChat.Init(78783)
        }
        
   	 `,
      }}
    />,
  ])
}
