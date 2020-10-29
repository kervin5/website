const React = require("react")
exports.onRenderBody = ({
  setHeadComponents,
  setPreBodyComponents,
  setPostBodyComponents,
}) => {
  setPostBodyComponents([
    <script
      key="3safaslkj"
      type="text/javascript"
      src="https://account.snatchbot.me/script.js"
    />,
    <script
      key="3safaslkfffj"
      type="text/javascript"
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
