import React, { useState } from "react";
import ReactPhoneInput from "react-phone-input-2";
// import "./styles.css";
import "react-phone-input-2/lib/style.css";

function Index() {
  const handleOnChange = (...args) => {
    console.log(args);
  };

  return (
    <div className="App">
        <ReactPhoneInput
          defaultCountry="pl"
          containerStyle={{ marginTop: "15px"}}
          searchClass="search-class"
          searchStyle={{ margin: "0", width: "97%", height: "30px" }}
          enableSearch
          enableSearchField
          disableSearchIcon
        />
    </div>
  );
}


export default Index;




























// import React, { useState } from "react";
// import ReactPhoneInput from "react-phone-input-2";
// import "./styles.css";
// import "react-phone-input-2/lib/style.css";

// function Index() {
//   const handleOnChange = (...args) => {
//     console.log(args);
//   };

//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <div style={{ display: "inline-block", verticalAlign: "top" }}>
//         <p>v1.2.1</p>
//         <p>Exclude countries (usa, canada)</p>
//         <ReactPhoneInput defaultCountry="no" excludeCountries={["us", "ca"]} />
//         <p>Only countries</p>
//         <ReactPhoneInput defaultCountry="gb" onlyCountries={["gb", "es"]} />
//         <p>Preferred countries</p>
//         <ReactPhoneInput
//           defaultCountry="it"
//           preferredCountries={["it", "se"]}
//         />
//       </div>

//       <div style={{ display: "inline-block", marginLeft: "40px" }}>
//         <p>v2</p>
//         <p>Auto country detect by value</p>
//         <ReactPhoneInput value="+3802343252" />
//         <p>Disabled area codes with disableAreaCodes</p>
//         <ReactPhoneInput defaultCountry="us" disableAreaCodes />
//         <p>Disabled flag by default</p>
//         <p>Customizable placeholder</p>
//         <p>Customizable styles</p>
//         <ReactPhoneInput
//           disableAreaCodes
//           placeholder="Type your phone here"
//           inputStyle={{
//             width: "300px",
//             height: "35px",
//             fontSize: "13px",
//             paddingLeft: "48px",
//             borderRadius: "5px"
//           }}
//           buttonStyle={{ borderRadius: "5px 0 0 5px" }}
//           dropdownStyle={{ width: "300px" }}
//         />
//         <p>Customizable classes</p>
//         <ReactPhoneInput
//           containerClass={"react-tel-input"}
//           inputClass={"custom-phone-input"}
//           buttonClass={"custom-phone-button"}
//           dropdownClass={"custom-dropdown"}
//         />
//       </div>

//       <div
//         style={{
//           display: "inline-block",
//           marginLeft: "40px",
//           verticalAlign: "top",
//           marginTop: "35px"
//         }}
//       >
//         <p>Custom region selected: {`{'europe'}`}</p>
//         <ReactPhoneInput defaultCountry="it" regions={"europe"} />
//         <p>Custom regions selected: {`{['north-america', 'carribean']}`}</p>
//         <ReactPhoneInput
//           defaultCountry="ca"
//           regions={["north-america", "carribean"]}
//         />
//         <p>Disabled dropdown and country code</p>
//         <ReactPhoneInput
//           onlyCountries={["us"]}
//           defaultCountry="us"
//           placeholder="(702) 123-4567"
//           disableAreaCodes
//           disableCountryCode
//           disableDropdown
//         />
//         <p>Localization</p>
//         <p>Non-editable country code</p>
//         <p>Autofocus</p>
//         <ReactPhoneInput
//           defaultCountry="de"
//           onlyCountries={["de", "es"]}
//           localization={{ Germany: "Deutschland", Spain: "España" }}
//           countryCodeEditable={false}
//           inputExtraProps={{
//             name: "tel",
//             required: true,
//             autoFocus: true
//           }}
//         />
//       </div>
//       <div
//         style={{
//           display: "inline-block",
//           marginLeft: "40px",
//           verticalAlign: "top",
//           marginTop: "35px"
//         }}
//       >
//         <p>Search field</p>
//         <ReactPhoneInput defaultCountry="nl" enableSearchField />
//         <ReactPhoneInput
//           defaultCountry="pl"
//           containerStyle={{ marginTop: "15px" }}
//           searchClass="search-class"
//           searchStyle={{ margin: "0", width: "97%", height: "30px" }}
//           enableSearch
//           enableSearchField
//           disableSearchIcon
//         />
//         <p>Custom masks</p>
//         <ReactPhoneInput
//           defaultCountry="at"
//           onlyCountries={["fr", "at"]}
//           masks={{
//             fr: "+.. (...) ..-..-..",
//             at: "+.. (....) ...-....",
//             zz: "+.. ... ..."
//           }}
//         />
//         <p>State manipulations</p>
//         <ReactPhoneInput
//           onChange={(value, country) => {
//             console.log(value, country);
//             this.setState({ value });
//           }}
//         />
//         <ReactPhoneInput
//           containerStyle={{ marginTop: "15px", marginBottom: "15px" }}
//         />
//         <button
//           onClick={() => {
//             if (this.state.defaultCountry == "br") {
//               this.setState({ defaultCountry: "it" });
//             } else {
//               this.setState({ defaultCountry: "br" });
//             }
//           }}
//         >
//           Change default country
//         </button>
//       </div>
//     </div>
//   );
// }


// export default Index;