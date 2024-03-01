import React,{useEffect} from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom';

export default function Default() {
  useEffect(() => {
    function chatBot() {
      window.__be = window.__be || {};
      window.__be.id = "65df5eb5b64d8b000654e388";
      (function() {
        var be = document.createElement('script');
        be.type = 'text/javascript';
        be.async = true;
        be.src =
          ('https:' == document.location.protocol ? 'https://' : 'http://') +
          'cdn.chatbot.com/widget/plugin.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(be, s);
      })();
    }

    chatBot();
  }, []);
  return (
    <>
    <NavBar />
    <Outlet />
    </>
  )
}
