import React, { useEffect } from "react";

function PaymentRedirection({ redirection_url }) {
  useEffect(() => {
      console.log(redirection_url)
    window.location.replace(redirection_url);
    
  }, []);

  return (
    <section>
      If not automatically redirected click <a href={redirection_url}> here</a>
    </section>
  );
}

export default PaymentRedirection;
