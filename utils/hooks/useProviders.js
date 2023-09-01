import { useEffect, useState } from "react";
import { getProviders } from "next-auth/react";


export function UseProviders() {
    const [providers, setProviders] = useState(null);

    useEffect(() => {
        (async () => {
          const response = await getProviders();
          setProviders(response);
        })();
      }, []);
  
   
  
      document.addEventListener("click", handleClick, true);
  
      return () => {
        document.removeEventListener("click", handleClick, true);
      };
    }, [ref, cb]);
  
    return ref;
  }


