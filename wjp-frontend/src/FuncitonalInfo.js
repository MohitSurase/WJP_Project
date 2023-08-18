import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Navbar3 from "./Navbar3";
import Footer from "./Footer";

// function FunctionalInfo() {
//   const [userlist, setUserList] = useState([]);

//   useEffect(() => {
//     getAllUserAction();
//   }, []);

//   let getAllUserAction = async () => {
//     let url = "http://localhost:4000/findall";

//     let res = await fetch(url);
//     let list = await res.json();

//     setUserList([...list]);
//   };

//   return (
//     <>
//       <Navbar />
//       <Navbar3 />
//       {userlist.map((item) => (
//         <>
//           <div>
//             {item.username} {item.password} {item.email} {item.mobile}
//           </div>
//         </>
//       ))}
//     </>
//   );
// }

// export default FunctionalInfo;

function FunctionalInfo() {
  const [packageList, setPackageList] = useState([]);

  useEffect(() => {
    getPackageList();
  }, []);

  const getPackageList = async () => {
    let url = "http://localhost:4000/packagelist";
    let res = await fetch(url);
    let list = await res.json();

    setPackageList([...list]);
  };

  return (
    <>
      <Navbar3 />
      <p></p>
      <div style={{ height: "50px" }}></div>
      <div className="row justify-content-center mt-5 mb-5">
        <div className="col-6">
          <table class="table table-hover table-bordered border-dark text-center">
            <thead>
              <tr>
                <th scope="col">City</th>
                <th scope="col">Waste Type</th>
                <th scope="col">Charges</th>
              </tr>
            </thead>
            <tbody>
              {packageList.map((item) => (
                <>
                  <tr>
                    <td>{item.City}</td>
                    <td>{item.WasteType}</td>
                    <td>{item.Charges}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ height: "50px" }}></div>
      <Footer />
    </>
  );
}

export default FunctionalInfo;
