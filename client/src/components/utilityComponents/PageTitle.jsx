import React, { useEffect } from "react";

function PageTitle(title) {
  useEffect(() => {
    document.title = `MediCare+ || ${title}`;
  }, [title]);

  return null;
}

export default PageTitle;
