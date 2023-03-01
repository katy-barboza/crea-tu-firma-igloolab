import { useEffect, useState } from "react";
import { returnInitialsWords } from "./utils/returnInitialsWords";

function App() {
  const [info, setInfo] = useState<Info>({
    name: "Angela R. Colmenares",
    job: "PROJECT MANAGER",
    email: "contenidos@igloolab.co",
    phone: "+57 123 456 789",
  });

  // get data from local storage
  const getData = () => {
    const data = localStorage.getItem("info");
    if (data) {
      setInfo(JSON.parse(data));
    }
  };

  // save data to local storage
  const saveData = (info: Info) => {
    localStorage.setItem("info", JSON.stringify(info));
  };

  const onChangeInput = (e: any) => {
    setInfo({ ...info, [e.target.id]: e.target.value });
    saveData({ ...info, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Crea tu firma igloolab - 2022/2023</h1>

      <div className="form">
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            value={info.name}
            onChange={onChangeInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="job">Cargo</label>
          <input
            type="text"
            id="job"
            value={info.job}
            onChange={onChangeInput}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={info.email}
            onChange={onChangeInput}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Teléfono</label>
          <input
            type="text"
            id="phone"
            value={info.phone}
            onChange={onChangeInput}
          />
        </div>
      </div>

      <table
        id="firma"
        width={420}
        border={0}
        cellSpacing={0}
        cellPadding={0}
        style={{
          fontFamily: '"opensans", sans-serif',
          color: "rgb(80, 80, 80)",
        }}
      >
        <tbody>
          <tr>
            <td align="center">
              <img
                src="https://igloolab.co/firmas/igloolab-2023.gif"
                style={{ width: "100%" }}
                title="Igloo-Lab"
              />
            </td>
            <td align="center" style={{ width: "20px" }} />
            <td align="left" style={{ width: "250px" }}>
              <p
                style={{
                  margin: 0,
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "#4d4d4d",
                }}
              >
                {info.name}
              </p>
              <p style={{ margin: "8px 0", fontSize: "0.7rem" }}>
                <span
                  style={{
                    marginRight: "10px",
                    fontWeight: "bold",
                    color: "#4d4d4d",
                  }}
                >
                  {returnInitialsWords(info.job)}
                </span>
                <span
                  style={{ borderLeft: "1px solid #ccc", paddingLeft: "10px" }}
                >
                  {info.job}
                </span>
              </p>
              <p
                style={{
                  margin: "5px 0",
                  fontSize: "0.8rem",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <span style={{ marginRight: "8px" }}>
                  <img
                    style={{ width: "25px" }}
                    src="https://igloolab.co/firmas/icon-mail-2023.png"
                    title="Igloo-Lab"
                  />{" "}
                </span>
                <span style={{ color: "#4d4d4d" }}>
                  <a
                    href={"mailto:" + info.email}
                    style={{ color: "#4d4d4d", textDecoration: "none" }}
                  >
                    {info.email}
                  </a>
                </span>
              </p>
              <p
                style={{
                  margin: "5px 0 0 0",
                  padding: "4px 0px",
                  fontSize: "0.8rem",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <span style={{ marginRight: "8px" }}>
                  <img
                    style={{ width: "25px" }}
                    src="https://igloolab.co/firmas/icon-phone-2023.png"
                    title="Igloo-Lab"
                  />
                </span>
                <span>
                  <a
                    href={"tel:" + info.phone}
                    style={{ color: "#4d4d4d", textDecoration: "none" }}
                  >
                    {info.phone}
                  </a>
                </span>
                <span style={{ marginRight: "8px" }}>
                  <img
                    style={{ width: "25px", paddingLeft: "20px" }}
                    src="https://igloolab.co/firmas/icon-site-2023.png"
                    title="Igloo-Lab"
                  />
                </span>
                <span>
                  <a
                    href="https://igloolab.co/"
                    style={{
                      color: "#4d4d4d",
                      textDecoration: "none",
                      fontSize: "0.8rem",
                      textAlign: "right",
                    }}
                  >
                    igloolab.co
                  </a>
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={3} align="right" style={{ width: "420px" }} />
          </tr>
          <tr>
            <td
              colSpan={3}
              align="left"
              style={{ width: "420px", padding: "10px 0px" }}
            >
              <img
                src="https://igloolab.co/firmas/firma-footer-2023.png"
                width="100%"
                alt=""
              />
            </td>
          </tr>
        </tbody>
      </table>

      <footer>
        <p>
          hecho con{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          por Deimer Romero y Andrés Vizcaíno
        </p>
      </footer>
    </div>
  );
}

export default App;
