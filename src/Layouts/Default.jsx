import React,{useEffect} from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Default() {
  useEffect(() => {
    function chatBot() {
      // window.__be = window.__be || {};
      // window.__be.id = "65df5eb5b64d8b000654e388";
      // (function() {
      //   var be = document.createElement('script');
      //   be.type = 'text/javascript';
      //   be.async = true;
      //   be.src =
      //     ('https:' == document.location.protocol ? 'https://' : 'http://') +
      //     'cdn.chatbot.com/widget/plugin.js';
      //   var s = document.getElementsByTagName('script')[0];
      //   s.parentNode.insertBefore(be, s);
      // })();
      window.__lc = window.__lc || {};
      window.__lc.license = 17283768;
      ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))

    }

    chatBot();
  }, []);
  return (
    <>
    <NavBar />
    <div className='min-h-screen'>
      <Outlet />
    </div>
    <Footer />
    </>
  )
}
