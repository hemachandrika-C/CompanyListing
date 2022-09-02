import React from 'react'
import "./mockcompany.css";

function CompanyProps({valueItems,itemsState,searchEvent}) {
  const searchTerm = itemsState.toLowerCase();
  let data = valueItems.filter((item) => {
    const fullName = item.companyname.toLowerCase();
    return (
      searchTerm &&
      fullName.startsWith(searchTerm) &&
      fullName !== searchTerm
    );
  })

 let slicedData =  data.slice(0, 10)

  return (
    <div>
         {slicedData.map((item) => (
              <div
                onClick={() => searchEvent(item.companyname,item.id)}
                className="dropdown-itemmain"
                key={item.id}
              >
                {item.companyname}
              </div>
            ))}
    </div>
  )
}

export default CompanyProps