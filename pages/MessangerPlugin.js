import { useEffect } from "react";

const FacebookChat = () => {
  useEffect(() => {
    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: "v17.0",
      });
    };

    function loadFacebookSDK(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    }

    if (typeof window !== "undefined") {
      if (!document.getElementById("facebook-jssdk")) {
        loadFacebookSDK(document, "script", "facebook-jssdk");
      }
    }
  }, []);

  return (
    <>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "103925448647488");
            chatbox.setAttribute("attribution", "biz_inbox");
          `,
        }}
      />
    </>
  );
};

export default FacebookChat;
